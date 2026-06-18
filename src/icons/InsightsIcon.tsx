"use client";

import React from 'react';
import { BaseIconProps } from './Icon/Icon';

// Add TypeScript declarations for the additional properties
declare module 'react' {
  interface ForwardRefExoticComponent<P> {
    tags?: string[];
    category?: string;
  }
}

export const InsightsIcon = React.forwardRef<HTMLDivElement, BaseIconProps>(
  ({ color = 'currentColor', size = 24, style, ...props }, ref) => {
    return (
      <div
        ref={ref}
        {...props}
        data-wf-icon="InsightsIcon"
        style={{
          width: size + 'px',
          height: size + 'px',
          color,
          ...style,
        }}
      >
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 9L7 5M7 5L11 9M7 5V14M21 15L17 19M17 19L13 15M17 19V10"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    );
  }
);

InsightsIcon.tags = ['analytics', 'chart', 'statistics', 'data'];

InsightsIcon.category = 'General Icons';

InsightsIcon.displayName = 'InsightsIcon'; 