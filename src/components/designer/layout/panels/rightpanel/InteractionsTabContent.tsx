"use client";

import React from 'react';

const InteractionsTabContent: React.FC = () => {
  return (
    <div className="p-4">
      <h3 className="text-sm text-[var(--text-secondary)] mb-3">Element Interactions</h3>
      
      <div className="space-y-4 text-[var(--text-secondary)] text-xs">
        <div className="flex flex-col gap-2">
          <p className="text-[var(--text-dimmed)] text-xs">Create interactions for this element to respond to events like clicks, mouse movements, and scroll positions.</p>
          
          <button className="bg-[var(--action-secondary-bg)] text-[var(--text-secondary)] text-xs py-1 px-2 rounded-sm border border-[var(--border-default)] hover:bg-[var(--action-secondary-bg-hover)] mt-2">
            + Add Element Trigger
          </button>
        </div>
        
        <div className="mt-4 pt-4 border-t border-[var(--border-default)]">
          <h4 className="text-sm text-[var(--text-secondary)] mb-2">Page Load Actions</h4>
          <p className="text-[var(--text-dimmed)] text-xs">Add animations or effects that occur when the page loads.</p>
          
          <button className="bg-[var(--action-secondary-bg)] text-[var(--text-secondary)] text-xs py-1 px-2 rounded-sm border border-[var(--border-default)] hover:bg-[var(--action-secondary-bg-hover)] mt-2">
            + Add Page Load Animation
          </button>
        </div>
        
        <div className="mt-4 pt-4 border-t border-[var(--border-default)]">
          <h4 className="text-sm text-[var(--text-secondary)] mb-2">Scroll Effects</h4>
          <p className="text-[var(--text-dimmed)] text-xs">Create effects based on scroll position.</p>
          
          <button className="bg-[var(--action-secondary-bg)] text-[var(--text-secondary)] text-xs py-1 px-2 rounded-sm border border-[var(--border-default)] hover:bg-[var(--action-secondary-bg-hover)] mt-2">
            + Add Scroll Effect
          </button>
        </div>
      </div>
    </div>
  );
};

export default InteractionsTabContent; 