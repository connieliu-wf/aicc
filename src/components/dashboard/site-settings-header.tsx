"use client";

import { Badge } from "@/components/spring-ui/badge";
import { Button } from "@/components/spring-ui/button";
import { IconButton } from "@/components/spring-ui/iconButton";
import { Input } from "@/components/spring-ui/input";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/spring-ui/dropdown-menu";
import { SegmentedControl, SegmentedControlItem } from "@/components/spring-ui/segmented-control";
import { 
  DateIcon,
  ChevronSmallDownIcon,
  GridIcon,
  ListIcon,
  ShareIcon,
  DuplicateOutlineIcon,
  ArchiveIcon,
  TransferAccountIcon
} from "@/icons";
import { useState } from "react";

interface SiteSettingsHeaderProps {
  siteName: string;
  showSearch?: boolean;
  showSort?: boolean;
  showViewMode?: boolean;
  showActions?: boolean;
  children?: React.ReactNode;
}

export function SiteSettingsHeader({ 
  siteName,
  showSearch = false,
  showSort = false, 
  showViewMode = false,
  showActions = false,
  children 
}: SiteSettingsHeaderProps) {
  const [sortBy, setSortBy] = useState('date-created');
  const [viewMode, setViewMode] = useState('grid');

  return (
    <div className="flex items-center justify-between h-10 pb-3 border-b border-[var(--border-default)]">
      {/* Left side - Site name */}
      <div className="flex items-center space-x-3">
        <h1 className="title-text-bold text-[var(--text-primary)] truncate">{siteName}</h1>
      </div>

              {/* Right side - Controls */}
        <div className="flex items-center">
          {/* Icon Buttons with 4px gaps */}
          <div className="flex items-center space-x-1">
            <IconButton variant="ghost" size="comfortable">
              <DuplicateOutlineIcon size={16} />
            </IconButton>

            <IconButton variant="ghost" size="comfortable">
              <ArchiveIcon size={16} />
            </IconButton>

            <IconButton variant="ghost" size="comfortable">
              <TransferAccountIcon size={16} />
            </IconButton>
          </div>

          {/* Regular Buttons with 8px gaps */}
          <div className="flex items-center space-x-2 ml-2">
            {/* Share Button */}
            <Button variant="outline" size="comfortable">
              <ShareIcon size={16} />
              <span>Share</span>
            </Button>

            {/* Editor */}
            <Button variant="outline" size="comfortable">
              <span>Editor</span>
            </Button>

            {/* Open in Webflow Button */}
            <Button variant="subtle-primary" size="comfortable">
              <span>Open in Webflow</span>
            </Button>

            {/* Publish Button */}
            <Button variant="primary" size="comfortable">
              <span>Publish</span>
              <ChevronSmallDownIcon size={16} />
            </Button>
          </div>
        </div>
    </div>
  );
} 