import Link from "next/link";
import { Facebook, Instagram, Music2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-black/12 bg-white">
      <div className="site-container py-12">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr] md:items-end">
          <p className="max-w-3xl text-lg italic leading-8 text-black/72">
            Leon Lee Dorsey, acclaimed jazz bassist and Berklee School of Music educator, has performed with jazz
            legends and released multiple albums, including the recent &quot;A Letter to Bill Evans.&quot; Founder of Leon Lee
            Dorsey Studios in NYC, his influence on jazz is profound and ever-enduring.
          </p>
          <div className="flex items-center gap-4 md:justify-end">
            <a href="https://music.apple.com/us/album/a-letter-to-bill-evans/1734696128" className="flex h-11 w-11 items-center justify-center rounded-full border border-black text-black transition-colors hover:bg-black hover:text-white" aria-label="iTunes Store">
              <Music2 className="h-5 w-5" />
            </a>
            <a href="#" className="flex h-11 w-11 items-center justify-center rounded-full border border-black text-black transition-colors hover:bg-black hover:text-white" aria-label="Facebook">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="flex h-11 w-11 items-center justify-center rounded-full border border-black text-black transition-colors hover:bg-black hover:text-white" aria-label="Instagram">
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-3 border-t border-black/12 pt-8 text-sm md:flex-row md:items-center md:justify-between">
          <p>
            <span className="italic">Built by </span>
            <Link href="https://emmettshaughnessy.com/" className="font-semibold underline decoration-primary decoration-2 underline-offset-4">
              E. SHAUGHNESSY
            </Link>
          </p>
          <p>Copyright © Leon Lee Dorsey {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
}
