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

export const CartSidebarLeftIcon = React.forwardRef<
  HTMLDivElement,
  BaseIconProps
>(({size = 16, ...props}, ref) => {
  return (
    <BaseIcon {...props} size={size} ref={ref}>
      <svg
        data-wf-icon="CartSidebarLeftIcon"
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
          d="M7 3V2H14C14.5523 2 15 2.44772 15 3V13C15 13.5523 14.5523 14 14 14H7V13H14V3H7Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5 3H2L2 13H5V3ZM2 2C1.44772 2 1 2.44772 1 3V13C1 13.5523 1.44772 14 2 14H5C5.55228 14 6 13.5523 6 13V3C6 2.44772 5.55228 2 5 2H2Z"
          fill="currentColor"
        />
      </svg>
    </BaseIcon>
  );
}) as IconComponent;

CartSidebarLeftIcon.category = 'Ecommerce';


CartSidebarLeftIcon.displayName = 'CartSidebarLeftIcon';

