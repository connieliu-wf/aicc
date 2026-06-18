"use client";

import React, { useState } from 'react';
import { Row } from '@/components/spring-ui/row';
import { IconButton } from '@/components/spring-ui/iconButton';
import { 
  CloseDefaultIcon,
  TemplatesIcon,
  PageDefaultIcon,
  ElementButtonIcon
} from '@/icons';
interface InsightsLeftSidebarProps {
  selectedSection: string;
  onSectionChange: (section: string) => void;
}

export default function InsightsLeftSidebar({ selectedSection, onSectionChange }: InsightsLeftSidebarProps) {

  return (
    <div className="w-60 h-full bg-[var(--bg-primary)] border-r border-[var(--border-default)] flex flex-col px-[var(--space-md)]">
      {/* Header */}
      <div className="flex items-center justify-between h-10 px-2 py-2 border-[var(--border-default)]">
        <div className="flex items-center gap-1">
          <h2 className="text-[var(--text-primary)] body-text-bold">Analyze</h2>
        </div>
      </div>

      {/* Navigation Items */}
      <div className="flex flex-col pb-2 gap-0.5">
        <Row 
          label="Site overview" 
          icon={<TemplatesIcon size={16} />}
          selected={selectedSection === "site-overview"}
          showChevron
          onClick={() => onSectionChange("site-overview")}
        />
        <Row 
          label="Page performance" 
          icon={<PageDefaultIcon size={16} />}
          selected={selectedSection === "page-performance"}
          onClick={() => onSectionChange("page-performance")}
        />
        <Row 
          label="User behavior" 
          icon={<ElementButtonIcon size={16} />}
          selected={selectedSection === "user-behavior"}
          onClick={() => onSectionChange("user-behavior")}
        />
      </div>

      <div className="h-px bg-[var(--border-default)]" />

      {/* Optimize Section */}
      <div className="flex flex-col pb-2">
        <div className="flex items-center justify-between h-10 px-2 py-2">
          <h3 className="text-[var(--text-primary)] body-text-bold">Optimize</h3>
        </div>
        <Row 
          label="Performance insights" 
          icon={<ElementButtonIcon size={16} />}
        />
      </div>

      <div className="h-px bg-[var(--border-default)]" />

      {/* Settings Section */}
      <div className="flex flex-col pb-2">
        <div className="flex items-center justify-between h-10 px-2 py-2">
          <h3 className="text-[var(--text-primary)] body-text-bold">Settings</h3>
        </div>
        <Row 
          label="Analytics configuration" 
          icon={<ElementButtonIcon size={16} />}
        />
      </div>

      <div className="h-px bg-[var(--border-default)]" />
    </div>
  );
}
