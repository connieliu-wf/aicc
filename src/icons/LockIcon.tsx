/* eslint-disable react/jsx-sort-props */

/**
 * DO NOT MODIFY THIS ICON DIRECTLY.
 *
 * THIS ICON WAS AUTOMATICALLY GENERATED.
 * SVG RETRIEVED FROM SPRING FOUNDATIONS FIGMA FILE.
 * @see https://www.figma.com/design/kcg95u086DD7Sa9or8Bwpq/%F0%9F%8C%B1--Foundations---Spring-2.0?node-id=24-2&p=f&t=75lUXy0FPOr0htKP-0
 */
import React from 'react';
import {Icon as BaseIcon, type BaseIconProps} from './Icon/Icon';
import {IconComponent} from './types';

export const LockIcon = React.forwardRef<HTMLDivElement, BaseIconProps>(
  ({size = 16, ...props}, ref) => {
    return (
      <BaseIcon {...props} size={size} ref={ref}>
        <svg
          data-wf-icon="LockIcon"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5 7L5 5C5 3.34315 6.34315 2 8 2C9.65685 2 11 3.34315 11 5V7C11.5523 7 12 7.44772 12 8V12C12 12.5523 11.5523 13 11 13H5C4.44772 13 4 12.5523 4 12V8C4 7.44771 4.44772 7 5 7ZM6 5C6 3.89543 6.89543 3 8 3C9.10457 3 10 3.89543 10 5V7H6V5ZM5 12V8H11V12H5Z"
            fill="currentColor"
          />
        </svg>
      </BaseIcon>
    );
  }
) as IconComponent;

LockIcon.tags = ['security', 'tool', 'close'];

LockIcon.category = 'General Icons';


LockIcon.displayName = 'LockIcon';

