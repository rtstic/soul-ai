import type { AnimationItem } from 'lottie-web';

import { playLottieAnimation } from './lottiePlayer';

/**
 * Loads and automatically plays a Lottie animation once it's ready
 * @param containerId - ID of the container element
 * @param animationUrl - URL to the Lottie JSON file
 * @returns The animation instance or null if initialization failed
 */
export function loadAndPlayLottie(containerId: string, animationUrl: string): AnimationItem | null {
  const container = document.getElementById(containerId);
  
  if (!container) {
    console.error(`Container with ID "${containerId}" not found`);
    return null;
  }
  
  let animation: AnimationItem | null = null;
  
  try {
    animation = playLottieAnimation(container, animationUrl, {
      loop: false,
      autoplay: false, // We'll manually play it when ready
      renderer: 'svg',
      onDataReady: () => {
        // Animation data is loaded, play it now
        if (animation) {
          animation.play();
        }
      },
      onError: (error) => {
        console.error('Animation loading error:', error);
      }
    });
    
    return animation;
  } catch (error) {
    console.error('Failed to initialize animation:', error);
    return null;
  }
}