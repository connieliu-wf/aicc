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

export const ElementNavIcon = React.forwardRef<HTMLDivElement, BaseIconProps>(
  ({size = 16, ...props}, ref) => {
    return (
      <BaseIcon {...props} size={size} ref={ref}>
        <svg
          data-wf-icon="ElementNavIcon"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.35359 1.64645C8.15833 1.45118 7.84175 1.45118 7.64648 1.64645L1.14648 8.14645L1.85359 8.85355L3.00004 7.70711V12C3.00004 12.5523 3.44775 13 4.00004 13H12C12.5523 13 13 12.5523 13 12V7.70711L14.1465 8.85355L14.8536 8.14645L8.35359 1.64645ZM12 6.70711L8.00004 2.70711L4.00004 6.70711V12H12V6.70711Z"
            fill="currentColor"
          />
        </svg>
      </BaseIcon>
    );
  }
) as IconComponent;

ElementNavIcon.tags = ['nav', 'navigation'];

ElementNavIcon.category = 'Navigator';


ElementNavIcon.displayName = 'ElementNavIcon';

