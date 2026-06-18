"use client";

import React from 'react';
import { usePages } from '@/context/PagesContext';
import { palette, useResponsive } from '@/components/designer/canvas-content/shared';
import {
  HomePage,
  ContactPage,
  StylesDraftPage,
  TestimonialsPage,
  PasswordPage,
  NotFoundPage
} from '@/components/designer/canvas-content/pages';

const Canvas: React.FC = () => {
  const { selectedPage } = usePages();

  // Custom design system (inline) — intentionally not using existing components or theme variables
  // Make layout responsive to the Canvas container width (not the window)
  const containerElRef = React.useRef<HTMLDivElement | null>(null);
  const [containerWidth, setContainerWidth] = React.useState<number>(1280);
  React.useEffect(() => {
    const el = containerElRef.current;
    if (!el) return;
    // Initialize
    setContainerWidth(el.clientWidth);
    // Observe container width changes (e.g., when user drags CanvasViewport)
    let ro: any = null;
    if (typeof window !== 'undefined' && (window as any).ResizeObserver) {
      ro = new (window as any).ResizeObserver((entries: any[]) => {
        for (const entry of entries) {
          const w = entry.contentRect?.width ?? el.clientWidth;
          setContainerWidth(w);
        }
      });
      ro.observe(el);
    }
    // Fallback on window resize if ResizeObserver isn't available
    const onWinResize = () => setContainerWidth(el.clientWidth);
    window.addEventListener('resize', onWinResize);
    return () => {
      window.removeEventListener('resize', onWinResize);
      if (ro) ro.disconnect();
    };
  }, []);
  
  const { isMobile, isTablet } = useResponsive(containerWidth);

  const renderPageContent = () => {
    switch (selectedPage) {
      case '/':
        return <HomePage isMobile={isMobile} isTablet={isTablet} />;
      case '/contact':
        return <ContactPage isMobile={isMobile} />;
      case '/styles':
        return <StylesDraftPage isMobile={isMobile} />;
      case '/testimonials':
        return <TestimonialsPage isMobile={isMobile} />;
      case '/password':
        return <PasswordPage isMobile={isMobile} />;
      case '/404':
        return <NotFoundPage isMobile={isMobile} />;
      default:
        return <HomePage isMobile={isMobile} isTablet={isTablet} />;
    }
  };

  return (
    <div 
      ref={containerElRef}
      className="absolute inset-0 w-full h-full overflow-auto"
      style={{ 
        backgroundColor: palette.bg,
        color: palette.text,
        fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Helvetica Neue, Arial, sans-serif'
      }}
    >
      {renderPageContent()}
    </div>
  );
};

export default Canvas; 