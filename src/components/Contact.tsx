"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    const mailtoLink = `mailto:m.fauzan.faldy17@gmail.com?subject=${encodeURIComponent(
      subject || "New message from Portfolio"
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;
    
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Get In Touch
            </h2>
            <div className="h-1 w-20 bg-zinc-900 dark:bg-zinc-100 mx-auto rounded-full" />
            <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto pt-4">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open!
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            <motion.div 
              className="md:col-span-2 space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="border-none shadow-md bg-white dark:bg-zinc-950 h-full">
                <CardContent className="p-8 space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">Contact Info</h3>
                    <p className="text-zinc-600 dark:text-zinc-400 flex items-center gap-2">
                       Feel free to reach out directly through these channels.
                    </p>
                  </div>
                  
                  <div className="space-y-6">
                    <a href="mailto:m.fauzan.faldy17@gmail.com" className="flex items-center gap-4 group">
                      <div className="h-12 w-12 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors shadow-sm">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Email Me</p>
                        <p className="text-zinc-900 dark:text-zinc-100 font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">m.fauzan.faldy17@gmail.com</p>
                      </div>
                    </a>

                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shadow-sm">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Location</p>
                        <p className="text-zinc-900 dark:text-zinc-100 font-semibold">Bekasi, Indonesia</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div 
              className="md:col-span-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1 }
                }
              }}
            >
              <Card className="border-none shadow-lg bg-white dark:bg-zinc-950">
                <CardContent className="p-8">
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }} className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-zinc-900 dark:text-zinc-200">Name</label>
                        <input 
                          type="text" 
                          id="name" 
                          name="name"
                          className="w-full flex h-12 rounded-md border border-zinc-200 bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-800 dark:placeholder:text-zinc-400 dark:focus-visible:ring-zinc-300"
                          placeholder="John Doe"
                        />
                      </motion.div>
                      <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }} className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-zinc-900 dark:text-zinc-200">Email</label>
                        <input 
                          type="email" 
                          id="email" 
                          name="email"
                          className="w-full flex h-12 rounded-md border border-zinc-200 bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-800 dark:placeholder:text-zinc-400 dark:focus-visible:ring-zinc-300"
                          placeholder="john@example.com"
                        />
                      </motion.div>
                    </div>
                    <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }} className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium text-zinc-900 dark:text-zinc-200">Subject</label>
                      <input 
                        type="text" 
                        id="subject" 
                        name="subject"
                        className="w-full flex h-12 rounded-md border border-zinc-200 bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-800 dark:placeholder:text-zinc-400 dark:focus-visible:ring-zinc-300"
                        placeholder="How can I help you?"
                      />
                    </motion.div>
                    <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }} className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-zinc-900 dark:text-zinc-200">Message</label>
                      <textarea 
                        id="message" 
                        name="message"
                        rows={5}
                        className="w-full flex rounded-md border border-zinc-200 bg-transparent px-3 py-2 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-800 dark:placeholder:text-zinc-400 dark:focus-visible:ring-zinc-300 resize-none"
                        placeholder="Your message here..."
                      ></textarea>
                    </motion.div>
                    <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}>
                      <Button type="submit" size="lg" className="w-full sm:w-auto h-12 px-8 rounded-full shadow-md gap-2">
                        Send Message <Send className="h-4 w-4" />
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
