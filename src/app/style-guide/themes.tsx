"use client";

import React from "react";
import { useTheme, ThemeConfig } from "@/context/ThemeContext";
import { Button } from "@/components/spring-ui/button";
import { Input } from "@/components/spring-ui/input";
import { Badge } from "@/components/spring-ui/badge";
import { Switch } from "@/components/spring-ui/switch";
import { Checkbox } from "@/components/spring-ui/checkbox";
import { Select } from "@/components/spring-ui/select";
import { Icon } from "@/components/spring-ui/icon";

const themeOptions: { label: string; config: ThemeConfig; description: string }[] = [
  {
    label: "Light + Dashboard",
    config: { mode: "light", density: "dashboard" },
    description: "Spacious light theme for dashboard and general use"
  },
  {
    label: "Dark + Designer",
    config: { mode: "dark", density: "designer" },
    description: "Compact dark theme for designer and power users"
  },
  {
    label: "Light + Designer",
    config: { mode: "light", density: "designer" },
    description: "Compact light theme"
  },
  {
    label: "Dark + Dashboard",
    config: { mode: "dark", density: "dashboard" },
    description: "Spacious dark theme"
  }
];

function ThemePreview() {
  return (
    <div className="space-y-6 p-6 bg-[var(--bg-primary)] border border-[var(--border-default)] rounded-lg">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-[var(--text-primary)]">Component Preview</h3>
        <p className="text-sm text-[var(--text-secondary)]">
          See how components look in the current theme
        </p>
      </div>

      {/* Buttons */}
      <div className="space-y-3">
        <h4 className="font-medium text-[var(--text-primary)]">Buttons</h4>
        <div className="flex flex-wrap gap-2">
          <Button variant="default" size="compact">Primary</Button>
          <Button variant="outline" size="compact">Outline</Button>
          <Button variant="ghost" size="compact">Ghost</Button>
          <Button variant="destructive" size="compact">Destructive</Button>
        </div>
      </div>

      {/* Form Elements */}
      <div className="space-y-3">
        <h4 className="font-medium text-[var(--text-primary)]">Form Elements</h4>
        <div className="grid grid-cols-2 gap-4">
          <Input placeholder="Input field" />
          <Select>
            <option>Select option</option>
          </Select>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Checkbox id="checkbox" />
            <label htmlFor="checkbox" className="text-sm text-[var(--text-primary)]">Checkbox</label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="switch" />
            <label htmlFor="switch" className="text-sm text-[var(--text-primary)]">Switch</label>
          </div>
        </div>
      </div>

      {/* Badges */}
      <div className="space-y-3">
        <h4 className="font-medium text-[var(--text-primary)]">Badges</h4>
        <div className="flex flex-wrap gap-2">
          <Badge variant="default">Default</Badge>
          <Badge variant="blue">Blue</Badge>
          <Badge variant="green">Green</Badge>
          <Badge variant="orange">Orange</Badge>
          <Badge variant="purple">Purple</Badge>
        </div>
      </div>

      {/* Typography & Colors */}
      <div className="space-y-3">
        <h4 className="font-medium text-[var(--text-primary)]">Typography & Colors</h4>
        <div className="space-y-2">
          <p className="text-[var(--text-primary)]">Primary text color</p>
          <p className="text-[var(--text-secondary)]">Secondary text color</p>
          <p className="text-[var(--text-dimmed)]">Dimmed text color</p>
        </div>
      </div>

      {/* Surfaces */}
      <div className="space-y-3">
        <h4 className="font-medium text-[var(--text-primary)]">Surfaces</h4>
        <div className="grid grid-cols-3 gap-3">
          <div className="h-12 bg-[var(--bg-primary)] border border-[var(--border-default)] rounded flex items-center justify-center">
            <span className="text-xs text-[var(--text-secondary)]">Primary</span>
          </div>
          <div className="h-12 bg-[var(--bg-secondary)] border border-[var(--border-default)] rounded flex items-center justify-center">
            <span className="text-xs text-[var(--text-secondary)]">Secondary</span>
          </div>
          <div className="h-12 bg-[var(--bg-tertiary)] border border-[var(--border-default)] rounded flex items-center justify-center">
            <span className="text-xs text-[var(--text-secondary)]">Tertiary</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ThemesSection() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-2">Theme System</h2>
        <p className="text-[var(--text-secondary)]">
          Our design system supports 4 theme combinations: Light/Dark modes combined with Dashboard/Designer densities.
          Switch between themes to see how all components adapt.
        </p>
      </div>

      {/* Current Theme Display */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-[var(--text-primary)]">Current Theme</h3>
        
        <div className="bg-[var(--bg-secondary)] p-4 rounded-lg">
          <div className="text-sm text-[var(--text-secondary)] mb-2">
            Currently using: <strong className="text-[var(--text-primary)]">{theme.mode} + {theme.density}</strong>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
            {themeOptions.map((option) => (
              <div
                key={`${option.config.mode}-${option.config.density}`}
                className={`p-3 rounded border text-left ${
                  theme.mode === option.config.mode && theme.density === option.config.density
                    ? 'border-[var(--action-primary-bg)] bg-[var(--action-primary-bg)]/10'
                    : 'border-[var(--border-default)] opacity-50'
                }`}
              >
                <div className="font-medium text-[var(--text-primary)] mb-1">{option.label}</div>
                <div className="text-[var(--text-secondary)]">{option.description}</div>
              </div>
            ))}
          </div>
        </div>
        
        <p className="text-sm text-[var(--text-secondary)]">
          Use the segmented controls in the header above to switch between themes.
        </p>
      </div>

      {/* Theme Preview */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-[var(--text-primary)]">Live Preview</h3>
        <ThemePreview />
      </div>

      {/* CSS Variables Documentation */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-[var(--text-primary)]">CSS Variables</h3>
        <div className="bg-[var(--bg-secondary)] p-4 rounded-lg">
          <p className="text-sm text-[var(--text-secondary)] mb-3">
            The theme system uses CSS custom properties that automatically update based on the current theme:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
            <div>
              <h4 className="font-semibold text-[var(--text-primary)] mb-2">Colors</h4>
              <ul className="space-y-1 text-[var(--text-secondary)]">
                <li>--text-primary</li>
                <li>--text-secondary</li>
                <li>--text-dimmed</li>
                <li>--bg-primary</li>
                <li>--bg-secondary</li>
                <li>--bg-tertiary</li>
                <li>--border-default</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-[var(--text-primary)] mb-2">Spacing & Sizing</h4>
              <ul className="space-y-1 text-[var(--text-secondary)]">
                <li>--space-xs to --space-2xl</li>
                <li>--component-height-sm/md/lg</li>
                <li>--font-size-xs to --font-size-xl</li>
                <li>--icon-size-sm/md/lg</li>
                <li>--radius-sm/md/lg</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Usage Examples */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-[var(--text-primary)]">Usage Examples</h3>
        <div className="bg-[var(--bg-secondary)] p-4 rounded-lg">
          <div className="space-y-3 text-sm">
            <div>
              <h4 className="font-medium text-[var(--text-primary)]">CSS</h4>
              <code className="block mt-1 p-2 bg-[var(--bg-tertiary)] rounded text-[var(--text-secondary)]">
                background-color: var(--bg-primary);<br/>
                color: var(--text-primary);<br/>
                padding: var(--space-md);
              </code>
            </div>
            <div>
              <h4 className="font-medium text-[var(--text-primary)]">Tailwind</h4>
              <code className="block mt-1 p-2 bg-[var(--bg-tertiary)] rounded text-[var(--text-secondary)]">
                className="bg-[var(--bg-primary)] text-[var(--text-primary)]"
              </code>
            </div>
            <div>
              <h4 className="font-medium text-[var(--text-primary)]">Inline Styles</h4>
              <code className="block mt-1 p-2 bg-[var(--bg-tertiary)] rounded text-[var(--text-secondary)]">
                style={`{{ padding: 'var(--space-lg)' }}`}
              </code>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 