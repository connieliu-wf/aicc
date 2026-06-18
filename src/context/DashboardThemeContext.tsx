"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useTheme, ThemeMode } from "./ThemeContext";

interface DashboardThemeContextType {
  dashboardMode: ThemeMode;
  setDashboardMode: (mode: ThemeMode) => void;
  isDashboardOverride: boolean;
}

const DashboardThemeContext = createContext<DashboardThemeContextType | undefined>(undefined);

export function useDashboardTheme() {
  const context = useContext(DashboardThemeContext);
  if (context === undefined) {
    throw new Error("useDashboardTheme must be used within a DashboardThemeProvider");
  }
  return context;
}

interface DashboardThemeProviderProps {
  children: React.ReactNode;
}

export function DashboardThemeProvider({ children }: DashboardThemeProviderProps) {
  const { theme, setTheme } = useTheme();
  const [dashboardMode, setDashboardModeState] = useState<ThemeMode>(theme.mode);
  const [isDashboardOverride, setIsDashboardOverride] = useState(false);

  // Sync dashboard mode with current theme mode
  useEffect(() => {
    if (theme.density === "dashboard" && !isDashboardOverride) {
      setDashboardModeState(theme.mode);
    }
  }, [theme.mode, theme.density, isDashboardOverride]);

  const setDashboardMode = (mode: ThemeMode) => {
    setDashboardModeState(mode);
    setIsDashboardOverride(true);
    // Update the actual theme
    setTheme({ mode, density: "dashboard" });
  };

  // Reset override when theme changes externally (like route changes)
  useEffect(() => {
    if (theme.density !== "dashboard") {
      setIsDashboardOverride(false);
    }
  }, [theme.density]);

  return (
    <DashboardThemeContext.Provider 
      value={{ 
        dashboardMode, 
        setDashboardMode, 
        isDashboardOverride 
      }}
    >
      {children}
    </DashboardThemeContext.Provider>
  );
} 