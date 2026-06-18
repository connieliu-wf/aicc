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

export const RedoIcon = React.forwardRef<HTMLDivElement, BaseIconProps>(
  ({size = 16, ...props}, ref) => {
    return (
      <BaseIcon {...props} size={size} ref={ref}>
        <svg
          data-wf-icon="RedoIcon"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.2929 5.00004L9.64645 2.35359L10.3536 1.64648L14.2071 5.50004L10.3536 9.35359L9.64645 8.64648L12.2929 6.00004H6C4.34315 6.00004 3 7.34318 3 9.00004C3 10.6569 4.34315 12 6 12H8V13H6C3.79086 13 2 11.2092 2 9.00004C2 6.7909 3.79086 5.00004 6 5.00004H12.2929Z"
            fill="currentColor"
          />
        </svg>
      </BaseIcon>
    );
  }
) as IconComponent;

RedoIcon.tags = ['arrow', 'right'];

RedoIcon.category = 'General Icons';


RedoIcon.displayName = 'RedoIcon';

