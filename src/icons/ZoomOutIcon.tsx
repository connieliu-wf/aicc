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

export const ZoomOutIcon = React.forwardRef<HTMLDivElement, BaseIconProps>(
  ({size = 24, ...props}, ref) => {
    return (
      <BaseIcon {...props} size={size} ref={ref}>
        <svg
          data-wf-icon="ZoomOutIcon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.8305 15.7095C18.9169 14.1897 19.5007 12.3682 19.5 10.5C19.5 8.71997 18.9722 6.97991 17.9832 5.49987C16.9943 4.01983 15.5887 2.86628 13.9442 2.18509C12.2996 1.5039 10.49 1.32567 8.74419 1.67294C6.99836 2.0202 5.39472 2.87737 4.13604 4.13604C2.87737 5.39472 2.0202 6.99836 1.67294 8.74419C1.32567 10.49 1.5039 12.2996 2.18509 13.9442C2.86628 15.5887 4.01983 16.9943 5.49987 17.9832C6.97991 18.9722 8.71997 19.5 10.5 19.5C12.3681 19.5005 14.1897 18.9168 15.7095 17.8305L20.379 22.5L22.5 20.379L17.8305 15.7095ZM10.5 18C6.3645 18 3 14.6355 3 10.5C3 6.3645 6.3645 3 10.5 3C14.6355 3 18 6.3645 18 10.5C18 14.6355 14.6355 18 10.5 18ZM6 12H15V9H6V12Z"
            fill="currentColor"
          />
        </svg>
      </BaseIcon>
    );
  }
) as IconComponent;

ZoomOutIcon.category = 'Cursors';


ZoomOutIcon.displayName = 'ZoomOutIcon';

