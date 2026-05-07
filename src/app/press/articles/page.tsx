"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ArticlesPage() {
  return (
    <div className="min-h-screen bg-white pt-28">
      <section className="bg-white">
        <div className="site-container">
          <Image
            src="/images/dorsey/article-new-york.jpg"
            alt="Leon Lee Dorsey in New York"
            width={1200}
            height={850}
            priority
            className="h-[42svh] min-h-[320px] w-full object-cover md:h-[56svh]"
          />
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="site-container">
          <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="dorsey-heading mb-12 text-[clamp(3rem,8vw,8rem)] text-black/58">
            Published Articles on Mr. Dorsey
          </motion.h1>
          <div className="grid gap-16">
            <article className="grid gap-8 border-b border-black/15 pb-14 md:grid-cols-[0.45fr_0.55fr] md:items-start">
              <Image src="/images/dorsey/article-magazine.png" alt="UK Bass Player article spread" width={900} height={700} className="w-full object-cover" />
              <div className="space-y-5">
                <h2 className="text-3xl font-black uppercase">UK Bass Player: The Piano Man</h2>
                <p className="text-lg leading-8 text-black/72">
                  Sometimes you feel slightly inadequate as a bass journalist. The man has done so much great work in the
                  field of the low frequencies, alongside such illuminated names, that ordinary gear questions feel
                  almost inconsequential.
                </p>
                <Link href="https://storage.googleapis.com/shaughnessy/DORSEY_FILES/uk_bass_player_article.pdf" className="inline-block bg-black px-6 py-3 text-sm font-black uppercase text-white">
                  Fullscreen Article
                </Link>
              </div>
            </article>
            <article className="grid gap-8 md:grid-cols-[0.45fr_0.55fr] md:items-start">
              <Image src="/images/dorsey/article-screenshot.png" alt="Downbeat article preview" width={900} height={700} className="w-full object-cover" />
              <div className="space-y-5">
                <h2 className="text-3xl font-black uppercase">DownBeat - June 2023</h2>
                <p className="text-lg leading-8 text-black/72">
                  When it comes to the caliber, variety and release pace of his recordings, heavyweight
                  bassist/composer/arranger Leon Lee Dorsey is not messing around.
                </p>
                <Link href="https://storage.googleapis.com/shaughnessy/DORSEY_FILES/Downbeat_Magazine.pdf" className="inline-block bg-black px-6 py-3 text-sm font-black uppercase text-white">
                  Fullscreen Article
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
