import { useEffect } from 'react';
import { gsap } from 'gsap';

// Function to create fade in animation for elements
export const createFadeInAnimation = (
  elements: string | gsap.TweenTarget,
  options?: {
    y?: number;
    duration?: number;
    delay?: number;
    staggerAmount?: number;
    ease?: string;
  }
) => {
  const {
    y = 30,
    duration = 1,
    delay = 0,
    staggerAmount = 0.2,
    ease = 'power3.out',
  } = options || {};

  return gsap.from(elements, {
    y,
    opacity: 0,
    duration,
    delay,
    stagger: staggerAmount,
    ease,
  });
};

// Hook for fade-in animation sequence
export const useFadeInAnimationSequence = (
  refs: Record<string, React.RefObject<HTMLElement>>,
  sequence: string[][],
  options?: {
    defaults?: gsap.TweenVars;
    onComplete?: () => void;
  }
) => {
  useEffect(() => {
    const { defaults = { duration: 1, ease: 'power3.out' }, onComplete } = options || {};
    
    // Create timeline
    const tl = gsap.timeline({ defaults, onComplete });

    // Add each sequence to the timeline
    sequence.forEach((step) => {
      const elements = step.map((key) => refs[key]?.current).filter(Boolean);
      if (elements.length > 0) {
        tl.from(elements, { y: 30, opacity: 0 }, '-=0.4');
      }
    });

    return () => {
      tl.kill();
    };
  }, [refs, sequence, options]);
};

// Hook for element entrance with AOS-like functionality using GSAP
export const useElementEntrance = (
  ref: React.RefObject<HTMLElement>,
  options?: {
    y?: number;
    duration?: number;
    trigger?: gsap.DOMTarget;
    start?: string;
    end?: string;
    toggleActions?: string;
  }
) => {
  useEffect(() => {
    if (!ref.current) return;
    
    const {
      y = 50,
      duration = 1,
      trigger = ref.current,
      start = 'top 80%',
      end = 'bottom 20%',
      toggleActions = 'play none none none',
    } = options || {};

    const animation = gsap.fromTo(
      ref.current,
      { y, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration, 
        ease: 'power3.out',
        scrollTrigger: {
          trigger,
          start,
          end,
          toggleActions,
        },
      }
    );

    return () => {
      if (animation) {
        animation.kill();
      }
    };
  }, [ref, options]);
}; 