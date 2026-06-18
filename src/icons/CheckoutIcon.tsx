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

export const CheckoutIcon = React.forwardRef<HTMLDivElement, BaseIconProps>(
  ({size = 16, ...props}, ref) => {
    return (
      <BaseIcon {...props} size={size} ref={ref}>
        <svg
          data-wf-icon="CheckoutIcon"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.2929 6.02734L6 6.02734V5.02734L11 5.02734V10.0273H10V6.73445L5.85355 10.8809L5.14645 10.1738L9.2929 6.02734Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3 2.02734C2.44772 2.02734 2 2.47506 2 3.02734V13.0273C2 13.5796 2.44772 14.0273 3 14.0273H13C13.5523 14.0273 14 13.5796 14 13.0273V3.02734C14 2.47506 13.5523 2.02734 13 2.02734H3ZM13 3.02734H3L3 13.0273H13V3.02734Z"
            fill="currentColor"
          />
        </svg>
      </BaseIcon>
    );
  }
) as IconComponent;

CheckoutIcon.category = 'Ecommerce';


CheckoutIcon.displayName = 'CheckoutIcon';

