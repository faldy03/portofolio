"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ArrowLeft, ArrowRight, Layers } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useAccent } from "@/components/ColorContext";

const projects = [
  {
    title: "FuturePath AI",
    description:
      "FuturePath AI is a web-based application that helps users make better life and career decisions through AI-powered simulations. Users can input their personal background and a specific decision they are considering, and the system generates three possible future scenarios: best case, worst case, and the most realistic outcome. The application also provides actionable steps to guide users toward better results.",
    image: "/asset/futurepath.png",
    hasImage: true,
    gradient: "from-violet-600 via-purple-600 to-indigo-700",
    icon: "✦",
    tags: ["Next.js", "Tailwind CSS", "Gemini API"],
    github: "https://github.com/faldy03/futurepath-ai",
    demo: "https://futurepath-ai-ivory.vercel.app/",
    year: "2025",
    number: "01",
  },
  {
    title: "CodeTag Studio",
    description:
      "A modern web development studio platform that helps businesses and individuals create stunning websites. Built with a focus on performance, accessibility, and a seamless developer experience — deployed on Vercel for instant global delivery.",
    image: "/asset/codetag.png",
    hasImage: true,
    gradient: "from-sky-500 via-blue-600 to-cyan-700",
    icon: "⬡",
    tags: ["Next.js", "Tailwind CSS", "React", "TypeScript", "Vercel"],
    github: "https://github.com/fauzannaufaldy/ecommerce-next",
    demo: "https://codetag-ten.vercel.app/",
    year: "2024",
    number: "02",
  },
  {
    title: "Lab Management System",
    description:
      "Web-based Laboratory Room and Equipment Borrowing Management System developed to streamline reservation and inventory tracking at the Informatics Laboratory of Universitas Telkom Purwokerto. Features booking, admin verification, and borrowing history.",
    image: "/asset/lab.png",
    hasImage: true,
    gradient: "from-rose-500 via-red-600 to-orange-600",
    icon: "⬢",
    tags: ["Laravel", "PHP", "Tailwind CSS", "MySQL"],
    github: "https://github.com/fauzannaufaldy/inventory-laravel",
    demo: "https://www.laboratoriumfif.site/",
    year: "2024",
    number: "03",
  },
  {
    title: "DreamSync",
    description:
      "DreamSync is a sleep tracking and wellness web application designed to help users improve sleep quality, manage daily activities, and reduce insomnia through sleep tips, relaxation features, and smart reminders — wrapped in a modern and responsive user interface.",
    image: "/asset/dreamsync.png",
    hasImage: true,
    gradient: "from-teal-500 via-emerald-600 to-green-700",
    icon: "◈",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    github: "https://github.com/fauzannaufaldy/interactive-dashboard",
    demo: "#",
    year: "2024",
    number: "04",
  },
];

const tagColors: Record<string, string> = {
  "Next.js": "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900",
  "Gemini API": "bg-emerald-50 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300",
  "Tailwind CSS": "bg-cyan-50 text-cyan-700 dark:bg-cyan-500/15 dark:text-cyan-300",
  "JavaScript": "bg-yellow-50 text-yellow-700 dark:bg-yellow-500/15 dark:text-yellow-300",
  "Laravel": "bg-red-50 text-red-700 dark:bg-red-500/15 dark:text-red-300",
  "PHP": "bg-indigo-50 text-indigo-700 dark:bg-indigo-500/15 dark:text-indigo-300",
  "Bootstrap": "bg-purple-50 text-purple-700 dark:bg-purple-500/15 dark:text-purple-300",
  "MySQL": "bg-blue-50 text-blue-700 dark:bg-blue-500/15 dark:text-blue-300",
  "HTML": "bg-orange-50 text-orange-700 dark:bg-orange-500/15 dark:text-orange-300",
  "CSS": "bg-sky-50 text-sky-700 dark:bg-sky-500/15 dark:text-sky-300",
  "React": "bg-cyan-50 text-cyan-700 dark:bg-cyan-500/15 dark:text-cyan-300",
  "TypeScript": "bg-blue-50 text-blue-800 dark:bg-blue-500/15 dark:text-blue-300",
  "Vercel": "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300",
};

export function Projects() {
  const { accent } = useAccent();
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = (index: number) => {
    setDirection(index > active ? 1 : -1);
    setActive(index);
  };

  const prev = () => goTo(active === 0 ? projects.length - 1 : active - 1);
  const next = () => goTo(active === projects.length - 1 ? 0 : active + 1);

  const project = projects[active];

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
    center: { x: 0, opacity: 1, transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
    exit: (dir: number) => ({ x: dir > 0 ? -60 : 60, opacity: 0, transition: { duration: 0.3 } }),
  };

  return (
    <section id="projects" className="py-20 md:py-32 relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] opacity-[0.07] dark:opacity-[0.12]">
          <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} rounded-full blur-[120px] transition-all duration-700`} />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-zinc-300 dark:bg-zinc-700" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-zinc-400 dark:text-zinc-500">Selected Work</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Featured<br />
            <span style={{ color: accent.hex }}>Projects.</span>
          </h2>
        </motion.div>

        {/* Main carousel layout */}
        <div className="grid lg:grid-cols-[1fr_400px] gap-10 lg:gap-16 items-center">

          {/* Left — Image / Visual */}
          <div className="relative aspect-[4/3] lg:aspect-[16/10] rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-800/60 order-2 lg:order-1">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={active}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0"
              >
                {project.hasImage ? (
                  <>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 60vw"
                      className="object-cover"
                      priority={active === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </>
                ) : (
                  /* Elegant illustrated placeholder */
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`}>
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-6">
                      {/* Decorative grid */}
                      <div className="absolute inset-0 opacity-10"
                        style={{
                          backgroundImage: "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
                          backgroundSize: "40px 40px"
                        }}
                      />
                      {/* Center icon */}
                      <div className="relative z-10 text-center">
                        <div className="text-7xl text-white/30 font-bold select-none mb-4 tracking-tight">
                          {project.icon}
                        </div>
                        <div className="text-white/80 text-xl font-semibold tracking-wide">{project.title}</div>
                        <div className="text-white/40 text-sm mt-1 tracking-widest uppercase">Preview coming soon</div>
                      </div>
                      {/* Corner decoration */}
                      <div className="absolute bottom-6 right-6 text-white/20 text-xs font-mono">{project.year}</div>
                    </div>
                  </div>
                )}

                {/* Project number badge */}
                <div className="absolute top-4 left-4 bg-black/30 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full tracking-widest">
                  {project.number} / {String(projects.length).padStart(2, "0")}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right — Content */}
          <div className="order-1 lg:order-2">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={active}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="space-y-6"
              >
                {/* Year + number */}
                <div className="flex items-center gap-4">
                  <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500 tracking-widest">{project.year}</span>
                  <div className="h-px flex-1 bg-zinc-200 dark:bg-zinc-700/60" />
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-50 leading-tight">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-xs font-semibold px-3 py-1 rounded-full ${tagColors[tag] || "bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300"}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-3 pt-2">
                  {project.demo !== "#" && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-white px-5 py-2.5 rounded-xl transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5 active:translate-y-0"
                      style={{ backgroundColor: accent.hex }}
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      Live Demo
                    </a>
                  )}
                  {project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-700 dark:text-zinc-300 px-5 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 transition-all duration-300 hover:border-zinc-400 dark:hover:border-zinc-500 hover:-translate-y-0.5 active:translate-y-0"
                    >
                      <Github className="h-3.5 w-3.5" />
                      View Code
                    </a>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center gap-4 mt-10">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full flex items-center justify-center border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-500 transition-all duration-200 active:scale-95"
                aria-label="Previous project"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>

              {/* Dot indicators */}
              <div className="flex gap-2 flex-1">
                {projects.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className="relative h-1 flex-1 rounded-full bg-zinc-200 dark:bg-zinc-700 overflow-hidden transition-all duration-300"
                    aria-label={`Go to project ${i + 1}`}
                  >
                    {i === active && (
                      <motion.div
                        layoutId="activeBar"
                        className="absolute inset-0 rounded-full"
                        style={{ backgroundColor: accent.hex }}
                        transition={{ type: "spring", stiffness: 400, damping: 35 }}
                      />
                    )}
                  </button>
                ))}
              </div>

              <button
                onClick={next}
                className="w-10 h-10 rounded-full flex items-center justify-center border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-500 transition-all duration-200 active:scale-95"
                aria-label="Next project"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            {/* Project thumbnails strip */}
            <div className="flex gap-2 mt-4">
              {projects.map((p, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`relative h-14 flex-1 rounded-lg overflow-hidden transition-all duration-300 ${i === active ? "ring-2 opacity-100" : "opacity-40 hover:opacity-70"}`}
                  style={i === active ? { ringColor: accent.hex, outlineColor: accent.hex, outline: `2px solid ${accent.hex}` } : {}}
                  aria-label={p.title}
                >
                  {p.hasImage ? (
                    <Image src={p.image} alt={p.title} fill sizes="120px" className="object-cover" />
                  ) : (
                    <div className={`absolute inset-0 bg-gradient-to-br ${p.gradient} flex items-center justify-center`}>
                      <span className="text-white/60 text-lg">{p.icon}</span>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
