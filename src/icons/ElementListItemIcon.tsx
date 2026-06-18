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

export const ElementListItemIcon = React.forwardRef<
  HTMLDivElement,
  BaseIconProps
>(({size = 16, ...props}, ref) => {
  return (
    <BaseIcon {...props} size={size} ref={ref}>
      <svg
        data-wf-icon="ElementListItemIcon"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path opacity="0.4" d="M6 3.5H14" stroke="currentColor" />
        <path d="M6 7.5H14" stroke="currentColor" />
        <path opacity="0.4" d="M6 11.5H14" stroke="currentColor" />
        <rect
          opacity="0.4"
          x="2.5"
          y="10.5"
          width="2"
          height="2"
          rx="0.5"
          fill="currentColor"
        />
        <rect
          x="2.5"
          y="6.5"
          width="2"
          height="2"
          rx="0.5"
          fill="currentColor"
        />
        <rect
          opacity="0.4"
          x="2.5"
          y="2.5"
          width="2"
          height="2"
          rx="0.5"
          fill="currentColor"
        />
      </svg>
    </BaseIcon>
  );
}) as IconComponent;

ElementListItemIcon.tags = ['list', 'list item'];

ElementListItemIcon.category = 'Navigator';


ElementListItemIcon.displayName = 'ElementListItemIcon';

