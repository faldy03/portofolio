"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ColorSwitcher } from "@/components/ColorSwitcher";
import { useAccent } from "@/components/ColorContext";

const navLinks = [
  { href: "#about",        label: "About"        },
  { href: "#experience",   label: "Experience"   },
  { href: "#projects",     label: "Projects"     },
  { href: "#certificates", label: "Certificates" },
  { href: "#contact",      label: "Contact"      },
];

/* ── Single nav link with gradient underline on hover ────────── */
function NavLink({ href, label, onClick }: { href: string; label: string; onClick?: () => void }) {
  const { accent } = useAccent();
  return (
    <Link
      href={href}
      onClick={onClick}
      className="relative group text-sm font-medium
        text-zinc-600 hover:text-zinc-900
        dark:text-zinc-400 dark:hover:text-white
        transition-colors duration-200"
    >
      {label}
      <span
        className="absolute -bottom-0.5 left-0 h-[2px] w-0 rounded-full
          transition-all duration-300 group-hover:w-full"
        style={{ background: `linear-gradient(to right, ${accent.hex}, ${accent.hex}88)` }}
      />
    </Link>
  );
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { accent } = useAccent();

  React.useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0,   opacity: 1 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className={`
          fixed top-0 z-50 w-full transition-all duration-300
          ${isScrolled
            ? "bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md border-b border-zinc-200 dark:border-white/10 shadow-sm"
            : "bg-transparent"
          }
        `}
      >
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">

          {/* ── Logo ─────────────────────────────────────────── */}
          <Link href="/" className="flex items-center">
            <motion.span
              whileHover={{ scale: 1.06 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="font-extrabold text-xl tracking-tight
                text-zinc-900 dark:text-white
                transition-colors duration-200"
            >
              Fauzan
              <span
                className="ml-0.5"
                style={{ color: accent.hex }}
              >.</span>
            </motion.span>
          </Link>

          {/* ── Desktop nav ───────────────────────────────────── */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.06 * i }}
              >
                <NavLink href={link.href} label={link.label} />
              </motion.div>
            ))}
          </nav>

          {/* ── Right actions ─────────────────────────────────── */}
          <div className="flex items-center gap-2">
            {/* Color switcher */}
            <ColorSwitcher />

            {/* Theme toggle */}
            <ThemeToggle />

            {/* Hire Me button (desktop) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="hidden md:block"
            >
              <Button
                asChild
                className="rounded-full h-9 px-5 text-sm font-semibold text-white transition-colors shadow-sm"
                style={{ backgroundColor: accent.hex }}
              >
                <Link href="#contact">Hire Me</Link>
              </Button>
            </motion.div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen((o) => !o)}
              aria-label="Toggle menu"
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-full
                text-zinc-600 dark:text-zinc-300
                hover:bg-zinc-100 dark:hover:bg-zinc-800
                transition-colors"
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileOpen ? (
                  <motion.span key="x"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0,   opacity: 1 }}
                    exit={{   rotate:  90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-5 w-5" />
                  </motion.span>
                ) : (
                  <motion.span key="menu"
                    initial={{ rotate:  90, opacity: 0 }}
                    animate={{ rotate:  0,  opacity: 1 }}
                    exit={{   rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-5 w-5" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.header>

      {/* ── Mobile menu ──────────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{   opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="fixed top-16 left-0 right-0 z-40 overflow-hidden
              bg-white dark:bg-zinc-950
              border-b border-zinc-200 dark:border-white/10
              shadow-xl"
          >
            <nav className="flex flex-col gap-0 px-6 py-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.22, delay: 0.04 * i }}
                  className="py-3 border-b border-zinc-100 dark:border-white/5 last:border-0"
                >
                  <NavLink href={link.href} label={link.label} onClick={() => setMobileOpen(false)} />
                </motion.div>
              ))}
              <div className="py-4">
                <Button
                  asChild
                  className="rounded-full w-full h-10 text-sm font-semibold text-white"
                  style={{ backgroundColor: accent.hex }}
                >
                  <Link href="#contact" onClick={() => setMobileOpen(false)}>Hire Me</Link>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
