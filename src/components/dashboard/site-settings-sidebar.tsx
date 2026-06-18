"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Badge } from "@/components/spring-ui/badge";
import { Row } from "@/components/spring-ui/row";
import {
  HomeIcon,
  KeyIcon,
  PublishIcon,
  UpgradeIcon,
  PerformanceIcon,
  SearchDefaultIcon,
  ElementFormBlockIcon,
  LibraryIcon,
  FontStyleIcon,
  BackupsIcon,
  AppsIcon,
  CodeIcon,
  CloudCodeIcon,
  ArrowLeftIcon,
} from "@/icons";

interface SiteSettingsSidebarProps {
  selectedSection: string;
  onSectionChange: (section: string) => void;
}

interface SidebarItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ size?: number; style?: React.CSSProperties }>;
  hasBeta?: boolean;
}

const sidebarItems: SidebarItem[] = [
  { id: "general", label: "General", icon: HomeIcon },
  { id: "site-access", label: "Site Access", icon: KeyIcon },
  { id: "publishing", label: "Publishing", icon: PublishIcon },
  { id: "plans", label: "Plans", icon: UpgradeIcon },
  { id: "site-usage", label: "Site Usage", icon: PerformanceIcon },
  { id: "seo", label: "SEO", icon: SearchDefaultIcon },
  { id: "forms", label: "Forms", icon: ElementFormBlockIcon },
  { id: "libraries", label: "Libraries", icon: LibraryIcon },
  { id: "fonts", label: "Fonts", icon: FontStyleIcon },
  { id: "backups", label: "Backups", icon: BackupsIcon },
  { id: "apps-integrations", label: "Apps & Integrations", icon: AppsIcon },
  { id: "custom-code", label: "Custom Code", icon: CodeIcon },
  { id: "webflow-cloud", label: "Webflow Cloud", icon: CloudCodeIcon, hasBeta: true },
];

export function SiteSettingsSidebar({ selectedSection, onSectionChange }: SiteSettingsSidebarProps) {
  const router = useRouter();

  const handleBackClick = () => {
    router.push('/dashboard');
  };

  return (
    <aside 
      className="overflow-y-auto border-none"
      style={{ width: '240px' }}
    >
      <div className="p-4 space-y-4">
        {/* Header with back button */}
        <div>
          <Row
            label="All sites"
            icon={<ArrowLeftIcon size={16} />}
            onClick={handleBackClick}
            className="cursor-pointer"
            size="comfort"
            variant="header"
          />
        </div>

        {/* Menu Items */}
        <div className="space-y-1">
          {sidebarItems.map((item) => {
            const IconComponent = item.icon;
            const isSelected = selectedSection === item.id;
            
            return (
              <Row
                key={item.id}
                label={item.label}
                icon={<IconComponent size={16} />}
                selected={isSelected}
                size="compact"
                onClick={() => onSectionChange(item.id)}
                className="cursor-pointer"
              />
            );
          })}
        </div>
      </div>
    </aside>
  );
} 