"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, ExternalLink, CalendarDays, ZoomIn, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { useAccent } from "@/components/ColorContext";

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  category: string;
  /** Path relative to /public, e.g. "/asset/certificates/dicoding-webdev.jpg" */
  image?: string;
}

const certificates: Certificate[] = [
  {
    title: "Intro to Software Engineering",
    issuer: "Revou",
    date: "2026",
    credentialUrl: "#",
    category: "Web Dev",
    image: "/asset/certificates/sertif1.png",
  },
  {
    title: "Front-End and Back-End Web Development",
    issuer: "Dicoding Indonesia",
    date: "2023",
    credentialUrl: "#",
    category: "Frontend and Backend",
    image: "/asset/certificates/sertif2.png",
  },
  {
    title: "Toefl ITP",
    issuer: "ETS",
    date: "2025",
    credentialUrl: "#",
    category: "English",
    image: "/asset/certificates/sertif3.png",
  },
  {
    title: "Menjadi Front-end Web Developer Expert",
    issuer: "Dicoding Indonesia",
    date: "2023",
    credentialUrl: "#",
    category: "Frontend",
    image: "/asset/certificates/sertif4.png",
  },
  {
    title: "Belajar Dasar Pemrograman Javascript",
    issuer: "Dicoding Indonesia",
    date: "2023",
    credentialUrl: "#",
    category: "JavaScript",
    image: "/asset/certificates/sertif5.png",
  },
  {
    title: "Belajar Git dan GitHUb",
    issuer: "Dicoding Indonesia",
    date: "2023",
    credentialUrl: "#",
    category: "Git dan GitHub",
    image: "/asset/certificates/sertif6.png",
  },
];

const categoryColor: Record<string, string> = {
  "Web Dev": "bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300",
  "Frontend": "bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300",
  "Backend": "bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300",
  "Programming": "bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300",
};

const containerVariants: any = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};
const itemVariants: any = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

// Gradient accents per card index (subtle, monochrome)
const accents = [
  "from-zinc-200 to-zinc-300 dark:from-zinc-700 dark:to-zinc-800",
  "from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-700",
  "from-zinc-200 to-zinc-300 dark:from-zinc-700 dark:to-zinc-800",
  "from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-700",
  "from-zinc-200 to-zinc-300 dark:from-zinc-700 dark:to-zinc-800",
  "from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-700",
];

export function Certificates() {
  const { accent } = useAccent();
  const [selected, setSelected] = useState<number | null>(null);

  const selectedCert = selected !== null ? certificates[selected] : null;

  const prev = () => {
    if (selected === null) return;
    setSelected((selected - 1 + certificates.length) % certificates.length);
  };
  const next = () => {
    if (selected === null) return;
    setSelected((selected + 1) % certificates.length);
  };

  return (
    <>
      <section id="certificates" className="py-20 md:py-32 bg-zinc-50 dark:bg-zinc-900/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={containerVariants}
            className="max-w-6xl mx-auto space-y-16"
          >
            {/* Header */}
            <div className="text-center space-y-4">
              <motion.p variants={itemVariants} className="text-sm font-medium tracking-widest uppercase text-zinc-400 dark:text-zinc-500">
                Credentials
              </motion.p>
              <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                Certificates
              </motion.h2>
              <motion.div
                variants={itemVariants}
                className="h-px w-16 mx-auto"
                style={{ background: `linear-gradient(to right, ${accent.hex}, ${accent.hex}44)` }}
              />
              <motion.p variants={itemVariants} className="text-zinc-500 dark:text-zinc-400 max-w-xl mx-auto">
                Courses and certifications I've completed. Click any card to view the certificate.
              </motion.p>
            </div>

            {/* Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {certificates.map((cert, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  onClick={() => setSelected(index)}
                  className="group cursor-pointer"
                >
                  <div className="relative h-full rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 overflow-hidden shadow-sm hover:shadow-md hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 hover:-translate-y-1 flex flex-col">

                    {/* Certificate image / gradient preview */}
                    <div className={`relative w-full aspect-[16/9] overflow-hidden bg-gradient-to-br ${accents[index % accents.length]}`}>
                      {cert.image ? (
                        <>
                          <Image
                            src={cert.image}
                            alt={cert.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />
                          {/* Overlay on hover */}
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 dark:bg-zinc-900/90 rounded-full p-3 shadow-lg">
                              <ZoomIn className="h-5 w-5 text-zinc-700 dark:text-zinc-300" />
                            </span>
                          </div>
                        </>
                      ) : (
                        /* Placeholder when no image */
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6">
                          <Award className="h-10 w-10 text-zinc-400 dark:text-zinc-600" />
                          <span className="text-xs text-zinc-400 dark:text-zinc-600 text-center leading-relaxed">
                            Tambahkan gambar sertifikat
                          </span>
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="bg-white/80 dark:bg-zinc-900/80 rounded-full px-3 py-1.5 text-xs text-zinc-600 dark:text-zinc-400 shadow flex items-center gap-1.5">
                              <ZoomIn className="h-3 w-3" /> Preview
                            </span>
                          </div>
                        </div>
                      )}
                      {/* Category badge */}
                      <div className="absolute top-3 left-3">
                        <span className={`inline-block text-[11px] font-semibold px-2.5 py-1 rounded-full shadow-sm ${categoryColor[cert.category] ?? "bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300"}`}>
                          {cert.category}
                        </span>
                      </div>
                    </div>

                    {/* Card body */}
                    <div className="flex flex-col flex-1 p-5 gap-3">
                      <div className="flex-1">
                        <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 leading-snug group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">
                          {cert.title}
                        </h3>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">{cert.issuer}</p>
                      </div>
                      <div className="flex items-center justify-between pt-3 border-t border-zinc-100 dark:border-zinc-800">
                        <span className="flex items-center gap-1.5 text-xs text-zinc-400 dark:text-zinc-500">
                          <CalendarDays className="h-3.5 w-3.5" />
                          {cert.date}
                        </span>
                        {cert.credentialUrl && cert.credentialUrl !== "#" && (
                          <a
                            href={cert.credentialUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="flex items-center gap-1 text-xs font-medium text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                          >
                            Credential <ExternalLink className="h-3 w-3" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lightbox modal */}
      <AnimatePresence>
        {selected !== null && selectedCert && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden shadow-2xl border border-zinc-200 dark:border-zinc-700"
            >
              {/* Header */}
              <div className="flex items-start justify-between p-5 pb-4 border-b border-zinc-100 dark:border-zinc-800">
                <div>
                  <p className="text-xs font-medium tracking-wider uppercase text-zinc-400 dark:text-zinc-500 mb-1">{selectedCert.issuer} · {selectedCert.date}</p>
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50">{selectedCert.title}</h3>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="ml-4 shrink-0 p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-500 dark:text-zinc-400 transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Image area */}
              <div className="relative w-full aspect-[16/9] bg-zinc-100 dark:bg-zinc-800">
                {selectedCert.image ? (
                  <Image
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 768px"
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-zinc-400 dark:text-zinc-600">
                    <Award className="h-16 w-16" />
                    <div className="text-center px-6">
                      <p className="font-medium text-zinc-500 dark:text-zinc-400">Gambar sertifikat belum ditambahkan</p>
                      <p className="text-sm mt-1 text-zinc-400 dark:text-zinc-500">
                        Simpan file gambar di{" "}
                        <code className="bg-zinc-200 dark:bg-zinc-700 px-1.5 py-0.5 rounded text-xs text-zinc-700 dark:text-zinc-300">
                          /public/asset/certificates/
                        </code>{" "}
                        dan isi field <code className="bg-zinc-200 dark:bg-zinc-700 px-1.5 py-0.5 rounded text-xs text-zinc-700 dark:text-zinc-300">image</code> pada data sertifikat.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Footer nav */}
              <div className="flex items-center justify-between p-4 border-t border-zinc-100 dark:border-zinc-800">
                <button
                  onClick={prev}
                  className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors px-3 py-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800"
                >
                  <ChevronLeft className="h-4 w-4" /> Prev
                </button>
                <span className="text-xs text-zinc-400 dark:text-zinc-500">
                  {selected + 1} / {certificates.length}
                </span>
                {selectedCert.credentialUrl && selectedCert.credentialUrl !== "#" && (
                  <a
                    href={selectedCert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium flex items-center gap-1.5 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors px-3 py-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink className="h-3.5 w-3.5" /> Lihat Credential
                  </a>
                )}
                <button
                  onClick={next}
                  className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors px-3 py-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800"
                >
                  Next <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
