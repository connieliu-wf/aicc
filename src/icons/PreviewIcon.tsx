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

export const PreviewIcon = React.forwardRef<HTMLDivElement, BaseIconProps>(
  ({size = 16, ...props}, ref) => {
    return (
      <BaseIcon {...props} size={size} ref={ref}>
        <svg
          data-wf-icon="PreviewIcon"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.26151 1.06054C3.42267 0.973086 3.61876 0.980852 3.77249 1.08078L13.7725 7.58078C13.9144 7.67301 14 7.83076 14 8C14 8.16924 13.9144 8.32699 13.7725 8.41922L3.77249 14.9192C3.61876 15.0191 3.42267 15.0269 3.26151 14.9395C3.10036 14.852 3 14.6834 3 14.5V1.5C3 1.31665 3.10036 1.148 3.26151 1.06054ZM4 2.42134V13.5787L12.5825 8L4 2.42134Z"
            fill="currentColor"
          />
        </svg>
      </BaseIcon>
    );
  }
) as IconComponent;

PreviewIcon.tags = ['eye', 'show'];

PreviewIcon.category = 'General Icons';


PreviewIcon.displayName = 'PreviewIcon';

