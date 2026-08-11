import { Hero } from "@/components/sections/hero";
import { HomeCompanyIntro } from "@/components/sections/home-company-intro";
import { HomeQuestion } from "@/components/sections/home-question";
import { HomeVision } from "@/components/sections/home-vision";

export default function HomePage() {
  return (
    <>
      <Hero />
      <HomeCompanyIntro />
      <HomeQuestion />
      <HomeVision />
    </>
  );
}
