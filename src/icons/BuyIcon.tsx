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

export const BuyIcon = React.forwardRef<HTMLDivElement, BaseIconProps>(
  ({size = 16, ...props}, ref) => {
    return (
      <BaseIcon {...props} size={size} ref={ref}>
        <svg
          data-wf-icon="BuyIcon"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.99992 7C10.5522 7 10.9999 6.55228 10.9999 6C10.9999 5.44772 10.5522 5 9.99992 5C9.44764 5 8.99992 5.44772 8.99992 6C8.99992 6.55228 9.44764 7 9.99992 7Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.70703 2C7.44182 2 7.18746 2.10536 6.99992 2.29289L1.49992 7.79289C1.1094 8.18342 1.1094 8.81658 1.49992 9.20711L6.79282 14.5C7.18334 14.8905 7.81651 14.8905 8.20703 14.5L13.707 9C13.8946 8.81246 13.9999 8.55811 13.9999 8.29289V3C13.9999 2.44772 13.5522 2 12.9999 2H7.70703ZM7.70703 3L12.9999 3V8.29289L7.49992 13.7929L2.20703 8.5L7.70703 3Z"
            fill="currentColor"
          />
        </svg>
      </BaseIcon>
    );
  }
) as IconComponent;

BuyIcon.tags = ['tag', 'ecommerce', 'purchase'];

BuyIcon.category = 'General Icons';


BuyIcon.displayName = 'BuyIcon';

