import React from 'react';
import ReactTypingEffect from 'react-typing-effect';

interface TypedTextProps {
  texts: string[];
  speed?: number;
  eraseSpeed?: number;
  typingDelay?: number;
  eraseDelay?: number;
  className?: string;
}

const TypedText = ({
  texts,
  speed = 100,
  eraseSpeed = 100,
  typingDelay = 500,
  eraseDelay = 2000,
  className = ''
}: TypedTextProps) => {
  return (
    <div className={`typed-text-wrapper ${className}`}>
      <ReactTypingEffect
        text={texts}
        speed={speed}
        eraseSpeed={eraseSpeed}
        typingDelay={typingDelay}
        eraseDelay={eraseDelay}
        className="inline-block"
      />
    </div>
  );
};

export default TypedText; 