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

export const DownloadIcon = React.forwardRef<HTMLDivElement, BaseIconProps>(
  ({size = 16, ...props}, ref) => {
    return (
      <BaseIcon {...props} size={size} ref={ref}>
        <svg
          data-wf-icon="DownloadIcon"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.5 8.26555V2.97266H8.5V8.26555L10.6464 6.1191L11.3536 6.82621L8 10.1798L4.64645 6.82621L5.35355 6.1191L7.5 8.26555Z"
            fill="currentColor"
          />
          <path
            d="M2 12.9727V11.9727L14 11.9727V12.9727L2 12.9727Z"
            fill="currentColor"
          />
        </svg>
      </BaseIcon>
    );
  }
) as IconComponent;

DownloadIcon.tags = ['arrow', 'save'];

DownloadIcon.category = 'General Icons';


DownloadIcon.displayName = 'DownloadIcon';

