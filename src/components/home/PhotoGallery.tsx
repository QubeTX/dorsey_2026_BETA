"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export function PhotoGallery() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const photos = [
    "/images/hero-3.jpg",
    "/images/hero-4.jpg",
    "/images/hero-1.jpg",
  ];

  return (
    <section className="py-32 bg-muted/10 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-4 space-y-8 relative z-10">
             <motion.h2 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-[8vw] lg:text-[5vw] font-serif font-black uppercase tracking-tighter leading-[0.8] text-foreground mix-blend-difference"
            >
              The <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary to-transparent">Vibe</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-muted-foreground font-serif italic max-w-md leading-relaxed"
            >
              Capturing the energy, the soul, and the timeless moments of jazz performance. From intimate clubs to international stages.
            </motion.p>
          </div>
          
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {photos.map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                style={{ y: index === 1 ? y : 0 }}
                className={`relative aspect-[3/4] bg-black rounded-sm overflow-hidden shadow-2xl group ${index === 1 ? "md:-mt-20" : ""}`}
              >
                <Image
                  src={src}
                  alt="Performance moment"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-multiply" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
