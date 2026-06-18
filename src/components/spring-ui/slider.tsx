"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@/lib/utils"

interface SliderProps extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {
  showValue?: boolean
  onValueChange?: (value: number[]) => void
}

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  SliderProps
>(({ className, showValue = false, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track
      className="relative w-full grow overflow-hidden rounded-full bg-[var(--bg-tertiary)] border border-[var(--border-default)] [.theme-designer_&]:h-1 [.theme-dashboard_&]:h-1.5"
    >
      <SliderPrimitive.Range className="absolute h-full bg-[var(--action-primary-bg)]" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb
      className="block bg-white rounded-[1px] shadow-[var(--shadow-button-default)] hover:opacity-90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--action-primary-bg)] focus-visible:ring-offset-1 disabled:pointer-events-none disabled:opacity-50 [.theme-designer_&]:h-3 [.theme-designer_&]:w-1 [.theme-dashboard_&]:h-4 [.theme-dashboard_&]:w-1.5"
    />
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider } 