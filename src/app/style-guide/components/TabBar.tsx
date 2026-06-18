import { useState } from "react";
import { TabBar, TabBarItem } from "@/components/spring-ui/tab-bar";

export function TabBarExample() {
  const [activeTab, setActiveTab] = useState("dashboard");
  
  return (
    <section id="tab-bar" className="mb-10">
      <h2 className="text-xl font-semibold mb-4">Tab Bar</h2>
      
      <div className="bg-[var(--bg-primary)] border border-[var(--border-default)] p-4 rounded-md">
        <p className="mb-4 text-sm text-[var(--text-secondary)]">Horizontal navigation component for switching between related content sections</p>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-3">Tab Bar Examples</h3>
            
            <div className="space-y-2 max-w-md">
              <p className="text-sm text-[var(--text-secondary)] mb-2">Standard Tabs</p>
              <TabBar value={activeTab} onValueChange={setActiveTab}>
                <TabBarItem value="dashboard">Dashboard</TabBarItem>
                <TabBarItem value="analytics">Analytics</TabBarItem>
                <TabBarItem value="settings">Settings</TabBarItem>
                <TabBarItem value="profile">Profile</TabBarItem>
              </TabBar>
            </div>
            
            <div className="space-y-2 mt-4 max-w-md">
              <p className="text-sm text-[var(--text-secondary)] mb-2">Full Width</p>
              <TabBar fullWidth value={activeTab} onValueChange={setActiveTab}>
                <TabBarItem value="dashboard">Dashboard</TabBarItem>
                <TabBarItem value="analytics">Analytics</TabBarItem>
                <TabBarItem value="settings">Settings</TabBarItem>
                <TabBarItem value="profile">Profile</TabBarItem>
              </TabBar>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 