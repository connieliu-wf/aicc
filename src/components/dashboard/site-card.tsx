"use client";

import { Tag } from "@/components/spring-ui/tag";
import { IconButton } from "@/components/spring-ui/iconButton";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/spring-ui/dropdown-menu";
import {
  MoreIcon,
  SettingsIcon,
  EditIcon,
  ShareIcon,
  MoveIcon,
  DuplicateOutlineIcon,
  ArchiveIcon,
  PublishIcon,
  UnpublishIcon,
  SiteIcon,
  IconSiteIcon,
  AppsIcon,
  CloudCodeIcon,
  PerformanceIcon,
  LinkIcon,
} from "@/icons";
import { useState } from "react";
import { useRouter } from "next/navigation";

export interface Project {
  id: string;
  name: string;
  type: 'site' | 'app';
  thumbnail?: string;
  lastModified: string;
  domain: string;
  plan: string;
  isPublished: boolean;
  linkedSite?: string;
}

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  const handleMenuAction = (action: string) => {
    if (action === 'settings') {
      router.push('/dashboard/site/settings');
    }
  };

  const handleOpenInWebflow = () => {
    router.push('/');
  };

  const isSite = project.type === 'site';
  const overlayColor = isSite ? 'rgba(20,110,245,0.9)' : 'rgba(115,76,224,0.9)';

  return (
    <div className="overflow-hidden rounded-[8px] border border-[var(--border-default)] flex flex-col">
      {/* Thumbnail */}
      <div
        className="relative flex-1 min-h-[160px] bg-[var(--bg-tertiary)] cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleOpenInWebflow}
      >
        {project.thumbnail ? (
          <img
            src={project.thumbnail}
            alt={project.name}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 bg-[var(--bg-primary)] flex items-center justify-center">
            <CloudCodeIcon size={24} className="text-[var(--text-dimmed)]" />
          </div>
        )}

        {/* Hover overlay */}
        {isHovered && (
          <div
            className="absolute inset-0 flex flex-col items-center justify-center"
            style={{ background: overlayColor }}
          >
            <span
              className="text-white text-center font-normal"
              style={{ fontSize: 'var(--font-size-base)', lineHeight: 'var(--line-height-normal)' }}
            >
              {isSite ? 'Open site in Webflow' : 'Open app in Webflow'}
            </span>
          </div>
        )}

        {/* Settings button — top right on hover */}
        {isHovered && (
          <div
            className="absolute top-3 right-3 rounded-[4px] bg-[var(--bg-primary)]"
            onClick={(e) => { e.stopPropagation(); handleMenuAction('settings'); }}
          >
            <IconButton variant="default" size="comfortable">
              <SettingsIcon size={16} />
            </IconButton>
          </div>
        )}

        {/* Project type badge — hidden on hover */}
        {!isHovered && (
          <div
            className="absolute top-3 left-3 flex items-center justify-center rounded-[4px] w-8 h-8"
            style={{ background: isSite ? 'var(--blue-bg)' : 'var(--purple-bg)', color: 'var(--white)' }}
          >
          {isSite ? (
            <IconSiteIcon size={16} />
          ) : (
            <CloudCodeIcon size={16} />
          )}
          </div>
        )}
      </div>

      {/* Divider */}
      <div className="h-px bg-[var(--border-default)] shrink-0" />

      {/* Card info */}
      <div className="bg-[var(--bg-primary)] flex flex-col gap-2 pt-2 pb-3 pl-3 pr-2 shrink-0">
        {/* Name + menu */}
        <div className="flex items-start gap-2">
          <div className="flex-1 min-w-0">
            <p className="body-text-bold text-[var(--text-primary)] truncate">{project.name}</p>
            <p className="body-text text-[var(--text-secondary)] truncate">
              {isSite ? project.domain : 'View app'}
            </p>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <IconButton variant="ghost" size="comfortable">
                <MoreIcon size={16} />
              </IconButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => handleMenuAction('settings')}>
                <SettingsIcon size={16} />
                Settings
              </DropdownMenuItem>
              {isSite && (
                <DropdownMenuItem onClick={() => handleMenuAction('editor')}>
                  <EditIcon size={16} />
                  Editor
                </DropdownMenuItem>
              )}
              <DropdownMenuItem onClick={() => handleMenuAction('share')}>
                <ShareIcon size={16} />
                Share
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleMenuAction('move')}>
                <MoveIcon size={16} />
                Move to folder
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleMenuAction('duplicate')}>
                <DuplicateOutlineIcon size={16} />
                Duplicate
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => handleMenuAction('archive')}>
                <ArchiveIcon size={16} />
                Archive
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Plan tag + status */}
        <div className="flex items-center justify-between pr-1">
          {isSite ? (
            <Tag variant="default" size="compact" shape="square" styleType="solid">
              {project.plan}
            </Tag>
          ) : (
            <Tag variant="default" size="compact" shape="square" styleType="solid" prefixIcon={<LinkIcon size={12} />}>
              Linked to site
            </Tag>
          )}

          <div className="flex items-center">
            {isSite && (
              <>
                <div className="flex items-center justify-center w-6 h-6">
                  <PerformanceIcon size={16} className="text-[var(--text-secondary)]" />
                </div>
                <div className="flex items-center justify-center w-6 h-6">
                  {project.isPublished ? (
                    <PublishIcon size={16} style={{ color: 'var(--text-green)' }} />
                  ) : (
                    <UnpublishIcon size={16} style={{ color: 'var(--text-secondary)' }} />
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Legacy alias for backward compat
export const SiteCard = ProjectCard;
