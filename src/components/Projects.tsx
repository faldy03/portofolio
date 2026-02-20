"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Code2 } from "lucide-react";
import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured online store built with Next.js, featuring a modern UI, responsive design, and seamless shopping experience. Styled exclusively with Tailwind CSS.",
    image: "/api/placeholder/600/400", 
    tags: ["Next.js", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/fauzannaufaldy/ecommerce-next",
    demo: "#"
  },
  {
    title: "Inventory Management System",
    description: "Robust backend system built with Laravel and PHP to track product inventory, manage suppliers, and generate reports. Includes an intuitive dashboard.",
    image: "/api/placeholder/600/400",
    tags: ["Laravel", "PHP", "Bootstrap", "MySQL"],
    github: "https://github.com/fauzannaufaldy/inventory-laravel",
    demo: "#"
  },
  {
    title: "Interactive Dashboard",
    description: "Data visualization dashboard with HTML, CSS, and Vanilla JavaScript, showcasing complex data in an easy-to-understand and interactive format format.",
    image: "/api/placeholder/600/400",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/fauzannaufaldy/interactive-dashboard",
    demo: "#"
  }
];

const tagColors: Record<string, string> = {
  "Next.js": "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 border-transparent",
  "Tailwind CSS": "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400 border-cyan-200 dark:border-cyan-800",
  "JavaScript": "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400 border-yellow-200 dark:border-yellow-800",
  "Laravel": "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 border-red-200 dark:border-red-800",
  "PHP": "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400 border-indigo-200 dark:border-indigo-800",
  "Bootstrap": "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400 border-purple-200 dark:border-purple-800",
  "MySQL": "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 border-blue-200 dark:border-blue-800",
  "HTML": "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400 border-orange-200 dark:border-orange-800",
  "CSS": "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 border-blue-200 dark:border-blue-800"
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
        <div className="absolute inset-0 bg-gradient-to-bl from-blue-400 to-purple-500 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }}/>
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
            <motion.div key={index} variants={itemVariants} className="group h-full flex">
              <Card className="flex flex-col w-full overflow-hidden border-zinc-200/50 dark:border-zinc-800/50 bg-white/60 dark:bg-zinc-950/60 backdrop-blur-xl transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2 relative border origin-bottom">
                
                {/* Image Placeholder area */}
                <div className="relative aspect-[16/9] overflow-hidden bg-zinc-100 dark:bg-zinc-900 border-b border-zinc-200/50 dark:border-zinc-800/50 p-6 flex flex-col justify-end">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 z-10" />
                    
                    {/* Abstract colorful background for placeholder */}
                    <div className={`absolute inset-0 opacity-20 dark:opacity-30 mix-blend-overlay \${
                      index % 3 === 0 ? 'bg-gradient-to-br from-blue-500 to-purple-600' : 
                      index % 3 === 1 ? 'bg-gradient-to-br from-emerald-500 to-teal-600' : 
                      'bg-gradient-to-br from-orange-500 to-pink-600'
                    }`} />
                    
                    <div className="relative z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                         <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                         <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                             <span className="text-xs font-medium text-blue-300 uppercase tracking-wider">View Details</span>
                         </div>
                    </div>
                </div>
                
                <CardContent className="flex-grow space-y-5 pt-8 px-6">
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
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
                
                {/* Actions Footer */}
                <CardFooter className="pt-6 pb-6 px-6 mt-auto flex flex-wrap gap-3 relative z-20 bg-zinc-50/50 dark:bg-zinc-900/50 border-t border-zinc-100 dark:border-zinc-800/50">
                  <span className="flex-1 min-w-[120px]">
                    <Button variant="default" size="sm" className="w-full h-11 gap-2 rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] transition-all bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-white dark:hover:bg-zinc-200 dark:text-zinc-900" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" /> Live Demo
                      </a>
                    </Button>
                  </span>
                  <span className="flex-1 min-w-[120px]">
                    <Button variant="outline" size="sm" className="w-full h-11 gap-2 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:scale-[1.02] transition-all border-zinc-200 dark:border-zinc-700" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" /> Code
                      </a>
                    </Button>
                  </span>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
