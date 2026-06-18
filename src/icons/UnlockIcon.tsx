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

export const UnlockIcon = React.forwardRef<HTMLDivElement, BaseIconProps>(
  ({size = 16, ...props}, ref) => {
    return (
      <BaseIcon {...props} size={size} ref={ref}>
        <svg
          data-wf-icon="UnlockIcon"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9 5C9 3.89543 9.89543 3 11 3C12.1046 3 13 3.89543 13 5V6H14V5C14 3.34315 12.6569 2 11 2C9.34315 2 8 3.34315 8 5V7H3C2.44772 7 2 7.44771 2 8V12C2 12.5523 2.44772 13 3 13H9C9.55228 13 10 12.5523 10 12V8C10 7.44772 9.55228 7 9 7V5ZM3 8H9V12H3V8Z"
            fill="currentColor"
          />
        </svg>
      </BaseIcon>
    );
  }
) as IconComponent;

UnlockIcon.tags = ['security', 'tool', 'open'];

UnlockIcon.category = 'General Icons';


UnlockIcon.displayName = 'UnlockIcon';

