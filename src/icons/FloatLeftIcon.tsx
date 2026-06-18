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

export const FloatLeftIcon = React.forwardRef<HTMLDivElement, BaseIconProps>(
  ({size = 16, ...props}, ref) => {
    return (
      <BaseIcon {...props} size={size} ref={ref}>
        <svg
          data-wf-icon="FloatLeftIcon"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.5 4C0.223858 4 0 4.22386 0 4.5V10.5C0 10.7761 0.223858 11 0.5 11H6.5C6.77614 11 7 10.7761 7 10.5V4.5C7 4.22386 6.77614 4 6.5 4H0.5Z"
            fill="currentColor"
          />
          <path d="M9 5H16V4H9V5Z" fill="currentColor" />
          <path d="M16 8H9V7H16V8Z" fill="currentColor" />
          <path d="M9 11H12.5V10H9V11Z" fill="currentColor" />
        </svg>
      </BaseIcon>
    );
  }
) as IconComponent;

FloatLeftIcon.category = 'Layout';


FloatLeftIcon.displayName = 'FloatLeftIcon';

