"use client";

import React, { useState } from 'react';
import { WebApp24Icon, Navigator24Icon, CapabilityVariable24Icon, SettingsIcon } from '@/icons';
import Tooltip from '@/components/spring-ui/tooltip';

type ToolbarItem = {
  id: string;
  label: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
};

const primaryItems: ToolbarItem[] = [
  {
    id: 'code',
    label: 'Code',
    icon: WebApp24Icon
  },
  {
    id: 'structure',
    label: 'Structure',
    icon: Navigator24Icon
  }
];

const secondaryItems: ToolbarItem[] = [
  {
    id: 'styles',
    label: 'Styles',
    icon: CapabilityVariable24Icon
  }
];

const footerItems: ToolbarItem[] = [
  {
    id: 'settings',
    label: 'Settings',
    icon: SettingsIcon
  }
];

const BUTTON_BASE_STYLES =
  'group w-8 h-8 flex items-center justify-center rounded transition-colors duration-150 text-[var(--text-secondary)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--border-focus)]';

export default function LeftSidebar() {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const renderToolbarButton = (item: ToolbarItem) => {
    const Icon = item.icon;
    const isActive = activeItem === item.id;

    return (
      <Tooltip key={item.id} text={item.label}>
        <button
          type="button"
          aria-pressed={isActive}
          onClick={() =>
            setActiveItem((current) => (current === item.id ? null : item.id))
          }
          className={`${BUTTON_BASE_STYLES} ${
            isActive
              ? 'bg-[var(--bg-tertiary)]'
              : 'hover:bg-[var(--bg-tertiary)]'
          }`}
        >
          <Icon
            size={24}
            className={`transition-colors duration-150 ${
              isActive
                ? 'text-[var(--text-primary)]'
                : 'text-[var(--text-secondary)] group-hover:text-[var(--text-primary)]'
            }`}
          />
        </button>
      </Tooltip>
    );
  };

  return (
    <div className="relative h-full w-10 bg-[var(--bg-primary)] border-r border-[var(--border-default)] flex-shrink-0 left-sidebar">
      <div className="flex h-full flex-col items-center py-1 px-1">
        <div className="flex flex-col items-center gap-2">
          {primaryItems.map(renderToolbarButton)}
        </div>

        <div className="w-6 h-px bg-[var(--border-default)] my-3" />

        <div className="flex flex-col items-center gap-2">
          {secondaryItems.map(renderToolbarButton)}
        </div>

        <div className="mt-auto flex flex-col items-center gap-2">
          {footerItems.map(renderToolbarButton)}
        </div>
      </div>
    </div>
  );
}
