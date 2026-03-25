"use client";

import { motion } from "framer-motion";
import { Palette } from "lucide-react";
import { useAccent, ACCENTS, AccentKey } from "./ColorContext";
import { useState } from "react";

export function ColorSwitcher() {
  const { accent, setAccent } = useAccent();
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Change accent color"
        title="Change accent color"
        className="
          flex items-center justify-center w-9 h-9 rounded-full
          text-zinc-500 dark:text-zinc-400
          hover:bg-zinc-100 dark:hover:bg-zinc-800
          transition-colors duration-200
        "
      >
        <Palette className="w-4 h-4" />
      </button>

      {open && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 6 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 6 }}
          transition={{ duration: 0.18 }}
          className="
            absolute right-0 top-11 z-50
            flex gap-2 p-2 rounded-xl
            bg-white dark:bg-zinc-900
            border border-zinc-200 dark:border-zinc-700
            shadow-xl
          "
        >
          {(Object.keys(ACCENTS) as AccentKey[]).map((key) => (
            <button
              key={key}
              onClick={() => { setAccent(key); setOpen(false); }}
              title={ACCENTS[key].label}
              aria-label={`Set ${ACCENTS[key].label} accent`}
              className={`
                w-6 h-6 rounded-full transition-transform duration-150
                ${ACCENTS[key].swatch}
                ${accent.key === key ? "ring-2 ring-offset-2 ring-zinc-400 dark:ring-zinc-500 scale-110" : "hover:scale-110"}
              `}
            />
          ))}
        </motion.div>
      )}
    </div>
  );
}
