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

export const ThumbDownIcon = React.forwardRef<HTMLDivElement, BaseIconProps>(
  ({size = 16, ...props}, ref) => {
    return (
      <BaseIcon {...props} size={size} ref={ref}>
        <svg
          data-wf-icon="ThumbDownIcon"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7 13.7071C6.81246 13.8946 6.55811 14 6.29289 14H6C5.44771 14 5 13.5523 5 13V10H3C2.44772 10 2 9.55228 2 9V7.61803C2 7.46279 2.03615 7.30968 2.10557 7.17082L3.91459 3.55279C4.08398 3.214 4.43025 3 4.80902 3H13C13.5523 3 14 3.44771 14 4V9C14 9.55229 13.5523 10 13 10H10.7071L7 13.7071ZM6 13L6.29289 13L10 9.29289C10.1875 9.10536 10.4419 9 10.7071 9H13V4H4.80902L3 7.61803V9H5C5.55228 9 6 9.44772 6 10V13Z"
            fill="currentColor"
          />
          <path
            opacity="0.4"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11 3V10H10V3H11Z"
            fill="currentColor"
          />
        </svg>
      </BaseIcon>
    );
  }
) as IconComponent;

ThumbDownIcon.category = 'General Icons';


ThumbDownIcon.displayName = 'ThumbDownIcon';

