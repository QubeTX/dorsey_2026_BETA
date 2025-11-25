"use client";

import { motion } from "framer-motion";
import { PressArticle } from "@/components/press/PressArticle";

const releases = [
  {
    title: "Leon Lee Dorsey Teams Up with Mike Clark and Michael Wolff for 'A Letter to Bill Evans'",
    date: "March 8, 2024",
    source: "Jazz Avenue 1",
    excerpt: "Renowned bassist Leon Lee Dorsey announces the release of 'Letter to Bill Evans', a heartfelt tribute album featuring drummer Mike Clark and pianist Michael Wolff. Together, they reimagine Bill Evans' timeless classics with fresh interpretations.",
    image: "/images/hero-1.jpg",
    link: "#",
  },
  {
    title: "New Album 'Cantaloupe Island' Brings Fresh Energy to Jazz Classics",
    date: "June 17, 2023",
    source: "Press Release",
    excerpt: "If you're seeking a fresh, soulful, and upbeat jazz experience, Leon Lee Dorsey's latest album, 'Cantaloupe Island', is an essential addition to your music collection.",
    image: "/images/hero-2.png",
    link: "#",
  },
  {
    title: "'Blues on Top' - A Masterclass in Swing",
    date: "June 17, 2023",
    source: "Review",
    excerpt: "A classic piano trio sound, this driving straight ahead set is a bad ass swinger that clears the dross from the palette in no time flat.",
    image: "/images/hero-3.jpg",
    link: "#",
  },
];

export default function NewReleasesPage() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      <div className="container mx-auto px-4 max-w-4xl">
         <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 border-b border-border pb-8"
          >
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4">
              New <span className="text-primary">Releases</span>
            </h1>
            <p className="text-xl text-muted-foreground font-serif italic">
              Latest announcements and album drops from Leon Lee Dorsey.
            </p>
          </motion.div>

          <div className="space-y-8">
            {releases.map((item, index) => (
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

