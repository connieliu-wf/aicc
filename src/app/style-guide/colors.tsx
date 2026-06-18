import React, { useState, useEffect } from "react";

// Helper function to get computed CSS value
const getCssVarValue = (varName: string): string => {
  if (typeof window !== 'undefined') {
    return getComputedStyle(document.documentElement).getPropertyValue(varName).trim();
  }
  return '';
};

type ColorSampleProps = {
  name: string;
  variable: string;
  description?: string;
};

const ColorSample = ({ name, variable, description }: ColorSampleProps) => {
  const [colorValue, setColorValue] = useState<string>('');

  useEffect(() => {
    const updateColor = () => {
      setColorValue(getCssVarValue(variable));
    };
    
    updateColor();
    
    // Listen for theme changes
    const observer = new MutationObserver(() => {
      updateColor();
    });
    
    if (document.documentElement) {
      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['class']
      });
    }
    
    return () => observer.disconnect();
  }, [variable]);

  return (
    <div className="flex flex-col space-y-2">
      <div 
        className="h-16 rounded-md border border-[var(--border-default)]" 
        style={{ backgroundColor: `var(${variable})` }}
      ></div>
      <div className="space-y-1">
        <p className="body-text font-medium text-[var(--text-primary)]">{name}</p>
        {description && (
          <p className="caption-text text-[var(--text-secondary)]">{description}</p>
        )}
        <code className="caption-text text-[var(--text-dimmed)] font-mono">
          var({variable})
        </code>
        {colorValue && (
          <code className="caption-text text-[var(--text-dimmed)] font-mono block">
            {colorValue}
          </code>
        )}
      </div>
    </div>
  );
};

export function ColorsSection() {
  return (
    <div className="space-y-8">
      
      {/* Text Colors */}
      <section>
        <h3 className="heading-text mb-4 text-[var(--text-primary)]">Text Colors</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          <ColorSample 
            name="Primary Text" 
            variable="--text-primary" 
            description="Main body text and headings"
          />
          <ColorSample 
            name="Secondary Text" 
            variable="--text-secondary" 
            description="Supporting text and labels"
          />
          <ColorSample 
            name="Dimmed Text" 
            variable="--text-dimmed" 
            description="Placeholder and disabled text"
          />
        </div>
      </section>

      {/* Background Colors */}
      <section>
        <h3 className="heading-text mb-4 text-[var(--text-primary)]">Background Colors</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <ColorSample 
            name="Primary Background" 
            variable="--bg-primary" 
            description="Main canvas and content areas"
          />
          <ColorSample 
            name="Secondary Background" 
            variable="--bg-secondary" 
            description="Panel and card backgrounds"
          />
          <ColorSample 
            name="Tertiary Background" 
            variable="--bg-tertiary" 
            description="Subtle section dividers"
          />
          <ColorSample 
            name="Raised Background" 
            variable="--bg-raised" 
            description="Hover and active states"
          />
        </div>
      </section>
      
      {/* Action Colors */}
      <section>
        <h3 className="heading-text mb-4 text-[var(--text-primary)]">Action Colors</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="body-text font-medium text-[var(--text-primary)]">Primary Actions</h4>
            <div className="grid grid-cols-2 gap-4">
              <ColorSample 
                name="Primary" 
                variable="--action-primary-bg" 
                description="Main CTA buttons"
              />
              <ColorSample 
                name="Primary Hover" 
                variable="--action-primary-bg-hover" 
                description="Primary button hover state"
              />
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="body-text font-medium text-[var(--text-primary)]">Secondary Actions</h4>
            <div className="grid grid-cols-2 gap-4">
              <ColorSample 
                name="Secondary" 
                variable="--action-secondary-bg" 
                description="Secondary buttons"
              />
              <ColorSample 
                name="Secondary Hover" 
                variable="--action-secondary-bg-hover" 
                description="Secondary button hover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Border & Input Colors */}
      <section>
        <h3 className="heading-text mb-4 text-[var(--text-primary)]">Borders & Inputs</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <ColorSample 
            name="Default Border" 
            variable="--border-default" 
            description="Standard borders and dividers"
          />
          <ColorSample 
            name="Input Background" 
            variable="--input-bg" 
            description="Form input backgrounds"
          />
          <ColorSample 
            name="Input Border" 
            variable="--input-border" 
            description="Form input borders"
          />
          <ColorSample 
            name="Input Focus" 
            variable="--input-border-focus" 
            description="Focused input border"
          />
        </div>
      </section>
      
      {/* Semantic Colors */}
      <section>
        <h3 className="heading-text mb-4 text-[var(--text-primary)]">Semantic Colors</h3>
        
        {/* Blue */}
        <div className="mb-6">
          <h4 className="body-text font-medium mb-3 text-[var(--text-blue)]">Blue</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <ColorSample name="Blue Background" variable="--blue-bg" />
            <ColorSample name="Blue Canvas" variable="--blue-canvas" />
            <ColorSample name="Blue Text" variable="--text-blue" />
            <ColorSample name="Blue Transparent" variable="--blue-bg-transparent" />
          </div>
        </div>
        
        {/* Green */}
        <div className="mb-6">
          <h4 className="body-text font-medium mb-3 text-[var(--text-green)]">Green</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <ColorSample name="Green Background" variable="--green-bg" />
            <ColorSample name="Green Canvas" variable="--green-canvas" />
            <ColorSample name="Green Text" variable="--text-green" />
            <ColorSample name="Green Transparent" variable="--green-bg-transparent" />
          </div>
        </div>
        
        {/* Red */}
        <div className="mb-6">
          <h4 className="body-text font-medium mb-3 text-[var(--text-red)]">Red</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <ColorSample name="Red Background" variable="--red-bg" />
            <ColorSample name="Red Canvas" variable="--red-canvas" />
            <ColorSample name="Red Text" variable="--text-red" />
            <ColorSample name="Red Transparent" variable="--red-bg-transparent" />
          </div>
        </div>
        
        {/* Orange */}
        <div className="mb-6">
          <h4 className="body-text font-medium mb-3 text-[var(--text-orange)]">Orange</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <ColorSample name="Orange Background" variable="--orange-bg" />
            <ColorSample name="Orange Canvas" variable="--orange-canvas" />
            <ColorSample name="Orange Text" variable="--text-orange" />
            <ColorSample name="Orange Transparent" variable="--orange-bg-transparent" />
          </div>
        </div>
        
        {/* Purple */}
        <div className="mb-6">
          <h4 className="body-text font-medium mb-3 text-[var(--text-purple)]">Purple</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <ColorSample name="Purple Background" variable="--purple-bg" />
            <ColorSample name="Purple Canvas" variable="--purple-canvas" />
            <ColorSample name="Purple Text" variable="--text-purple" />
            <ColorSample name="Purple Transparent" variable="--purple-bg-transparent" />
          </div>
        </div>
        
        {/* Pink */}
        <div className="mb-6">
          <h4 className="body-text font-medium mb-3 text-[var(--text-pink)]">Pink</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <ColorSample name="Pink Background" variable="--pink-bg" />
            <ColorSample name="Pink Canvas" variable="--pink-canvas" />
            <ColorSample name="Pink Text" variable="--text-pink" />
            <ColorSample name="Pink Transparent" variable="--pink-bg-transparent" />
          </div>
        </div>
        
        {/* Yellow */}
        <div className="mb-6">
          <h4 className="body-text font-medium mb-3 text-[var(--text-yellow)]">Yellow</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <ColorSample name="Yellow Background" variable="--yellow-bg" />
            <ColorSample name="Yellow Canvas" variable="--yellow-canvas" />
            <ColorSample name="Yellow Text" variable="--text-yellow" />
            <ColorSample name="Yellow Transparent" variable="--yellow-bg-transparent" />
          </div>
        </div>
      </section>
      
      {/* Component Colors */}
      <section>
        <h3 className="heading-text mb-4 text-[var(--text-primary)]">Component Colors</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          <ColorSample 
            name="Button Default" 
            variable="--button-default-bg" 
            description="Default button background"
          />
          <ColorSample 
            name="Segmented Control" 
            variable="--segmented-control-bg" 
            description="Segmented control container"
          />
          <ColorSample 
            name="Selected Button" 
            variable="--segmented-control-button-bg" 
            description="Active segmented control item"
          />
        </div>
      </section>
      
    </div>
  );
} 