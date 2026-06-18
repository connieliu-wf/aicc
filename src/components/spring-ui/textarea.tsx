import * as React from "react"
import { cn } from "@/lib/utils"

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex w-full rounded-[4px] border border-solid",
          "body-text",
          "bg-[var(--input-bg)] border-[var(--input-border)]",
          "focus:outline-none focus-visible:border-[var(--focus-outline-default)]",
          "hover:border-[var(--input-border-hover)]",
          "disabled:opacity-40 disabled:cursor-not-allowed disabled:bg-[var(--input-disabled-bg)]",
          "placeholder:text-[var(--input-placeholder)]",
          "text-[var(--text-primary)]",
          "[.theme-designer_&]:px-1 [.theme-designer_&]:py-1 [.theme-dashboard_&]:px-2 [.theme-dashboard_&]:py-2",
          "[.theme-designer_&]:min-h-[60px] [.theme-dashboard_&]:min-h-[80px]",
          error && "border-[var(--input-border-error)]",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea } 