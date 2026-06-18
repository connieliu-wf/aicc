"use client";

import React, { useState } from 'react';
import { Button } from '@/components/spring-ui/button';
import { IconButton } from '@/components/spring-ui/iconButton';
import { useCanvasSelection, BREAKPOINT_WIDTH } from '@/context/CanvasSelectionContext';
import { 
  UndoIcon, 
  RedoIcon, 
  ChevronSmallRightIcon,
  DesktopStarBreakpointIcon,
  TabletBreakpointIcon,
  MobileLandscapeBreakpointIcon,
  MobileBreakpointIcon,
  MoreIcon
} from '@/icons';

// Define breakpoint type
type Breakpoint = 'desktop' | 'tablet' | 'mobile-landscape' | 'mobile';

const CanvasBar: React.FC = () => {
  const {
    breadcrumbs,
    currentBreakpoint,
    setCurrentBreakpoint,
    onBreadcrumbClick,
    onUndo,
    onRedo,
    canvasWidth,
  } = useCanvasSelection();
  
  const [isRedoDisabled] = useState(true); // Redo is disabled in the design

  const breakpoints: { type: Breakpoint; icon: React.ReactNode; label: string }[] = [
    { 
      type: 'desktop', 
      icon: <DesktopStarBreakpointIcon size={16} />, 
      label: 'Desktop' 
    },
    { 
      type: 'tablet', 
      icon: <TabletBreakpointIcon size={16} />, 
      label: 'Tablet' 
    },
    { 
      type: 'mobile-landscape', 
      icon: <MobileLandscapeBreakpointIcon size={16} />, 
      label: 'Mobile Landscape' 
    },
    { 
      type: 'mobile', 
      icon: <MobileBreakpointIcon size={16} />, 
      label: 'Mobile' 
    }
  ];

  const getBreakpointWidth = (breakpoint: Breakpoint) => {
    return `${BREAKPOINT_WIDTH[breakpoint]}px`;
  };

  return (
    <div className="h-[40px] bg-[var(--bg-secondary)] border-b border-[var(--border-default)] flex items-center justify-between px-2">
      {/* Left side - Undo/Redo and Breadcrumbs */}
      <div className="flex items-center gap-2">
        {/* Undo/Redo buttons */}
        <div className="flex items-center gap-1">
          <IconButton
            variant="ghost"
            size="comfortable"
            className="h-6 w-6 text-[var(--text-secondary)]"
            onClick={onUndo}
            aria-label="Undo"
          >
            <UndoIcon size={16} />
          </IconButton>
          <IconButton
            variant="ghost"
            size="comfortable"
            className={`h-6 w-6 ${isRedoDisabled ? 'opacity-40' : 'text-[var(--text-secondary)]'}`}
            onClick={onRedo}
            disabled={isRedoDisabled}
            aria-label="Redo"
          >
            <RedoIcon size={16} />
          </IconButton>
        </div>

        {/* Divider */}
        <div className="h-4 w-px bg-[var(--border-default)]" />

        {/* Breadcrumbs */}
        <div className="flex items-center">
          {breadcrumbs.map((item, index) => (
            <React.Fragment key={item.id}>
              <Button
                variant="ghost"
                size="compact"
                className="h-6 px-1 text-[11.5px] font-normal"
                onClick={() => onBreadcrumbClick(item)}
              >
                <span 
                  className={`${
                    item.isActive 
                      ? 'text-[var(--text-primary)]' 
                      : 'text-[var(--text-secondary)]'
                  }`}
                >
                  {item.label}
                </span>
              </Button>
              {index < breadcrumbs.length - 1 && (
                <div className="text-[var(--text-secondary)] mx-0.5 flex items-center">
                  <ChevronSmallRightIcon size={16} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Right side - Breakpoint controls */}
      <div className="flex items-center gap-2">
        {/* Current breakpoint width */}
        <Button
          variant="ghost"
          size="compact"
          className="h-6 px-2 text-[11.5px] font-normal text-[var(--text-primary)]"
        >
          <span>{`${Math.round(canvasWidth)}px`}</span>
          <ChevronSmallRightIcon 
            size={16} 
            className="text-[var(--text-secondary)] ml-1 rotate-90" 
          />
        </Button>

        {/* Breakpoint buttons */}
        <div className="flex items-center gap-1">
          {breakpoints.map((breakpoint) => (
            <IconButton
              key={breakpoint.type}
              variant="ghost"
              size="comfortable"
              className={`h-6 w-6 ${
                currentBreakpoint === breakpoint.type 
                  ? 'bg-[var(--bg-tertiary)]' 
                  : 'text-[var(--text-secondary)]'
              }`}
              onClick={() => setCurrentBreakpoint(breakpoint.type)}
              aria-label={breakpoint.label}
            >
              {breakpoint.icon}
            </IconButton>
          ))}
          
          {/* More breakpoints button */}
          <IconButton
            variant="ghost"
            size="comfortable"
            className="h-6 w-6"
            aria-label="More breakpoints"
          >
            <MoreIcon size={16} className="text-[var(--text-secondary)]" />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default CanvasBar;
