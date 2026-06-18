"use client";

import React, { useState } from 'react';
import { Button } from '@/components/spring-ui/button';
import { IconButton } from '@/components/spring-ui/iconButton';
import { SegmentedControl, SegmentedControlItem } from '@/components/spring-ui/segmented-control';
import {
  ChevronSmallRightIcon,
  AISparkleIcon
} from '@/icons';

interface CanvasBarProps {
  onOpenAssistant?: () => void;
  isAssistantOpen?: boolean;
}

export default function CanvasBar({ onOpenAssistant, isAssistantOpen = true }: CanvasBarProps) {
  const [activeView, setActiveView] = useState<'preview' | 'code'>('preview');

  const breadcrumbs = [
    { id: '1', label: 'Home', isActive: false },
    { id: '2', label: 'Pricing', isActive: true }
  ];

  return (
    <div className="h-[40px] bg-[var(--bg-primary)] border-b border-[var(--border-default)] flex items-center justify-between px-3">
      {/* Left side - Breadcrumbs */}
      <div className="flex items-center">
        <div className="flex items-center">
          {breadcrumbs.map((item, index) => (
            <React.Fragment key={item.id}>
              <Button
                variant="ghost"
                size="compact"
                className="h-6 px-2 text-[11.5px] font-normal hover:bg-[var(--bg-raised)]"
              >
                <span 
                  className={`${
                    item.isActive 
                      ? 'text-[var(--text-primary)] font-medium' 
                      : 'text-[var(--text-secondary)]'
                  }`}
                >
                  {item.label}
                </span>
              </Button>
              {index < breadcrumbs.length - 1 && (
                <div className="text-[var(--text-secondary)] mx-1 flex items-center">
                  <ChevronSmallRightIcon size={16} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Right side - View toggle */}
      <div className="flex items-center gap-2">
        <SegmentedControl
          value={activeView}
          onValueChange={(value) => setActiveView(value as 'preview' | 'code')}
        >
          <SegmentedControlItem value="preview">
            Preview
          </SegmentedControlItem>
          <SegmentedControlItem value="code">
            Code
          </SegmentedControlItem>
        </SegmentedControl>

        {!isAssistantOpen && (
          <IconButton
            variant="ghost"
            size="comfortable"
            aria-label="Open AI assistant"
            className="text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
            onClick={onOpenAssistant}
          >
            <AISparkleIcon size={16} />
          </IconButton>
        )}
      </div>
    </div>
  );
}
