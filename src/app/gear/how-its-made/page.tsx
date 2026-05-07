import Image from "next/image";
import Link from "next/link";

const gallery = [
  "/images/dorsey/made-clamps.jpg",
  "/images/dorsey/made-body.jpg",
  "/images/dorsey/made-assembly.png",
  "/images/dorsey/made-room.jpg",
  "/images/dorsey/made-finish.jpg",
  "/images/dorsey/made-polish.jpg",
  "/images/dorsey/made-garden.jpg",
  "/images/dorsey/gear-bass-yard.jpg",
];

export default function HowItsMadePage() {
  return (
    <div className="min-h-screen bg-white pt-28">
      <section className="section-pad bg-white">
        <div className="site-container grid gap-12 lg:grid-cols-[0.48fr_0.52fr] lg:items-center">
          <div className="space-y-6">
            <h1 className="dorsey-heading text-[clamp(3rem,8vw,8rem)]">How It&apos;s Made</h1>
            <p className="text-xl leading-9 text-black/72">
              Immerse yourself in the artistic fusion of jazz mastery and artisanal craftsmanship.
            </p>
            <p className="text-xl leading-9 text-black/72">
              Celebrated bassist, <strong>Leon Lee Dorsey</strong>, meets his match in <strong>Seth Kimmel</strong>, a
              luthier of extraordinary talent from Eugene, Oregon.
            </p>
            <p className="text-xl leading-9 text-black/72">
              Witness the birth of Dorsey&apos;s newest <em>Redwood Upright Bass</em>: a dance of tradition and
              innovation. This is luxury redefined, a dance of tradition and innovation: it&apos;s how it&apos;s made.
            </p>
            <Link href="#gallery" className="inline-block bg-black px-7 py-4 text-sm font-black uppercase text-white hover:bg-primary">
              Show me
            </Link>
          </div>
          <Image src="/images/dorsey/made-balcony.jpg" alt="Double bass on a balcony" width={900} height={1100} className="w-full object-cover" />
        </div>
      </section>
      <section id="gallery" className="section-pad bg-white">
        <div className="site-container">
          <h2 className="dorsey-heading mb-12 text-[clamp(3rem,8vw,8rem)]">How It&apos;s Made</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {gallery.map((src, index) => (
              <div key={src} className={index % 3 === 0 ? "relative aspect-[3/4] overflow-hidden" : "relative aspect-square overflow-hidden"}>
                <Image src={src} alt={`Instrument making process ${index + 1}`} fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
