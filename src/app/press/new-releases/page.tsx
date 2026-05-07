"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PressArticle } from "@/components/press/PressArticle";

const releases = [
  {
    title: "A Letter to Bill Evans",
    kicker: "Leon Lee Dorsey / Mike Clark / Michael Wolff / 2024",
    image: "/images/dorsey/bill-evans-cover.png",
    excerpt:
      "A heartfelt tribute to Bill Evans featuring drummer Mike Clark and pianist Michael Wolff. The trio reimagines Evans' timeless classics with fresh interpretations and sparkling energy.",
  },
  {
    title: "Cantaloupe Island",
    kicker: "Leon Lee Dorsey / Russell Malone / Mike Clark / 2023",
    image: "/images/dorsey/cantaloupe-cover.png",
    excerpt:
      "A fresh, soulful and upbeat jazz experience showcasing Dorsey's exceptional talent as a bassist and bandleader.",
  },
  {
    title: "Blues on Top",
    kicker: "Leon Lee Dorsey / Mike Clark / Mike LeDonne",
    image: "/images/dorsey/blues-cover.png",
    excerpt:
      "A driving straight-ahead trio set with a classic piano trio sound and a hard-swinging command of the blues.",
  },
  {
    title: "Freedom Jazz Dance",
    kicker: "Leon Lee Dorsey / Manuel Valera / Mike Clark",
    image: "/images/dorsey/freedom-jazz-cover.jpeg",
    excerpt:
      "A vibrant continuation of Dorsey's creative partnership with drummer Mike Clark, full of chemistry and rhythmic vitality.",
  },
  {
    title: "Sgt. Pepper",
    kicker: "Michael Wolff / Mike Clark / Leon Lee Dorsey",
    image: "/images/dorsey/sgt-pepper-cover.jpg",
    excerpt:
      "The trio brings jazz imagination to Beatles classics, honoring a legendary band while creating something unmistakably their own.",
  },
  {
    title: "Monktime",
    kicker: "DSC",
    image: "/images/dorsey/monktime-cover.jpg",
    excerpt:
      "A powerful tribute to Thelonious Monk performed with skill, intent and deep respect for the repertoire.",
  },
];

export default function NewReleasesPage() {
  return (
    <div className="min-h-screen bg-white pt-28">
      <section className="bg-white">
        <div className="site-container">
          <div className="relative h-[42svh] min-h-[320px] overflow-hidden md:h-[56svh]">
            <Image
              src="/images/dorsey/about-slider.jpg"
              alt="Leon Lee Dorsey performance banner"
              fill
              priority
              sizes="(min-width: 768px) 1180px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="site-container">
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            className="dorsey-heading mb-12 text-[clamp(4rem,13vw,12rem)] text-black/38"
          >
            <span className="block">New /</span>
            <span className="block">Releases</span>
          </motion.h1>
          <div>
            {releases.map((release) => (
              <PressArticle key={release.title} {...release} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
