import * as React from "react"
import { cn } from "@/lib/utils"
import { SearchDefaultIcon } from "@/icons/SearchDefaultIcon"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  icon?: React.ReactNode;
  showSearchIcon?: boolean;
  suffix?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, icon, showSearchIcon, suffix, ...props }, ref) => {
    if (suffix) {
      return (
        <div className={cn(
          "flex items-center w-full rounded-[4px] border border-solid",
          "bg-[var(--input-bg)] border-[var(--input-border)]",
          "shadow-[0px_0px_0px_0.5px_rgba(0,0,0,0.05),0px_16px_16px_-16px_rgba(0,0,0,0.01)_inset,0px_12px_12px_-12px_rgba(0,0,0,0.01)_inset,0px_8px_8px_-8px_rgba(0,0,0,0.02)_inset,0px_4px_4px_-4px_rgba(0,0,0,0.03)_inset,0px_3px_3px_-3px_rgba(0,0,0,0.06)_inset,0px_1px_1px_-1px_rgba(0,0,0,0.25)_inset] dark:shadow-[0px_1px_1px_-1px_rgba(0,0,0,0.2)_inset,0px_0.5px_0.5px_0px_rgba(255,255,255,0.12)_inset]",
          "focus-within:border-[var(--focus-outline-default)]",
          "hover:border-[var(--input-border-hover)]",
          "disabled:opacity-40 disabled:cursor-not-allowed disabled:bg-[var(--input-disabled-bg)]",
          "[.theme-designer_&]:h-6 [.theme-dashboard_&]:h-8",
          error && "border-[var(--input-border-error)]"
        )}>
          {(icon || showSearchIcon) && (
            <div className="flex items-center pointer-events-none [.theme-designer_&]:pl-1 [.theme-dashboard_&]:pl-2">
              {icon || (showSearchIcon && <SearchDefaultIcon size={16} style={{ color: 'var(--text-dimmed)' }} />)}
            </div>
          )}
          <input
            className={cn(
              "flex flex-1 border-0 rounded-l-[4px] py-0",
              "body-text",
              "bg-transparent",
              "placeholder:text-[var(--input-placeholder)]",
              "text-[var(--text-primary)]",
              "[.theme-designer_&]:h-6 [.theme-dashboard_&]:h-8",
              "[.theme-designer_&]:px-1 [.theme-dashboard_&]:px-2",
              (icon || showSearchIcon) && "[.theme-designer_&]:pl-0 [.theme-dashboard_&]:pl-0",
              className
            )}
            ref={ref}
            {...props}
          />
          <div className="flex items-center border-l border-[var(--border-default)] [.theme-designer_&]:h-6 [.theme-dashboard_&]:h-8">
            {suffix}
          </div>
        </div>
      )
    }
    
    return (
      <div className="relative w-full">
        {(icon || showSearchIcon) && (
          <div className="absolute inset-y-0 flex items-center pointer-events-none [.theme-designer_&]:left-1 [.theme-dashboard_&]:left-2">
            {icon || (showSearchIcon && <SearchDefaultIcon size={16} style={{ color: 'var(--text-dimmed)' }} />)}
          </div>
        )}
        <input
          className={cn(
            "flex w-full rounded-[4px] border border-solid py-0",
            "body-text",
            "bg-[var(--input-bg)] border-[var(--input-border)]",
            "shadow-[0px_0px_0px_0.5px_rgba(0,0,0,0.05),0px_16px_16px_-16px_rgba(0,0,0,0.01)_inset,0px_12px_12px_-12px_rgba(0,0,0,0.01)_inset,0px_8px_8px_-8px_rgba(0,0,0,0.02)_inset,0px_4px_4px_-4px_rgba(0,0,0,0.03)_inset,0px_3px_3px_-3px_rgba(0,0,0,0.06)_inset,0px_1px_1px_-1px_rgba(0,0,0,0.25)_inset] dark:shadow-[0px_1px_1px_-1px_rgba(0,0,0,0.2)_inset,0px_0.5px_0.5px_0px_rgba(255,255,255,0.12)_inset]",
            "focus:outline-none focus-visible:border-[var(--focus-outline-default)]",
            "hover:border-[var(--input-border-hover)]",
            "disabled:opacity-40 disabled:cursor-not-allowed disabled:bg-[var(--input-disabled-bg)]",
            "placeholder:text-[var(--input-placeholder)]",
            "text-[var(--text-primary)]",
            "[.theme-designer_&]:h-6 [.theme-dashboard_&]:h-8",
            "[.theme-designer_&]:px-1 [.theme-dashboard_&]:px-2",
            (icon || showSearchIcon) && "[.theme-designer_&]:pl-6 [.theme-dashboard_&]:pl-8",
            error && "border-[var(--input-border-error)]",
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input } 