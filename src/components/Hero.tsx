"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-48 md:pb-32">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-30 dark:opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-emerald-50 dark:from-zinc-800 dark:to-zinc-900 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 space-y-8 text-center md:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-zinc-100 dark:bg-zinc-800 text-sm font-medium text-zinc-800 dark:text-zinc-200 mb-4 border border-zinc-200 dark:border-zinc-700 shadow-sm">
                Available for Work 🚀
              </span>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500 dark:from-blue-400 dark:to-emerald-400">
                Muhammad Fauzan Naufaldy
              </span>
            </h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Frontend & Backend Developer passionate about building robust, scalable applications and delivering exceptional user experiences.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row items-center gap-4 pt-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <Button size="lg" className="rounded-full w-full sm:w-auto h-14 px-8 text-lg shadow-lg hover:shadow-xl transition-all" asChild>
                <a href="#projects">
                  View My Work <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full w-full sm:w-auto h-14 px-8 text-lg border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all" asChild>
                <a href="/resume.pdf" target="_blank">
                  <Download className="mr-2 h-5 w-5" /> Download Resume
                </a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex-1 relative max-w-md mx-auto md:max-w-none"
          >
            <div className="relative aspect-square rounded-full md:rounded-3xl overflow-hidden border-4 border-white dark:border-zinc-800 shadow-2xl">
              <img 
                src="https://api.dicebear.com/7.x/notionists/svg?seed=Fauzan" 
                alt="Muhammad Fauzan Naufaldy" 
                className="object-cover w-full h-full bg-zinc-100 dark:bg-zinc-900"
              />
            </div>
            {/* Decorative element behind image */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500 to-emerald-500 rounded-full md:rounded-3xl opacity-20 dark:opacity-40 blur-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
