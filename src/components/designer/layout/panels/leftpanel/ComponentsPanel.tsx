"use client";

import React, { useState, useMemo } from 'react';
import { Input } from "@/components/spring-ui/input";
import { Row } from "@/components/spring-ui/row";
import { ElementCodeCompIcon } from '@/icons/ElementCodeCompIcon';
import { getAllComponents, useComponentEditor } from '@/context/ComponentEditorContext';

const ComponentsPanel = () => {
  const [search, setSearch] = useState('');
  const { openComponent } = useComponentEditor();
  const components = getAllComponents();

  const filtered = useMemo(() => {
    if (!search.trim()) return components;
    const q = search.toLowerCase();
    return components.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q),
    );
  }, [components, search]);

  return (
    <div className="flex flex-col h-full">
      <div className="px-2 pb-2 border-b border-[var(--border-default)]">
        <Input
          showSearchIcon
          placeholder="Search components"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="flex-1 overflow-y-auto pt-1">
        {filtered.length === 0 ? (
          <div className="px-4 py-6 text-center text-[var(--text-secondary)] body-text">
            No components found
          </div>
        ) : (
          filtered.map((comp) => (
            <Row
              key={comp.id}
              label={comp.name}
              description={comp.description}
              icon={
                <ElementCodeCompIcon
                  size={16}
                  style={{ color: 'var(--text-secondary)' }}
                />
              }
              size="compact"
              onDoubleClick={() => openComponent(comp.id)}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default ComponentsPanel;
