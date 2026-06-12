import React from "react";
import { motion } from "framer-motion";
import { FREE_RESOURCES } from "@/lib/budgetData";

export default function FreeResources() {
  return (
    <section className="px-6 md:px-16 lg:px-24 py-20 border-t border-border">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <p className="text-[10px] font-mono tracking-[0.2em] text-primary uppercase mb-3">/ 04 — Zero cost</p>
        <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight mb-3">No cost, still useful</h2>
        <p className="text-muted-foreground text-sm max-w-lg">
          Apps and services I use every day that don't cost a cent.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {FREE_RESOURCES.map((res, i) => (
          <motion.div
            key={res.name}
            className="group bg-card border border-border rounded-xl p-4 flex items-start gap-3 hover:border-primary/30 transition-all duration-200"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.04 }}
          >
            <span className="text-xl leading-none mt-0.5">{res.emoji}</span>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2 mb-1">
                <p className="font-semibold text-sm truncate">{res.name}</p>
                <span className="text-[9px] font-mono tracking-wider text-primary border border-primary/30 px-1.5 py-0.5 rounded flex-shrink-0">
                  FREE
                </span>
              </div>
              <p className="text-[11px] text-muted-foreground leading-relaxed">{res.note}</p>
              <p className="text-[10px] font-mono text-muted-foreground/50 mt-1.5 uppercase tracking-wider">{res.type}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <p className="text-center text-xs font-mono text-muted-foreground mt-8">
        $0.00/month · {FREE_RESOURCES.length} services leveraged daily
      </p>
    </section>
  );
}