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

export const FolderAddIcon = React.forwardRef<HTMLDivElement, BaseIconProps>(
  ({size = 16, ...props}, ref) => {
    return (
      <BaseIcon {...props} size={size} ref={ref}>
        <svg
          data-wf-icon="FolderAddIcon"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 4C2 3.44772 2.44772 3 3 3H6.70711L8.70711 5H13C13.5523 5 14 5.44772 14 6V7.5H13V6H8.29289L6.29289 4H3V12H8.5V13H3C2.44771 13 2 12.5523 2 12V4Z"
            fill="currentColor"
          />
          <path
            d="M13 11V9H12V11H10V12H12V14H13V12H15V11H13Z"
            fill="currentColor"
          />
        </svg>
      </BaseIcon>
    );
  }
) as IconComponent;

FolderAddIcon.tags = ['file'];

FolderAddIcon.category = 'General Icons';


FolderAddIcon.displayName = 'FolderAddIcon';

