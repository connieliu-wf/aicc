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

export const SwapIcon = React.forwardRef<HTMLDivElement, BaseIconProps>(
  ({size = 16, ...props}, ref) => {
    return (
      <BaseIcon {...props} size={size} ref={ref}>
        <svg
          data-wf-icon="SwapIcon"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.70711 6.00004L11.8536 8.14648L11.1464 8.85359L7.79289 5.50004L11.1464 2.14648L11.8536 2.85359L9.70711 5.00004H15V6.00004H9.70711Z"
            fill="currentColor"
          />
          <path
            d="M6.29289 10L4.14645 12.1465L4.85355 12.8536L8.20711 9.50004L4.85355 6.14648L4.14645 6.85359L6.29289 9.00004H1V10H6.29289Z"
            fill="currentColor"
          />
        </svg>
      </BaseIcon>
    );
  }
) as IconComponent;

SwapIcon.tags = ['arrows', 'horizontal', 'exchange'];

SwapIcon.category = 'General Icons';


SwapIcon.displayName = 'SwapIcon';

