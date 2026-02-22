"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    id: 1,
    role: "Full Stack Web Developer",
    company: "CodeTag Studio",
    date: " Jul 2025",
    description: "Together with my teammate, I built CodeTag, a platform that helps people create websites for various purposes such as business needs, company profiles, and more.",
    skills: ["Next.js", "React", "Tailwind CSS", "Node.js"],
    accent: "bg-blue-500"
  },
  {
    id: 2,
    role: "Indepedent Study",
    company: "Dicoding Indonesia",
    date: "Apr 2023",
    description: "Studied and practiced Front-End and Back-End web development, focusing on building responsive interfaces and developing robust server-side applications. Gained experience with modern web technologies and frameworks while enhancing problem-solving and coding skills.",
    skills: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap"],
    accent: "bg-emerald-500"
  },
  {
    id: 3,
    role: "Full Stack Web Developer",
    company: "Telkom University",
    date: "Jan 2025 - Aug 2025",
    description: "Web-based Laboratory Room and Equipment Borrowing Management System developed to streamline reservation and inventory tracking at the Informatics Laboratory of Universitas Telkom Purwokerto. The system provides features for booking lab rooms, borrowing equipment, admin verification, and monitoring borrowing history using Laravel, MySQL, and Tailwind CSS.",
    skills: ["PHP", "Laravel", "MySQL", "Tailwind CSS"],
    accent: "bg-purple-500"
  }
];

const containerVariants: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: any = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, type: "spring", stiffness: 100 } },
};

export function Experience() {
  return (
    <section id="experience" className="py-20 md:py-32 bg-zinc-50 dark:bg-zinc-900/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-96 h-96 bg-emerald-500/10 dark:bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
              Work Experience
            </motion.h2>
            <motion.div variants={itemVariants} className="h-1 w-20 bg-zinc-900 dark:bg-zinc-100 mx-auto rounded-full" />
            <motion.p variants={itemVariants} className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto pt-4">
              My professional journey and academic projects in software development.
            </motion.p>
          </div>

          {/* Timeline View */}
          <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-zinc-200 dark:before:via-zinc-800 before:to-transparent">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={exp.id}
                  variants={itemVariants}
                  className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
                >
                  {/* Timeline dot */}
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-zinc-950 bg-zinc-100 dark:bg-zinc-900/50 text-zinc-500 dark:text-zinc-400 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm relative z-10 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white dark:group-hover:bg-blue-500 dark:group-hover:text-white group-hover:border-blue-100 dark:group-hover:border-blue-900">
                    <Briefcase className="w-4 h-4" />
                  </div>

                  {/* Content Card */}
                  <Card className="w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] border-none shadow-md hover:shadow-xl transition-all duration-300 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm group-hover:-translate-y-1 hover:bg-white dark:hover:bg-zinc-900">
                    <CardContent className="p-6 relative overflow-hidden">
                      {/* Accent Line */}
                      <div className={`absolute top-0 \${isEven ? 'left-0' : 'left-0 md:left-auto md:right-0'} w-1 h-full \${exp.accent} transition-all duration-300 group-hover:w-2`} />

                      <div className="space-y-4">
                        <div className="flex flex-col xl:flex-row xl:items-start justify-between gap-2">
                          <div>
                            <h3 className="font-bold text-xl text-zinc-900 dark:text-zinc-50 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                              {exp.role}
                            </h3>
                            <p className="text-zinc-600 dark:text-zinc-400 font-medium flex items-center gap-1 mt-1">
                              {exp.company}
                              <ChevronRight className="w-3 h-3 text-zinc-400" />
                            </p>
                          </div>
                          <Badge variant="secondary" className="w-fit flex items-center gap-1.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">
                            <Calendar className="w-3 h-3" />
                            {exp.date}
                          </Badge>
                        </div>

                        <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                          {exp.description}
                        </p>

                        <div className="flex flex-wrap gap-2 pt-2">
                          {exp.skills.map(skill => (
                            <Badge key={skill} variant="outline" className="bg-white/50 dark:bg-zinc-900/50 border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 group-hover:border-zinc-300 dark:group-hover:border-zinc-700 transition-colors">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
