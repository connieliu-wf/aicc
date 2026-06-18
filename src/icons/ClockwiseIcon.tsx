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

export const ClockwiseIcon = React.forwardRef<HTMLDivElement, BaseIconProps>(
  ({size = 16, ...props}, ref) => {
    return (
      <BaseIcon {...props} size={size} ref={ref}>
        <svg
          data-wf-icon="ClockwiseIcon"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 2H13V5.26821L11.3941 3.61597L11.3891 3.61091C9.2412 1.46303 5.7588 1.46303 3.61091 3.61091C1.46303 5.7588 1.46303 9.2412 3.61091 11.3891C4.68438 12.4626 6.09222 12.9996 7.49853 13H9V12H7.49879C6.34682 11.9997 5.19646 11.5604 4.31802 10.682C2.56066 8.92462 2.56066 6.07538 4.31802 4.31802C6.07457 2.56147 8.92199 2.56066 10.6795 4.31558L12.3168 6.00002L9 6L9 7L14 7.00003V2Z"
            fill="currentColor"
          />
        </svg>
      </BaseIcon>
    );
  }
) as IconComponent;

ClockwiseIcon.tags = ['arrow', 'forward', 'turn', 'circle'];

ClockwiseIcon.category = 'General Icons';


ClockwiseIcon.displayName = 'ClockwiseIcon';

