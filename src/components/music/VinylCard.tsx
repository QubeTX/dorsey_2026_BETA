"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface VinylCardProps {
  title: string;
  artist: string;
  year: string;
  image: string;
  link: string;
}

export function VinylCard({ title, artist, year, image, link }: VinylCardProps) {
  return (
    <Link href={link} className="group block relative w-full aspect-square max-w-sm mx-auto perspective-1000">
      <div className="relative w-full h-full transition-transform duration-500 group-hover:scale-95">
        
        {/* The Vinyl Record */}
        <motion.div
          className="absolute top-2 bottom-2 right-2 w-[95%] rounded-full z-0 shadow-xl flex items-center justify-center"
          style={{
            background: "repeating-radial-gradient(#111 0, #111 2px, #222 3px, #222 4px)",
          }}
          initial={{ x: 0 }}
          whileHover={{ x: "40%", rotate: 360 }}
          transition={{ duration: 0.8, ease: "circOut" }}
        >
          {/* Label */}
          <div className="w-1/3 h-1/3 bg-primary rounded-full flex items-center justify-center p-2 text-center">
             <div className="w-2 h-2 bg-black rounded-full" />
          </div>
        </motion.div>

        {/* The Album Cover */}
        <Card className="relative z-10 w-full h-full border-none shadow-2xl overflow-hidden bg-black rounded-sm">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
          
          {/* Glare Effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-50 pointer-events-none" />
          
          {/* Info Overlay */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-4">
            <h3 className="text-xl font-bold uppercase tracking-wider text-white mb-2">{title}</h3>
            <p className="text-sm text-gray-300 font-serif italic">{artist}</p>
            <span className="mt-4 px-3 py-1 border border-white/30 text-xs uppercase tracking-widest text-white">{year}</span>
          </div>
        </Card>
      </div>
    </Link>
  );
}

