"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useTheme, ThemeMode } from "./ThemeContext";

interface MainAppThemeContextType {
  mainAppMode: ThemeMode;
  setMainAppMode: (mode: ThemeMode) => void;
  isMainAppOverride: boolean;
}

const MainAppThemeContext = createContext<MainAppThemeContextType | undefined>(undefined);

export function useMainAppTheme() {
  const context = useContext(MainAppThemeContext);
  if (context === undefined) {
    throw new Error("useMainAppTheme must be used within a MainAppThemeProvider");
  }
  return context;
}

interface MainAppThemeProviderProps {
  children: React.ReactNode;
}

export function MainAppThemeProvider({ children }: MainAppThemeProviderProps) {
  const { theme, setTheme } = useTheme();
  const [mainAppMode, setMainAppModeState] = useState<ThemeMode>("dark"); // Default to dark
  const [isMainAppOverride, setIsMainAppOverride] = useState(false);

  const setMainAppMode = (mode: ThemeMode) => {
    setMainAppModeState(mode);
    setIsMainAppOverride(true);
    // Update the actual theme for main app (designer density)
    setTheme({ mode, density: "designer" });
  };

  // Initialize with current theme mode
  useEffect(() => {
    if (theme.density === "designer" && !isMainAppOverride) {
      setMainAppModeState(theme.mode);
    }
  }, [theme.mode, theme.density, isMainAppOverride]);

  // Reset override when switching to non-designer routes (like dashboard)
  useEffect(() => {
    if (theme.density !== "designer") {
      setIsMainAppOverride(false);
    }
  }, [theme.density]);

  return (
    <MainAppThemeContext.Provider
      value={{
        mainAppMode,
        setMainAppMode,
        isMainAppOverride,
      }}
    >
      {children}
    </MainAppThemeContext.Provider>
  );
} 