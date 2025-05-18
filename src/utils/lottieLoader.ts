import type { AnimationItem } from 'lottie-web';

import { playLottieAnimation } from './lottiePlayer';

/**
 * Loads and automatically plays a Lottie animation once it's ready
 * @param containerId - ID of the container element
 * @param animationUrl - URL to the Lottie JSON file
 * @param options - Optional configuration options
 * @param options.loop - Whether the animation should loop (default: false)
 * @param options.autoplay - Whether the animation should autoplay (default: false)
 * @returns The animation instance or null if initialization failed
 */
export function loadAndPlayLottie(
  containerId: string, 
  animationUrl: string,
  options?: {
    loop?: boolean;
    autoplay?: boolean;
  }
): AnimationItem | null {
  const container = document.getElementById(containerId);
  
  if (!container) {
    console.error(`Container with ID "${containerId}" not found`);
    return null;
  }
  
  // Set default values if options are not provided
  const loop = options?.loop ?? false;
  const autoplay = options?.autoplay ?? false;
  
  let animation: AnimationItem | null = null;
  
  try {
    animation = playLottieAnimation(container, animationUrl, {
      loop,
      autoplay, 
      renderer: 'svg',
      onDataReady: () => {
        // If not set to autoplay, play it manually when data is ready
        if (animation && !autoplay) {
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