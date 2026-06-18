import React, { useState } from 'react';
import { Row } from '@/components/spring-ui/row';
import { InfoIcon } from '@/icons/InfoIcon';
import { SettingsIcon } from '@/icons/SettingsIcon';
import { EditIcon } from '@/icons/EditIcon';
import { DeleteIcon } from '@/icons/DeleteIcon';
import { MoreIcon } from '@/icons/MoreIcon';
import { ChevronSmallRightIcon } from '@/icons/ChevronSmallRightIcon';
import { NotificationsIcon } from '@/icons/NotificationsIcon';

export function RowExample() {
  const [checkboxState, setCheckboxState] = useState({
    row1: false,
    row2: true
  });
  
  const [radioValue, setRadioValue] = useState("option1");

  return (
    <section className="mb-16">
      <h2 className="text-2xl font-medium mb-2">Row</h2>
      <p className="mb-4 text-sm text-[var(--text-secondary)]">Flexible layout component for displaying content in a horizontal arrangement</p>
      
      <div className="p-8 bg-[var(--bg-primary)] border border-[var(--border-default)] rounded-lg">
        {/* Basic Size Variants */}
        <div className="mb-8">
          <h3 className="text-md font-medium mb-4">Size Variants</h3>
          <div className="border border-[var(--border-default)] py-2 overflow-hidden">
            <Row 
              size="compact" 
              label="Compact Row" 
            />
            <Row 
              size="comfort" 
              label="Comfort Row (Default)" 
            />
          </div>
        </div>

        {/* Text Variations */}
        <div className="mb-8">
          <h3 className="text-md font-medium mb-4">Text Variations</h3>
          <div className="border border-[var(--border-default)] py-2 overflow-hidden">
            <Row 
              label="Basic Label" 
            />
            <Row 
              label="With Meta Text" 
              meta="Secondary text"
            />
            <Row 
              label="With Description" 
              description="This is a longer description that provides additional context"
            />
            <Row 
              label="Complete Example" 
              meta="Meta text"
              description="Both meta and description text shown together"
            />
          </div>
        </div>

        {/* Icons & Indicators */}
        <div className="mb-8">
          <h3 className="text-md font-medium mb-4">Icons & Indicators</h3>
          <div className="border border-[var(--border-default)] py-2 overflow-hidden">
            <Row 
              label="With Left Icon" 
              icon={<InfoIcon size={16} />}
            />
            <Row 
              label="With Right Chevron" 
              showChevron={true}
            />
            <Row 
              label="With Suffix Buttons" 
              suffixButtons={[
                <button key="edit" className="p-1 rounded hover:bg-[rgba(255,255,255,0.1)]">
                  <EditIcon size={16} />
                </button>,
                <button key="delete" className="p-1 rounded hover:bg-[rgba(255,255,255,0.1)]">
                  <DeleteIcon size={16} />
                </button>
              ]}
            />
            <Row 
              label="Selected State" 
              selected={true}
            />
          </div>
        </div>

        {/* Dividers */}
        <div className="mb-8">
          <h3 className="text-md font-medium mb-4">Dividers</h3>
          <div className="border border-[var(--border-default)] py-2 overflow-hidden">
            <Row 
              label="Top Divider" 
              topDivider={true}
            />
            <Row 
              label="Bottom Divider" 
              bottomDivider={true}
            />
            <Row 
              label="No Dividers" 
            />
            <Row 
              label="Both Dividers" 
              topDivider={true}
              bottomDivider={true}
            />
          </div>
        </div>

        {/* Interactive Controls */}
        <div className="mb-8">
          <h3 className="text-md font-medium mb-4">Interactive Controls</h3>
          <div className="border border-[var(--border-default)] py-2 overflow-hidden">
            <Row 
              label="Checkbox Row (unchecked)" 
              checkbox={true}
              checked={checkboxState.row1}
              onCheckChange={(e) => setCheckboxState(prev => ({ ...prev, row1: e.target.checked }))}
            />
            <Row 
              label="Checkbox Row (checked)" 
              checkbox={true}
              checked={checkboxState.row2}
              onCheckChange={(e) => setCheckboxState(prev => ({ ...prev, row2: e.target.checked }))}
            />
            <Row 
              label="Radio Option 1"
              radio={true}
              radioValue="option1"
              selected={radioValue === "option1"}
              onClick={() => setRadioValue("option1")}
            />
            <Row 
              label="Radio Option 2"
              radio={true}
              radioValue="option2"
              selected={radioValue === "option2"}
              onClick={() => setRadioValue("option2")}
            />
          </div>
        </div>

        {/* Complete Complex Examples */}
        <div>
          <h3 className="text-md font-medium mb-4">Complex Examples</h3>
          <div className="border border-[var(--border-default)] py-2 overflow-hidden">
            <Row 
              size="comfort"
              label="Settings Option" 
              description="Configure advanced settings"
              icon={<SettingsIcon size={16} />}
              showChevron={true}
              selected={true}
            />
            <Row 
              size="comfort"
              label="Enable Notifications" 
              meta="On"
              icon={<NotificationsIcon size={16} />}
              checkbox={true}
              checked={true}
              onCheckChange={() => {}}
              bottomDivider={true}
            />
            <Row 
              size="comfort"
              label="Menu Option" 
              description="With suffix actions and icon"
              icon={<InfoIcon size={16} />}
              suffixButtons={[
                <button key="edit" className="p-1 rounded hover:bg-[rgba(255,255,255,0.1)]">
                  <EditIcon size={16} />
                </button>,
                <button key="more" className="p-1 rounded hover:bg-[rgba(255,255,255,0.1)]">
                  <MoreIcon size={16} />
                </button>
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
} 