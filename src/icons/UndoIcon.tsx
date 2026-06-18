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

export const UndoIcon = React.forwardRef<HTMLDivElement, BaseIconProps>(
  ({size = 16, ...props}, ref) => {
    return (
      <BaseIcon {...props} size={size} ref={ref}>
        <svg
          data-wf-icon="UndoIcon"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.70712 5.00004L6.35357 2.35359L5.64646 1.64648L1.79291 5.50004L5.64646 9.35359L6.35357 8.64648L3.70712 6.00004H10C11.6569 6.00004 13 7.34318 13 9.00004C13 10.6569 11.6569 12 10 12H8.00001V13H10C12.2092 13 14 11.2092 14 9.00004C14 6.7909 12.2092 5.00004 10 5.00004H3.70712Z"
            fill="currentColor"
          />
        </svg>
      </BaseIcon>
    );
  }
) as IconComponent;

UndoIcon.tags = ['arrow', 'left', 'go back'];

UndoIcon.category = 'General Icons';


UndoIcon.displayName = 'UndoIcon';

