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

export const MediaQuerySmallIcon = React.forwardRef<
  HTMLDivElement,
  BaseIconProps
>(({size = 16, ...props}, ref) => {
  return (
    <BaseIcon {...props} size={size} ref={ref}>
      <svg
        data-wf-icon="MediaQuerySmallIcon"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3 3C2.44772 3 2 3.44772 2 4V10C2 10.5523 2.44772 11 3 11H8V12H5.5V13H8.5H9V12.5V10.5V10H8.5H3V4H13V5H14V4C14 3.44772 13.5523 3 13 3H3ZM11 6C10.4477 6 10 6.44772 10 7V13C10 13.5523 10.4477 14 11 14H14C14.5523 14 15 13.5523 15 13V7C15 6.44772 14.5523 6 14 6H11ZM11 7H14V13H11V7Z"
          fill="currentColor"
        />
      </svg>
    </BaseIcon>
  );
}) as IconComponent;

MediaQuerySmallIcon.category = 'Layout';


MediaQuerySmallIcon.displayName = 'MediaQuerySmallIcon';

