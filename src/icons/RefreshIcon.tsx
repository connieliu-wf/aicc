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

export const RefreshIcon = React.forwardRef<HTMLDivElement, BaseIconProps>(
  ({size = 16, ...props}, ref) => {
    return (
      <BaseIcon {...props} size={size} ref={ref}>
        <svg
          data-wf-icon="RefreshIcon"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.5 8C13.5 4.96243 11.0376 2.5 8 2.5C6.76241 2.5 5.61898 2.90936 4.69971 3.59985L5.30029 4.39942C6.05234 3.83453 6.98638 3.5 8 3.5C10.4853 3.5 12.5 5.51472 12.5 8V8.79298L10.8535 7.14649L10.1464 7.8536L13 10.7072L15.8535 7.8536L15.1464 7.14649L13.5 8.7929V8Z"
            fill="currentColor"
          />
          <path
            d="M3.5 7.2071L5.14641 8.85351L5.85352 8.1464L2.99996 5.29285L0.146409 8.1464L0.853516 8.85351L2.5 7.20702V8C2.5 11.0376 4.96243 13.5 8 13.5C9.23759 13.5 10.381 13.0906 11.3003 12.4001L10.6997 11.6006C9.94766 12.1655 9.01362 12.5 8 12.5C5.51472 12.5 3.5 10.4853 3.5 8V7.2071Z"
            fill="currentColor"
          />
        </svg>
      </BaseIcon>
    );
  }
) as IconComponent;

RefreshIcon.tags = ['arrows', 'circle', 'recycle'];

RefreshIcon.category = 'General Icons';


RefreshIcon.displayName = 'RefreshIcon';

