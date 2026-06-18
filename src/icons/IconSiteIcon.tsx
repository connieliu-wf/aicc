/* eslint-disable react/jsx-sort-props */
import React from 'react';
import {Icon as BaseIcon, type BaseIconProps} from './Icon/Icon';
import {IconComponent} from './types';

export const IconSiteIcon = React.forwardRef<HTMLDivElement, BaseIconProps>(
  ({size = 16, ...props}, ref) => {
    return (
      <BaseIcon {...props} size={size} ref={ref}>
        <svg
          data-wf-icon="IconSiteIcon"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.63574 6.60059C7.78035 6.492 7.97225 6.46902 8.1377 6.54199L14.3018 9.26562C14.4818 9.34544 14.5988 9.5237 14.5996 9.7207C14.6003 9.91795 14.4845 10.0976 14.3047 10.1787L12.6924 10.9043L13.9248 12.8086C14.0674 13.0289 14.0154 13.3227 13.8057 13.4805L12.2061 14.6807C12.0954 14.7637 11.9556 14.7984 11.8193 14.7744C11.6828 14.7501 11.5617 14.6692 11.4863 14.5527L10.3027 12.7236L9.21387 14.0029C9.08595 14.1527 8.88139 14.2136 8.69238 14.1582C8.50337 14.1025 8.36433 13.9404 8.33789 13.7451L7.43945 7.06641C7.41547 6.88717 7.49114 6.70921 7.63574 6.60059ZM9.17871 12.501L9.97754 11.5654L10.0635 11.4854C10.157 11.4172 10.2727 11.382 10.3906 11.3896C10.5481 11.4001 10.6925 11.4856 10.7783 11.6182L12.0342 13.5586L12.8311 12.96L11.5371 10.96C11.4581 10.8377 11.4365 10.6865 11.4775 10.5469C11.5187 10.4074 11.6185 10.2923 11.751 10.2324L12.8721 9.72656L8.5498 7.81836L9.17871 12.501Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13 2C13.5523 2 14 2.44772 14 3V6H13V5H3V11H5V12H3C2.44772 12 2 11.5523 2 11V3C2 2.44772 2.44772 2 3 2H13ZM3 4H13V3H3V4Z"
            fill="currentColor"
          />
        </svg>
      </BaseIcon>
    );
  }
) as IconComponent;

IconSiteIcon.tags = ['site', 'cursor', 'click'];
IconSiteIcon.category = 'General Icons';
IconSiteIcon.displayName = 'IconSiteIcon';
