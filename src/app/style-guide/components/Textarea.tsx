import { Textarea } from "@/components/spring-ui/textarea";

export function TextareaExample() {
  return (
    <section id="textarea" className="mb-10">
      <h2 className="text-xl font-semibold mb-4">Textarea</h2>
      <div className="bg-[var(--bg-primary)] border border-[var(--border-default)] p-4 rounded-md">
        <div className="max-w-md">
          <Textarea placeholder="Textarea" />
          <p className="mt-2 text-sm text-[var(--text-secondary)]">Multi-line text input field for longer content</p>
        </div>
      </div>
    </section>
  );
} 