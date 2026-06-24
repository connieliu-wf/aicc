"use client";

import React from 'react';
import Accordion from '@/components/spring-ui/accordion';
import { Badge } from '@/components/spring-ui/badge';

interface ComponentPropertiesPanelProps {
  componentName: string;
}

function PropertyRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-2 px-3 py-1.5">
      <span className="text-[var(--text-secondary)] body-text shrink-0">{label}</span>
      <div className="flex items-center gap-1 min-w-0">{children}</div>
    </div>
  );
}

function PropertyInput({ value, suffix, width }: { value: string; suffix?: string; width?: string }) {
  return (
    <div
      className="flex items-center h-6 rounded border border-[var(--input-border)] bg-[var(--input-bg)] overflow-hidden"
      style={{ width: width || 'auto' }}
    >
      <input
        type="text"
        defaultValue={value}
        className="flex-1 min-w-0 h-full px-1.5 bg-transparent text-[var(--text-primary)] body-text outline-none"
        readOnly
      />
      {suffix && (
        <span className="px-1.5 text-[var(--text-dimmed)] body-text border-l border-[var(--input-border)] bg-[var(--bg-secondary)] h-full flex items-center">
          {suffix}
        </span>
      )}
    </div>
  );
}

function PropertySelect({ value }: { value: string }) {
  return (
    <div className="flex items-center h-6 px-1.5 rounded border border-[var(--input-border)] bg-[var(--input-bg)] text-[var(--text-primary)] body-text cursor-default min-w-[60px]">
      {value}
    </div>
  );
}

export default function ComponentPropertiesPanel({ componentName }: ComponentPropertiesPanelProps) {
  return (
    <div className="w-[240px] h-full bg-[var(--bg-primary)] border-l border-[var(--border-default)] flex flex-col overflow-y-auto">
      {/* Header */}
      <div className="flex items-center justify-between h-9 px-3 py-2 border-b border-[var(--border-default)]">
        <h2 className="text-[var(--text-primary)] body-text font-medium truncate">
          {componentName}
        </h2>
      </div>

      {/* Frame */}
      <Accordion title="Frame" defaultOpen>
        <div className="pb-2">
          <PropertyRow label="Variant">
            <div className="flex items-center gap-1">
              <Badge variant="default" size="compact">Base</Badge>
              <Badge variant="default" size="compact">Base</Badge>
            </div>
          </PropertyRow>
          <PropertyRow label="Breakpoint">
            <div className="flex items-center gap-1">
              <Badge variant="default" size="compact">Desktop</Badge>
              <Badge variant="default" size="compact">Base</Badge>
            </div>
          </PropertyRow>
        </div>
      </Accordion>

      {/* Size */}
      <Accordion title="Size" defaultOpen>
        <div className="pb-2">
          <PropertyRow label="Width">
            <div className="flex items-center gap-1">
              <PropertySelect value="Full" />
              <PropertyInput value="1138" suffix="px" width="80px" />
            </div>
          </PropertyRow>
          <PropertyRow label="Height">
            <div className="flex items-center gap-1">
              <PropertySelect value="Fit" />
              <PropertyInput value="576" suffix="px" width="80px" />
            </div>
          </PropertyRow>
        </div>
      </Accordion>

      {/* Background */}
      <Accordion title="Background" defaultOpen>
        <div className="pb-2">
          <PropertyRow label="Color">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded border border-[var(--border-default)] bg-white" />
              <span className="text-[var(--text-primary)] body-text">white</span>
            </div>
          </PropertyRow>
        </div>
      </Accordion>
    </div>
  );
}
