"use client";

import React from 'react';
import { Table, TableHeader, TableRow, type ColumnDef } from '@/components/spring-ui/table';
import { Input } from '@/components/spring-ui/input';
import { Button } from '@/components/spring-ui/button';
import { CMSCollection, CMSItem } from '../CMSSection';
import { CheckboxIcon, CsvExportIcon, CsvImportIcon, FilterIcon, SettingsIcon } from '@/icons';

interface CMSTableProps {
  collection: CMSCollection | null;
  items: CMSItem[];
  selectedItem: CMSItem | null;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onItemSelect: (item: CMSItem) => void;
  isCompact: boolean;
}

export default function CMSTable({
  collection,
  items,
  selectedItem,
  searchQuery,
  onSearchChange,
  onItemSelect,
  isCompact
}: CMSTableProps) {
  if (!collection) {
    return (
      <div className="flex-1 flex items-center justify-center text-[var(--text-secondary)]">
        Select a collection to view items
      </div>
    );
  }

  const formatDate = (dateString: string | null) => {
    if (!dateString) return '—';
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const getStatusColor = (status: CMSItem['status']) => {
    switch (status) {
      case 'published':
        return 'text-[var(--green-text)]';
      case 'draft':
        return 'text-[var(--orange-text)]';
      case 'archived':
        return 'text-[var(--text-secondary)]';
      default:
        return 'text-[var(--text-secondary)]';
    }
  };

  const columns: ColumnDef[] = isCompact 
    ? [
        { 
          id: 'name', 
          header: 'Name', 
          width: '100%',
          renderCell: (value, rowData) => (
            <div className="body-text text-[var(--text-primary)] truncate">
              {rowData.name}
            </div>
          )
        }
      ]
    : [
        { 
          id: 'name', 
          header: 'Name', 
          width: '30%',
          renderCell: (value, rowData) => (
            <div className="body-text text-[var(--text-primary)] truncate">
              {rowData.name}
            </div>
          )
        },
        { 
          id: 'publishedDate', 
          header: 'Published', 
          width: '15%',
          renderCell: (value, rowData) => (
            <span className="text-[var(--text-secondary)]">
              {formatDate(rowData.publishedDate)}
            </span>
          )
        },
        { 
          id: 'status', 
          header: 'Status', 
          width: '15%',
          renderCell: (value, rowData) => (
            <span className={`capitalize ${getStatusColor(rowData.status)}`}>
              {rowData.status}
            </span>
          )
        },
        { 
          id: 'createdDate', 
          header: 'Created', 
          width: '20%',
          renderCell: (value, rowData) => (
            <span className="text-[var(--text-secondary)]">
              {formatDate(rowData.createdDate)}
            </span>
          )
        },
        { 
          id: 'modifiedDate', 
          header: 'Modified', 
          width: '20%',
          renderCell: (value, rowData) => (
            <span className="text-[var(--text-secondary)]">
              {formatDate(rowData.modifiedDate)}
            </span>
          )
        }
      ];

  return (
    <div className="flex flex-col h-full w-full bg-[var(--bg-primary)]">
      {/* Header */}
      <div className="flex items-center justify-between px-2 h-10 border-b border-[var(--border-default)]">
        <div className="flex flex-col min-w-0 flex-1">
          <h2 className="title-text-bold text-[var(--text-primary)] truncate">
            {collection.name}
          </h2>
        </div>
        
        {!isCompact && (
          <div className="flex items-center gap-1 flex-shrink-0">
            <Input
              placeholder="Search items..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-64"
            />
            <Button size="compact" variant="outline">
              <FilterIcon />
              Filter
            </Button>
            <Button size="compact" variant="outline">
              <CheckboxIcon />
              Select
            </Button>
            <Button size="compact" variant="outline">
              <CsvExportIcon />
              Export
            </Button>
            <Button size="compact" variant="outline">
              <CsvImportIcon />
              Import
            </Button>
            <Button size="compact" variant="outline">
              <SettingsIcon />
              Settings
            </Button>
            <Button size="compact" variant="primary">
              New item
            </Button>
          </div>
        )}
      </div>

      {/* Table */}
      <div className="flex-1 overflow-auto w-full">
        <Table noBorder>
          <TableHeader columns={columns} />
          {items.map((item, index) => (
            <TableRow
              key={item.id}
              data={item}
              columns={columns}
              onClick={() => onItemSelect(item)}
              className={`
                cursor-pointer transition-colors duration-200
                ${selectedItem?.id === item.id ? 'bg-[var(--bg-raised)]' : 'hover:bg-[var(--bg-raised)]'}
              `}
            />
          ))}
        </Table>
        
        {items.length === 0 && (
          <div className="flex items-center justify-center py-12 text-[var(--text-secondary)]">
            {searchQuery ? 'No items match your search' : 'No items in this collection'}
          </div>
        )}
      </div>
    </div>
  );
} 