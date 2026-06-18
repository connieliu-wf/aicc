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

export const CommentIcon = React.forwardRef<HTMLDivElement, BaseIconProps>(
  ({size = 16, ...props}, ref) => {
    return (
      <BaseIcon {...props} size={size} ref={ref}>
        <svg
          data-wf-icon="CommentIcon"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.49998 14H3.5C2.67157 14 2 13.3284 2 12.5V7.49999C2 6.21441 2.38122 4.95771 3.09545 3.88879C3.80967 2.81987 4.82483 1.98675 6.01255 1.49478C7.20027 1.00282 8.5072 0.874095 9.76807 1.1249C11.0289 1.3757 12.1871 1.99476 13.0962 2.9038C14.0052 3.81284 14.6243 4.97103 14.8751 6.2319C15.1259 7.49278 14.9972 8.79971 14.5052 9.98742C14.0132 11.1751 13.1801 12.1903 12.1112 12.9045C11.0423 13.6188 9.78556 14 8.49998 14ZM3.5 13H8.49998C9.58778 13 10.6511 12.6774 11.5556 12.0731C12.4601 11.4687 13.165 10.6097 13.5813 9.60474C13.9976 8.59975 14.1065 7.49389 13.8943 6.42699C13.6821 5.3601 13.1583 4.3801 12.3891 3.61091C11.6199 2.84172 10.6399 2.3179 9.57298 2.10568C8.50609 1.89346 7.40022 2.00238 6.39523 2.41866C5.39024 2.83494 4.53126 3.53989 3.92691 4.44436C3.32257 5.34883 3 6.41219 3 7.49999L3 12.5C3 12.7761 3.22386 13 3.5 13ZM11 6.99999H4.99999V5.99999H11V6.99999ZM4.99999 9.99998H7.99999V8.99999H4.99999V9.99998Z"
            fill="currentColor"
          />
        </svg>
      </BaseIcon>
    );
  }
) as IconComponent;

CommentIcon.tags = ['chat', 'bubble', 'reply'];

CommentIcon.category = 'General Icons';


CommentIcon.displayName = 'CommentIcon';

