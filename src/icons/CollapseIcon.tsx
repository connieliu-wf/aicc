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

export const CollapseIcon = React.forwardRef<HTMLDivElement, BaseIconProps>(
  ({size = 16, ...props}, ref) => {
    return (
      <BaseIcon {...props} size={size} ref={ref}>
        <svg
          data-wf-icon="CollapseIcon"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.1465 3.14648L8.50004 5.79293L5.85359 3.14648L5.14648 3.85359L8.14648 6.85359L8.50004 7.20714L8.85359 6.85359L11.8536 3.85359L11.1465 3.14648ZM11.1465 12.8536L8.50004 10.2071L5.85359 12.8536L5.14648 12.1465L8.14649 9.14648L8.50004 8.79293L8.85359 9.14648L11.8536 12.1465L11.1465 12.8536Z"
            fill="currentColor"
          />
        </svg>
      </BaseIcon>
    );
  }
) as IconComponent;

CollapseIcon.tags = ['caret', 'arrows', 'ducks', 'kiss'];

CollapseIcon.category = 'General Icons';


CollapseIcon.displayName = 'CollapseIcon';

