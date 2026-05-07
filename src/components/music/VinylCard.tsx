"use client";

import Image from "next/image";
import Link from "next/link";

interface VinylCardProps {
  title: string;
  artist: string;
  year: string;
  image: string;
  link: string;
}

export function VinylCard({ title, artist, year, image, link }: VinylCardProps) {
  return (
    <Link href={link} className="group block">
      <Image
        src={image}
        alt={title}
        width={700}
        height={700}
        className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-[1.025]"
      />
      <div className="mt-5 space-y-2 text-center">
        <h3 className="text-base font-black uppercase">{title}</h3>
        <p className="text-sm leading-6 text-black/60">{artist}</p>
        <p className="text-xs font-bold uppercase text-black/45">{year}</p>
      </div>
    </Link>
  );
}
