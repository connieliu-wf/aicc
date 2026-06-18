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

export const ShrinkIcon = React.forwardRef<HTMLDivElement, BaseIconProps>(
  ({size = 16, ...props}, ref) => {
    return (
      <BaseIcon {...props} size={size} ref={ref}>
        <svg
          data-wf-icon="ShrinkIcon"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.6465 1.64648L10 5.29293V3.00004H9.00004V6.50004V7.00004H9.50004H13V6.00004H10.7071L14.3536 2.35359L13.6465 1.64648ZM2.35359 14.3536L6.00004 10.7071V13H7.00004V9.50004V9.00004H6.50004H3.00004V10H5.29293L1.64648 13.6465L2.35359 14.3536Z"
            fill="currentColor"
          />
        </svg>
      </BaseIcon>
    );
  }
) as IconComponent;

ShrinkIcon.tags = ['collapse', 'contract', 'minimize'];

ShrinkIcon.category = 'General Icons';


ShrinkIcon.displayName = 'ShrinkIcon';

