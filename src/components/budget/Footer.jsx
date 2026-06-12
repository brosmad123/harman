import React from "react";
import { PERSON } from "@/lib/budgetData";

export default function Footer() {
  return (
    <footer className="px-6 md:px-16 lg:px-24 py-10 border-t border-border">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <p className="font-heading text-base font-bold">{PERSON.name}</p>
          <p className="text-[11px] font-mono text-muted-foreground mt-0.5">{PERSON.title} · {PERSON.subtitle}</p>
          <p className="text-[11px] font-mono text-muted-foreground">{PERSON.location}</p>
        </div>
        <div className="text-right">
          <p className="text-[11px] font-mono text-muted-foreground">June 2026 · Budget Snapshot · CAD</p>
          <div className="flex items-center justify-end gap-1.5 mt-1">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-[10px] font-mono text-muted-foreground/50">Financial Literacy Project</span>
          </div>
        </div>
      </div>
    </footer>
  );
}