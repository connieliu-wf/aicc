"use client";

import React, { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export type AppSection = 'home' | 'cms' | 'insights';

type AppContextType = {
  currentSection: AppSection;
  navigateTo: (section: AppSection) => void;
  isStyleGuideOpen: boolean;
  openStyleGuide: () => void;
  closeStyleGuide: () => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [currentSection, setCurrentSection] = useState<AppSection>('home');
  const [isStyleGuideOpen, setIsStyleGuideOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const hasInitializedRef = useRef(false);
  const isUpdatingRef = useRef(false);

  // Read initial section from URL on mount
  useEffect(() => {
    if (hasInitializedRef.current) return;
    hasInitializedRef.current = true;

    const sectionParam = searchParams?.get('section') as AppSection | null;
    if (sectionParam && ['home', 'cms', 'insights'].includes(sectionParam)) {
      setCurrentSection(sectionParam);
    }
  }, [searchParams]);

  // Update URL when section changes
  const updateUrl = useCallback((section: AppSection) => {
    if (isUpdatingRef.current) return;
    
    const params = new URLSearchParams(searchParams?.toString() || '');
    
    if (section === 'home') {
      params.delete('section');
    } else {
      params.set('section', section);
    }

    const queryString = params.toString();
    const newUrl = queryString ? `${pathname}?${queryString}` : pathname || '/';
    
    isUpdatingRef.current = true;
    router.replace(newUrl, { scroll: false });
    
    setTimeout(() => {
      isUpdatingRef.current = false;
    }, 50);
  }, [searchParams, pathname, router]);

  useEffect(() => {
    // Sync URL path with state (for route-based navigation)
    if (pathname) {
      if (pathname.includes('/style-guide')) {
        setIsStyleGuideOpen(true);
      } else {
        setIsStyleGuideOpen(false);
        
        // Only update from pathname if no URL param is set
        const sectionParam = searchParams?.get('section');
        if (!sectionParam) {
          if (pathname.includes('/cms')) {
            setCurrentSection('cms');
          } else if (pathname.includes('/insights')) {
            setCurrentSection('insights');
          } else if (!pathname.startsWith('/dashboard')) {
            setCurrentSection('home');
          }
        }
      }
    }
  }, [pathname, searchParams]);

  const navigateTo = useCallback((section: AppSection) => {
    setCurrentSection(section);
    updateUrl(section);
    
    // Only navigate to actual routes that exist as Next.js pages
    // Apps, CMS, and Insights are handled by state-based routing in LayoutContent
    if (section === 'home') {
      router.push('/');
    }
    // For apps, cms, insights: only update state and URL param, no page navigation
    // This prevents 404 errors for non-existent pages
  }, [router, updateUrl]);

  const openStyleGuide = useCallback(() => {
    setIsStyleGuideOpen(true);
    router.push('/style-guide');
  }, [router]);

  const closeStyleGuide = useCallback(() => {
    setIsStyleGuideOpen(false);
    // Only navigate to home URL, let state handle other sections
    if (currentSection === 'home') {
      router.push('/');
    }
    // For other sections, just rely on state
  }, [currentSection, router]);

  return (
    <AppContext.Provider value={{ 
      currentSection, 
      navigateTo, 
      isStyleGuideOpen, 
      openStyleGuide, 
      closeStyleGuide 
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
