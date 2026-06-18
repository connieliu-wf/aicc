import * as React from "react"
import { cn } from "@/lib/utils"
import { CloseDefaultIcon } from "@/icons/CloseDefaultIcon"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "blue" | "green" | "pink" | "purple" | "orange" | "yellow"
  size?: "compact" | "comfort"
  shape?: "rounded" | "square"
  styleType?: "tinted" | "solid"
  prefixIcon?: React.ReactNode
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant = "default", size = "compact", shape = "rounded", styleType = "tinted", prefixIcon, children, ...props }, ref) => {
    // Color variants for tinted style
    const tintedVariantClasses = {
      default: "bg-[var(--bg-tertiary)] text-[var(--text-secondary)]",
      blue: "bg-[var(--blue-bg-transparent)] text-[var(--text-blue)]",
      green: "bg-[var(--green-bg-transparent)] text-[var(--text-green)]",
      pink: "bg-[var(--pink-bg-transparent)] text-[var(--text-pink)]",
      purple: "bg-[var(--purple-bg-transparent)] text-[var(--text-purple)]",
      orange: "bg-[var(--orange-bg-transparent)] text-[var(--text-orange)]",
      yellow: "bg-[var(--yellow-bg-transparent)] text-[var(--text-yellow)]",
    }

    // Color variants for solid style
    const solidVariantClasses = {
      default: "bg-[var(--bg-raised)] text-[var(--text-primary)]",
      blue: "bg-[var(--blue-bg)] text-[var(--white)]",
      green: "bg-[var(--green-bg)] text-[var(--white)]",
      pink: "bg-[var(--pink-bg)] text-[var(--white)]",
      purple: "bg-[var(--purple-bg)] text-[var(--white)]",
      orange: "bg-[var(--orange-bg)] text-[var(--white)]",
      yellow: "bg-[var(--yellow-bg)] text-[var(--black)]",
    }

    // Size variants with theme support
    const sizeClasses = {
              compact: "body-text py-0 [.theme-designer_&]:h-4 [.theme-dashboard_&]:h-5 [.theme-designer_&]:px-1.5 [.theme-dashboard_&]:px-2",
        comfort: "body-text py-0 [.theme-designer_&]:h-6 [.theme-dashboard_&]:h-7 [.theme-designer_&]:px-2 [.theme-dashboard_&]:px-2.5",
    }

    // Shape variants
    const shapeClasses = {
      rounded: "rounded-full",
      square: "rounded-[2px]",
    }

    const styleClasses = styleType === "tinted" ? tintedVariantClasses[variant] : solidVariantClasses[variant]

    return (
      <div
        className={cn(
          "inline-flex items-center border-0",
          sizeClasses[size],
          shapeClasses[shape],
          styleClasses,
          className
        )}
        ref={ref}
        {...props}
      >
        {prefixIcon && (
          <span className="mr-1 flex items-center">
            {prefixIcon}
          </span>
        )}
        <span>{children}</span>
      </div>
    )
  }
)
Badge.displayName = "Badge"

export { Badge } 