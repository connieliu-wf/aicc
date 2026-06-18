import * as React from "react"
import { cn } from "@/lib/utils"
import { Checkbox } from "./checkbox"
import { Radio } from "./radio"

export interface RowProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The main label text */
  label: string
  /** Optional secondary text below the label */
  description?: string
  /** Optional secondary text to the right of the label */
  meta?: string
  /** Size variant */
  size?: "compact" | "comfort"
  /** Style variant */
  variant?: "default" | "header"
  /** Optional icon on the left */
  icon?: React.ReactNode
  /** Selected state */
  selected?: boolean
  /** Show a divider at the top */
  topDivider?: boolean
  /** Show a divider at the bottom */
  bottomDivider?: boolean
  /** Add a checkbox */
  checkbox?: boolean
  /** If checkbox is true, you can control its state */
  checked?: boolean
  /** If checkbox is true, you can set its onChange handler */
  onCheckChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  /** Add a radio button */
  radio?: boolean
  /** Radio button value */
  radioValue?: string
  /** Array of suffix buttons (max 3) */
  suffixButtons?: React.ReactNode[]
  /** Show an end chevron (usually with selected state) */
  showChevron?: boolean
}

const Row = React.forwardRef<HTMLDivElement, RowProps>(
  ({ 
    className, 
    label, 
    description, 
    meta,
    size = "comfort",
    variant = "default",
    icon, 
    selected = false,
    topDivider = false,
    bottomDivider = false,
    checkbox = false,
    checked,
    onCheckChange,
    radio = false,
    radioValue,
    suffixButtons = [],
    showChevron = false,
    ...props 
  }, ref) => {
    // Limit suffix buttons to 3
    const limitedSuffixButtons = suffixButtons.slice(0, 3)
    
    return (
      <div
        className={cn(
          "relative w-full flex items-center min-h-8",
          "[.theme-designer_&]:px-2 [.theme-dashboard_&]:px-3",
          {
                          "[.theme-designer_&]:py-1 [.theme-dashboard_&]:py-2": size === "compact",
              "[.theme-designer_&]:py-2 [.theme-dashboard_&]:py-3.5": size === "comfort"
          },
          "rounded",
          selected && "bg-[var(--bg-raised)]",
          "hover:bg-[var(--bg-raised)]",
          "transition-colors duration-100",
          "cursor-default",
          "will-change-auto",
          topDivider && "border-t border-t-[var(--border-default)]",
          bottomDivider && "border-b border-b-[var(--border-default)]",
          className
        )}
        ref={ref}
        {...props}
      >
        <div className="flex-1 flex min-w-0">
          {/* Checkbox */}
          {checkbox && (
            <div className="flex items-center [.theme-designer_&]:mr-1 [.theme-dashboard_&]:mr-2">
              <Checkbox 
                checked={checked} 
                onChange={onCheckChange}
              />
            </div>
          )}
          
          {/* Radio */}
          {radio && (
            <div className="flex items-center [.theme-designer_&]:mr-1 [.theme-dashboard_&]:mr-2">
              <Radio 
                value={radioValue}
              />
            </div>
          )}
          
          {/* Icon */} 
          {icon && (
            <div className="flex items-center text-[var(--text-secondary)] [.theme-designer_&]:mr-1 [.theme-dashboard_&]:mr-2">
              {icon}
            </div>
          )}
          
          {/* Content */}
          <div className="flex-1 min-w-0 body-text">
            <div className="flex items-baseline">
              {label}
              {meta && (
                <span className="ml-1 text-[var(--text-secondary)] truncate body-text">{meta}</span>
              )}
            </div>
            
            {description && (
              <div className="text-[var(--text-secondary)] body-text truncate">
                {description}
              </div>
            )}
          </div>
          
          {/* Suffix buttons */}
          {limitedSuffixButtons.length > 0 && (
            <div className="flex items-center ml-2 space-x-1">
              {limitedSuffixButtons.map((button, index) => (
                <div key={index} className="flex items-center justify-center">
                  {button}
                </div>
              ))}
            </div>
          )}
          
          {/* Chevron */}
          {showChevron && (
            <div className="ml-2 flex items-center text-[var(--text-secondary)]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </div>
          )}
        </div>
      </div>
    )
  }
)
Row.displayName = "Row"

export { Row } 