"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { ChevronDown, Download, Github, Linkedin, Mail, Sparkles, ExternalLink } from "lucide-react";
import Image from "next/image";
import { useAccent } from "./ColorContext";

/* ── Social links ─────────────────────────────────────────────── */
const socialLinks = [
  { href: "mailto:m.fauzan.faldy17@gmail.com", icon: Mail, label: "Email" },
  { href: "https://github.com/faldy03", icon: Github, label: "GitHub" },
  { href: "https://www.linkedin.com/in/muhammad-fauzan-naufaldy-ba1308295/", icon: Linkedin, label: "LinkedIn" },
];

/* ── Floating particle ────────────────────────────────────────── */
function Particle({ x, y, size, delay, accent }: { x: number; y: number; size: number; delay: number; accent: string }) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: size,
        height: size,
        background: `${accent}20`,
      }}
      animate={{ y: [0, -20, 0], opacity: [0.2, 0.6, 0.2], scale: [1, 1.2, 1] }}
      transition={{ duration: 4 + delay, repeat: Infinity, delay, ease: "easeInOut" }}
    />
  );
}

const PARTICLES = [
  { x: 5, y: 20, size: 6, delay: 0 },
  { x: 92, y: 15, size: 4, delay: 1 },
  { x: 15, y: 75, size: 8, delay: 0.5 },
  { x: 82, y: 72, size: 5, delay: 2 },
  { x: 50, y: 8, size: 4, delay: 1.5 },
  { x: 25, y: 50, size: 3, delay: 3 },
  { x: 72, y: 42, size: 7, delay: 0.8 },
  { x: 40, y: 85, size: 5, delay: 1.2 },
  { x: 65, y: 25, size: 3, delay: 2.5 },
  { x: 10, y: 45, size: 4, delay: 0.3 },
];

/* ── Typewriter words ─────────────────────────────────────────── */
const ROLES = ["Full Stack Developer", "Web Developer", "UI Enthusiast", "Laravel & Next.js Dev"];


/* ── Floating tech badge (around photo) ───────────────────────── */
function FloatingBadge({ label, x, y, delay, accent }: { label: string; x: string; y: string; delay: number; accent: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.8 + delay, duration: 0.5, ease: "easeOut" }}
      className="absolute z-20 hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full
        bg-white/80 dark:bg-zinc-800/80
        border border-zinc-200/50 dark:border-white/10
        backdrop-blur-md shadow-lg
        animate-float pointer-events-none select-none"
      style={{
        left: x,
        top: y,
        animationDelay: `${delay}s`,
        boxShadow: `0 4px 24px ${accent}15`,
      }}
    >
      <span className="w-1.5 h-1.5 rounded-full" style={{ background: accent }} />
      <span className="text-[11px] font-semibold text-zinc-700 dark:text-zinc-300 whitespace-nowrap">
        {label}
      </span>
    </motion.div>
  );
}

/* ── Orbital dot ──────────────────────────────────────────────── */
function OrbitalDot({ size, duration, radius, color }: { size: number; duration: string; radius: string; color: string }) {
  return (
    <div
      className="absolute left-1/2 top-1/2 -ml-[3px] -mt-[3px] animate-orbit pointer-events-none"
      style={{
        "--orbit-r": radius,
        "--orbit-dur": duration,
        width: size,
        height: size,
      } as React.CSSProperties}
    >
      <div
        className="w-full h-full rounded-full shadow-md"
        style={{ background: color, boxShadow: `0 0 12px ${color}80` }}
      />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   HERO COMPONENT
   ═══════════════════════════════════════════════════════════════ */
export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);
  const { accent } = useAccent();

  /* ── Parallax ─────────────────────────────────────────────── */
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "-14%"]);
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  /* ── Typewriter ───────────────────────────────────────────── */
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

  /* ── Photo tilt (3D perspective on hover) ─────────────────── */
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springRotateX = useSpring(rotateX, { stiffness: 150, damping: 20 });
  const springRotateY = useSpring(rotateY, { stiffness: 150, damping: 20 });

  const handlePhotoMouseMove = useCallback((e: React.MouseEvent) => {
    if (!photoRef.current) return;
    const rect = photoRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const x = (e.clientX - centerX) / (rect.width / 2);
    const y = (e.clientY - centerY) / (rect.height / 2);
    rotateY.set(x * 8);
    rotateX.set(-y * 6);
  }, [rotateX, rotateY]);

  const handlePhotoMouseLeave = useCallback(() => {
    rotateX.set(0);
    rotateY.set(0);
  }, [rotateX, rotateY]);

  /* ── Mouse glow position ──────────────────────────────────── */
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });
  const handleGlowMove = useCallback((e: React.MouseEvent) => {
    if (!photoRef.current) return;
    const rect = photoRef.current.getBoundingClientRect();
    setGlowPos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  }, []);

  const scrollToNext = () =>
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });

  /* ── Stagger helpers ──────────────────────────────────────── */
  const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } } };
  const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] as const } } };
  const fadeRight = { hidden: { opacity: 0, x: 30 }, show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" as const } } };

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
        <div
          className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full blur-3xl dark:hidden"
          style={{ background: `radial-gradient(circle, ${accent.hex}30 0%, transparent 70%)` }}
        />
        <div
          className="absolute top-1/3 -right-32 w-[500px] h-[500px] rounded-full blur-3xl dark:hidden"
          style={{ background: `radial-gradient(circle, ${accent.hex}20 0%, transparent 70%)` }}
        />
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

      {/* ── Floating particles (both modes) ──────────────────── */}
      <div className="pointer-events-none absolute inset-0">
        {PARTICLES.map((p, i) => <Particle key={i} {...p} accent={accent.hex} />)}
      </div>

      {/* ── Noise texture ───────────────────────────────────── */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.012] dark:opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

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

        {/* ══ LEFT — Text content ════════════════════════════ */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="flex flex-col justify-center gap-6 pb-12 lg:pb-24 lg:pr-10"
        >
          {/* Eyebrow pill */}
          <motion.div variants={fadeUp}>
            <span className={`
              inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold
              border backdrop-blur-sm ${accent.pill} ${accent.pillText}
            `}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: accent.hex }} />
                <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: accent.hex }} />
              </span>
              Available for Work
            </span>
          </motion.div>

          {/* Accent line */}
          <motion.div
            variants={fadeUp}
            className="overflow-hidden"
          >
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
              style={{ originX: 0 }}
              className={`w-16 h-[3px] rounded-full bg-gradient-to-r ${accent.gradient}`}
            />
          </motion.div>

          {/* Main headline */}
          <motion.div variants={fadeUp} className="space-y-2">
            <h1 className="text-4xl sm:text-5xl xl:text-[3.4rem] font-extrabold leading-[1.08] tracking-tight
              text-zinc-900 dark:text-white">
              I&apos;m{" "}
              <span
                className={`bg-gradient-to-r ${accent.gradient} bg-clip-text text-transparent`}
              >
                Fauzan
              </span>,
            </h1>

            {/* Typewriter role */}
            <div className={`text-2xl sm:text-3xl xl:text-4xl font-bold
              bg-gradient-to-r ${accent.gradient} bg-clip-text text-transparent
              h-10 sm:h-12 flex items-center`}>
              {displayed}
              <span className="animate-pulse ml-0.5 text-zinc-300 dark:text-zinc-600">|</span>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="text-sm sm:text-base leading-relaxed max-w-xs
              text-zinc-500 dark:text-zinc-400"
          >
            I craft robust, scalable web applications — from clean frontends to
            reliable backend systems.{" "}
            <span className="text-zinc-700 dark:text-zinc-300 font-medium">
              Telkom University Purwokerto
            </span>{" "}
            graduate.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center gap-3"
          >
            {/* Scroll indicator */}
            <motion.button
              onClick={scrollToNext}
              aria-label="Scroll down"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.93 }}
              className={`
                flex items-center justify-center w-14 h-14 rounded-full
                text-white shadow-xl
                transition-all duration-300
                ${accent.btnBg}
              `}
              style={{ boxShadow: `0 8px 30px ${accent.hex}40` }}
            >
              <motion.span
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              >
                <ChevronDown className="w-6 h-6" />
              </motion.span>
            </motion.button>

            {/* CV / Resume Button with shimmer */}
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
              style={{ background: "transparent" }}
            >
              <span
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(135deg, ${accent.hex}, ${accent.hex}cc)` }}
              />
              {/* Shimmer overlay */}
              <span
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-30 animate-shimmer"
                style={{
                  backgroundImage: `linear-gradient(110deg, transparent 25%, rgba(255,255,255,0.4) 50%, transparent 75%)`,
                  backgroundSize: "200% 100%",
                }}
              />
              <Download className="relative z-10 w-4 h-4 group-hover:animate-bounce" />
              <span className="relative z-10">Download CV</span>
            </motion.a>
          </motion.div>

          {/* See my work link */}
          <motion.div variants={fadeUp}>
            <motion.a
              href="#projects"
              whileHover={{ x: 4 }}
              className={`
                inline-flex items-center gap-1.5
                text-sm font-semibold
                bg-gradient-to-r ${accent.gradient}
                bg-clip-text text-transparent
                hover:opacity-80 transition-opacity
              `}
            >
              See my work
              <ExternalLink className="w-3.5 h-3.5" style={{ color: accent.hex }} />
            </motion.a>
          </motion.div>


        </motion.div>

        {/* ══ CENTER — Profile photo ═══════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
          className="flex items-end justify-center self-stretch pb-8"
        >
          <div
            ref={photoRef}
            onMouseMove={(e) => { handlePhotoMouseMove(e); handleGlowMove(e); }}
            onMouseLeave={handlePhotoMouseLeave}
            className="relative w-72 sm:w-80 lg:w-full max-w-[460px] select-none mb-2"
            style={{ perspective: "800px" }}
          >
            {/* ── Rotating gradient ring ─────────────────── */}
            <div
              className="absolute -inset-3 rounded-t-[200px] rounded-b-3xl animate-spin-slow pointer-events-none opacity-50 dark:opacity-60"
              style={{
                background: `conic-gradient(from 0deg, ${accent.hex}44, transparent, ${accent.hex}22, transparent, ${accent.hex}44)`,
                maskImage: "linear-gradient(black, transparent 90%)",
                WebkitMaskImage: "linear-gradient(black, transparent 90%)",
              }}
            />

            {/* ── Glow behind photo ──────────────────────── */}
            <div
              className="absolute -inset-6 rounded-t-[200px] rounded-b-3xl blur-2xl opacity-25 dark:opacity-40 transition-opacity duration-300"
              style={{ background: `radial-gradient(ellipse at ${glowPos.x}% ${glowPos.y}%, ${accent.hex} 0%, transparent 70%)` }}
            />

            {/* ── Orbital dots ───────────────────────────── */}
            <div className="absolute inset-0 pointer-events-none hidden lg:block">
              <OrbitalDot size={8} duration="10s" radius="52%" color={accent.hex} />
              <OrbitalDot size={5} duration="14s" radius="48%" color={`${accent.hex}88`} />
              <OrbitalDot size={6} duration="18s" radius="55%" color={`${accent.hex}55`} />
            </div>

            {/* ── Floating tech badges ───────────────────── */}
            <FloatingBadge label="Next.js" x="-14%" y="18%" delay={0} accent={accent.hex} />
            <FloatingBadge label="Laravel" x="-10%" y="65%" delay={0.4} accent={accent.hex} />
            <FloatingBadge label="React" x="82%" y="12%" delay={0.2} accent={accent.hex} />
            <FloatingBadge label="TypeScript" x="78%" y="55%" delay={0.6} accent={accent.hex} />

            {/* ── Photo card with 3D tilt ─────────────────── */}
            <motion.div
              style={{ rotateX: springRotateX, rotateY: springRotateY }}
              className="relative"
            >
              <div className="
                relative overflow-hidden
                rounded-t-[200px] rounded-b-2xl
                shadow-2xl dark:shadow-black/40
                aspect-[3/4]
                border border-zinc-200/60 dark:border-white/5
              ">
                <motion.div style={{ y: imageY }}>
                  <Image
                    src="/asset/hero.JPG"
                    alt="Muhammad Fauzan Naufaldy"
                    width={500}
                    height={667}
                    priority
                    sizes="(max-width: 640px) 288px, (max-width: 1280px) 400px, 460px"
                    className="object-cover object-top w-full h-full"
                  />
                </motion.div>

                {/* Accent gradient overlay at bottom */}
                <div
                  className="absolute inset-x-0 bottom-0 h-1/3 pointer-events-none"
                  style={{ background: `linear-gradient(to top, ${accent.hex}22, transparent)` }}
                />

                {/* Hover glow overlay */}
                <div
                  className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at ${glowPos.x}% ${glowPos.y}%, ${accent.hex}15 0%, transparent 60%)`,
                  }}
                />
              </div>
            </motion.div>

            {/* ── Name tag floating at bottom ─────────────── */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-max z-30"
            >
              <div className="
                flex items-center gap-2 px-5 py-2.5 rounded-full
                bg-white/90 dark:bg-zinc-900/90
                border border-zinc-200/80 dark:border-zinc-700/80
                shadow-xl backdrop-blur-md
              ">
                <span
                  className="relative flex h-2.5 w-2.5"
                >
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60" style={{ background: accent.hex }} />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5" style={{ background: accent.hex }} />
                </span>
                <span className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 whitespace-nowrap">
                  Muhammad Fauzan Naufaldy
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* ══ RIGHT — Social / info ════════════════════════════ */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="flex flex-col justify-center gap-8 pb-12 lg:pb-24 lg:pl-12"
        >
          {/* Section label */}
          <motion.div variants={fadeRight} className="space-y-1">
            <p className={`text-[10px] font-black uppercase tracking-[0.28em]
              bg-gradient-to-r ${accent.gradient} bg-clip-text text-transparent`}>
              Connect With Me
            </p>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 max-w-[200px]">
              Feel free to reach out or follow me on social media.
            </p>
          </motion.div>

          {/* Social links — vertical stack */}
          <div className="flex flex-col gap-3">
            {socialLinks.map(({ href, icon: Icon, label }, i) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                variants={fadeRight}
                whileHover={{ x: 6, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className={`
                  group flex items-center gap-3
                  text-zinc-500 dark:text-zinc-400
                  hover:text-zinc-900 dark:hover:text-white
                  transition-colors duration-200
                `}
              >
                <span
                  className={`
                    relative flex items-center justify-center w-10 h-10 rounded-xl
                    border border-zinc-200 dark:border-white/10
                    bg-zinc-50 dark:bg-white/5
                    group-hover:scale-110 transition-all duration-300
                    overflow-hidden
                    ${accent.socialHover}
                  `}
                >
                  {/* Glow bg on hover */}
                  <span
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: `radial-gradient(circle, ${accent.hex}20 0%, transparent 70%)` }}
                  />
                  <Icon className="w-4 h-4 relative z-10" />
                </span>
                <span className="text-sm font-medium">{label}</span>
              </motion.a>
            ))}
          </div>

          {/* Divider */}
          <motion.div variants={fadeRight}>
            <div className="w-20 h-px bg-zinc-200 dark:bg-white/10" />
          </motion.div>

          {/* Tech stack mini tags */}
          <motion.div variants={fadeRight} className="space-y-3">
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400 dark:text-zinc-500">
              Tech Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {["React", "Next.js", "Laravel", "TypeScript", "TailwindCSS", "MySQL"].map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + i * 0.08, duration: 0.35 }}
                  whileHover={{ scale: 1.08, y: -2 }}
                  className="inline-block px-2.5 py-1 rounded-md text-xs font-medium cursor-default
                    bg-zinc-100 dark:bg-white/5
                    text-zinc-600 dark:text-zinc-400
                    border border-zinc-200 dark:border-white/10
                    hover:border-zinc-400 dark:hover:border-white/25
                    transition-all duration-200"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Experience highlight */}
          <motion.div variants={fadeRight} className="space-y-1.5">
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400 dark:text-zinc-500">
              Experience
            </p>
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-lg font-bold text-white"
                style={{ background: `linear-gradient(135deg, ${accent.hex}, ${accent.hex}aa)` }}
              >
                3+
              </div>
              <div>
                <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">Years</p>
                <p className="text-xs text-zinc-500 dark:text-zinc-500">Building web apps</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}


