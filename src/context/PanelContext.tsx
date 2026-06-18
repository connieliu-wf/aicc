"use client";

import React, { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';

// Panel types from LeftSidebar
export type PanelType = 
  | 'add' 
  | 'pages' 
  | 'navigator' 
  | 'components' 
  | 'variables' 
  | 'styles' 
  | 'assets' 
  | 'apps' 
  | 'activityLog' 
  | 'audits'
  | null;

// Sub-panel types (e.g., for nested panels like Colors within Variables)
export type SubPanelType = 'colors' | null;

interface PanelContextType {
  activePanel: PanelType;
  subPanel: SubPanelType;
  setActivePanel: (panel: PanelType) => void;
  setSubPanel: (subPanel: SubPanelType) => void;
  togglePanel: (panel: PanelType) => void;
  closePanel: () => void;
  closeSubPanel: () => void;
}

const PanelContext = createContext<PanelContextType | undefined>(undefined);

export function PanelProvider({ children }: { children: React.ReactNode }) {
  const [activePanel, setActivePanelState] = useState<PanelType>(null);
  const [subPanel, setSubPanelState] = useState<SubPanelType>(null);
  
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const hasInitializedRef = useRef(false);
  const isUpdatingRef = useRef(false);

  // Read initial values from URL on mount
  useEffect(() => {
    if (hasInitializedRef.current) return;
    hasInitializedRef.current = true;

    const panelParam = searchParams?.get('panel') as PanelType;
    const subPanelParam = searchParams?.get('subpanel') as SubPanelType;

    if (panelParam) {
      setActivePanelState(panelParam);
    }
    if (subPanelParam) {
      setSubPanelState(subPanelParam);
    }
  }, [searchParams]);

  // Update URL when panel state changes
  const updateUrl = useCallback((panel: PanelType, sub: SubPanelType) => {
    if (isUpdatingRef.current) return;
    
    const params = new URLSearchParams(searchParams?.toString() || '');
    
    if (panel === null) {
      params.delete('panel');
      params.delete('subpanel'); // Clear subpanel when main panel closes
    } else {
      params.set('panel', panel);
    }

    if (sub === null) {
      params.delete('subpanel');
    } else {
      params.set('subpanel', sub);
    }

    const queryString = params.toString();
    const newUrl = queryString ? `${pathname}?${queryString}` : pathname || '/';
    
    isUpdatingRef.current = true;
    router.replace(newUrl, { scroll: false });
    
    setTimeout(() => {
      isUpdatingRef.current = false;
    }, 50);
  }, [searchParams, pathname, router]);

  const setActivePanel = useCallback((panel: PanelType) => {
    setActivePanelState(panel);
    // Clear subpanel when changing main panel
    if (panel !== activePanel) {
      setSubPanelState(null);
    }
    updateUrl(panel, panel !== activePanel ? null : subPanel);
  }, [activePanel, subPanel, updateUrl]);

  const setSubPanel = useCallback((sub: SubPanelType) => {
    setSubPanelState(sub);
    updateUrl(activePanel, sub);
  }, [activePanel, updateUrl]);

  const togglePanel = useCallback((panel: PanelType) => {
    const newPanel = activePanel === panel ? null : panel;
    setActivePanelState(newPanel);
    // Clear subpanel when toggling
    setSubPanelState(null);
    updateUrl(newPanel, null);
  }, [activePanel, updateUrl]);

  const closePanel = useCallback(() => {
    setActivePanelState(null);
    setSubPanelState(null);
    updateUrl(null, null);
  }, [updateUrl]);

  const closeSubPanel = useCallback(() => {
    setSubPanelState(null);
    updateUrl(activePanel, null);
  }, [activePanel, updateUrl]);

  return (
    <PanelContext.Provider value={{
      activePanel,
      subPanel,
      setActivePanel,
      setSubPanel,
      togglePanel,
      closePanel,
      closeSubPanel,
    }}>
      {children}
    </PanelContext.Provider>
  );
}

export function usePanel() {
  const context = useContext(PanelContext);
  if (context === undefined) {
    throw new Error('usePanel must be used within a PanelProvider');
  }
  return context;
}

