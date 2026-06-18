"use client";

import React, { useState } from 'react';
import { Input } from '@/components/spring-ui/input';
import { Button } from '@/components/spring-ui/button';
import { IconButton } from '@/components/spring-ui/iconButton';
import { ColorPicker } from '@/components/spring-ui/color-picker';
import { CloseDefaultIcon, CheckDefaultIcon, AddIcon, DropletLargeIcon } from '@/icons';
import { formatToHex } from '@/lib/color-utils';

interface ColorsPanelProps {
  onClose: () => void;
}

interface ColorVariable {
  id: string;
  name: string;
  value: string;
  color: string;
}

interface ColorSection {
  name: string;
  variables: ColorVariable[];
}

const ColorsPanel: React.FC<ColorsPanelProps> = ({ onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [colorSections, setColorSections] = useState<ColorSection[]>([
    {
      name: 'primary',
      variables: [
        { id: 'black', name: 'black', value: 'black', color: '#000000' },
        { id: 'white', name: 'white', value: 'white', color: '#ffffff' },
        { id: 'beige', name: 'beige', value: '#f8f7f3', color: '#f8f7f3' },
      ]
    },
    {
      name: 'grey',
      variables: [
        { id: 'grey-100', name: '100', value: '#ddd', color: '#ddd' },
        { id: 'grey-200', name: '200', value: '#b6b6b6', color: '#b6b6b6' },
        { id: 'grey-300', name: '300', value: '#6b6b6b', color: '#6b6b6b' },
        { id: 'grey-400', name: '400', value: '#474747', color: '#474747' },
        { id: 'grey-500', name: '500', value: '#333', color: '#333' },
        { id: 'grey-600', name: '600', value: '#292929', color: '#292929' },
        { id: 'grey-700', name: '700', value: '#171717', color: '#171717' },
        { id: 'grey-800', name: '800', value: '#0f0f0f', color: '#0f0f0f' },
        { id: 'grey-900', name: '900', value: '#0a0a0a', color: '#0a0a0a' },
      ]
    },
    {
      name: 'white',
      variables: [
        { id: 'white-10', name: '10', value: 'rgba(255, 255, 255, 0.1)', color: 'rgba(255, 255, 255, 0.1)' },
        { id: 'white-15', name: '15', value: 'rgba(255, 255, 255, 0.15)', color: 'rgba(255, 255, 255, 0.15)' },
        { id: 'white-20', name: '20', value: 'rgba(255, 255, 255, 0.2)', color: 'rgba(255, 255, 255, 0.2)' },
        { id: 'white-30', name: '30', value: 'rgba(255, 255, 255, 0.3)', color: 'rgba(255, 255, 255, 0.3)' },
        { id: 'white-40', name: '40', value: 'rgba(255, 255, 255, 0.4)', color: 'rgba(255, 255, 255, 0.4)' },
        { id: 'white-50', name: '50', value: 'rgba(255, 255, 255, 0.5)', color: 'rgba(255, 255, 255, 0.5)' },
        { id: 'white-60', name: '60', value: 'rgba(255, 255, 255, 0.8)', color: 'rgba(255, 255, 255, 0.8)' },
        { id: 'white-70', name: '70', value: 'rgba(255, 255, 255, 0.7)', color: 'rgba(255, 255, 255, 0.7)' },
        { id: 'white-80', name: '80', value: 'rgba(255, 255, 255, 0.8)', color: 'rgba(255, 255, 255, 0.8)' },
      ]
    }
  ]);

  // Handle color change
  const handleColorChange = (sectionName: string, variableId: string, newColor: string) => {
    setColorSections(prevSections => 
      prevSections.map(section => {
        if (section.name !== sectionName) return section;
        
        return {
          ...section,
          variables: section.variables.map(variable => {
            if (variable.id !== variableId) return variable;
            
            const hexColor = formatToHex(newColor);
            return {
              ...variable,
              color: hexColor,
              value: hexColor
              // Keep the original name unchanged
            };
          })
        };
      })
    );
  };

  // Filter sections based on search
  const filteredSections = colorSections.map(section => ({
    ...section,
    variables: section.variables.filter(variable =>
      variable.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      variable.value.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(section => section.variables.length > 0);

  // Render color swatch
  const renderColorSwatch = (color: string, sectionName: string, variableId: string) => {
    const swatchContent = (() => {
      if (color === 'transparent') {
        // Checkerboard pattern for transparent
        return (
          <div 
            className="w-4 h-4 border border-[var(--border-default)] rounded-sm flex-shrink-0"
            style={{
              backgroundImage: `
                linear-gradient(45deg, #808080 25%, transparent 25%),
                linear-gradient(-45deg, #808080 25%, transparent 25%),
                linear-gradient(45deg, transparent 75%, #808080 75%),
                linear-gradient(-45deg, transparent 75%, #808080 75%)
              `,
              backgroundSize: '8px 8px',
              backgroundPosition: '0 0, 0 4px, 4px -4px, -4px 0px'
            }}
          />
        );
      }
      return (
        <div 
          className="w-4 h-4 border border-[var(--border-default)] rounded-sm flex-shrink-0"
          style={{ backgroundColor: color }}
        />
      );
    })();

    return (
      <ColorPicker
        color={color}
        onChange={(newColor) => handleColorChange(sectionName, variableId, newColor)}
      >
        <div onClick={(e) => e.stopPropagation()}>
          {swatchContent}
        </div>
      </ColorPicker>
    );
  };

  return (
    <div 
      className="fixed left-[288px] top-10 right-0 h-[calc(100vh-35px)] bg-[var(--bg-primary)] z-[100] flex flex-col overflow-hidden"
      style={{
        boxShadow: '0px 4px 8px 0px rgba(0, 0, 0, 0.1)',
        animation: 'panelSlideInRight 0.15s ease-out forwards',
        position: 'fixed',
        top: '40px',
        left: '288px',
        right: '0',
        height: 'calc(100vh - 35px)',
      }}
      onMouseDown={(e) => e.stopPropagation()}
      onClick={(e) => e.stopPropagation()}
    >
      <style jsx global>{`
        @keyframes panelSlideInRight {
          from {
            transform: translateX(20px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        /* Custom scrollbar styling */
        .colors-panel-content::-webkit-scrollbar {
          width: 8px;
          background-color: transparent;
        }
        
        .colors-panel-content::-webkit-scrollbar-thumb {
          background-color: transparent;
          border-radius: 0px;
          transition: background-color 0.2s ease;
        }
        
        .colors-panel-content:hover::-webkit-scrollbar-thumb {
          background-color: var(--component-scrollbar-thumb);
        }
        
        .colors-panel-content::-webkit-scrollbar-track {
          background-color: transparent;
        }
        
        /* For Firefox */
        .colors-panel-content {
          scrollbar-width: none; /* Hide the default scrollbar */
        }
      `}</style>
      {/* Header */}
      <div className="flex items-center justify-between px-4 h-12 border-b border-[var(--border-default)]">
        <h2 className="title-text-bold text-[var(--text-primary)]">Color</h2>
        <div className="flex items-center gap-2">
          {/* Search Input */}
          <div className="w-64">
            <Input
              showSearchIcon
              placeholder="Search variables..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          {/* Select Button */}
          <Button variant="default" size="comfortable">
            <CheckDefaultIcon size={16} className="mr-1.5" />
            Select
          </Button>
          
          {/* New mode Button */}
          <Button variant="default" size="comfortable">
            <AddIcon size={16} className="mr-1.5" />
            New mode
          </Button>
          
          {/* New variable Button */}
          <Button variant="primary" size="comfortable">
            <AddIcon size={16} className="mr-1.5" />
            New variable
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto colors-panel-content">
        {/* Table Header */}
        <div className="flex items-center px-4 h-8 border-b border-[var(--border-default)]">
          <div className="w-[200px] body-text text-[var(--text-secondary)]">Name</div>
          <div className="w-[200px] body-text text-[var(--text-secondary)]">Base mode</div>
        </div>

        {/* Color Sections */}
        <div className="px-4 py-2 pb-6">
          {filteredSections.map((section, sectionIndex) => (
            <div key={section.name} className={sectionIndex > 0 ? 'mt-6' : ''}>
              {/* Section Header */}
              <div className="mb-2">
                <h3 className="title-text-bold text-[var(--text-primary)] capitalize">{section.name}</h3>
              </div>

              {/* Section Variables */}
              <div className="space-y-1">
                {section.variables.map((variable) => (
                  <div
                    key={variable.id}
                    className="flex items-center h-8 px-2 hover:bg-[var(--bg-raised)] rounded cursor-pointer"
                  >
                    <div className="w-[200px] flex items-center min-w-0">
                      <div className="mr-2 flex-shrink-0 flex items-center">
                        <DropletLargeIcon size={16} className="text-[var(--white)]" />
                      </div>
                      <span className="body-text text-[var(--white)]">{variable.name}</span>
                    </div>
                    <div className="w-[200px] flex items-center gap-2 body-text">
                      {renderColorSwatch(variable.color, section.name, variable.id)}
                      <span className="truncate text-[var(--white)]">{variable.value}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* New variable button */}
              <Button
                variant="ghost"
                size="comfortable"
                className="mt-2"
                onClick={() => {
                  // Handle new variable creation
                }}
              >
                <AddIcon size={16} className="mr-1.5" />
                New variable
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ColorsPanel;

