import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Fade in from bottom animation
export const fadeInFromBottom = (element: string | Element, delay: number = 0) => {
  return gsap.from(element, {
    y: 50,
    opacity: 0,
    duration: 1,
    delay,
    ease: 'power3.out',
  });
};

// Fade in animation
export const fadeIn = (element: string | Element, delay: number = 0) => {
  return gsap.from(element, {
    opacity: 0,
    duration: 1,
    delay,
    ease: 'power2.out',
  });
};

// Scale up animation
export const scaleUp = (element: string | Element, delay: number = 0) => {
  return gsap.from(element, {
    scale: 0.8,
    opacity: 0,
    duration: 1,
    delay,
    ease: 'back.out(1.7)',
  });
};

// Stagger animation for multiple elements
export const staggerAnimation = (elements: string | Element[], delay: number = 0) => {
  return gsap.from(elements, {
    y: 30,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    delay,
    ease: 'power2.out',
  });
};

// Scroll-triggered animation
export const scrollTriggerAnimation = (
  trigger: string | Element,
  element: string | Element,
  start: string = 'top 80%'
) => {
  return gsap.from(element, {
    y: 50,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger,
      start,
      toggleActions: 'play none none none',
    },
  });
};

// Text reveal animation
export const textReveal = (element: string | Element) => {
  const splitText = new SplitText(element, { type: 'chars, words' });
  const chars = splitText.chars;
  
  return gsap.from(chars, {
    opacity: 0,
    y: 20,
    duration: 1,
    stagger: 0.02,
    ease: 'power3.out',
  });
};

// Custom SplitText type (simplified)
class SplitText {
  chars: Element[];
  words: Element[];
  
  constructor(element: string | Element, options: { type: string }) {
    // Simple implementation for TypeScript compatibility
    // In real usage, you'd use the actual GSAP SplitText plugin
    this.chars = Array.from(
      typeof element === 'string'
        ? document.querySelectorAll(`${element} span`)
        : (element as Element).querySelectorAll('span')
    );
    this.words = Array.from(
      typeof element === 'string'
        ? document.querySelectorAll(`${element} div`)
        : (element as Element).querySelectorAll('div')
    );
  }
} 