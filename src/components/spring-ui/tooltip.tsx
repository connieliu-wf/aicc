"use client";

import React from 'react';

interface TooltipProps {
  text: string;
  children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ text, children }) => {
  return (
    <div className="group relative flex">
      {children}
      <div className="absolute left-[35px] top-1/2 transform -translate-y-1/2 hidden group-hover:block z-50">
        <div className="flex items-center">
          <div className="w-0 h-0 border-t-[6px] border-t-transparent border-r-[6px] border-r-[var(--bg-tertiary)] border-b-[6px] border-b-transparent"></div>
          <div className="bg-[var(--bg-tertiary)] text-[var(--text-primary)] body-text rounded whitespace-nowrap shadow-[var(--shadow-tooltip)] [.theme-designer_&]:p-2 [.theme-dashboard_&]:p-3">
            {text}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tooltip; 