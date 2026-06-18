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

export const ElementCheckboxIcon = React.forwardRef<
  HTMLDivElement,
  BaseIconProps
>(({size = 16, ...props}, ref) => {
  return (
    <BaseIcon {...props} size={size} ref={ref}>
      <svg
        data-wf-icon="ElementCheckboxIcon"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.4"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3 3C3 2.44772 3.44772 2 4 2H10V3H4V12H13V8H14V12C14 12.5523 13.5523 13 13 13H4C3.44772 13 3 12.5523 3 12V3Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.3536 3.35359L8.50003 9.20715L5.64648 6.35359L6.35359 5.64648L8.50003 7.79293L13.6465 2.64648L14.3536 3.35359Z"
          fill="currentColor"
        />
      </svg>
    </BaseIcon>
  );
}) as IconComponent;

ElementCheckboxIcon.tags = ['checkbox'];

ElementCheckboxIcon.category = 'Navigator';


ElementCheckboxIcon.displayName = 'ElementCheckboxIcon';

