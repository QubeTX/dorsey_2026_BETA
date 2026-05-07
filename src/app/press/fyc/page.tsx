"use client";

import Image from "next/image";

const icons = [
  {
    name: "Michael Wolff",
    role: "Piano",
    image: "/images/dorsey/fyc-wolff.jpeg",
    copy:
      "Michael Wolff brings a profound touch to the trio's interpretation of Bill Evans' legacy, blending lyrical elegance with modern improvisational flair.",
  },
  {
    name: "Leon Lee Dorsey",
    role: "Double Bass",
    image: "/images/dorsey/fyc-dorsey.png",
    copy:
      "Dorsey stands as the rhythmic anchor of the trio, bringing deep tone, impeccable timing and a narrative sense to each track.",
  },
  {
    name: "Mike Clark",
    role: "Drums",
    image: "/images/dorsey/fyc-clark.jpg",
    copy:
      "Mike Clark's drumming gives the record its pulse, balancing crisp detail with the loose, responsive feel of a seasoned jazz master.",
  },
];

export default function FYCPage() {
  return (
    <div className="min-h-screen bg-white pt-28">
      <section className="section-pad bg-white text-center">
        <div className="site-container">
          <h1 className="dorsey-heading text-[clamp(5rem,18vw,16rem)]">
            FYC
          </h1>
          <p className="mt-4 text-2xl uppercase tracking-normal">
            For your <strong>Grammy</strong> ® consideration.
          </p>
          <h2 className="mt-12 text-3xl font-black uppercase leading-tight">
            A Letter to
            <br />
            Bill Evans
          </h2>
          <p className="mt-2 text-lg uppercase">Leon Lee Dorsey</p>
          <Image
            src="/images/dorsey/bill-evans-cover.png"
            alt="A Letter to Bill Evans album cover"
            width={760}
            height={760}
            className="mx-auto mt-10 aspect-square w-full max-w-xl object-cover"
          />
          <div className="mx-auto mt-12 max-w-3xl">
            <p className="text-sm font-black uppercase">Paris-Move</p>
            <h3 className="mt-2 text-2xl font-black">Thierry De Clemensat</h3>
            <p className="mt-5 text-xl italic leading-9 text-black/72">
              “This is an album that thoroughly deserves to be a must-have in any worthy music collection and will
              inevitably inspire listeners to discover or rediscover Bill Evans, who must be smiling happily from
              wherever he is, seeing that he still inspires so many artists.”
            </p>
          </div>
          <div className="my-20">
            <p className="dorsey-heading text-[clamp(3rem,10vw,10rem)] italic">Best Instrumental</p>
            <p className="dorsey-heading text-[clamp(3rem,10vw,10rem)] italic">Jazz Album</p>
          </div>
          <p className="mb-6 text-2xl font-black uppercase">For your Grammy consideration:</p>
          <h2 className="dorsey-heading mb-12 text-[clamp(3rem,8vw,8rem)]">Meet the Icons</h2>
          <div className="grid gap-12 md:grid-cols-3">
            {icons.map((icon) => (
              <article key={icon.name} className="text-left">
                <Image src={icon.image} alt={icon.name} width={700} height={760} className="aspect-[4/5] w-full object-cover" />
                <h3 className="mt-6 text-2xl font-black uppercase">{icon.name}</h3>
                <p className="mt-1 text-sm font-black uppercase">{icon.role}</p>
                <p className="mt-4 text-base leading-7 text-black/70">{icon.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
