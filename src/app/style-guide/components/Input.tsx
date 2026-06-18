import { Input } from "@/components/spring-ui/input";

export function InputExample() {
  return (
    <section id="input" className="mb-10">
      <h2 className="text-xl font-semibold mb-4">Input</h2>
      <div className="bg-[var(--bg-primary)] border border-[var(--border-default)] p-4 rounded-md">
        <div className="max-w-md">
          <Input placeholder="Input" />
          <p className="mt-2 text-sm text-[var(--text-secondary)]">Standard text input field for single-line text entry</p>
        </div>
      </div>
    </section>
  );
} 