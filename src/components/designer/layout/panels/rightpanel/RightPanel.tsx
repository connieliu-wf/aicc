"use client";

import React, { useState } from 'react';
import { useMode } from '@/context/ModeContext';
import { TabBar, TabBarItem } from '@/components/spring-ui/tab-bar';
import StyleTabContent from './StyleTabContent';
import SettingsTabContent from './SettingsTabContent';
import InteractionsTabContent from './InteractionsTabContent';
import { IconButton } from '@/components/spring-ui/iconButton';
import { 
  MoreIcon,
  ElementDivIcon,
  ElementPlusComponentIcon
} from '@/icons';

const RightPanel: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('style');

  return (
    <div className="w-[240px] h-[calc(100vh-35px)] bg-[var(--bg-primary)] border-l border-[var(--border-default)] flex flex-col">
      {/* Panel header */}
      <div className="flex items-center justify-between h-9 px-2 py-2">
        <div className="flex items-center gap-1">
          <IconButton 
            variant="ghost" 
            size="compact" 
            aria-label="Element div"
            className="h-4 w-4"
          >
            <ElementDivIcon size={16} />
          </IconButton>
          <h2 className="text-[var(--text-primary)] body-text">Element Properties</h2>
        </div>
        <div className="flex items-center gap-1 text-[var(--text-secondary)]">
          <IconButton 
            variant="ghost" 
            size="comfortable" 
            aria-label="More options"
            className="h-6 w-6 text-[var(--text-secondary)]"
          >
            <MoreIcon size={16} />
          </IconButton>
          <IconButton 
            variant="ghost" 
            size="comfortable" 
            aria-label="More options"
            className="h-6 w-6 text-[var(--text-secondary)]"
          >
            <ElementPlusComponentIcon size={16} />
          </IconButton>
        </div>
      </div>
      
      {/* Tab bar */}
      <div>
        <TabBar
          value={activeTab}
          onValueChange={setActiveTab}
        >
          <TabBarItem className="ml-2" value="style">Style</TabBarItem>
          <TabBarItem value="settings">Settings</TabBarItem>
          <TabBarItem value="interactions">Interactions</TabBarItem>
        </TabBar>
      </div>

      {/* Tab content */}
      <div className="flex-1 right-panel-content-wrapper">
        <div className="flex-1 right-panel-content">
          {activeTab === 'style' && <StyleTabContent />}
          {activeTab === 'settings' && <SettingsTabContent />}
          {activeTab === 'interactions' && <InteractionsTabContent />}
        </div>
      </div>

      <style jsx global>{`
        /* Custom scrollbar styles with absolute positioning */
        .right-panel-content-wrapper {
          position: relative;
          overflow: hidden;
        }
        
        .right-panel-content {
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          overflow-y: scroll;
          overflow-x: hidden;
        }
        
        /* Custom scrollbar styling */
        .right-panel-content::-webkit-scrollbar {
          width: 8px;
          background-color: transparent;
          position: absolute;
          right: 0;
        }
        
        .right-panel-content::-webkit-scrollbar-thumb {
          background-color: transparent;
          border-radius: 0px;
          transition: background-color 0.2s ease;
        }
        
        .right-panel-content:hover::-webkit-scrollbar-thumb {
          background-color: var(--component-scrollbar-thumb);
        }
        
        .right-panel-content::-webkit-scrollbar-track {
          background-color: transparent;
        }
        
        /* For Firefox */
        .right-panel-content {
          scrollbar-width: none; /* Hide the default scrollbar */
        }
        
        /* Add a custom scrollbar for Firefox that doesn't affect layout */
        @-moz-document url-prefix() {
          .right-panel-content-wrapper:hover::after {
            content: "";
            position: absolute;
            top: 0;
            right: 0;
            width: 8px;
            height: 100%;
            background-color: var(--component-scrollbar-thumb);
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

export default RightPanel; 