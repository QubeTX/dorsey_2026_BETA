"use client";

import { motion } from "framer-motion";
import { PressArticle } from "@/components/press/PressArticle";

const reviews = [
  {
    title: "DownBeat Reviews: Sgt. Pepper",
    date: "January 2022",
    source: "DownBeat",
    excerpt: "With a clear command of The Beatles’ harmonic language, Wolff, Clark and Dorsey use their own distinct dialects and instrumental acumen to offer a stellar program that could win over jazz fans.",
    link: "#",
  },
  {
    title: "All About Jazz: Monktime",
    date: "January 2022",
    source: "All About Jazz",
    excerpt: "Whether it comes through his beautiful reading of the melody on 'Monk’s Mood' or the gentle pulse and solo he lends to 'Ugly Beauty,' the bassist’s command of both the repertoire and ensemble avoids flash, yet is nevertheless unmistakable.",
    link: "#",
  },
  {
    title: "Lydia Liebman on 'Thank You Mr. Mabern'",
    date: "January 2022",
    source: "Lydia Liebman",
    excerpt: "The album captures a celebration of Mabern’s influences and legacy and stands as an inimitable union of these three consummate players.",
    link: "#",
  },
];

export default function ReviewsPage() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      <div className="container mx-auto px-4 max-w-4xl">
         <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 border-b border-border pb-8"
          >
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4">
              Press & <span className="text-primary">Reviews</span>
            </h1>
            <p className="text-xl text-muted-foreground font-serif italic">
              What the critics are saying about Leon Lee Dorsey.
            </p>
          </motion.div>

          <div className="space-y-8">
            {reviews.map((item, index) => (
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

