"use client";

import React, { useRef, useEffect } from 'react';
import PanelHeader from './PanelHeader';

interface PanelProps {
  title: string;
  isOpen: boolean;
  children?: React.ReactNode;
  onClose?: () => void;
  customHeader?: React.ReactNode;
  headerAction?: React.ReactNode;
  headerPaddingLeft?: string;
  headerPaddingRight?: string;
}

const Panel: React.FC<PanelProps> = ({ title, isOpen, children, onClose, customHeader, headerAction, headerPaddingLeft, headerPaddingRight }) => {
  const panelRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const selectInteractionTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  useEffect(() => {
    // Track Select interactions to prevent immediate panel closing
    const handleSelectInteraction = () => {
      // Clear any existing timeout
      if (selectInteractionTimeoutRef.current) {
        clearTimeout(selectInteractionTimeoutRef.current);
      }
      
      // Set a flag that prevents closing for a short time (longer to account for Select animation)
      selectInteractionTimeoutRef.current = setTimeout(() => {
        selectInteractionTimeoutRef.current = null;
      }, 300);
    };
    
    // Listen for clicks on Select triggers within the panel
    const handlePanelMouseDown = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      
      // Check if this is a Select-related click
      if (target.closest('[data-radix-select-trigger]') ||
          target.closest('[data-select-wrapper]') ||
          target.closest('[data-radix-select-content]')) {
        handleSelectInteraction();
      }
    };
    
    if (panelRef.current && isOpen) {
      panelRef.current.addEventListener('mousedown', handlePanelMouseDown, true);
    }
    
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      
      // FIRST AND MOST IMPORTANT: If click is within the panel header, NEVER close
      // This includes the Select component, so any click in the header area won't close the panel
      // Check both headerRef and the actual DOM to be absolutely sure
      if (headerRef.current) {
        // Check if target is contained in the header
        if (headerRef.current.contains(target)) {
          return;
        }
        // Also check if the target itself IS the header or any of its children
        let current: HTMLElement | null = target;
        while (current && current !== document.body) {
          if (current === headerRef.current || headerRef.current.contains(current)) {
            return;
          }
          current = current.parentElement;
        }
      }
      
      // Check if the Audits Panel Select is open (global flag)
      if (typeof window !== 'undefined' && (window as any).__auditsPanelSelectOpen) {
        return;
      }
      
      // If there was a recent Select interaction, don't close
      if (selectInteractionTimeoutRef.current) {
        return;
      }
      
      // Check if the click was on a Radix Select portal (dropdown menu)
      const radixPortal = document.querySelector('[data-radix-portal]');
      if (radixPortal && radixPortal.contains(target)) {
        return;
      }
      
      // Check if a Select dropdown is currently open
      const selectTrigger = document.querySelector('[data-radix-select-trigger][data-state="open"]');
      if (selectTrigger) {
        return;
      }
      
      // Helper function to check if element is a Select trigger or inside one
      const isSelectRelated = (el: HTMLElement | null): boolean => {
        if (!el) return false;
        
        // Check the element itself and all ancestors
        let current: HTMLElement | null = el;
        while (current) {
          // Check for Select trigger
          if (current.hasAttribute('data-radix-select-trigger') ||
              current.getAttribute('role') === 'combobox' ||
              current.closest('[data-radix-select-trigger]')) {
            return true;
          }
          
          // Check for Select content
          if (current.hasAttribute('data-radix-select-content') ||
              current.getAttribute('role') === 'listbox' ||
              current.closest('[data-radix-select-content]') ||
              current.closest('[data-radix-select-viewport]') ||
              current.closest('[data-radix-popper-content-wrapper]')) {
            return true;
          }
          
          current = current.parentElement;
        }
        
        return false;
      };
      
      // Check if the click is on Select-related elements
      if (isSelectRelated(target)) {
        return;
      }
      
      // Check if click is on a Select wrapper (data attribute added in AuditsPanel)
      if (target.closest('[data-select-wrapper]')) {
        return;
      }
      
      // Check if any Select trigger exists within the panel and if the click is on/inside it
      // This is CRITICAL - must check ALL Select triggers, not just open ones
      if (panelRef.current) {
        const selectTriggers = panelRef.current.querySelectorAll('[data-radix-select-trigger]');
        for (const trigger of selectTriggers) {
          // Check if the target is the trigger itself or any child of it
          if (trigger === target || trigger.contains(target)) {
            return;
          }
          // Also check the reverse - if trigger is inside target (shouldn't happen but be safe)
          if (target.contains(trigger)) {
            return;
          }
        }
        
        // Also check all buttons with role="combobox" which is what Select trigger is
        const comboboxButtons = panelRef.current.querySelectorAll('button[role="combobox"]');
        for (const button of comboboxButtons) {
          if (button === target || button.contains(target) || target.contains(button)) {
            return;
          }
        }
      }
      
      // Check if target or any parent has data-radix-select-trigger attribute
      let checkTarget: HTMLElement | null = target;
      while (checkTarget && checkTarget !== document.body) {
        if (checkTarget.hasAttribute('data-radix-select-trigger') || 
            checkTarget.getAttribute('role') === 'combobox') {
          return;
        }
        checkTarget = checkTarget.parentElement;
      }
      
      // Now check if the click was outside the panel
      if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
        // Check if the click was on the sidebar (we don't want to close if clicking on the sidebar)
        const leftSidebar = document.querySelector('.left-sidebar');
        if (leftSidebar && leftSidebar.contains(event.target as Node)) {
          return;
        }
        
        if (onClose) {
          onClose();
        }
      }
    };
    
    if (isOpen) {
      // Use mousedown in capture phase - this fires before most other handlers
      document.addEventListener('mousedown', handleClickOutside, true);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside, true);
      if (panelRef.current) {
        panelRef.current.removeEventListener('mousedown', handlePanelMouseDown, true);
      }
      if (selectInteractionTimeoutRef.current) {
        clearTimeout(selectInteractionTimeoutRef.current);
      }
    };
  }, [isOpen, onClose]);
  
  if (!isOpen) return null;
  
  return (
    <div 
      ref={panelRef}
      className="fixed left-10 top-10 h-[calc(100vh-35px)] w-[248px] bg-[var(--bg-primary)] border-r border-[var(--border-default)] z-10 overflow-hidden flex flex-col"
      style={{
        boxShadow: '0px 4px 8px 0px rgba(0, 0, 0, 0.1)',
        animation: 'panelSlideIn 0.15s ease-out forwards'
      }}
    >

      <div ref={headerRef}>
        {customHeader ||  
      <PanelHeader 
        title={title} 
        onClose={onClose} 
        headerAction={headerAction}
        paddingLeft={headerPaddingLeft}
        paddingRight={headerPaddingRight}
      />}
      </div>
      <div className="flex-1 panel-content-wrapper">
        <div className="flex-1 w-full panel-content">
          {children || (
            <div className="text-[var(--text-secondary)] body-text flex flex-col gap-2">
              <p>This is the {title} panel.</p>
              <p>Content for this panel will be displayed here.</p>
            </div>
          )}
        </div>
      </div>
      <style jsx global>{`
        @keyframes panelSlideIn {
          from {
            transform: translateX(-20px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        /* Custom scrollbar styles with absolute positioning */
        .panel-content-wrapper {
          position: relative;
          overflow: hidden;
        }
        
        .panel-content {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          overflow-y: scroll;
          overflow-x: hidden;
        }
        
        /* Custom scrollbar styling */
        .panel-content::-webkit-scrollbar {
          width: 8px;
          background-color: transparent;
          position: absolute;
          right: 0;
        }
        
        .panel-content::-webkit-scrollbar-thumb {
          background-color: transparent;
          border-radius: 0px;
          transition: background-color 0.2s ease;
        }
        
        .panel-content:hover::-webkit-scrollbar-thumb {
          background-color: rgba(69, 69, 69, 0.7);
        }
        
        .panel-content::-webkit-scrollbar-track {
          background-color: transparent;
        }
        
        /* For Firefox */
        .panel-content {
          scrollbar-width: none; /* Hide the default scrollbar */
        }
        
        /* Add a custom scrollbar for Firefox that doesn't affect layout */
        @-moz-document url-prefix() {
          .panel-content-wrapper:hover::after {
            content: "";
            position: absolute;
            top: 0;
            right: 0;
            width: 8px;
            height: 100%;
            background-color: rgba(69, 69, 69, 0.7);
            z-index: 100;
            opacity: 0.7;
            border-radius: 0px;
            pointer-events: none;
          }
        }
      `}</style>
    </div>
  );
};

export default Panel; 