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

export const ElementTabsIcon = React.forwardRef<HTMLDivElement, BaseIconProps>(
  ({size = 16, ...props}, ref) => {
    return (
      <BaseIcon {...props} size={size} ref={ref}>
        <svg
          data-wf-icon="ElementTabsIcon"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2 3C2 2.44772 2.44772 2 3 2H8V6H14V13C14 13.5523 13.5523 14 13 14H3C2.44772 14 2 13.5523 2 13V3ZM7 3L3 3V13H13V7H8C7.44772 7 7 6.55228 7 6V3Z"
            fill="currentColor"
          />
          <path
            opacity="0.6"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 3H7V2H13C13.5523 2 14 2.44772 14 3V7H13V3H11V7H10V3Z"
            fill="currentColor"
          />
        </svg>
      </BaseIcon>
    );
  }
) as IconComponent;

ElementTabsIcon.tags = ['tabs', 'tab'];

ElementTabsIcon.category = 'Navigator';


ElementTabsIcon.displayName = 'ElementTabsIcon';

