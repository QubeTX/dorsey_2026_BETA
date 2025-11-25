"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
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
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "100px" });

  return (
    <div ref={ref} className={cn("flex overflow-hidden whitespace-nowrap", className)}>
      <motion.div
        className="flex min-w-full shrink-0 gap-4 py-4"
        initial={{ x: direction === "left" ? 0 : "-100%" }}
        animate={isInView ? { x: direction === "left" ? "-100%" : 0 } : {}}
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

