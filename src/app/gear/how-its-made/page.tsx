"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const galleryImages = [
  "/images/hero-1.jpg",
  "/images/hero-2.png",
  "/images/hero-3.jpg",
  "/images/hero-4.jpg",
  "/images/hero-1.jpg",
  "/images/hero-2.png",
];

export default function HowItsMadePage() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      <div className="container mx-auto px-4">
         <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 text-center"
          >
            <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-4">
              How It&apos;s <span className="text-primary">Made</span>
            </h1>
            <p className="text-xl text-muted-foreground font-serif italic max-w-2xl mx-auto">
              Behind the scenes in the studio and on the road.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="aspect-square relative bg-muted rounded-lg overflow-hidden group"
              >
                <Image
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </motion.div>
            ))}
          </div>
      </div>
    </div>
  );
}
