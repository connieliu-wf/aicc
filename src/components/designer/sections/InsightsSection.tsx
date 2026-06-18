"use client";

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import InsightsLeftSidebar from './insights/InsightsLeftSidebar';
import AnalyzeSiteOverview from './insights/AnalyzeSiteOverview';

type InsightsViewType = 'site-overview' | 'page-performance' | 'user-behavior';

export default function InsightsSection() {
  const [selectedSection, setSelectedSectionState] = useState<InsightsViewType>("site-overview");

  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const hasInitializedRef = useRef(false);
  const isUpdatingRef = useRef(false);

  // Read initial state from URL on mount
  useEffect(() => {
    if (hasInitializedRef.current) return;
    hasInitializedRef.current = true;

    const viewParam = searchParams?.get('insightsView') as InsightsViewType | null;
    if (viewParam && ['site-overview', 'page-performance', 'user-behavior'].includes(viewParam)) {
      setSelectedSectionState(viewParam);
    }
  }, [searchParams]);

  // Update URL helper
  const updateUrl = useCallback((view: InsightsViewType) => {
    if (isUpdatingRef.current) return;
    
    const params = new URLSearchParams(searchParams?.toString() || '');
    
    if (view === 'site-overview') {
      params.delete('insightsView'); // Default, omit from URL
    } else {
      params.set('insightsView', view);
    }

    const queryString = params.toString();
    const newUrl = queryString ? `${pathname}?${queryString}` : pathname || '/';
    
    isUpdatingRef.current = true;
    router.replace(newUrl, { scroll: false });
    
    setTimeout(() => {
      isUpdatingRef.current = false;
    }, 50);
  }, [searchParams, pathname, router]);

  const setSelectedSection = useCallback((section: string) => {
    const typedSection = section as InsightsViewType;
    setSelectedSectionState(typedSection);
    updateUrl(typedSection);
  }, [updateUrl]);

  const renderMainContent = () => {
    switch (selectedSection) {
      case "site-overview":
        return <AnalyzeSiteOverview />;
      case "page-performance":
        return (
          <div className="flex-1 bg-[var(--bg-primary)] flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-2xl font-bold mb-4 text-[var(--text-primary)]">Page Performance</h1>
              <p className="text-[var(--text-secondary)]">Page performance analytics coming soon</p>
            </div>
          </div>
        );
      case "user-behavior":
        return (
          <div className="flex-1 bg-[var(--bg-primary)] flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-2xl font-bold mb-4 text-[var(--text-primary)]">User Behavior</h1>
              <p className="text-[var(--text-secondary)]">User behavior analytics coming soon</p>
            </div>
          </div>
        );
      default:
        return <AnalyzeSiteOverview />;
    }
  };

  return (
    <div className="flex h-full">
      <InsightsLeftSidebar selectedSection={selectedSection} onSectionChange={setSelectedSection} />
      {renderMainContent()}
    </div>
  );
}
