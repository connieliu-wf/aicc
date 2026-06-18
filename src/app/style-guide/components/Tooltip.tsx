import React from 'react';
import Tooltip from '@/components/spring-ui/tooltip';
import { Button } from '@/components/spring-ui/button';
import { HelpCircleIcon } from '@/icons/HelpCircleIcon';
import { InfoIcon } from '@/icons/InfoIcon';
import { SettingsIcon } from '@/icons/SettingsIcon';

export function TooltipExample() {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-medium mb-2">Tooltip</h2>
      <p className="mb-4 text-sm text-[var(--text-secondary)]">Informational text that appears when hovering over an element</p>
      
      <div className="p-8 bg-[var(--bg-primary)] border border-[var(--border-default)] rounded-lg space-y-12">
        {/* Basic Tooltip Examples */}
        <div>
          <h3 className="text-md font-medium mb-4">Basic Tooltips</h3>
          <div className="flex items-center gap-8">
            <Tooltip text="This is a tooltip for an icon">
              <div className="p-2 hover:bg-[var(--bg-raised)] rounded cursor-pointer transition-colors">
                <InfoIcon size={18} />
              </div>
            </Tooltip>
            
            <Tooltip text="Learn more about this feature">
              <div className="p-2 hover:bg-[var(--bg-raised)] rounded cursor-pointer transition-colors">
                <HelpCircleIcon size={18} />
              </div>
            </Tooltip>
            
            <Tooltip text="Adjust settings">
              <div className="p-2 hover:bg-[var(--bg-raised)] rounded cursor-pointer transition-colors">
                <SettingsIcon size={18} />
              </div>
            </Tooltip>
          </div>
        </div>

        {/* Tooltip with Button */}
        <div>
          <h3 className="text-md font-medium mb-4">Tooltip with Button</h3>
          <div className="flex items-center gap-6">
            <Tooltip text="Click to save your changes">
              <Button size="comfortable" variant="primary">Save</Button>
            </Tooltip>
            
            <Tooltip text="Cancel and return to previous screen">
              <Button size="comfortable" variant="outline">Cancel</Button>
            </Tooltip>
          </div>
        </div>

        {/* Tooltip with Text */}
        <div>
          <h3 className="text-md font-medium mb-4">Tooltip with Text</h3>
          <div className="flex items-center gap-2">
            <span className="text-sm">This feature is</span>
            <Tooltip text="This feature is currently in beta testing">
              <span className="text-[var(--action-primary-bg)] cursor-pointer">in beta</span>
            </Tooltip>
          </div>
        </div>

        {/* Tooltip Usage Guidelines */}
        <div>
          <h3 className="text-md font-medium mb-4">Usage Guidelines</h3>
          <div className="space-y-2 text-sm">
            <p className="text-[var(--text-secondary)]">• Use tooltips for additional information that doesn't fit in the UI</p>
            <p className="text-[var(--text-secondary)]">• Keep tooltip text concise and clear</p>
            <p className="text-[var(--text-secondary)]">• Don't put essential information only in tooltips</p>
            <p className="text-[var(--text-secondary)]">• Combine with icons to indicate more information is available</p>
          </div>
        </div>
      </div>
    </section>
  );
} 