import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { BUDGET_SUMMARY } from "@/lib/budgetData";

const CANVAS_W = 360;
const CANVAS_H = 500;
const BLOCK_H = 28;
const INITIAL_W = 200;
const MOVE_SPEED_START = 2.5;
const COLORS = [
  "#e53e3e", "#c53030", "#dd6b20", "#b7791f",
  "#e05d44", "#f56565", "#fc8181", "#c0392b",
];

const MONEY_LABELS = [
  "💰 Savings", "📈 RRSP", "🏠 Rent", "☕ Coffee",
  "💳 Card", "🛒 Food", "💊 Meds", "🎮 Xbox",
  "🚌 Transit", "📦 Amazon", "🏋️ Gym", "📱 Phone",
];

function drawBlock(ctx, x, y, w, h, color, label, alpha = 1) {
  ctx.globalAlpha = alpha;
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.roundRect ? ctx.roundRect(x, y, w, h, 4) : ctx.rect(x, y, w, h);
  ctx.fill();

  // Highlight top edge
  ctx.fillStyle = "rgba(255,255,255,0.18)";
  ctx.fillRect(x + 2, y + 2, w - 4, 3);

  // Label
  if (w > 50) {
    ctx.globalAlpha = alpha;
    ctx.fillStyle = "rgba(255,255,255,0.9)";
    ctx.font = "bold 10px DM Mono, monospace";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(label.length > 12 ? label.slice(0, 12) : label, x + w / 2, y + h / 2);
  }
  ctx.globalAlpha = 1;
}

export default function StackGame() {
  const canvasRef = useRef(null);
  const stateRef = useRef({
    playing: false,
    blocks: [],         // { x, y, w, color, label }
    moving: null,       // { x, dir, w, color, label }
    score: 0,
    level: 1,
    speed: MOVE_SPEED_START,
    dropFlash: null,
    gameOver: false,
  });
  const rafRef = useRef(null);
  const [display, setDisplay] = useState({ score: 0, level: 1, gameOver: false, playing: false, perfect: 0 });

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const s = stateRef.current;

    ctx.clearRect(0, 0, CANVAS_W, CANVAS_H);

    // Background grid lines
    ctx.strokeStyle = "rgba(255,255,255,0.03)";
    ctx.lineWidth = 1;
    for (let y = 0; y < CANVAS_H; y += 30) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(CANVAS_W, y); ctx.stroke();
    }

    // Draw stacked blocks
    s.blocks.forEach((b) => {
      drawBlock(ctx, b.x, b.y, b.w, BLOCK_H, b.color, b.label);
    });

    // Draw moving block
    if (s.moving) {
      drawBlock(ctx, s.moving.x, s.moving.y, s.moving.w, BLOCK_H, s.moving.color, s.moving.label);
    }

    // Drop flash
    if (s.dropFlash && s.dropFlash.alpha > 0) {
      ctx.globalAlpha = s.dropFlash.alpha;
      ctx.fillStyle = s.dropFlash.color;
      ctx.fillRect(s.dropFlash.x, s.dropFlash.y, s.dropFlash.w, BLOCK_H);
      ctx.globalAlpha = 1;
      s.dropFlash.alpha -= 0.06;
    }

    // "PERFECT!" text
    if (s.perfectText && s.perfectText.alpha > 0) {
      ctx.globalAlpha = s.perfectText.alpha;
      ctx.font = "bold 20px Syne, sans-serif";
      ctx.fillStyle = "#f56565";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("PERFECT! +$💰", CANVAS_W / 2, s.perfectText.y);
      ctx.globalAlpha = 1;
      s.perfectText.alpha -= 0.025;
      s.perfectText.y -= 0.5;
    }

    // Score overlay
    ctx.font = "bold 13px DM Mono, monospace";
    ctx.fillStyle = "rgba(255,255,255,0.7)";
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.fillText(`Score: ${s.score}`, 12, 12);
    ctx.textAlign = "right";
    ctx.fillText(`Level ${s.level}`, CANVAS_W - 12, 12);
  }, []);

  const loop = useCallback(() => {
    const s = stateRef.current;
    if (!s.playing || s.gameOver) return;

    if (s.moving) {
      s.moving.x += s.moving.dir * s.speed;
      if (s.moving.x < 0) { s.moving.x = 0; s.moving.dir = 1; }
      if (s.moving.x + s.moving.w > CANVAS_W) { s.moving.x = CANVAS_W - s.moving.w; s.moving.dir = -1; }
    }

    draw();
    rafRef.current = requestAnimationFrame(loop);
  }, [draw]);

  const spawnBlock = useCallback(() => {
    const s = stateRef.current;
    const prevBlock = s.blocks[s.blocks.length - 1];
    const w = prevBlock ? prevBlock.w : INITIAL_W;
    const colorIdx = s.blocks.length % COLORS.length;
    const labelIdx = s.blocks.length % MONEY_LABELS.length;
    const stackTop = s.blocks.length > 0
      ? s.blocks[s.blocks.length - 1].y
      : CANVAS_H - BLOCK_H;
    const movingY = stackTop - BLOCK_H - 2;

    s.moving = {
      x: 0,
      dir: 1,
      w,
      y: movingY,
      color: COLORS[colorIdx],
      label: MONEY_LABELS[labelIdx],
    };
  }, []);

  const startGame = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
    const baseY = CANVAS_H - BLOCK_H - 2;
    stateRef.current = {
      playing: true,
      blocks: [{ x: (CANVAS_W - INITIAL_W) / 2, y: baseY, w: INITIAL_W, color: COLORS[0], label: MONEY_LABELS[0] }],
      moving: null,
      score: 0,
      level: 1,
      speed: MOVE_SPEED_START,
      dropFlash: null,
      perfectText: null,
      gameOver: false,
    };
    setDisplay({ score: 0, level: 1, gameOver: false, playing: true, perfect: 0 });
    spawnBlock();
    rafRef.current = requestAnimationFrame(loop);
  }, [spawnBlock, loop]);

  const drop = useCallback(() => {
    const s = stateRef.current;
    if (!s.playing || s.gameOver || !s.moving) return;

    const prev = s.blocks[s.blocks.length - 1];
    const cur = s.moving;

    const overlapLeft = Math.max(cur.x, prev.x);
    const overlapRight = Math.min(cur.x + cur.w, prev.x + prev.w);
    const overlapW = overlapRight - overlapLeft;

    if (overlapW <= 0) {
      // Fell off
      s.gameOver = true;
      s.playing = false;
      cancelAnimationFrame(rafRef.current);
      draw();
      setDisplay(d => ({ ...d, gameOver: true, playing: false, score: s.score }));
      return;
    }

    const isPerfect = Math.abs(overlapW - prev.w) <= 4;
    const newW = isPerfect ? prev.w : overlapW;
    const newX = isPerfect ? prev.x : overlapLeft;

    // Flash
    s.dropFlash = { x: newX, y: cur.y, w: newW, color: "#ffffff", alpha: 0.5 };

    if (isPerfect) {
      s.score += 15;
      s.perfectText = { alpha: 1, y: cur.y - 20 };
    } else {
      s.score += Math.max(1, Math.round(newW / 10));
    }

    s.blocks.push({ x: newX, y: cur.y, w: newW, color: cur.color, label: cur.label });
    s.moving = null;

    // Scroll blocks down if too high
    if (s.blocks.length > 10) {
      s.blocks.forEach(b => { b.y += BLOCK_H + 2; });
      s.blocks = s.blocks.filter(b => b.y < CANVAS_H + BLOCK_H);
    }

    s.level = Math.floor(s.score / 50) + 1;
    s.speed = MOVE_SPEED_START + (s.level - 1) * 0.4;
    setDisplay(d => ({ ...d, score: s.score, level: s.level }));
    spawnBlock();
  }, [draw, spawnBlock]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.code === "Space") { e.preventDefault(); drop(); }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [drop]);

  useEffect(() => {
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  // Initial idle draw
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, CANVAS_W, CANVAS_H);
    ctx.strokeStyle = "rgba(255,255,255,0.03)";
    for (let y = 0; y < CANVAS_H; y += 30) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(CANVAS_W, y); ctx.stroke();
    }
  }, []);

  return (
    <section className="px-6 md:px-16 lg:px-24 py-20 border-t border-border">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <p className="text-[10px] font-mono tracking-[0.2em] text-primary uppercase mb-3">/ 06 — Mini game</p>
        <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight mb-3">Budget Stack</h2>
        <p className="text-muted-foreground text-sm max-w-lg">
          Stack your budget blocks as precisely as possible. The closer to perfect, the higher your score. A perfect drop gives a bonus!
        </p>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-6 items-start">
        {/* Canvas */}
        <div className="flex-shrink-0">
          <div
            className="relative rounded-2xl overflow-hidden border border-border cursor-pointer select-none"
            style={{ width: CANVAS_W, background: "hsl(0,15%,5%)" }}
            onClick={drop}
            onTouchEnd={(e) => { e.preventDefault(); drop(); }}
          >
            <canvas ref={canvasRef} width={CANVAS_W} height={CANVAS_H} />

            {/* Overlay when not playing */}
            {!display.playing && !display.gameOver && (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4"
                style={{ background: "rgba(10,4,4,0.8)", backdropFilter: "blur(4px)" }}>
                <div className="text-center">
                  <p className="text-4xl mb-2">🏦</p>
                  <p className="font-heading text-2xl font-bold mb-1">Budget Stack</p>
                  <p className="text-xs font-mono text-muted-foreground">Click or tap to drop each block</p>
                  <p className="text-xs font-mono text-muted-foreground">Press Space to drop</p>
                </div>
                <button
                  onClick={(e) => { e.stopPropagation(); startGame(); }}
                  className="px-8 py-3 rounded-full font-bold text-sm transition-all"
                  style={{ background: "hsl(4,80%,52%)", color: "white" }}
                >
                  Start Stacking
                </button>
              </div>
            )}

            {/* Game over overlay */}
            {display.gameOver && (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4"
                style={{ background: "rgba(10,4,4,0.88)", backdropFilter: "blur(4px)" }}>
                <p className="text-4xl">💸</p>
                <p className="font-heading text-2xl font-bold">Budget Toppled!</p>
                <p className="font-mono text-primary text-3xl font-bold">{display.score} pts</p>
                <p className="text-xs font-mono text-muted-foreground">Level {display.level} reached</p>
                <button
                  onClick={(e) => { e.stopPropagation(); startGame(); }}
                  className="px-8 py-3 rounded-full font-bold text-sm transition-all mt-2"
                  style={{ background: "hsl(4,80%,52%)", color: "white" }}
                >
                  Try Again
                </button>
              </div>
            )}
          </div>
          <p className="text-center text-[11px] font-mono text-muted-foreground mt-3">
            Click / tap canvas · Space bar to drop
          </p>
        </div>

        {/* Sidebar info */}
        <div className="flex-1 space-y-4 min-w-0">
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-card border border-border rounded-xl p-4">
              <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider mb-1">Score</p>
              <p className="text-3xl font-mono font-bold text-primary">{display.score}</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-4">
              <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider mb-1">Level</p>
              <p className="text-3xl font-mono font-bold">{display.level}</p>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-5">
            <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider mb-4">How to play</p>
            <div className="space-y-3">
              {[
                ["🟥", "Each block is a budget category"],
                ["⬛", "Block swings left and right"],
                ["✅", "Click/tap to drop it on the stack"],
                ["🎯", "Perfect drop = bonus points"],
                ["💸", "Overshoot and it's game over"],
              ].map(([icon, text]) => (
                <div key={text} className="flex items-center gap-3">
                  <span className="text-base w-6">{icon}</span>
                  <span className="text-xs text-muted-foreground">{text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card border border-primary/15 rounded-xl p-5" style={{ background: "rgba(220,40,40,0.04)" }}>
            <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider mb-3">Your actual savings rate</p>
            <p className="text-4xl font-mono font-bold text-primary">{BUDGET_SUMMARY.savingsRate}%</p>
            <p className="text-xs text-muted-foreground mt-1">${BUDGET_SUMMARY.balance.toFixed(2)}/month goes to savings</p>
          </div>

          <div className="bg-card border border-border rounded-xl p-5">
            <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider mb-3">Block colors</p>
            <div className="flex flex-wrap gap-2">
              {COLORS.map((c, i) => (
                <div key={i} className="w-5 h-5 rounded" style={{ backgroundColor: c }} />
              ))}
            </div>
            <p className="text-[11px] text-muted-foreground mt-2">Each level gets faster — stack wisely 💹</p>
          </div>
        </div>
      </div>
    </section>
  );
}