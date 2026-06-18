"use client";
import { ReactNode } from "react";
import { DashboardNav } from "@/components/dashboard/dashboard-nav";
import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar";

interface DashboardLayoutProps {
  children: ReactNode;
  selectedSection?: string;
  onSectionChange?: (section: string) => void;
}

export function DashboardLayout({ children, selectedSection, onSectionChange }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-primary)]">
      {/* Top Navigation */}
      <DashboardNav />
      
      {/* Main Content Area */}
      <div className="flex flex-1 justify-center">
        {/* Sidebar */}
        <DashboardSidebar selectedSection={selectedSection} onSectionChange={onSectionChange} />
        
        {/* Main Content with max-width constraint */}
        <div 
          className="bg-[var(--bg-primary)] overflow-auto"
          style={{ 
            maxWidth: '1040px',
            width: '100%'
          }}
        >
          <main>
            {children}
          </main>
        </div>
      </div>
    </div>
  );
} 