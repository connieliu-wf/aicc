"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { components } from './components/index';
import { ButtonExample } from './components/Button';
import { SegmentedControlExample } from './components/SegmentedControl';
import { SplitButtonExample } from './components/SplitButton';
import { TabBarExample } from './components/TabBar';
import { DropdownMenuExample } from './components/DropdownMenu';
import { InputExample } from './components/Input';
import { TextareaExample } from './components/Textarea';
import { SelectExample } from './components/Select';
import { CheckboxExample } from './components/Checkbox';
import { RadioExample } from './components/Radio';
import { SwitchExample } from './components/Switch';
import { AvatarExample } from './components/Avatar';
import { BadgeExample } from './components/Badge';
import { RowExample } from './components/Row';
import { TableExample } from './components/Table';
import { NoteExample } from './components/Note';
import { ToastExample } from './components/Toast';
import { AutocompleteExample } from './components/Autocomplete';
import { ModalExample } from './components/Modal';
import { PopoverExample } from './components/Popover';
import { TooltipExample } from './components/Tooltip';
import { AccordionExample } from './components/Accordion';

export function ComponentsSection() {
  const [headerHeight, setHeaderHeight] = useState(0);
  const componentRefs = Object.fromEntries(
    components.map((component) => [component.id, useRef<HTMLDivElement>(null)])
  );
  const searchParams = useSearchParams();
  const selectedComponent = searchParams?.get("component");
  
  useEffect(() => {
    if (selectedComponent && componentRefs[selectedComponent]?.current) {
      scrollToSection(selectedComponent);
    }
    
    updateHeaderHeight();
    window.addEventListener("resize", updateHeaderHeight);
    
    return () => {
      window.removeEventListener("resize", updateHeaderHeight);
    };
  }, [selectedComponent]);
  
  const updateHeaderHeight = () => {
    const header = document.querySelector('.header');
    if (header) {
      setHeaderHeight(header.getBoundingClientRect().height);
    }
  };
  
  const scrollToSection = (sectionId: string) => {
    const section = componentRefs[sectionId]?.current;
    if (section) {
      const yOffset = -headerHeight - 20; // Additional 20px for spacing
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="my-8 px-8 font-sans">
      <div className="flex gap-8">
        {/* Sidebar */}
        <aside className="w-[240px] shrink-0">
          <div className="sticky top-[10px]">
            <nav>
              <ul className="space-y-2">
                {components.map((component) => (
                  <li key={component.id}>
                    <Link
                      href={`?component=${component.id}`}
                      className="block py-1 px-3 rounded hover:bg-[var(--bg-raised)] title-text transition-colors"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(component.id);
                      }}
                    >
                      {component.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </aside>
        
        {/* Main content */}
        <div className="flex-1 min-w-0">
          {/* Component Sections */}
          <div ref={componentRefs["button"]}>
            <ButtonExample />
          </div>
          
          <div ref={componentRefs["segmented-control"]}>
            <SegmentedControlExample />
          </div>
          
          <div ref={componentRefs["split-button"]}>
            <SplitButtonExample />
          </div>
          
          <div ref={componentRefs["tab-bar"]}>
            <TabBarExample />
          </div>
          
          <div ref={componentRefs["dropdown-menu"]}>
            <DropdownMenuExample />
          </div>
          
          <div ref={componentRefs["input"]}>
            <InputExample />
          </div>
          
          <div ref={componentRefs["textarea"]}>
            <TextareaExample />
          </div>
          
          <div ref={componentRefs["select"]}>
            <SelectExample />
          </div>
          
          <div ref={componentRefs["checkbox"]}>
            <CheckboxExample />
          </div>
          
          <div ref={componentRefs["radio"]}>
            <RadioExample />
          </div>
          
          <div ref={componentRefs["switch"]}>
            <SwitchExample />
          </div>

          <div ref={componentRefs["avatar"]}>
            <AvatarExample />
          </div>

          <div ref={componentRefs["badge"]}>
            <BadgeExample />
          </div>

          <div ref={componentRefs["row"]}>
            <RowExample />
          </div>

          <div ref={componentRefs["table"]}>
            <TableExample />
          </div>

          <div ref={componentRefs["note"]}>
            <NoteExample />
          </div>

          <div ref={componentRefs["toast"]}>
            <ToastExample />
          </div>

          <div ref={componentRefs["autocomplete"]}>
            <AutocompleteExample />
          </div>

          <div ref={componentRefs["modal"]}>
            <ModalExample />
          </div>

          <div ref={componentRefs["popover"]}>
            <PopoverExample />
          </div>

          <div ref={componentRefs["tooltip"]}>
            <TooltipExample />
          </div>

          <div ref={componentRefs["accordion"]}>
            <AccordionExample />
          </div>
        </div>
      </div>
    </div>
  );
}
