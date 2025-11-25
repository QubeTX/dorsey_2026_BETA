"use client";

import { motion } from "framer-motion";
import { PressArticle } from "@/components/press/PressArticle";

const articles = [
  {
    title: "Jazz Times Feature: The Art of the Bass",
    date: "November 2023",
    source: "Jazz Times",
    excerpt: "Leon Lee Dorsey discusses his approach to the double bass, his influences from the Pittsburgh jazz scene, and his philosophy on music education.",
    link: "#",
  },
  {
    title: "Berklee Today: Educating the Next Generation",
    date: "August 2023",
    source: "Berklee Today",
    excerpt: "Professor Dorsey shares insights from his classroom and how he bridges the gap between traditional jazz education and the modern music industry.",
    link: "#",
  },
];

export default function ArticlesPage() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      <div className="container mx-auto px-4 max-w-4xl">
         <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 border-b border-border pb-8"
          >
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4">
              Published <span className="text-primary">Articles</span>
            </h1>
            <p className="text-xl text-muted-foreground font-serif italic">
              In-depth features and interviews.
            </p>
          </motion.div>

          <div className="space-y-8">
            {articles.map((item, index) => (
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

