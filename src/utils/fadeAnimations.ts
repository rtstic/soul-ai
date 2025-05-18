// fade-animations.ts

import { gsap } from 'gsap';

/**
 * Fade in an element with configurable options
 * @param element - The DOM element or selector to fade in
 * @param duration - Animation duration in seconds
 * @param delay - Delay before animation starts in seconds
 * @param onComplete - Callback function to run when animation completes
 * @param ease - GSAP easing function (e.g., "power2.inOut")
 */
export function fadeIn(
  element: string | Element,
  duration: number = 0.5,
  delay: number = 0,
  onComplete?: () => void,
  ease: string = 'power2.out'
): gsap.core.Tween {
  // Set initial state
  gsap.set(element, { autoAlpha: 0 });
  
  // Create and return the animation
  return gsap.to(element, {
    duration,
    autoAlpha: 1,
    delay,
    ease,
    onComplete,
  });
}

/**
 * Fade out an element with configurable options
 * @param element - The DOM element or selector to fade out
 * @param duration - Animation duration in seconds
 * @param delay - Delay before animation starts in seconds
 * @param onComplete - Callback function to run when animation completes
 * @param ease - GSAP easing function (e.g., "power2.inOut")
 */
export function fadeOut(
  element: string | Element,
  duration: number = 0.5,
  delay: number = 0,
  onComplete?: () => void,
  ease: string = 'power2.out'
): gsap.core.Tween {
  // Create and return the animation
  return gsap.to(element, {
    duration,
    autoAlpha: 0,
    delay,
    ease,
    onComplete,
  });
}

/**
 * Fade toggle - fades element in if it's hidden, out if it's visible
 * @param element - The DOM element or selector to toggle
 * @param duration - Animation duration in seconds
 * @param onComplete - Callback function to run when animation completes
 */
export function fadeToggle(
  element: string | Element,
  duration: number = 0.5,
  onComplete?: () => void
): gsap.core.Tween {
  // Get the element
  const el = typeof element === 'string' 
    ? document.querySelector(element) as HTMLElement
    : element as HTMLElement;
    
  // Check current visibility (using computed style)
  const isVisible = window.getComputedStyle(el).opacity !== '0';
  
  // Toggle based on current state
  return isVisible 
    ? fadeOut(element, duration, 0, onComplete)
    : fadeIn(element, duration, 0, onComplete);
}