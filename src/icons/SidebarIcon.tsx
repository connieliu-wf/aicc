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

export const SidebarIcon = React.forwardRef<HTMLDivElement, BaseIconProps>(
  ({size = 16, ...props}, ref) => {
    return (
      <BaseIcon {...props} size={size} ref={ref}>
        <svg
          data-wf-icon="SidebarIcon"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.4"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7 3L13 3L13 13L7 13L7 14L13 14C13.5523 14 14 13.5523 14 13L14 3C14 2.44772 13.5523 2 13 2L7 2L7 3Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3 3L5 3L5 13L3 13L3 3ZM5 2C5.55228 2 6 2.44771 6 3L6 13C6 13.5523 5.55228 14 5 14L3 14C2.44771 14 2 13.5523 2 13L2 3C2 2.44772 2.44771 2 3 2L5 2Z"
            fill="currentColor"
          />
        </svg>
      </BaseIcon>
    );
  }
) as IconComponent;

SidebarIcon.category = 'Layout';


SidebarIcon.displayName = 'SidebarIcon';

