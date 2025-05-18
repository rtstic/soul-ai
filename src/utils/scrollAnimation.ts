// Import GSAP essentials
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import lottie from 'lottie-web';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

/**
 * Initializes scroll-based animations for elements within the #scroll container
 * Animates opacity transitions, plays a Lottie animation, and reveals text letter by letter based on scroll
 */
function initScrollAnimation(): void {
  // Check if target elements exist
  const scrollContainer: HTMLElement | null = document.getElementById('scroll');
  if (!scrollContainer) {
    console.warn('Element with id "scroll" not found');
    return;
  }

  // Initialize Lottie animation
  let lottieAnimation: ReturnType<typeof lottie.loadAnimation> | null = null;
  
  // Get Lottie element
  const lottieElement: HTMLElement | null = document.getElementById('section-lottie');
  
  // Initialize Lottie animation if the element exists
  if (lottieElement) {
    lottieAnimation = lottie.loadAnimation({
      container: lottieElement,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: 'https://cdn.prod.website-files.com/65b94b2bab54c86c1cd618a8/6827264cc032f162afebc33f_Copy%20of%20h3______.json'
    });
    
    // Set initial frame to 0
    lottieAnimation.goToAndStop(0, true);
  }

  // Set up text reveal animation
  const textElement: HTMLElement | null = document.getElementById('reveal-text');
  const characters: HTMLSpanElement[] = [];
  
  if (textElement) {
    // Get the text content
    const text: string = textElement.textContent?.trim() || '';
    
    // Clear the text element
    textElement.textContent = '';
    
    // Create a span for each character
    for (let i = 0; i < text.length; i++) {
      const charSpan: HTMLSpanElement = document.createElement('span');
      charSpan.textContent = text[i];
      charSpan.style.opacity = '0.5'; // Start with 50% opacity
      charSpan.style.display = 'inline-block'; // Ensure each character can be animated independently
      charSpan.style.transition = 'opacity 0.1s ease'; // Smooth transition for opacity changes
      charSpan.classList.add('reveal-char');
      charSpan.dataset.index = i.toString();
      
      textElement.appendChild(charSpan);
      characters.push(charSpan);
    }
  }

  // Create a ScrollTrigger for the sequence of animations
  ScrollTrigger.create({
    trigger: '#scroll',
    start: 'top top',
    end: 'bottom bottom',
    markers: false, // Set to true during development
    onUpdate: (self): void => {
      // Define progress thresholds for each animation
      const firstAnimProgress: number = 0.25; // When first animation completes
      const secondAnimProgress: number = 0.5; // When second animation completes
      const textRevealStart: number = secondAnimProgress; // Text reveal starts with third animation
      const textRevealEnd: number = textRevealStart + 0.3; // Text reveal happens over 30% of scroll
      const thirdAnimProgress: number = 0.75; // When third animation completes
      const lottieAnimProgress: number = 0.95; // When Lottie animation completes (thirdAnimProgress + 0.2)
      
      // First animation: data-scroll-item=1 fades out
      if (self.progress < firstAnimProgress) {
        // Map progress from 0-0.25 to 1-0 for opacity
        const opacity: number = gsap.utils.interpolate(1, 0, self.progress / firstAnimProgress);
        gsap.set('[data-scroll-item="1"]', { opacity: opacity });
      } else {
        // Ensure opacity is 0 after threshold
        gsap.set('[data-scroll-item="1"]', { opacity: 0 });
      }
      
      // Second animation: data-scroll-item=2 fades in
      if (self.progress >= firstAnimProgress && self.progress < secondAnimProgress) {
        // Map progress from 0.25-0.5 to 0-1 for opacity
        const adjustedProgress: number = (self.progress - firstAnimProgress) / (secondAnimProgress - firstAnimProgress);
        const opacity: number = gsap.utils.interpolate(0, 1, adjustedProgress);
        gsap.set('[data-scroll-item="2"]', { opacity: opacity });
      } else if (self.progress < firstAnimProgress) {
        // Ensure opacity is 0 before threshold
        gsap.set('[data-scroll-item="2"]', { opacity: 0 });
      } else {
        // Ensure opacity is 1 after threshold
        gsap.set('[data-scroll-item="2"]', { opacity: 1 });
      }
      
      // Text reveal animation: letters reveal one by one
      if (self.progress >= textRevealStart && self.progress <= textRevealEnd && characters.length > 0) {
        // Calculate how many characters should be revealed
        const textProgress: number = (self.progress - textRevealStart) / (textRevealEnd - textRevealStart);
        const charsToReveal: number = Math.floor(textProgress * characters.length);
        
        // Reveal characters one by one
        characters.forEach((char: HTMLSpanElement, index: number) => {
          if (index <= charsToReveal) {
            char.style.opacity = '1'; // Full opacity for revealed characters
          } else {
            char.style.opacity = '0.2'; // Half opacity for unrevealed characters
          }
        });
      } else if (self.progress < textRevealStart && characters.length > 0) {
        // Reset all characters to half opacity before the reveal starts
        characters.forEach((char: HTMLSpanElement) => {
          char.style.opacity = '0.2';
        });
      } else if (self.progress > textRevealEnd && characters.length > 0) {
        // Ensure all characters are fully revealed after the animation completes
        characters.forEach((char: HTMLSpanElement) => {
          char.style.opacity = '1';
        });
      }
      
      // Third animation: section-lottie fades in
      if (self.progress >= secondAnimProgress && self.progress < thirdAnimProgress) {
        // Map progress from 0.5-0.75 to 0-1 for opacity
        const adjustedProgress: number = (self.progress - secondAnimProgress) / (thirdAnimProgress - secondAnimProgress);
        const opacity: number = gsap.utils.interpolate(0, 1, adjustedProgress);
        gsap.set('#section-lottie', { opacity: opacity });
      } else if (self.progress < secondAnimProgress) {
        // Ensure opacity is 0 before threshold
        gsap.set('#section-lottie', { opacity: 0 });
      } else {
        // Ensure opacity is 1 after threshold
        gsap.set('#section-lottie', { opacity: 1 });
      }
      
      // Fourth animation: hero-lottie fades out
      if (self.progress >= thirdAnimProgress) {
        // Map progress from 0.75-1 to 1-0 for opacity
        const adjustedProgress: number = (self.progress - thirdAnimProgress) / (1 - thirdAnimProgress);
        const opacity: number = gsap.utils.interpolate(1, 0, adjustedProgress);
        gsap.set('#hero-lottie', { opacity: opacity });
      } else {
        // Ensure opacity is 1 before threshold
        gsap.set('#hero-lottie', { opacity: 1 });
      }
      
      // Control Lottie animation progress based on scroll
      if (lottieAnimation && self.progress >= thirdAnimProgress && self.progress <= lottieAnimProgress) {
        // Map scroll progress to animation progress (0-1)
        const lottieProgress: number = (self.progress - thirdAnimProgress) / (lottieAnimProgress - thirdAnimProgress);
        
        // Get the total frames of the animation
        const totalFrames: number = lottieAnimation.totalFrames;
        
        // Calculate the current frame based on progress
        const currentFrame: number = Math.floor(lottieProgress * totalFrames);
        
        // Go to the specific frame
        lottieAnimation.goToAndStop(currentFrame, true);
      } else if (lottieAnimation && self.progress < thirdAnimProgress) {
        // Set to first frame if before the threshold
        lottieAnimation.goToAndStop(0, true);
      } else if (lottieAnimation && self.progress > lottieAnimProgress) {
        // Set to last frame if after the threshold
        lottieAnimation.goToAndStop(lottieAnimation.totalFrames - 1, true);
      }
    }
  });
  
  console.log('Scroll animations initialized for #scroll with Lottie animation and text reveal');
}

// Export the function
export { initScrollAnimation };