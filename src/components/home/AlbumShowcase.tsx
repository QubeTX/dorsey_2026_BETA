"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { albums } from "@/lib/data";
import { VinylCard } from "@/components/music/VinylCard";

export function AlbumShowcase() {
  return (
    <section className="py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl relative"
          >
            {/* Base Layer */}
            <h2 className="absolute inset-0 text-6xl md:text-9xl font-serif font-black uppercase tracking-tighter mb-6 text-foreground opacity-60 pointer-events-none select-none">
              New <span className="text-primary italic font-sans font-normal tracking-normal">Sounds</span>
            </h2>

            {/* Blend Layer */}
            <h2 className="text-6xl md:text-9xl font-serif font-black uppercase tracking-tighter mb-6 mix-blend-difference relative z-10">
              New <span className="text-primary italic font-sans font-normal tracking-normal">Sounds</span>
            </h2>
            <p className="text-muted-foreground text-xl font-serif italic pl-2 border-l-2 border-primary">
              The latest sonic journeys from Leon Lee Dorsey.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="hidden md:block"
          >
            <Link
              href="/music"
              className="text-lg font-bold uppercase tracking-widest hover:text-primary transition-colors group flex items-center gap-2"
            >
              View All Music
              <span className="block w-8 h-[2px] bg-foreground group-hover:w-12 group-hover:bg-primary transition-all" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {albums.slice(0, 4).map((album, index) => (
            <motion.div
              key={album.id}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.8, ease: "circOut" }}
            >
              <VinylCard
                title={album.title}
                artist={album.artist}
                year={album.year}
                image={album.image}
                link={album.link}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
