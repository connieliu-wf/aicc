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

export const ElementRowIcon = React.forwardRef<HTMLDivElement, BaseIconProps>(
  ({size = 16, ...props}, ref) => {
    return (
      <BaseIcon {...props} size={size} ref={ref}>
        <svg
          data-wf-icon="ElementRowIcon"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.4"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3 3C3 2.44772 3.44772 2 4 2H13C13.5523 2 14 2.44772 14 3V13C14 13.5523 13.5523 14 13 14H4C3.44772 14 3 13.5523 3 13V3ZM13 3L4 3V13H13V3Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7 5.02734H6V11.0273H7V5.02734ZM11 5.02734H10V11.0273H11V5.02734ZM8 4.02734V12.0273H5V4.02734H8ZM12 4.02734V12.0273H9V4.02734H12Z"
            fill="currentColor"
          />
        </svg>
      </BaseIcon>
    );
  }
) as IconComponent;

ElementRowIcon.tags = ['row', 'rows'];

ElementRowIcon.category = 'Navigator';


ElementRowIcon.displayName = 'ElementRowIcon';

