"use client";

import React, { createContext, useContext, useState, ReactNode, useCallback } from 'react';

// Define breadcrumb item type
export interface BreadcrumbItem {
  id: string;
  label: string;
  isActive?: boolean;
}

// Define breakpoint type
export type Breakpoint = 'desktop' | 'tablet' | 'mobile-landscape' | 'mobile';

export const BREAKPOINT_WIDTH: Record<Breakpoint, number> = {
  desktop: 1280,
  tablet: 768,
  'mobile-landscape': 568,
  mobile: 320,
};

interface CanvasSelectionContextType {
  breadcrumbs: BreadcrumbItem[];
  currentBreakpoint: Breakpoint;
  canvasWidth: number;
  isResizing: boolean;
  setBreadcrumbs: (breadcrumbs: BreadcrumbItem[]) => void;
  addBreadcrumb: (item: BreadcrumbItem) => void;
  removeBreadcrumb: (id: string) => void;
  setCurrentBreakpoint: (breakpoint: Breakpoint) => void;
  setCanvasWidth: (width: number) => void;
  setIsResizing: (resizing: boolean) => void;
  resetWidthToBreakpoint: (breakpoint: Breakpoint) => void;
  onBreadcrumbClick: (item: BreadcrumbItem) => void;
  onUndo: () => void;
  onRedo: () => void;
}

const CanvasSelectionContext = createContext<CanvasSelectionContextType | undefined>(undefined);

interface CanvasSelectionProviderProps {
  children: ReactNode;
}

export function CanvasSelectionProvider({ children }: CanvasSelectionProviderProps) {
  const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbItem[]>([
    { id: 'body', label: 'Body', isActive: true },
    { id: 'contact-intro', label: 'Contact Intro' },
    { id: 'container', label: 'Container' },
    { id: 'div', label: 'Div' }
  ]);
  
  const [currentBreakpoint, setCurrentBreakpoint] = useState<Breakpoint>('desktop');
  const [canvasWidth, setCanvasWidth] = useState<number>(BREAKPOINT_WIDTH['desktop']);
  const [isResizing, setIsResizing] = useState<boolean>(false);

  const addBreadcrumb = (item: BreadcrumbItem) => {
    setBreadcrumbs(prev => [...prev, item]);
  };

  const removeBreadcrumb = (id: string) => {
    setBreadcrumbs(prev => prev.filter(item => item.id !== id));
  };

  const onBreadcrumbClick = (item: BreadcrumbItem) => {
    // Find the index of the clicked item
    const itemIndex = breadcrumbs.findIndex(b => b.id === item.id);
    
    if (itemIndex !== -1) {
      // Update all breadcrumbs to set the clicked one as active
      setBreadcrumbs(prev => 
        prev.map((b, index) => ({
          ...b,
          isActive: index === itemIndex
        }))
      );
    }
  };

  const onUndo = () => {
    // TODO: Implement undo functionality
    console.log('Undo action triggered');
  };

  const onRedo = () => {
    // TODO: Implement redo functionality
    console.log('Redo action triggered');
  };

  const resetWidthToBreakpoint = useCallback((bp: Breakpoint) => {
    setCanvasWidth(BREAKPOINT_WIDTH[bp]);
  }, []);

  const handleSetCurrentBreakpoint = useCallback((bp: Breakpoint) => {
    setCurrentBreakpoint(bp);
    setCanvasWidth(BREAKPOINT_WIDTH[bp]);
  }, []);

  const value: CanvasSelectionContextType = {
    breadcrumbs,
    currentBreakpoint,
    canvasWidth,
    isResizing,
    setBreadcrumbs,
    addBreadcrumb,
    removeBreadcrumb,
    setCurrentBreakpoint: handleSetCurrentBreakpoint,
    setCanvasWidth,
    setIsResizing,
    resetWidthToBreakpoint,
    onBreadcrumbClick,
    onUndo,
    onRedo
  };

  return (
    <CanvasSelectionContext.Provider value={value}>
      {children}
    </CanvasSelectionContext.Provider>
  );
}

export function useCanvasSelection() {
  const context = useContext(CanvasSelectionContext);
  if (context === undefined) {
    throw new Error('useCanvasSelection must be used within a CanvasSelectionProvider');
  }
  return context;
}
