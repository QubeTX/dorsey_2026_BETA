"use client";

import { motion } from "framer-motion";
import { PressArticle } from "@/components/press/PressArticle";

const fyc = [
  {
    title: "Consideration for Best Jazz Instrumental Album: A Letter to Bill Evans",
    date: "2025",
    source: "Recording Academy",
    excerpt: "For your consideration in the 67th Annual GRAMMY Awards. Featuring Leon Lee Dorsey, Mike Clark, and Michael Wolff.",
    image: "/images/hero-1.jpg",
    link: "#",
  },
];

export default function FYCPage() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      <div className="container mx-auto px-4 max-w-4xl">
         <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 border-b border-border pb-8"
          >
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4">
              For Your <span className="text-primary">Consideration</span>
            </h1>
            <p className="text-xl text-muted-foreground font-serif italic">
              Awards and nominations.
            </p>
          </motion.div>

          <div className="space-y-8">
            {fyc.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <PressArticle {...item} />
              </motion.div>
            ))}
          </div>
      </div>
    </div>
  );
}

