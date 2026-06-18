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

export const CodeIcon = React.forwardRef<HTMLDivElement, BaseIconProps>(
  ({size = 16, ...props}, ref) => {
    return (
      <BaseIcon {...props} size={size} ref={ref}>
        <svg
          data-wf-icon="CodeIcon"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.01494 13.8787L6.00001 13.9384V14H7.0154L9.98509 2.12127L10 2.06155V2H8.98463L6.01494 13.8787ZM2.70712 8L4.85357 10.1464L4.14646 10.8536L1.64646 8.35355L1.29291 8L1.64646 7.64645L4.14646 5.14645L4.85357 5.85355L2.70712 8ZM13.2929 8L11.1465 10.1464L11.8536 10.8536L14.3536 8.35355L14.7071 8L14.3536 7.64645L11.8536 5.14645L11.1465 5.85355L13.2929 8Z"
            fill="currentColor"
          />
        </svg>
      </BaseIcon>
    );
  }
) as IconComponent;

CodeIcon.tags = ['bracket', 'build'];

CodeIcon.category = 'General Icons';


CodeIcon.displayName = 'CodeIcon';

