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

export const EmailIcon = React.forwardRef<HTMLDivElement, BaseIconProps>(
  ({size = 16, ...props}, ref) => {
    return (
      <BaseIcon {...props} size={size} ref={ref}>
        <svg
          data-wf-icon="EmailIcon"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3 3C2.44772 3 2 3.44772 2 4V12C2 12.5523 2.44771 13 3 13H13C13.5523 13 14 12.5523 14 12V4C14 3.44772 13.5523 3 13 3H3ZM12.2929 4H3.70711L8 8.29289L12.2929 4ZM3 4.70711V12H13V4.70711L8.70711 9C8.31658 9.39052 7.68342 9.39052 7.29289 9L3 4.70711Z"
            fill="currentColor"
          />
        </svg>
      </BaseIcon>
    );
  }
) as IconComponent;

EmailIcon.tags = ['envelope', 'send', 'contact'];

EmailIcon.category = 'General Icons';


EmailIcon.displayName = 'EmailIcon';

