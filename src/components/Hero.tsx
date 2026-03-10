"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const socialLinks = [
  { href: "mailto:m.fauzan.faldy17@gmail.com", icon: Mail, label: "Email" },
  { href: "https://github.com/faldy03", icon: Github, label: "GitHub" },
  { href: "https://linkedin.com/in/fauzannaufaldy", icon: Linkedin, label: "LinkedIn" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-48 md:pb-32 bg-white dark:bg-zinc-950">
      {/* Subtle grid background */}
      <div className="absolute inset-0 -z-10 pointer-events-none bg-[linear-gradient(to_right,#e4e4e720_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e720_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:48px_48px]" />
      {/* Soft radial glow — neutral, not colorful */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 w-[800px] h-[500px] opacity-40 dark:opacity-20 pointer-events-none bg-[radial-gradient(ellipse_at_center,_#d4d4d4_0%,_transparent_70%)] dark:bg-[radial-gradient(ellipse_at_center,_#27272a_0%,_transparent_70%)]" />

      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-16 lg:gap-24">

          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex-1 space-y-8 text-center md:text-left"
          >
            {/* Status badge */}
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.5 }}>
              <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-zinc-100 dark:bg-zinc-800/80 text-sm font-medium text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Available for Work
              </span>
            </motion.div>

            {/* Heading */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}>
              <p className="text-base font-medium tracking-widest uppercase text-zinc-400 dark:text-zinc-500 mb-3">
                Full Stack Developer
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 leading-[1.1]">
                Muhammad<br />
                <span className="text-zinc-500 dark:text-zinc-400">Fauzan</span>{" "}
                Naufaldy
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-lg text-zinc-500 dark:text-zinc-400 max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              I craft robust, scalable web applications — from clean frontend interfaces to reliable backend systems. Recent graduate from Telkom University Purwokerto.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row items-center gap-3 pt-2 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <Button
                size="lg"
                className="rounded-full w-full sm:w-auto h-12 px-8 bg-zinc-900 hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200 text-white transition-all shadow-sm"
                asChild
              >
                <a href="#projects">
                  View My Work <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full w-full sm:w-auto h-12 px-8 border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all"
                asChild
              >
                <a href="https://drive.google.com/file/d/1UaZ4g3-FjuwQOv33S2w6qWGoX_LQilgC/view?usp=sharing" target="_blank">
                  <Download className="mr-2 h-4 w-4" /> Resume
                </a>
              </Button>
            </motion.div>

            {/* Social links */}
            <motion.div
              className="flex items-center gap-3 justify-center md:justify-start pt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55, duration: 0.5 }}
            >
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex items-center justify-center w-10 h-10 rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 hover:border-zinc-400 dark:hover:border-zinc-600 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="flex-1 relative max-w-sm mx-auto md:max-w-none"
          >
            {/* Photo frame */}
            <div className="relative">
              {/* Decorative border offset */}
              <div className="absolute -inset-0.5 rounded-2xl bg-zinc-200 dark:bg-zinc-800 z-0" />
              <div className="relative z-10 aspect-[4/5] rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xl">
                <Image
                  src="/asset/hero.JPG"
                  alt="Muhammad Fauzan Naufaldy"
                  className="object-cover w-full h-full"
                  width={500}
                  height={625}
                  priority
                  sizes="(max-width: 768px) 85vw, 400px"
                />
              </div>
              {/* Floating stat card */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="absolute -bottom-5 -left-5 md:-left-8 z-20 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl px-5 py-3 shadow-lg"
              >
                <p className="text-xs text-zinc-400 dark:text-zinc-500 font-medium uppercase tracking-wider">Stack</p>
                <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mt-0.5">React · Laravel · Next.js</p>
              </motion.div>
              {/* Floating years badge */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -top-5 -right-5 md:-right-8 z-20 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl px-5 py-3 shadow-lg"
              >
                <p className="text-xs text-zinc-400 dark:text-zinc-500 font-medium uppercase tracking-wider">Experience</p>
                <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mt-0.5">2+ Years</p>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
