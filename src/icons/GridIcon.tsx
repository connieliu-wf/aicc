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

export const GridIcon = React.forwardRef<HTMLDivElement, BaseIconProps>(
  ({size = 16, ...props}, ref) => {
    return (
      <BaseIcon {...props} size={size} ref={ref}>
        <svg
          data-wf-icon="GridIcon"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7 3H4L4 6H7V3ZM8 12V9C8 8.44772 7.55228 8 7 8H4C3.44772 8 3 8.44772 3 9V12C3 12.5523 3.44772 13 4 13H7C7.55228 13 8 12.5523 8 12ZM9 9V12C9 12.5523 9.44772 13 10 13H13C13.5523 13 14 12.5523 14 12V9C14 8.44772 13.5523 8 13 8H10C9.44772 8 9 8.44772 9 9ZM8 6V3C8 2.44772 7.55228 2 7 2H4C3.44772 2 3 2.44772 3 3V6C3 6.55228 3.44772 7 4 7H7C7.55228 7 8 6.55228 8 6ZM9 3V6C9 6.55228 9.44772 7 10 7H13C13.5523 7 14 6.55228 14 6V3C14 2.44772 13.5523 2 13 2H10C9.44772 2 9 2.44772 9 3ZM7 9H4L4 12H7V9ZM13 3H10V6H13V3ZM13 9H10V12H13V9Z"
            fill="currentColor"
          />
        </svg>
      </BaseIcon>
    );
  }
) as IconComponent;

GridIcon.category = 'Style Panel';


GridIcon.displayName = 'GridIcon';

