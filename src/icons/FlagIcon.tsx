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

export const FlagIcon = React.forwardRef<HTMLDivElement, BaseIconProps>(
  ({size = 16, ...props}, ref) => {
    return (
      <BaseIcon {...props} size={size} ref={ref}>
        <svg
          data-wf-icon="FlagIcon"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.11111 2.16667V1H3V15H4.11111V9.16667H12C12.5523 9.16667 13 8.71895 13 8.16667V3.16667C13 2.61438 12.5523 2.16667 12 2.16667H4.11111ZM11.8889 5.66667H9.66667V3.33333H11.8889V5.66667ZM9.66667 5.66667V8H7.44444V5.66667H9.66667ZM7.44444 3.33333V5.66667H5.22222V3.33333H7.44444Z"
            fill="currentColor"
          />
        </svg>
      </BaseIcon>
    );
  }
) as IconComponent;

FlagIcon.tags = ['note', 'alert'];

FlagIcon.category = 'General Icons';


FlagIcon.displayName = 'FlagIcon';

