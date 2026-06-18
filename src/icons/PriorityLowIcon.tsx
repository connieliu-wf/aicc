/* eslint-disable react/jsx-sort-props */

import React from 'react';
import {Icon as BaseIcon, type BaseIconProps} from './Icon/Icon';
import {IconComponent} from './types';

export const PriorityLowIcon = React.forwardRef<
  HTMLDivElement,
  BaseIconProps
>(({size = 16, ...props}, ref) => {
  return (
    <BaseIcon {...props} size={size} ref={ref}>
      <svg
        data-wf-icon="PriorityLowIcon"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="8"
          cy="8"
          r="2.5"
          fill="currentColor"
          opacity="0.67"
        />
      </svg>
    </BaseIcon>
  );
}) as IconComponent;

PriorityLowIcon.displayName = 'PriorityLowIcon';

