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

export const SortIcon = React.forwardRef<HTMLDivElement, BaseIconProps>(
  ({size = 16, ...props}, ref) => {
    return (
      <BaseIcon {...props} size={size} ref={ref}>
        <svg
          data-wf-icon="SortIcon"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.00004 1.79297L6.35359 4.14652L5.64648 4.85363L4.50004 3.70718V12.293L5.64648 11.1465L6.35359 11.8536L4.00004 14.2072L1.64648 11.8536L2.35359 11.1465L3.50004 12.293V3.70718L2.35359 4.85363L1.64648 4.14652L4.00004 1.79297Z"
            fill="currentColor"
          />
          <path
            d="M8.00004 4.00008H14V5.00008H8.00004V4.00008Z"
            fill="currentColor"
          />
          <path
            d="M8.00004 7.00008H14V8.00008H8.00004V7.00008Z"
            fill="currentColor"
          />
          <path
            d="M8.00004 10.0001H14V11.0001H8.00004V10.0001Z"
            fill="currentColor"
          />
        </svg>
      </BaseIcon>
    );
  }
) as IconComponent;

SortIcon.tags = ['arrows', 'horizontal', 'exchange'];

SortIcon.category = 'General Icons';


SortIcon.displayName = 'SortIcon';

