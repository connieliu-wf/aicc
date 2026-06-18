import { Checkbox } from "@/components/spring-ui/checkbox";

export function CheckboxExample() {
  return (
    <section id="checkbox" className="mb-10">
      <h2 className="text-xl font-semibold mb-4">Checkbox</h2>
      <div className="bg-[var(--bg-primary)] border border-[var(--border-default)] p-4 rounded-md">
        <div className="space-y-2 max-w-md">
          <Checkbox label="Unchecked" />
          <Checkbox label="Checked" defaultChecked />
        </div>
        <p className="mt-2 text-sm text-[var(--text-secondary)]">Binary selection control for multiple choice options</p>
      </div>
    </section>
  );
} 