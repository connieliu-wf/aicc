"use client";

import React, { useState, useMemo } from 'react';
import { Button } from '@/components/spring-ui/button';
import { IconButton } from '@/components/spring-ui/iconButton';
import { Textarea } from '@/components/spring-ui/textarea';
import {
  CloseDefaultIcon,
  AISparkleIcon,
  ArrowRightIcon,
  AddIcon
} from '@/icons';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  suggestions?: string[];
}

interface Conversation {
  id: string;
  title: string;
  updatedAt: string;
  messages: Message[];
}

const initialConversation: Conversation = {
  id: 'pricing-calculator',
  title: 'Pricing calculator logic',
  updatedAt: '2 min ago',
  messages: [
    {
      id: 'm-1',
      role: 'assistant',
      content:
        'Here’s the plan configuration breakdown. Each plan exposes monthly and yearly pricing, plus an array of add-ons.'
    },
    {
      id: 'm-2',
      role: 'user',
      content:
        'Nice. Can you show me a simplified utility I can reuse when I add more plans?'
    },
    {
      id: 'm-3',
      role: 'assistant',
      content:
        'Absolutely. I’ll extract a normalizePlans helper that maps the CMS response into the shape the UI expects.'
    }
  ]
};

interface RightPanelProps {
  onClose?: () => void;
}

export default function RightPanel({ onClose }: RightPanelProps) {
  const [conversations, setConversations] = useState<Conversation[]>([initialConversation]);
  const [selectedConversationId, setSelectedConversationId] = useState<string | null>(
    initialConversation.id
  );
  const [draftMessage, setDraftMessage] = useState('');

  const activeConversation = useMemo(() => {
    if (!selectedConversationId) return null;
    return conversations.find((conversation) => conversation.id === selectedConversationId) ?? null;
  }, [conversations, selectedConversationId]);

  const handleSendMessage = () => {
    const trimmed = draftMessage.trim();
    if (!trimmed || !activeConversation) return;

    const updatedConversations = conversations.map((conversation) => {
      if (conversation.id !== activeConversation.id) {
        return conversation;
      }

      const userMessage: Message = {
        id: `user-${Date.now()}`,
        role: 'user',
        content: trimmed
      };

      const assistantReply: Message = {
        id: `assistant-${Date.now()}`,
        role: 'assistant',
        content:
          'Got it. I’ll outline the helper now and add notes on wiring it into the design controls.'
      };

      const updatedMessages = [...conversation.messages, userMessage, assistantReply];

      return {
        ...conversation,
        messages: updatedMessages,
        updatedAt: 'just now'
      };
    });

    setConversations(updatedConversations);
    setDraftMessage('');
  };

  const handleSuggestionClick = (suggestion: string) => {
    setDraftMessage(suggestion);
  };

  return (
    <div className="w-[320px] h-full bg-[var(--bg-primary)] border-l border-[var(--border-default)] flex flex-col">
      {/* Header */}
      <div className="h-[40px] px-3 border-b border-[var(--border-default)] flex items-center justify-between">
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

      {/* Active Conversation */}
      <div className="flex-1 flex flex-col">
        {activeConversation ? (
          <>
            <div className="flex-1 overflow-auto px-3 py-3 space-y-3">
              {activeConversation.messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={
                      message.role === 'user'
                        ? 'max-w-[260px] rounded-[var(--radius-md)] bg-[var(--bg-secondary)] px-3 py-2 text-xs leading-relaxed text-[var(--text-primary)]'
                        : 'max-w-[260px] text-xs leading-relaxed text-[var(--text-secondary)]'
                    }
                  >
                    {message.content}
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-[var(--border-default)] px-3 py-3 bg-[var(--bg-primary)]">
              <div className="bg-[var(--bg-secondary)] border border-[var(--border-default)] rounded-[var(--radius-md)] px-2 pt-2 pb-2">
                <Textarea
                  placeholder="Ask Spring Copilot for help with this build..."
                  value={draftMessage}
                  onChange={(event) => setDraftMessage(event.target.value)}
                  className="flex-1 min-h-[64px] resize-none bg-transparent border-none px-0 focus-visible:ring-0 focus-visible:border-none mb-3"
                />

                <div className="flex items-center justify-between">
                  <IconButton
                    variant="ghost"
                    size="comfortable"
                    aria-label="Insert action"
                    className="text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                    onClick={() => handleSuggestionClick('Add another configuration field')}
                  >
                    <AddIcon size={16} />
                  </IconButton>

                  <IconButton
                    variant="subtle-primary"
                    size="comfortable"
                    aria-label="Send message"
                    onClick={handleSendMessage}
                    disabled={!draftMessage.trim()}
                  >
                    <ArrowRightIcon size={16} />
                  </IconButton>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center px-4 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--bg-secondary)] text-[var(--text-primary)] mb-4">
              <CodeIcon size={24} />
            </div>
            <h3 className="title-text-bold text-[var(--text-primary)] mb-2">Pick a conversation</h3>
            <p className="body-text text-[var(--text-secondary)] mb-4">
              Start collaborating with Spring Copilot to iterate on your interface, generate code, or troubleshoot issues.
            </p>
            <Button
              variant="primary"
              size="comfortable"
              className="bg-[var(--action-primary-bg)] hover:bg-[var(--action-primary-bg-hover)]"
              onClick={() => setSelectedConversationId(conversations[0]?.id ?? null)}
            >
              Resume latest thread
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
