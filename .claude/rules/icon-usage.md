# Icon Usage Guidelines

## Purpose & Scope
This rule applies to all icons in the `src/icons` directory. It ensures that icons are used correctly and consistently across the codebase.

## Icon Usage
- **Always import icons from [src/icons](/src/icons)** - never use third-party icon libraries if equivalent icons exist
- **Standard import pattern**: `import { IconName } from '@/icons'`
- **Default styling**: Icons should use `--text-secondary` color from our theme system

### Icon Sizing Standards
- **Default size**: `16px` for most icons
- Icons with "24" in name → use `size={24}` (e.g., `ToolbarHelp24Icon`)
- Icons with "Capability" in name → use `size={24}`
- Icons with "64" in name → use `size={64}` (e.g., `AddPanelButton64Icon`)

### Icon Naming Conventions
- **Standard icons**: Often include "Default" (e.g., `PageDefaultIcon`, `CheckDefaultIcon`)
- **Directional icons**: Include direction and size (e.g., `ChevronSmallDownIcon`, `ArrowUpRightIcon`)
- **Search tip**: Use regex search to find icons when uncertain about naming