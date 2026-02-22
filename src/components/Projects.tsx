"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Code2 } from "lucide-react";
import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const projects = [
  {
    title: "CodeTag Studio",
    description: "A modern web development studio platform that helps businesses and individuals create stunning websites.",
    image: "/asset/codetag.png",
    tags: ["Next.js", "Tailwind CSS", "React", "TypeScript", "Node.js", "Vercel"],
    github: "https://github.com/fauzannaufaldy/ecommerce-next",
    demo: "https://codetag-ten.vercel.app/"
  },
  {
    title: "Management of Room and IT Laboratory Equipment Rental",
    description: "Web-based Laboratory Room and Equipment Borrowing Management System developed to streamline reservation and inventory tracking at the Informatics Laboratory of Universitas Telkom Purwokerto. The system provides features for booking lab rooms, borrowing equipment, admin verification, and monitoring borrowing history using Laravel, MySQL, and Tailwind CSS.",
    image: "/asset/lab.png",
    tags: ["Laravel", "PHP", "Tailwind CSS", "MySQL"],
    github: "https://github.com/fauzannaufaldy/inventory-laravel",
    demo: "https://www.laboratoriumfif.site/"
  },
  {
    title: "DreamSync",
    description: "DreamSync is a sleep tracking and wellness web application designed to help users improve sleep quality, manage daily activities, and reduce insomnia through sleep tips, relaxation features, and smart reminders with a modern and responsive user interface.",
    image: "/asset/dreamsync.png",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    github: "https://github.com/fauzannaufaldy/interactive-dashboard",
    demo: "#"
  }
];

const tagColors: Record<string, string> = {
  "Next.js": "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 border-transparent",
  "Tailwind CSS": "bg-cyan-100 text-cyan-700 dark:bg-cyan-500/20 dark:text-cyan-300 dark:border-cyan-500/30 border-cyan-200",
  "JavaScript": "bg-yellow-100 text-yellow-700 dark:bg-yellow-500/20 dark:text-yellow-300 dark:border-yellow-500/30 border-yellow-200",
  "Laravel": "bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-300 dark:border-red-500/30 border-red-200",
  "PHP": "bg-indigo-100 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-300 dark:border-indigo-500/30 border-indigo-200",
  "Bootstrap": "bg-purple-100 text-purple-700 dark:bg-purple-500/20 dark:text-purple-300 dark:border-purple-500/30 border-purple-200",
  "MySQL": "bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300 dark:border-blue-500/30 border-blue-200",
  "HTML": "bg-orange-100 text-orange-700 dark:bg-orange-500/20 dark:text-orange-300 dark:border-orange-500/30 border-orange-200",
  "CSS": "bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300 dark:border-blue-500/30 border-blue-200"
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32 bg-zinc-50/50 dark:bg-zinc-900/20 relative overflow-hidden">
      {/* modern background blur */}
      <div className="absolute top-0 right-0 -z-10 translate-x-1/3 -translate-y-1/3 w-[600px] h-[600px] opacity-20 dark:opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-bl from-blue-400 to-purple-500 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16 relative">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Featured Projects
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-emerald-500 mx-auto rounded-full" />
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto pt-4">
            A selection of my recent work showcasing my abilities across the stack.
          </p>
        </div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projects.map((project, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <motion.div variants={itemVariants} className="group h-full flex cursor-pointer w-full text-left">
                  <Card className="flex flex-col w-full overflow-hidden border-zinc-200/50 dark:border-zinc-800/50 bg-white/60 dark:bg-zinc-950/60 backdrop-blur-xl transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2 relative border origin-bottom">

                    {/* Image Placeholder area */}
                    {/* Project Image */}
                    <div className="relative aspect-[16/9] overflow-hidden border-b border-zinc-200/50 dark:border-zinc-800/50">
                      {/* Image */}
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        priority={index === 0}
                      />

                      {/* Overlay gradient biar text tetap kebaca */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10" />

                      {/* Title di atas gambar */}
                      <div className="absolute bottom-0 left-0 right-0 z-20 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {project.title}
                        </h3>
                        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                          <span className="text-xs font-medium text-blue-300 uppercase tracking-wider">
                            Click to view details
                          </span>
                        </div>
                      </div>
                    </div>

                    <CardContent className="flex-grow space-y-5 pt-8 px-6 pb-8">
                      <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed line-clamp-3">
                        {project.description}
                      </p>

                      {/* Tech Stack Tags */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.tags.map(tag => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className={`text-xs px-2.5 py-1 font-semibold border-none \${tagColors[tag] || "bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300"}`}
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px] border-zinc-200 dark:border-zinc-800 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-xl">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold">{project.title}</DialogTitle>
                </DialogHeader>
                <div className="relative aspect-[16/9] overflow-hidden rounded-lg mt-2">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 600px"
                  />
                </div>
                <div className="space-y-4 py-4">
                  <DialogDescription className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    {project.description}
                  </DialogDescription>
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className={`text-xs px-3 py-1 font-semibold border-none \${tagColors[tag] || "bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300"}`}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 pt-4 border-t border-zinc-200 dark:border-zinc-800">
                  <Button variant="default" className="flex-1 bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-white dark:hover:bg-zinc-200 dark:text-zinc-900 gap-2" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" /> Live Demo
                    </a>
                  </Button>
                  <Button variant="outline" className="flex-1 border-zinc-200 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 gap-2" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" /> Code
                    </a>
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
