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

export const ElementTabBarIcon = React.forwardRef<
  HTMLDivElement,
  BaseIconProps
>(({size = 16, ...props}, ref) => {
  return (
    <BaseIcon {...props} size={size} ref={ref}>
      <svg
        data-wf-icon="ElementTabBarIcon"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.6"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2 3C2 2.44772 2.44772 2 3 2H14C14.5523 2 15 2.44771 15 3V13C15 13.5523 14.5523 14 14 14H3C2.44772 14 2 13.5523 2 13V3ZM14 3L3 3V13H14V3Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2 3C2 2.44772 2.44772 2 3 2H14C14.5523 2 15 2.44772 15 3V6C15 6.55228 14.5523 7 14 7H3C2.44772 7 2 6.55228 2 6V3ZM6 3H3V6H6V3ZM7 3V6H10V3H7ZM11 3V6H14V3H11Z"
          fill="currentColor"
        />
      </svg>
    </BaseIcon>
  );
}) as IconComponent;

ElementTabBarIcon.tags = ['tab', 'tabs', 'tab bar'];

ElementTabBarIcon.category = 'Navigator';


ElementTabBarIcon.displayName = 'ElementTabBarIcon';

