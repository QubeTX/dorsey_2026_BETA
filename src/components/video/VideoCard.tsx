interface VideoCardProps {
  title: string;
  description: string;
  platform: "youtube" | "vimeo";
  id: string;
}

export function VideoCard({ title, description, platform, id }: VideoCardProps) {
  const src =
    platform === "youtube"
      ? `https://www.youtube.com/embed/${id}`
      : `https://player.vimeo.com/video/${id}`;

  return (
    <article className="h-full bg-white">
      <div className="relative aspect-video w-full overflow-hidden bg-black">
        <iframe
          src={src}
          className="absolute left-0 top-0 h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
          title={title}
        />
      </div>
      <div className="space-y-3 py-5">
        <h2 className="text-2xl font-black uppercase">{title}</h2>
        <p className="text-base leading-7 text-black/68">{description}</p>
      </div>
    </article>
  );
}
