"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "@/components/designer/layout/Navbar";
import LeftSidebar from "@/components/designer/layout/LeftSidebar";
import RightPanel from "@/components/designer/layout/panels/rightpanel/RightPanel";
import Canvas from "@/components/designer/layout/Canvas";
import CanvasBar from "@/components/designer/layout/CanvasBar";
import CanvasViewport from "@/components/designer/layout/CanvasViewport";
import CMSSection from "@/components/designer/sections/CMSSection";
import InsightsSection from "@/components/designer/sections/InsightsSection";
import { NavigatorProvider } from "@/context/NavigatorContext";
import { PagesProvider } from "@/context/PagesContext";
import { CanvasSelectionProvider } from "@/context/CanvasSelectionContext";
import { useApp } from "@/context/AppContext";

interface LayoutContentProps {
  children?: React.ReactNode;
}

function LayoutContentInner({ children }: LayoutContentProps) {
  const pathname = usePathname();
  const { currentSection, isStyleGuideOpen } = useApp();
  
  // Check if we're on the dashboard route
  if (pathname?.startsWith('/dashboard')) {
    return children;
  }
  
  // Check if we're on the style guide route
  if (pathname?.startsWith('/style-guide')) {
    return (
      <div className="flex h-screen flex-col">
        <div className="flex-1">
          {children}
        </div>
      </div>
    );
  }
  
  // Check if the current path is the style guide (legacy check)
  if (isStyleGuideOpen) {
    return (
      <div className="flex h-screen flex-col">
        <Navbar />
        <div className="flex-1">
          {children}
        </div>
      </div>
    );
  }
  
  // Render different layouts based on section
  return (
    <div className="flex h-screen flex-col">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        {currentSection === 'home' && (
          <>
            <LeftSidebar />
            <div className="flex-1 flex flex-col bg-[var(--bg-secondary)]">
              <CanvasBar />
              <main className="flex-1 relative">
                <CanvasViewport>
                  <Canvas />
                </CanvasViewport>
              </main>
            </div>
            <RightPanel />
          </>
        )}
        
        {currentSection === 'cms' && (
          <main className="flex-1 bg-[var(--bg-primary)]">
            <CMSSection />
          </main>
        )}
        
        {currentSection === 'insights' && (
          <main className="flex-1 bg-[var(--bg-primary)]">
            <InsightsSection />
          </main>
        )}
      </div>
    </div>
  );
}

export function LayoutContent(props: LayoutContentProps) {
  return (
    <NavigatorProvider>
      <PagesProvider>
        <CanvasSelectionProvider>
          <LayoutContentInner {...props} />
        </CanvasSelectionProvider>
      </PagesProvider>
    </NavigatorProvider>
  );
}
