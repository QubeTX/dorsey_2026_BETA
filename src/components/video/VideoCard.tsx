import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

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
    <Card className="bg-card overflow-hidden h-full flex flex-col border-none shadow-lg">
      <div className="aspect-video w-full relative bg-black">
        <iframe
          src={src}
          className="absolute top-0 left-0 w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
          title={title}
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl font-bold uppercase tracking-tight">{title}</CardTitle>
        <CardDescription className="text-base text-muted-foreground line-clamp-3">{description}</CardDescription>
      </CardHeader>
    </Card>
  );
}

