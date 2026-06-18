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

export const BezierEditorIcon = React.forwardRef<HTMLDivElement, BaseIconProps>(
  ({size = 16, ...props}, ref) => {
    return (
      <BaseIcon {...props} size={size} ref={ref}>
        <svg
          data-wf-icon="BezierEditorIcon"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 2.5C15 2.22386 14.7761 2 14.5 2H12.5C12.2239 2 12 2.22386 12 2.5V3C8.13401 3 5 6.13401 5 10H4.5C4.22386 10 4 10.2239 4 10.5V12.5C4 12.7761 4.22386 13 4.5 13H6.5C6.77614 13 7 12.7761 7 12.5V10.5C7 10.2239 6.77614 10 6.5 10H6C6 6.68629 8.68629 4 12 4V4.5C12 4.77614 12.2239 5 12.5 5H14.5C14.7761 5 15 4.77614 15 4.5V2.5Z"
            fill="currentColor"
          />
          <path
            opacity="0.4"
            d="M3.91465 4C3.70873 4.5826 3.15311 5 2.5 5C1.67157 5 1 4.32843 1 3.5C1 2.67157 1.67157 2 2.5 2C3.15311 2 3.70873 2.4174 3.91465 3H7V4H3.91465Z"
            fill="currentColor"
          />
        </svg>
      </BaseIcon>
    );
  }
) as IconComponent;

BezierEditorIcon.category = 'Layout';


BezierEditorIcon.displayName = 'BezierEditorIcon';

