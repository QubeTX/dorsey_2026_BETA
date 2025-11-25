import { Hero } from "@/components/home/Hero";
import { AlbumShowcase } from "@/components/home/AlbumShowcase";
import { MaiselFeature } from "@/components/home/MaiselFeature";
import { PhotoGallery } from "@/components/home/PhotoGallery";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <AlbumShowcase />
      <MaiselFeature />
      <PhotoGallery />
    </div>
  );
}
