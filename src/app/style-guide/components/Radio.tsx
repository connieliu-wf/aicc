import { Radio } from "@/components/spring-ui/radio";

export function RadioExample() {
  return (
    <section id="radio" className="mb-10">
      <h2 className="text-xl font-semibold mb-4">Radio</h2>
      <div className="bg-[var(--bg-primary)] border border-[var(--border-default)] p-4 rounded-md">
        <div className="flex flex-col space-y-2 max-w-md">
          <Radio name="radio-group" label="Radio 1" defaultChecked />
          <Radio name="radio-group" label="Radio 2" />
          <Radio name="radio-group" label="Radio 3" />
        </div>
        <p className="mt-2 text-sm text-[var(--text-secondary)]">Single selection control for mutually exclusive options</p>
      </div>
    </section>
  );
} 