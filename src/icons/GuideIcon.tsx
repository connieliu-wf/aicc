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

export const GuideIcon = React.forwardRef<HTMLDivElement, BaseIconProps>(
  ({size = 16, ...props}, ref) => {
    return (
      <BaseIcon {...props} size={size} ref={ref}>
        <svg
          data-wf-icon="GuideIcon"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2 2C1.44772 2 1 2.44772 1 3V12C1 12.5523 1.44772 13 2 13H4.13604C5.19691 13 6.21432 13.4214 6.96447 14.1716L7.29289 14.5C7.68342 14.8905 8.31658 14.8905 8.70711 14.5L9.03553 14.1716C9.78568 13.4214 10.8031 13 11.864 13H14C14.5523 13 15 12.5523 15 12V3C15 2.44772 14.5523 2 14 2H11.864C10.5379 2 9.26611 2.52678 8.32843 3.46447L8 3.79289L7.67157 3.46447C6.73389 2.52678 5.46212 2 4.13604 2H2ZM2 3L4.13604 3C5.1969 3 6.21432 3.42143 6.96447 4.17157L7.5 4.70711V13.3008C6.58174 12.4657 5.3829 12 4.13604 12H2V3ZM8.5 13.3008C9.41826 12.4657 10.6171 12 11.864 12H14V3H11.864C10.8031 3 9.78568 3.42143 9.03553 4.17157L8.5 4.70711V13.3008Z"
            fill="currentColor"
          />
        </svg>
      </BaseIcon>
    );
  }
) as IconComponent;

GuideIcon.tags = ['book', 'how to', 'instructions', 'library'];

GuideIcon.category = 'General Icons';


GuideIcon.displayName = 'GuideIcon';

