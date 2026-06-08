import { getHeroSlides } from "@/lib/cms";
import { heroSlides as fallbackSlides } from "@/components/home/heroSlides";
import { HeroCarousel } from "@/components/home/HeroCarousel";

export async function HeroSection() {
  const cmsSlides = await getHeroSlides();
  const slides = cmsSlides && cmsSlides.length > 0 ? cmsSlides : fallbackSlides;
  return <HeroCarousel slides={slides} />;
}

export default HeroSection;
