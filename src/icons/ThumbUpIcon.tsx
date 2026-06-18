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

export const ThumbUpIcon = React.forwardRef<HTMLDivElement, BaseIconProps>(
  ({size = 16, ...props}, ref) => {
    return (
      <BaseIcon {...props} size={size} ref={ref}>
        <svg
          data-wf-icon="ThumbUpIcon"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9 2.29289C9.18754 2.10536 9.44189 2 9.70711 2H10C10.5523 2 11 2.44772 11 3V6H13C13.5523 6 14 6.44772 14 7V8.38197C14 8.53721 13.9639 8.69032 13.8944 8.82918L12.0854 12.4472C11.916 12.786 11.5698 13 11.191 13H3C2.44772 13 2 12.5523 2 12V7C2 6.44771 2.44772 6 3 6H5.29289L9 2.29289ZM10 3L9.70711 3L6 6.70711C5.81246 6.89464 5.55811 7 5.29289 7H3V12H11.191L13 8.38197V7H11C10.4477 7 10 6.55228 10 6V3Z"
            fill="currentColor"
          />
          <path
            opacity="0.4"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5 13V6H6V13H5Z"
            fill="currentColor"
          />
        </svg>
      </BaseIcon>
    );
  }
) as IconComponent;

ThumbUpIcon.category = 'General Icons';


ThumbUpIcon.displayName = 'ThumbUpIcon';

