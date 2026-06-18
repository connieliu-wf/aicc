import { Switch } from "@/components/spring-ui/switch";

export function SwitchExample() {
  return (
    <section id="switch" className="mb-10">
      <h2 className="text-xl font-semibold mb-4">Switch</h2>
      <div className="bg-[var(--bg-primary)] border border-[var(--border-default)] p-4 rounded-md">
        <div className="space-y-4 max-w-md">
          <div className="flex items-center justify-between">
            <Switch aria-label="Disabled" />
          </div>
          <div className="flex items-center justify-between">
            <Switch aria-label="Enabled" defaultChecked />
          </div>
        </div>
        <p className="mt-2 text-sm text-[var(--text-secondary)]">Toggle control for binary settings with on/off states</p>
      </div>
    </section>
  );
} 