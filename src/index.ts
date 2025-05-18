/* eslint-disable no-console */
window.onbeforeunload = function() {
  window.scrollTo(0, 0);
};

import { initScrollAnimation } from '$utils/scrollAnimation';

import { fadeIn, fadeOut } from './utils/fadeAnimations';
import { loadAndPlayLottie } from './utils/lottieLoader';
import { destroyLottieAnimation } from './utils/lottiePlayer';

window.scrollTo(0, 0);

document.addEventListener('DOMContentLoaded', () => {
  window.scrollTo(0, 0);

  // Disable scrolling initially
  document.body.style.overflow = 'hidden';
  
  const loaderLottie = 'https://cdn.prod.website-files.com/65b94b2bab54c86c1cd618a8/682725b636da1042ae7797f8_H1_gradient.json';
  const heroLottie = 'https://cdn.prod.website-files.com/65b94b2bab54c86c1cd618a8/68272532ccd07135e49d65f4_H2.json';
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const sectionLottie='https://cdn.prod.website-files.com/65b94b2bab54c86c1cd618a8/6827264cc032f162afebc33f_Copy%20of%20h3______.json';
  
  const myAnimation = loadAndPlayLottie('lottie-loader', loaderLottie);
  
  if (myAnimation) {
    // Add a completion event to the Lottie animation
    myAnimation.addEventListener('complete', () => {
      console.log('Lottie animation completed');
      
      // Fade in the text block after Lottie completes
      fadeIn('#text-block-1', 1.5, 0.1, () => {
        console.log('Text block fade-in complete');

        // Fade in the hero lottie at the same time as loader fade-out
        fadeIn('#hero-lottie', 0, 0, () => {
           
          console.log('Hero lottie fade-in complete');
          
          // Load and play the hero animation
          loadAndPlayLottie('hero-lottie', heroLottie);
        });
        
        // Simultaneously fade out the loader animation after a short delay
        setTimeout(() => {
          fadeOut('#lottie-loader', 0, 0, () => {
             
            console.log('Loader fade-out complete');
            
            // Enable scrolling after the animation sequence is complete
            document.body.style.overflow = '';
            initScrollAnimation();
          });
        }, 500); // 500ms delay
      });
    });
    
    // Clean up on page unload
    window.addEventListener('beforeunload', () => {
      destroyLottieAnimation(myAnimation);
    });
  }
});