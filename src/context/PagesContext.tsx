"use client";

import React, { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';

interface PagesContextType {
  isPagesOpen: boolean;
  togglePages: () => void;
  selectedPage: string;
  setSelectedPage: (page: string) => void;
  setIsPagesOpen: (isOpen: boolean) => void;
}

const PagesContext = createContext<PagesContextType | undefined>(undefined);

export function PagesProvider({ children }: { children: React.ReactNode }) {
  const [isPagesOpen, setIsPagesOpen] = useState(false);
  const [selectedPage, setSelectedPageState] = useState("/");
  
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const hasInitializedRef = useRef(false);
  const isUpdatingRef = useRef(false);

  // Read initial page from URL on mount
  useEffect(() => {
    if (hasInitializedRef.current) return;
    hasInitializedRef.current = true;

    const pageParam = searchParams?.get('page');
    if (pageParam) {
      setSelectedPageState(pageParam);
    }
  }, [searchParams]);

  // Update URL when page changes
  const updateUrl = useCallback((page: string) => {
    if (isUpdatingRef.current) return;
    
    const params = new URLSearchParams(searchParams?.toString() || '');
    
    if (page === '/') {
      params.delete('page'); // Default page, no need to show in URL
    } else {
      params.set('page', page);
    }

    const queryString = params.toString();
    const newUrl = queryString ? `${pathname}?${queryString}` : pathname || '/';
    
    isUpdatingRef.current = true;
    router.replace(newUrl, { scroll: false });
    
    setTimeout(() => {
      isUpdatingRef.current = false;
    }, 50);
  }, [searchParams, pathname, router]);

  const togglePages = useCallback(() => {
    setIsPagesOpen(prev => !prev);
  }, []);

  const setSelectedPage = useCallback((page: string) => {
    setSelectedPageState(page);
    updateUrl(page);
  }, [updateUrl]);

  return (
    <PagesContext.Provider value={{ 
      isPagesOpen, 
      togglePages, 
      selectedPage, 
      setSelectedPage, 
      setIsPagesOpen 
    }}>
      {children}
    </PagesContext.Provider>
  );
}

export function usePages() {
  const context = useContext(PagesContext);
  if (context === undefined) {
    throw new Error('usePages must be used within a PagesProvider');
  }
  return context;
}
