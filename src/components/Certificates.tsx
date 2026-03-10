"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink, CalendarDays } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  category: string;
}

const certificates: Certificate[] = [
  {
    title: "Web Development Fundamentals",
    issuer: "Dicoding Indonesia",
    date: "2023",
    credentialUrl: "#",
    category: "Web Dev",
  },
  {
    title: "Front-End Web Development",
    issuer: "Dicoding Indonesia",
    date: "2023",
    credentialUrl: "#",
    category: "Frontend",
  },
  {
    title: "Back-End Development with Node.js",
    issuer: "Dicoding Indonesia",
    date: "2023",
    credentialUrl: "#",
    category: "Backend",
  },
  {
    title: "Laravel & PHP Framework",
    issuer: "Udemy",
    date: "2022",
    credentialUrl: "#",
    category: "Backend",
  },
  {
    title: "Introduction to JavaScript",
    issuer: "Codecademy",
    date: "2022",
    credentialUrl: "#",
    category: "Programming",
  },
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "2022",
    credentialUrl: "#",
    category: "Frontend",
  },
];

const categoryColors: Record<string, string> = {
  "Web Dev":    "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300",
  "Frontend":   "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300",
  "Backend":    "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300",
  "Programming":"bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300",
};

const containerVariants: any = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants: any = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Certificates() {
  return (
    <section id="certificates" className="py-20 md:py-32 bg-white dark:bg-zinc-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
          className="max-w-5xl mx-auto space-y-16"
        >
          {/* Header */}
          <div className="text-center space-y-4">
            <motion.p variants={itemVariants} className="text-sm font-medium tracking-widest uppercase text-zinc-400 dark:text-zinc-500">
              Credentials
            </motion.p>
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Certificates
            </motion.h2>
            <motion.div variants={itemVariants} className="h-px w-16 bg-zinc-200 dark:bg-zinc-800 mx-auto" />
            <motion.p variants={itemVariants} className="text-zinc-500 dark:text-zinc-400 max-w-xl mx-auto">
              Courses and certifications I've completed to sharpen my skills.
            </motion.p>
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {certificates.map((cert, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="group h-full border border-zinc-100 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/50 hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-md transition-all duration-300">
                  <CardContent className="p-6 flex flex-col h-full gap-4">
                    {/* Icon + Category */}
                    <div className="flex items-start justify-between">
                      <div className="p-2.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400">
                        <Award className="h-5 w-5" />
                      </div>
                      <Badge className={`text-xs font-medium border-none ${categoryColors[cert.category] ?? "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"}`}>
                        {cert.category}
                      </Badge>
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-1.5">
                      <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 leading-snug group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors">
                        {cert.title}
                      </h3>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400">{cert.issuer}</p>
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-3 border-t border-zinc-100 dark:border-zinc-800">
                      <span className="flex items-center gap-1.5 text-xs text-zinc-400 dark:text-zinc-500">
                        <CalendarDays className="h-3.5 w-3.5" />
                        {cert.date}
                      </span>
                      {cert.credentialUrl && (
                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-xs font-medium text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                        >
                          View <ExternalLink className="h-3 w-3" />
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
