import React from "react";
import { motion } from "framer-motion";
import { NEEDS_SUBTOTAL, HYGIENE_SUBTOTAL, FOOD_LIFE_SUBTOTAL, WANTS_SUBTOTAL, BUDGET_SUMMARY } from "@/lib/budgetData";

const categories = [
  { name: "Needs", amount: NEEDS_SUBTOTAL.monthly, color: "#e53e3e", bg: "bg-red-600" },
  { name: "Hygiene", amount: HYGIENE_SUBTOTAL.monthly, color: "#dd6b20", bg: "bg-orange-600" },
  { name: "Food & Life", amount: FOOD_LIFE_SUBTOTAL.monthly, color: "#d69e2e", bg: "bg-yellow-600" },
  { name: "Wants", amount: WANTS_SUBTOTAL.monthly, color: "#c53030", bg: "bg-red-800" },
  { name: "Savings", amount: BUDGET_SUMMARY.balance, color: "#f56565", bg: "bg-red-400" },
];

export default function SpendingBreakdown() {
  const total = categories.reduce((s, c) => s + c.amount, 0);

  return (
    <section className="px-6 md:px-16 lg:px-24 py-20 border-t border-border">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <p className="text-[10px] font-mono tracking-[0.2em] text-primary uppercase mb-3">/ 01 — How it's split</p>
        <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight">Where the money goes</h2>
      </motion.div>

      {/* Stacked bar */}
      <div className="flex w-full h-6 rounded-lg overflow-hidden mb-6 gap-px">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.name}
            className="h-full rounded-sm"
            style={{ backgroundColor: cat.color }}
            initial={{ width: 0 }}
            whileInView={{ width: `${(cat.amount / total) * 100}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 + i * 0.12, ease: "easeOut" }}
          />
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.name}
            className="bg-card border border-border rounded-xl p-4 group hover:border-primary/40 transition-colors"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: cat.color }} />
              <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">{cat.name}</span>
            </div>
            <p className="text-xl font-mono font-bold">${cat.amount.toFixed(2)}</p>
            <p className="text-[11px] text-muted-foreground mt-1">{((cat.amount / total) * 100).toFixed(1)}% of total</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}