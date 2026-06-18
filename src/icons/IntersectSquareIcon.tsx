"use client";

import React from 'react';
import { BaseIconProps } from './Icon/Icon';

// Add TypeScript declarations for the additional properties
declare module 'react' {
  interface ForwardRefExoticComponent<P> {
    tags?: string[];
    category?: string;
    displayName?: string;
  }
}

export const IntersectSquareIcon = React.forwardRef<HTMLDivElement, BaseIconProps>(
  ({ color = 'currentColor', size = 16, style, ...props }, ref) => {
    return (
      <div
        ref={ref}
        {...props}
        data-wf-icon="IntersectSquareIcon"
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
          viewBox="0 0 256 256"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M216,88H168V40a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V160a8,8,0,0,0,8,8H88v48a8,8,0,0,0,8,8H216a8,8,0,0,0,8-8V96A8,8,0,0,0,216,88ZM48,152V48H152V88H96a8,8,0,0,0-8,8v56Zm56-36.69L140.69,152H104Zm48,25.38L115.31,104H152ZM208,208H104V168h56a8,8,0,0,0,8-8V104h40Z"
            fill="currentColor"
          />
        </svg>
      </div>
    );
  }
);

IntersectSquareIcon.tags = ['app', 'square', 'intersect', 'integration'];
IntersectSquareIcon.category = 'General Icons';
IntersectSquareIcon.displayName = 'IntersectSquareIcon'; 