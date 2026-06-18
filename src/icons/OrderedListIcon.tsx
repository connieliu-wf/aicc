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

export const OrderedListIcon = React.forwardRef<HTMLDivElement, BaseIconProps>(
  ({size = 16, ...props}, ref) => {
    return (
      <BaseIcon {...props} size={size} ref={ref}>
        <svg
          data-wf-icon="OrderedListIcon"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6 6.5V3H5V6.5H6Z" fill="currentColor" />
          <path d="M8 5H14V6H8V5Z" fill="currentColor" />
          <path d="M8 11H14V12H8V11Z" fill="currentColor" />
          <path d="M6 9V12.5H5V9H6Z" fill="currentColor" />
          <path d="M4 12.5V9H3V12.5H4Z" fill="currentColor" />
        </svg>
      </BaseIcon>
    );
  }
) as IconComponent;

OrderedListIcon.category = 'Tags';


OrderedListIcon.displayName = 'OrderedListIcon';

