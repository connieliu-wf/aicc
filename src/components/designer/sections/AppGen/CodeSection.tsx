"use client";

import React, { useMemo, useState } from 'react';
import { Button } from '@/components/spring-ui/button';
import { IconButton } from '@/components/spring-ui/iconButton';
import { TabBar, TabBarItem } from '@/components/spring-ui/tab-bar';
import {
  ChevronSmallRightIcon,
  ChevronSmallDownIcon,
  CodeIcon,
  PreviewIcon,
  ArrowRightIcon,
  SettingsIcon,
  ChevronSmallUpIcon,
  EasingPlayIcon,
  EasingPauseIcon,
  DownloadIcon,
  CopyIcon
} from '@/icons';
import { Highlight, themes } from 'prism-react-renderer';

const FOOTER_COLLAPSED_HEIGHT = 48;
const FOOTER_EXPANDED_HEIGHT = 240;

interface FooterBarProps {
  rightOffset: number;
}

function FooterBar({ rightOffset }: FooterBarProps) {
  const [expanded, setExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState<'dev-server' | 'terminal' | 'deployment'>('dev-server');
  const logs = useMemo(
    () => Array.from({ length: 18 }, (_, index) => `> Log entry ${index + 1}: Code generation output...`),
    []
  );

  return (
    <div
      className="fixed bottom-0 border-t border-[var(--border-default)] bg-[var(--bg-primary)] transition-[height] duration-300 ease-out"
      style={{
        height: expanded ? FOOTER_EXPANDED_HEIGHT : FOOTER_COLLAPSED_HEIGHT,
        left: '40px',
        right: `${rightOffset}px`
      }}
    >
      <div className="h-12 px-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4 flex-1 min-w-0">
          <TabBar
            value={activeTab}
            onValueChange={(value) => setActiveTab(value as typeof activeTab)}
            fullWidth={false}
            className="w-fit border-b-0"
          >
            <TabBarItem value="dev-server">Dev Server</TabBarItem>
            <TabBarItem value="terminal">Terminal</TabBarItem>
            <TabBarItem value="deployment">Deployment</TabBarItem>
          </TabBar>
        </div>

        <IconButton
          variant="ghost"
          size="comfortable"
          aria-label={expanded ? 'Collapse footer bar' : 'Expand footer bar'}
          onClick={() => setExpanded((prev) => !prev)}
        >
          {expanded ? <ChevronSmallDownIcon size={16} /> : <ChevronSmallUpIcon size={16} />}
        </IconButton>
      </div>

      {expanded && (
        <div className="px-4 pb-3">
          <div className="bg-[var(--bg-tertiary)] border border-[var(--border-default)] rounded-[var(--radius-md)] overflow-hidden font-mono text-xs leading-relaxed text-[var(--text-secondary)]">
            <div className="max-h-[168px] overflow-auto px-3 py-2 space-y-1">
              {logs.map((entry, index) => (
                <div key={index}>{entry}</div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function CodeSection({ rightPanelOpen = true, rightPanelWidth = 320 }: { rightPanelOpen?: boolean; rightPanelWidth?: number }) {
  const [activeTab, setActiveTab] = useState('code');
  const [isExpanded, setIsExpanded] = useState(true);

  const tabs = [
    { id: 'code', label: 'Code', icon: <CodeIcon size={16} /> },
    { id: 'preview', label: 'Preview', icon: <PreviewIcon size={16} /> }
  ];

  const codeContent = `// Pricing Calculator Component
import React, { useState } from 'react';

const PricingCalculator = () => {
  const [selectedPlan, setSelectedPlan] = useState('basic');
  const [addOns, setAddOns] = useState([]);
  const [billingCycle, setBillingCycle] = useState('monthly');

  const plans = {
    basic: { monthly: 29, yearly: 290 },
    pro: { monthly: 59, yearly: 590 },
    enterprise: { monthly: 99, yearly: 990 }
  };

  const calculateTotal = () => {
    const basePrice = plans[selectedPlan][billingCycle];
    const addOnPrice = addOns length * 10;
    return basePrice + addOnPrice;
  };

  return (
    <div className="pricing-calculator">
      <h2>Choose Your Plan</h2>
      {/* Plan selection UI */}
      <div className="total-price">
        Total: \${calculateTotal()}/{billingCycle === 'monthly' ? 'month' : 'year'}
      </div>
    </div>
  );
};

export default PricingCalculator;`;

  return (
    <div className="flex-1 flex flex-col">
      {/* Code Editor */}
      <div className="flex-1">
        <Highlight code={codeContent} language="jsx" theme={{ ...themes.nightOwl, plain: { ...themes.nightOwl.plain, backgroundColor: 'transparent' } }}>
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={`${className} text-sm font-mono leading-relaxed overflow-auto h-full bg-[var(--bg-primary)] p-4 rounded-md shadow-[var(--shadow-input)]`} style={{ ...style, fontFamily: 'Roboto Mono, monospace' }}>
              {tokens.map((line, index) => {
                const { key: lineKey, ...lineProps } = getLineProps({ line, key: index });
                return (
                  <div key={lineKey ?? index} {...lineProps}>
                    {line.map((token, tokenIndex) => {
                      const { key: tokenKey, ...tokenProps } = getTokenProps({ token, key: tokenIndex });
                      return <span key={tokenKey ?? tokenIndex} {...tokenProps} />;
                    })}
                  </div>
                );
              })}
            </pre>
          )}
        </Highlight>
      </div>
      <FooterBar rightOffset={rightPanelOpen ? rightPanelWidth : 0} />
    </div>
  );
}
