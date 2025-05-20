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
  
  // Define Lottie animations for different device types
  const lottieAnimations = {
    desktop: {
      loader: 'https://cdn.prod.website-files.com/65b94b2bab54c86c1cd618a8/682725b636da1042ae7797f8_H1_gradient.json',
      hero: 'https://cdn.prod.website-files.com/65b94b2bab54c86c1cd618a8/68272532ccd07135e49d65f4_H2.json'
      // section: 'https://cdn.prod.website-files.com/65b94b2bab54c86c1cd618a8/6827264cc032f162afebc33f_Copy%20of%20h3______.json'
    },
    tablet: {
      loader: 'https://cdn.prod.website-files.com/65b94b2bab54c86c1cd618a8/682cde44ea4ee53f16354b92_H1_Gradient%20Optimised%20_Tablet.json',
      hero: 'https://cdn.prod.website-files.com/65b94b2bab54c86c1cd618a8/682cde4480c419a617165f17_Copy%20of%20ht3____.json'
      // section: 'YOUR_TABLET_SECTION_URL_HERE'
    },
    mobile: {
      loader: 'https://cdn.prod.website-files.com/65b94b2bab54c86c1cd618a8/682cdd965c72e21b21747905_H1_Gradient%20Optimised%20_Mobile.json',
      hero: 'https://cdn.prod.website-files.com/65b94b2bab54c86c1cd618a8/682cdd96ba1fe1ee2705911a_Copy%20of%20hm3___.json'
      // section: 'YOUR_MOBILE_SECTION_URL_HERE'
    }
  };
  
  // Function to determine device type based on screen width
  function getDeviceType() {
    const width = window.innerWidth;
    if (width <= 767) {
      return 'mobile';
    } else if (width <= 991) {
      return 'tablet';
    } else {
      return 'desktop';
    }
  }
  
  // Get current device type
  const deviceType = getDeviceType();
  console.log(`Current device type: ${deviceType}`);
  
  // Get appropriate Lottie URLs for the current device
  const loaderLottie = lottieAnimations[deviceType].loader;
  const heroLottie = lottieAnimations[deviceType].hero;
  
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
    
    // Handle window resize events to update animations if needed
    window.addEventListener('resize', () => {
      const newDeviceType = getDeviceType();
      
      // Only update if device type has changed
      if (newDeviceType !== deviceType) {
        console.log(`Device type changed to: ${newDeviceType}`);
        // Here you could implement logic to reload the appropriate animations
        // This would depend on your specific requirements for handling resize events
      }
    });
    
    // Clean up on page unload
    window.addEventListener('beforeunload', () => {
      destroyLottieAnimation(myAnimation);
    });
  }
});