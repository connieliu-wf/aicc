"use client";

import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { SiteGrid } from "@/components/dashboard/site-grid";
import { TeamPage } from "@/components/dashboard/team-page";
import { useState, useEffect, useCallback, useRef } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

type DashSectionType = 'all-projects' | 'sites' | 'apps-projects' | 'tutorials' | 'general' | 'team' | 'plans' | 'billing' | 'apps-integrations' | 'libraries-templates';

export default function Dashboard() {
  const [selectedSection, setSelectedSectionState] = useState<DashSectionType>("all-projects");
  
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const hasInitializedRef = useRef(false);
  const isUpdatingRef = useRef(false);

  // Read initial section from URL on mount
  useEffect(() => {
    if (hasInitializedRef.current) return;
    hasInitializedRef.current = true;

    const sectionParam = searchParams?.get('dashSection') as DashSectionType | null;
    if (sectionParam) {
      setSelectedSectionState(sectionParam);
    }
  }, [searchParams]);

  // Update URL when section changes
  const updateUrl = useCallback((section: DashSectionType) => {
    if (isUpdatingRef.current) return;
    
    const params = new URLSearchParams(searchParams?.toString() || '');
    
    if (section === 'all-projects') {
      params.delete('dashSection'); // Default section, no need to show in URL
    } else {
      params.set('dashSection', section);
    }

    const queryString = params.toString();
    const newUrl = queryString ? `${pathname}?${queryString}` : pathname || '/dashboard';
    
    isUpdatingRef.current = true;
    router.replace(newUrl, { scroll: false });
    
    setTimeout(() => {
      isUpdatingRef.current = false;
    }, 50);
  }, [searchParams, pathname, router]);

  const setSelectedSection = useCallback((section: string) => {
    const typedSection = section as DashSectionType;
    setSelectedSectionState(typedSection);
    updateUrl(typedSection);
  }, [updateUrl]);

  const renderContent = () => {
    switch (selectedSection) {
      case "all-projects":
        return <SiteGrid filter="all" />;
      case "sites":
        return <SiteGrid filter="site" />;
      case "apps-projects":
        return <SiteGrid filter="app" />;
      case "tutorials":
        return (
          <div className="p-6">
            <h1 className="title-text-bold mb-4 text-[var(--text-primary)]">Tutorials</h1>
            <p className="body-text text-[var(--text-secondary)]">Learn how to build amazing websites with our comprehensive tutorials and guides.</p>
          </div>
        );
      case "general":
        return (
          <div className="p-6">
            <h1 className="title-text-bold mb-4 text-[var(--text-primary)]">General Settings</h1>
            <p className="body-text text-[var(--text-secondary)]">Manage your account settings, preferences, and general configuration options.</p>
          </div>
        );
      case "team":
        return <TeamPage />;
      case "plans":
        return (
          <div className="p-6">
            <h1 className="title-text-bold mb-4 text-[var(--text-primary)]">Plans & Billing</h1>
            <p className="body-text text-[var(--text-secondary)]">View your current plan, upgrade options, and manage billing information.</p>
          </div>
        );
      case "billing":
        return (
          <div className="p-6">
            <h1 className="title-text-bold mb-4 text-[var(--text-primary)]">Billing</h1>
            <p className="body-text text-[var(--text-secondary)]">Manage your payment methods, view invoices, and update billing details.</p>
          </div>
        );
      case "apps-integrations":
        return (
          <div className="p-6">
            <h1 className="title-text-bold mb-4 text-[var(--text-primary)]">Apps & Integrations</h1>
            <p className="body-text text-[var(--text-secondary)]">Connect third-party services and manage your app integrations.</p>
          </div>
        );
      case "libraries-templates":
        return (
          <div className="p-6">
            <h1 className="title-text-bold mb-4 text-[var(--text-primary)]">Libraries & Templates</h1>
            <p className="body-text text-[var(--text-secondary)]">Browse and manage your component libraries and website templates.</p>
          </div>
        );
      default:
        return <SiteGrid filter="all" />;
    }
  };

  return (
    <DashboardLayout selectedSection={selectedSection} onSectionChange={setSelectedSection}>
      {renderContent()}
    </DashboardLayout>
  );
}
