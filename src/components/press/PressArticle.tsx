import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface PressArticleProps {
  title: string;
  date: string;
  source?: string;
  excerpt: string;
  image?: string;
  link?: string;
}

export function PressArticle({ title, date, source, excerpt, image, link }: PressArticleProps) {
  return (
    <Card className="overflow-hidden border-none bg-card/50 hover:bg-card transition-colors">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6">
        {image && (
          <div className="md:col-span-4 relative aspect-video md:aspect-square bg-muted rounded-md overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
            />
          </div>
        )}
        <div className={image ? "md:col-span-8 flex flex-col justify-center" : "col-span-12"}>
          <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
            <span>{date}</span>
            {source && (
              <>
                <span className="w-1 h-1 rounded-full bg-primary" />
                <span className="uppercase tracking-wide font-bold text-primary">{source}</span>
              </>
            )}
          </div>
          <h3 className="text-2xl font-bold mb-4 leading-tight">{title}</h3>
          <p className="text-muted-foreground mb-6 line-clamp-3 leading-relaxed">{excerpt}</p>
          {link && (
            <Button asChild variant="link" className="p-0 h-auto font-bold uppercase tracking-widest text-foreground hover:text-primary">
              <Link href={link}>
                Read Full Article <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
}

