import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded body-text transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive [.theme-designer_&]:gap-0.5 [.theme-dashboard_&]:gap-2",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--button-default-bg)] text-[var(--text-primary)] shadow-[var(--shadow-button-default)] hover:bg-[var(--bg-raised)]",
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
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        comfortable: "[.theme-designer_&]:h-6 [.theme-dashboard_&]:h-8 [.theme-designer_&]:px-2 [.theme-dashboard_&]:px-3",
        compact: "[.theme-designer_&]:h-6 [.theme-dashboard_&]:h-8 [.theme-designer_&]:px-1 [.theme-dashboard_&]:px-2",
        icon: "[.theme-designer_&]:h-6 [.theme-designer_&]:w-6 [.theme-dashboard_&]:h-8 [.theme-dashboard_&]:w-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "comfortable",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
