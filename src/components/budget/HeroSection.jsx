import React from "react";
import { motion } from "framer-motion";
import { PERSON, INCOME, BUDGET_SUMMARY } from "@/lib/budgetData";
import { TrendingDown, TrendingUp, DollarSign } from "lucide-react";

export default function HeroSection() {
  const totalSpending = BUDGET_SUMMARY.totalExpenses;
  const savings = BUDGET_SUMMARY.balance;
  const spentPct = parseFloat(BUDGET_SUMMARY.expensesPct);
  const savedPct = parseFloat(BUDGET_SUMMARY.savingsRate);

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 pt-20 pb-16 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full opacity-5 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(4,80%,52%), transparent)" }} />
      <div className="absolute bottom-20 right-10 w-64 h-64 rounded-full opacity-5 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(20,90%,55%), transparent)" }} />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mb-10"
      >
        <div className="inline-flex items-center gap-3 mb-8 border border-border rounded-full px-4 py-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          <span className="text-[11px] font-mono tracking-[0.2em] text-muted-foreground uppercase">
            June 2026 · Brampton, ON · CAD
          </span>
        </div>

        <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tight leading-[0.85] mb-3">
          <span className="text-foreground">Harman</span><br />
          <span style={{ WebkitTextStroke: "1px hsl(4,80%,52%)", color: "transparent" }}>Sidhu</span>
        </h1>
        <p className="text-muted-foreground text-base md:text-lg font-mono mt-6 max-w-lg">
          Continuous Improvement Engineer · Financial Literacy Project
        </p>
        <p className="text-muted-foreground/60 text-sm mt-1">
          A breakdown of every dollar — where it comes from, where it goes.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.25 }}
        className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10"
      >
        {[
          {
            label: "Take-Home Pay",
            value: `$${INCOME.netTakeHome.toLocaleString('en-CA', { minimumFractionDigits: 2 })}`,
            sub: "after taxes & deductions",
            icon: DollarSign,
            highlight: false,
          },
          {
            label: "Going to Savings",
            value: `$${savings.toFixed(2)}`,
            sub: `${savedPct}% of take-home`,
            icon: TrendingUp,
            highlight: true,
          },
          {
            label: "Total Spending",
            value: `$${totalSpending.toFixed(2)}`,
            sub: "across all categories",
            icon: TrendingDown,
            highlight: false,
          },
        ].map((card, i) => (
          <motion.div
            key={card.label}
            className={`rounded-2xl p-6 border ${
              card.highlight
                ? "border-primary/30 bg-primary/8"
                : "border-border bg-card"
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 + i * 0.1 }}
            style={card.highlight ? { background: "rgba(220,40,40,0.06)" } : {}}
          >
            <div className="flex items-start justify-between mb-3">
              <p className="text-[10px] font-mono tracking-[0.18em] text-muted-foreground uppercase">{card.label}</p>
              <card.icon className={`w-4 h-4 ${card.highlight ? "text-primary" : "text-muted-foreground/40"}`} />
            </div>
            <p className={`text-3xl md:text-4xl font-mono font-bold ${card.highlight ? "text-primary" : ""}`}>
              {card.value}
            </p>
            <p className="text-xs text-muted-foreground mt-1.5">{card.sub}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.65 }}
      >
        <div className="flex justify-between text-xs font-mono mb-2">
          <span className="text-muted-foreground">Spent this month</span>
          <span className="text-muted-foreground">${totalSpending.toFixed(2)} of ${INCOME.netTakeHome.toLocaleString('en-CA', { minimumFractionDigits: 2 })}</span>
        </div>
        <div className="w-full h-1.5 bg-border rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{ background: "linear-gradient(90deg, hsl(4,80%,52%), hsl(20,90%,55%))" }}
            initial={{ width: 0 }}
            animate={{ width: `${spentPct}%` }}
            transition={{ duration: 1.6, delay: 0.8, ease: "easeOut" }}
          />
        </div>
        <div className="flex justify-between text-xs mt-2">
          <span className="text-muted-foreground">{spentPct}% spent</span>
          <span className="text-primary font-mono font-medium">+${savings.toFixed(2)} saved</span>
        </div>
      </motion.div>

      <motion.div
        className="mt-14 flex items-center gap-2 text-muted-foreground/40 text-xs font-mono"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
      >
        <span className="animate-bounce inline-block">↓</span>
        <span>scroll to see full breakdown</span>
      </motion.div>
    </section>
  );
}