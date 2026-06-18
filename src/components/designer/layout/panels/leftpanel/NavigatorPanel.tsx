"use client";

import React, { useState, ReactNode } from 'react';
import { 
  ElementContainerIcon,
  ElementComponentIcon,
  ElementButtonIcon,
  ElementDivIcon,
  ElementImageIcon,
  ElementFormBlockIcon,
  ElementSectionIcon,
  ElementSpanIcon,
  ElementSplineIcon,
  ElementInputIcon,
  EmptyLightning64Icon,
  ChevronSmallDownIcon,
  ChevronSmallRightIcon,
  CMSDefaultIcon
} from '@/icons';

// Define the structure for navigation items
interface NavItem {
  id: string;
  label: string;
  icon: 'frame' | 'component' | 'text' | 'image' | 'form' | 'button' | 'spline' | 'section' | 'input' | 'cms';
  children?: NavItem[];
  highlighted?: boolean;
  actionIcon?: 'lightning' | null;
  specialType?: 'cms' | 'component';
}

// Props for the NavigatorRow component
interface NavigatorRowProps {
  item: NavItem;
  level: number;
  expanded: string[];
  toggleExpand: (id: string) => void;
  selectedId: string | null;
  setSelectedId: (id: string) => void;
}

const NavigatorRow: React.FC<NavigatorRowProps> = ({ 
  item, 
  level, 
  expanded, 
  toggleExpand, 
  selectedId, 
  setSelectedId 
}) => {
  const hasChildren = item.children && item.children.length > 0;
  const isExpanded = expanded.includes(item.id);
  const isSelected = selectedId === item.id;

  // Handle row click
  const handleRowClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedId(item.id);
  };

  // Handle chevron click
  const handleChevronClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (hasChildren) {
      toggleExpand(item.id);
    }
  };

  // Determine which icon to use based on the item type
  const getIcon = (iconType: string): ReactNode => {
    const iconProps = { size: 16 };
    
    // Apply special colors to icons based on item type
    if (item.specialType === 'cms') {
      return <CMSDefaultIcon size={16} style={{ color: 'var(--text-purple)' }} />;
    }
    
    if (item.specialType === 'component') {
      return <ElementComponentIcon size={16} style={{ color: 'var(--text-green)' }} />;
    }

    // Get color based on selection and highlighting
    const getIconColor = () => {
      if (isSelected && !item.specialType) {
        return 'var(--text-blue)';
      }
      return item.highlighted ? 'var(--text-primary)' : 'var(--text-secondary)';
    };

    const iconStyle = { color: getIconColor() };

    switch (iconType) {
      case 'frame': return <ElementContainerIcon {...iconProps} style={iconStyle} />;
      case 'component': return <ElementComponentIcon {...iconProps} style={iconStyle} />;
      case 'text': return <ElementSpanIcon {...iconProps} style={iconStyle} />;
      case 'image': return <ElementImageIcon {...iconProps} style={iconStyle} />;
      case 'form': return <ElementFormBlockIcon {...iconProps} style={iconStyle} />;
      case 'button': return <ElementButtonIcon {...iconProps} style={iconStyle} />;
      case 'spline': return <ElementSplineIcon {...iconProps} style={iconStyle} />;
      case 'section': return <ElementSectionIcon {...iconProps} style={iconStyle} />;
      case 'input': return <ElementInputIcon {...iconProps} style={iconStyle} />;
      case 'cms': return <CMSDefaultIcon {...iconProps} style={iconStyle} />;
      default: return <ElementDivIcon {...iconProps} style={iconStyle} />;
    }
  };

  // Get text color class based on special type and selection
  const getTextColorClass = () => {
    if (item.specialType === 'cms') return 'text-[var(--text-purple)]';
    if (item.specialType === 'component') return 'text-[var(--text-green)]';
    if (isSelected && !item.specialType) return 'text-[var(--text-blue)]';
    return item.highlighted ? 'text-[var(--text-primary)]' : 'text-[var(--text-secondary)]';
  };

  // Get background color class based on selection and special type
  const getBackgroundClass = () => {
    if (!isSelected) return '';
    
    if (item.specialType === 'cms') return 'bg-[var(--purple-bg-transparent)]';
    if (item.specialType === 'component') return 'bg-[var(--green-bg-transparent)]';
    return 'bg-[var(--blue-bg-transparent)]';
  };

  return (
    <div>
      <div 
        className={`h-6 pl-2 pr-2 hover:bg-[var(--component-background-active)] cursor-pointer flex items-center justify-between ${getBackgroundClass()}`}
        style={{ paddingLeft: `${level * 12}px` }}
        onClick={handleRowClick}
      >
        <div className="flex items-center flex-1 min-w-0">
          {hasChildren ? (
            <div className="mr-0.5 w-4 flex items-center" onClick={handleChevronClick}>
              {isExpanded ? (
                <ChevronSmallDownIcon size={16} className={getTextColorClass()} />
              ) : (
                <ChevronSmallRightIcon size={16} className={getTextColorClass()} />
              )}
            </div>
          ) : (
            <div className="w-4"></div>
          )}
          <span className="w-4 mr-1 flex items-center">{getIcon(item.icon)}</span>
          <span className={`truncate ${getTextColorClass()}`}>{item.label}</span>
        </div>
        
        {item.actionIcon && (
          <div className="flex-shrink-0">
            <EmptyLightning64Icon size={16} className={getTextColorClass()} />
          </div>
        )}
      </div>
      
      {isExpanded && hasChildren && (
        <div>
          {item.children?.map((child) => (
            <NavigatorRow
              key={child.id}
              item={child}
              level={level + 1}
              expanded={expanded}
              toggleExpand={toggleExpand}
              selectedId={selectedId}
              setSelectedId={setSelectedId}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const NavigatorPanel: React.FC = () => {
  const [expanded, setExpanded] = useState<string[]>([
    'body', 'pageWrapper', 'section1', 'container', 'ctaHeader', 
    'heroHeader', 'heroTextWrapper', 'heroSubheading', 'formBlock', 
    'form', 'successMessage', 'errorMessage', 'buttonRow'
  ]);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    if (expanded.includes(id)) {
      setExpanded(expanded.filter(item => item !== id));
    } else {
      setExpanded([...expanded, id]);
    }
  };

  // Sample navigation data structure matching the image
  const navigationData: NavItem[] = [
    {
      id: 'body',
      label: 'Body',
      icon: 'frame',
      highlighted: true,
      children: [
        {
          id: 'navbar',
          label: 'Navbar',
          icon: 'component',
          highlighted: true,
          specialType: 'component'
        },
        {
          id: 'pageWrapper',
          label: 'Page wrapper',
          icon: 'frame',
          children: [
            {
              id: 'section1',
              label: 'Section',
              icon: 'section',
              children: [
                {
                  id: 'container',
                  label: 'Container',
                  icon: 'frame',
                  children: [
                    {
                      id: 'ctaHeader',
                      label: 'CTA header component',
                      icon: 'component',
                      children: [
                        {
                          id: 'heroHeader',
                          label: 'Hero header component',
                          icon: 'frame',
                          children: [
                            {
                              id: 'heroTextWrapper',
                              label: 'Hero Text Wrapper',
                              icon: 'frame',
                              children: [
                                {
                                  id: 'heroHeading',
                                  label: 'Hero heading',
                                  icon: 'text',
                                  actionIcon: 'lightning'
                                },
                                {
                                  id: 'heroSubheading',
                                  label: 'Hero subheading',
                                  icon: 'text',
                                  children: [
                                    {
                                      id: 'textSpan',
                                      label: 'Text Span',
                                      icon: 'text'
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              id: 'formBlock',
                              label: 'Form Block',
                              icon: 'form',
                              children: [
                                {
                                  id: 'form',
                                  label: 'Form',
                                  icon: 'form',
                                  children: [
                                    {
                                      id: 'fieldLabel1',
                                      label: 'Field Label',
                                      icon: 'text'
                                    },
                                    {
                                      id: 'textField1',
                                      label: 'Text Field',
                                      icon: 'input'
                                    },
                                    {
                                      id: 'fieldLabel2',
                                      label: 'Field Label',
                                      icon: 'text'
                                    },
                                    {
                                      id: 'textField2',
                                      label: 'Text Field',
                                      icon: 'input'
                                    },
                                    {
                                      id: 'submitButton',
                                      label: 'Submit Button',
                                      icon: 'button'
                                    }
                                  ]
                                },
                                {
                                  id: 'successMessage',
                                  label: 'Success Message',
                                  icon: 'frame',
                                  children: [
                                    {
                                      id: 'successText',
                                      label: 'Text Block',
                                      icon: 'text'
                                    }
                                  ]
                                },
                                {
                                  id: 'errorMessage',
                                  label: 'Error Message',
                                  icon: 'frame',
                                  children: [
                                    {
                                      id: 'errorText',
                                      label: 'Text Block',
                                      icon: 'text'
                                    }
                                  ]
                                },
                                {
                                  id: 'splineScene',
                                  label: 'Spline Scene',
                                  icon: 'spline',
                                  actionIcon: 'lightning'
                                },
                                {
                                  id: 'buttonRow',
                                  label: 'Button row',
                                  icon: 'frame',
                                  children: [
                                    {
                                      id: 'primaryButton',
                                      label: 'Button',
                                      icon: 'button',
                                      children: [
                                        {
                                          id: 'buttonText1',
                                          label: 'Text Block',
                                          icon: 'text'
                                        }
                                      ]
                                    },
                                    {
                                      id: 'secondaryButton',
                                      label: 'Button secondary',
                                      icon: 'button',
                                      children: [
                                        {
                                          id: 'buttonText2',
                                          label: 'Text Block',
                                          icon: 'text'
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              id: 'headerImageWrapper',
                              label: 'Header image wrapper',
                              icon: 'frame',
                              children: [
                                {
                                  id: 'headerImage',
                                  label: 'Image',
                                  icon: 'image'
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: 'section2',
              label: 'Section',
              icon: 'section'
            },
            {
              id: 'section3',
              label: 'Section',
              icon: 'section'
            },
            {
              id: 'section4',
              label: 'Section',
              icon: 'section'
            },
            {
              id: 'cmsCollection',
              label: 'CMS Collection',
              icon: 'cms',
              specialType: 'cms'
            }
          ]
        },
        {
          id: 'footer',
          label: 'Footer',
          icon: 'component',
          highlighted: true,
          specialType: 'component'
        }
      ]
    }
  ];

  return (
    <div className="flex flex-col w-full h-full pt-1 bg-[var(--bg-primary)] border-t border-[var(--border-default)]">
      <div className="flex-1 overflow-auto body-text">
        {navigationData.map((item) => (
          <NavigatorRow
            key={item.id}
            item={item}
            level={0}
            expanded={expanded}
            toggleExpand={toggleExpand}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
          />
        ))}
      </div>
    </div>
  );
};

export default NavigatorPanel; 