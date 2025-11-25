"use client";

import { motion } from "framer-motion";
import { VideoCard } from "@/components/video/VideoCard";

const videos = [
  {
    title: "A Letter to Bill Evans",
    description: "The Leon Lee Dorsey Trio performing 'A Letter to Bill Evans' at the Clark Art Institute's Manton Research Center auditorium. Featuring Michael Wolff (piano) and Mike Clark (drums).",
    platform: "youtube" as const,
    id: "RVAYiLJkWf8",
  },
  {
    title: "All Blues",
    description: "Bassist Leon Lee Dorsey with legendary bassist Ron Carter on the Piccolo Bass and Russell Malone on Guitar.",
    platform: "vimeo" as const,
    id: "511629220",
  },
  {
    title: "Jon Davis Trio at Smalls",
    description: "Leon Lee Dorsey playing at the Smalls Jazz Club in NYC with the Jon Davis Trio feat. Billy Hart.",
    platform: "youtube" as const,
    id: "EPZJ0bxsxMI",
  },
  {
    title: "Green Dolphin Street",
    description: "Leon Lee Dorsey Trio - 'Green Dolphin Street' - New York City",
    platform: "youtube" as const,
    id: "dj5QoWRBPJ4",
  },
  {
    title: "Bill Clinton Plays Sax",
    description: "Bassist Leon Lee Dorsey plays at the White House, with President Bill Clinton on tenor sax and legendary musician Lionel Hampton on Vibraphone.",
    platform: "youtube" as const,
    id: "OtpjJ6obfsE",
  },
  {
    title: "Sgt. Pepper",
    description: "Leon Lee Dorsey playing 'Sgt. Pepper' with Michael Wolff and Mike Clark.",
    platform: "youtube" as const,
    id: "pYglzRiy8J4",
  },
];

export default function VideosPage() {
  return (
    <div className="min-h-screen bg-muted/30 pt-32 pb-24">
      <div className="container mx-auto px-4">
         <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 text-center"
          >
            <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-4">
              Performance <span className="text-primary">Library</span>
            </h1>
            <p className="text-xl text-muted-foreground font-serif italic max-w-2xl mx-auto">
              Explore the official video collection featuring performances, collaborations, and behind-the-scenes moments.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <VideoCard {...video} />
              </motion.div>
            ))}
          </div>
      </div>
    </div>
  );
}

