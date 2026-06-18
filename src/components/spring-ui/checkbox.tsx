import * as React from "react"
import { cn } from "@/lib/utils"

interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'id'> {
  /** Label text to display to the right of the checkbox */
  label?: string
  /** Hide the label even if provided */
  hideLabel?: boolean
  /** Custom ID for the checkbox and label association */
  id?: string
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(({ 
  className, 
  label, 
  hideLabel = false,
  id,
  ...props 
}, ref) => {
  const generatedId = React.useId()
  const checkboxId = id || `checkbox-${generatedId}`
  
  if (label && !hideLabel) {
    return (
      <label htmlFor={checkboxId} className="flex items-center cursor-pointer">
        <input
          id={checkboxId}
          type="checkbox"
          className={cn(
            "appearance-none h-3 w-3 rounded-[2px] border border-[var(--border-default)] bg-[var(--bg-tertiary)]",
            "shadow-[var(--shadow-input)]",
            "focus:outline-none focus:ring-0 focus:ring-offset-0",
            "disabled:cursor-not-allowed disabled:opacity-50",
            "checked:bg-[var(--action-primary-bg)] checked:border-[var(--action-primary-bg)] checked:shadow-none",
            "checked:after:content-[''] checked:after:absolute checked:after:top-[2px] checked:after:left-[1px] checked:after:w-[9px] checked:after:h-[5px] checked:after:border-r-0 checked:after:border-t-0 checked:after:border-l-[2px] checked:after:border-b-[2px] checked:after:border-white checked:after:rotate-[-45deg]",
            "relative",
            className
          )}
          ref={ref}
          {...props}
        />
        <span className="ml-1 body-text text-[var(--text-secondary)] [.theme-designer_&]:ml-1 [.theme-dashboard_&]:ml-2">{label}</span>
      </label>
    )
  }

  return (
    <input
      id={checkboxId}
      type="checkbox"
      className={cn(
        "appearance-none h-3 w-3 rounded-[2px] border border-[var(--border-default)] bg-[var(--bg-tertiary)]",
        "shadow-[var(--shadow-input)]",
        "focus:outline-none focus:ring-0 focus:ring-offset-0",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "checked:bg-[var(--action-primary-bg)] checked:border-[var(--action-primary-bg)] checked:shadow-none",
        "checked:after:content-[''] checked:after:absolute checked:after:top-[2px] checked:after:left-[1px] checked:after:w-[9px] checked:after:h-[5px] checked:after:border-r-0 checked:after:border-t-0 checked:after:border-l-[2px] checked:after:border-b-[2px] checked:after:border-white checked:after:rotate-[-45deg]",
        "relative",
        "[.theme-designer_&]:mr-1 [.theme-dashboard_&]:mr-2",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Checkbox.displayName = "Checkbox"

export { Checkbox } 