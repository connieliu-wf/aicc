import * as React from 'react';

export type IconSize = 8 | 10 | 12 | 14 | 16 | 20 | 24 | 32 | 64 | string | number;

export type BaseIconProps = Omit<React.ComponentPropsWithoutRef<'div'>, 'children'> & {
  /**
   * Custom label for assistive technology devices
   */
  ['aria-label']?: string;
  /**
   * Custom label (associated with another element) for assistive technology devices
   */
  ['aria-labelledby']?: string;
  /**
   * id used for test identification
   */
  ['data-automation-id']?: string;
  /**
   * Determines the size of the icon.
   */
  size?: IconSize;
  /**
   * Custom styling for the Icon.
   */
  style?: React.CSSProperties;
  /**
   * Custom className
   */
  className?: string;
};

export type IconProps = BaseIconProps & {
  children: React.ReactNode;
};

export const Icon = React.forwardRef<HTMLDivElement, IconProps>(
  ({
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledBy,
    children,
    size = 16,
    style = {},
    className = '',
    ...rest
  }: IconProps,
  ref
  ) => {
    // The Icon should be hidden from screen readers if neither ariaLabel nor ariaLabelledBy are provided
    const isHidden = !(ariaLabel || ariaLabelledBy);

    // Calculate size as a number for style
    const sizeValue = typeof size === 'number' ? size : parseInt(size.toString(), 10) || 16;

    return (
      <div
        {...rest}
        ref={ref}
        aria-hidden={isHidden}
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
        className={`spring-icon ${className}`}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: sizeValue,
          height: sizeValue,
          color: 'currentColor',
          flexShrink: 0,
          ...style,
        }}
      >
        {children}
      </div>
    );
  }
);

Icon.displayName = 'Icon';

export type SpringIconType = typeof Icon;
