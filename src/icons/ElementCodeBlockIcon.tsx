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

export const ElementCodeBlockIcon = React.forwardRef<
  HTMLDivElement,
  BaseIconProps
>(({size = 16, ...props}, ref) => {
  return (
    <BaseIcon {...props} size={size} ref={ref}>
      <svg
        data-wf-icon="ElementCodeBlockIcon"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M6 4.5H8.5" stroke="currentColor" />
        <path d="M8 8.5H12" stroke="currentColor" />
        <path d="M8 6.5H12" stroke="currentColor" />
        <path d="M6 10.5H8.5" stroke="currentColor" />
        <rect
          x="2.5"
          y="2.5"
          width="11"
          height="10"
          rx="0.5"
          stroke="currentColor"
        />
        <path opacity="0.4" d="M4.5 3L4.5 12" stroke="currentColor" />
      </svg>
    </BaseIcon>
  );
}) as IconComponent;

ElementCodeBlockIcon.tags = ['code', 'code block'];

ElementCodeBlockIcon.category = 'Navigator';


ElementCodeBlockIcon.displayName = 'ElementCodeBlockIcon';

