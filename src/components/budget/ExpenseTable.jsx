import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function ExpenseTable({ emoji, title, subtitle, items, subtotal }) {
  const [expanded, setExpanded] = useState(false);
  const displayItems = expanded ? items : items.slice(0, 5);

  return (
    <motion.div
      className="border border-border rounded-2xl overflow-hidden bg-card"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <div className="flex items-center gap-4 px-6 py-5 border-b border-border">
        <span className="text-3xl leading-none">{emoji}</span>
        <div>
          <h3 className="font-heading text-xl font-bold">{title}</h3>
          <p className="text-xs text-muted-foreground mt-0.5">{subtitle}</p>
        </div>
      </div>

      {/* Column headers */}
      <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-2.5 text-[10px] font-mono tracking-[0.15em] text-muted-foreground uppercase bg-muted/20 border-b border-border/60">
        <div className="col-span-5">Item</div>
        <div className="col-span-2 text-right">Monthly</div>
        <div className="col-span-2 text-right">Annual</div>
        <div className="col-span-1 text-right">% Net</div>
        <div className="col-span-2 text-right">Source</div>
      </div>

      <AnimatePresence mode="sync">
        {displayItems.map((item, i) => (
          <motion.div
            key={item.name}
            className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 px-6 py-4 border-b border-border/40 hover:bg-muted/15 transition-colors duration-150"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15, delay: i * 0.025 }}
          >
            <div className="col-span-5 flex items-center gap-3">
              <span className="text-lg leading-none">{item.emoji}</span>
              <div>
                <p className="text-sm font-medium leading-snug">{item.name}</p>
                <p className="text-[11px] text-muted-foreground leading-snug md:hidden mt-0.5">{item.note}</p>
              </div>
            </div>
            <div className="col-span-2 flex md:justify-end items-center">
              <span className="font-mono text-sm font-semibold">${item.monthly.toFixed(2)}</span>
            </div>
            <div className="col-span-2 hidden md:flex justify-end items-center">
              <span className="font-mono text-sm text-muted-foreground">${item.annual.toLocaleString('en-CA', { minimumFractionDigits: 2 })}</span>
            </div>
            <div className="col-span-1 hidden md:flex justify-end items-center">
              <span className="font-mono text-xs text-muted-foreground">{item.pct}</span>
            </div>
            <div className="col-span-2 hidden md:flex justify-end items-center">
              <span className="text-[11px] text-muted-foreground/60 text-right truncate">{item.source}</span>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>

      {items.length > 5 && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full px-6 py-3 flex items-center justify-center gap-2 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors border-b border-border/40"
        >
          {expanded ? "Show less" : `+ ${items.length - 5} more items`}
          <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`} />
        </button>
      )}

      {/* Subtotal */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between px-6 py-4 bg-muted/25">
        <span className="text-[10px] font-mono tracking-[0.2em] text-muted-foreground uppercase">Subtotal</span>
        <div className="flex items-center gap-6 mt-2 sm:mt-0">
          <span className="font-mono font-bold text-base">${subtotal.monthly.toFixed(2)}</span>
          <span className="font-mono text-sm text-muted-foreground">${subtotal.annual.toLocaleString('en-CA', { minimumFractionDigits: 2 })}/yr</span>
          <span className="font-mono text-xs text-muted-foreground">{subtotal.pct}</span>
        </div>
      </div>
    </motion.div>
  );
}