import { loadAndPlayLottie } from '././utils/lottieLoader';
import { destroyLottieAnimation } from './utils/lottiePlayer';

document.addEventListener('DOMContentLoaded', () => {
  const loaderLottie = 'https://cdn.prod.website-files.com/65b94b2bab54c86c1cd618a8/682725b636da1042ae7797f8_H1_gradient.json';
  
  const myAnimation = loadAndPlayLottie('lottie-loader', loaderLottie);
  
  // Clean up on page unload (if needed)
  if (myAnimation) {
    window.addEventListener('beforeunload', () => {
      destroyLottieAnimation(myAnimation);
    });
  }
});