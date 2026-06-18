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

export const LogoIcon = React.forwardRef<HTMLDivElement, BaseIconProps>(
  ({size = 24, ...props}, ref) => {
    return (
      <BaseIcon {...props} size={size} ref={ref}>
        <svg
          data-wf-icon="LogoIcon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M23 6L16.9374 18H11.2428L13.78 13.0267H13.6662C11.573 15.7779 8.44991 17.589 4 18V13.0955C4 13.0955 6.84671 12.9253 8.52022 11.1438H4V6.00009H9.08023V10.2307L9.19426 10.2303L11.2702 6.00009H15.1123V10.2039L15.2263 10.2037L17.3802 6H23Z"
            fill="currentColor"
          />
        </svg>
      </BaseIcon>
    );
  }
) as IconComponent;

LogoIcon.category = 'General Icons';


LogoIcon.displayName = 'LogoIcon';

