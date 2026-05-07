"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const maiselImages = [
  { src: "/images/dorsey/maisel-selfie.jpg", alt: "Leon Lee Dorsey on the Maisel set" },
  { src: "/images/dorsey/maisel-band.jpg", alt: "The Gordon Ford Band on stage" },
  { src: "/images/dorsey/maisel-set.jpg", alt: "Studio performance setup" },
  { src: "/images/dorsey/maisel-room.jpg", alt: "Musicians seated on the Maisel set" },
];

export function MaiselFeature() {
  return (
    <section className="bg-white section-pad">
      <div className="site-container">
        <div className="border border-black/10 bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)] md:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <p className="mb-4 text-2xl font-semibold italic md:text-4xl">See Mr. Dorsey on:</p>
                <h2 className="dorsey-heading sketch-underline text-[clamp(3rem,6vw,6.8rem)] text-primary">
                  The Marvelous
                  <br />
                  Mrs. Maisel
                </h2>
              </div>
              <p className="text-lg leading-8 text-black/72">
                Leon Lee Dorsey appears in the fifth season of the acclaimed series as a member of the Gordon Ford Band,
                adding a dynamic layer of musical storytelling to the production.
              </p>
              <p className="text-lg font-bold leading-8">
                Make sure not to miss his performance that&apos;s bound to strike a chord with fans of the series and music
                lovers alike.
              </p>
              <Link
                href="https://www.amazon.com/gp/video/detail/B0B7F6XRGS"
                target="_blank"
                className="inline-block bg-black px-7 py-4 text-sm font-black uppercase text-white transition-colors hover:bg-primary"
              >
                See More
              </Link>
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              {maiselImages.map((image, index) => (
                <motion.div
                  key={image.src}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.55 }}
                  className={index % 2 === 0 ? "relative aspect-[4/3] overflow-hidden" : "relative aspect-[3/4] overflow-hidden"}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 1024px) 28vw, 45vw"
                    className="object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
