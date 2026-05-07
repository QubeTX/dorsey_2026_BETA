"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const gallery = [
  { title: "Celebrities", src: "/images/dorsey/gallery-celebrities.jpg" },
  { title: "University of Pittsburgh", src: "/images/dorsey/gallery-uni-pitts.jpg" },
  { title: "Jazz Icons", src: "/images/dorsey/gallery-jazz-icons.jpg" },
  { title: "The Vibe", src: "/images/dorsey/about-vibe.jpg" },
];

export function PhotoGallery() {
  return (
    <>
      <section className="relative overflow-hidden bg-black py-28 text-white dark-circle-pattern">
        <div className="site-container">
          <blockquote className="max-w-5xl">
            <p className="dorsey-heading text-[clamp(2.6rem,6.5vw,7rem)]">
              Jazz requires the highest level of knowledge, study, and training across the board.
            </p>
            <footer className="mt-8 text-xl font-semibold">- L. Dorsey</footer>
          </blockquote>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="site-container">
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <h2 className="dorsey-heading text-4xl md:text-6xl">Photos with Leon Lee Dorsey</h2>
            <p className="max-w-lg text-lg leading-8 text-black/65">
              Performance moments, collaborators, jazz icons, university appearances, and the energy around the music.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {gallery.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.55 }}
              >
                <Link href="/about" className="group block">
                  <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="mt-4 text-lg font-black uppercase">{item.title}</h3>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
