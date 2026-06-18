import React from "react";

export function TypographySection() {
  return (
    <div className="space-y-8">

      {/* Standard Typography */}
      <section>
        <h2 className="text-[var(--text-primary)] text-lg font-semibold mb-4">Standard Typography</h2>
        <div className="space-y-6 bg-[var(--bg-secondary)] p-4 rounded-md">
          <div>
            <p className="title-text">Title</p>
            <p className="text-[var(--text-secondary)] text-sm mt-1">title-text</p>
          </div>
          <div>
            <p className="title-text-bold">Title Bold</p>
            <p className="text-[var(--text-secondary)] text-sm mt-1">title-text-bold</p>
          </div>
          <div>
            <p className="body-text">Body Text (Primary)</p>
            <p className="text-[var(--text-secondary)] text-sm mt-1">body-text</p>
          </div>
          <div>
            <p className="body-text-bold">Body Text Bold</p>
            <p className="text-[var(--text-secondary)] text-sm mt-1">body-text-bold</p>
          </div>
          <div>
            <p className="small-text">Small Text</p>
            <p className="text-[var(--text-secondary)] text-sm mt-1">small-text</p>
          </div>
          <div>
            <p className="code-text">Code Text (Monospace)</p>
            <p className="text-[var(--text-secondary)] text-sm mt-1">code-text</p>
          </div>
        </div>
      </section>

      {/* Branded Typography */}
      <section>
        <h2 className="text-[var(--text-primary)] text-lg font-semibold mb-4">Branded Typography (WF Visual Sans)</h2>
        
        {/* BRANDED - Help Styles */}
        <div className="mb-6">
          <h3 className="text-[var(--text-primary)] font-semibold mb-2">Branded - Help</h3>
          <div className="space-y-2 bg-[var(--bg-secondary)] p-4 rounded-md">
            <div>
              <p className="branded-help-normal text-[var(--text-primary)]">Branded Help Normal - 12/16</p>
              <p className="text-[var(--text-secondary)] text-sm mt-1">branded-help-normal</p>
            </div>
            <div>
              <p className="branded-help-semibold text-[var(--text-primary)]">Branded Help SemiBold - 12/16</p>
              <p className="text-[var(--text-secondary)] text-sm mt-1">branded-help-semibold</p>
            </div>
          </div>
        </div>

        {/* BODY Styles */}
        <div className="mb-6">
          <h3 className="text-[var(--text-primary)] font-semibold mb-2">Branded - Body</h3>
          <div className="space-y-2 bg-[var(--bg-secondary)] p-4 rounded-md">
            <div>
              <p className="branded-body-normal text-[var(--text-primary)]">Branded Body Normal - 14/24</p>
              <p className="text-[var(--text-secondary)] text-sm mt-1">branded-body-normal</p>
            </div>
            <div>
              <p className="branded-body-semibold text-[var(--text-primary)]">Branded Body SemiBold - 14/24</p>
              <p className="text-[var(--text-secondary)] text-sm mt-1">branded-body-semibold</p>
            </div>
          </div>
        </div>

        {/* HEADING Styles */}
        <div className="mb-6">
          <h3 className="text-[var(--text-primary)] font-semibold mb-2">Branded - Heading</h3>
          <div className="space-y-2 bg-[var(--bg-secondary)] p-4 rounded-md">
            <div>
              <p className="branded-heading-normal text-[var(--text-primary)]">Branded Heading Normal - 16/160</p>
              <p className="text-[var(--text-secondary)] text-sm mt-1">branded-heading-normal</p>
            </div>
            <div>
              <p className="branded-heading-semibold text-[var(--text-primary)]">Branded Heading SemiBold - 16/160</p>
              <p className="text-[var(--text-secondary)] text-sm mt-1">branded-heading-semibold</p>
            </div>
          </div>
        </div>

        {/* DISPLAY Styles */}
        <div className="mb-6">
          <h3 className="text-[var(--text-primary)] font-semibold mb-2">Branded - Display</h3>
          <div className="space-y-4 bg-[var(--bg-secondary)] p-4 rounded-md">
            <div>
              <p className="branded-display-1 text-[var(--text-primary)]">Branded Display 1 - 84/96</p>
              <p className="text-[var(--text-secondary)] text-sm mt-1">branded-display-1</p>
            </div>
            <div>
              <p className="branded-display-2 text-[var(--text-primary)]">Branded Display 2 - 60/104</p>
              <p className="text-[var(--text-secondary)] text-sm mt-1">branded-display-2</p>
            </div>
            <div>
              <p className="branded-display-3 text-[var(--text-primary)]">Branded Display 3 - 32/104</p>
              <p className="text-[var(--text-secondary)] text-sm mt-1">branded-display-3</p>
            </div>
            <div>
              <p className="branded-display-4 text-[var(--text-primary)]">Branded Display 4 - 24/130</p>
              <p className="text-[var(--text-secondary)] text-sm mt-1">branded-display-4</p>
            </div>
            <div>
              <p className="branded-display-5 text-[var(--text-primary)]">Branded Display 5 - 18/130</p>
              <p className="text-[var(--text-secondary)] text-sm mt-1">branded-display-5</p>
            </div>
            <div>
              <p className="branded-display-6 text-[var(--text-primary)]">Branded Display 6 - 16/130</p>
              <p className="text-[var(--text-secondary)] text-sm mt-1">branded-display-6</p>
            </div>
            <div>
              <p className="branded-display-subtitle text-[var(--text-primary)]">Branded Display Subtitle - 18/160</p>
              <p className="text-[var(--text-secondary)] text-sm mt-1">branded-display-subtitle</p>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
} 