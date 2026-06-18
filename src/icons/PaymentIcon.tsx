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

export const PaymentIcon = React.forwardRef<HTMLDivElement, BaseIconProps>(
  ({size = 16, ...props}, ref) => {
    return (
      <BaseIcon {...props} size={size} ref={ref}>
        <svg
          data-wf-icon="PaymentIcon"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 3V1H9V3H11.5V4H7.5C6.67157 4 6 4.67157 6 5.5C6 6.32843 6.67157 7 7.5 7H9.5C10.8807 7 12 8.11929 12 9.5C12 10.8807 10.8807 12 9.5 12H9V14H8V12H5.5V11H9.5C10.3284 11 11 10.3284 11 9.5C11 8.67157 10.3284 8 9.5 8H7.5C6.11929 8 5 6.88071 5 5.5C5 4.11929 6.11929 3 7.5 3H8Z"
            fill="currentColor"
          />
        </svg>
      </BaseIcon>
    );
  }
) as IconComponent;

PaymentIcon.category = 'Ecommerce';


PaymentIcon.displayName = 'PaymentIcon';

