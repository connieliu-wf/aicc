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

export const OverflowScrollIcon = React.forwardRef<
  HTMLDivElement,
  BaseIconProps
>(({size = 16, ...props}, ref) => {
  return (
    <BaseIcon {...props} size={size} ref={ref}>
      <svg
        data-wf-icon="OverflowScrollIcon"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.4"
          d="M3 3H8V11H3V3Z"
          fill="currentColor"
          fillOpacity="0.67"
        />
        <path d="M1 2H15V3L1 3V2Z" fill="currentColor" fillOpacity="0.67" />
        <path d="M1 11H8V12H1V11Z" fill="currentColor" fillOpacity="0.67" />
        <path
          d="M12 11.2929L10.3536 9.64645L9.64645 10.3536L12.5 13.2071L15.3536 10.3536L14.6464 9.64645L13 11.2929V5H12V11.2929Z"
          fill="currentColor"
          fillOpacity="0.67"
        />
      </svg>
    </BaseIcon>
  );
}) as IconComponent;

OverflowScrollIcon.category = 'Layout';


OverflowScrollIcon.displayName = 'OverflowScrollIcon';

