import React from 'react';

export function ToastExample() {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-medium mb-2">Toast</h2>
      <p className="mb-4 text-sm text-[var(--text-secondary)]">Brief notifications that appear temporarily to provide feedback</p>
      
      <div className="p-8 bg-[var(--bg-primary)] border border-[var(--border-default)] rounded-lg flex items-center justify-center py-16">
        <p className="text-[var(--text-secondary)] font-medium">Coming soon</p>
      </div>
    </section>
  );
} 