import React from "react";
import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { INCOME, NEEDS_SUBTOTAL, HYGIENE_SUBTOTAL, FOOD_LIFE_SUBTOTAL, WANTS_SUBTOTAL, BUDGET_SUMMARY } from "@/lib/budgetData";

const chartData = [
  { name: "Income", value: INCOME.netTakeHome, color: "#f56565" },
  { name: "Needs", value: NEEDS_SUBTOTAL.monthly, color: "#e53e3e" },
  { name: "Hygiene", value: HYGIENE_SUBTOTAL.monthly, color: "#dd6b20" },
  { name: "Food", value: FOOD_LIFE_SUBTOTAL.monthly, color: "#d69e2e" },
  { name: "Wants", value: WANTS_SUBTOTAL.monthly, color: "#c53030" },
  { name: "Savings", value: BUDGET_SUMMARY.balance, color: "#fc8181" },
];

const summaryRows = [
  { emoji: "💰", name: "Income after taxes", monthly: INCOME.netTakeHome, annual: INCOME.netAnnual, isIncome: true },
  { emoji: "🏠", name: "Total Needs", monthly: NEEDS_SUBTOTAL.monthly, annual: NEEDS_SUBTOTAL.annual },
  { emoji: "🧴", name: "Total Hygiene + Care", monthly: HYGIENE_SUBTOTAL.monthly, annual: HYGIENE_SUBTOTAL.annual },
  { emoji: "☕", name: "Total Food + Life", monthly: FOOD_LIFE_SUBTOTAL.monthly, annual: FOOD_LIFE_SUBTOTAL.annual },
  { emoji: "🆓", name: "Free Resources", monthly: 0, annual: 0 },
  { emoji: "🎯", name: "Total Wants", monthly: WANTS_SUBTOTAL.monthly, annual: WANTS_SUBTOTAL.annual },
  { emoji: "📋", name: "Total Expenses", monthly: BUDGET_SUMMARY.totalExpenses, annual: BUDGET_SUMMARY.totalExpensesAnnual, isTotal: true },
  { emoji: "✅", name: "Monthly Savings", monthly: BUDGET_SUMMARY.balance, annual: BUDGET_SUMMARY.balanceAnnual, isSavings: true },
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card border border-border rounded-lg px-3 py-2 shadow-xl">
        <p className="font-mono text-sm font-bold">${payload[0].value.toFixed(2)}</p>
        <p className="text-[11px] text-muted-foreground">{payload[0].payload.name}</p>
      </div>
    );
  }
  return null;
};

export default function CashFlowSummary() {
  return (
    <section className="px-6 md:px-16 lg:px-24 py-20 border-t border-border">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <p className="text-[10px] font-mono tracking-[0.2em] text-primary uppercase mb-3">/ 05 — End of month</p>
        <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight">Cash flow summary</h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-10">
        {/* Chart */}
        <motion.div
          className="lg:col-span-3 bg-card border border-border rounded-2xl p-6"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-5">Monthly breakdown</p>
          <div className="h-60">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 0, right: 0, bottom: 0, left: -10 }}>
                <XAxis dataKey="name" tick={{ fill: "hsl(10,10%,48%)", fontSize: 10, fontFamily: "DM Mono" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: "hsl(10,10%,48%)", fontSize: 10, fontFamily: "DM Mono" }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${v}`} />
                <Tooltip content={<CustomTooltip />} cursor={false} />
                <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                  {chartData.map((entry, i) => (
                    <Cell key={i} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Rate cards */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          <motion.div
            className="flex-1 bg-card border border-primary/20 rounded-2xl p-6 flex flex-col justify-between"
            style={{ background: "rgba(220,40,40,0.05)" }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-[10px] font-mono tracking-[0.18em] text-muted-foreground uppercase">📈 Savings Rate</p>
            <div>
              <p className="text-5xl font-mono font-extrabold text-primary">{BUDGET_SUMMARY.savingsRate}%</p>
              <p className="text-xs text-muted-foreground mt-1">of net monthly income</p>
            </div>
          </motion.div>
          <motion.div
            className="flex-1 bg-card border border-border rounded-2xl p-6 flex flex-col justify-between"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-[10px] font-mono tracking-[0.18em] text-muted-foreground uppercase">🔢 Expenses % of Net</p>
            <div>
              <p className="text-5xl font-mono font-extrabold">{BUDGET_SUMMARY.expensesPct}%</p>
              <p className="text-xs text-muted-foreground mt-1">total spending ratio</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Table */}
      <motion.div
        className="bg-card border border-border rounded-2xl overflow-hidden"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <div className="hidden md:grid grid-cols-3 px-6 py-3 text-[10px] font-mono tracking-[0.15em] text-muted-foreground uppercase border-b border-border bg-muted/20">
          <div>Category</div>
          <div className="text-right">Monthly</div>
          <div className="text-right">Annual</div>
        </div>
        {summaryRows.map((row) => (
          <div
            key={row.name}
            className={`grid grid-cols-1 md:grid-cols-3 gap-2 px-6 py-4 border-b border-border/40 last:border-0 ${
              row.isSavings ? "bg-primary/5" : row.isTotal ? "bg-muted/20" : ""
            }`}
          >
            <div className="flex items-center gap-2">
              <span className="text-base">{row.emoji}</span>
              <span className={`text-sm ${row.isSavings ? "font-bold text-primary" : row.isTotal ? "font-semibold" : "font-medium"}`}>
                {row.name}
              </span>
            </div>
            <div className={`text-right font-mono text-sm ${row.isSavings ? "font-bold text-primary" : ""}`}>
              ${row.monthly.toFixed(2)}
            </div>
            <div className={`text-right font-mono text-sm ${row.isSavings ? "font-bold text-primary" : "text-muted-foreground"}`}>
              ${row.annual.toFixed(2)}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}