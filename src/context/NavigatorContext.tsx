"use client";

import React, { createContext, useContext, useState } from 'react';

interface FileNode {
  id: string;
  name: string;
  content: string;
  children?: FileNode[];
}

interface NavigatorContextType {
  isNavigatorOpen: boolean;
  toggleNavigator: () => void;
  selectedFile: FileNode | null;
  setSelectedFile: (file: FileNode | null) => void;
}

const NavigatorContext = createContext<NavigatorContextType | undefined>(undefined);

export function NavigatorProvider({ children }: { children: React.ReactNode }) {
  const [isNavigatorOpen, setIsNavigatorOpen] = useState(true);
  const [selectedFile, setSelectedFile] = useState<FileNode | null>(null);

  const toggleNavigator = () => {
    setIsNavigatorOpen(!isNavigatorOpen);
  };

  return (
    <NavigatorContext.Provider value={{ isNavigatorOpen, toggleNavigator, selectedFile, setSelectedFile }}>
      {children}
    </NavigatorContext.Provider>
  );
}

export function useNavigator() {
  const context = useContext(NavigatorContext);
  if (context === undefined) {
    throw new Error('useNavigator must be used within a NavigatorProvider');
  }
  return context;
} 