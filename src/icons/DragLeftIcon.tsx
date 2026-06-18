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

export const DragLeftIcon = React.forwardRef<HTMLDivElement, BaseIconProps>(
  ({size = 16, ...props}, ref) => {
    return (
      <BaseIcon {...props} size={size} ref={ref}>
        <svg
          data-wf-icon="DragLeftIcon"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 3V13H11V3H10Z" fill="currentColor" />
          <path d="M7 11V5H8V11H7Z" fill="currentColor" />
          <path d="M4 9V7H5V9H4Z" fill="currentColor" />
        </svg>
      </BaseIcon>
    );
  }
) as IconComponent;

DragLeftIcon.tags = ['arrow', 'lines', 'triangle', 'caret', 'move'];

DragLeftIcon.category = 'General Icons';


DragLeftIcon.displayName = 'DragLeftIcon';

