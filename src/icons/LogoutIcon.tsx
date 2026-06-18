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

export const LogoutIcon = React.forwardRef<HTMLDivElement, BaseIconProps>(
  ({size = 16, ...props}, ref) => {
    return (
      <BaseIcon {...props} size={size} ref={ref}>
        <svg
          data-wf-icon="LogoutIcon"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 3H3V12H7V13H3C2.44772 13 2 12.5523 2 12V3C2 2.44772 2.44772 2 3 2H7V3Z"
            fill="currentColor"
          />
          <path
            d="M10.1464 10.1464L12.2929 8H5.5V7H12.2929L10.1464 4.85355L10.8536 4.14645L14.2071 7.5L10.8536 10.8536L10.1464 10.1464Z"
            fill="currentColor"
          />
        </svg>
      </BaseIcon>
    );
  }
) as IconComponent;

LogoutIcon.tags = ['arrow', 'square', 'bracket'];

LogoutIcon.category = 'General Icons';


LogoutIcon.displayName = 'LogoutIcon';

