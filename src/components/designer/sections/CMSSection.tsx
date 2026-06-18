"use client";

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import CMSNavigation from './CMS/CMSNavigation';
import CMSTable from './CMS/CMSTable';
import CMSItemDetail from './CMS/CMSItemDetail';

// Mock data types
export interface CMSCollection {
  id: string;
  name: string;
  itemCount: number;
}

export interface CMSItem {
  id: string;
  name: string;
  publishedDate: string | null;
  status: 'published' | 'draft' | 'archived';
  createdDate: string;
  modifiedDate: string;
  content?: Record<string, any>;
}

// Mock collections (without itemCount - will be calculated)
const mockCollectionData = [
  { id: '1', name: 'Blog Posts' },
  { id: '2', name: 'Products' },
  { id: '3', name: 'Team Members' },
  { id: '4', name: 'Case Studies' },
];

const mockItems: Record<string, CMSItem[]> = {
  '1': [
    {
      id: '1',
      name: 'Getting Started with React',
      publishedDate: '2024-01-15',
      status: 'published',
      createdDate: '2024-01-10',
      modifiedDate: '2024-01-15',
      content: { title: 'Getting Started with React', body: 'Lorem ipsum...' }
    },
    {
      id: '2',
      name: 'Advanced TypeScript Tips',
      publishedDate: null,
      status: 'draft',
      createdDate: '2024-01-12',
      modifiedDate: '2024-01-14',
      content: { title: 'Advanced TypeScript Tips', body: 'Lorem ipsum...' }
    },
  ],
  '2': [
    {
      id: '3',
      name: 'Premium Widget Pro',
      publishedDate: '2024-01-01',
      status: 'published',
      createdDate: '2023-12-15',
      modifiedDate: '2024-01-01',
      content: { name: 'Premium Widget Pro', price: '$99.99', description: 'A premium widget...' }
    },
  ],
  '3': [
    {
      id: '4',
      name: 'John Doe',
      publishedDate: '2024-01-01',
      status: 'published',
      createdDate: '2023-12-01',
      modifiedDate: '2024-01-01',
      content: { name: 'John Doe', role: 'CEO', bio: 'John is our fearless leader...' }
    },
  ],
  '4': [
    {
      id: '5',
      name: 'Enterprise Migration Success',
      publishedDate: '2024-01-10',
      status: 'published',
      createdDate: '2024-01-05',
      modifiedDate: '2024-01-10',
      content: { title: 'Enterprise Migration Success', client: 'Acme Corp', outcome: 'Successful migration...' }
    },
  ],
};

export default function CMSSection() {
  // Calculate actual item counts from mockItems
  const mockCollections: CMSCollection[] = mockCollectionData.map(collection => ({
    ...collection,
    itemCount: mockItems[collection.id]?.length || 0
  }));

  const [selectedCollection, setSelectedCollectionState] = useState<CMSCollection | null>(mockCollections[0]);
  const [selectedItem, setSelectedItemState] = useState<CMSItem | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const hasInitializedRef = useRef(false);
  const isUpdatingRef = useRef(false);

  // Read initial state from URL on mount
  useEffect(() => {
    if (hasInitializedRef.current) return;
    hasInitializedRef.current = true;

    const collectionParam = searchParams?.get('cmsCollection');
    const itemParam = searchParams?.get('cmsItem');

    if (collectionParam) {
      const collection = mockCollections.find(c => c.id === collectionParam);
      if (collection) {
        setSelectedCollectionState(collection);
        
        if (itemParam) {
          const items = mockItems[collection.id] || [];
          const item = items.find(i => i.id === itemParam);
          if (item) {
            setSelectedItemState(item);
          }
        }
      }
    }
  }, [searchParams]);

  // Update URL helper
  const updateUrl = useCallback((collectionId: string | null, itemId: string | null) => {
    if (isUpdatingRef.current) return;
    
    const params = new URLSearchParams(searchParams?.toString() || '');
    
    if (collectionId === null || collectionId === '1') {
      params.delete('cmsCollection');
    } else {
      params.set('cmsCollection', collectionId);
    }

    if (itemId === null) {
      params.delete('cmsItem');
    } else {
      params.set('cmsItem', itemId);
    }

    const queryString = params.toString();
    const newUrl = queryString ? `${pathname}?${queryString}` : pathname || '/';
    
    isUpdatingRef.current = true;
    router.replace(newUrl, { scroll: false });
    
    setTimeout(() => {
      isUpdatingRef.current = false;
    }, 50);
  }, [searchParams, pathname, router]);

  const currentItems = selectedCollection ? mockItems[selectedCollection.id] || [] : [];
  const filteredItems = currentItems.filter(item => 
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCollectionSelect = useCallback((collection: CMSCollection) => {
    setSelectedCollectionState(collection);
    setSelectedItemState(null);
    updateUrl(collection.id, null);
  }, [updateUrl]);

  const handleItemSelect = useCallback((item: CMSItem) => {
    setSelectedItemState(item);
    updateUrl(selectedCollection?.id || null, item.id);
  }, [selectedCollection, updateUrl]);

  const handleItemClose = useCallback(() => {
    setSelectedItemState(null);
    updateUrl(selectedCollection?.id || null, null);
  }, [selectedCollection, updateUrl]);

  // Keyboard navigation for items
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedItem || filteredItems.length === 0) return;

      const currentIndex = filteredItems.findIndex(item => item.id === selectedItem.id);
      
      if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
        e.preventDefault();
        let nextIndex;
        
        if (e.key === 'ArrowUp') {
          nextIndex = currentIndex > 0 ? currentIndex - 1 : filteredItems.length - 1;
        } else {
          nextIndex = currentIndex < filteredItems.length - 1 ? currentIndex + 1 : 0;
        }
        
        const nextItem = filteredItems[nextIndex];
        setSelectedItemState(nextItem);
        updateUrl(selectedCollection?.id || null, nextItem.id);
      }
      
      if (e.key === 'Escape') {
        setSelectedItemState(null);
        updateUrl(selectedCollection?.id || null, null);
      }
    };

    if (selectedItem) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [selectedItem, filteredItems, selectedCollection, updateUrl]);

  return (
    <div className="flex h-full bg-[var(--bg-primary)]">
      {/* Left Navigation Panel */}
      <CMSNavigation
        collections={mockCollections}
        selectedCollection={selectedCollection}
        onCollectionSelect={handleCollectionSelect}
      />
      
      {/* Main Content Area */}
      <div className="flex-1 flex overflow-hidden">
        {/* Table Area */}
        <div className={selectedItem ? 'w-[248px]' : 'flex-1'}>
          <CMSTable
            collection={selectedCollection}
            items={filteredItems}
            selectedItem={selectedItem}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            onItemSelect={handleItemSelect}
            isCompact={!!selectedItem}
          />
        </div>
        
        {/* Right Detail Panel */}
        {selectedItem && (
          <CMSItemDetail
            item={selectedItem}
            collection={selectedCollection}
            onClose={handleItemClose}
          />
        )}
      </div>
    </div>
  );
}
