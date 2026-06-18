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

export const ElementTabItemIcon = React.forwardRef<
  HTMLDivElement,
  BaseIconProps
>(({size = 16, ...props}, ref) => {
  return (
    <BaseIcon {...props} size={size} ref={ref}>
      <svg
        data-wf-icon="ElementTabItemIcon"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2 6C2 5.44772 2.44772 5 3 5H9C9.55228 5 10 5.44772 10 6V9H13C13.5523 9 14 9.44772 14 10V13C14 13.5523 13.5523 14 13 14H3C2.44772 14 2 13.5523 2 13V6ZM9 6H3V13H13V10H10C9.44772 10 9 9.55228 9 9V6Z"
          fill="currentColor"
        />
        <path
          opacity="0.6"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2 3C2 2.44772 2.44772 2 3 2H13C13.5523 2 14 2.44772 14 3V10H13V3H3V6H2V3Z"
          fill="currentColor"
        />
      </svg>
    </BaseIcon>
  );
}) as IconComponent;

ElementTabItemIcon.tags = ['tab', 'tabs', 'tab item'];

ElementTabItemIcon.category = 'Navigator';


ElementTabItemIcon.displayName = 'ElementTabItemIcon';

