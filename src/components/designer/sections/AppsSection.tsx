"use client";

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import AppsEmptyState from './AppGen/empty-state/AppsEmptyState';
import AppExpandedLeftPanel from './AppGen/empty-state/AppExpandedLeftPanel';
import AppGenView from './AppGen/AppGenView';

type AppsViewType = 'empty' | 'app-gen';

export default function AppsSection() {
  const [currentView, setCurrentViewState] = useState<AppsViewType>('empty');

  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const hasInitializedRef = useRef(false);
  const isUpdatingRef = useRef(false);

  // Read initial state from URL on mount
  useEffect(() => {
    if (hasInitializedRef.current) return;
    hasInitializedRef.current = true;

    const viewParam = searchParams?.get('appsView') as AppsViewType | null;
    if (viewParam && ['empty', 'app-gen'].includes(viewParam)) {
      setCurrentViewState(viewParam);
    }
  }, [searchParams]);

  // Update URL helper
  const updateUrl = useCallback((view: AppsViewType) => {
    if (isUpdatingRef.current) return;
    
    const params = new URLSearchParams(searchParams?.toString() || '');
    
    if (view === 'empty') {
      params.delete('appsView'); // Default, omit from URL
    } else {
      params.set('appsView', view);
    }

    const queryString = params.toString();
    const newUrl = queryString ? `${pathname}?${queryString}` : pathname || '/';
    
    isUpdatingRef.current = true;
    router.replace(newUrl, { scroll: false });
    
    setTimeout(() => {
      isUpdatingRef.current = false;
    }, 50);
  }, [searchParams, pathname, router]);

  const setCurrentView = useCallback((view: AppsViewType) => {
    setCurrentViewState(view);
    updateUrl(view);
  }, [updateUrl]);

  const handleRowClick = useCallback((rowLabel: string) => {
    setCurrentView('app-gen');
  }, [setCurrentView]);

  const handleSubmit = useCallback(() => {
    setCurrentView('app-gen');
  }, [setCurrentView]);

  if (currentView === 'app-gen') {
    return <AppGenView />;
  }

  return (
    <div className="flex h-full">
      <AppExpandedLeftPanel onRowClick={handleRowClick} />
      <AppsEmptyState onSubmit={handleSubmit} />
    </div>
  );
}
