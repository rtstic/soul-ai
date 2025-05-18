import { fadeIn, fadeOut } from './utils/fadeAnimations';
import { loadAndPlayLottie } from './utils/lottieLoader';
import { destroyLottieAnimation } from './utils/lottiePlayer';

document.addEventListener('DOMContentLoaded', () => {
  
  const loaderLottie = 'https://cdn.prod.website-files.com/65b94b2bab54c86c1cd618a8/682725b636da1042ae7797f8_H1_gradient.json';
  const heroLottie = 'https://cdn.prod.website-files.com/65b94b2bab54c86c1cd618a8/68272532ccd07135e49d65f4_H2.json';
  
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
        
        // Simultaneously fade out the loader animation and fade in the hero lottie
      // Simultaneously fade out the loader animation and fade in the hero lottie
setTimeout(() => {
  fadeOut('#lottie-loader', 0, 0, () => {
    console.log('Loader fade-out complete');
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