"use client";

import { DashboardNav } from "@/components/dashboard/dashboard-nav";
import { SiteSettingsSidebar } from "@/components/dashboard/site-settings-sidebar";
import { SiteSettingsHeader } from "@/components/dashboard/site-settings-header";
import { useState, useEffect, useCallback, useRef } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import React from "react";
import { Table, TableHeader, TableRow, ColumnDef } from "@/components/spring-ui/table";
import { Avatar } from "@/components/spring-ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, SelectLabel, SelectGroup } from "@/components/spring-ui/select";
import { Tag } from "@/components/spring-ui/tag";
import { IconButton } from "@/components/spring-ui/iconButton";
import { Button } from "@/components/spring-ui/button";
import { TabBar, TabBarItem } from "@/components/spring-ui/tab-bar";
import { Switch } from "@/components/spring-ui/switch";
import { Badge } from "@/components/spring-ui/badge";
import { MoreIcon } from "@/icons/MoreIcon";
import { InfoIcon } from "@/icons/InfoIcon";
import { CMSDefaultIcon } from "@/icons/CMSDefaultIcon";
import { CheckDefaultIcon } from "@/icons/CheckDefaultIcon";
import { LockIcon } from "@/icons/LockIcon";
import { UsersIcon } from "@/icons/UsersIcon";
import { AddIcon } from "@/icons/AddIcon";
import { BoxAddIcon } from "@/icons/BoxAddIcon";
import { ChevronSmallDownIcon } from "@/icons/ChevronSmallDownIcon";
import { ChevronSmallUpIcon } from "@/icons/ChevronSmallUpIcon";
import { Note } from "@/components/spring-ui/note";
import { Input } from "@/components/spring-ui/input";
import { GlobeWarningIcon } from "@/icons/GlobeWarningIcon";
import { GlobeCheckIcon } from "@/icons/GlobeCheckIcon";
import { PublishIcon } from "@/icons/PublishIcon";
import { RefreshIcon } from "@/icons/RefreshIcon";
import { SearchDefaultIcon } from "@/icons/SearchDefaultIcon";
import { ArrowRightIcon } from "@/icons/ArrowRightIcon";
import { HomeIcon } from "@/icons/HomeIcon";
import { CheckCircleIcon } from "@/icons/CheckCircleIcon";
import { WebflowBadgeIcon } from "@/icons/WebflowBadgeIcon";

// User data type
interface UserData {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  fallback: string;
  role: string;
  cmsAccess: string;
}

// Plan feature type
interface PlanFeature {
  label: string;
  hasInfoIcon?: boolean;
  hasPlusIcon?: boolean;
}

// Plan data type
interface PlanData {
  id: string;
  name: string;
  priceMonthly: number;
  priceYearly: number;
  description: string;
  isCurrentPlan: boolean;
  badge?: string;
  features: PlanFeature[];
}

// Domain data type
interface DomainData {
  id: string;
  domain: string;
  status: "pending" | "required" | "connected";
  sslStatus: "active" | "dns-update-needed";
  isDefault: boolean;
  lastPublished: string;
  hasNote?: boolean;
  noteType?: "success" | "warning";
  noteMessage?: string;
}

// Redirect data type
interface RedirectData {
  id: string;
  oldUrl: string;
  newUrl: string;
}

type SettingsSectionType = 'general' | 'hosting' | 'seo' | 'forms' | 'fonts' | 'integrations' | 'custom-code' | 'editor' | 'members' | 'plans' | 'billing';

export default function SiteSettingsPage() {
  const [selectedSectionState, setSelectedSectionState] = useState<SettingsSectionType>("general");
  const [siteAccessLevel, setSiteAccessLevel] = useState("admins-only");
  const [plansTab, setPlansTab] = useState("website");
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("yearly");
  const [redirectSearchQuery, setRedirectSearchQuery] = useState("");
  const [redirectSort, setRedirectSort] = useState("last-modified");
  const [redirectPage, setRedirectPage] = useState(1);
  const [dismissedNotes, setDismissedNotes] = useState<Set<string>>(new Set());
  
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const hasInitializedRef = useRef(false);
  const isUpdatingRef = useRef(false);

  // Read initial section from URL on mount
  useEffect(() => {
    if (hasInitializedRef.current) return;
    hasInitializedRef.current = true;

    const sectionParam = searchParams?.get('settingsSection') as SettingsSectionType | null;
    if (sectionParam) {
      setSelectedSectionState(sectionParam);
    }
  }, [searchParams]);

  // Update URL when section changes
  const updateUrl = useCallback((section: SettingsSectionType) => {
    if (isUpdatingRef.current) return;
    
    const params = new URLSearchParams(searchParams?.toString() || '');
    
    if (section === 'general') {
      params.delete('settingsSection'); // Default section, no need to show in URL
    } else {
      params.set('settingsSection', section);
    }

    const queryString = params.toString();
    const newUrl = queryString ? `${pathname}?${queryString}` : pathname || '/dashboard/site/settings';
    
    isUpdatingRef.current = true;
    router.replace(newUrl, { scroll: false });
    
    setTimeout(() => {
      isUpdatingRef.current = false;
    }, 50);
  }, [searchParams, pathname, router]);

  const setSelectedSection = useCallback((section: string) => {
    const typedSection = section as SettingsSectionType;
    setSelectedSectionState(typedSection);
    updateUrl(typedSection);
  }, [updateUrl]);

  // Alias for backward compatibility
  const selectedSection = selectedSectionState;
  
  // Advanced publishing options state
  const [asyncLoadJS, setAsyncLoadJS] = useState(false);
  const [minifyHTML, setMinifyHTML] = useState(false);
  const [minifyCSS, setMinifyCSS] = useState(false);
  const [minifyJS, setMinifyJS] = useState(false);
  const [perPageCSS, setPerPageCSS] = useState(false);
  const [enableHSTSSubdomains, setEnableHSTSSubdomains] = useState(false);
  const [enableHSTSPreload, setEnableHSTSPreload] = useState(false);
  const [useSecureFrameHeaders, setUseSecureFrameHeaders] = useState(false);
  
  // Staging state
  const [stagingDomain, setStagingDomain] = useState("sitename");
  const [isStagingPrivate, setIsStagingPrivate] = useState(false);

  // General settings state
  const [siteName, setSiteName] = useState("Webflow Project");
  const [subdomain, setSubdomain] = useState("webflow-project");
  const [folder, setFolder] = useState("All sites");
  const [timezone, setTimezone] = useState("[GMT-8:00] America/Los_Angeles");
  const [languageCode, setLanguageCode] = useState("");
  const [passwordProtection, setPasswordProtection] = useState(false);
  const [showcaseSite, setShowcaseSite] = useState(false);
  const [displayMadeInWebflow, setDisplayMadeInWebflow] = useState(false);
  const [displayWebflowBranding, setDisplayWebflowBranding] = useState(false);
  const [aiAssistant, setAiAssistant] = useState(false);

  // Plan data
  const plans: PlanData[] = [
    {
      id: "starter",
      name: "Starter",
      priceMonthly: 0,
      priceYearly: 0,
      description: "Best for learning how to use Webflow",
      isCurrentPlan: true,
      features: [
        { label: "Webflow.io domain", hasInfoIcon: true },
        { label: "An entry-level site" },
        { label: "2 pages", hasInfoIcon: true },
        { label: "20 CMS collections", hasInfoIcon: true },
        { label: "50 CMS items", hasInfoIcon: true },
        { label: "50 form submissions (lifetime)", hasInfoIcon: true },
        { label: "Localization free preview", hasInfoIcon: true },
        { label: "Usage" },
        { label: "1 GB bandwidth", hasInfoIcon: true },
        { label: "Web app hosting", hasInfoIcon: true },
      ]
    },
    {
      id: "basic",
      name: "Basic",
      priceMonthly: 18,
      priceYearly: 14,
      description: "Best for launching a simple site",
      isCurrentPlan: false,
      features: [
        { label: "Custom domain", hasInfoIcon: true },
        { label: "A basic site" },
        { label: "150 pages", hasInfoIcon: true },
        { label: "0 CMS collections", hasInfoIcon: true },
        { label: "0 CMS items", hasInfoIcon: true },
        { label: "Unlimited form submissions", hasInfoIcon: true },
        { label: "Localization free preview", hasInfoIcon: true },
        { label: "Usage" },
        { label: "10 GB bandwidth", hasInfoIcon: true },
        { label: "Surge protection", hasInfoIcon: true },
        { label: "Web app hosting", hasInfoIcon: true },
      ]
    },
    {
      id: "cms",
      name: "CMS",
      priceMonthly: 29,
      priceYearly: 23,
      description: "Best for launching a simple site",
      isCurrentPlan: false,
      badge: "Most popular",
      features: [
        { label: "Custom domain", hasInfoIcon: true },
        { label: "A content-rich site" },
        { label: "150 pages", hasInfoIcon: true },
        { label: "20 CMS collections", hasInfoIcon: true },
        { label: "2k CMS items", hasInfoIcon: true },
        { label: "Unlimited form submissions", hasInfoIcon: true },
        { label: "3 legacy Editor users", hasInfoIcon: true },
        { label: "Site search", hasInfoIcon: true },
        { label: "Localization free preview", hasInfoIcon: true },
        { label: "Usage" },
        { label: "50 GB bandwidth", hasInfoIcon: true },
        { label: "Surge protection", hasInfoIcon: true },
        { label: "Web app hosting", hasInfoIcon: true },
      ]
    },
    {
      id: "business",
      name: "Business",
      priceMonthly: 49,
      priceYearly: 39,
      description: "Best for a high-traffic marketing site",
      isCurrentPlan: false,
      features: [
        { label: "Custom domain", hasInfoIcon: true },
        { label: "A basic site" },
        { label: "300 pages", hasInfoIcon: true },
        { label: "40 CMS collections", hasInfoIcon: true },
        { label: "10k CMS items", hasInfoIcon: true, hasPlusIcon: true },
        { label: "Unlimited form submissions", hasInfoIcon: true },
        { label: "10 legacy Editor users", hasInfoIcon: true },
        { label: "Site search", hasInfoIcon: true },
        { label: "Form file upload", hasInfoIcon: true },
        { label: "Localization free preview", hasInfoIcon: true },
        { label: "Usage" },
        { label: "100 GB bandwidth", hasInfoIcon: true, hasPlusIcon: true },
        { label: "Surge protection", hasInfoIcon: true },
        { label: "Web app hosting", hasInfoIcon: true },
      ]
    }
  ];

  // Sample domain data
  const domains: DomainData[] = [
    {
      id: "1",
      domain: "sitedomain1.com",
      status: "pending",
      sslStatus: "active",
      isDefault: true,
      lastPublished: "12 hours ago",
      hasNote: true,
      noteType: "success",
      noteMessage: "DNS records of this domain have been updated. It may take up to 48 hours for the changes to take effect and appear here."
    },
    {
      id: "2",
      domain: "sitedomain2.com",
      status: "required",
      sslStatus: "dns-update-needed",
      isDefault: false,
      lastPublished: "12 hours ago"
    },
    {
      id: "3",
      domain: "sitedomain3.com",
      status: "connected",
      sslStatus: "active",
      isDefault: false,
      lastPublished: "12 hours ago"
    }
  ];

  // Sample redirect data
  const redirects: RedirectData[] = [
    { id: "1", oldUrl: "/blog/article-one", newUrl: "website.com/blog/article-one" },
    { id: "2", oldUrl: "/blog/article-two", newUrl: "website.com/blog/article-two" },
    { id: "3", oldUrl: "/blog/article-three", newUrl: "website.com/blog/article-three" },
    { id: "4", oldUrl: "/blog/article-four", newUrl: "website.com/blog/article-four" },
    { id: "5", oldUrl: "/blog/article-five", newUrl: "website.com/blog/article-five" },
    { id: "6", oldUrl: "/blog/article-six", newUrl: "website.com/blog/article-six" },
    { id: "7", oldUrl: "/blog/article-seven", newUrl: "website.com/blog/article-seven" },
    { id: "8", oldUrl: "/blog/article-eight", newUrl: "website.com/blog/article-eight" },
    { id: "9", oldUrl: "/blog/article-nine", newUrl: "website.com/blog/article-nine" },
    { id: "10", oldUrl: "/blog/article-ten", newUrl: "website.com/blog/article-ten" }
  ];

  // Sample user data
  const users: UserData[] = [
    {
      id: "1",
      name: "Marlene Foote",
      email: "marlene.foote@gymflow.com",
      fallback: "MF",
      role: "site-manager",
      cmsAccess: "all"
    },
    {
      id: "2",
      name: "Laurie Briggs",
      email: "laurie.briggs@gymflow.com",
      fallback: "LB",
      role: "designer",
      cmsAccess: "all"
    },
    {
      id: "3",
      name: "Ruben Herwitz",
      email: "ruben.herwitz@gymflow.com",
      fallback: "RH",
      role: "marketer",
      cmsAccess: "all"
    },
    {
      id: "4",
      name: "Marley Dias",
      email: "marley.dias@gymflow.com",
      fallback: "MD",
      role: "content-editor",
      cmsAccess: "4"
    },
    {
      id: "5",
      name: "Maren Dokidis",
      email: "maren.dokidis@gymflow.com",
      fallback: "M",
      role: "reviewer",
      cmsAccess: "none"
    },
    {
      id: "6",
      name: "Mackenzie Childs",
      email: "mackenzi.childs@gymflow.com",
      fallback: "MC",
      role: "content-editor",
      cmsAccess: "all"
    },
    {
      id: "7",
      name: "Mattie Rogers",
      email: "mattie.rogers@gymflow.com",
      fallback: "MR",
      role: "content-editor",
      cmsAccess: "2"
    }
  ];

  const getSectionTitle = (section: string) => {
    switch (section) {
      case "general": return "General Settings";
      case "site-access": return "Site Access";
      case "publishing": return "Publishing";
      case "plans": return "Plans";
      case "site-usage": return "Site Usage";
      case "seo": return "SEO";
      case "forms": return "Forms";
      case "libraries": return "Libraries";
      case "fonts": return "Fonts";
      case "backups": return "Backups";
      case "apps-integrations": return "Apps & Integrations";
      case "custom-code": return "Custom Code";
      case "webflow-cloud": return "Webflow Cloud";
      default: return "General Settings";
    }
  };

  const getSectionDescription = (section: string) => {
    switch (section) {
      case "general": return "Configure your site's basic settings and information.";
      case "site-access": return "Manage who can access and edit your site.";
      case "publishing": return "Configure publishing settings and domain connections.";
      case "plans": return "Manage your site plan and billing settings.";
      case "site-usage": return "View analytics and usage statistics for your site.";
      case "seo": return "Optimize your site for search engines.";
      case "forms": return "Manage form submissions and settings.";
      case "libraries": return "Manage external libraries and dependencies.";
      case "fonts": return "Configure and manage custom fonts for your site.";
      case "backups": return "Create and manage site backups.";
      case "apps-integrations": return "Connect third-party apps and services to your site.";
      case "custom-code": return "Add custom HTML, CSS, and JavaScript to your site.";
      case "webflow-cloud": return "Access cloud features and beta functionality.";
      default: return "Configure your site's basic settings and information.";
    }
  };

  // Role display names and descriptions
  const getRoleDisplayName = (role: string) => {
    const roleMap: Record<string, string> = {
      "site-manager": "Site manager",
      "designer": "Designer",
      "marketer": "Marketer",
      "content-editor": "Content editor",
      "reviewer": "Reviewer"
    };
    return roleMap[role] || role;
  };

  const getRoleDescription = (role: string) => {
    const descriptionMap: Record<string, string> = {
      "site-manager": "Can manage site settings and billing",
      "designer": "Design using all features",
      "marketer": "Build pages with components",
      "content-editor": "Only edit content",
      "reviewer": "View and comment on sites"
    };
    return descriptionMap[role] || "";
  };

  // Table column definitions
  const columns: ColumnDef[] = [
    {
      id: "name",
      header: "Name",
      renderCell: (value: any, rowData: UserData) => (
        <div className="flex items-center gap-2">
          <Avatar 
            fallback={rowData.fallback}
            size="md"
          />
          <div className="flex flex-col">
            <span className="body-text-bold text-[var(--text-primary)]">{rowData.name}</span>
            <span className="body-text text-[var(--text-secondary)]">{rowData.email}</span>
          </div>
        </div>
      )
    },
    {
      id: "role",
      header: "Role",
      width: "300px",
      renderCell: (value: any, rowData: UserData) => (
        <Select defaultValue={rowData.role}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Default</SelectLabel>
              <SelectItem value="site-manager" description="Can manage site settings and billing">
                Site manager
              </SelectItem>
              <SelectItem value="designer" description="Design using all features">
                Designer
              </SelectItem>
              <SelectItem value="marketer" description="Build pages with components">
                Marketer
              </SelectItem>
              <SelectItem value="content-editor" description="Only edit content">
                Content editor
              </SelectItem>
              <SelectItem value="reviewer" description="View and comment on sites">
                Reviewer
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      )
    },
    {
      id: "cmsAccess",
      header: "CMS edit access",
      width: "240px",
      renderHeader: () => (
        <div className="flex items-center gap-1">
          <span>CMS edit access</span>
          <div className="text-[var(--text-secondary)]">
            <InfoIcon size={16} />
          </div>
        </div>
      ),
      renderCell: (value: any, rowData: UserData) => {
        const isDisabled = rowData.role === "reviewer";
        return (
          <Tag 
            size="compact" 
            shape="rounded"
            variant="default"
            className={isDisabled ? "opacity-50" : ""}
            prefixIcon={
              <div className="text-[var(--text-secondary)]">
                <CMSDefaultIcon size={16} />
              </div>
            }
          >
            {rowData.cmsAccess === "all" ? "All" : 
             rowData.cmsAccess === "none" ? "None" : 
             rowData.cmsAccess}
          </Tag>
        );
      }
    },
    {
      id: "actions",
      header: "",
      width: "64px",
      renderCell: (value: any, rowData: UserData) => (
        <div className="flex justify-end items-center h-full">
          <IconButton variant="ghost" size="comfortable" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)]">
            <MoreIcon size={16} />
          </IconButton>
        </div>
      )
    }
  ];

  const renderContent = () => {
    return (
      <div className="p-4">
        <SiteSettingsHeader 
          siteName="My Site"
        />
        <div className="mt-6">
          <h1 className="title-text-bold mb-4 text-[var(--text-primary)]">{getSectionTitle(selectedSection)}</h1>
          
          {selectedSection === "site-access" ? (
            <div className="flex items-center justify-between gap-4 mb-6">
              <p className="body-text text-[var(--text-secondary)]">{getSectionDescription(selectedSection)}</p>
              <div className="flex items-center gap-2 shrink-0">
                <Select value={siteAccessLevel} onValueChange={setSiteAccessLevel}>
                  <SelectTrigger className="w-[389px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="admins-only">
                      <div className="flex items-center gap-2">
                        <div className="text-[var(--text-secondary)]">
                          <LockIcon size={16} />
                        </div>
                        <span>Only admins and added users can view</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="everyone">
                      <div className="flex items-center gap-2">
                        <div className="text-[var(--text-secondary)]">
                          <UsersIcon size={16} />
                        </div>
                        <span>Everyone in the workspace can view</span>
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="primary">Add users</Button>
              </div>
            </div>
          ) : (
            <p className="body-text text-[var(--text-secondary)] mb-6">{getSectionDescription(selectedSection)}</p>
          )}

          {selectedSection === "general" && (
            <div className="flex flex-col gap-6">
              {/* General Settings Section */}
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-4">
                  {/* Name Field */}
                  <div className="flex gap-4 items-start">
                    <div className="flex flex-col gap-2 flex-1 max-w-[800px]">
                      <label className="body-text text-[var(--text-primary)]">Name</label>
                      <Input
                        value={siteName}
                        onChange={(e) => setSiteName(e.target.value)}
                      />
                    </div>
                    <div className="flex-1 max-w-[300px] pt-[18px]">
                      <p className="body-text text-[var(--text-secondary)]">
                        This is the site's title within Webflow. You can update what visitors see in search results in each page's settings in the Designer.
                      </p>
                    </div>
                  </div>

                  {/* Subdomain Field */}
                  <div className="flex gap-4 items-start">
                    <div className="flex flex-col gap-2 flex-1 max-w-[800px]">
                      <label className="body-text text-[var(--text-primary)]">Subdomain</label>
                      <Input
                        value={subdomain}
                        onChange={(e) => setSubdomain(e.target.value)}
                        suffix={
                          <div className="flex items-center gap-1 px-2">
                            <CheckCircleIcon size={16} className="text-[var(--text-green)]" />
                          </div>
                        }
                      />
                    </div>
                    <div className="flex-1 max-w-[300px] pt-[18px]">
                      <p className="body-text text-[var(--text-secondary)]">
                        Must be alphanumeric (A-Z, 0-9) with dashes between words. Last published 15 days ago.
                      </p>
                    </div>
                  </div>

                  {/* Folder Field */}
                  <div className="flex gap-4 items-start">
                    <div className="flex flex-col gap-2 flex-1 max-w-[800px]">
                      <label className="body-text text-[var(--text-primary)]">Folder</label>
                      <Select value={folder} onValueChange={setFolder}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="All sites">All sites</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex-1 max-w-[300px] pt-[18px]">
                      <p className="body-text text-[var(--text-secondary)]">
                        Sites can be moved into and out of folders here.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Icons Section */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center py-3 border-t border-[var(--border-default)]">
                  <h2 className="title-text-bold text-[var(--text-primary)]">Icons</h2>
                </div>

                <div className="flex flex-col gap-4">
                  {/* Favicon */}
                  <div className="flex flex-col gap-2">
                    <label className="body-text text-[var(--text-primary)]">Favicon</label>
                    <div className="flex gap-2 items-start">
                      <div className="border border-[var(--border-default)] rounded-[4px] size-[90px] flex items-center justify-center">
                        <WebflowBadgeIcon size={16} className="text-[var(--text-secondary)]" />
                      </div>
                      <div className="flex flex-col gap-2 flex-1 max-w-[345px]">
                        <Button variant="default" size="compact" className="w-auto self-start">Upload</Button>
                        <p className="body-text text-[var(--text-secondary)]">
                          Upload a 32 x 32 pixel ICO, PNG, GIF, or JPG to display in browser tabs.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Webclip */}
                  <div className="flex flex-col gap-2">
                    <label className="body-text text-[var(--text-primary)]">Webclip</label>
                    <div className="flex gap-2 items-start">
                      <div className="border border-[var(--border-default)] rounded-[4px] size-[90px] flex items-center justify-center">
                        <WebflowBadgeIcon size={64} className="text-[var(--text-secondary)]" />
                      </div>
                      <div className="flex flex-col gap-2 flex-1 max-w-[345px]">
                        <Button variant="default" size="compact" className="w-auto self-start">Upload</Button>
                        <p className="body-text text-[var(--text-secondary)]">
                          Upload a 256 x 256 pixel webclip image. This icon shows up when your website link is saved to an iPhone home screen.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Localization Section */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between py-3 border-t border-[var(--border-default)]">
                  <h2 className="title-text-bold text-[var(--text-primary)]">Localization</h2>
                  <Button variant="outline" size="compact" disabled>Save</Button>
                </div>

                <div className="flex flex-col gap-4 pb-4">
                  {/* Timezone */}
                  <div className="flex gap-4 items-start">
                    <div className="flex flex-col gap-2 flex-1 max-w-[800px]">
                      <label className="body-text text-[var(--text-primary)]">Choose the time zone from this list</label>
                      <div className="flex gap-2 items-center">
                        <Select value={timezone} onValueChange={setTimezone}>
                          <SelectTrigger className="flex-1">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="[GMT-8:00] America/Los_Angeles">[GMT-8:00] America/Los_Angeles</SelectItem>
                          </SelectContent>
                        </Select>
                        <Button variant="default" size="compact">Detect my timezone</Button>
                      </div>
                    </div>
                    <div className="flex-1 max-w-[300px] pt-[18px]">
                      <p className="body-text text-[var(--text-secondary)]">
                        Time zone defaults to UTC, so setting it to your local time zone will improve any date/time-related features of your dynamic content, including relative date filtering. It will also update any date/time-related elements of your existing dynamic content.
                      </p>
                    </div>
                  </div>

                  {/* Language Code */}
                  <div className="flex gap-4 items-start">
                    <div className="flex flex-col gap-2 flex-1 max-w-[800px]">
                      <label className="body-text text-[var(--text-primary)]">Language code</label>
                      <Input
                        value={languageCode}
                        onChange={(e) => setLanguageCode(e.target.value)}
                        placeholder="e.g., en"
                      />
                    </div>
                    <div className="flex-1 max-w-[300px] pt-[18px]">
                      <p className="body-text text-[var(--text-secondary)]">
                        To set a language code, add a primary locale in your site's{" "}
                        <a href="#" className="text-[var(--text-blue)] hover:underline">Localization settings</a>.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Website Password Section */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center py-3 border-t border-[var(--border-default)]">
                  <h2 className="title-text-bold text-[var(--text-primary)]">Website password</h2>
                </div>

                <div className="flex flex-col gap-4 pb-4">
                  <div className="flex items-center gap-4">
                    <Switch
                      checked={passwordProtection}
                      onChange={(e) => setPasswordProtection(e.target.checked)}
                      hideLabel
                      aria-label="Password protection"
                    />
                    <div className="flex items-center gap-4">
                      <span className="body-text text-[var(--text-primary)]">Off</span>
                      <span className="body-text text-[var(--text-primary)]">Password protection</span>
                    </div>
                  </div>
                  <p className="body-text text-[var(--text-secondary)]">
                    Protect your published site with a password.
                  </p>
                </div>
              </div>

              {/* Showcase Site Section */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between py-3 border-t border-[var(--border-default)]">
                  <h2 className="title-text-bold text-[var(--text-primary)]">Showcase site</h2>
                  <Button variant="outline" size="compact" disabled>Save</Button>
                </div>

                <div className="flex flex-col gap-4 pb-4">
                  <div className="flex items-center gap-4">
                    <Switch
                      checked={showcaseSite}
                      onChange={(e) => setShowcaseSite(e.target.checked)}
                      hideLabel
                      aria-label="Showcase site"
                    />
                    <div className="flex items-center gap-4">
                      <span className="body-text text-[var(--text-primary)]">Off</span>
                      <span className="body-text text-[var(--text-primary)]">Showcase site</span>
                    </div>
                  </div>
                  <p className="body-text text-[var(--text-secondary)]">
                    Showcased sites will appear on your public profile, and in the{" "}
                    <span className="text-[var(--text-secondary)]">Marketplace</span>
                    <br />
                    under Made in Webflow.
                  </p>

                  {/* Creator Credits */}
                  <div className="flex gap-4 items-start">
                    <div className="flex flex-col gap-2 flex-1 max-w-[800px]">
                      <label className="body-text text-[var(--text-primary)]">Creator credits</label>
                      <Select value="" onValueChange={() => {}}>
                        <SelectTrigger>
                          <SelectValue placeholder="Type a profile handle (@name)" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="placeholder">Type a profile handle (@name)</SelectItem>
                        </SelectContent>
                      </Select>
                      <p className="body-text text-[var(--text-secondary)] text-[12px]">
                        You can select up to 3 profile handles. Please ensure the site owner approves of showcasing this site before tagging a creator.
                      </p>
                    </div>
                    <div className="flex-1 max-w-[300px] pt-[18px]">
                      <p className="body-text text-[var(--text-secondary)]">
                        Add the profile handles of creators who have worked on this site. Creators tagged here will be able to display this site on their Webflow profile.{" "}
                        <a href="#" className="text-[var(--text-blue)] hover:underline">Learn more</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Shared Workspace Template Section */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center py-3 border-t border-[var(--border-default)]">
                  <h2 className="title-text-bold text-[var(--text-primary)]">Shared Workspace template</h2>
                </div>

                <div className="flex flex-col gap-4 pb-4">
                  <div className="flex gap-4 items-start">
                    <div className="flex flex-col gap-2 flex-1 max-w-[800px]">
                      <p className="body-text text-[var(--text-primary)]">
                        This site belongs to{" "}
                        <a href="#" className="text-[var(--text-blue)] hover:underline">Alpha Arcade</a>.
                      </p>
                      <Button variant="default" size="comfortable" className="w-auto self-start">Make template</Button>
                    </div>
                    <div className="flex-1 max-w-[300px] pt-[18px]">
                      <p className="body-text text-[var(--text-secondary)]">
                        Templates help make it easy for others to build off this site.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Webflow Branding Section */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between py-3 border-t border-[var(--border-default)]">
                  <h2 className="title-text-bold text-[var(--text-primary)]">Webflow branding</h2>
                  <Button variant="outline" size="compact" disabled>Save</Button>
                </div>

                <div className="flex flex-col gap-4 pb-4 pt-1">
                  <div className="flex items-center gap-4">
                    <Switch
                      checked={displayMadeInWebflow}
                      onChange={(e) => setDisplayMadeInWebflow(e.target.checked)}
                      hideLabel
                      aria-label="Display Made In Webflow badge"
                    />
                    <span className="body-text text-[var(--text-primary)]">Display "Made In Webflow" badge</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Switch
                      checked={displayWebflowBranding}
                      onChange={(e) => setDisplayWebflowBranding(e.target.checked)}
                      hideLabel
                      aria-label="Display Webflow branding in HTML"
                    />
                    <span className="body-text text-[var(--text-primary)]">Display Webflow branding in HTML</span>
                  </div>
                </div>
              </div>

              {/* AI Assistant Section */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center py-3 border-t border-[var(--border-default)]">
                  <h2 className="title-text-bold text-[var(--text-primary)]">AI Assistant</h2>
                </div>

                <div className="flex flex-col gap-4 pb-4">
                  <div className="flex items-center gap-4">
                    <Switch
                      checked={aiAssistant}
                      onChange={(e) => setAiAssistant(e.target.checked)}
                      hideLabel
                      aria-label="Add the AI Assistant to this site"
                    />
                    <span className="body-text text-[var(--text-primary)]">Add the AI Assistant to this site</span>
                  </div>
                </div>
              </div>

              {/* Overview Section */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center py-3 border-t border-[var(--border-default)]">
                  <h2 className="title-text-bold text-[var(--text-primary)]">Overview</h2>
                </div>

                <Table>
                  <TableRow
                    data={{ label: "Site ID", value: "312312312312312312312312" }}
                    columns={[
                      { id: "label", header: "", renderCell: () => <span className="body-text-bold text-[var(--text-primary)]">Site ID</span> },
                      { id: "value", header: "", renderCell: () => <span className="body-text text-[var(--text-primary)]">312312312312312312312312</span> }
                    ]}
                  />
                  <TableRow
                    data={{ label: "Total asset size", value: "7.587 MiB (Files, fonts, and backups)" }}
                    columns={[
                      { id: "label", header: "", renderCell: () => <span className="body-text-bold text-[var(--text-primary)]">Total asset size</span> },
                      { id: "value", header: "", renderCell: () => <span className="body-text text-[var(--text-primary)]">7.587 MiB (Files, fonts, and backups)</span> }
                    ]}
                  />
                  <TableRow
                    data={{ label: "Last published", value: "3 mos ago, on July 2nd 2025, 7:09:32 pm" }}
                    columns={[
                      { id: "label", header: "", renderCell: () => <span className="body-text-bold text-[var(--text-primary)]">Last published</span> },
                      { id: "value", header: "", renderCell: () => <span className="body-text text-[var(--text-primary)]">3 mos ago, on July 2nd 2025, 7:09:32 pm</span> }
                    ]}
                  />
                  <TableRow
                    data={{ label: "Last updated", value: "6 days ago, on October 3rd 2025, 1:46:11 pm" }}
                    columns={[
                      { id: "label", header: "", renderCell: () => <span className="body-text-bold text-[var(--text-primary)]">Last updated</span> },
                      { id: "value", header: "", renderCell: () => <span className="body-text text-[var(--text-primary)]">6 days ago, on October 3rd 2025, 1:46:11 pm</span> }
                    ]}
                  />
                  <TableRow
                    data={{ label: "Created", value: "May 9th 2025, 12:50:00 pm" }}
                    columns={[
                      { id: "label", header: "", renderCell: () => <span className="body-text-bold text-[var(--text-primary)]">Created</span> },
                      { id: "value", header: "", renderCell: () => <span className="body-text text-[var(--text-primary)]">May 9th 2025, 12:50:00 pm</span> }
                    ]}
                  />
                  <TableRow
                    data={{ label: "Pages", value: "14" }}
                    columns={[
                      { id: "label", header: "", renderCell: () => <span className="body-text-bold text-[var(--text-primary)]">Pages</span> },
                      { id: "value", header: "", renderCell: () => <span className="body-text text-[var(--text-primary)]">14</span> }
                    ]}
                  />
                  <TableRow
                    data={{ label: "Pages created", value: "5/300" }}
                    columns={[
                      { id: "label", header: "", renderCell: () => <span className="body-text-bold text-[var(--text-primary)]">Pages created</span> },
                      { id: "value", header: "", renderCell: () => <span className="body-text text-[var(--text-primary)]">5/300</span> }
                    ]}
                  />
                  <TableRow
                    data={{ label: "Form submissions", value: "0" }}
                    columns={[
                      { id: "label", header: "", renderCell: () => <span className="body-text-bold text-[var(--text-primary)]">Form submissions</span> },
                      { id: "value", header: "", renderCell: () => <span className="body-text text-[var(--text-primary)]">0</span> }
                    ]}
                  />
                  <TableRow
                    data={{ label: "Collection items", value: "19" }}
                    columns={[
                      { id: "label", header: "", renderCell: () => <span className="body-text-bold text-[var(--text-primary)]">Collection items</span> },
                      { id: "value", header: "", renderCell: () => <span className="body-text text-[var(--text-primary)]">19</span> }
                    ]}
                  />
                </Table>
              </div>

              {/* Site Activity Section */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center py-3 border-t border-[var(--border-default)]">
                  <h2 className="title-text-bold text-[var(--text-primary)]">Site activity</h2>
                </div>

                <Table>
                  <TableHeader
                    columns={[
                      { id: "date", header: "Date", width: "175px" },
                      { id: "event", header: "Event", width: "361px" },
                      { id: "user", header: "User" }
                    ]}
                  />
                  {[
                    { date: "2 mos ago", event: "locale_subdirectory_updated", user: "Dave Gahan" },
                    { date: "2 mos ago", event: "locale_display_name_updated", user: "Dave Gahan" },
                    { date: "2 mos ago", event: "Locale added", user: "Dave Gahan" },
                    { date: "3 mos ago", event: "Site published", user: "Dave Gahan" },
                    { date: "3 mos ago", event: "Site published", user: "Dave Gahan" },
                    { date: "3 mos ago", event: "Site published", user: "Dave Gahan" },
                    { date: "3 mos ago", event: "Site published", user: "Dave Gahan" },
                    { date: "3 mos ago", event: "Create share link", user: "Dave Gahan" },
                    { date: "4 mos ago", event: "Site published", user: "Dave Gahan" },
                    { date: "4 mos ago", event: "Site published", user: "Dave Gahan" },
                    { date: "4 mos ago", event: "Site published", user: "Dave Gahan" },
                    { date: "4 mos ago", event: "CMS database created", user: "Dave Gahan" },
                    { date: "5 mos ago", event: "Site published", user: "Dave Gahan" },
                    { date: "5 mos ago", event: "Site published", user: "Dave Gahan" },
                    { date: "5 mos ago", event: "Site created", user: "Dave Gahan" }
                  ].map((activity, index) => (
                    <TableRow
                      key={index}
                      data={activity}
                      columns={[
                        { id: "date", header: "Date", width: "175px", renderCell: () => <span className="body-text text-[var(--text-primary)]">{activity.date}</span> },
                        { id: "event", header: "Event", width: "361px", renderCell: () => <span className="body-text text-[var(--text-primary)]">{activity.event}</span> },
                        { id: "user", header: "User", renderCell: () => <span className="body-text text-[var(--text-primary)]">{activity.user}</span> }
                      ]}
                    />
                  ))}
                </Table>

                <div className="flex justify-start">
                  <Button variant="outline" size="compact">Show more</Button>
                </div>
              </div>
            </div>
          )}
          
          {selectedSection === "site-access" && (
            <Table>
              <TableHeader columns={columns} />
              {users.map((user, index) => (
                <TableRow 
                  key={user.id}
                  data={user}
                  columns={columns}
                />
              ))}
            </Table>
          )}

          {selectedSection === "publishing" && (
            <div className="flex flex-col gap-6">
              {/* Staging Section */}
              <div className="flex flex-col gap-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex flex-col gap-1 flex-1">
                    <h2 className="title-text-bold text-[var(--text-primary)]">Staging</h2>
                    <p className="body-text text-[var(--text-secondary)] max-w-[692px]">
                      Configure an environment to review changes privately or with a public URL before publishing them to production.{" "}
                      <a href="#" className="text-[var(--text-blue)] hover:underline">Learn more about configuring and using staging.</a>
                    </p>
                  </div>
                  <Button variant="outline" size="compact" disabled>Save</Button>
                </div>

                {/* Webflow.io domain input */}
                <div className="flex gap-4 items-end">
                  <div className="flex flex-col gap-2 flex-1 max-w-[800px]">
                    <div className="flex items-start gap-1">
                      <label className="body-text text-[var(--text-primary)]">
                        Webflow.io domain
                      </label>
                      <span className="body-text text-[var(--text-primary)]">*</span>
                    </div>
                    <Input
                      value={stagingDomain}
                      onChange={(e) => setStagingDomain(e.target.value)}
                      suffix={
                        <div className="flex items-center gap-1 px-2">
                          <span className="body-text text-[var(--text-secondary)]">@webflow.io</span>
                          <CheckDefaultIcon size={16} className="text-[var(--text-green)]" />
                        </div>
                      }
                    />
                  </div>
                  <div className="flex-1 max-w-[300px] pb-1">
                    <p className="small-text">
                      Must be alphanumeric (A-Z, 0-9) with dashes between words. Last published 15 days ago.
                    </p>
                  </div>
                </div>

                {/* Make staging private switch */}
                <div className="flex gap-4 items-start">
                  <div className="flex flex-col gap-2 flex-1 max-w-[800px]">
                    <label className="body-text text-[var(--text-primary)]">
                      Make staging private
                    </label>
                    <div className="flex items-center gap-4">
                      <Switch
                        checked={isStagingPrivate}
                        onChange={(e) => setIsStagingPrivate(e.target.checked)}
                        hideLabel
                        aria-label="Make staging private"
                      />
                      <span className="body-text text-[var(--text-primary)]">
                        Turn on private staging to restrict access to members and guests of the Workspace
                      </span>
                    </div>
                  </div>
                  <div className="flex-1 max-w-[300px] pt-[18px]">
                    <p className="small-text">
                      Private staging is only available on Enterprise plans. Please contact{" "}
                      <a href="#" className="text-[var(--text-blue)] hover:underline">enterprise@webflow.com</a>
                      {" "}for offerings.
                    </p>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-[var(--border-default)] w-full" />

              {/* Production Section */}
              <div className="flex flex-col gap-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex flex-col gap-2 flex-1">
                    <h2 className="title-text-bold text-[var(--text-primary)]">Production</h2>
                    <p className="body-text text-[var(--text-secondary)] max-w-[692px]">
                      Once you have a site plan, you can add your domain(s) below or buy a new Google or GoDaddy Domain. Need help?{" "}
                      <a href="#" className="text-[var(--text-blue)] hover:underline">Learn how to set up custom domain hosting.</a>
                    </p>
                  </div>
                  <Button variant="primary" size="compact">Add a custom domain</Button>
                </div>

                {!dismissedNotes.has("dns-provider-note") && (
                  <Note 
                    variant="default" 
                    showClose
                    onClose={() => setDismissedNotes(prev => new Set(prev).add("dns-provider-note"))}
                  >
                    Some DNS providers don't support using SSL on the root domain (the version without www).{" "}
                    <a href="#" className="text-[var(--text-blue)] hover:underline">Learn more</a>
                  </Note>
                )}

                {/* Domain Table */}
                <div className="border border-[var(--border-default)] rounded-md overflow-hidden">
                  <Table noBorder>
                    <TableHeader
                      columns={[
                        {
                          id: "domain",
                          header: "Domain",
                          width: "344px",
                          renderHeader: () => (
                            <span className="body-text-bold text-[var(--text-primary)]">Domain</span>
                          )
                        },
                        {
                          id: "ssl",
                          header: "SSL certificate",
                          renderHeader: () => (
                            <div className="flex items-center gap-2">
                              <span className="body-text-bold text-[var(--text-primary)]">SSL certificate</span>
                              <InfoIcon size={16} className="text-[var(--text-secondary)]" />
                            </div>
                          )
                        },
                        {
                          id: "actions",
                          header: "",
                          renderHeader: () => null
                        }
                      ]}
                    />
                    {domains.map((domain, index) => (
                      <React.Fragment key={domain.id}>
                        <TableRow
                          data={domain}
                          className={domain.hasNote && domain.noteMessage && !dismissedNotes.has(`domain-note-${domain.id}`) ? "border-b-0" : ""}
                          columns={[
                            {
                              id: "domain",
                              header: "Domain",
                              width: "344px",
                              renderCell: () => (
                                <div className="flex items-start gap-2">
                                  {domain.status === "connected" ? (
                                    <GlobeCheckIcon size={16} className="text-[var(--text-secondary)] mt-0.5 shrink-0" />
                                  ) : (
                                    <GlobeWarningIcon size={16} className="text-[var(--text-secondary)] mt-0.5 shrink-0" />
                                  )}
                                  <div className="flex flex-col gap-1">
                                    <span className="body-text-bold text-[var(--text-primary)]">{domain.domain}</span>
                                    <div className="flex items-center gap-1 body-text text-[var(--text-secondary)]">
                                      {domain.status === "pending" && (
                                        <>
                                          <span>Update pending</span>
                                          <RefreshIcon size={16} className="text-[var(--text-secondary)]" />
                                          <span>·</span>
                                        </>
                                      )}
                                      {domain.status === "required" && (
                                        <>
                                          <span>Update required</span>
                                          <span>·</span>
                                        </>
                                      )}
                                      {domain.status === "connected" && (
                                        <>
                                          <span>Connected</span>
                                          <span>·</span>
                                        </>
                                      )}
                                      <div className="flex items-center gap-1">
                                        <PublishIcon size={16} className="text-[var(--text-secondary)]" />
                                        <span>Published {domain.lastPublished}</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )
                            },
                            {
                              id: "ssl",
                              header: "SSL certificate",
                              renderCell: () => (
                                <Badge 
                                  variant={domain.sslStatus === "active" ? "green" : "yellow"}
                                  styleType="tinted"
                                  size="compact"
                                  shape="rounded"
                                >
                                  {domain.sslStatus === "active" ? "Active" : "DNS update needed"}
                                </Badge>
                              )
                            },
                            {
                              id: "actions",
                              header: "",
                              renderCell: () => (
                                <div className="flex items-center gap-2 ml-auto">
                                  {domain.isDefault && (
                                    <Button variant="outline" size="compact">Remove default</Button>
                                  )}
                                  {domain.status === "required" && (
                                    <>
                                      <Button variant="primary" size="compact">Update DNS</Button>
                                      <Button variant="outline" size="compact">Manual update</Button>
                                    </>
                                  )}
                                  {domain.status === "connected" && !domain.isDefault && (
                                    <Button variant="outline" size="compact">
                                      <HomeIcon size={16} className="text-[var(--text-secondary)]" />
                                      Make default
                                    </Button>
                                  )}
                                  <IconButton variant="ghost" size="comfortable">
                                    <MoreIcon size={16} />
                                  </IconButton>
                                </div>
                              )
                            }
                          ]}
                        />
                        {domain.hasNote && domain.noteMessage && !dismissedNotes.has(`domain-note-${domain.id}`) && (
                          <div className="flex w-full border-b border-[var(--border-default)] last:border-b-0">
                            <div className="w-full px-3 py-3">
                              <Note 
                                variant={domain.noteType || "success"} 
                                showClose
                                onClose={() => setDismissedNotes(prev => new Set(prev).add(`domain-note-${domain.id}`))}
                              >
                                {domain.noteMessage}
                              </Note>
                            </div>
                          </div>
                        )}
                      </React.Fragment>
                    ))}
                  </Table>
                </div>

                <Note variant="default" className="items-start">
                  <div className="flex flex-col gap-2">
                    <span>Visit the admin console of your domain registrar (the website you bought your domain from) and create the two A & four CNAME records listed below. Note that it may take up to a few hours for DNS changes to take effect.</span>
                    <Button variant="outline" size="compact" className="self-start">Check status</Button>
                  </div>
                </Note>
              </div>

              {/* 301 Redirects Section */}
              <div className="flex flex-col gap-4 pt-6 border-t border-[var(--border-default)]">
                <div className="flex flex-col gap-2">
                  <h2 className="title-text-bold text-[var(--text-primary)]">301 redirects</h2>
                  <div className="flex flex-col gap-1 max-w-[692px]">
                    <p className="body-text text-[var(--text-secondary)]">
                      Redirect old URLs to new ones so that you don't lose precious search engine ranking. Redirect to a page, full domain, or setup wildcard rules to migrate sets of pages.
                    </p>
                    <a href="#" className="body-text text-[var(--text-blue)] hover:underline">Learn more about wildcard redirect rules</a>
                  </div>
                </div>

                {!dismissedNotes.has("redirects-warning-note") && (
                  <Note 
                    variant="warning" 
                    showClose
                    onClose={() => setDismissedNotes(prev => new Set(prev).add("redirects-warning-note"))}
                  >
                    Your changes have been saved. For the changes to take effect, you need to publish your site.
                  </Note>
                )}

                {/* Redirects Controls */}
                <div className="flex items-center gap-2 w-full">
                  <Input
                    placeholder="Search"
                    value={redirectSearchQuery}
                    onChange={(e) => setRedirectSearchQuery(e.target.value)}
                    showSearchIcon
                    className="flex-1"
                  />
                  <Select value={redirectSort} onValueChange={setRedirectSort}>
                    <SelectTrigger className="w-[148px] flex-shrink-0">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="last-modified">Last modified</SelectItem>
                      <SelectItem value="old-url">Old URL</SelectItem>
                      <SelectItem value="new-url">New URL</SelectItem>
                    </SelectContent>
                  </Select>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <Button variant="default" size="compact">Delete all</Button>
                    <Button variant="default" size="compact">Export</Button>
                    <Button variant="default" size="compact">Import</Button>
                    <Button variant="primary" size="compact">Add</Button>
                  </div>
                </div>

                {/* Redirects Table */}
                <Table>
                    <TableHeader 
                      columns={[
                        { 
                          id: "oldUrl", 
                          header: "Old URL",
                          width: "480px"
                        },
                        { 
                          id: "arrow", 
                          header: "",
                          width: "48px"
                        },
                        { 
                          id: "newUrl", 
                          header: "New URL"
                        }
                      ]} 
                    />
                    {redirects
                      .filter(redirect => 
                        redirect.oldUrl.toLowerCase().includes(redirectSearchQuery.toLowerCase()) ||
                        redirect.newUrl.toLowerCase().includes(redirectSearchQuery.toLowerCase())
                      )
                      .slice((redirectPage - 1) * 10, redirectPage * 10)
                      .map((redirect) => (
                        <TableRow
                          key={redirect.id}
                          data={redirect}
                          columns={[
                            { 
                              id: "oldUrl", 
                              header: "Old URL",
                              width: "480px",
                              renderCell: () => (
                                <span className="body-text text-[var(--text-primary)]">{redirect.oldUrl}</span>
                              )
                            },
                            { 
                              id: "arrow", 
                              header: "",
                              width: "48px",
                              renderCell: () => (
                                <div className="flex items-center justify-center">
                                  <ArrowRightIcon size={16} className="text-[var(--text-secondary)]" />
                                </div>
                              )
                            },
                            { 
                              id: "newUrl", 
                              header: "New URL",
                              renderCell: () => (
                                <div className="flex items-center justify-between w-full">
                                  <span className="body-text text-[var(--text-primary)]">{redirect.newUrl}</span>
                                  <IconButton variant="ghost" size="comfortable">
                                    <MoreIcon size={16} />
                                  </IconButton>
                                </div>
                              )
                            }
                          ]}
                        />
                      ))}
                  </Table>

                {/* Pagination */}
                {redirects.length > 10 && (
                  <div className="flex items-center justify-center gap-2">
                    <IconButton 
                      variant="outline" 
                      size="icon"
                      disabled={redirectPage === 1}
                      onClick={() => setRedirectPage(p => Math.max(1, p - 1))}
                    >
                      <ChevronSmallUpIcon size={16} className="rotate-90" />
                    </IconButton>
                    {[1].map((page) => (
                      <Button
                        key={page}
                        variant={redirectPage === page ? "default" : "outline"}
                        size="compact"
                        onClick={() => setRedirectPage(page)}
                      >
                        {page}
                      </Button>
                    ))}
                    <IconButton 
                      variant="outline" 
                      size="icon"
                      disabled={redirectPage === 1}
                      onClick={() => setRedirectPage(p => Math.min(1, p + 1))}
                    >
                      <ChevronSmallDownIcon size={16} className="-rotate-90" />
                    </IconButton>
                    <span className="body-text text-[var(--text-secondary)] ml-4">
                      1-{redirects.length} of {redirects.length} redirects
                    </span>
                  </div>
                )}
              </div>

              {/* Advanced publishing options */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between py-3">
                  <h3 className="title-text-bold text-[var(--text-primary)]">Advanced publishing options</h3>
                  <Button variant="outline" size="compact" disabled>Save</Button>
                </div>

                {/* Performance section */}
                <div className="flex flex-col gap-4">
                  <h4 className="body-text-bold text-[var(--text-primary)]">Performance</h4>
                  <div className="flex flex-col gap-4 pb-4 pt-1">
                    <div className="flex items-center gap-4">
                      <Switch
                        checked={asyncLoadJS}
                        onChange={(e) => setAsyncLoadJS(e.target.checked)}
                        hideLabel
                        aria-label="Asynchronously load JS"
                      />
                      <span className="body-text text-[var(--text-primary)]">Asynchronously load JS</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <Switch
                        checked={minifyHTML}
                        onChange={(e) => setMinifyHTML(e.target.checked)}
                        hideLabel
                        aria-label="Minify HTML"
                      />
                      <span className="body-text text-[var(--text-primary)]">Minify HTML</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <Switch
                        checked={minifyCSS}
                        onChange={(e) => setMinifyCSS(e.target.checked)}
                        hideLabel
                        aria-label="Minify CSS"
                      />
                      <span className="body-text text-[var(--text-primary)]">Minify CSS</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <Switch
                        checked={minifyJS}
                        onChange={(e) => setMinifyJS(e.target.checked)}
                        hideLabel
                        aria-label="Minify JS"
                      />
                      <span className="body-text text-[var(--text-primary)]">Minify JS</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <Switch
                        checked={perPageCSS}
                        onChange={(e) => setPerPageCSS(e.target.checked)}
                        hideLabel
                        aria-label="Per page CSS"
                      />
                      <span className="body-text text-[var(--text-primary)]">Per page CSS</span>
                    </div>
                  </div>
                </div>

                {/* Security section */}
                <div className="flex flex-col gap-4">
                  <h4 className="body-text-bold text-[var(--text-primary)]">Security</h4>
                  <div className="flex flex-col gap-4 pb-4 pt-1">
                    <div className="flex items-center gap-4">
                      <Switch
                        checked={enableHSTSSubdomains}
                        onChange={(e) => setEnableHSTSSubdomains(e.target.checked)}
                        hideLabel
                        aria-label="Enable HSTS for subdomains"
                      />
                      <span className="body-text text-[var(--text-primary)]">Enable HSTS for subdomains</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <Switch
                        checked={enableHSTSPreload}
                        onChange={(e) => setEnableHSTSPreload(e.target.checked)}
                        hideLabel
                        aria-label="Enable HSTS preload header"
                      />
                      <span className="body-text text-[var(--text-primary)]">Enable HSTS preload header</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <Switch
                        checked={useSecureFrameHeaders}
                        onChange={(e) => setUseSecureFrameHeaders(e.target.checked)}
                        hideLabel
                        aria-label="Use secure frame headers"
                      />
                      <span className="body-text text-[var(--text-primary)]">Use secure frame headers</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-[var(--border-default)] w-full" />

              {/* Custom SSL certifications */}
              <div className="flex flex-col gap-4">
                <div className="flex items-start justify-between py-3">
                  <div className="flex flex-col gap-1">
                    <h3 className="title-text-bold text-[var(--text-primary)]">Custom SSL certifications</h3>
                    <p className="body-text text-[var(--text-secondary)] max-w-[692px]">
                      To upload a custom SSL certificate, you need an Enterprise plan. To learn more,{" "}
                      <a href="#" className="text-[var(--text-blue)] hover:underline">
                        contact sales
                      </a>
                      .
                    </p>
                  </div>
                  <Button variant="default" size="compact" disabled>Add certificate</Button>
                </div>

                {/* Empty state */}
                <div className="bg-[var(--bg-secondary)] flex flex-col gap-2 items-center justify-center p-3 rounded-md w-full">
                  <p className="body-text text-[var(--text-primary)] text-center w-full">
                    No custom SSL certificates have been added to this site yet.
                  </p>
                </div>
              </div>
            </div>
          )}

          {selectedSection === "plans" && (
            <div className="flex flex-col gap-10">
              {/* Tab Navigation and Billing Toggle */}
              <div className="flex items-center justify-between border-b border-[var(--border-default)]">
                <TabBar value={plansTab} onValueChange={setPlansTab} fullWidth={false} className="border-b-0">
                  <TabBarItem value="website">Website</TabBarItem>
                  <TabBarItem value="ecommerce">Ecommerce site</TabBarItem>
                  <TabBarItem value="addons">Add ons</TabBarItem>
                </TabBar>
                
                <div className="flex flex-col items-end gap-0.5">
                  <div className="flex items-center gap-2">
                    <span className="body-text text-[var(--text-secondary)]">Billed monthly</span>
                    <Switch
                      checked={billingPeriod === "yearly"}
                      onChange={(e) => setBillingPeriod(e.target.checked ? "yearly" : "monthly")}
                      hideLabel
                      aria-label="Billing period"
                      sizeVariant="compact"
                    />
                    <span className="body-text text-[var(--text-secondary)]">Billed yearly</span>
                  </div>
                  <p className="body-text text-[var(--text-blue)]">
                    Save up to 22% with yearly billing
                  </p>
                </div>
              </div>

              {/* Plan Cards Grid */}
              <div className="grid grid-cols-4 gap-6">
                {plans.map((plan) => {
                  const price = billingPeriod === "yearly" ? plan.priceYearly : plan.priceMonthly;
                  const currentPrice = price === 0 ? "$0" : `$${price}`;
                  
                  return (
                    <div
                      key={plan.id}
                      className={`relative flex flex-col gap-6 p-4 rounded-lg border ${
                        plan.isCurrentPlan
                          ? "border-[var(--action-primary-bg)]"
                          : "border-[var(--border-default)]"
                      } ${
                        plan.id === "cms"
                          ? "bg-[var(--blue-bg-transparent)]"
                          : ""
                      }`}
                    >
                      {/* Badge positioned at top border */}
                      {plan.badge && (
                        <Badge 
                          variant="blue" 
                          styleType="solid"
                          size="comfort" 
                          className="absolute -top-[14px] left-1/2 -translate-x-1/2 py-0.5"
                        >
                          {plan.badge}
                        </Badge>
                      )}
                      
                      {/* Plan Header */}
                      <div className="flex flex-col gap-1 items-center text-center h-[72px]">
                        <h3 className="body-text-bold text-[var(--text-primary)]">
                          {plan.name}
                        </h3>
                        <div className="flex items-baseline gap-1">
                          <span className="text-2xl font-semibold leading-normal text-[var(--text-primary)]">
                            {currentPrice}
                          </span>
                          <span className="body-text-bold text-[var(--text-primary)]">
                            /mo
                          </span>
                        </div>
                        {price > 0 && (
                          <p className="body-text text-[var(--text-primary)]">
                            billed {billingPeriod === "yearly" ? "yearly" : "monthly"}
                          </p>
                        )}
                      </div>

                      {/* Description */}
                      <p className="body-text text-center text-[var(--text-primary)] h-8">
                        {plan.description}
                      </p>

                      {/* Action Button */}
                      {plan.isCurrentPlan ? (
                        <Button variant="default" size="compact" className="w-full" disabled>
                          <CheckDefaultIcon size={16} />
                          You're on {plan.name}
                        </Button>
                      ) : (
                        <Button variant="primary" size="compact" className="w-full">
                          Upgrade to {plan.name}
                          <ChevronSmallDownIcon size={16} />
                        </Button>
                      )}

                      {/* Features List */}
                      <div className="flex flex-col gap-2">
                        {plan.features.map((feature, index) => {
                          // Check if this is a section header (no icon, just text)
                          const isSectionHeader = !feature.hasInfoIcon && 
                            (feature.label === "Usage" || 
                             feature.label === "An entry-level site" || 
                             feature.label === "A basic site" || 
                             feature.label === "A content-rich site");
                          
                          if (isSectionHeader) {
                            return (
                              <div key={index} className="flex items-center gap-2 mt-2">
                                <p className="body-text text-[var(--text-primary)]">
                                  {feature.label}
                                </p>
                              </div>
                            );
                          }

                          return (
                            <div key={index} className="flex items-center justify-between">
                              <div className="flex items-center gap-2 flex-1">
                                <p className="body-text text-[var(--text-primary)]">
                                  {feature.label}
                                </p>
                                {feature.hasPlusIcon && (
                                  <BoxAddIcon size={16} className="text-[var(--text-secondary)]" />
                                )}
                              </div>
                              {feature.hasInfoIcon && (
                                <div className="text-[var(--text-secondary)]">
                                  <InfoIcon size={16} />
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-primary)] theme-dashboard">
      {/* Top Navigation */}
      <DashboardNav />
      
      {/* Main Content Area */}
      <div className="flex flex-1 justify-center">
        {/* Custom Site Settings Sidebar */}
        <SiteSettingsSidebar 
          selectedSection={selectedSection}
          onSectionChange={setSelectedSection}
        />
        
        {/* Main Content with max-width constraint */}
        <div 
          className="bg-[var(--bg-primary)] overflow-auto"
          style={{ 
            maxWidth: '1040px',
            width: '100%'
          }}
        >
          <main>
            {renderContent()}
          </main>
        </div>
      </div>
    </div>
  );
} 