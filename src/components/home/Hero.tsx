"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Marquee } from "@/components/ui/marquee";

export function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -150]);
  const textY = useTransform(scrollY, [0, 500], [0, 100]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-background text-foreground">


      {/* Marquee Top - Skewed */}
      <motion.div
        className="absolute top-32 left-0 w-full z-10 origin-left -rotate-2 mix-blend-difference text-background"
        style={{ x: y2 }}
      >
        <Marquee speed={30} className="font-serif italic font-bold text-2xl md:text-4xl tracking-tighter opacity-50">
          <span className="mx-8">Virtuoso</span> •
          <span className="mx-8">Composer</span> •
          <span className="mx-8">Educator</span> •
          <span className="mx-8">Legend</span> •
          <span className="mx-8">Bassist</span> •
        </Marquee>
      </motion.div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="relative h-[60vh] md:h-[80vh] flex flex-col justify-center items-center">

          {/* Main Typography - Massive & Overlapping */}
          {/* Base Layer - Visibility Safety */}
          <motion.div
            style={{
              y: textY,
              textShadow: '0 0 60px rgba(255,255,255,0.8), 0 0 120px rgba(255,255,255,0.4)'
            }}
            className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center text-foreground opacity-80 pointer-events-none select-none"
          >
            <motion.h1
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="text-[15vw] md:text-[18vw] font-serif font-black leading-[0.8] tracking-tighter uppercase"
            >
              Leon
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-[15vw] md:text-[18vw] font-serif font-black leading-[0.8] tracking-tighter uppercase ml-[10vw]"
            >
              Dorsey
            </motion.h1>
          </motion.div>

          {/* Top Layer - Blend Effect */}
          <motion.div
            style={{ y: textY }}
            className="relative z-30 text-center mix-blend-difference text-background"
          >
            <motion.h1
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="text-[15vw] md:text-[18vw] font-serif font-black leading-[0.8] tracking-tighter uppercase"
            >
              Leon
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-[15vw] md:text-[18vw] font-serif font-black leading-[0.8] tracking-tighter uppercase ml-[10vw]"
            >
              Dorsey
            </motion.h1>
          </motion.div>

          {/* Parallax Images */}
          <motion.div
            style={{ y: y1 }}
            className="absolute top-0 left-[10%] w-[30vw] aspect-[3/4] z-10 opacity-80 grayscale mix-blend-multiply dark:mix-blend-screen"
          >
            <Image
              src="/images/hero-3.jpg"
              alt="Leon Lee Dorsey"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div
            style={{ y: y2 }}
            className="absolute bottom-0 right-[10%] w-[25vw] aspect-square z-10 opacity-80 grayscale mix-blend-multiply dark:mix-blend-screen"
          >
            <Image
              src="/images/hero-1.jpg"
              alt="Performance"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Center Focus Image */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: "circOut" }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[20vw] h-[20vw] z-20 rounded-full overflow-hidden border-4 border-background/20"
          >
            <Image
              src="/images/hero-4.jpg"
              alt="Portrait"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-8 text-xs font-bold uppercase tracking-widest [writing-mode:vertical-rl] mix-blend-difference text-background"
      >
        Scroll to Explore
      </motion.div>
    </section>
  );
}
