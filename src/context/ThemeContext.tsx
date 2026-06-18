"use client";

import React, { createContext, useContext, useEffect, useState, useCallback, useMemo } from "react";

export type ThemeMode = "light" | "dark";
export type ThemeDensity = "dashboard" | "designer";

export interface ThemeConfig {
  mode: ThemeMode;
  density: ThemeDensity;
}

export interface ThemeContextType {
  theme: ThemeConfig;
  setTheme: (theme: ThemeConfig) => void;
  setMode: (mode: ThemeMode) => void;
  setDensity: (density: ThemeDensity) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: ThemeConfig;
}

export function ThemeProvider({ 
  children, 
  defaultTheme = { mode: "dark", density: "designer" } 
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<ThemeConfig>(defaultTheme);

  const setTheme = useCallback((newTheme: ThemeConfig) => {
    setThemeState(newTheme);
  }, []);

  const setMode = useCallback((mode: ThemeMode) => {
    setThemeState(prev => ({ ...prev, mode }));
  }, []);

  const setDensity = useCallback((density: ThemeDensity) => {
    setThemeState(prev => ({ ...prev, density }));
  }, []);

  // Apply theme classes to document root
  useEffect(() => {
    const root = document.documentElement;
    
    // Remove existing theme classes
    root.classList.remove("theme-light", "theme-dark", "theme-dashboard", "theme-designer");
    
    // Add current theme classes
    root.classList.add(`theme-${theme.mode}`);
    root.classList.add(`theme-${theme.density}`);
    
    // Set base rem unit based on density
    if (theme.density === "dashboard") {
      root.style.fontSize = "16px";
    } else {
      root.style.fontSize = "16px"; // Default for designer
    }
    
    // Also maintain the existing dark class for backwards compatibility
    if (theme.mode === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  const contextValue = useMemo(
    () => ({ theme, setTheme, setMode, setDensity }),
    [theme, setTheme, setMode, setDensity]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
} 