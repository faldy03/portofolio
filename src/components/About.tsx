"use client";

import { motion } from "framer-motion";
import { GraduationCap, Code2, Database, Layout } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skills = [
  { 
    name: "PHP", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg", 
    color: "text-[#777BB4]", 
    bg: "group-hover:bg-[#777BB4]/10 dark:group-hover:bg-[#777BB4]/20", 
    border: "group-hover:border-[#777BB4]/50" 
  },
  { 
    name: "Laravel", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg", 
    color: "text-[#FF2D20]", 
    bg: "group-hover:bg-[#FF2D20]/10 dark:group-hover:bg-[#FF2D20]/20", 
    border: "group-hover:border-[#FF2D20]/50" 
  },
  { 
    name: "Next.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", 
    color: "text-black dark:text-white", 
    bg: "group-hover:bg-black/5 dark:group-hover:bg-white/10", 
    border: "group-hover:border-black/20 dark:group-hover:border-white/20" 
  },
  { 
    name: "Tailwind", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", 
    color: "text-[#06B6D4]", 
    bg: "group-hover:bg-[#06B6D4]/10 dark:group-hover:bg-[#06B6D4]/20", 
    border: "group-hover:border-[#06B6D4]/50" 
  },
  { 
    name: "Bootstrap", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg", 
    color: "text-[#7952B3]", 
    bg: "group-hover:bg-[#7952B3]/10 dark:group-hover:bg-[#7952B3]/20", 
    border: "group-hover:border-[#7952B3]/50" 
  },
  { 
    name: "HTML", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg", 
    color: "text-[#E34F26]", 
    bg: "group-hover:bg-[#E34F26]/10 dark:group-hover:bg-[#E34F26]/20", 
    border: "group-hover:border-[#E34F26]/50" 
  },
  { 
    name: "CSS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg", 
    color: "text-[#1572B6]", 
    bg: "group-hover:bg-[#1572B6]/10 dark:group-hover:bg-[#1572B6]/20", 
    border: "group-hover:border-[#1572B6]/50" 
  },
  { 
    name: "JavaScript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", 
    color: "text-[#F7DF1E]", 
    bg: "group-hover:bg-[#F7DF1E]/10 dark:group-hover:bg-[#F7DF1E]/20", 
    border: "group-hover:border-[#F7DF1E]/50" 
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-4xl mx-auto space-y-16"
        >
          {/* Section Header */}
          <div className="text-center space-y-4">
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              About Me
            </motion.h2>
            <motion.div variants={itemVariants} className="h-1 w-20 bg-zinc-900 dark:bg-zinc-100 mx-auto rounded-full" />
            <motion.p variants={itemVariants} className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto pt-4">
              I'm a dedicated developer with a strong foundation in both frontend and backend technologies. I recently graduated and I'm eager to contribute to innovative projects.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Education Info */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-semibold flex items-center gap-2 text-zinc-900 dark:text-zinc-50">
                <GraduationCap className="h-6 w-6 text-blue-600 dark:text-blue-400" /> Education
              </h3>
              <Card className="border-none shadow-md bg-white dark:bg-zinc-950 overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-blue-600 dark:bg-blue-500" />
                <CardContent className="p-6">
                  <div className="space-y-2">
                    <h4 className="font-bold text-xl text-zinc-900 dark:text-zinc-100">Telkom University</h4>
                    <p className="text-zinc-600 dark:text-zinc-400">Purwokerto Campus</p>
                    <p className="text-sm font-medium text-blue-600 dark:text-blue-400">Recent Graduate</p>
                    <p className="text-sm text-zinc-500 mt-4 leading-relaxed">
                      Developed a solid understanding of software engineering principles, algorithms, and web technologies during my academic journey.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Skills & Tech Stack */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-semibold flex items-center gap-2 text-zinc-900 dark:text-zinc-50">
                <Code2 className="h-6 w-6 text-emerald-600 dark:text-emerald-400" /> Tech Stack
              </h3>
              <Card className="border-none shadow-md bg-white dark:bg-zinc-950">
                <CardContent className="p-6 space-y-6">
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                    My core technical skills span across various modern web development tools and frameworks:
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {skills.map((skill, index) => (
                      <motion.div 
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1, duration: 0.4 }}
                        viewport={{ once: true }}
                        className={`group relative flex flex-col items-center justify-center p-4 bg-white/50 dark:bg-zinc-900/50 border border-zinc-200/50 dark:border-zinc-800/50 rounded-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 \${skill.bg} \${skill.border}`}
                      >
                         <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-100 dark:bg-zinc-800/50 shadow-inner mb-3 group-hover:scale-110 group-hover:bg-white dark:group-hover:bg-zinc-800 transition-all duration-300">
                           <img 
                             src={skill.image} 
                             alt={skill.name} 
                             className={`w-6 h-6 object-contain \${skill.name === 'Next.js' ? 'dark:invert' : ''}`} 
                           />
                         </span>
                         <span className="relative z-10 text-xs font-semibold text-zinc-700 dark:text-zinc-300 group-hover:text-zinc-900 dark:group-hover:text-zinc-50 transition-colors">
                           {skill.name}
                         </span>
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400">
                        <Layout className="h-5 w-5" />
                      </div>
                      <span className="font-medium text-sm text-zinc-700 dark:text-zinc-300">Frontend</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400">
                        <Database className="h-5 w-5" />
                      </div>
                      <span className="font-medium text-sm text-zinc-700 dark:text-zinc-300">Backend</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
