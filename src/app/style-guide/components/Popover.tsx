import React from 'react';
import { Popover, PopoverTrigger, PopoverContent } from '@/components/spring-ui/popover';
import { Button } from '@/components/spring-ui/button';
import { Input } from '@/components/spring-ui/input';
import { Badge } from '@/components/spring-ui/badge';
import { Switch } from '@/components/spring-ui/switch';
import { InfoIcon } from '@/icons/InfoIcon';
import { SettingsIcon } from '@/icons/SettingsIcon';
import { EditIcon } from '@/icons/EditIcon';
import { UserIcon } from '@/icons/UserIcon';
import { HelpCircleIcon } from '@/icons/HelpCircleIcon';
import { DeleteIcon } from '@/icons';
import { AddIcon } from '@/icons';

export function PopoverExample() {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-medium mb-2">Popover</h2>
      <p className="mb-4 text-sm text-[var(--text-secondary)]">Small contextual overlay that displays when users interact with a trigger element</p>
      
      <div className="p-8 bg-[var(--bg-primary)] border border-[var(--border-default)] rounded-lg space-y-12">
        {/* Basic Popover */}
        <div>
          <h3 className="text-md font-medium mb-4">Basic Popover</h3>
          <div className="flex gap-6">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="default" size="comfortable">Open Popover</Button>
              </PopoverTrigger>
              <PopoverContent>
                <div className="flex flex-col gap-2">
                  <p className="body-text">This is a basic popover with simple content.</p>
                  <p className="text-xs text-[var(--text-secondary)]">It can contain any type of content you need.</p>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
        
        {/* Popover with Header */}
        <div>
          <h3 className="text-md font-medium mb-4">Popover with Header</h3>
          <div className="flex gap-6">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" size="comfortable">
                  <SettingsIcon size={14} className="mr-1.5" />
                  Settings
                </Button>
              </PopoverTrigger>
              <PopoverContent 
                title="Settings"
                headerIcons={[
                  <HelpCircleIcon key="help" size={16} />,
                  <AddIcon key="add" size={16} />,
                  <DeleteIcon key="delete" size={16} />
                ]}
              >
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="body-text">Dark mode</span>
                    <Switch defaultChecked hideLabel aria-label="Dark mode" sizeVariant="compact" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="body-text">Notifications</span>
                    <Switch hideLabel aria-label="Notifications" sizeVariant="compact" />
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
        
        {/* Popover with Actions */}
        <div>
          <h3 className="text-md font-medium mb-4">Popover with Actions</h3>
          <div className="flex gap-6">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost" size="comfortable">
                  <EditIcon size={14} className="mr-1.5" />
                  Edit Profile
                </Button>
              </PopoverTrigger>
              <PopoverContent 
                title="Edit Name"
                primaryAction={{
                  label: "Save",
                  onClick: () => console.log("Save clicked")
                }}
                secondaryAction={{
                  label: "Cancel",
                  onClick: () => console.log("Cancel clicked")
                }}
                leftAction={{
                  label: "Help",
                  onClick: () => console.log("Help clicked"),
                  variant: "ghost"
                }}
              >
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-[var(--text-secondary)]">Name</label>
                  <Input defaultValue="Alex Johnson" />
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
        
        {/* Complex Popover Example */}
        <div>
          <h3 className="text-md font-medium mb-4">Complex Popover Example</h3>
          <div className="flex gap-6">
            <Popover>
              <PopoverTrigger asChild>
                <div className="p-2 rounded border border-[var(--border-default)] hover:bg-[var(--bg-raised)] cursor-pointer">
                  <UserIcon size={18} />
                </div>
              </PopoverTrigger>
              <PopoverContent 
                title="User Badge"
                primaryAction={{
                  label: "View Profile",
                  variant: "subtle",
                  onClick: () => console.log("View Profile clicked")
                }}
                leftAction={{
                  label: "Delete",
                  variant: "destructive",
                  onClick: () => console.log("Delete clicked")
                }}
                headerIcons={[
                  <EditIcon key="edit" size={16} />
                ]}
              >
                <div className="flex flex-col items-center text-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-[var(--action-primary-bg)] flex items-center justify-center text-white">
                    AJ
                  </div>
                  <span className="font-medium">Alex Johnson</span>
                  <span className="text-xs text-[var(--text-secondary)]">Product Designer</span>
                  <div className="flex gap-1 mt-1">
                    <Badge variant="blue" size="compact">Pro</Badge>
                    <Badge variant="green" size="compact">Active</Badge>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
        
        {/* Usage Guidelines */}
        <div>
          <h3 className="text-md font-medium mb-4">Usage Guidelines</h3>
          <div className="space-y-2 text-sm">
            <p className="text-[var(--text-secondary)]">• Use popovers for contextual interactions that don't require full modals</p>
            <p className="text-[var(--text-secondary)]">• Keep popover content brief and focused</p>
            <p className="text-[var(--text-secondary)]">• Popovers should be dismissible by clicking outside or pressing Escape</p>
            <p className="text-[var(--text-secondary)]">• Position popovers close to their trigger elements</p>
            <p className="text-[var(--text-secondary)]">• Use headers and footers when additional structure is needed</p>
            <p className="text-[var(--text-secondary)]">• Header icons can be used for common actions like help, add, or delete</p>
            <p className="text-[var(--text-secondary)]">• Left footer actions can be used for secondary operations like "Learn More" or destructive actions</p>
          </div>
        </div>
      </div>
    </section>
  );
} 