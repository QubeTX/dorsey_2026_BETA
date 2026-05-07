"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { albums } from "@/lib/data";
import { VinylCard } from "@/components/music/VinylCard";

export default function MusicPage() {
  return (
    <div className="min-h-screen bg-white pt-28">
      <section className="bg-white">
        <div className="site-container">
          <div className="relative h-[42svh] min-h-[320px] overflow-hidden md:h-[58svh]">
            <Image
              src="/images/dorsey/white-house.jpg"
              alt="Leon Lee Dorsey performing"
              fill
              priority
              sizes="(min-width: 768px) 1180px, 100vw"
              className="object-cover"
            />
          </div>
          <div className="max-w-5xl py-12 md:py-16">
            <h1 className="text-[clamp(2rem,5vw,4.4rem)] font-black leading-[1.02] tracking-normal text-black">
              Leon Lee Dorsey&apos;s music has seen its way around the world.
            </h1>
            <h2 className="mt-5 text-[clamp(2rem,5vw,4.4rem)] font-black leading-[1.02] tracking-normal text-black">
              Now, it&apos;s time for <span className="sketch-underline">you</span> to listen to the sweet sound of history.
            </h2>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white pt-8">
        <div className="site-container">
          <h2 className="dorsey-heading mb-14 text-center text-5xl md:text-7xl">Music Store</h2>
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            {albums.map((album, index) => (
              <motion.div
                key={album.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
              >
                <VinylCard
                  title={album.title}
                  artist={album.artist}
                  year={album.year}
                  image={album.image}
                  link={album.appleMusic ?? album.link}
                />
                <p className="mt-3 text-center text-sm font-black uppercase">$9.99</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
