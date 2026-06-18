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

export const LocationIcon = React.forwardRef<HTMLDivElement, BaseIconProps>(
  ({size = 16, ...props}, ref) => {
    return (
      <BaseIcon {...props} size={size} ref={ref}>
        <svg
          data-wf-icon="LocationIcon"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8ZM13 8C13 10.7614 10.7614 13 8 13C7.83894 13 7.67966 12.9924 7.5225 12.9775L10 10.5V9C10 8.44772 9.55228 8 9 8H8V7H9V6L8 5L9.70263 3.29737C11.6258 3.99382 13 5.83643 13 8ZM5.00147 3.99853C3.78619 4.91067 3 6.36352 3 8C3 10.5927 4.97334 12.7245 7.5 12.9753V10H6V9L7 8L5.29289 6.29289C5.10536 6.10536 5 5.851 5 5.58579V4L5.00147 3.99853Z"
            fill="currentColor"
          />
        </svg>
      </BaseIcon>
    );
  }
) as IconComponent;

LocationIcon.tags = ['globe', 'earth'];

LocationIcon.category = 'General Icons';


LocationIcon.displayName = 'LocationIcon';

