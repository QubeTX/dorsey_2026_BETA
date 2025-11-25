"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutPage() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Text Masking */}
      <section className="relative pt-40 pb-32 bg-background overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="relative">
            <motion.h1 
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-[15vw] font-serif font-black uppercase tracking-tighter leading-[0.8] text-center mix-blend-difference text-foreground z-20 relative"
            >
              The <br /> Legend
            </motion.h1>
            
            {/* Masked Video/Image Background for Text Effect (Simulated with absolute positioning behind) */}
            {/* Actually, mix-blend-difference on white text over an image works great too. */}
            
            <motion.div 
              style={{ y: y1 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] aspect-video z-10 grayscale opacity-50"
            >
               <Image
                 src="/images/hero-1.jpg"
                 alt="Background"
                 fill
                 className="object-cover"
               />
            </motion.div>
          </div>
          
          <div className="max-w-4xl mx-auto mt-20 text-center relative z-20">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-3xl md:text-5xl font-serif italic leading-tight"
            >
              “Rhythmic virtuoso Leon Lee Dorsey mesmerizes with his captivating bass melodies, pushing boundaries in jazz.”
            </motion.p>
          </div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            {/* Image Column */}
            <div className="lg:col-span-5 space-y-20">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative aspect-[3/4] w-full bg-black rounded-sm overflow-hidden shadow-2xl rotate-3"
              >
                <Image 
                  src="/images/hero-3.jpg" 
                  alt="Leon Lee Dorsey Portrait" 
                  fill 
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative aspect-square w-full bg-black rounded-sm overflow-hidden shadow-xl -rotate-3"
              >
                 <Image 
                  src="/images/hero-4.jpg" 
                  alt="Performance" 
                  fill 
                  className="object-cover sepia hover:sepia-0 transition-all duration-700"
                />
              </motion.div>
            </div>

            {/* Text Column */}
            <div className="lg:col-span-7 space-y-12 text-xl md:text-2xl leading-relaxed font-light">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <p className="first-letter:text-9xl first-letter:font-serif first-letter:italic first-letter:font-black first-letter:float-left first-letter:mr-6 first-letter:leading-[0.8]">
                  Music speaks the language of the soul, and through my bass, I strive to tell stories that resonate with hearts across the world.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <p>
                  As a legendary bassist, composer, and arranger, <span className="font-bold text-primary">Leon Lee Dorsey</span>, born in 1958 in Pittsburgh, has performed with jazz luminaries that include: <em className="text-foreground font-serif">Dizzy Gillespie, Wynton Marsalis, Freddie Hubbard, John Lewis, Kenny Clarke, Jon Hendricks, Gloria Lynn, Harry "Sweets" Edison, Dorothy Donegan, Stanley Turrentine, George Benson, Ellis Marsalis, Neena Freelon</em> and <em className="text-foreground font-serif">Terumasa Hino</em>.
                </p>
                
                <p>
                  He has also performed in big bands with the Smithsonian Jazz Masterworks Orchestra, Benny Carter, the Duke Ellington Orchestra and Charlie Persip's Superband. Other career highlights include working with Frank Sinatra at Carnegie Hall, guest appearances at the White House under Presidents Reagan and Clinton and performing with Joe Williams and the operatic diva Marilyn Horne.
                </p>

                <Separator className="my-12 bg-primary/30" />

                <h3 className="text-4xl font-serif font-bold text-foreground uppercase tracking-tighter mb-8">Education & Legacy</h3>
                
                <p>
                  Completing his Doctor of Music (DMA) in Double Bass Performance at Stony Brook University Graduate School (2014-2016), Dorsey holds Master's Degrees from the University of Wisconsin-Madison and the Manhattan School of Music, and a Double Degree in Music from Oberlin College, specializing in Classical Double Bass and Jazz Performance.
                </p>

                <p>
                   Currently serving as an <span className="font-bold text-primary">Associate Professor of Music at Berklee College of Music</span>, Mr. Dorsey has also held teaching positions at Queens College (NYC), the University of Pittsburgh, and Oberlin College Conservatory of Music. He maintains that jazz requires "the highest level of knowledge, study, and training across the board," reflecting his deep commitment to both performance and education in the genre.
                </p>
              </motion.div>
              
              <div className="pt-12">
                <Button asChild size="lg" variant="outline" className="rounded-full border-2 text-xl px-10 py-8 hover:bg-foreground hover:text-background uppercase tracking-widest font-bold">
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
