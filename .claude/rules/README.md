# Claude Code Rules

This directory contains coding guidelines and standards that are automatically loaded by Claude Code to ensure consistent development practices across the project.

## Overview

These rules were converted from the `.cursor/rules/` directory to work with Claude Code. Claude Code automatically loads all `.md` files in this directory at startup with the same priority as `CLAUDE.md`.

## Rule Files

### [global.md](global.md)
**Foundational prototype philosophy and coding principles**

This is the most important rule that applies to the entire codebase. It establishes that this is a prototype repository prioritizing visual fidelity and speed over production-ready code.

Key principles:
- Prototype-first mindset (speed over production-ready code)
- KISS, YAGNI, DRY principles
- What NOT to do (error handling, accessibility, auth, etc.)
- Code style guidelines

### [color-and-text-styling.md](color-and-text-styling.md)
**Design system theming and typography standards**

Enforces consistent color and typography across the UI using a centralized theme system.

Key concepts:
- CSS variable usage (never hardcoded colors)
- Theme system architecture ([themes.css](/src/styles/themes.css), [colors.css](/src/styles/colors.css))
- Text, background, action, and input color variables
- Typography classes (`title-text-bold`, `body-text`)
- Automatic light/dark mode compatibility

### [icon-usage.md](icon-usage.md)
**Icon system guidelines**

Standardizes icon selection and usage across the application.

Key concepts:
- Import from [src/icons](/src/icons) directory only
- Standard import pattern: `import { IconName } from '@/icons'`
- Icon sizing standards (16px default, 24px, 64px)
- Naming conventions and search patterns

### [component-usage.md](component-usage.md)
**Spring UI component library usage**

Enforces use of the Spring UI design system to maintain visual consistency.

Key concepts:
- Component decision flow (use primitives first)
- 30+ available Spring UI components with usage guidelines
- Designer layout and section components
- Extension patterns and anti-patterns
- Import organization priority

### [url-state.md](url-state.md)
**URL-based state synchronization pattern**

Provides a centralized pattern for syncing UI state with URL query parameters.

Key concepts:
- URL parameter schema table
- Implementation patterns for contexts and pages
- Best practices (refs, `router.replace`, omit defaults)
- When to use/not use URL state
- `useUrlState` utility hook

### [asset-base-path.md](asset-base-path.md)
**Static asset path handling**

Handles base path configuration for static assets deployed with a custom basePath.

Key concepts:
- `getImagePath` utility function usage
- Correct vs incorrect patterns
- Common places to verify (favicons, meta tags, etc.)

### [content-guidelines.md](content-guidelines.md)
**Brand voice and copywriting standards**

Ensures consistent brand voice and content style across product copy, documentation, and AI responses.

Key concepts:
- Brand voice (knowledgeable, empowering, down-to-earth, bold)
- General content guidelines (sentence case, contractions, etc.)
- AI-specific product guidelines

## Rule Relationships

These rules are interconnected and reference each other:

- **component-usage.md** references **color-and-text-styling.md** for color and typography
- **component-usage.md** references **content-guidelines.md** for copy and helper text
- **component-usage.md** references **asset-base-path.md** for hard-coded asset paths
- **icon-usage.md** works alongside **color-and-text-styling.md** for icon theming

## Usage

Claude Code automatically loads these rules when starting a session. You don't need to manually reference them, but you can explicitly ask Claude Code to follow specific guidelines:

```
"Use Spring UI components for this form"
"Follow the URL state pattern for this navigation"
"Apply proper asset base paths to these images"
```

## Maintenance

When updating coding standards:

1. Update the corresponding `.md` file in this directory
2. Consider updating the original `.cursor/rules/*.mdc` files to keep both systems synchronized
3. Test changes in a new Claude Code session to verify rule loading

## Notes

- These rules have the same priority as `CLAUDE.md` in Claude Code
- All rules are auto-loaded; no configuration needed
- The `.claude/` directory can be added to `.gitignore` for personal preferences or committed for team standards
- Original Cursor rules in `.cursor/rules/` remain unchanged for backward compatibility