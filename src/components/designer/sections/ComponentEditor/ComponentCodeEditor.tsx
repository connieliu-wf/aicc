"use client";

import React, { useRef, useEffect } from 'react';
import { Highlight, themes } from 'prism-react-renderer';

interface ComponentCodeEditorProps {
  code: string;
  highlightedLine?: number | null;
  highlightVersion?: number;
}

export default function ComponentCodeEditor({ code, highlightedLine, highlightVersion = 0 }: ComponentCodeEditorProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const lastVersionRef = useRef(-1);

  useEffect(() => {
    if (highlightedLine == null || highlightVersion === lastVersionRef.current) return;
    lastVersionRef.current = highlightVersion;

    requestAnimationFrame(() => {
      const container = scrollRef.current;
      if (!container) return;
      const target = container.querySelector<HTMLElement>('[data-highlighted="true"]');
      if (!target) return;

      const containerRect = container.getBoundingClientRect();
      const targetRect = target.getBoundingClientRect();
      const scrollTop = container.scrollTop;
      const absoluteTop = targetRect.top - containerRect.top + scrollTop;
      const offset = containerRect.height * 0.35;
      container.scrollTo({ top: Math.max(0, absoluteTop - offset), behavior: 'smooth' });
    });
  }, [highlightedLine, highlightVersion, code]);

  return (
    <div
      ref={scrollRef}
      className="h-full overflow-y-auto bg-[var(--bg-primary)]"
    >
      <Highlight
        code={code}
        language="tsx"
        theme={{
          ...themes.nightOwl,
          plain: { ...themes.nightOwl.plain, backgroundColor: 'transparent' },
        }}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={`${className} text-[13px] leading-[20px] p-4 m-0`}
            style={{ ...style, fontFamily: 'Roboto Mono, monospace', overflow: 'visible' }}
          >
            {tokens.map((line, index) => {
              const lineNumber = index + 1;
              const isHighlighted = highlightedLine === lineNumber;
              const { key: lineKey, ...lineProps } = getLineProps({
                line,
                key: index,
              });
              return (
                <div
                  key={lineKey ?? index}
                  {...lineProps}
                  className="table-row"
                  data-highlighted={isHighlighted || undefined}
                  style={
                    isHighlighted
                      ? {
                          backgroundColor: 'rgba(255, 200, 50, 0.12)',
                          transition: 'background-color 0.3s ease',
                        }
                      : undefined
                  }
                >
                  <span
                    className="table-cell pr-4 text-right select-none w-[1%] whitespace-nowrap"
                    style={{
                      color: isHighlighted
                        ? 'rgba(255, 200, 50, 0.7)'
                        : undefined,
                      opacity: isHighlighted ? 1 : 0.5,
                    }}
                  >
                    {lineNumber}
                  </span>
                  <span className="table-cell">
                    {line.map((token, tokenIndex) => {
                      const { key: tokenKey, ...tokenProps } = getTokenProps({
                        token,
                        key: tokenIndex,
                      });
                      return <span key={tokenKey ?? tokenIndex} {...tokenProps} />;
                    })}
                  </span>
                </div>
              );
            })}
          </pre>
        )}
      </Highlight>
    </div>
  );
}
