import React from 'react';
import { Badge } from '@/components/spring-ui/badge';
import { Tag } from '@/components/spring-ui/tag';

export function BadgeExample() {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-medium mb-2">Badge & Tag</h2>
      <p className="mb-4 text-sm text-[var(--text-secondary)]">Small visual indicators for statuses, categories, or counts</p>
      
      <div className="p-8 bg-[var(--bg-primary)] border border-[var(--border-default)] rounded-lg">
        <div className="mb-8">
          <h3 className="text-md font-medium mb-4">Badge Shapes</h3>
          <div className="flex flex-wrap gap-3 items-center">
            <Badge shape="rounded">Rounded</Badge>
            <Badge shape="square">Square</Badge>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-md font-medium mb-4">Badge Sizes</h3>
          <div className="flex flex-wrap gap-3 items-center">
            <Badge size="compact">Compact</Badge>
            <Badge size="comfort">Comfort</Badge>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-md font-medium mb-4">Tinted Style (Default)</h3>
          <div className="flex flex-wrap gap-3 items-center">
            <Badge variant="default">Default</Badge>
            <Badge variant="blue">Blue</Badge>
            <Badge variant="green">Green</Badge>
            <Badge variant="pink">Pink</Badge>
            <Badge variant="purple">Purple</Badge>
            <Badge variant="orange">Orange</Badge>
            <Badge variant="yellow">Yellow</Badge>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-md font-medium mb-4">Solid Style</h3>
          <div className="flex flex-wrap gap-3 items-center">
            <Badge styleType="solid" variant="default">Default</Badge>
            <Badge styleType="solid" variant="blue">Blue</Badge>
            <Badge styleType="solid" variant="green">Green</Badge>
            <Badge styleType="solid" variant="pink">Pink</Badge>
            <Badge styleType="solid" variant="purple">Purple</Badge>
            <Badge styleType="solid" variant="orange">Orange</Badge>
            <Badge styleType="solid" variant="yellow">Yellow</Badge>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-md font-medium mb-4">With Prefix Icon</h3>
          <div className="flex flex-wrap gap-3 items-center">
            <Badge 
              prefixIcon={
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5"/>
                  <path d="M2 12l10 5 10-5"/>
                </svg>
              }
            >
              With Prefix Icon
            </Badge>
            <Badge 
              prefixIcon={
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 16v-4"/>
                  <path d="M12 8h.01"/>
                </svg>
              }
              variant="blue"
            >
              Info Badge
            </Badge>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-md font-medium mb-4">Combined Variants</h3>
          <div className="flex flex-wrap gap-3 items-center">
            <Badge size="comfort" shape="square" styleType="solid" variant="blue">
              Combined Variant
            </Badge>
            <Badge size="compact" styleType="tinted" variant="green" prefixIcon={
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              }
            >
              Success
            </Badge>
          </div>
        </div>
        
        <div className="mb-8">
          <h3 className="text-md font-medium mb-4">Tag Variants</h3>
          <div className="flex flex-wrap gap-3">
            <Tag>Default Tag</Tag>
            <Tag variant="blue">Blue Tag</Tag>
            <Tag variant="green">Green Tag</Tag>
            <Tag variant="pink">Pink Tag</Tag>
            <Tag variant="purple">Purple Tag</Tag>
            <Tag variant="orange">Orange Tag</Tag>
            <Tag variant="yellow">Yellow Tag</Tag>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-md font-medium mb-4">Tag Shapes & Sizes</h3>
          <div className="flex flex-wrap gap-3">
            <Tag shape="rounded" size="compact">Rounded Compact</Tag>
            <Tag shape="rounded" size="comfort">Rounded Comfort</Tag>
            <Tag shape="square" size="compact">Square Compact</Tag>
            <Tag shape="square" size="comfort">Square Comfort</Tag>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-md font-medium mb-4">Tag Styles</h3>
          <div className="flex flex-wrap gap-3">
            <Tag styleType="tinted" variant="blue">Tinted Blue</Tag>
            <Tag styleType="solid" variant="blue">Solid Blue</Tag>
            <Tag styleType="tinted" variant="green">Tinted Green</Tag>
            <Tag styleType="solid" variant="green">Solid Green</Tag>
          </div>
        </div>
        
        <div>
          <h3 className="text-md font-medium mb-4">Tags with Icons</h3>
          <div className="flex flex-wrap gap-3">
            <Tag 
              prefixIcon={
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 16v-4"/>
                  <path d="M12 8h.01"/>
                </svg>
              }
            >
              With Prefix Icon
            </Tag>
            <Tag onRemove={() => {}}>With Close</Tag>
            <Tag 
              prefixIcon={
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 16v-4"/>
                  <path d="M12 8h.01"/>
                </svg>
              }
              onRemove={() => {}}
            >
              With Both Icons
            </Tag>
          </div>
        </div>
      </div>
    </section>
  );
} 