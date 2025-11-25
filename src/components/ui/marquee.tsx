"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
  direction?: "left" | "right";
  speed?: number;
}

export function Marquee({
  children,
  className,
  direction = "left",
  speed = 20,
}: MarqueeProps) {
  return (
    <div className={cn("flex overflow-hidden whitespace-nowrap", className)}>
      <motion.div
        className="flex min-w-full shrink-0 gap-4 py-4"
        initial={{ x: direction === "left" ? 0 : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : 0 }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speed,
        }}
      >
        {children}
        {children}
        {children}
        {children}
      </motion.div>
    </div>
  );
}

