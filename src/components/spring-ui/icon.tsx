"use client"

import React, { lazy, Suspense } from 'react';
import { cn } from '@/lib/utils';

// Define types for the icon sizes
type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number;

// Define props for the Icon component
interface IconProps {
  name: string;
  size?: IconSize;
  className?: string;
  // Allow any other SVG props
  [key: string]: any;
}

// Size mapping for predefined sizes
const sizeMap: Record<string, number> = {
  xs: 12,
  sm: 16,
  md: 20,
  lg: 24,
  xl: 32,
};

/**
 * Icon component for displaying TSX icon components
 * 
 * @example
 * ```tsx
 * <Icon name="check" size="sm" />
 * ```
 */
export const Icon: React.FC<IconProps> = ({ 
  name, 
  size = 'sm', // Default to 16px (sm)
  className, 
  ...props 
}) => {
  // Calculate size based on the size prop
  const calculatedSize = typeof size === 'string' ? sizeMap[size] || 16 : size;

  // Dynamic import of TSX icons using React.lazy
  const [error, setError] = React.useState<boolean>(false);
  const [IconComponent, setIconComponent] = React.useState<React.ComponentType<React.SVGProps<SVGSVGElement>> | null>(null);

  React.useEffect(() => {
    // Reset state
    setIconComponent(null);
    setError(false);

    // Using dynamic import for the icon component
    const importIcon = async () => {
      try {
        // Convert kebab-case to PascalCase for component names
        const pascalCaseName = name
          .split('-')
          .map(part => part.charAt(0).toUpperCase() + part.slice(1))
          .join('');
        
        // Append 'Icon' if not already present
        const componentName = pascalCaseName.endsWith('Icon') 
          ? pascalCaseName 
          : `${pascalCaseName}Icon`;
          
        // Use dynamic import to load the icon component
        const module = await import(`@/icons/${name}`);
        
        // Check if the module has a default export
        if (module.default) {
          setIconComponent(() => module.default);
        } 
        // If no default export, try to find the named export
        else if (module[componentName]) {
          setIconComponent(() => module[componentName]);
        } 
        // If neither is found, throw an error
        else {
          throw new Error(`Icon ${name} found but no suitable export`);
        }
      } catch (err) {
        console.error(`Failed to load icon: ${name}`, err);
        setError(true);
      }
    };

    importIcon();
  }, [name]);

  // If icon failed to load
  if (error) {
    return (
      <div
        className={cn("inline-flex justify-center items-center bg-gray-200 text-gray-500 rounded", className)}
        style={{ width: calculatedSize, height: calculatedSize }}
      >
        ?
      </div>
    );
  }

  // While loading
  if (!IconComponent) {
    return (
      <div
        className={cn("inline-block", className)}
        style={{ width: calculatedSize, height: calculatedSize }}
      />
    );
  }

  // Get inline style for color variable if it's present
  const getColorStyleFromClass = () => {
    if (className && className.includes('text-[var(')) {
      const match = className.match(/text-\[var\((--[^)]+)\)\]/);
      if (match && match[1]) {
        return { color: `var(${match[1]})` };
      }
    }
    return {};
  };

  // Render the icon
  return (
    <IconComponent
      className={cn("inline-block text-[var(--text-secondary)]", className)}
      width={calculatedSize}
      height={calculatedSize}
      style={{
        ...props.style,
        ...getColorStyleFromClass()
      }}
      {...props}
    />
  );
};

export default Icon; 