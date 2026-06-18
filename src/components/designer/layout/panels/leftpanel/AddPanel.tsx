"use client";

import React from 'react';
import Accordion from '@/components/spring-ui/accordion';
import {
  // Structure
  AddPanelSection64Icon,
  AddPanelContainer64Icon,
  AddPanelDiv64Icon,
  AddPanelRow64Icon,
  AddPanelGrid64Icon,
  AddPanelNav64Icon,
  
  // Basic
  AddPanelButton64Icon,
  AddPanelLink64Icon,
  AddPanelLinkBlock64Icon,
  AddPanelList64Icon,
  AddPanelListItem64Icon,
  
  // Typography
  AddPanelHeading64Icon,
  AddPanelParagraph64Icon,
  AddPanelText64Icon,
  AddPanelBlockquote64Icon,
  AddPanelRichtext64Icon,
  
  // CMS
  AddPanelCollectionlist64Icon,
  AddPanelLocalesList64Icon,

  // Media
  AddPanelImage64Icon,
  AddPanelVideoUrl64Icon,
  AddPanelLottie64Icon,
  AddPanelRive64Icon,
  AddPanelSpline64Icon,
  
  // Forms
  AddPanelForm64Icon,
  AddPanelFormInput64Icon,
  AddPanelLabel64Icon,
  AddPanelFormCheckbox64Icon,
  AddPanelFormRadio64Icon,
  AddPanelFormSelect64Icon,
  AddPanelFormSubmit64Icon,
  
  // Other
  AddPanelEmbed64Icon,
  AddPanelTabs64Icon,
  AddPanelSlider64Icon,
  AddPanelMap64Icon,
  AddPanelLightbox64Icon,
} from '@/icons';

interface AddPanelProps {
  onItemSelected?: () => void;
}

const AddPanel: React.FC<AddPanelProps> = ({ onItemSelected }) => {
  // Handle item selection
  const handleItemClick = () => {
    if (onItemSelected) {
      onItemSelected();
    }
  };

  // Sections data structure
  const sections = [
    {
      title: "Structure",
      items: [
        { icon: AddPanelSection64Icon, label: "Section" },
        { icon: AddPanelContainer64Icon, label: "Container" },
        { icon: AddPanelDiv64Icon, label: "Div Block" },
        { icon: AddPanelRow64Icon, label: "Row" },
        { icon: AddPanelGrid64Icon, label: "Grid" },
        { icon: AddPanelNav64Icon, label: "Navigation" },
      ]
    },
    {
      title: "Basic",
      items: [
        { icon: AddPanelButton64Icon, label: "Button" },
        { icon: AddPanelLink64Icon, label: "Link" },
        { icon: AddPanelLinkBlock64Icon, label: "Link Block" },
        { icon: AddPanelList64Icon, label: "List" },
        { icon: AddPanelListItem64Icon, label: "List Item" },
      ]
    },
    {
      title: "Typography",
      items: [
        { icon: AddPanelHeading64Icon, label: "Heading" },
        { icon: AddPanelParagraph64Icon, label: "Paragraph" },
        { icon: AddPanelText64Icon, label: "Text Block" },
        { icon: AddPanelBlockquote64Icon, label: "Block Quote" },
        { icon: AddPanelRichtext64Icon, label: "Rich Text" },
      ]
    },
    {
      title: "CMS",
      items: [
        { icon: AddPanelCollectionlist64Icon, label: "Collection List" },
        { icon: AddPanelLocalesList64Icon, label: "Locales List" }
      ]
    },
    {
      title: "Media",
      items: [
        { icon: AddPanelImage64Icon, label: "Image" },
        { icon: AddPanelVideoUrl64Icon, label: "Video" },
        { icon: AddPanelLottie64Icon, label: "Lottie Animation" },
        { icon: AddPanelRive64Icon, label: "Rive" },
        { icon: AddPanelSpline64Icon, label: "Spline Scene" },
      ]
    },
    {
      title: "Forms",
      items: [
        { icon: AddPanelForm64Icon, label: "Form Block" },
        { icon: AddPanelFormInput64Icon, label: "Input" },
        { icon: AddPanelLabel64Icon, label: "Label" },
        { icon: AddPanelFormCheckbox64Icon, label: "Checkbox" },
        { icon: AddPanelFormRadio64Icon, label: "Radio" },
        { icon: AddPanelFormSelect64Icon, label: "Select" },
        { icon: AddPanelFormSubmit64Icon, label: "Submit" },
      ]
    },
    {
      title: "Other",
      items: [
        { icon: AddPanelEmbed64Icon, label: "Embed" },
        { icon: AddPanelTabs64Icon, label: "Tabs" },
        { icon: AddPanelSlider64Icon, label: "Slider" },
        { icon: AddPanelMap64Icon, label: "Map" },
        { icon: AddPanelLightbox64Icon, label: "Lightbox" },
      ]
    }
  ];

  return (
    <div className="flex flex-col border-t border-[var(--border-default)]">
      {sections.map((section, index) => (
        <Accordion key={index} title={section.title}>
          <div className="grid grid-cols-3 gap-0">
            {section.items.map((item, itemIndex) => {
              const IconComponent = item.icon;
              return (
                <div 
                  key={itemIndex} 
                  className="flex flex-col items-center justify-center hover:bg-[var(--component-background-active)] transition-colors cursor-grab h-[92px] w-[82px]"
                  onClick={handleItemClick}
                >
                  <IconComponent size={64} style={{ color: 'var(--text-primary)' }} />
                  <div className="body-text text-center mb-1 text-[var(--text-primary)]">{item.label}</div>
                </div>
              );
            })}
          </div>
        </Accordion>
      ))}
    </div>
  );
};

export default AddPanel; 