import * as React from "react"
import { cn } from "@/lib/utils"

interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  sizeVariant?: "compact" | "comfortable";
  hideLabel?: boolean;
}

const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ className, sizeVariant = "compact", hideLabel = false, ...props }, ref) => {
    return (
      <label className="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className={cn(
            "sr-only peer",
            className
          )}
          ref={ref}
          {...props}
        />
        <div 
          className={cn(
            "relative bg-[var(--bg-tertiary)] border border-[var(--border-default)] rounded-full transition-all duration-200",
            "peer-checked:bg-[var(--action-primary-bg)] peer-checked:border-[var(--action-primary-bg)]",
            "peer-focus:outline-none peer-focus:ring-0",
            "before:content-[''] before:absolute before:bg-white before:rounded-full before:transition-all before:duration-200 before:shadow-sm",
            {
              "w-6 h-4": sizeVariant === "compact",
              "w-8 h-5": sizeVariant === "comfortable"
            },
            {
              "before:h-3 before:w-3 before:left-0.25 before:top-0.25 peer-checked:before:translate-x-2": sizeVariant === "compact",
              "before:h-3.5 before:w-3.5 before:left-0.25 before:top-0.25 peer-checked:before:translate-x-3": sizeVariant === "comfortable"
            }
          )}
        ></div>
        {!hideLabel && <span className={cn("ml-2 body-text text-[var(--text-secondary)]")}>{props['aria-label'] || 'Switch'}</span>}
      </label>
    )
  }
)
Switch.displayName = "Switch"

export { Switch } 