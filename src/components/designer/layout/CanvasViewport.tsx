"use client";

import React from "react";
import { useCanvasSelection, BREAKPOINT_WIDTH, type Breakpoint } from "@/context/CanvasSelectionContext";

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}

export default function CanvasViewport({ children }: { children: React.ReactNode }) {
  const {
    canvasWidth,
    setCanvasWidth,
    setIsResizing,
    currentBreakpoint,
    setCurrentBreakpoint,
    isResizing,
  } = useCanvasSelection();

  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const startXRef = React.useRef<number>(0);
  const startWidthRef = React.useRef<number>(canvasWidth);
  const activeSideRef = React.useRef<"left" | "right" | null>(null);
  const [hoverSide, setHoverSide] = React.useState<"left" | "right" | null>(null);

  const presetWidths = Object.values(BREAKPOINT_WIDTH);
  const absoluteMin = Math.min(...presetWidths); // 320
  const absoluteMax = Math.max(...presetWidths); // 1280

  // Drag bounds per current breakpoint (inclusive)
  // Desktop: 1280 down to 991
  // Tablet: 990 down to 767
  // Mobile Landscape: 767 down to 479
  // Mobile: 478 down to 320
  const getDragBounds = React.useCallback((): { min: number; max: number } => {
    switch (currentBreakpoint) {
      case "desktop":
        return { min: 991, max: BREAKPOINT_WIDTH.desktop };
      case "tablet":
        return { min: 767, max: 990 };
      case "mobile-landscape":
        return { min: 479, max: 767 };
      case "mobile":
      default:
        return { min: 320, max: 478 };
    }
  }, [currentBreakpoint]);

  // Stable wrappers with refs to avoid stale closures during add/remove
  const onPointerMoveRef = React.useRef<(e: PointerEvent) => void>(() => {});
  const stopResizeRef = React.useRef<() => void>(() => {});
  const handleMove = React.useCallback((e: PointerEvent) => {
    onPointerMoveRef.current(e);
  }, []);
  const handleUp = React.useCallback(() => {
    stopResizeRef.current();
  }, []);

  React.useEffect(() => {
    onPointerMoveRef.current = (e: PointerEvent) => {
      const delta = e.clientX - startXRef.current;
      const sign = activeSideRef.current === "left" ? -1 : 1;
      const { min, max } = getDragBounds();
      const next = clamp(startWidthRef.current + delta * sign, min, max);
      setCanvasWidth(next);
    };
  }, [getDragBounds, setCanvasWidth]);

  React.useEffect(() => {
    stopResizeRef.current = () => {
      setIsResizing(false);
      activeSideRef.current = null;
      document.body.style.userSelect = "";
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerup", handleUp);
      // Ensure final width is clamped to active breakpoint range; persist exact
      const { min, max } = getDragBounds();
      setCanvasWidth(prev => clamp(prev, min, max));
    };
  }, [getDragBounds, handleMove, handleUp, setIsResizing, setCanvasWidth]);

  const beginResize = (side: "left" | "right") => (e: React.PointerEvent) => {
    e.preventDefault();
    activeSideRef.current = side;
    startXRef.current = e.clientX;
    startWidthRef.current = canvasWidth;
    setIsResizing(true);
    document.body.style.userSelect = "none";
    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerup", handleUp);
  };

  return (
    <div
      ref={containerRef}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "stretch",
        width: "100%",
        height: "100%",
        overflow: "auto",
        background: "var(--bg-tertiary)",
      }}
    >
      <div
        style={{
          position: "relative",
          width: canvasWidth,
          minHeight: "100%",
          background: "transparent",
          boxSizing: "content-box",
        }}
      >
        {/* Hover edge indicators */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: 3,
            background: "var(--action-primary-bg)",
            opacity: hoverSide !== null || isResizing ? 1 : 0,
            transition: "opacity 120ms ease",
            pointerEvents: "none",
            zIndex: 6,
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            width: 3,
            background: "var(--action-primary-bg)",
            opacity: hoverSide !== null || isResizing ? 1 : 0,
            transition: "opacity 120ms ease",
            pointerEvents: "none",
            zIndex: 6,
          }}
        />
        {/* Left drag handle */}
        <div
          onPointerDown={beginResize("left")}
          onMouseEnter={() => setHoverSide("left")}
          onMouseLeave={() => setHoverSide(null)}
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: 8,
            cursor: "ew-resize",
            zIndex: 5,
          }}
        />
        {/* Right drag handle */}
        <div
          onPointerDown={beginResize("right")}
          onMouseEnter={() => setHoverSide("right")}
          onMouseLeave={() => setHoverSide(null)}
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            width: 8,
            cursor: "ew-resize",
            zIndex: 5,
          }}
        />
        <div style={{ width: "100%", height: "100%" }}>{children}</div>
      </div>
    </div>
  );
}


