// Import GSAP essentials
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import lottie from 'lottie-web';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function initScrollAnimation(): void {
  const scrollContainer: HTMLElement | null = document.getElementById('scroll');
  if (!scrollContainer) {
    console.warn('Element with id "scroll" not found');
    return;
  }

  const bubbles = [
    { num: 1, top: 59, left: 79 },
    { num: 2, top: 90, left: 322 },
    { num: 3, top: 188, left: 523 },
    { num: 4, top: 239, left: 127 },
    { num: 5, top: 449, left: 104 },
    { num: 6, top: 608, left: 332 },
    { num: 7, top: 707, left: 147 },
    { num: 8, top: 722, left: 520 },
    { num: 9, top: 75, left: 721 },
    { num: 10, top: 210, left: 870 },
    { num: 11, top: 594, left: 675 },
    { num: 12, top: 732, left: 885 },
    { num: 13, top: 564, left: 1060 },
    { num: 14, top: 91, left: 1308 },
    { num: 15, top: 206, left: 1472 },
    { num: 16, top: 271, left: 1305 },
    { num: 17, top: 379, left: 1447 },
    { num: 18, top: 641, left: 1232 },
    { num: 19, top: 721, left: 1449 },
  ];

  bubbles.forEach(({ num, top, left }) => {
    const el = document.querySelector(`[bubble-number="${num}"]`);
    if (!el) return;

    const htmlEl = el as HTMLElement;
    htmlEl.style.position = 'absolute';
    htmlEl.style.left = `${left}px`;
    const startTop = top + (Math.random() * 200 - 100);
    htmlEl.style.top = `${startTop}px`;

    gsap.to(el, {
      top: top,
      duration: 1.5,
      ease: 'power2.out',
    });
  });

  let lottieAnimation: ReturnType<typeof lottie.loadAnimation> | null = null;
  const lottieElement: HTMLElement | null = document.getElementById('section-lottie');

  if (lottieElement) {
    lottieAnimation = lottie.loadAnimation({
      container: lottieElement,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: 'https://cdn.prod.website-files.com/65b94b2bab54c86c1cd618a8/6827264cc032f162afebc33f_Copy%20of%20h3______.json'
    });
    lottieAnimation.goToAndStop(0, true);
  }

  const textElement: HTMLElement | null = document.getElementById('reveal-text');
  const words: HTMLSpanElement[] = [];

  if (textElement) {
    const text: string = textElement.textContent?.trim() || '';
    textElement.textContent = '';
    const wordsArray: string[] = text.split(/\s+/);

    for (let i = 0; i < wordsArray.length; i++) {
      const wordSpan: HTMLSpanElement = document.createElement('span');
      wordSpan.textContent = wordsArray[i];
      wordSpan.style.opacity = '0.5';
      wordSpan.style.display = 'inline-block';
      wordSpan.style.transition = 'opacity 0.1s ease';
      wordSpan.classList.add('reveal-word');
      wordSpan.dataset.index = i.toString();
      wordSpan.style.marginRight = '0em';

      textElement.appendChild(wordSpan);
      words.push(wordSpan);

      if (i < wordsArray.length - 1) {
        textElement.appendChild(document.createTextNode(' '));
      }
    }
  }

  const bubblesContainer: HTMLElement | null = document.getElementById('bubbles');
  if (!bubblesContainer) {
    console.warn('Element with id "bubbles" not found');
  }

  ScrollTrigger.create({
    trigger: '#scroll',
    start: 'top top',
    end:() => `${document.getElementById('scroll')!.offsetHeight}px`,
    markers: false,
    scrub: 0.5,
    onUpdate: (self): void => {
      const firstAnimProgress = 0.25;
      const secondAnimProgress = 0.5;
      const textRevealStart = secondAnimProgress;
      const textRevealEnd = textRevealStart + 0.3;
      const thirdAnimProgress = 0.75;
      
      // CHANGED: Start the bubble animation earlier at 0.8 instead of 0.95
      const lottieAnimProgress = 0.95;
      const bubbleAnimStart = 0.8;  // This gives 20% of the scroll for the bubble animation

      if (self.progress < firstAnimProgress) {
        const opacity = gsap.utils.interpolate(1, 0, self.progress / firstAnimProgress);
        gsap.set('[data-scroll-item="1"]', { opacity });
      } else {
        gsap.set('[data-scroll-item="1"]', { opacity: 0 });
      }

      if (self.progress >= firstAnimProgress && self.progress < secondAnimProgress) {
        const adjustedProgress = (self.progress - firstAnimProgress) / (secondAnimProgress - firstAnimProgress);
        const opacity = gsap.utils.interpolate(0, 1, adjustedProgress);
        gsap.set('[data-scroll-item="2"]', { opacity });
      } else if (self.progress < firstAnimProgress) {
        gsap.set('[data-scroll-item="2"]', { opacity: 0 });
      } else {
        gsap.set('[data-scroll-item="2"]', { opacity: 1 });
      }

      if (self.progress >= textRevealStart && self.progress <= textRevealEnd && words.length > 0) {
        const textProgress = (self.progress - textRevealStart) / (textRevealEnd - textRevealStart);
        const wordsToReveal = Math.floor(textProgress * words.length);
        words.forEach((word, index) => {
          word.style.opacity = index <= wordsToReveal ? '1' : '0.2';
        });
      } else if (self.progress < textRevealStart && words.length > 0) {
        words.forEach(word => word.style.opacity = '0.2');
      } else if (self.progress > textRevealEnd && words.length > 0) {
        words.forEach(word => word.style.opacity = '1');
      }

      if (self.progress >= secondAnimProgress && self.progress < thirdAnimProgress) {
        const adjustedProgress = (self.progress - secondAnimProgress) / (thirdAnimProgress - secondAnimProgress);
        const opacity = gsap.utils.interpolate(0, 1, adjustedProgress);
        gsap.set('#section-lottie', { opacity });
      } else if (self.progress < secondAnimProgress) {
        gsap.set('#section-lottie', { opacity: 0 });
      } else {
        gsap.set('#section-lottie', { opacity: 1 });
      }

      if (self.progress >= thirdAnimProgress) {
        const adjustedProgress = (self.progress - thirdAnimProgress) / (1 - thirdAnimProgress);
        const opacity = gsap.utils.interpolate(1, 0, adjustedProgress);
        gsap.set('#hero-lottie', { opacity });
      } else {
        gsap.set('#hero-lottie', { opacity: 1 });
      }

      if (lottieAnimation && self.progress >= thirdAnimProgress && self.progress <= lottieAnimProgress) {
        const lottieProgress = (self.progress - thirdAnimProgress) / (lottieAnimProgress - thirdAnimProgress);
        const totalFrames = lottieAnimation.totalFrames;
        const currentFrame = Math.floor(lottieProgress * totalFrames);
        lottieAnimation.goToAndStop(currentFrame, true);
      } else if (lottieAnimation && self.progress < thirdAnimProgress) {
        lottieAnimation.goToAndStop(0, true);
      } else if (lottieAnimation && self.progress > lottieAnimProgress) {
        lottieAnimation.goToAndStop(lottieAnimation.totalFrames - 1, true);
      }

      // MODIFIED: Start the bubble animation earlier to give it more time
      if (bubblesContainer) {
        if (self.progress >= bubbleAnimStart) {
          // This gives it 20% of the total scroll (from 0.8 to 1.0) instead of just 5%
          const bubbleProgress = (self.progress - bubbleAnimStart) / (1 - bubbleAnimStart);
          const easedProgress = gsap.parseEase('power2.out')(bubbleProgress);
          
          // Slower fade-in by using a more gradual opacity curve
          const opacity = gsap.utils.clamp(0, 1, easedProgress * 1.2);
          
          // Make the Y position change more gradual
          const yPosition = gsap.utils.interpolate(60, 0, easedProgress);

          gsap.set(bubblesContainer, {
            opacity: opacity,
            y: `${yPosition}%`
          });
        } else {
          gsap.set(bubblesContainer, {
            opacity: 0,
            y: '60%'
          });
        }
      }
    }
  });

  console.log('Scroll animations initialized for #scroll with improved bubble animation timing.');
}

export { initScrollAnimation };