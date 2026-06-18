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

export const OpacityIcon = React.forwardRef<HTMLDivElement, BaseIconProps>(
  ({size = 16, ...props}, ref) => {
    return (
      <BaseIcon {...props} size={size} ref={ref}>
        <svg
          data-wf-icon="OpacityIcon"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13 2C13.5523 2 14 2.44772 14 3L14 13C14 13.5523 13.5523 14 13 14L3 14C2.44771 14 2 13.5523 2 13L2 3C2 2.44771 2.44771 2 3 2L13 2Z"
            fill="url(#paint0_linear_25_15598)"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3 2C2.44772 2 2 2.44772 2 3V5H5V8H2V11H5V14H8V11H11V14H13C13.5523 14 14 13.5523 14 13V11H11V8H14V5H11V2H8V5H5V2H3ZM8 8H5V11H8V8ZM8 8V5H11V8H8Z"
            fill="currentColor"
          />
          <defs>
            <linearGradient
              id="paint0_linear_25_15598"
              x1="14"
              y1="14"
              x2="2"
              y2="14"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="currentColor" />
              <stop offset="1" stopColor="currentColor" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </BaseIcon>
    );
  }
) as IconComponent;

OpacityIcon.category = 'Color & Background';


OpacityIcon.displayName = 'OpacityIcon';

