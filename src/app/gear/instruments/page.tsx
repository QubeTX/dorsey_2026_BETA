"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const gear = [
  {
    name: "David Gage String Instruments",
    description: "Preferred double bass luthier for maintenance and setup.",
    link: "http://www.davidgage.com/",
  },
  {
    name: "Thomastik-Infeld Handmade",
    description: "The strings of choice for Leon Lee Dorsey. Providing the perfect balance of tone and playability.",
    link: "https://www.thomastik-infeld.com/",
  },
  {
    name: "Fodera Guitars",
    description: "Custom electric basses crafted for precision and versatility.",
    link: "https://fodera.com/",
  },
];

export default function InstrumentsPage() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-6 space-y-12">
             <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-8">
                Instruments <br /> <span className="text-primary">& Gear</span>
              </h1>
              <p className="text-xl text-muted-foreground font-serif italic mb-12">
                "Instruments & Gear used by the legendary Leon Lee Dorsey."
              </p>
            </motion.div>

            <div className="space-y-8">
              {gear.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="border-l-4 border-muted pl-6 hover:border-primary transition-colors group"
                >
                  <h3 className="text-2xl font-bold uppercase mb-2">
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="group-hover:text-primary transition-colors">
                      {item.name}
                    </a>
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 relative h-[600px] md:h-[800px]">
             <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0"
             >
               <div className="relative w-full h-full rounded-lg overflow-hidden bg-muted">
                 <Image
                  src="/images/hero-3.jpg" // Placeholder
                  alt="Bass Guitar Detail"
                  fill
                  className="object-cover object-center"
                 />
               </div>
             </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

