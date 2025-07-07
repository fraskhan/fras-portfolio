import React, { useEffect } from 'react';
import { Link } from 'react-scroll';
import { gsap } from 'gsap';

interface ScrollIndicatorProps {
  targetId: string;
  className?: string;
}

const ScrollIndicator = ({ targetId, className = '' }: ScrollIndicatorProps) => {
  useEffect(() => {
    // Setup scroll animation for the scroll indicator
    const animation = gsap.to('.scroll-indicator-dot', {
      y: 8,
      duration: 1.2,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut'
    });
    
    return () => {
      animation.kill();
    };
  }, []);
  
  return (
    <div className={`flex justify-center ${className}`}>
      <Link
        to={targetId}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className="cursor-pointer"
      >
        <div className="w-7 h-12 rounded-full border-2 border-[var(--secondary-color)] flex justify-center items-start p-1">
          <div className="scroll-indicator-dot w-2 h-3 bg-[var(--accent-color)] rounded-full" />
        </div>
      </Link>
    </div>
  );
};

export default ScrollIndicator; 