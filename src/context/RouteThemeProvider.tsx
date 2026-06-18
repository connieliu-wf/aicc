"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { ThemeProvider, useTheme, ThemeConfig } from "./ThemeContext";
import { DashboardThemeProvider } from "./DashboardThemeContext";
import { MainAppThemeProvider, useMainAppTheme } from "./MainAppThemeContext";

interface RouteThemeProviderProps {
  children: React.ReactNode;
}

function RouteThemeHandler({ children }: RouteThemeProviderProps) {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const { isMainAppOverride } = useMainAppTheme();

  useEffect(() => {
    let targetTheme: ThemeConfig | null = null;

    // Determine target theme based on route
    if (pathname?.startsWith('/dashboard')) {
      // Only set default dashboard theme if not already on dashboard theme
      // This allows the dashboard theme switcher to override
      if (theme.density !== "dashboard") {
        targetTheme = { mode: "light", density: "dashboard" };
      }
    } else if (pathname?.startsWith('/style-guide')) {
      // Keep whatever theme is currently selected for style guide
      // Don't change the theme when on style guide to allow theme testing
      return;
    } else {
      // Default to dark + designer for the main designer app
      // But don't override if user has manually set main app theme
      if (!isMainAppOverride) {
        targetTheme = { mode: "dark", density: "designer" };
      }
    }

    // Only update theme if it's different from current theme and we have a target theme
    if (targetTheme && (theme.mode !== targetTheme.mode || theme.density !== targetTheme.density)) {
      setTheme(targetTheme);
    }
  }, [pathname, theme.mode, theme.density, setTheme]);

  return <>{children}</>;
}

export function RouteThemeProvider({ children }: RouteThemeProviderProps) {
  return (
    <ThemeProvider defaultTheme={{ mode: "dark", density: "designer" }}>
      <MainAppThemeProvider>
        <DashboardThemeProvider>
          <RouteThemeHandler>
            {children}
          </RouteThemeHandler>
        </DashboardThemeProvider>
      </MainAppThemeProvider>
    </ThemeProvider>
  );
} 