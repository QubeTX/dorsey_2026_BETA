"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Marquee } from "@/components/ui/marquee";

const roles = "BASSIST & COMPOSER & ARRANGER & PRODUCER & VIRTUOSO & EDUCATOR &";

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <>
      <section className="relative min-h-[calc(100svh+80px)] overflow-hidden bg-white pt-20 circle-pattern">
        <div className="absolute left-0 top-[21vh] w-full overflow-hidden">
          <Marquee speed={reduceMotion ? 0 : 22} className="dorsey-heading text-[clamp(4.8rem,12vw,12rem)] whitespace-nowrap text-black">
            <span className="mx-6">{roles}</span>
          </Marquee>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="site-container relative min-h-[calc(100svh-80px)]"
        >
          <div className="absolute left-9 top-[33vh] z-20 max-w-[680px] md:left-10 md:top-[37vh]">
            <p className="mb-6 text-base uppercase tracking-normal md:text-lg">NOW INTRODUCING,</p>
            <h1 className="dorsey-heading sketch-underline text-[clamp(2.6rem,6vw,5.9rem)]">
              LEON LEE DORSEY
            </h1>
          </div>

          <motion.div
            className="absolute left-[8%] top-[47vh] hidden w-[26vw] max-w-[350px] overflow-hidden md:block"
            initial={{ opacity: 0, rotate: -4, y: 40 }}
            animate={{ opacity: 1, rotate: -2, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <Image
              src="/images/dorsey/freedom-jazz-dance.png"
              alt="Leon Lee Dorsey with collaborators"
              width={700}
              height={700}
              className="h-auto w-full object-cover"
              priority
            />
          </motion.div>

          <motion.div
            className="absolute right-[9%] top-[40vh] z-10 hidden w-[30vw] max-w-[440px] overflow-hidden rounded-full md:block"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.35, duration: 0.8 }}
          >
            <Image
              src="/images/dorsey/white-house.jpg"
              alt="Leon Lee Dorsey performing at the White House"
              width={1000}
              height={567}
              className="aspect-square w-full object-cover"
              priority
            />
          </motion.div>

          <motion.div
            className="absolute bottom-[6vh] right-[7%] z-20 hidden w-[18vw] max-w-[260px] overflow-hidden md:block"
            initial={{ opacity: 0, rotate: 5, y: 28 }}
            animate={{ opacity: 1, rotate: 3, y: 0 }}
            transition={{ delay: 0.45, duration: 0.8 }}
          >
            <Image
              src="/images/dorsey/monktime-rooftop.jpeg"
              alt="Leon Lee Dorsey trio rooftop portrait"
              width={700}
              height={467}
              className="aspect-[4/3] w-full object-cover"
            />
          </motion.div>

          <p className="absolute bottom-10 right-6 text-right text-sm font-black uppercase tracking-normal md:right-10 md:text-lg">
            Multitalented
            <br />
            Jazz Icon
          </p>
        </motion.div>
      </section>

      <section className="section-pad bg-white">
        <div className="site-container grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-center">
          <h2 className="dorsey-heading text-4xl md:text-6xl">About Mr. Dorsey</h2>
          <div className="space-y-6 text-lg leading-8 text-black/78 md:text-xl md:leading-9">
            <p>
              <strong>Leon Lee Dorsey</strong> has built an illustrious career marked by his proficiency in various
              aspects of music. His work as a <em>bassist, composer, arranger, producer, and educator</em> echoes his
              multifaceted abilities and profound understanding of the jazz genre.
            </p>
            <p>
              From his initial steps in Pittsburgh&apos;s vibrant jazz scene to his impactful contributions as a professor
              at the Berklee School of Music, Dorsey continues to inspire and innovate.
            </p>
            <Link href="/about" className="inline-block font-semibold italic underline decoration-primary decoration-2 underline-offset-4">
              Read more on Leon Lee Dorsey.
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
