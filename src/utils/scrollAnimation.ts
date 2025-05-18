// Import GSAP essentials
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import lottie from 'lottie-web';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

/**
 * Initializes scroll-based animations for elements within the #scroll container
 * Animates opacity transitions, plays a Lottie animation, and reveals text word by word based on scroll
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
  const words: HTMLSpanElement[] = [];
  
  if (textElement) {
    // Get the text content
    const text: string = textElement.textContent?.trim() || '';
    
    // Clear the text element
    textElement.textContent = '';
    
    // Split the text into words
    const wordsArray: string[] = text.split(/\s+/);
    
    // Create a span for each word
    for (let i = 0; i < wordsArray.length; i++) {
      const wordSpan: HTMLSpanElement = document.createElement('span');
      wordSpan.textContent = wordsArray[i];
      wordSpan.style.opacity = '0.5'; // Start with 50% opacity
      wordSpan.style.display = 'inline-block'; // Ensure each word can be animated independently
      wordSpan.style.transition = 'opacity 0.1s ease'; // Smooth transition for opacity changes
      wordSpan.classList.add('reveal-word');
      wordSpan.dataset.index = i.toString();
      wordSpan.style.marginRight = '0em'; // Add space between words
      
      textElement.appendChild(wordSpan);
      words.push(wordSpan);
      
      // No need to add space after the last word
      if (i < wordsArray.length - 1) {
        // Add space between words
        const space = document.createTextNode(' ');
        textElement.appendChild(space);
      }
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
      
      // Text reveal animation: words reveal one by one
      if (self.progress >= textRevealStart && self.progress <= textRevealEnd && words.length > 0) {
        // Calculate how many words should be revealed
        const textProgress: number = (self.progress - textRevealStart) / (textRevealEnd - textRevealStart);
        const wordsToReveal: number = Math.floor(textProgress * words.length);
        
        // Reveal words one by one
        words.forEach((word: HTMLSpanElement, index: number) => {
          if (index <= wordsToReveal) {
            word.style.opacity = '1'; // Full opacity for revealed words
          } else {
            word.style.opacity = '0.2'; // Low opacity for unrevealed words
          }
        });
      } else if (self.progress < textRevealStart && words.length > 0) {
        // Reset all words to low opacity before the reveal starts
        words.forEach((word: HTMLSpanElement) => {
          word.style.opacity = '0.2';
        });
      } else if (self.progress > textRevealEnd && words.length > 0) {
        // Ensure all words are fully revealed after the animation completes
        words.forEach((word: HTMLSpanElement) => {
          word.style.opacity = '1';
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


      // After your Lottie animation code, add this new section:
// Define progress thresholds for the bubbles animation
const bubblesAnimStart: number = lottieAnimProgress; // Start right after Lottie animation completes
const bubblesAnimEnd: number = 1.0; // End at the very bottom of the scroll

// Bubbles animation: fade in and move from 50% to 100% y position
if (self.progress >= bubblesAnimStart && self.progress <= bubblesAnimEnd) {
  // Map progress from bubblesAnimStart-bubblesAnimEnd to 0-1 for the animation
  const bubblesProgress: number = (self.progress - bubblesAnimStart) / (bubblesAnimEnd - bubblesAnimStart);
  
  // Calculate opacity (0 to 1) - fade in quickly at the beginning
  const opacity: number = Math.min(1, bubblesProgress * 3); // Fade in 3x faster
  
  // Calculate y position (50% to 100%)
  const yPosition: number = gsap.utils.interpolate(100, 0, bubblesProgress);
  
  // Apply transformations
  gsap.set('#bubbles', { 
    opacity: opacity,
    y: `${yPosition}%`
  });
} else if (self.progress < bubblesAnimStart) {
  // Ensure initial state before the animation starts
  gsap.set('#bubbles', { 
    opacity: 0,
    y: '100%'
  });
} else {
  // Ensure final state after the animation completes
  gsap.set('#bubbles', { 
    opacity: 1,
    y: '0%'
  });
}
    }
  });
  
  console.log('Scroll animations initialized for #scroll with Lottie animation and word-by-word text reveal');
}

// Export the function
export { initScrollAnimation };