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

export const PhoneIcon = React.forwardRef<HTMLDivElement, BaseIconProps>(
  ({size = 16, ...props}, ref) => {
    return (
      <BaseIcon {...props} size={size} ref={ref}>
        <svg
          data-wf-icon="PhoneIcon"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.85349 3.14645C4.65823 2.95118 4.34165 2.95118 4.14639 3.14645L3.5606 3.73223C2.58429 4.70854 2.58429 6.29146 3.5606 7.26777L8.73218 12.4393C9.70849 13.4157 11.2914 13.4156 12.2677 12.4393L12.8535 11.8536C13.0488 11.6583 13.0488 11.3417 12.8535 11.1464L10.8535 9.14645C10.6582 8.95118 10.3417 8.95118 10.1464 9.14645L8.49994 10.7929L5.20705 7.5L6.8535 5.85355C7.04876 5.65829 7.04876 5.34171 6.8535 5.14645L4.85349 3.14645Z"
            fill="currentColor"
          />
        </svg>
      </BaseIcon>
    );
  }
) as IconComponent;

PhoneIcon.tags = ['cell', 'mobile', 'contact', 'support', 'number'];

PhoneIcon.category = 'General Icons';


PhoneIcon.displayName = 'PhoneIcon';

