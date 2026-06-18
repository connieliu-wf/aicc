"use client";

import React, { useState } from 'react';
import { Row } from '@/components/spring-ui/row';
import { SettingsIcon } from '@/icons/SettingsIcon';
import { IconButton } from '@/components/spring-ui/iconButton';
import { CMSCollection } from '../CMSSection';

interface CMSNavigationProps {
  collections: CMSCollection[];
  selectedCollection: CMSCollection | null;
  onCollectionSelect: (collection: CMSCollection) => void;
}

export default function CMSNavigation({ 
  collections, 
  selectedCollection, 
  onCollectionSelect 
}: CMSNavigationProps) {
  const [hoveredCollection, setHoveredCollection] = useState<string | null>(null);

  const handleSettingsClick = (e: React.MouseEvent<HTMLButtonElement>, collectionId: string) => {
    e.stopPropagation();
    // TODO: Open collection settings panel
    console.log('Open settings for collection:', collectionId);
  };

  return (
    <div className="w-[248px] h-full bg-[var(--bg-primary)] border-r border-[var(--border-default)] flex flex-col">
      {/* Header */}
      <div className="h-10 px-2 flex items-center">
        <h2 className="title-text-bold text-[var(--text-primary)] px-2">CMS Collections</h2>
      </div>
      
      <div className="flex-1 overflow-y-auto">
        {collections.map((collection) => {
          const isSelected = selectedCollection?.id === collection.id;
          const isHovered = hoveredCollection === collection.id;
          
          return (
            <div
              key={collection.id}
              onClick={() => onCollectionSelect(collection)}
              onMouseEnter={() => setHoveredCollection(collection.id)}
              onMouseLeave={() => setHoveredCollection(null)}
              className={`
                cursor-pointer transition-colors duration-200 group px-2 py-0.5
                ${isSelected ? 'bg-[var(--bg-accent)]' : 'hover:bg-[var(--bg-hover)]'}
              `}
            >
              <Row
                label={collection.name}
                meta={`${collection.itemCount} items`}
                selected={isSelected}
                showChevron={isSelected}
                suffixButtons={
                  isHovered && !isSelected ? [
                    <IconButton
                      key="settings"
                      onClick={(e) => handleSettingsClick(e, collection.id)}
                      size="compact"
                      variant="ghost"
                    >
                      <SettingsIcon size={16} />
                    </IconButton>
                  ] : []
                }
              />
            </div>
          );
        })}
      </div>
    </div>
  );
} 