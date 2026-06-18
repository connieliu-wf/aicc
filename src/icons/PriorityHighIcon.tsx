/* eslint-disable react/jsx-sort-props */

import React from 'react';
import {Icon as BaseIcon, type BaseIconProps} from './Icon/Icon';
import {IconComponent} from './types';

export const PriorityHighIcon = React.forwardRef<
  HTMLDivElement,
  BaseIconProps
>(({size = 16, ...props}, ref) => {
  return (
    <BaseIcon {...props} size={size} ref={ref}>
      <svg
        data-wf-icon="PriorityHighIcon"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.75 5.75H10.25V10.25H5.75V5.75Z"
          fill="currentColor"
          opacity="0.67"
        />
      </svg>
    </BaseIcon>
  );
}) as IconComponent;

PriorityHighIcon.displayName = 'PriorityHighIcon';

