# URL State Management

This prototype uses URL query parameters to persist UI state, enabling shareable links that restore exact prototype states.

## Architecture Overview

All significant UI state is synchronized with URL query parameters using a centralized pattern:
- **Context providers** handle state + URL sync for global state (section, mode, page, panels)
- **Page components** handle state + URL sync for page-specific state (dashSection, settingsSection)
- **UI Store** handles modal URL sync for modal state

## URL Parameter Schema

| Parameter | Values | Default | Source |
|-----------|--------|---------|--------|
| `section` | home, apps, cms, insights | home | [AppContext](/src/context/AppContext.tsx) |
| `mode` | Design, Build, Develop | Design | [ModeContext](/src/context/ModeContext.tsx) |
| `page` | /, /contact, /testimonials, etc. | / | [PagesContext](/src/context/PagesContext.tsx) |
| `panel` | add, pages, navigator, components, variables, styles, assets, apps, activityLog, audits | null | [PanelContext](/src/context/PanelContext.tsx) |
| `subpanel` | colors | null | [PanelContext](/src/context/PanelContext.tsx) |
| `modal` | Modal type identifier | null | [ui-store](/lib/stores/ui-store.ts) |
| `dashSection` | all-sites, tutorials, team, plans, etc. | all-sites | [dashboard/page.tsx](/src/app/dashboard/page.tsx) |
| `settingsSection` | general, hosting, seo, etc. | general | [site/settings/page.tsx](/src/app/dashboard/site/settings/page.tsx) |
| `appsView` | empty, app-gen | empty | [AppsSection](/src/components/designer/sections/AppsSection.tsx) |
| `insightsView` | site-overview, page-performance, user-behavior | site-overview | [InsightsSection](/src/components/designer/sections/InsightsSection.tsx) |
| `cmsCollection` | Collection ID (1, 2, 3, 4) | 1 | [CMSSection](/src/components/designer/sections/CMSSection.tsx) |
| `cmsItem` | Item ID | null | [CMSSection](/src/components/designer/sections/CMSSection.tsx) |

## Implementation Pattern

### For Context Providers

When adding URL-synced state to a context provider:

```tsx
"use client";

import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { useState, useEffect, useCallback, useRef } from 'react';

export function MyProvider({ children }) {
  const [myState, setMyStateInternal] = useState<MyStateType>('default');

  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const hasInitializedRef = useRef(false);
  const isUpdatingRef = useRef(false);

  // 1. Read initial value from URL on mount
  useEffect(() => {
    if (hasInitializedRef.current) return;
    hasInitializedRef.current = true;

    const param = searchParams?.get('myParam') as MyStateType | null;
    if (param && isValidValue(param)) {
      setMyStateInternal(param);
    }
  }, [searchParams]);

  // 2. Update URL when state changes
  const updateUrl = useCallback((value: MyStateType) => {
    if (isUpdatingRef.current) return;

    const params = new URLSearchParams(searchParams?.toString() || '');

    if (value === 'default') {
      params.delete('myParam'); // Omit default values from URL
    } else {
      params.set('myParam', value);
    }

    const queryString = params.toString();
    const newUrl = queryString ? `${pathname}?${queryString}` : pathname;

    isUpdatingRef.current = true;
    router.replace(newUrl, { scroll: false });

    setTimeout(() => {
      isUpdatingRef.current = false;
    }, 50);
  }, [searchParams, pathname, router]);

  // 3. Wrap setState to also update URL
  const setMyState = useCallback((value: MyStateType) => {
    setMyStateInternal(value);
    updateUrl(value);
  }, [updateUrl]);

  return (
    <MyContext.Provider value={{ myState, setMyState }}>
      {children}
    </MyContext.Provider>
  );
}
```

### For Page Components

For page-specific state that shouldn't be in a global context:

```tsx
"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useState, useEffect, useCallback, useRef } from "react";

export default function MyPage() {
  const [section, setSectionState] = useState<SectionType>("default");

  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const hasInitializedRef = useRef(false);
  const isUpdatingRef = useRef(false);

  // Read from URL on mount
  useEffect(() => {
    if (hasInitializedRef.current) return;
    hasInitializedRef.current = true;

    const param = searchParams?.get('section') as SectionType | null;
    if (param) setSectionState(param);
  }, [searchParams]);

  // Update URL helper
  const updateUrl = useCallback((value: SectionType) => {
    if (isUpdatingRef.current) return;

    const params = new URLSearchParams(searchParams?.toString() || '');

    if (value === 'default') {
      params.delete('section');
    } else {
      params.set('section', value);
    }

    const newUrl = params.toString() ? `${pathname}?${params}` : pathname;

    isUpdatingRef.current = true;
    router.replace(newUrl, { scroll: false });
    setTimeout(() => { isUpdatingRef.current = false; }, 50);
  }, [searchParams, pathname, router]);

  // Wrapped setter
  const setSection = useCallback((value: string) => {
    setSectionState(value as SectionType);
    updateUrl(value as SectionType);
  }, [updateUrl]);

  // ... rest of component
}
```

## Best Practices

### DO
- **Omit default values** from URL to keep URLs clean
- **Use `router.replace`** instead of `router.push` to avoid history spam
- **Use refs** to prevent initialization loops (`hasInitializedRef`, `isUpdatingRef`)
- **Add `scroll: false`** to router.replace to prevent scroll jumps
- **Type your state** for URL parameter validation
- **Use descriptive parameter names** that are readable in URLs

### DON'T
- Don't sync transient/ephemeral state (hover, focus, animation state)
- Don't sync sensitive data (passwords, tokens)
- Don't sync very large data (use IDs/keys instead)
- Don't use `router.push` for state changes (creates excessive history entries)

## When to Use URL State

**Use URL state for:**
- Navigation sections and tabs
- Panel open/close state
- Modal visibility
- Selected items (pages, settings sections)
- View modes (Design/Build/Develop)
- Any state you want to share via link

**Don't use URL state for:**
- Form input values (until submission)
- Loading states
- Error states
- Animation progress
- Scroll position
- Temporary UI feedback

## Adding New URL-Synced State

1. Choose a descriptive, kebab-case parameter name
2. Add the type to [use-url-state.ts](/src/lib/hooks/use-url-state.ts) `UrlStateParams` interface
3. Update the parameter schema table above
4. Implement using the pattern shown above
5. Test: load page → change state → refresh → verify state persists

## Utility Hook

For simple cases, use the `useUrlState` hook from [use-url-state.ts](/src/lib/hooks/use-url-state.ts):

```tsx
import { useUrlState } from '@/lib/hooks/use-url-state';

function MyComponent() {
  const { getParam, setParam, setParams } = useUrlState();

  // Read a param
  const section = getParam('section');

  // Set a param
  setParam('section', 'apps');

  // Set multiple params at once
  setParams({ section: 'apps', panel: 'pages' });
}
```

## Testing URL State

To verify URL state is working:
1. Navigate to a specific state (open panels, select sections)
2. Copy the URL
3. Open in a new tab/window
4. Verify the exact same state is restored