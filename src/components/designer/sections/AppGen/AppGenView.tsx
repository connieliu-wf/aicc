"use client";

import React, { useState } from 'react';
import LeftSidebar from './LeftSidebar';
import CanvasBar from './CanvasBar';
import CodeSection from './CodeSection';
import RightPanel from './RightPanel';

export default function AppGenView() {
  const [isAssistantOpen, setIsAssistantOpen] = useState(true);

  return (
    <div className="flex h-full bg-[var(--bg-primary)]">
      {/* Left Panel */}
      <LeftSidebar />
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Canvas Bar */}
        <CanvasBar
          onOpenAssistant={() => setIsAssistantOpen(true)}
          isAssistantOpen={isAssistantOpen}
        />
        
        {/* Code Section */}
        <CodeSection
          rightPanelOpen={isAssistantOpen}
          rightPanelWidth={320}
        />
      </div>
      
      {/* Right Panel */}
      {isAssistantOpen && (
        <RightPanel onClose={() => setIsAssistantOpen(false)} />
      )}
    </div>
  );
}
