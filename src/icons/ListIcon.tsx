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

export const ListIcon = React.forwardRef<HTMLDivElement, BaseIconProps>(
  ({size = 16, ...props}, ref) => {
    return (
      <BaseIcon {...props} size={size} ref={ref}>
        <svg
          data-wf-icon="ListIcon"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.75 5.5C4.75 6.19036 4.19036 6.75 3.5 6.75C2.80964 6.75 2.25 6.19036 2.25 5.5C2.25 4.80964 2.80964 4.25 3.5 4.25C4.19036 4.25 4.75 4.80964 4.75 5.5ZM6 6H14V5H6V6ZM6 11H14V10H6V11ZM3.5 11.75C4.19036 11.75 4.75 11.1904 4.75 10.5C4.75 9.80964 4.19036 9.25 3.5 9.25C2.80964 9.25 2.25 9.80964 2.25 10.5C2.25 11.1904 2.80964 11.75 3.5 11.75Z"
            fill="currentColor"
          />
        </svg>
      </BaseIcon>
    );
  }
) as IconComponent;

ListIcon.category = 'General Icons';


ListIcon.displayName = 'ListIcon';

