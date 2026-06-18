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

export const MobileBreakpointIcon = React.forwardRef<
  HTMLDivElement,
  BaseIconProps
>(({size = 16, ...props}, ref) => {
  return (
    <BaseIcon {...props} size={size} ref={ref}>
      <svg
        data-wf-icon="MobileBreakpointIcon"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M7 12H9V11H7V12Z" fill="currentColor" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4 4C4 2.89543 4.89543 2 6 2H10C11.1046 2 12 2.89543 12 4V12C12 13.1046 11.1046 14 10 14H6C4.89543 14 4 13.1046 4 12V4ZM6 3H10C10.5523 3 11 3.44772 11 4V12C11 12.5523 10.5523 13 10 13H6C5.44772 13 5 12.5523 5 12V4C5 3.44772 5.44772 3 6 3Z"
          fill="currentColor"
        />
      </svg>
    </BaseIcon>
  );
}) as IconComponent;

MobileBreakpointIcon.tags = ['phone', 'cell', 'device'];

MobileBreakpointIcon.category = 'General Icons';


MobileBreakpointIcon.displayName = 'MobileBreakpointIcon';

