"use client";

import React, { useState } from 'react';
import { ChevronSmallDownIcon } from '@/icons';

interface AccordionProps {
  title: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
  titleClassName?: string;
  variant?: 'compact' | 'comfortable';
}

const Accordion: React.FC<AccordionProps> = ({ 
  title, 
  defaultOpen = true, 
  children,
  titleClassName = "title-semibold",
  variant = 'comfortable'
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  // Theme-aware height and padding classes
  const getVariantClasses = () => {
    if (variant === 'compact') {
          return "[.theme-designer_&]:h-8 [.theme-dashboard_&]:h-10 [.theme-designer_&]:pl-2 [.theme-designer_&]:pr-1 [.theme-dashboard_&]:pl-3 [.theme-dashboard_&]:pr-2";
  } else {
    return "[.theme-designer_&]:h-10 [.theme-dashboard_&]:h-12 [.theme-designer_&]:pl-2 [.theme-designer_&]:pr-1 [.theme-dashboard_&]:pl-3 [.theme-dashboard_&]:pr-2";
    }
  };

  return (
    <div className="border-b border-[var(--border-default)]">
      <div 
        className={`flex justify-between items-center cursor-default ${getVariantClasses()}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <h5 className={titleClassName}>{title}</h5>
        <div className={`transform transition-transform ${isOpen ? '' : 'rotate-[-90deg]'}`}>
          <ChevronSmallDownIcon style={{ color: 'var(--text-secondary)' }} size={16} />
        </div>
      </div>
      <div 
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-screen opacity-100 my-0' : 'max-h-0 opacity-0'
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default Accordion; 