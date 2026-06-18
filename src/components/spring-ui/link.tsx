import * as React from "react"
import { cn } from "@/lib/utils"

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "default" | "primary" | "danger" | "urgent" | "success" | "warning" | "black" | "white"
  isHovered?: boolean
  isFocused?: boolean
  isDisabled?: boolean
  prefixIcon?: React.ReactNode
  suffixIcon?: React.ReactNode
  children: React.ReactNode
}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ 
    className, 
    variant = "default", 
    isHovered = false, 
    isFocused = false, 
    isDisabled = false, 
    prefixIcon,
    suffixIcon,
    children, 
    ...props 
  }, ref) => {
    // Color variants for different states
    const getVariantClasses = () => {
      const baseClasses = "body-text hover:underline underline-offset-2 transition-colors duration-150"
      
      if (isDisabled) {
        return cn(
          baseClasses,
          "text-[var(--text-dimmed)] cursor-not-allowed no-underline"
        )
      }

      const variantClasses = {
        default: "text-[var(--text-secondary)]",
        primary: "text-[var(--text-blue)]",
        danger: "text-[var(--text-red)]",
        urgent: "text-[var(--text-orange)]",
        success: "text-[var(--text-green)]",
        warning: "text-[var(--text-yellow)]",
        black: "text-[var(--black-color)]",
        white: "text-[var(--white-color)]",
      }

      const stateClasses = {
        hover: isHovered ? "text-[var(--text-primary)]" : "",
        focus: isFocused ? "text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--focus-outline-default)] focus:ring-offset-2" : "",
      }

      return cn(
        baseClasses,
        variantClasses[variant],
        stateClasses.hover,
        stateClasses.focus
      )
    }

    return (
      <a
        className={cn(getVariantClasses(), "inline-flex items-center", className)}
        ref={ref}
        tabIndex={isDisabled ? -1 : 0}
        aria-disabled={isDisabled}
        {...props}
      >
        {prefixIcon && (
          <span>
            {prefixIcon}
          </span>
        )}
        {children}
        {suffixIcon && (
          <span>
            {suffixIcon}
          </span>
        )}
      </a>
    )
  }
)

Link.displayName = "Link"

export { Link }
