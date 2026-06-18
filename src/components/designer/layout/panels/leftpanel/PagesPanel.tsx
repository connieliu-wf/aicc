"use client";

import React, { useState } from 'react';
import { 
  PageDefaultIcon
} from '@/icons';
import Accordion from '@/components/spring-ui/accordion';
import { Input } from "@/components/spring-ui/input";
import { Row } from "@/components/spring-ui/row";
import { usePages } from '@/context/PagesContext';

// Page item interface
interface PageItem {
  name: string;
  path: string;
  icon?: React.ReactNode;
  children?: PageItem[];
  draft?: boolean;
}

// Section interface
interface PageSection {
  title: string;
  items: PageItem[];
  expanded: boolean;
}

const PagesPanel = () => {
  // Initialize sections with the ones visible in the image
  const [sections] = useState<PageSection[]>([
    {
      title: 'Static pages',
      expanded: true,
      items: [
        { name: 'Home', path: '/' },
        { name: 'Contact Us', path: '/contact' },
        { name: '[Draft] Styles', path: '/styles', draft: true }
      ]
    },
    {
      title: 'CMS Collection pages',
      expanded: true,
      items: [
        { name: 'Testimonials Template', path: '/testimonials' }
      ]
    },
    {
      title: 'Utility pages',
      expanded: true,
      items: [
        { name: 'Password', path: '/password' },
        { name: '404', path: '/404' }
      ]
    },
    {
      title: 'Static page templates',
      expanded: false,
      items: []
    },
    {
      title: 'Ecommerce pages',
      expanded: false,
      items: []
    },
    {
      title: 'User pages',
      expanded: false,
      items: []
    }
  ]);

  // Use the Pages context
  const { selectedPage, setSelectedPage } = usePages();

  // Get icon for page
  const getPageIcon = (item: PageItem) => {
    return (
      <PageDefaultIcon 
        size={16} 
        style={{ color: item.draft ? 'var(--text-orange)' : 'var(--text-secondary)' }} 
      />
    );
  };

  // Handle page selection
  const handleSelectPage = (path: string) => {
    // Note: Panel closing is handled by useEffect in LeftSidebar that detects page changes
    setSelectedPage(path);
  };

  return (
    <div className="flex flex-col h-full">
      {/* Search */}
      <div className="px-2 pb-2 border-b border-[var(--border-default)]" >
        <Input
          showSearchIcon
          placeholder="Search pages"
        />
      </div>
      
      {/* Sections with Accordion */}
      <div className="flex-1 overflow-y-auto">
        {sections.map((section, index) => (
          <Accordion 
            key={index} 
            title={section.title} 
            defaultOpen={section.expanded}
            titleClassName="title-semibold"
          >
            <div className="pb-2">
              {section.items.map((item, itemIndex) => (
                <Row
                  key={itemIndex}
                  label={item.name}
                  icon={getPageIcon(item)}
                  selected={selectedPage === item.path}
                  size="compact"
                  className={item.draft ? "text-[var(--text-orange)]" : ""}
                  onClick={() => handleSelectPage(item.path)}
                />
              ))}
            </div>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default PagesPanel; 