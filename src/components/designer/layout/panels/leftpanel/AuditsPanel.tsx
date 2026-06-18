"use client";

import React, { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/spring-ui/select';
import { Row } from '@/components/spring-ui/row';
import { ChevronLargeDownIcon, ChevronLargeRightIcon, ArrowRightIcon, PriorityHighIcon, PriorityLowIcon, HiddenItemIcon } from '@/icons';

interface AuditSection {
  title: string;
  priority: 'high' | 'low' | 'hidden';
  expanded: boolean;
  items: AuditItem[];
}

interface AuditItem {
  label: string;
}

const AuditsPanelHeader: React.FC = () => {
  const [selectedScope, setSelectedScope] = useState("this-page");
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  // Store the open state globally so Panel can check it
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      (window as any).__auditsPanelSelectOpen = isSelectOpen;
      return () => {
        delete (window as any).__auditsPanelSelectOpen;
      };
    }
  }, [isSelectOpen]);

  return (
    <div 
      className="pl-4 pr-3 py-3 flex items-center justify-between"
      onClick={(e) => e.stopPropagation()}
      onMouseDown={(e) => e.stopPropagation()}
    >
      <h2 className="title-text-bold">Audits</h2>
      <div className="flex items-center gap-2">
        <div 
          onClick={(e) => e.stopPropagation()} 
          onMouseDown={(e) => e.stopPropagation()}
          onPointerDown={(e) => e.stopPropagation()}
          data-select-wrapper="true"
        >
          <Select 
            value={selectedScope} 
            onValueChange={setSelectedScope}
            onOpenChange={setIsSelectOpen}
          >
            <SelectTrigger 
              variant="default" 
              className="w-auto min-w-[80px] data-[state=open]:border-[var(--input-border)]"
              onMouseDown={(e) => e.stopPropagation()}
              onPointerDown={(e) => e.stopPropagation()}
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="this-page" className="min-h-[24px] py-1">This page</SelectItem>
              <SelectItem value="sitewide" className="min-h-[24px] py-1">Sitewide</SelectItem>
            </SelectContent>
          </Select>
        </div>
      
      </div>
    </div>
  );
};

const AuditsPanelContent: React.FC = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [sections, setSections] = useState<AuditSection[]>([
    {
      title: 'Higher priority recommendations',
      priority: 'high',
      expanded: true,
      items: [
        { label: 'Add alt text on 4 images' },
        { label: 'Add a meta title' },
        { label: 'Add a meta description' },
      ]
    },
    {
      title: 'Lower priority recommendations',
      priority: 'low',
      expanded: true,
      items: [
        { label: 'Fix skipped heading level' },
        { label: 'Add schema markup' },
        { label: 'Add unique ID on an element' },
      ]
    },
    {
      title: 'Hidden (1)',
      priority: 'hidden',
      expanded: false,
      items: [
        { label: 'Add descriptive link text' }
      ]
    }
  ]);

  const toggleSection = (index: number) => {
    const newSections = [...sections];
    newSections[index].expanded = !newSections[index].expanded;
    setSections(newSections);
  };

  return (
    <div className="flex flex-col h-full">
      {/* Content */}
      <div className="flex-1 overflow-y-auto px-0 pt-2 pb-4">
        <div className="flex flex-col gap-4">
          {sections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="flex flex-col gap-1">
              {/* Section Header */}
              <div 
                className="flex items-center gap-1 h-8 pl-2 pr-3 cursor-default rounded transition-colors"
                onClick={() => toggleSection(sectionIndex)}
              >
                <div className="flex items-center flex-1 min-w-0 gap-1">
                  {/* Priority indicator */}
                  {section.priority === 'high' ? (
                    <PriorityHighIcon 
                      className="shrink-0 text-white"
                      size={16}
                    />
                  ) : section.priority === 'low' ? (
                    <PriorityLowIcon 
                      className="shrink-0 text-white"
                      size={16}
                    />
                  ) : (
                    <HiddenItemIcon 
                      className="shrink-0 text-white"
                      size={16}
                    />
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="body-text truncate text-[var(--text-secondary)]">
                      {section.title}
                    </p>
                  </div>
                </div>
                {/* Chevron */}
                <div className="shrink-0">
                  {section.expanded ? (
                    <ChevronLargeDownIcon 
                      className="text-[var(--text-secondary)]" 
                      size={24} 
                    />
                  ) : (
                    <ChevronLargeRightIcon 
                      className="text-[var(--text-secondary)]" 
                      size={24} 
                    />
                  )}
                </div>
              </div>

              {/* Section Items */}
              {section.expanded && section.items.length > 0 && (
                <div className="flex flex-col gap-1 px-2 pb-3">
                  {section.items.map((item, itemIndex) => {
                    const itemKey = `${sectionIndex}-${itemIndex}`;
                    const isHovered = hoveredItem === itemKey;
                    const isSelected = selectedItem === itemKey;
                    const showArrow = isHovered || isSelected;
                    
                    return (
                      <div 
                        key={itemIndex}
                        className=" rounded-[4px] transition-colors"
                        onMouseEnter={() => setHoveredItem(itemKey)}
                        onMouseLeave={() => setHoveredItem(null)}
                        onClick={() => setSelectedItem(selectedItem === itemKey ? null : itemKey)}
                      >
                        <Row
                          label={item.label}
                          selected={isSelected}
                          size="compact"
                          className="min-h-[32px]"
                          suffixButtons={showArrow ? [
                            <ArrowRightIcon 
                              key="arrow"
                              className="text-[var(--text-secondary)]" 
                              size={16} 
                            />
                          ] : []}
                        />
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const AuditsPanel = {
  Header: AuditsPanelHeader,
  Content: AuditsPanelContent,
};

export default AuditsPanel;

