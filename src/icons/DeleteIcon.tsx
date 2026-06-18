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

export const DeleteIcon = React.forwardRef<HTMLDivElement, BaseIconProps>(
  ({size = 16, ...props}, ref) => {
    return (
      <BaseIcon {...props} size={size} ref={ref}>
        <svg
          data-wf-icon="DeleteIcon"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7 2C6.44772 2 6 2.44772 6 3V4H3V5H4V11.5C4 12.3284 4.67157 13 5.5 13H11.5C12.3284 13 13 12.3284 13 11.5V5H14V4H11V3C11 2.44772 10.5523 2 10 2H7ZM10 4V3H7V4H10ZM5 11.5V5H12V11.5C12 11.7761 11.7761 12 11.5 12H5.5C5.22386 12 5 11.7761 5 11.5Z"
            fill="currentColor"
          />
        </svg>
      </BaseIcon>
    );
  }
) as IconComponent;

DeleteIcon.tags = ['trash', 'garbage', 'can'];

DeleteIcon.category = 'General Icons';


DeleteIcon.displayName = 'DeleteIcon';

