/* eslint-disable react/jsx-sort-props */

import React from 'react';
import {Icon as BaseIcon, type BaseIconProps} from './Icon/Icon';
import {IconComponent} from './types';

export const HiddenItemIcon = React.forwardRef<
  HTMLDivElement,
  BaseIconProps
>(({size = 16, ...props}, ref) => {
  return (
    <BaseIcon {...props} size={size} ref={ref}>
      <svg
        data-wf-icon="HiddenItemIcon"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.4765 8H5.52344"
          stroke="currentColor"
          strokeWidth="2"
          opacity="0.67"
        />
      </svg>
    </BaseIcon>
  );
}) as IconComponent;

HiddenItemIcon.displayName = 'HiddenItemIcon';

