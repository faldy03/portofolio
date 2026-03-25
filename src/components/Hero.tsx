"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ChevronDown, Download, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import Image from "next/image";
import { useAccent } from "./ColorContext";

/* ── Social links ─────────────────────────────────────────────── */
const socialLinks = [
  { href: "mailto:m.fauzan.faldy17@gmail.com", icon: Mail,     label: "Email"    },
  { href: "https://github.com/faldy03",         icon: Github,   label: "GitHub"   },
  { href: "https://www.linkedin.com/in/muhammad-fauzan-naufaldy-ba1308295/", icon: Linkedin, label: "LinkedIn" },
];

/* ── Floating particle (decorative dot) ──────────────────────── */
function Particle({ x, y, size, delay }: { x: number; y: number; size: number; delay: number }) {
  return (
    <motion.div
      className="absolute rounded-full bg-white/10 dark:bg-white/10 pointer-events-none"
      style={{ left: `${x}%`, top: `${y}%`, width: size, height: size }}
      animate={{ y: [0, -20, 0], opacity: [0.3, 0.7, 0.3] }}
      transition={{ duration: 4 + delay, repeat: Infinity, delay, ease: "easeInOut" }}
    />
  );
}

const PARTICLES = [
  { x: 5,  y: 20, size: 6, delay: 0   },
  { x: 90, y: 15, size: 4, delay: 1   },
  { x: 15, y: 75, size: 8, delay: 0.5 },
  { x: 80, y: 70, size: 5, delay: 2   },
  { x: 50, y: 10, size: 4, delay: 1.5 },
  { x: 25, y: 50, size: 3, delay: 3   },
  { x: 70, y: 40, size: 7, delay: 0.8 },
];

/* ── Typewriter words ─────────────────────────────────────────── */
const ROLES = ["Full Stack Developer", "Web Developer", "UI Enthusiast", "Laravel & Next.js Dev"];

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { accent } = useAccent();

  /* Parallax */
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "-14%"]);
  const bgY    = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  /* Typewriter */
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const target = ROLES[roleIdx];
    if (typing) {
      if (displayed.length < target.length) {
        const t = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 60);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 1800);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
        return () => clearTimeout(t);
      } else {
        setRoleIdx((i) => (i + 1) % ROLES.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIdx]);

  const scrollToNext = () =>
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-white dark:bg-zinc-950 transition-colors duration-500"
    >
      {/* ── Animated mesh gradient background ───────────────── */}
      <motion.div
        style={{ y: bgY }}
        className="pointer-events-none absolute inset-0 opacity-40 dark:opacity-30"
      >
        {/* Light mode: soft pastel blobs */}
        <div
          className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full blur-3xl dark:hidden"
          style={{ background: `radial-gradient(circle, ${accent.hex}30 0%, transparent 70%)` }}
        />
        <div
          className="absolute top-1/3 -right-32 w-[500px] h-[500px] rounded-full blur-3xl dark:hidden"
          style={{ background: `radial-gradient(circle, ${accent.hex}20 0%, transparent 70%)` }}
        />
        {/* Dark mode: richer glows */}
        <div
          className="absolute -top-32 -left-32 w-[700px] h-[700px] rounded-full blur-3xl hidden dark:block"
          style={{ background: `radial-gradient(circle, ${accent.hex}25 0%, transparent 70%)` }}
        />
        <div
          className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl hidden dark:block"
          style={{ background: `radial-gradient(circle, ${accent.hex}18 0%, transparent 70%)` }}
        />
      </motion.div>

      {/* ── Grid texture (dark-only) ─────────────────────────── */}
      <div className="pointer-events-none absolute inset-0 hidden dark:block
        bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)]
        bg-[size:52px_52px]" />

      {/* ── Floating particles (dark-only) ──────────────────── */}
      <div className="hidden dark:block">
        {PARTICLES.map((p, i) => <Particle key={i} {...p} />)}
      </div>

      {/*
        ════════════════════════════════════════════════════════
          3-COLUMN LAYOUT
          Desktop:  [left text] [center photo] [right social]
          Mobile:   stacked top→bottom
        ════════════════════════════════════════════════════════
      */}
      <div className="
        relative z-10
        grid min-h-screen
        grid-cols-1
        lg:grid-cols-[1fr_400px_1fr]
        xl:grid-cols-[1fr_460px_1fr]
        items-end
        px-6 sm:px-12 xl:px-20
        pt-24 pb-0
        gap-12 lg:gap-0
      ">

        {/* ══ LEFT ════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-col justify-center gap-7 pb-24 lg:pr-10"
        >
          {/* Eyebrow pill */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <span className={`
              inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold
              border ${accent.pill} ${accent.pillText}
            `}>
              <Sparkles className="w-3 h-3" />
              Available for Work
            </span>
          </motion.div>

          {/* Accent line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
            style={{ originX: 0 }}
            className={`w-14 h-[3px] rounded-full bg-gradient-to-r ${accent.gradient}`}
          />

          {/* Main headline */}
          <div className="space-y-2">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.65 }}
              className="text-4xl sm:text-5xl xl:text-[3.4rem] font-extrabold leading-[1.08] tracking-tight
                text-zinc-900 dark:text-white"
            >
              I&apos;m Fauzan,
            </motion.h1>

            {/* Typewriter role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.65 }}
              className={`text-2xl sm:text-3xl xl:text-4xl font-bold
                bg-gradient-to-r ${accent.gradient} bg-clip-text text-transparent
                h-10 sm:h-12`}
            >
              {displayed}
              <span className="animate-pulse ml-0.5 text-zinc-400 dark:text-zinc-500">|</span>
            </motion.div>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.6 }}
            className="text-sm sm:text-base leading-relaxed max-w-[17rem]
              text-zinc-500 dark:text-zinc-400"
          >
            I craft robust, scalable web applications — from clean frontends to
            reliable backend systems. Telkom University Purwokerto graduate.
          </motion.p>

          {/* CTA + scroll button row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.6 }}
            className="flex flex-wrap items-center gap-3"
          >
            {/* Scroll indicator */}
            <button
              onClick={scrollToNext}
              aria-label="Scroll down"
              className={`
                flex items-center justify-center w-14 h-14 rounded-full
                text-white shadow-xl animate-bounce
                transition-all duration-300
                ${accent.btnBg}
              `}
            >
              <ChevronDown className="w-6 h-6" />
            </button>

            {/* CV / Resume Button */}
            <motion.a
              href="https://drive.google.com/file/d/1UaZ4g3-FjuwQOv33S2w6qWGoX_LQilgC/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="
                group relative overflow-hidden
                inline-flex items-center gap-2
                px-5 py-3 rounded-full
                text-sm font-semibold
                border-2 border-zinc-300 dark:border-zinc-600
                text-zinc-700 dark:text-zinc-200
                hover:text-white dark:hover:text-white
                hover:border-transparent
                transition-colors duration-300
                shadow-sm
              "
              style={{
                background: "transparent",
              }}
            >
              {/* Animated fill on hover */}
              <span
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(135deg, ${accent.hex}, ${accent.hex}cc)` }}
              />
              <Download className="relative z-10 w-4 h-4 group-hover:animate-bounce" />
              <span className="relative z-10">Download CV</span>
            </motion.a>
          </motion.div>

          {/* See my work link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            <a
              href="#projects"
              className={`
                text-sm font-semibold
                bg-gradient-to-r ${accent.gradient}
                bg-clip-text text-transparent
                hover:opacity-80 transition-opacity
              `}
            >
              See my work →
            </a>
          </motion.div>
        </motion.div>

        {/* ══ CENTER — Profile photo ═══════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
          className="flex items-end justify-center self-stretch"
        >
          <motion.div style={{ y: imageY }} className="relative w-72 sm:w-80 lg:w-full max-w-[460px] select-none">

            {/* Glow ring behind photo */}
            <div
              className="absolute -inset-4 rounded-t-[200px] rounded-b-3xl blur-2xl opacity-30 dark:opacity-40"
              style={{ background: `radial-gradient(ellipse at 50% 80%, ${accent.hex} 0%, transparent 70%)` }}
            />

            {/* Photo */}
            <div className="
              relative overflow-hidden
              rounded-t-[200px] rounded-b-2xl
              shadow-2xl dark:shadow-black/40
              aspect-[3/4]
              border border-zinc-200/60 dark:border-white/5
            ">
              <Image
                src="/asset/hero.JPG"
                alt="Muhammad Fauzan Naufaldy"
                width={500}
                height={667}
                priority
                sizes="(max-width: 640px) 288px, (max-width: 1280px) 400px, 460px"
                className="object-cover object-top w-full h-full"
              />

              {/* Subtle color overlay at bottom */}
              <div
                className="absolute inset-x-0 bottom-0 h-1/3 pointer-events-none"
                style={{ background: `linear-gradient(to top, ${accent.hex}22, transparent)` }}
              />
            </div>
          </motion.div>
        </motion.div>

        {/* ══ RIGHT — Social / info ════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
          className="flex flex-col justify-center gap-8 pb-24 lg:pl-12"
        >
          {/* Section label */}
          <div className="space-y-1">
            <p className={`text-[10px] font-black uppercase tracking-[0.28em]
              bg-gradient-to-r ${accent.gradient} bg-clip-text text-transparent`}>
              Connect With Me
            </p>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 max-w-[180px]">
              Feel free to reach out or follow me on social media.
            </p>
          </div>

          {/* Social links — vertical stack */}
          <div className="flex flex-col gap-3">
            {socialLinks.map(({ href, icon: Icon, label }, i) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
                whileHover={{ x: 4 }}
                className={`
                  group flex items-center gap-3
                  text-zinc-500 dark:text-zinc-400
                  hover:text-zinc-900 dark:hover:text-white
                  transition-colors duration-200
                `}
              >
                <span className={`
                  flex items-center justify-center w-10 h-10 rounded-xl
                  border border-zinc-200 dark:border-white/10
                  bg-zinc-50 dark:bg-white/5
                  group-hover:scale-105 transition-all duration-200
                  ${accent.socialHover}
                `}>
                  <Icon className="w-4 h-4" />
                </span>
                <span className="text-sm font-medium">{label}</span>
              </motion.a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-20 h-px bg-zinc-200 dark:bg-white/10" />

          {/* Tech stack mini tags */}
          <div className="space-y-2">
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400 dark:text-zinc-500">
              Tech Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {["React", "Next.js", "Laravel", "TypeScript"].map((tech) => (
                <span
                  key={tech}
                  className="inline-block px-2.5 py-1 rounded-md text-xs font-medium
                    bg-zinc-100 dark:bg-white/5
                    text-zinc-600 dark:text-zinc-400
                    border border-zinc-200 dark:border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
