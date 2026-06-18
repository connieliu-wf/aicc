import * as React from "react"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

const tabBarContainerVariants = cva(
  "inline-flex gap-4 border-b border-[var(--border-default)] w-full",
  {
    variants: {
      fullWidth: {
        true: "w-full",
        false: "w-fit",
      },
    },
    defaultVariants: {
      fullWidth: true,
    },
  }
)

const tabBarItemVariants = cva(
  "flex items-center justify-center text-[11.5px] leading-4 tracking-[-0.01em] font-normal text-[var(--text-secondary)] transition-all disabled:pointer-events-none disabled:opacity-50 relative data-[state=active]:text-[var(--text-primary)] hover:text-[var(--text-primary)] [.theme-designer_&]:h-10 [.theme-dashboard_&]:h-12 p-0",
  {
    variants: {
      isIcon: {
        true: "[.theme-designer_&]:w-10 [.theme-dashboard_&]:w-12",
        false: "",
      },
      isFullWidth: {
        true: "flex-1",
        false: "",
      }
    },
    defaultVariants: {
      isIcon: false,
      isFullWidth: false,
    },
  }
)

interface TabBarProps extends React.HTMLAttributes<HTMLDivElement> {
  fullWidth?: boolean
  value: string
  onValueChange: (value: string) => void
  children: React.ReactNode
}

const TabBar = React.forwardRef<HTMLDivElement, TabBarProps>(
  ({ className, fullWidth, value, onValueChange, children, ...props }, ref) => {
    return (
      <div
        className={cn(tabBarContainerVariants({ fullWidth }), className)}
        ref={ref}
        role="tablist"
        {...props}
      >
        {React.Children.map(children, (child) => {
          if (!React.isValidElement<TabBarItemProps>(child)) return null
          return React.cloneElement(child, {
            isActive: child.props.value === value,
            onClick: () => onValueChange(child.props.value),
            isFullWidth: fullWidth,
          })
        })}
      </div>
    )
  }
)
TabBar.displayName = "TabBar"

interface TabBarItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string
  isIcon?: boolean
  isActive?: boolean
  isFullWidth?: boolean
}

const TabBarItem = React.forwardRef<HTMLButtonElement, TabBarItemProps>(
  ({ className, children, value, isIcon, isActive, isFullWidth, ...props }, ref) => {
    return (
      <button
        ref={ref}
        role="tab"
        aria-selected={isActive}
        data-state={isActive ? "active" : "inactive"}
        className={cn(tabBarItemVariants({ isIcon, isFullWidth }), className)}
        {...props}
      >
        {children}
        {isActive && (
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[var(--text-primary)]" />
        )}
      </button>
    )
  }
)
TabBarItem.displayName = "TabBarItem"

export { TabBar, TabBarItem } 