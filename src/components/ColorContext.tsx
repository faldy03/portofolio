"use client";

import React, { createContext, useContext, useState } from "react";

/* ── Accent color themes ─────────────────────────────────────── */
export type AccentKey = "violet" | "cyan" | "rose" | "amber" | "emerald";

export interface AccentTheme {
  key: AccentKey;
  label: string;
  /** Tailwind bg class for the swatch dot */
  swatch: string;
  /** CSS var-compatible color for inline glow / gradient */
  hex: string;
  /** Tailwind classes used in Hero / Navbar accents */
  gradient: string;       // used as gradient text / border
  glowBg: string;         // radial glow behind photo
  pill: string;           // status pill background
  pillText: string;       // status pill text
  socialHover: string;    // social icon hover border+bg
  btnBg: string;          // CTA button bg
  btnHover: string;       // CTA button hover
}

export const ACCENTS: Record<AccentKey, AccentTheme> = {
  violet: {
    key: "violet",
    label: "Violet",
    swatch: "bg-violet-500",
    hex: "#8b5cf6",
    gradient:    "from-violet-400 to-indigo-400",
    glowBg:      "rgba(139,92,246,0.18)",
    pill:        "bg-violet-500/15 border-violet-500/30",
    pillText:    "text-violet-300",
    socialHover: "hover:border-violet-400 hover:bg-violet-500/10 hover:text-violet-300",
    btnBg:       "bg-violet-600 hover:bg-violet-500",
    btnHover:    "hover:bg-violet-500",
  },
  cyan: {
    key: "cyan",
    label: "Cyan",
    swatch: "bg-cyan-400",
    hex: "#22d3ee",
    gradient:    "from-cyan-400 to-blue-400",
    glowBg:      "rgba(34,211,238,0.15)",
    pill:        "bg-cyan-500/15 border-cyan-500/30",
    pillText:    "text-cyan-300",
    socialHover: "hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-300",
    btnBg:       "bg-cyan-600 hover:bg-cyan-500",
    btnHover:    "hover:bg-cyan-500",
  },
  rose: {
    key: "rose",
    label: "Rose",
    swatch: "bg-rose-500",
    hex: "#f43f5e",
    gradient:    "from-rose-400 to-pink-400",
    glowBg:      "rgba(244,63,94,0.18)",
    pill:        "bg-rose-500/15 border-rose-500/30",
    pillText:    "text-rose-300",
    socialHover: "hover:border-rose-400 hover:bg-rose-500/10 hover:text-rose-300",
    btnBg:       "bg-rose-600 hover:bg-rose-500",
    btnHover:    "hover:bg-rose-500",
  },
  amber: {
    key: "amber",
    label: "Amber",
    swatch: "bg-amber-400",
    hex: "#f59e0b",
    gradient:    "from-amber-400 to-orange-400",
    glowBg:      "rgba(245,158,11,0.18)",
    pill:        "bg-amber-500/15 border-amber-500/30",
    pillText:    "text-amber-300",
    socialHover: "hover:border-amber-400 hover:bg-amber-500/10 hover:text-amber-300",
    btnBg:       "bg-amber-500 hover:bg-amber-400",
    btnHover:    "hover:bg-amber-400",
  },
  emerald: {
    key: "emerald",
    label: "Emerald",
    swatch: "bg-emerald-400",
    hex: "#34d399",
    gradient:    "from-emerald-400 to-teal-400",
    glowBg:      "rgba(52,211,153,0.15)",
    pill:        "bg-emerald-500/15 border-emerald-500/30",
    pillText:    "text-emerald-300",
    socialHover: "hover:border-emerald-400 hover:bg-emerald-500/10 hover:text-emerald-300",
    btnBg:       "bg-emerald-600 hover:bg-emerald-500",
    btnHover:    "hover:bg-emerald-500",
  },
};

/* ── Context ─────────────────────────────────────────────────── */
const ColorCtx = createContext<{
  accent: AccentTheme;
  setAccent: (k: AccentKey) => void;
}>({
  accent: ACCENTS.violet,
  setAccent: () => {},
});

export function ColorProvider({ children }: { children: React.ReactNode }) {
  const [key, setKey] = useState<AccentKey>("violet");
  return (
    <ColorCtx.Provider value={{ accent: ACCENTS[key], setAccent: setKey }}>
      {children}
    </ColorCtx.Provider>
  );
}

export const useAccent = () => useContext(ColorCtx);
