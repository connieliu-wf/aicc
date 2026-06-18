"use client";

import { ProjectCard, Project } from "./site-card";
import { Button } from "@/components/spring-ui/button";
import { IconButton } from "@/components/spring-ui/iconButton";
import { Badge } from "@/components/spring-ui/badge";
import { Input } from "@/components/spring-ui/input";
import { SegmentedControl, SegmentedControlItem } from "@/components/spring-ui/segmented-control";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/spring-ui/dropdown-menu";
import {
  AddIcon,
  UsersIcon,
  FolderAddIcon,
  GridIcon,
  ListIcon,
  DateIcon,
  ChevronSmallDownIcon,
} from "@/icons";
import { useState } from "react";
import { getImagePath } from "@/lib/utils";

const mockProjects: Project[] = [
  {
    id: "1",
    name: "Talently",
    type: "site",
    thumbnail: getImagePath("/images/site1.png"),
    lastModified: "2 hours ago",
    domain: "talently.webflow.io",
    plan: "Ecomm Advanced",
    isPublished: true,
  },
  {
    id: "2",
    name: "PlayReplay Tennis",
    type: "site",
    thumbnail: getImagePath("/images/site2.png"),
    lastModified: "1 day ago",
    domain: "playreplay.webflow.io",
    plan: "Basic Site",
    isPublished: false,
  },
  {
    id: "3",
    name: "Winter Wonderland",
    type: "site",
    thumbnail: getImagePath("/images/site3.png"),
    lastModified: "3 days ago",
    domain: "winter.webflow.io",
    plan: "Business Site",
    isPublished: true,
  },
  {
    id: "4",
    name: "Blackbird Agency",
    type: "site",
    thumbnail: getImagePath("/images/site4.png"),
    lastModified: "1 week ago",
    domain: "blackbird.webflow.io",
    plan: "CMS Site",
    isPublished: true,
  },
  {
    id: "5",
    name: "Radiant Search",
    type: "site",
    thumbnail: getImagePath("/images/site5.png"),
    lastModified: "2 weeks ago",
    domain: "radiant.webflow.io",
    plan: "Starter",
    isPublished: false,
  },
  {
    id: "6",
    name: "Pepperclip Studio",
    type: "site",
    thumbnail: getImagePath("/images/site6.png"),
    lastModified: "1 month ago",
    domain: "pepperclip.webflow.io",
    plan: "Business Site",
    isPublished: true,
  },
  {
    id: "7",
    name: "Colleen's awesome app",
    type: "app",
    lastModified: "2 days ago",
    domain: "app.webflow.io",
    plan: "",
    isPublished: false,
    linkedSite: "Talently",
  },
  {
    id: "8",
    name: "Winter cabins dashboard",
    type: "app",
    lastModified: "5 days ago",
    domain: "cabins.webflow.io",
    plan: "",
    isPublished: true,
    linkedSite: "Winter Wonderland",
  },
  {
    id: "9",
    name: "Membership portal",
    type: "app",
    lastModified: "3 weeks ago",
    domain: "members.webflow.io",
    plan: "",
    isPublished: false,
    linkedSite: "Blackbird Agency",
  },
];

interface SiteGridProps {
  filter?: 'all' | 'site' | 'app';
}

export function SiteGrid({ filter = 'all' }: SiteGridProps) {
  const [viewMode, setViewMode] = useState("grid");
  const [sortBy, setSortBy] = useState("date-created");

  const filteredProjects = filter === 'all'
    ? mockProjects
    : mockProjects.filter(p => p.type === filter);

  return (
    <div 
      className="w-full mx-auto"
      style={{ 
        maxWidth: '1040px',
        minWidth: '280px',
        padding: '16px'
      }}
    >
      <div className="space-y-6">
        {/* Header */}
        <div 
          className="flex items-center justify-between h-10 pb-3 border-b border-[var(--border-default)]">
          <div className="flex items-center space-x-3">
            <h1 className="title-text-bold text-[var(--text-primary)] truncate">My Workspace</h1>
            <Badge 
              variant="blue" 
              styleType="tinted" 
              shape="square" 
              size="compact"
              className="truncate"
            >
              Growth Workspace
            </Badge>
          </div>

          <div className="flex items-center space-x-3">
            <div className="relative">
              <Input
                placeholder="Search projects..."
                showSearchIcon={true}
                className="max-w-64"
              />
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="comfortable" className="flex items-center">
                  <DateIcon size={16} />
                  <span>Date created</span>
                  <ChevronSmallDownIcon size={16} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setSortBy('date-created')}>
                  Date created
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSortBy('name')}>
                  Name
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSortBy('last-modified')}>
                  Last modified
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <SegmentedControl
              value={viewMode}
              onValueChange={setViewMode}
            >
              <SegmentedControlItem value="grid" isIcon>
                <GridIcon size={16} />
              </SegmentedControlItem>
              <SegmentedControlItem value="list" isIcon>
                <ListIcon size={16} />
              </SegmentedControlItem>
            </SegmentedControl>

            <IconButton variant="outline" size="comfortable">
              <FolderAddIcon size={16} />
            </IconButton>

            <Button variant="default" size="comfortable" className="flex items-center">
              <UsersIcon size={16} />
              <span>Invite</span>
            </Button>

            <Button variant="primary" size="comfortable" className="flex items-center">
              <AddIcon size={16} />
              <span>New project</span>
            </Button>
          </div>
        </div>

        {/* Grid */}
        <div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          style={{ gap: '16px' }}
        >
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
