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

export const CropIcon = React.forwardRef<HTMLDivElement, BaseIconProps>(
  ({size = 16, ...props}, ref) => {
    return (
      <BaseIcon {...props} size={size} ref={ref}>
        <svg
          data-wf-icon="CropIcon"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 12C12.5523 12 13 11.5523 13 11V5H15.5V4H13V1.5H12V4H5C4.44772 4 4 4.44772 4 5V11H1.5V12H4V14.5H5V12H12ZM5 11H12V5H5V11Z"
            fill="currentColor"
          />
        </svg>
      </BaseIcon>
    );
  }
) as IconComponent;

CropIcon.category = 'General Icons';


CropIcon.displayName = 'CropIcon';

