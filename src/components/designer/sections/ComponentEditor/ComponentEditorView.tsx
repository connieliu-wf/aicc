"use client";

import React, { useState } from 'react';
import { Button } from '@/components/spring-ui/button';
import { IconButton } from '@/components/spring-ui/iconButton';
import { SegmentedControl, SegmentedControlItem } from '@/components/spring-ui/segmented-control';
import { Textarea } from '@/components/spring-ui/textarea';
import {
  ChevronSmallLeftIcon,
  ChevronSmallRightIcon,
  AISparkleIcon,
  CloseDefaultIcon,
  ArrowRightIcon,
  AddIcon,
} from '@/icons';
import { useComponentEditor, type ComponentDefinition } from '@/context/ComponentEditorContext';
import ComponentCodeEditor from './ComponentCodeEditor';
import ComponentPreview from './ComponentPreview';
import ComponentPropertiesPanel from './ComponentPropertiesPanel';

function EditorCanvasBar({
  component,
  activeView,
  onViewChange,
  isAssistantOpen,
  onToggleAssistant,
}: {
  component: ComponentDefinition;
  activeView: 'preview' | 'code';
  onViewChange: (v: 'preview' | 'code') => void;
  isAssistantOpen: boolean;
  onToggleAssistant: () => void;
}) {
  const { closeComponent } = useComponentEditor();

  return (
    <div className="h-[40px] bg-[var(--bg-primary)] border-b border-[var(--border-default)] flex items-center justify-between px-3 shrink-0">
      {/* Left -- back + breadcrumb */}
      <div className="flex items-center gap-1">
        <IconButton
          variant="ghost"
          size="comfortable"
          aria-label="Back to canvas"
          className="h-6 w-6 text-[var(--text-secondary)]"
          onClick={closeComponent}
        >
          <ChevronSmallLeftIcon size={16} />
        </IconButton>

        <div className="flex items-center">
          <Button
            variant="ghost"
            size="compact"
            className="h-6 px-2 text-[11.5px] font-normal"
            onClick={closeComponent}
          >
            <span className="text-[var(--text-secondary)]">Components</span>
          </Button>
          <div className="text-[var(--text-secondary)] mx-0.5 flex items-center">
            <ChevronSmallRightIcon size={16} />
          </div>
          <Button variant="ghost" size="compact" className="h-6 px-2 text-[11.5px] font-normal">
            <span className="text-[var(--text-primary)] font-medium">{component.name}</span>
          </Button>
        </div>
      </div>

      {/* Right -- view toggle + assistant toggle */}
      <div className="flex items-center gap-2">
        <SegmentedControl
          value={activeView}
          onValueChange={(v) => onViewChange(v as 'preview' | 'code')}
        >
          <SegmentedControlItem value="preview">Preview</SegmentedControlItem>
          <SegmentedControlItem value="code">Code</SegmentedControlItem>
        </SegmentedControl>

        {!isAssistantOpen && (
          <IconButton
            variant="ghost"
            size="comfortable"
            aria-label="Open AI assistant"
            className="text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
            onClick={onToggleAssistant}
          >
            <AISparkleIcon size={16} />
          </IconButton>
        )}
      </div>
    </div>
  );
}

function AssistantPanel({ onClose }: { onClose: () => void }) {
  const [messages] = useState([
    {
      id: 'a1',
      role: 'assistant' as const,
      content: 'I have created a new section on the page with a basic layout, including a heading and a paragraph. Let me know if you\'d like to adjust the content, styling, or add anything else to it!',
    },
  ]);
  const [draft, setDraft] = useState('');

  return (
    <div className="w-[280px] h-full bg-[var(--bg-primary)] border-l border-[var(--border-default)] flex flex-col shrink-0">
      {/* Header */}
      <div className="h-[40px] px-3 border-b border-[var(--border-default)] flex items-center justify-between shrink-0">
        <div className="flex items-center gap-1">
          <span className="text-[var(--text-secondary)]">
            <AISparkleIcon size={16} />
          </span>
          <h2 className="body-text !text-[var(--text-secondary)]">AI Assistant</h2>
        </div>
        <IconButton
          variant="ghost"
          size="icon"
          aria-label="Close assistant"
          className="text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
          onClick={onClose}
        >
          <CloseDefaultIcon size={16} />
        </IconButton>
      </div>

      {/* Checklist */}
      <div className="px-3 py-3 border-b border-[var(--border-default)]">
        <div className="space-y-2">
          {[
            { label: 'Read page tree', done: true },
            { label: 'Site changed, refreshing AI Assistant context', done: true },
            { label: 'Read page', done: true },
            { label: 'Rendered', done: true },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <div className={`w-4 h-4 rounded-full flex items-center justify-center ${item.done ? 'bg-green-500/20 text-green-500' : 'bg-[var(--bg-tertiary)] text-[var(--text-dimmed)]'}`}>
                {item.done && (
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 5L4 7L8 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>
              <span className="text-[var(--text-secondary)] body-text">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-auto px-3 py-3 space-y-3">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={
                msg.role === 'user'
                  ? 'max-w-[240px] rounded-[var(--radius-md)] bg-[var(--bg-secondary)] px-3 py-2 text-xs leading-relaxed text-[var(--text-primary)]'
                  : 'max-w-[240px] text-xs leading-relaxed text-[var(--text-secondary)]'
              }
            >
              {msg.content}
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="border-t border-[var(--border-default)] px-3 py-3 bg-[var(--bg-primary)]">
        <div className="bg-[var(--bg-secondary)] border border-[var(--border-default)] rounded-[var(--radius-md)] px-2 pt-2 pb-2">
          <Textarea
            placeholder="What would you like to do next?"
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            className="flex-1 min-h-[48px] resize-none bg-transparent border-none px-0 focus-visible:ring-0 focus-visible:border-none mb-2"
          />
          <div className="flex items-center justify-between">
            <IconButton
              variant="ghost"
              size="comfortable"
              aria-label="Insert action"
              className="text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
            >
              <AddIcon size={16} />
            </IconButton>
            <IconButton
              variant="subtle-primary"
              size="comfortable"
              aria-label="Send message"
              disabled={!draft.trim()}
            >
              <ArrowRightIcon size={16} />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ComponentEditorView() {
  const { activeComponent, currentCode, highlightedLine, highlightVersion } = useComponentEditor();
  const [activeView, setActiveView] = useState<'preview' | 'code'>('code');
  const [isAssistantOpen, setIsAssistantOpen] = useState(true);

  if (!activeComponent) return null;

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      {/* Top bar */}
      <EditorCanvasBar
        component={activeComponent}
        activeView={activeView}
        onViewChange={setActiveView}
        isAssistantOpen={isAssistantOpen}
        onToggleAssistant={() => setIsAssistantOpen(true)}
      />

      {/* Main content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Code / Preview area */}
        {activeView === 'code' ? (
          <div className="flex-1 flex overflow-hidden">
            {/* Code editor */}
            <div className="w-[45%] min-w-[300px] border-r border-[var(--border-default)] overflow-hidden">
              <ComponentCodeEditor code={currentCode} highlightedLine={highlightedLine} highlightVersion={highlightVersion} />
            </div>
            {/* Preview */}
            <div className="flex-1 overflow-hidden">
              <ComponentPreview componentId={activeComponent.id} />
            </div>
          </div>
        ) : (
          <div className="flex-1 overflow-hidden">
            <ComponentPreview componentId={activeComponent.id} />
          </div>
        )}

        {/* Properties panel */}
        <ComponentPropertiesPanel componentName={activeComponent.name} />

        {/* AI Assistant */}
        {isAssistantOpen && <AssistantPanel onClose={() => setIsAssistantOpen(false)} />}
      </div>
    </div>
  );
}
