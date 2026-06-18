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

export const BorderRadiusTopLeftIcon = React.forwardRef<
  HTMLDivElement,
  BaseIconProps
>(({size = 16, ...props}, ref) => {
  return (
    <BaseIcon {...props} size={size} ref={ref}>
      <svg
        data-wf-icon="BorderRadiusTopLeftIcon"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.4">
          <path d="M14 14V9H13V13H9V14H14Z" fill="currentColor" />
          <path d="M7 14V13H3V9H2V14H7Z" fill="currentColor" />
          <path
            d="M2 7H3V6.5C3 4.567 4.567 3 6.5 3H7V2H6.5C4.01472 2 2 4.01472 2 6.5V7Z"
            fill="currentColor"
          />
          <path d="M9 2V3H13V7H14V2H9Z" fill="currentColor" />
        </g>
        <path
          d="M2.5 7V6.5C2.5 4.29086 4.29086 2.5 6.5 2.5H7"
          stroke="currentColor"
        />
      </svg>
    </BaseIcon>
  );
}) as IconComponent;

BorderRadiusTopLeftIcon.category = 'Layout';


BorderRadiusTopLeftIcon.displayName = 'BorderRadiusTopLeftIcon';

