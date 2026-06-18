import * as React from "react"
import { cn } from "@/lib/utils"

interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'id'> {
  /** Label text to display to the right of the radio button */
  label?: string
  /** Hide the label even if provided */
  hideLabel?: boolean
  /** Custom ID for the radio and label association */
  id?: string
}

const Radio = React.forwardRef<HTMLInputElement, RadioProps>(({ 
  className, 
  label, 
  hideLabel = false,
  id,
  ...props 
}, ref) => {
  const radioId = id || `radio-${Math.random().toString(36).substr(2, 9)}`
  
  if (label && !hideLabel) {
    return (
      <label htmlFor={radioId} className="inline-flex items-center cursor-pointer">
        <input
          id={radioId}
          type="radio"
          className={cn(
            "appearance-none h-3 w-3 rounded-full border border-[var(--border-default)] bg-[var(--bg-tertiary)]",
            "shadow-[var(--shadow-input)]",
            "focus:outline-none focus:ring-0 focus:ring-offset-0",
            "disabled:cursor-not-allowed disabled:opacity-50",
            "checked:bg-[var(--action-primary-bg)] checked:border-[var(--action-primary-bg)] checked:shadow-none",
            "checked:after:content-[''] checked:after:absolute checked:after:top-1/2 checked:after:left-1/2 checked:after:-translate-x-1/2 checked:after:-translate-y-1/2 checked:after:w-1 checked:after:h-1 checked:after:rounded-full checked:after:bg-white",
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
      id={radioId}
      type="radio"
      className={cn(
        "appearance-none h-3 w-3 rounded-full border border-[var(--border-default)] bg-[var(--bg-tertiary)]",
        "shadow-[var(--shadow-input)]",
        "focus:outline-none focus:ring-0 focus:ring-offset-0",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "checked:bg-[var(--action-primary-bg)] checked:border-[var(--action-primary-bg)] checked:shadow-none",
        "checked:after:content-[''] checked:after:absolute checked:after:top-1/2 checked:after:left-1/2 checked:after:-translate-x-1/2 checked:after:-translate-y-1/2 checked:after:w-1 checked:after:h-1 checked:after:rounded-full checked:after:bg-white",
        "relative",
        "[.theme-designer_&]:mr-1 [.theme-dashboard_&]:mr-2",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Radio.displayName = "Radio"

export { Radio } 