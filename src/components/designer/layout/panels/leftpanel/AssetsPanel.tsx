"use client";

import React, { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/spring-ui/select';
import { Input } from '@/components/spring-ui/input';
import { IconButton } from '@/components/spring-ui/iconButton';
import { 
  FolderAddIcon, 
  UploadIcon, 
  SidebarExpandIcon, 
  GridIcon
} from '@/icons';

interface Asset {
  id: string;
  name: string;
  url: string;
}

// Truncate filename to show start + "..." + end (with full extension)
// Example: "100123456789012323.jpg" -> "100...323.jpg"
const truncateFileName = (fileName: string, maxLength: number = 12): string => {
  // Extract extension
  const lastDotIndex = fileName.lastIndexOf('.');
  if (lastDotIndex === -1) {
    // No extension, just truncate normally
    if (fileName.length <= maxLength) return fileName;
    return fileName.slice(0, maxLength - 3) + '...';
  }
  
  const nameWithoutExt = fileName.slice(0, lastDotIndex);
  const extension = fileName.slice(lastDotIndex);
  
  // If the name fits, return as is
  if (fileName.length <= maxLength) return fileName;
  
  // Calculate how many chars we can show from start and end
  // We need space for: start + "..." + end + extension
  const ellipsisLength = 3;
  const availableLength = maxLength - ellipsisLength - extension.length;
  
  if (availableLength < 2) {
    // Too short, just show extension
    return '...' + extension;
  }
  
  // Split available length between start and end (prefer showing more from start)
  const startLength = Math.ceil(availableLength / 2);
  const endLength = Math.floor(availableLength / 2);
  
  const start = nameWithoutExt.slice(0, startLength);
  const end = nameWithoutExt.slice(-endLength);
  
  return start + '...' + end + extension;
};

const AssetsPanelHeader: React.FC = () => {
  return (
    <div 
      className="pl-4 pr-3 py-2 flex items-center justify-between h-12"
      onClick={(e) => e.stopPropagation()}
      onMouseDown={(e) => e.stopPropagation()}
    >
      <h2 className="title-text-bold">Assets</h2>
      <div className="flex items-center">
        <IconButton
          variant="ghost"
          size="comfortable"
          className="w-6 h-6 text-[var(--text-secondary)]"
          onClick={(e) => {
            e.stopPropagation();
            // Handle folder add
          }}
        >
          <FolderAddIcon size={16} />
        </IconButton>
        <IconButton
          variant="ghost"
          size="comfortable"
          className="w-6 h-6 text-[var(--text-secondary)]"
          onClick={(e) => {
            e.stopPropagation();
            // Handle upload
          }}
        >
          <UploadIcon size={16} className="text-[var(--text-secondary)]" />
        </IconButton>
        <IconButton
          variant="ghost"
          size="comfortable"
          className="w-6 h-6 text-[var(--text-secondary)]"
          onClick={(e) => {
            e.stopPropagation();
            // Handle sidebar expand
          }}
        >
          <SidebarExpandIcon size={16} className="text-[var(--text-secondary)]" />
        </IconButton>
      </div>
    </div>
  );
};

const AssetsPanelContent: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [selectedSort, setSelectedSort] = useState("newest");
  const [searchQuery, setSearchQuery] = useState("");

  // Asset images from Figma MCP - valid for 7 days
  // These URLs are generated from the Figma design and will expire after 7 days
  const assets: Asset[] = [
    { id: '1', name: '100123456789012323.jpg', url: 'https://www.figma.com/api/mcp/asset/3a7a1cba-729c-439a-a1f8-73bd9fb745ac' },
    { id: '2', name: '100123456789012324.jpg', url: 'https://www.figma.com/api/mcp/asset/5aa4cb30-4201-48aa-ac70-84295f18e8ab' },
    { id: '3', name: '100123456789012325.jpg', url: 'https://www.figma.com/api/mcp/asset/2235cc09-6c5f-40a7-a69e-3e96fe2058ff' },
    { id: '4', name: '100123456789012326.jpg', url: 'https://www.figma.com/api/mcp/asset/c1894db4-5624-4f26-968c-82f7459c0c35' },
    { id: '5', name: '100123456789012327.jpg', url: 'https://www.figma.com/api/mcp/asset/ecc7206f-5112-4f2a-9956-9961146a7385' },
    { id: '6', name: '100123456789012328.jpg', url: 'https://www.figma.com/api/mcp/asset/cf36977e-e487-47e3-add4-0d0908f455bb' },
    { id: '7', name: '100123456789012329.jpg', url: 'https://www.figma.com/api/mcp/asset/43f38b9f-1939-43da-a4ed-246e1572655a' },
    { id: '8', name: '100123456789012330.jpg', url: 'https://www.figma.com/api/mcp/asset/4bd6e48e-4b22-4126-98e7-572f40fbae51' },
    { id: '9', name: '100123456789012331.jpg', url: 'https://www.figma.com/api/mcp/asset/5ca2878c-a10d-4133-aeb9-6047c0c8937f' },
    { id: '10', name: '100123456789012332.jpg', url: 'https://www.figma.com/api/mcp/asset/60f71140-9856-433e-9d92-bf8d22a29b2c' },
    { id: '11', name: '100123456789012333.jpg', url: 'https://www.figma.com/api/mcp/asset/d3a7ed06-8295-4fdd-a079-d917365dc8a7' },
    { id: '12', name: '100123456789012334.jpg', url: 'https://www.figma.com/api/mcp/asset/b9d9b139-a1fe-493b-8299-c690591f0adb' },
  ];

  return (
    <div className="flex flex-col h-full relative">
      {/* Filters and Search Section */}
      <div className="flex flex-col gap-1 px-3 pt-0 pb-2 shrink-0 mb-2">
        {/* Filter Select */}
        <Select 
          value={selectedFilter} 
          onValueChange={setSelectedFilter}
        >
          <SelectTrigger 
            variant="default" 
            className="w-full h-6 data-[state=open]:border-[var(--input-border)]"
          >
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all" className="h-6">All assets</SelectItem>
            <SelectItem value="images" className="h-6">Images</SelectItem>
            <SelectItem value="videos" className="h-6">Videos</SelectItem>
            <SelectItem value="documents" className="h-6">Documents</SelectItem>
          </SelectContent>
        </Select>

        {/* Search Input */}
        <Input
          placeholder="Search all assets"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          showSearchIcon
          className="h-6"
        />
      </div>

      {/* Assets Grid */}
      <div className="flex-1 overflow-y-auto px-4 pb-10">
        <div className="grid grid-cols-3 gap-2">
          {assets.map((asset) => (
            <div 
              key={asset.id} 
              className="flex flex-col gap-1 cursor-pointer group"
            >
              <div className="bg-[var(--bg-raised)] rounded-[4px] h-[72px] w-full flex items-center justify-center overflow-hidden relative">
                <img 
                  src={asset.url} 
                  alt={asset.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="body-text text-[var(--text-primary)] text-center truncate text-[11.5px] leading-4" title={asset.name}>
                {truncateFileName(asset.name)}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Fixed Footer */}
      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-2 py-0 h-10 bg-[var(--bg-primary)] z-10">
        <Select 
          value={selectedSort} 
          onValueChange={setSelectedSort}
        >
          <SelectTrigger 
            variant="default" 
            className="w-auto h-6 border-none shadow-none bg-transparent"
          >
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="newest" className="h-6">Newest first</SelectItem>
            <SelectItem value="oldest" className="h-6">Oldest first</SelectItem>
            <SelectItem value="name-asc" className="h-6">Name (A-Z)</SelectItem>
            <SelectItem value="name-desc" className="h-6">Name (Z-A)</SelectItem>
          </SelectContent>
        </Select>
        
        <IconButton
          variant="ghost"
          size="comfortable"
          className="w-6 h-6 text-[var(--text-secondary)]"
          onClick={(e) => {
            e.stopPropagation();
            // Handle grid view toggle
          }}
        >
          <GridIcon size={16}/>
        </IconButton>
      </div>
    </div>
  );
};

const AssetsPanel = {
  Header: AssetsPanelHeader,
  Content: AssetsPanelContent,
};

export default AssetsPanel;

