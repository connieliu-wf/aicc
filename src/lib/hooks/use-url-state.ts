"use client";

import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { useCallback, useEffect, useRef } from 'react';

// URL Parameter Schema Types
export type SectionParam = 'home' | 'apps' | 'cms' | 'insights';
export type ModeParam = 'Design' | 'Build' | 'Develop';
export type PanelParam = 'add' | 'pages' | 'navigator' | 'components' | 'variables' | 'styles' | 'assets' | 'apps' | 'activityLog' | 'audits' | null;
export type SubPanelParam = 'colors' | null;
export type DashSectionParam = 'all-sites' | 'tutorials' | 'general' | 'team' | 'plans' | 'billing' | 'apps-integrations' | 'libraries-templates';
export type SettingsSectionParam = 'general' | 'hosting' | 'seo' | 'forms' | 'fonts' | 'integrations' | 'custom-code' | 'editor' | 'members' | 'plans' | 'billing';
export type AppsViewParam = 'empty' | 'app-gen';
export type InsightsViewParam = 'site-overview' | 'page-performance' | 'user-behavior';

// All possible URL parameters
export interface UrlStateParams {
  section?: SectionParam;
  mode?: ModeParam;
  page?: string;
  panel?: PanelParam;
  subpanel?: SubPanelParam;
  modal?: string;
  dashSection?: DashSectionParam;
  settingsSection?: SettingsSectionParam;
  // Section-specific views
  appsView?: AppsViewParam;
  insightsView?: InsightsViewParam;
  cmsCollection?: string;
  cmsItem?: string;
}

// Parameter key type
export type UrlStateKey = keyof UrlStateParams;

/**
 * Hook for reading and writing URL query parameters
 * Provides bidirectional sync between React state and URL
 */
export function useUrlState() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const isUpdatingRef = useRef(false);

  /**
   * Get a single parameter value from the URL
   */
  const getParam = useCallback(<K extends UrlStateKey>(key: K): UrlStateParams[K] | null => {
    const value = searchParams?.get(key);
    return value as UrlStateParams[K] | null;
  }, [searchParams]);

  /**
   * Get all current URL parameters as an object
   */
  const getAllParams = useCallback((): Partial<UrlStateParams> => {
    const params: Partial<UrlStateParams> = {};
    if (!searchParams) return params;

    const keys: UrlStateKey[] = ['section', 'mode', 'page', 'panel', 'subpanel', 'modal', 'dashSection', 'settingsSection', 'appsView', 'insightsView', 'cmsCollection', 'cmsItem'];
    keys.forEach(key => {
      const value = searchParams.get(key);
      if (value) {
        (params as Record<string, string>)[key] = value;
      }
    });
    return params;
  }, [searchParams]);

  /**
   * Set a single parameter value in the URL
   * Uses router.replace to avoid creating history entries
   */
  const setParam = useCallback(<K extends UrlStateKey>(key: K, value: UrlStateParams[K] | null) => {
    if (isUpdatingRef.current) return;
    
    const params = new URLSearchParams(searchParams?.toString() || '');
    
    if (value === null || value === undefined) {
      params.delete(key);
    } else {
      params.set(key, String(value));
    }

    const queryString = params.toString();
    const newUrl = queryString ? `${pathname}?${queryString}` : pathname || '/';
    
    isUpdatingRef.current = true;
    router.replace(newUrl, { scroll: false });
    
    // Reset the flag after a short delay to allow for the navigation to complete
    setTimeout(() => {
      isUpdatingRef.current = false;
    }, 50);
  }, [searchParams, pathname, router]);

  /**
   * Set multiple parameters at once
   * More efficient than calling setParam multiple times
   */
  const setParams = useCallback((newParams: Partial<UrlStateParams>) => {
    if (isUpdatingRef.current) return;

    const params = new URLSearchParams(searchParams?.toString() || '');
    
    Object.entries(newParams).forEach(([key, value]) => {
      if (value === null || value === undefined) {
        params.delete(key);
      } else {
        params.set(key, String(value));
      }
    });

    const queryString = params.toString();
    const newUrl = queryString ? `${pathname}?${queryString}` : pathname || '/';
    
    isUpdatingRef.current = true;
    router.replace(newUrl, { scroll: false });
    
    setTimeout(() => {
      isUpdatingRef.current = false;
    }, 50);
  }, [searchParams, pathname, router]);

  /**
   * Clear a specific parameter from the URL
   */
  const clearParam = useCallback((key: UrlStateKey) => {
    setParam(key, null);
  }, [setParam]);

  /**
   * Clear all URL parameters
   */
  const clearAllParams = useCallback(() => {
    if (isUpdatingRef.current) return;
    
    isUpdatingRef.current = true;
    router.replace(pathname || '/', { scroll: false });
    
    setTimeout(() => {
      isUpdatingRef.current = false;
    }, 50);
  }, [pathname, router]);

  return {
    getParam,
    getAllParams,
    setParam,
    setParams,
    clearParam,
    clearAllParams,
    searchParams,
  };
}

/**
 * Hook for syncing a specific state value with URL
 * Automatically reads initial value from URL and updates URL on state change
 */
export function useUrlSyncedState<K extends UrlStateKey>(
  key: K,
  defaultValue: NonNullable<UrlStateParams[K]>,
  setState: (value: NonNullable<UrlStateParams[K]>) => void
) {
  const { getParam, setParam } = useUrlState();
  const hasInitializedRef = useRef(false);

  // Read initial value from URL on mount
  useEffect(() => {
    if (hasInitializedRef.current) return;
    hasInitializedRef.current = true;

    const urlValue = getParam(key);
    if (urlValue !== null) {
      setState(urlValue as NonNullable<UrlStateParams[K]>);
    }
  }, [key, getParam, setState]);

  // Return a setter that also updates the URL
  const setStateWithUrl = useCallback((value: NonNullable<UrlStateParams[K]> | null) => {
    if (value === null || value === defaultValue) {
      setParam(key, null);
    } else {
      setParam(key, value);
    }
    if (value !== null) {
      setState(value);
    }
  }, [key, defaultValue, setParam, setState]);

  return setStateWithUrl;
}

