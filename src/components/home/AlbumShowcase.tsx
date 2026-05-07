"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { albums } from "@/lib/data";
import { Marquee } from "@/components/ui/marquee";

export function AlbumShowcase() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-white pb-24">
      <div className="site-container">
        <div className="grid gap-8 border-y border-black/15 py-12 md:grid-cols-2">
          {albums.slice(0, 2).map((album, index) => (
            <Link
              key={album.id}
              href="/music"
              className="group grid gap-6 md:grid-cols-[180px_1fr] md:items-center"
            >
              <Image
                src={album.image}
                alt={album.title}
                width={420}
                height={420}
                className="aspect-square w-full max-w-[220px] object-cover transition-transform duration-500 group-hover:scale-[1.025]"
              />
              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase">Lydia Liebman</p>
                <p className="text-sm font-black uppercase">Liebman Enterprises</p>
                <p className="text-base italic leading-7 text-black/70">
                  {index === 0
                    ? "These renderings of Bill Evans classics contain sparkling energy and improvisational freshness."
                    : "The feel is live, loose, and responsive; a rewarding document of dialed-in vets at work."}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-16 overflow-hidden bg-white">
        <Marquee speed={reduceMotion ? 0 : 18} className="dorsey-heading text-[clamp(2.8rem,8vw,8rem)] text-black">
          <span className="mx-6">~ NEW!! ~ &quot;A LETTER TO BILL EVANS&quot;</span>
        </Marquee>
      </div>

      <div className="relative mt-10 h-[42vh] min-h-[320px] overflow-hidden">
        <Image
          src="/images/dorsey/uni-pitts.jpg"
          alt="Jazz band performing on stage"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="mt-16 overflow-hidden">
        <Marquee speed={reduceMotion ? 0 : 20} className="dorsey-heading text-[clamp(3.4rem,9vw,9rem)] text-black">
          <span className="mx-6">NEW RELEASES</span>
        </Marquee>
      </div>

      <div className="site-container mt-12 space-y-16">
        {albums.slice(0, 2).map((album) => (
          <motion.article
            key={album.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="grid gap-8 border-b border-black/15 pb-14 lg:grid-cols-[300px_1fr]"
          >
            <Image
              src={album.image}
              alt={album.title}
              width={520}
              height={520}
              className="aspect-square w-full max-w-[300px] object-cover"
            />
            <div className="max-w-3xl space-y-5">
              <p className="whitespace-pre-line text-sm font-semibold uppercase leading-7">
                {album.artist.replaceAll(", ", "\n")}
                {"\n"}
                <strong>{album.year}</strong>
              </p>
              <h3 className="text-2xl font-black uppercase">{album.title}</h3>
              <p className="text-lg leading-8 text-black/72">{album.description}</p>
              <p className="text-lg leading-8 text-black/72">
                {album.id === "a-letter-to-bill-evans"
                  ? "The trio's interplay breathes new life into timeless compositions, creating a dynamic tribute that feels heartfelt, modern, and alive."
                  : "A fresh, soulful set that blends classic jazz standards with rhythmic nuance and the easy confidence of players listening closely to one another."}
              </p>
              <Link
                href={album.appleMusic ?? "/music"}
                className="inline-block bg-black px-7 py-4 text-sm font-black uppercase text-white transition-colors hover:bg-primary"
              >
                Listen Now
              </Link>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
