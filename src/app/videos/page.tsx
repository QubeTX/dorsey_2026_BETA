"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { VideoCard } from "@/components/video/VideoCard";

const videos = [
  {
    title: "Green Dolphin Street",
    description: "Leon Lee Dorsey Trio - Green Dolphin Street - New York City.",
    platform: "youtube" as const,
    id: "dj5QoWRBPJ4",
  },
  {
    title: "A Letter to Bill Evans",
    description: "Recording the jazz trio album with Michael Wolff, Mike Clark, and Leon Lee Dorsey.",
    platform: "youtube" as const,
    id: "RVAYiLJkWf8",
  },
  {
    title: "All Blues",
    description: "Bassist Leon Lee Dorsey with Ron Carter on piccolo bass and Russell Malone on guitar.",
    platform: "vimeo" as const,
    id: "511629220",
  },
  {
    title: "Jon Davis Trio at Smalls",
    description: "Leon Lee Dorsey playing at Smalls Jazz Club in NYC with the Jon Davis Trio featuring Billy Hart.",
    platform: "youtube" as const,
    id: "EPZJ0bxsxMI",
  },
];

export default function VideosPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative h-[52svh] min-h-[390px] overflow-hidden pt-28">
        <Image
          src="/images/dorsey/about-slider.jpg"
          alt="Leon Lee Dorsey performance banner"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="site-container relative z-10 flex h-full items-end pb-12">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="dorsey-heading max-w-5xl text-[clamp(3rem,8vw,8rem)] text-white">
            Videos feat. Leon Lee Dorsey
          </motion.h1>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="site-container">
          <div className="grid gap-10 md:grid-cols-2">
            {videos.map((video, index) => (
              <motion.div
                key={video.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
              >
                <VideoCard {...video} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
