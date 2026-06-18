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

export const WarningTriangleIcon = React.forwardRef<
  HTMLDivElement,
  BaseIconProps
>(({size = 16, ...props}, ref) => {
  return (
    <BaseIcon {...props} size={size} ref={ref}>
      <svg
        data-wf-icon="WarningTriangleIcon"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M8 5V9H9V5H8Z" fill="currentColor" />
        <path
          d="M8.5 12C9.05228 12 9.5 11.5523 9.5 11C9.5 10.4477 9.05228 10 8.5 10C7.94772 10 7.5 10.4477 7.5 11C7.5 11.5523 7.94772 12 8.5 12Z"
          fill="currentColor"
        />
        <path
          opacity="0.4"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.63392 2C8.01883 1.33333 8.98107 1.33333 9.36597 2L15.4282 12.5C15.8131 13.1667 15.3319 14 14.5621 14H2.43777C1.66797 14 1.18685 13.1667 1.57175 12.5L7.63392 2ZM8.49995 2.5L2.43777 13L14.5621 13L8.49995 2.5Z"
          fill="currentColor"
        />
      </svg>
    </BaseIcon>
  );
}) as IconComponent;

WarningTriangleIcon.tags = [
  'triangle',
  'exclamation point',
  '!',
  'danger',
  'error',
];

WarningTriangleIcon.category = 'General Icons';


WarningTriangleIcon.displayName = 'WarningTriangleIcon';

