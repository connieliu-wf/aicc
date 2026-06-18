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

export const FontSizeIcon = React.forwardRef<HTMLDivElement, BaseIconProps>(
  ({size = 16, ...props}, ref) => {
    return (
      <BaseIcon {...props} size={size} ref={ref}>
        <svg
          data-wf-icon="FontSizeIcon"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.6"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.29665 12H2.25879L4.20321 5H5.79662L7.7411 12H6.70323L6.14767 10H3.8522L3.29665 12ZM5.03654 6L5.86989 9H4.12998L4.9633 6H5.03654Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.93573 8.77475L8.45566 10.5985L8.91136 9H12.0886L12.9439 12H13.9837L11.419 3.00391H9.58091L7.93573 8.77475ZM11.8035 8L10.6642 4.00391H10.3357L9.19644 8H11.8035Z"
            fill="currentColor"
          />
        </svg>
      </BaseIcon>
    );
  }
) as IconComponent;

FontSizeIcon.category = 'Typography';


FontSizeIcon.displayName = 'FontSizeIcon';

