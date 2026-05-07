"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-black pt-28 text-white dark-circle-pattern">
        <div className="site-container grid min-h-[calc(100svh-112px)] gap-3 pb-12 md:grid-cols-[1fr_0.9fr] md:items-center md:gap-12 md:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="contents md:block md:space-y-8"
          >
            <h1 className="dorsey-heading order-1 text-[clamp(2.45rem,6.7vw,7.5rem)] md:text-[clamp(3rem,7vw,7.5rem)]">
              About Mr. Dorsey
            </h1>
            <p className="order-3 max-w-3xl text-[clamp(1.35rem,4.1vw,1.55rem)] font-black uppercase leading-[1.35] md:text-4xl md:normal-case md:leading-tight">
              “Rhythmic <span className="sketch-underline">virtuoso</span> Leon Lee Dorsey mesmerizes with his{" "}
              <span className="sketch-underline">captivating</span> bass melodies, pushing boundaries in{" "}
              <span className="sketch-underline">jazz.</span>”
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="relative order-2 mx-auto mt-14 aspect-square w-[58vw] max-w-[340px] overflow-hidden rounded-full md:mt-0 md:w-full md:max-w-none"
          >
            <Image
              src="/images/dorsey/about-vibe.jpg"
              alt="Leon Lee Dorsey and ensemble"
              fill
              priority
              sizes="(min-width: 768px) 44vw, 90vw"
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="site-container grid gap-12 lg:grid-cols-[0.42fr_0.58fr]">
          <div className="space-y-8">
            <Image
              src="/images/dorsey/about-portrait.jpg"
              alt="Leon Lee Dorsey with double bass"
              width={760}
              height={920}
              className="w-full object-cover"
            />
            <p className="border-y border-black/15 py-6 text-center text-2xl italic leading-9">
              Music speaks the language of the soul, and through my bass, I strive to tell stories that resonate with hearts across the world.
            </p>
          </div>

          <article className="space-y-7 text-lg leading-8 text-black/76">
            <p>
              As a legendary bassist, composer, and arranger, <strong>Leon Lee Dorsey</strong>, born in 1958 in
              Pittsburgh, has performed with jazz luminaries that include: <em>Dizzy Gillespie, Wynton Marsalis, Freddie
              Hubbard, John Lewis, Kenny Clarke, Jon Hendricks, Gloria Lynn, Harry &quot;Sweets&quot; Edison, Dorothy
              Donegan, Stanley Turrentine, George Benson, Ellis Marsalis, Neena Freelon</em> and <em>Terumasa Hino</em>.
            </p>
            <p>
              He has also performed in big bands with the Smithsonian Jazz Masterworks Orchestra, Benny Carter, the Duke
              Ellington Orchestra and Charlie Persip&apos;s Superband. Other career highlights include working with Frank
              Sinatra at Carnegie Hall, guest appearances at the White House under Presidents Reagan and Clinton and
              performing with Joe Williams and Marilyn Horne.
            </p>
            <p>
              Completing his Doctor of Music in Double Bass Performance at Stony Brook University Graduate School,
              Dorsey holds Master&apos;s Degrees from the University of Wisconsin-Madison and the Manhattan School of
              Music, and a Double Degree in Music from Oberlin College.
            </p>
            <p>
              His prolific recording career includes albums such as <em>Monk Time</em>, <em>Play Sgt. Pepper</em>,{" "}
              <em>Thank You Mr. Mabern</em>, <em>Freedom Jazz Dance</em>, <em>Blues on Top</em>, <em>Cantaloupe Island</em>,
              and his latest release, <em>A Letter to Bill Evans</em>.
            </p>
            <p>
              Currently serving as an <em>Associate Professor of Music at Berklee College of Music</em>, Mr. Dorsey has
              also held teaching positions at Queens College, the University of Pittsburgh, and Oberlin College
              Conservatory of Music.
            </p>
          </article>
        </div>
      </section>

      <section className="bg-black py-24 text-white dark-circle-pattern">
        <div className="site-container flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <h2 className="dorsey-heading text-5xl md:text-7xl">Got questions?</h2>
          <Link href="/contact" className="bg-white px-8 py-4 text-sm font-black uppercase text-black transition-colors hover:bg-primary hover:text-white">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
