import React from "react";
import { Icon } from "@/components/spring-ui/icon";

export function IconsSection() {
  return (
    <div className="space-y-8 text-[var(--text-primary)]">
      
      {/* Common icons */}
      <section>
        <h3 className="text-lg font-medium mb-3">Common Icons (16px, white @ 67% opacity)</h3>
        <div className="flex flex-wrap items-center gap-6 p-4">
          <div className="flex flex-col items-center">
            <Icon name="AddIcon" />
            <span className="body-text mt-1">AddIcon</span>
          </div>
          <div className="flex flex-col items-center">
            <Icon name="AccountIcon" />
            <span className="body-text mt-1">AccountIcon</span>
          </div>
          <div className="flex flex-col items-center">
            <Icon name="HomeIcon" />
            <span className="body-text mt-1">HomeIcon</span>
          </div>
          <div className="flex flex-col items-center">
            <Icon name="SearchDefaultIcon" />
            <span className="body-text mt-1">SearchDefaultIcon</span>
          </div>
          <div className="flex flex-col items-center">
            <Icon name="UserIcon" />
            <span className="body-text mt-1">UserIcon</span>
          </div>
          <div className="flex flex-col items-center">
            <Icon name="SettingsAltIcon" />
            <span className="body-text mt-1">SettingsAltIcon</span>
          </div>
        </div>
      </section>

      {/* Icon colors */}
      <section>
        <h3 className="text-lg font-medium mb-3">Icon Colors</h3>
        <div className="flex flex-wrap items-center gap-6 p-4">
          <div className="flex flex-col items-center">
            <Icon name="AccountIcon" />
            <span className="body-text mt-1">Default (white @ 67%)</span>
          </div>
          <div className="flex flex-col items-center">
            <Icon name="AccountIcon" className="text-[var(--text-blue)]" />
            <span className="body-text text-[var(--text-blue)] mt-1">Blue (blue-text)</span>
          </div>
          <div className="flex flex-col items-center">
            <Icon name="AccountIcon" className="text-[var(--text-green)]" />
            <span className="body-text text-[var(--text-green)] mt-1">Green (green-text)</span>
          </div>
          <div className="flex flex-col items-center">
            <Icon name="AccountIcon" className="text-[var(--text-purple)]" />
            <span className="body-text text-[var(--text-purple)] mt-1">Purple (purple-text)</span>
          </div>
          <div className="flex flex-col items-center">
            <Icon name="AccountIcon" className="text-[var(--text-pink)]" />
            <span className="body-text text-[var(--text-pink)] mt-1">Pink (pink-text)</span>
          </div>
          <div className="flex flex-col items-center">
            <Icon name="AccountIcon" className="text-[var(--text-orange)]" />
            <span className="body-text text-[var(--text-orange)] mt-1">Orange (orange-text)</span>
          </div>
          <div className="flex flex-col items-center">
            <Icon name="AccountIcon" className="text-[var(--text-red)]" />
            <span className="body-text text-[var(--text-red)] mt-1">Red (red-text)</span>
          </div>
          <div className="flex flex-col items-center">
            <Icon name="AccountIcon" className="text-[var(--text-yellow)]" />
            <span className="body-text text-[var(--text-yellow)] mt-1">Yellow (yellow-text)</span>
          </div>
        </div>
      </section>

    </div>
  );
} 