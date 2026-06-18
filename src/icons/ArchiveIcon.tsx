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

export const ArchiveIcon = React.forwardRef<HTMLDivElement, BaseIconProps>(
  ({size = 16, ...props}, ref) => {
    return (
      <BaseIcon {...props} size={size} ref={ref}>
        <svg
          data-wf-icon="ArchiveIcon"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.5 9H6.5V8H9.5V9Z" fill="currentColor" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3 2C2.44772 2 2 2.44772 2 3V5C2 5.55229 2.44772 6 3 6L3 12C3 12.5523 3.44772 13 4 13H12C12.5523 13 13 12.5523 13 12V6C13.5523 6 14 5.55228 14 5V3C14 2.44771 13.5523 2 13 2H3ZM12 6H4V12H12V6ZM13 5V3H3V5H13Z"
            fill="currentColor"
          />
        </svg>
      </BaseIcon>
    );
  }
) as IconComponent;

ArchiveIcon.tags = ['file', 'box', 'storage'];

ArchiveIcon.category = 'General Icons';


ArchiveIcon.displayName = 'ArchiveIcon';

