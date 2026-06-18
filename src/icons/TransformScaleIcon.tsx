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

export const TransformScaleIcon = React.forwardRef<
  HTMLDivElement,
  BaseIconProps
>(({size = 16, ...props}, ref) => {
  return (
    <BaseIcon {...props} size={size} ref={ref}>
      <svg
        data-wf-icon="TransformScaleIcon"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.35355 9.35355L3.70711 13H7V14H2V9H3V12.2929L6.64645 8.64645L7.35355 9.35355Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9 2H14V7H13V3.70711L9.35355 7.35355L8.64645 6.64645L12.2929 3H9V2Z"
          fill="currentColor"
        />
        <g opacity="0.4">
          <path
            d="M8 3H4C3.44772 3 3 3.44772 3 4V8H4V4H8V3Z"
            fill="currentColor"
          />
          <path
            d="M8 12H12V8H13V12C13 12.5523 12.5523 13 12 13H8V12Z"
            fill="currentColor"
          />
        </g>
      </svg>
    </BaseIcon>
  );
}) as IconComponent;

TransformScaleIcon.category = 'Layout';


TransformScaleIcon.displayName = 'TransformScaleIcon';

