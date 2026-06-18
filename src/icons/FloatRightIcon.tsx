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

export const FloatRightIcon = React.forwardRef<HTMLDivElement, BaseIconProps>(
  ({size = 16, ...props}, ref) => {
    return (
      <BaseIcon {...props} size={size} ref={ref}>
        <svg
          data-wf-icon="FloatRightIcon"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 5H7V4H0V5Z" fill="currentColor" />
          <path
            d="M9.5 4C9.22386 4 9 4.22386 9 4.5V10.5C9 10.7761 9.22386 11 9.5 11H15.5C15.7761 11 16 10.7761 16 10.5V4.5C16 4.22386 15.7761 4 15.5 4H9.5Z"
            fill="currentColor"
          />
          <path d="M7 8H0V7H7V8Z" fill="currentColor" />
          <path d="M0 11H3.5V10H0V11Z" fill="currentColor" />
        </svg>
      </BaseIcon>
    );
  }
) as IconComponent;

FloatRightIcon.category = 'Layout';


FloatRightIcon.displayName = 'FloatRightIcon';

