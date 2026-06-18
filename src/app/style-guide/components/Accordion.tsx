import React from 'react';
import Accordion from '@/components/spring-ui/accordion';
import { InfoIcon } from '@/icons/InfoIcon';

export function AccordionExample() {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-medium mb-2">Accordion</h2>
      <p className="mb-4 text-sm text-[var(--text-secondary)]">Collapsible content sections for organizing information</p>
      
      <div className="p-8 bg-[var(--bg-primary)] border border-[var(--border-default)] rounded-lg space-y-12">
        {/* Basic Accordion */}
        <div>
          <h3 className="text-md font-medium mb-4">Basic Accordions</h3>
          <div className="border border-[var(--border-default)] rounded-md overflow-hidden">
            <Accordion title="Section 1" defaultOpen={true}>
              <div className="p-4 text-sm text-[var(--text-secondary)]">
                <p>This is the content for section 1. Accordions are useful for organizing content into collapsible sections.</p>
              </div>
            </Accordion>
            
            <Accordion title="Section 2" defaultOpen={false}>
              <div className="p-4 text-sm text-[var(--text-secondary)]">
                <p>This is the content for section 2. Click the header above to expand or collapse this section.</p>
                <p className="mt-2">You can include any content inside an accordion, including text, images, or other components.</p>
              </div>
            </Accordion>
            
            <Accordion title="Section 3" defaultOpen={false}>
              <div className="p-4 text-sm text-[var(--text-secondary)]">
                <p>This is the content for section 3. Accordions help save vertical space and organize information.</p>
              </div>
            </Accordion>
          </div>
        </div>
        
        {/* FAQ Accordion */}
        <div>
          <h3 className="text-md font-medium mb-4">FAQ Accordion</h3>
          <div className="border border-[var(--border-default)] rounded-md overflow-hidden">
            <Accordion title="What is an accordion component?" defaultOpen={true}>
              <div className="p-4 text-sm text-[var(--text-secondary)]">
                <p>An accordion is a UI component that allows users to show and hide sections of related content. 
                It consists of headers that users can click to expand or collapse content panels.</p>
              </div>
            </Accordion>
            
            <Accordion title="When should I use an accordion?" defaultOpen={false}>
              <div className="p-4 text-sm text-[var(--text-secondary)]">
                <p>Use accordions when:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>You need to organize a large amount of content in a limited space</li>
                  <li>Users only need to view a few sections at a time</li>
                  <li>For FAQs or similar content where users scan through topics</li>
                  <li>For progressive disclosure of complex information</li>
                </ul>
              </div>
            </Accordion>
            
            <Accordion title="Are accordions good for mobile design?" defaultOpen={false}>
              <div className="p-4 text-sm text-[var(--text-secondary)]">
                <p>Yes, accordions are especially valuable in mobile design where screen space is limited. 
                They allow users to focus on specific content without scrolling through everything.</p>
              </div>
            </Accordion>
          </div>
        </div>
        
        {/* Nested Content */}
        <div>
          <h3 className="text-md font-medium mb-4">Accordion with Rich Content</h3>
          <div className="border border-[var(--border-default)] rounded-md overflow-hidden">
            <Accordion title="Project Description" defaultOpen={true}>
              <div className="p-4">
                <div className="flex items-start gap-3 mb-3">
                  <InfoIcon size={16} className="text-[var(--text-secondary)] mt-0.5" />
                  <div>
                    <h4 className="text-sm font-medium">Design System Update</h4>
                    <p className="text-sm text-[var(--text-secondary)]">Version 2.0</p>
                  </div>
                </div>
                
                <div className="bg-[var(--bg-tertiary)] p-3 rounded-md text-sm text-[var(--text-secondary)] my-3">
                  <p>This project involves updating our design system components to improve accessibility and consistency.</p>
                </div>
                
                <div className="flex gap-2 mt-4">
                  <div className="bg-[var(--blue-transparent)] text-[var(--text-blue)] text-xs px-2 py-0.5 rounded-full">Design</div>
                  <div className="bg-[var(--green-transparent)] text-[var(--text-green)] text-xs px-2 py-0.5 rounded-full">Development</div>
                </div>
              </div>
            </Accordion>
          </div>
        </div>
        
        {/* Usage Guidelines */}
        <div>
          <h3 className="text-md font-medium mb-4">Usage Guidelines</h3>
          <div className="space-y-2 text-sm">
            <p className="text-[var(--text-secondary)]">• Use clear, concise titles that describe the content</p>
            <p className="text-[var(--text-secondary)]">• Keep the number of accordions reasonable (4-7 max) for better usability</p>
            <p className="text-[var(--text-secondary)]">• Consider opening the most important accordion by default</p>
            <p className="text-[var(--text-secondary)]">• Ensure transitions are smooth for better user experience</p>
          </div>
        </div>
      </div>
    </section>
  );
} 