import React from "react";
import { motion } from "framer-motion";
import { INCOME, PERSON } from "@/lib/budgetData";
import { ArrowRight, Check } from "lucide-react";

export default function PaycheckBreakdown() {
  return (
    <section className="px-6 md:px-16 lg:px-24 py-20 border-t border-border">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <p className="text-[10px] font-mono tracking-[0.2em] text-primary uppercase mb-3">/ 02 — Paycheck breakdown</p>
        <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight">Gross → take-home</h2>
      </motion.div>

      <div className="max-w-3xl">
        {/* Gross */}
        <motion.div
          className="flex flex-col sm:flex-row sm:items-center justify-between p-5 bg-card border border-border rounded-t-2xl"
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <div>
            <p className="text-base font-semibold">Gross Salary</p>
            <p className="text-xs text-muted-foreground font-mono mt-0.5">{PERSON.jobTitle}</p>
          </div>
          <div className="text-right mt-3 sm:mt-0">
            <p className="text-2xl font-mono font-bold">${INCOME.grossSalary.toLocaleString('en-CA', { minimumFractionDigits: 2 })}</p>
            <p className="text-xs text-muted-foreground">${INCOME.grossAnnual.toLocaleString('en-CA', { minimumFractionDigits: 2 })}/yr</p>
          </div>
        </motion.div>

        {INCOME.deductions.map((d, i) => (
          <motion.div
            key={d.name}
            className="flex flex-col sm:flex-row sm:items-center justify-between p-5 bg-muted/40 border-x border-b border-border"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.08 * (i + 1) }}
          >
            <div className="flex items-start gap-3">
              <div className="mt-1 w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium">{d.name}</p>
                <p className="text-xs text-muted-foreground">{d.note}</p>
              </div>
            </div>
            <div className="text-right mt-3 sm:mt-0 ml-5">
              <p className="text-lg font-mono font-semibold" style={{ color: "hsl(4,80%,62%)" }}>
                −${Math.abs(d.monthly).toFixed(2)}
              </p>
              <p className="text-xs text-muted-foreground">−${Math.abs(d.annual).toFixed(2)}/yr</p>
            </div>
          </motion.div>
        ))}

        {/* Net */}
        <motion.div
          className="flex flex-col sm:flex-row sm:items-center justify-between p-5 rounded-b-2xl border-x border-b border-primary/25"
          style={{ background: "rgba(220,40,40,0.07)" }}
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.45 }}
        >
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center">
              <Check className="w-3.5 h-3.5 text-primary" />
            </div>
            <div>
              <p className="text-base font-bold text-primary">Net Take-Home Pay</p>
              <p className="text-xs text-muted-foreground">After all federal & provincial deductions</p>
            </div>
          </div>
          <div className="text-right mt-3 sm:mt-0">
            <p className="text-2xl font-mono font-bold text-primary">
              ${INCOME.netTakeHome.toLocaleString('en-CA', { minimumFractionDigits: 2 })}
            </p>
            <p className="text-xs text-muted-foreground">${INCOME.netAnnual.toLocaleString('en-CA', { minimumFractionDigits: 2 })}/yr</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}