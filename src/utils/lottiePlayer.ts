// lottiePlayer.ts
import type { AnimationConfigWithPath, AnimationItem } from 'lottie-web';
import lottie from 'lottie-web';
/**
 * Options interface for Lottie animation
 */
interface LottieOptions extends Partial<AnimationConfigWithPath> {
  onDOMLoaded?: (animation: AnimationItem) => void;
  onDataReady?: (animation: AnimationItem) => void;
  onError?: (error: string) => void;
}

/**
 * Plays a Lottie animation in the specified container
 * @param container - DOM element where animation will be displayed
 * @param animationUrl - URL or path to the Lottie JSON file
 * @param options - Additional options for the animation
 * @returns The animation instance for further control
 */
export function playLottieAnimation(
  container: HTMLElement,
  animationUrl: string,
  options: LottieOptions = {}
): AnimationItem {
  // Default options
  const defaultOptions: AnimationConfigWithPath = {
    container: container,
    renderer: 'svg', // 'svg', 'canvas', or 'html'
    loop: true,
    autoplay: true,
    path: animationUrl,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'  // Fill container, cropping overflow if necessary
    },
    ...options
  };
  
  // Initialize the animation
  const animation: AnimationItem = lottie.loadAnimation(defaultOptions);
  
  // Add event listeners for loading states
  animation.addEventListener('DOMLoaded', () => {
    if (options.onDOMLoaded) {
      options.onDOMLoaded(animation);
    }
  });
  
  animation.addEventListener('data_ready', () => {
    if (options.onDataReady) {
      options.onDataReady(animation);
    }
  });
  
  animation.addEventListener('data_failed', () => {
    if (options.onError) {
      options.onError('Failed to load animation');
    }
  });
  
  // Return the animation instance for further control
  return animation;
}

/**
 * Helper function to stop all animations and clear resources
 * @param animation - The animation instance to destroy
 */
export function destroyLottieAnimation(animation: AnimationItem | null): void {
  if (animation) {
    animation.destroy();
  }
}

/**
 * Helper function to pause the animation
 * @param animation - The animation instance to pause
 */
export function pauseLottieAnimation(animation: AnimationItem | null): void {
  if (animation) {
    animation.pause();
  }
}

/**
 * Helper function to resume the animation
 * @param animation - The animation instance to resume
 */
export function resumeLottieAnimation(animation: AnimationItem | null): void {
  if (animation) {
    animation.play();
  }
}

/**
 * Helper function to set animation speed
 * @param animation - The animation instance
 * @param speed - Speed value (1 is normal speed)
 */
export function setLottieAnimationSpeed(
  animation: AnimationItem | null,
  speed: number
): void {
  if (animation) {
    animation.setSpeed(speed);
  }
}