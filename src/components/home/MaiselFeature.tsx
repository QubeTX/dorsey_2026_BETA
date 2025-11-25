"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function MaiselFeature() {
  return (
    <section className="py-32 bg-foreground text-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-soft-light">
         {/* Grain/Texture overlay */}
         <svg className="w-full h-full"><filter id="noise-maisel"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3"/></filter><rect width="100%" height="100%" filter="url(#noise-maisel)"/></svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1 space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl md:text-3xl font-serif italic text-primary mb-4">
                As seen on
              </h3>
              <h2 className="text-6xl md:text-8xl font-serif font-black uppercase tracking-tighter leading-[0.9] mb-8 text-background">
                The Marvelous <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">
                  Mrs. Maisel
                </span>
              </h2>
              <div className="w-32 h-1 bg-primary" />
            </motion.div>

            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xl md:text-2xl leading-relaxed font-light text-background/80"
            >
              Season 5 features Leon Lee Dorsey as a member of the <span className="font-bold text-primary">Gordon Ford Band</span>, bringing authentic jazz soul to the acclaimed series.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <Button asChild variant="outline" size="lg" className="border-2 border-background text-background hover:bg-primary hover:text-foreground hover:border-primary rounded-full text-lg px-10 py-8 uppercase tracking-widest font-bold transition-all">
                <Link href="https://www.amazon.com/gp/video/detail/B0B7F6XRGS" target="_blank">
                  Watch Now <ArrowUpRight className="ml-2 w-6 h-6" />
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Cinematic Image */}
          <div className="order-1 lg:order-2 relative aspect-video w-full group perspective-1000">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "circOut" }}
              className="relative w-full h-full rounded-sm overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-4 border-background/10"
            >
              <Image 
                src="/images/hero-3.jpg" 
                alt="On set of Mrs. Maisel" 
                fill 
                className="object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-1000"
              />
              
              {/* Film Grain Overlay */}
              <div className="absolute inset-0 bg-black/20 mix-blend-overlay pointer-events-none" />
            </motion.div>
            
            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-10 -right-10 bg-primary text-foreground p-6 rounded-full w-32 h-32 flex items-center justify-center text-center font-serif font-black leading-none shadow-xl rotate-12"
            >
              Season <br /> 5
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
