declare module 'aos' {
  export interface AosOptions {
    offset?: number;
    delay?: number;
    duration?: number;
    easing?: string;
    once?: boolean;
    mirror?: boolean;
    anchorPlacement?: string;
    disable?: boolean | string | (() => boolean);
    startEvent?: string;
    animatedClassName?: string;
    initClassName?: string;
    useClassNames?: boolean;
    disableMutationObserver?: boolean;
  }

  export function init(options?: AosOptions): void;
  export function refresh(hard?: boolean): void;
  export function refreshHard(): void;

  const aos: {
    init: typeof init;
    refresh: typeof refresh;
    refreshHard: typeof refreshHard;
  };

  export default aos;
} 