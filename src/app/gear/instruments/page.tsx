import Image from "next/image";
import Link from "next/link";

const gearLinks = [
  ["David Gage String Instruments", "http://www.davidgage.com/"],
  ["Thomastik-Infeld Handsmade", "http://thomastik-infeld.com/"],
  ["Fodera Guitars", "http://www.fodera.com/"],
  ["Gallien Krueger", "http://www.gallien-krueger.com/"],
  ["International Society of Bassists", "http://www.isbworldoffice.com/"],
  ["Bass Player", "http://www.bassplayer.com/"],
  ["Jazz Corner", "http://www.jazzcorner.com/"],
];

export default function InstrumentsPage() {
  return (
    <div className="min-h-screen bg-white pt-28">
      <section className="relative h-[42svh] min-h-[320px] overflow-hidden">
        <Image src="/images/dorsey/about-slider.jpg" alt="Leon Lee Dorsey banner" fill priority sizes="100vw" className="object-cover" />
      </section>
      <section className="section-pad bg-white">
        <div className="site-container grid gap-12 lg:grid-cols-[0.58fr_0.42fr] lg:items-start">
          <div>
            <h1 className="dorsey-heading mb-8 text-[clamp(3rem,8vw,8rem)]">Instruments & Gear</h1>
            <p className="mb-10 text-xl leading-9 text-black/72">
              Instruments & Gear used by the legendary <strong>Leon Lee Dorsey</strong>:
            </p>
            <ul className="space-y-5">
              {gearLinks.map(([name, href]) => (
                <li key={name}>
                  <a href={href} className="text-2xl font-black uppercase text-primary underline-offset-4 hover:underline">
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid gap-5">
            <Image src="/images/dorsey/gear-case.jpg" alt="Instrument case" width={800} height={900} className="w-full object-cover" />
            <Image src="/images/dorsey/gear-bass-yard.jpg" alt="Double bass outdoors" width={800} height={900} className="w-full object-cover" />
          </div>
        </div>
      </section>
      <section className="bg-black py-20 text-white dark-circle-pattern">
        <div className="site-container flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <h2 className="dorsey-heading text-5xl md:text-7xl">Got questions?</h2>
          <Link href="/contact" className="bg-white px-8 py-4 text-sm font-black uppercase text-black hover:bg-primary hover:text-white">
            Get in Touch with Mr. Dorsey&apos;s Team
          </Link>
        </div>
      </section>
    </div>
  );
}
