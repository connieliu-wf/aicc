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

export const FilterIcon = React.forwardRef<HTMLDivElement, BaseIconProps>(
  ({size = 16, ...props}, ref) => {
    return (
      <BaseIcon {...props} size={size} ref={ref}>
        <svg
          data-wf-icon="FilterIcon"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.99998 3.70711C1.37001 3.07714 1.81618 2 2.70708 2H13.2929C14.1838 2 14.6299 3.07714 14 3.70711L9.99998 7.70711V13.2929C9.99998 14.1838 8.92283 14.63 8.29287 14L6.29287 12C6.10533 11.8125 5.99998 11.5581 5.99998 11.2929V7.70711L1.99998 3.70711ZM13.2929 3H2.70708L6.70708 7C6.89462 7.18754 6.99998 7.44189 6.99998 7.70711V11.2929L8.99998 13.2929V7.70711C8.99998 7.44189 9.10533 7.18754 9.29287 7L13.2929 3Z"
            fill="currentColor"
          />
        </svg>
      </BaseIcon>
    );
  }
) as IconComponent;

FilterIcon.tags = ['funnel', 'cup'];

FilterIcon.category = 'General Icons';


FilterIcon.displayName = 'FilterIcon';

