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

export const DragRightIcon = React.forwardRef<HTMLDivElement, BaseIconProps>(
  ({size = 16, ...props}, ref) => {
    return (
      <BaseIcon {...props} size={size} ref={ref}>
        <svg
          data-wf-icon="DragRightIcon"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M5 3V13H6V3H5Z" fill="currentColor" />
          <path d="M8 11V5H9V11H8Z" fill="currentColor" />
          <path d="M11 9V7H12V9H11Z" fill="currentColor" />
        </svg>
      </BaseIcon>
    );
  }
) as IconComponent;

DragRightIcon.tags = ['arrow', 'lines', 'triangle', 'caret', 'move'];

DragRightIcon.category = 'General Icons';


DragRightIcon.displayName = 'DragRightIcon';

