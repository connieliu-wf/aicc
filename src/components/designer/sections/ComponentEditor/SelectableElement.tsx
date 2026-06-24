"use client";

import React, { useState, useCallback } from 'react';
import { useComponentEditor } from '@/context/ComponentEditorContext';

interface SelectableElementProps {
  children: React.ReactNode;
  /** A code marker to search for in the source (e.g. 'type="text"', 'className="step-indicator"') */
  codeMarker: string;
  /** Optional display name shown on hover */
  displayName?: string;
  /** Whether to wrap in a div or render inline */
  inline?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export default function SelectableElement({
  children,
  codeMarker,
  displayName,
  inline = false,
  className = '',
  style,
}: SelectableElementProps) {
  const { focusTextInCode } = useComponentEditor();
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    focusTextInCode(codeMarker);
  }, [codeMarker, focusTextInCode]);

  const Wrapper = inline ? 'span' : 'div';

  return (
    <Wrapper
      className={`relative cursor-pointer ${className}`}
      style={style}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Selection outline */}
      {isHovered && (
        <div
          className="absolute inset-0 pointer-events-none rounded"
          style={{
            outline: '2px solid rgba(59, 130, 246, 0.6)',
            outlineOffset: '2px',
          }}
        />
      )}
      
      {/* Tooltip */}
      {isHovered && displayName && (
        <div
          className="absolute -top-7 left-1/2 -translate-x-1/2 px-2 py-1 rounded text-[11px] font-medium whitespace-nowrap z-50"
          style={{
            backgroundColor: 'rgba(59, 130, 246, 0.9)',
            color: 'white',
          }}
        >
          {displayName}
        </div>
      )}
      
      {children}
    </Wrapper>
  );
}
