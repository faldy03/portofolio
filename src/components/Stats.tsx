"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Code2, FolderGit2, Layers, Trophy, Clock, Zap } from "lucide-react";
import { useAccent } from "./ColorContext";

/* ── Stats data ───────────────────────────────────────────────── */
const STATS = [
  {
    value: 3,
    suffix: "+",
    label: "Years Coding",
    description: "Building web applications since 2022",
    icon: Clock,
  },
  {
    value: 10,
    suffix: "+",
    label: "Projects Built",
    description: "From landing pages to full-stack apps",
    icon: FolderGit2,
  },
  {
    value: 4,
    suffix: "+",
    label: "Tech Stacks",
    description: "Frontend, backend, database & DevOps",
    icon: Layers,
  },
  {
    value: 5,
    suffix: "+",
    label: "Certificates",
    description: "Professional certifications earned",
    icon: Trophy,
  },
];

/* ── Animated counter hook (triggers on scroll into view) ─────── */
function useCounter(target: number, isInView: boolean, duration = 1.8) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const step = target / (duration * 60);
    const interval = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(interval);
  }, [target, duration, isInView]);

  return count;
}

/* ── Single stat card ─────────────────────────────────────────── */
function StatCard({
  value,
  suffix,
  label,
  description,
  icon: Icon,
  index,
  isInView,
}: {
  value: number;
  suffix: string;
  label: string;
  description: string;
  icon: typeof Clock;
  index: number;
  isInView: boolean;
}) {
  const { accent } = useAccent();
  const count = useCounter(value, isInView, 1.5);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.12,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      {/* Card */}
      <motion.div
        whileHover={{ y: -6, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="
          relative overflow-hidden
          flex flex-col items-center gap-4
          px-6 py-8 sm:py-10
          rounded-2xl
          bg-white dark:bg-zinc-900/70
          border border-zinc-200/80 dark:border-zinc-700/50
          shadow-sm hover:shadow-xl
          backdrop-blur-sm
          transition-shadow duration-300
          cursor-default
        "
      >
        {/* Hover glow bg */}
        <motion.div
          animate={{ opacity: isHovered ? 0.15 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(circle at 50% 30%, ${accent.hex} 0%, transparent 70%)`,
          }}
        />

        {/* Icon */}
        <motion.div
          animate={{
            scale: isHovered ? 1.15 : 1,
            rotate: isHovered ? 8 : 0,
          }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
          className="
            relative z-10 flex items-center justify-center
            w-14 h-14 rounded-2xl
            transition-colors duration-300
          "
          style={{
            background: isHovered
              ? `linear-gradient(135deg, ${accent.hex}, ${accent.hex}aa)`
              : undefined,
          }}
        >
          {!isHovered && (
            <div
              className="absolute inset-0 rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800"
            />
          )}
          <Icon
            className="w-6 h-6 relative z-10 transition-colors duration-300"
            style={{ color: isHovered ? "#fff" : accent.hex }}
          />
        </motion.div>

        {/* Number */}
        <div className="relative z-10 flex items-baseline gap-0.5">
          <motion.span
            key={count}
            className="text-4xl sm:text-5xl font-extrabold tabular-nums"
            style={{
              background: `linear-gradient(135deg, ${accent.hex}, ${accent.hex}bb)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {count}
          </motion.span>
          <span
            className="text-2xl sm:text-3xl font-bold"
            style={{ color: accent.hex }}
          >
            {suffix}
          </span>
        </div>

        {/* Label */}
        <div className="relative z-10 text-center space-y-1.5">
          <p className="text-sm font-bold uppercase tracking-wider text-zinc-800 dark:text-zinc-200">
            {label}
          </p>
          <motion.p
            animate={{ opacity: isHovered ? 1 : 0.6, y: isHovered ? 0 : 4 }}
            transition={{ duration: 0.25 }}
            className="text-xs text-zinc-500 dark:text-zinc-500 max-w-[180px] mx-auto leading-relaxed"
          >
            {description}
          </motion.p>
        </div>

        {/* Bottom accent line */}
        <motion.div
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="absolute bottom-0 left-0 right-0 h-[3px] origin-left"
          style={{
            background: `linear-gradient(to right, ${accent.hex}, ${accent.hex}66)`,
          }}
        />
      </motion.div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   STATS SECTION
   ═══════════════════════════════════════════════════════════════ */
export function Stats() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const { accent } = useAccent();

  return (
    <section
      ref={sectionRef}
      className="relative py-20 sm:py-28 overflow-hidden bg-zinc-50/50 dark:bg-zinc-950 transition-colors duration-500"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-3xl opacity-20 dark:opacity-10"
          style={{
            background: `radial-gradient(ellipse, ${accent.hex}30 0%, transparent 70%)`,
          }}
        />
      </div>

      {/* Grid pattern (dark mode) */}
      <div
        className="pointer-events-none absolute inset-0 hidden dark:block opacity-[0.15]"
        style={{
          backgroundImage: `radial-gradient(circle, #ffffff12 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const }}
          className="text-center mb-14 sm:mb-18"
        >
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-zinc-300 dark:bg-zinc-700" />
            <span className={`text-[10px] font-black uppercase tracking-[0.3em]
              bg-gradient-to-r ${accent.gradient} bg-clip-text text-transparent`}>
              At a Glance
            </span>
            <div className="h-px w-8 bg-zinc-300 dark:bg-zinc-700" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
            Numbers That{" "}
            <span className={`bg-gradient-to-r ${accent.gradient} bg-clip-text text-transparent`}>
              Define
            </span>{" "}
            My Journey
          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-4 text-sm sm:text-base text-zinc-500 dark:text-zinc-400 max-w-md mx-auto"
          >
            A quick overview of my experience and capabilities in building modern web solutions.
          </motion.p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {STATS.map((stat, i) => (
            <StatCard key={stat.label} {...stat} index={i} isInView={isInView} />
          ))}
        </div>

        {/* Bottom decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
          className="mt-14 sm:mt-18 h-px w-full max-w-md mx-auto origin-center"
          style={{
            background: `linear-gradient(to right, transparent, ${accent.hex}40, transparent)`,
          }}
        />
      </div>
    </section>
  );
}
