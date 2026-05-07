"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { PressArticle } from "@/components/press/PressArticle";

const reviews = [
  {
    title: "Cantaloupe Island",
    kicker: "Lydia Liebman",
    image: "/images/dorsey/cantaloupe-cover.png",
    excerpt:
      "Renowned bassist Leon Lee Dorsey continues his prolific streak with the issue of Cantaloupe Island, the latest album to be released on his Jazz Avenue 1 label and a continuation of his partnership with drummer Mike Clark.",
  },
  {
    title: "Blues on Top",
    kicker: "Lydia Liebman",
    image: "/images/dorsey/blues-cover.png",
    excerpt:
      "The trio tears through a brief but blazing rendition of Duke Ellington's C Jam Blues, paced by Dorsey's impeccable walking and LeDonne's extraordinary chops showcase.",
  },
  {
    title: "Freedom Jazz Dance",
    kicker: "John Chacona",
    image: "/images/dorsey/freedom-jazz-cover.jpeg",
    excerpt:
      "While the individual virtuosity of Dorsey, Clark and Valera is undeniable, it is their irrepressible chemistry that wins over listeners.",
  },
  {
    title: "Thank You Mr. Mabern!",
    kicker: "Making A Scene",
    image: "/images/dorsey/mabern-review-cover.jpg",
    excerpt:
      "The album captures a celebration of Mabern's influences and legacy and stands as an inimitable union of three consummate players.",
  },
  {
    title: "Sgt. Pepper",
    kicker: "O's Place",
    image: "/images/dorsey/sgt-pepper-cover.jpg",
    excerpt:
      "Wolff, Clark and Dorsey bring fresh jazz sensibilities to an iconic piece of music history, setting the music on a joyful journey.",
  },
  {
    title: "Monktime",
    kicker: "All About Jazz",
    image: "/images/dorsey/monktime-review-cover.jpg",
    excerpt:
      "The bassist's tribute to Thelonious Monk approaches each tune with great skill and honorable intent, creating music that is powerful.",
  },
];

export default function ReviewsPage() {
  return (
    <div className="min-h-screen bg-white pt-28">
      <section className="section-pad bg-white">
        <div className="site-container">
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            className="dorsey-heading mb-12 text-[clamp(3rem,8vw,8rem)]"
          >
            Press Releases & Reviews ~
          </motion.h1>
          <div className="grid gap-10 border-y border-black/15 py-12 md:grid-cols-[0.42fr_0.58fr] md:items-center">
            <Image
              src="/images/dorsey/press-portrait.jpg"
              alt="Leon Lee Dorsey with upright bass"
              width={760}
              height={920}
              className="w-full object-cover grayscale"
            />
            <div className="space-y-6 text-xl leading-9 text-black/72">
              <p>
                Dive into the world of jazz through the lens of Dorsey&apos;s acclaimed work, and discover the accolades
                and insights shared by critics and industry professionals.
              </p>
              <Link href="#reviews" className="inline-block bg-black px-7 py-4 text-sm font-black uppercase text-white transition-colors hover:bg-primary">
                Read Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="bg-white pb-24">
        <div className="site-container">
          {reviews.map((review) => (
            <PressArticle key={review.title} {...review} />
          ))}
        </div>
      </section>

      <section className="bg-black py-20 text-white dark-circle-pattern">
        <div className="site-container text-center">
          <h2 className="dorsey-heading mb-8 text-[clamp(3rem,8vw,8rem)]">Still interested?</h2>
          <p className="mb-8 text-xl">See more at LydiaLiebman.com</p>
          <Link href="/contact" className="inline-block bg-white px-7 py-4 text-sm font-black uppercase text-black transition-colors hover:bg-primary hover:text-white">
            Get in Touch with Mr. Dorsey&apos;s Team
          </Link>
        </div>
      </section>
    </div>
  );
}
