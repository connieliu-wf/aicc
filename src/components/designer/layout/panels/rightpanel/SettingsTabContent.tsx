"use client";

import React from 'react';

const SettingsTabContent: React.FC = () => {
  return (
    <div className="p-4">
      <h3 className="text-sm text-[var(--text-secondary)] mb-3">Element Settings</h3>
      
      <div className="space-y-4 text-[var(--text-secondary)] text-xs">
        <div className="flex flex-col gap-2">
          <label className="font-medium">Element ID</label>
          <input 
            type="text" 
            className="bg-[var(--input-bg)] border border-[var(--input-border)] rounded-sm px-2 py-1 text-[var(--text-primary)] text-xs w-full"
            placeholder="element-id"
          />
        </div>
        
        <div className="flex flex-col gap-2">
          <label className="font-medium">Responsive Display</label>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="show-mobile" className="h-3 w-3 accent-[var(--blue-bg)]" />
            <label htmlFor="show-mobile" className="text-xs">Show on mobile</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="show-tablet" className="h-3 w-3 accent-[var(--blue-bg)]" />
            <label htmlFor="show-tablet" className="text-xs">Show on tablet</label>
          </div>
        </div>
        
        <div className="flex flex-col gap-2">
          <label className="font-medium">Attributes</label>
          <button className="bg-[var(--action-secondary-bg)] text-[var(--text-secondary)] text-xs py-1 px-2 rounded-sm border border-[var(--border-default)] hover:bg-[var(--action-secondary-bg-hover)]">
            + Add Custom Attribute
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsTabContent; 