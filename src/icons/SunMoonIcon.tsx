import React from 'react';
import {Icon as BaseIcon, type BaseIconProps} from './Icon/Icon';
import {IconComponent} from './types';
import { SunMoon } from 'lucide-react';

export const SunMoonIcon = React.forwardRef<HTMLDivElement, BaseIconProps>(
  ({size = 16, ...props}, ref) => {
    return (
      <BaseIcon {...props} size={size} ref={ref}>
        <SunMoon size={size} />
      </BaseIcon>
    );
  }
) as IconComponent;

SunMoonIcon.displayName = 'SunMoonIcon'; 