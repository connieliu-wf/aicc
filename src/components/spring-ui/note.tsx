import * as React from "react"
import { cn } from "@/lib/utils"
import { InfoIcon } from "@/icons/InfoIcon"
import { CloseDefaultIcon } from "@/icons/CloseDefaultIcon"
import { CheckDefaultIcon } from "@/icons/CheckDefaultIcon"

export interface NoteProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "success" | "warning" | "error"
  icon?: React.ReactNode
  onClose?: () => void
  showClose?: boolean
}

const Note = React.forwardRef<HTMLDivElement, NoteProps>(
  ({ className, variant = "default", icon, onClose, showClose = false, children, ...props }, ref) => {
    // Variant styles
    const variantStyles = {
      default: "bg-[var(--bg-secondary)] text-[var(--text-primary)]",
      success: "bg-[var(--green-bg-transparent)] text-[var(--text-primary)]",
      warning: "bg-[var(--yellow-bg-transparent)] text-[var(--text-primary)]",
      error: "bg-[var(--red-bg-transparent)] text-[var(--text-primary)]",
    }

    // Default icon by variant
    const defaultIcon = variant === "success" ? (
      <CheckDefaultIcon size={16} className="text-[var(--text-green)]" />
    ) : variant === "warning" ? (
      <InfoIcon size={16} className="text-[var(--text-yellow)]" />
    ) : variant === "error" ? (
      <InfoIcon size={16} className="text-[var(--text-red)]" />
    ) : (
      <InfoIcon size={16} className="text-[var(--text-secondary)]" />
    )

    const displayIcon = icon !== undefined ? icon : defaultIcon

    return (
      <div
        className={cn(
          "flex items-center gap-2 p-3 rounded-md body-text",
          variantStyles[variant],
          className
        )}
        ref={ref}
        {...props}
      >
        {displayIcon && (
          <div className="shrink-0 flex items-center">
            {displayIcon}
          </div>
        )}
        <div className="flex-1 body-text text-[var(--text-primary)] flex items-center">
          {children}
        </div>
        {showClose && onClose && (
          <button
            onClick={onClose}
            className="shrink-0 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            aria-label="Close"
          >
            <CloseDefaultIcon size={16} />
          </button>
        )}
      </div>
    )
  }
)
Note.displayName = "Note"

export { Note }

