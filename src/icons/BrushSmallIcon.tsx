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

export const BrushSmallIcon = React.forwardRef<HTMLDivElement, BaseIconProps>(
  ({size = 16, ...props}, ref) => {
    return (
      <BaseIcon {...props} size={size} ref={ref}>
        <svg
          data-wf-icon="BrushSmallIcon"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.44194 9.44638L14.4419 2.44638L13.5581 1.5625L6.55806 8.5625L7.44194 9.44638Z"
            fill="currentColor"
          />
          <path
            d="M1 14.0005L2.48198 12.5193C2.81365 12.1878 3 11.738 3 11.2691C3 10.2929 3.79138 9.50151 4.76759 9.50151H5C6.10457 9.50151 7 10.3969 7 11.5015V11.7513C7 12.994 5.9925 14.0013 4.74982 14.0011L1 14.0005Z"
            fill="currentColor"
          />
        </svg>
      </BaseIcon>
    );
  }
) as IconComponent;

BrushSmallIcon.category = 'Style Panel';


BrushSmallIcon.displayName = 'BrushSmallIcon';

