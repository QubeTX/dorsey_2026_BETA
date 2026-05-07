import Image from "next/image";
import Link from "next/link";

interface PressArticleProps {
  title: string;
  kicker?: string;
  excerpt: string;
  image?: string;
  link?: string;
}

export function PressArticle({ title, kicker, excerpt, image, link }: PressArticleProps) {
  const body = (
    <article className="grid gap-7 border-b border-black/15 py-10 md:grid-cols-[220px_1fr] md:items-start">
      {image && (
        <div className="relative aspect-square overflow-hidden bg-muted">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(min-width: 768px) 220px, 100vw"
            className="object-cover"
          />
        </div>
      )}
      <div className={image ? "space-y-4" : "space-y-4 md:col-start-2"}>
        {kicker && <p className="text-sm font-black uppercase">{kicker}</p>}
        <h2 className="text-3xl font-black uppercase leading-tight">{title}</h2>
        <p className="text-lg leading-8 text-black/72">{excerpt}</p>
        {link && <span className="inline-block bg-black px-6 py-3 text-sm font-black uppercase text-white">Read Now</span>}
      </div>
    </article>
  );

  return link ? <Link href={link}>{body}</Link> : body;
}
