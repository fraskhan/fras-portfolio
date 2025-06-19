declare module 'react-typing-effect' {
  import React from 'react';

  interface ReactTypingEffectProps {
    text: string | string[];
    className?: string;
    speed?: number;
    eraseSpeed?: number;
    typingDelay?: number;
    eraseDelay?: number;
    cursor?: string;
    cursorClassName?: string;
    displayTextRenderer?: (text: string, i: number) => React.ReactNode;
    staticText?: string;
    onChange?: (text: string) => void;
  }

  const ReactTypingEffect: React.FC<ReactTypingEffectProps>;

  export default ReactTypingEffect;
} 