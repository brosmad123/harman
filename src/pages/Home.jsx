import React from "react";
import HeroSection from "@/components/budget/HeroSection";
import SpendingBreakdown from "@/components/budget/SpendingBreakdown";
import PaycheckBreakdown from "@/components/budget/PaycheckBreakdown";
import ExpenseTable from "@/components/budget/ExpenseTable";
import FreeResources from "@/components/budget/FreeResources";
import CashFlowSummary from "@/components/budget/CashFlowSummary";
import StackGame from "@/components/budget/StackGame";
import Footer from "@/components/budget/Footer";
import {
  NEEDS, NEEDS_SUBTOTAL,
  HYGIENE, HYGIENE_SUBTOTAL,
  FOOD_LIFE, FOOD_LIFE_SUBTOTAL,
  WANTS, WANTS_SUBTOTAL,
} from "@/lib/budgetData";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground max-w-[1400px] mx-auto">
      <HeroSection />
      <SpendingBreakdown />
      <PaycheckBreakdown />

      <section className="px-6 md:px-16 lg:px-24 py-24">
        <div className="mb-10">
          <p className="text-[10px] font-mono tracking-[0.2em] text-primary uppercase mb-3">/ 03 — Every expense</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight">The full spending list</h2>
        </div>

        <div className="space-y-8">
          <ExpenseTable
            emoji="🏠"
            title="Essential Needs"
            subtitle="Monthly non-negotiable expenses"
            items={NEEDS}
            subtotal={NEEDS_SUBTOTAL}
          />
          <ExpenseTable
            emoji="🧴"
            title="Hygiene & Personal Care"
            subtitle="Monthly consumables for health & grooming"
            items={HYGIENE}
            subtotal={HYGIENE_SUBTOTAL}
          />
          <ExpenseTable
            emoji="☕"
            title="Food & Daily Life"
            subtitle="Consumables & everyday items"
            items={FOOD_LIFE}
            subtotal={FOOD_LIFE_SUBTOTAL}
          />
          <ExpenseTable
            emoji="🎯"
            title="Wants & Subscriptions"
            subtitle="Lifestyle & discretionary spending"
            items={WANTS}
            subtotal={WANTS_SUBTOTAL}
          />
        </div>
      </section>

      <FreeResources />
      <CashFlowSummary />
      <StackGame />
      <Footer />
    </div>
  );
}