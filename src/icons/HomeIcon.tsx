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

export const HomeIcon = React.forwardRef<HTMLDivElement, BaseIconProps>(
  ({size = 16, ...props}, ref) => {
    return (
      <BaseIcon {...props} size={size} ref={ref}>
        <svg
          data-wf-icon="HomeIcon"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.35353 1.64645C8.15827 1.45118 7.84169 1.45118 7.64642 1.64645L1.14642 8.14645L1.85353 8.85355L2.99998 7.70711V12C2.99998 12.5523 3.44769 13 3.99998 13H12C12.5523 13 13 12.5523 13 12V7.70711L14.1464 8.85355L14.8535 8.14645L8.35353 1.64645ZM12 6.70711L7.99998 2.70711L3.99998 6.70711V12H12V6.70711Z"
            fill="currentColor"
          />
        </svg>
      </BaseIcon>
    );
  }
) as IconComponent;

HomeIcon.tags = ['house'];

HomeIcon.category = 'General Icons';


HomeIcon.displayName = 'HomeIcon';

