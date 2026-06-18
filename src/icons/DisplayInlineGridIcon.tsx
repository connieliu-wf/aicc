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

export const DisplayInlineGridIcon = React.forwardRef<
  HTMLDivElement,
  BaseIconProps
>(({size = 16, ...props}, ref) => {
  return (
    <BaseIcon {...props} size={size} ref={ref}>
      <svg
        data-wf-icon="DisplayInlineGridIcon"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.4">
          <path d="M1 1V15H2V1H1Z" fill="currentColor" />
          <path d="M14 1V15H15V1H14Z" fill="currentColor" />
        </g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11 4H8.5V7.5H11V4ZM11 8.5H8.5V12H11V8.5ZM7.5 7.5V4H5V7.5H7.5ZM5 8.5H7.5V12H5V8.5ZM5 3C4.44772 3 4 3.44772 4 4V12C4 12.5523 4.44772 13 5 13H11C11.5523 13 12 12.5523 12 12V4C12 3.44772 11.5523 3 11 3H5Z"
          fill="currentColor"
        />
      </svg>
    </BaseIcon>
  );
}) as IconComponent;

DisplayInlineGridIcon.category = 'Layout';


DisplayInlineGridIcon.displayName = 'DisplayInlineGridIcon';

