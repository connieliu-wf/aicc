"use client"

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function StyleGuideLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      <div className="px-4">
        {children}
      </div>
    </div>
  );
} 