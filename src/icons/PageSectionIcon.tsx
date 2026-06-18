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

export const PageSectionIcon = React.forwardRef<HTMLDivElement, BaseIconProps>(
  ({size = 16, ...props}, ref) => {
    return (
      <BaseIcon {...props} size={size} ref={ref}>
        <svg
          data-wf-icon="PageSectionIcon"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 3C3 2.44772 3.44772 2 4 2H8.70711L13 6.29289V13C13 13.5523 12.5523 14 12 14H4C3.44772 14 3 13.5523 3 13V11H4V13H12V6.70711L8.29289 3H4V6H3V3Z"
            fill="currentColor"
          />
          <path
            d="M6.64645 6.35355L8.29289 8H3V9H8.29289L6.64645 10.6464L7.35355 11.3536L10.2071 8.5L7.35355 5.64645L6.64645 6.35355Z"
            fill="currentColor"
          />
        </svg>
      </BaseIcon>
    );
  }
) as IconComponent;

PageSectionIcon.tags = ['paper', 'plus', 'in page linking', 'page section'];

PageSectionIcon.category = 'General Icons';


PageSectionIcon.displayName = 'PageSectionIcon';

