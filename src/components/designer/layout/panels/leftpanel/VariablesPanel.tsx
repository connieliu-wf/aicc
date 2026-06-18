"use client";

import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { cn } from '@/lib/utils';
import { Row } from '@/components/spring-ui/row';
import { usePanel } from '@/context/PanelContext';
import ColorsPanel from './ColorsPanel';

const VariablesPanel: React.FC = () => {
  const { subPanel, setSubPanel, closeSubPanel } = usePanel();
  const isColorsPanelOpen = subPanel === 'colors';

  const collections = [
    { id: 'color', label: 'Color' },
  ];

  const handleCollectionClick = (e: React.MouseEvent, collectionId: string) => {
    e.stopPropagation();
    if (collectionId === 'color') {
      setSubPanel('colors');
    }
  };


  return (
    <>
      <div className="flex flex-col h-full px-2">
        <div className="flex-1 overflow-y-auto">
          {collections.map((collection) => {
            const isSelected = isColorsPanelOpen && collection.id === 'color';
            return (
              <Row
                key={collection.id}
                label={collection.label}
                size="compact"
                selected={isSelected}
                showChevron={isSelected}
                onClick={(e) => {
                  e.stopPropagation();
                  handleCollectionClick(e, collection.id);
                }}
                className="cursor-pointer"
              />
            );
          })}
        </div>
      </div>

      {isColorsPanelOpen && typeof window !== 'undefined' && createPortal(
        <ColorsPanel onClose={closeSubPanel} />,
        document.body
      )}
    </>
  );
};

export default VariablesPanel;
