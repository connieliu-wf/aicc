import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const iconButtonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded text-[11.5px] leading-4 tracking-[-0.01em] font-normal transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-b from-white/13 to-white/11 text-[var(--text-primary)] shadow-[var(--shadow-button-default)] hover:bg-[var(--bg-raised)]",
        primary:
          "bg-[var(--action-primary-bg)] text-[var(--white)] shadow-[var(--shadow-button-color)] hover:bg-[var(--action-primary-bg-hover)]",
        success:
          "bg-[var(--green-bg)] text-[var(--white)] shadow-[var(--shadow-button-color)] hover:bg-[var(--green-bg-hover)]",
        destructive:
          "bg-[var(--red-bg)] text-[var(--white)] shadow-[var(--shadow-button-color)] hover:bg-[var(--red-bg-hover)]",
        warning:
          "bg-[var(--orange-bg)] text-[var(--white)] shadow-[var(--shadow-button-color)] hover:bg-[var(--orange-bg-hover)]",
        outline:
          "border border-[var(--border-default)] bg-transparent text-[var(--text-primary)] hover:bg-[var(--bg-raised)]",
        "outline-primary": 
          "border border-[var(--border-default)] bg-transparent text-[var(--text-blue)] hover:bg-[var(--bg-raised)]",
        "outline-success": 
          "border border-[var(--border-default)] bg-transparent text-[var(--text-green)] hover:bg-[var(--bg-raised)]",
        "outline-destructive": 
          "border border-[var(--border-default)] bg-transparent text-[var(--text-red)] hover:bg-[var(--bg-raised)]",
        "outline-warning": 
          "border border-[var(--border-default)] bg-transparent text-[var(--text-orange)] hover:bg-[var(--bg-raised)]",
        subtle:
          "bg-transparent text-[var(--text-primary)] hover:bg-[var(--bg-raised)]",
        "subtle-primary": 
          "bg-[var(--blue-bg-transparent)] text-[var(--text-blue)] hover:bg-[var(--blue-bg-transparent-hover)]",
        "subtle-success": 
          "bg-[var(--green-bg-transparent)] text-[var(--text-green)] hover:bg-[var(--green-bg-transparent-hover)]",
        "subtle-destructive": 
          "bg-[var(--red-bg-transparent)] text-[var(--text-red)] hover:bg-[var(--red-bg-transparent-hover)]",
        "subtle-warning": 
          "bg-[var(--orange-bg-transparent)] text-[var(--text-orange)] hover:bg-[var(--orange-bg-transparent-hover)]",
        ghost:
          "bg-transparent text-[var(--text-primary)] hover:bg-[var(--bg-raised)]",
        "ghost-primary": 
          "bg-transparent text-[var(--text-blue)] hover:bg-[var(--bg-raised)]",
        "ghost-success": 
          "bg-transparent text-[var(--text-green)] hover:bg-[var(--bg-raised)]",
        "ghost-destructive": 
          "bg-transparent text-[var(--text-red)] hover:bg-[var(--bg-raised)]",
        "ghost-warning": 
          "bg-transparent text-[var(--text-orange)] hover:bg-[var(--bg-raised)]",
      },
      size: {
        compact: "[.theme-designer_&]:h-4 [.theme-designer_&]:w-4 [.theme-dashboard_&]:h-6 [.theme-dashboard_&]:w-6 p-0",
        comfortable: "[.theme-designer_&]:h-6 [.theme-designer_&]:w-6 [.theme-dashboard_&]:h-8 [.theme-dashboard_&]:w-8 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "comfortable",
    },
  }
)

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof iconButtonVariants> {
  asChild?: boolean
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(iconButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
IconButton.displayName = "IconButton"

export { IconButton, iconButtonVariants } 