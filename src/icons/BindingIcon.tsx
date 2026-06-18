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

export const BindingIcon = React.forwardRef<HTMLDivElement, BaseIconProps>(
  ({size = 16, ...props}, ref) => {
    return (
      <BaseIcon {...props} size={size} ref={ref}>
        <svg
          data-wf-icon="BindingIcon"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 14V9.5C8 9.22386 8.22386 9 8.5 9C8.77614 9 9 9.22386 9 9.5V14H8ZM8.5 6C8.33024 6 8.1633 6.01209 8 6.03544C6.30385 6.27806 5 7.73676 5 9.5H4C4 7.18372 5.75002 5.27619 8 5.02746V1H9V5.02746C11.25 5.27619 13 7.18372 13 9.5H12C12 7.73676 10.6961 6.27806 9 6.03544C8.8367 6.01209 8.66976 6 8.5 6Z"
            fill="currentColor"
          />
        </svg>
      </BaseIcon>
    );
  }
) as IconComponent;

BindingIcon.tags = ['connection', 'link', 'bound'];

BindingIcon.category = 'General Icons';


BindingIcon.displayName = 'BindingIcon';

