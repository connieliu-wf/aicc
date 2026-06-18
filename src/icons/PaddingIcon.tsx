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

export const PaddingIcon = React.forwardRef<HTMLDivElement, BaseIconProps>(
  ({size = 16, ...props}, ref) => {
    return (
      <BaseIcon {...props} size={size} ref={ref}>
        <svg
          data-wf-icon="PaddingIcon"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M11.5 3H4.5V2H11.5V3Z" fill="currentColor" />
          <path d="M3 4.5L3 11.5H2L2 4.5H3Z" fill="currentColor" />
          <path d="M4.5 14H11.5V13H4.5V14Z" fill="currentColor" />
          <path d="M14 4.5V11.5H13V4.5H14Z" fill="currentColor" />
          <path
            d="M6.5 6C6.22386 6 6 6.22386 6 6.5V9.5C6 9.77614 6.22386 10 6.5 10H9.5C9.77614 10 10 9.77614 10 9.5V6.5C10 6.22386 9.77614 6 9.5 6H6.5Z"
            fill="currentColor"
          />
        </svg>
      </BaseIcon>
    );
  }
) as IconComponent;

PaddingIcon.tags = ['square', 'lines', 'outline', 'boundary'];

PaddingIcon.category = 'General Icons';


PaddingIcon.displayName = 'PaddingIcon';

