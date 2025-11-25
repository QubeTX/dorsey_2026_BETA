import Link from "next/link";
import { Facebook, Instagram, Youtube, Mail, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background overflow-hidden relative">
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 items-start mb-20">
          
          {/* Links */}
          <div className="space-y-6">
            <h4 className="font-sans font-bold uppercase tracking-widest text-sm text-primary">Explore</h4>
            <ul className="space-y-4 font-serif text-2xl">
              <li><Link href="/about" className="hover:text-primary transition-colors">About</Link></li>
              <li><Link href="/music" className="hover:text-primary transition-colors">Music</Link></li>
              <li><Link href="/videos" className="hover:text-primary transition-colors">Videos</Link></li>
              <li><Link href="/press/reviews" className="hover:text-primary transition-colors">Press</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="font-sans font-bold uppercase tracking-widest text-sm text-primary">Connect</h4>
            <ul className="space-y-4 font-serif text-2xl">
              <li><Link href="/contact" className="hover:text-primary transition-colors flex items-center gap-2">Get in Touch <ArrowUpRight className="w-5 h-5" /></Link></li>
              <li><a href="mailto:info@leonleedorsey.com" className="hover:text-primary transition-colors text-lg opacity-80">info@leonleedorsey.com</a></li>
            </ul>
          </div>

          {/* Socials */}
          <div className="space-y-6">
            <h4 className="font-sans font-bold uppercase tracking-widest text-sm text-primary">Social</h4>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-primary transition-colors"><Facebook className="w-8 h-8" /></a>
              <a href="#" className="hover:text-primary transition-colors"><Instagram className="w-8 h-8" /></a>
              <a href="#" className="hover:text-primary transition-colors"><Youtube className="w-8 h-8" /></a>
            </div>
          </div>

          {/* Bio Snippet */}
          <div className="space-y-6">
             <h4 className="font-sans font-bold uppercase tracking-widest text-sm text-primary">About</h4>
             <p className="font-serif leading-relaxed opacity-80">
               Acclaimed bassist, composer, and educator. A virtuoso dedicated to the art of jazz and the education of the next generation.
             </p>
          </div>
        </div>

        {/* Massive Footer Type */}
        <div className="border-t border-background/20 pt-8">
          <h1 className="text-[18vw] font-serif font-black uppercase tracking-tighter leading-[0.8] text-center opacity-20 select-none pointer-events-none mix-blend-overlay">
            Dorsey
          </h1>
          <div className="flex justify-between items-center text-xs uppercase tracking-widest opacity-50 mt-4 font-sans">
            <p>&copy; {new Date().getFullYear()} Leon Lee Dorsey</p>
            <p>Built by E. SHAUGHNESSY</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
