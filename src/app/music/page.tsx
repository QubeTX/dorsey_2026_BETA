"use client";

import { motion } from "framer-motion";
import { albums } from "@/lib/data";
import { VinylCard } from "@/components/music/VinylCard";

export default function MusicPage() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h1 className="text-[12vw] font-serif font-black uppercase tracking-tighter leading-[0.8] mb-8 mix-blend-difference">
            Music <span className="text-transparent bg-clip-text bg-gradient-to-b from-primary to-transparent">Store</span>
          </h1>
          <p className="text-xl md:text-3xl text-muted-foreground font-serif italic max-w-4xl mx-auto">
            "The sweet sound of history."
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
          {albums.map((album, index) => (
            <motion.div
              key={album.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <VinylCard
                title={album.title}
                artist={album.artist}
                year={album.year}
                image={album.image}
                link={album.link}
              />
              <div className="mt-8 text-center">
                 <p className="text-lg font-bold uppercase mb-2">$9.99</p>
                 {/* Add buy buttons here if needed */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
