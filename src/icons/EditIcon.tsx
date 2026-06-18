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

export const EditIcon = React.forwardRef<HTMLDivElement, BaseIconProps>(
  ({size = 16, ...props}, ref) => {
    return (
      <BaseIcon {...props} size={size} ref={ref}>
        <svg
          data-wf-icon="EditIcon"
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
            d="M11.1465 6.85359L9.14648 4.85359L9.85359 4.14648L11.8536 6.14648L11.1465 6.85359Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.4393 2.35352C11.0251 1.76774 11.9749 1.76774 12.5607 2.35352L13.6464 3.43931C14.2322 4.0251 14.2322 4.97484 13.6464 5.56063L6.20711 13H3V9.79286L10.4393 2.35352ZM11.8536 3.06063C11.6583 2.86537 11.3417 2.86537 11.1464 3.06063L4 10.2071V12H5.79289L12.9393 4.85352C13.1346 4.65826 13.1346 4.34168 12.9393 4.14642L11.8536 3.06063Z"
            fill="currentColor"
          />
        </svg>
      </BaseIcon>
    );
  }
) as IconComponent;

EditIcon.tags = ['pencil', 'change', 'settings'];

EditIcon.category = 'General Icons';


EditIcon.displayName = 'EditIcon';

