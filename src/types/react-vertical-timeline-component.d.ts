declare module 'react-vertical-timeline-component' {
  import React from 'react';

  export interface VerticalTimelineProps {
    animate?: boolean;
    className?: string;
    layout?: '1-column' | '2-columns';
    lineColor?: string;
    children?: React.ReactNode;
  }

  export interface VerticalTimelineElementProps {
    className?: string;
    contentArrowStyle?: React.CSSProperties;
    contentStyle?: React.CSSProperties;
    date?: string;
    dateClassName?: string;
    icon?: React.ReactNode;
    iconClassName?: string;
    iconOnClick?: () => void;
    iconStyle?: React.CSSProperties;
    onTimelineElementClick?: () => void;
    position?: string;
    style?: React.CSSProperties;
    textClassName?: string;
    visible?: boolean;
    children?: React.ReactNode;
  }

  export const VerticalTimeline: React.FC<VerticalTimelineProps>;
  export const VerticalTimelineElement: React.FC<VerticalTimelineElementProps>;
} 