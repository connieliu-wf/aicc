# Spring UI Component Usage

## Purpose & Scope

Always default to the primitives exported from `@/components/spring-ui/*` when building anything in designer, dashboard, or app surfaces. Compose those primitives (or extend them) before introducing bespoke UI so the system stays visually consistent and easier to maintain.

## Component Decision Flow

1. **Does a Spring UI primitive already exist?** Use it.
2. **Can the layout be composed from existing primitives?** Compose it.
3. **Can you extend an existing component instead of creating new API?** Extend it.
4. **Is the need truly unique?** Only then introduce a custom component.


## Available Spring UI Components

Use this list to map common UI needs to the canonical Spring UI primitive. Reference the Pattern Recipes section when a layout needs additional structure.

- `Accordion`: Use for expandable content sections, such as frequently asked questions or additional details. Usage examples: `@/src/app/style-guide/components/Accordion.tsx`
- `Autocomplete`: Use for multi-select dropdowns with search, such as selecting multiple tags or categories. Usage examples: `@/src/app/style-guide/components/Autocomplete.tsx`
- `Avatar`: Use for displaying user or entity pictures. Fall back to initials if a picture is not available. Usage examples: `@/src/app/style-guide/components/Avatar.tsx`
- `Badge`: Use to highlight new or altered features within the product. It can have a tooltip but is not selectable or interactive. Usage examples: `@/src/app/style-guide/components/Badge.tsx`
- `Button`: Use to allow users to take actions, such as saving changes, accepting payments, and creating folders. Usage examples: `@/src/app/style-guide/components/Button.tsx`
    - Use `variant="primary"` for primary actions, `"subtle"` for secondary actions.
    - Use `variant="destructive"` for actions that delete or archive.
    - Use `variant="ghost"` for secondary actions that don't require as much emphasis.
- `Checkbox`: Use for multi-select options, such as selecting multiple items in a list. Usage examples: `@/src/app/style-guide/components/Checkbox.tsx`
- `ColorPicker`: Use for selecting colors, such as choosing theme colors or customizing element styles.
- `DropdownMenu`: Use for displaying contextual menus with actions, such as row actions or button menus. Usage examples: `@/src/app/style-guide/components/DropdownMenu.tsx`
- `Icon`: Use for decorative or supplementary visual elements that help explain the UI. Usage examples: `@/src/app/style-guide/components/Icon.tsx`
- `IconButton`: Use for icon-only affordances, such as close buttons or chevrons. Usage examples: `@/src/app/style-guide/components/IconButton.tsx`
- `Input`: Use for text entry, such as search bars or form fields. Usage examples: `@/src/app/style-guide/components/Input.tsx`
- `Link`: Use for navigate to new pages or sections within the same page
- `Modal`: Use for creating dismissable overlays that appear on top of the main content. Prefer over `Popover` when content is the main focus of the page. Usage examples: `@/src/app/style-guide/components/Modal.tsx`
- `Note`: Use to inform and/or guide users through a flow or section. Usage examples: `@/src/app/style-guide/components/Note.tsx`
- `Popover`: Use for displaying additional rich content on top of other content. Prefer over `Modal` when the content should be displayed in context with other elements on the page. Usage examples: `@/src/app/style-guide/components/Popover.tsx`
- `Radio`: Use for selecting a single option from a list, such as choosing a payment method. Usage examples: `@/src/app/style-guide/components/Radio.tsx`
- `Row`: Use for flexible layout components in navigation stacks, settings forms, or any horizontal arrangement of content with labels, descriptions, and actions. Usage examples: `@/src/app/style-guide/components/Row.tsx`
- `Select`: Use for single-choice dropdowns, such as selecting a country or currency. Usage examples: `@/src/app/style-guide/components/Select.tsx`
- `SegmentedControl`: Use for mutually exclusive selection controls, such as switching between view modes or time periods. Usage examples: `@/src/app/style-guide/components/SegmentedControl.tsx`
- `Slider`: Use for numeric input via dragging, such as adjusting volume, opacity, or any continuous value.
- `SplitButton`: Use for buttons that combine a primary action with a dropdown menu for related actions. Usage examples: `@/src/app/style-guide/components/SplitButton.tsx`
- `Switch`: Use for binary toggles, such as enabling/disabling notifications. Usage examples: `@/src/app/style-guide/components/Switch.tsx`
- `TabBar`: Use for horizontal navigation between related content sections, such as switching between dashboard views or settings tabs. Usage examples: `@/src/app/style-guide/components/TabBar.tsx`
- `Table`: Use for displaying structured data in rows and columns, such as user lists, product catalogs, or data grids. Usage examples: `@/src/app/style-guide/components/Table.tsx`
- `Tag`: Use for items that need to be labeled, categorized, or organized using keywords that describe them. Tags can also be used for dismissible items that exist outside of inputs.
- `Textarea`: Use for multi-line text entry, such as comments or descriptions. Usage examples: `@/src/app/style-guide/components/Textarea.tsx`
- `Tooltip`: Use to provide additional context or information about a UI element. Usage examples: `@/src/app/style-guide/components/Tooltip.tsx`

## Designer Layout Components

- **Layout components** are located in `@/components/designer/layout/`
- **Section components** are located in `@/components/designer/sections/`
- Examples:
  - `Navbar`, `LeftSidebar`, `Canvas` from [src/components/designer/layout/](/src/components/designer/layout)
  - `CMSSection`, `AppsSection` from [src/components/designer/sections/](/src/components/designer/sections)

## Component Styling Best Practices

- **Use built-in variants**: Leverage component props like `variant="ghost"`, `size="comfortable"`
- **Minimize custom classes**: Only add custom `className` when absolutely necessary
- **Follow established patterns**: Reference existing components for styling consistency
- **Use theme variables**: Apply colors via CSS variables from our theme system


## Extension & Anti-Patterns

### When to Extend
- Only extend when you must inject extra behavior or wiring while keeping the Spring API intact.
- Always pass through props and reuse Spring helpers like `cn`.
```tsx
import { Button } from "@/components/spring-ui/button"
import { cn } from "@/lib/utils"

export function LoadingButton({ loading, children, className, ...props }) {
  return (
    <Button
      {...props}
      disabled={loading || props.disabled}
      className={cn(loading && "opacity-50", className)}
    >
      {loading ? "Saving…" : children}
    </Button>
  )
}
```

## Import Organization
Keep imports organized and use correct paths:
```tsx
// ✅ Correct import structure
import { Button, IconButton } from '@/components/spring-ui/button'
import { Input } from '@/components/spring-ui/input'
import { SettingsIcon, ChevronDownIcon } from '@/icons'
import { SomeUtility } from '@/lib/utils'

// ✅ Designer components
import { Navbar } from '@/components/designer/layout/Navbar'
import { CMSSection } from '@/components/designer/sections/CMSSection'
```

Import order priority:
1. Spring UI components (`@/components/spring-ui/*`)
2. Icons (`@/icons`)
3. Shared utilities (`@/lib/utils`)
4. Designer/layout components (`@/components/designer/*`)
5. Third-party imports (last)

## Integration Notes
- **Color, typography, and spacing tokens** must follow `color-and-text-styling.mdc`.
- **Copy, capitalization, and helper text** follow `content-guidelines.mdc`.
- **Hard-coded asset paths** (images, lottie files, etc.) must respect `asset-base-path.mdc`.
- **State management**: Use React hooks for local state; follow existing patterns from [src/context](/src/context) for app-wide state.