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

export const CheckDefaultIcon = React.forwardRef<HTMLDivElement, BaseIconProps>(
  ({size = 16, ...props}, ref) => {
    return (
      <BaseIcon {...props} size={size} ref={ref}>
        <svg
          data-wf-icon="CheckDefaultIcon"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.3536 4.35355L6.85377 10.8541C6.76 10.9479 6.63281 11.0006 6.5002 11.0006C6.36758 11.0006 6.24039 10.9479 6.14662 10.8541L2.64648 7.35355L3.35363 6.64649L6.5002 9.79342L12.6465 3.64648L13.3536 4.35355Z"
            fill="currentColor"
          />
        </svg>
      </BaseIcon>
    );
  }
) as IconComponent;

CheckDefaultIcon.tags = ['confirm', 'mark', 'yes'];

CheckDefaultIcon.category = 'General Icons';


CheckDefaultIcon.displayName = 'CheckDefaultIcon';

