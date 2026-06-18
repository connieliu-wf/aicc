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

export const CloseDefaultIcon = React.forwardRef<HTMLDivElement, BaseIconProps>(
  ({size = 16, ...props}, ref) => {
    return (
      <BaseIcon {...props} size={size} ref={ref}>
        <svg
          data-wf-icon="CloseDefaultIcon"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.70711 8.00004L12.3536 4.35359L11.6465 3.64648L8.00001 7.29293L4.35356 3.64648L3.64645 4.35359L7.2929 8.00004L3.64645 11.6465L4.35356 12.3536L8.00001 8.70714L11.6465 12.3536L12.3536 11.6465L8.70711 8.00004Z"
            fill="currentColor"
          />
        </svg>
      </BaseIcon>
    );
  }
) as IconComponent;

CloseDefaultIcon.tags = ['x', 'cancel', 'dismiss', 'no'];

CloseDefaultIcon.category = 'General Icons';


CloseDefaultIcon.displayName = 'CloseDefaultIcon';

