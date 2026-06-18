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

export const FolderOpenIcon = React.forwardRef<HTMLDivElement, BaseIconProps>(
  ({size = 16, ...props}, ref) => {
    return (
      <BaseIcon {...props} size={size} ref={ref}>
        <svg
          data-wf-icon="FolderOpenIcon"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 3C1.44772 3 1 3.44772 1 4V7H2V4H5.29289L7.29289 6H12V5H7.70711L5.70711 3H2Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.83852 7C3.42961 7 3.0619 7.24895 2.91004 7.62861L1.31004 11.6286C1.04729 12.2855 1.53105 13 2.23852 13H12.1615C12.5704 13 12.9381 12.751 13.09 12.3714L14.69 8.37139C14.9527 7.71453 14.4689 7 13.7615 7H3.83852ZM3.83852 8L13.7615 8L12.1615 12H2.23852L3.83852 8Z"
            fill="currentColor"
          />
        </svg>
      </BaseIcon>
    );
  }
) as IconComponent;

FolderOpenIcon.tags = ['file'];

FolderOpenIcon.category = 'General Icons';


FolderOpenIcon.displayName = 'FolderOpenIcon';

