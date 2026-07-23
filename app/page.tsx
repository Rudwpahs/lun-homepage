import { Hero } from "@/components/sections/hero";
import { Problem } from "@/components/sections/problem";
import { Approach } from "@/components/sections/approach";
import { CompanyOverview } from "@/components/sections/company-overview";
import { Pr1Showcase } from "@/components/sections/pr1-showcase";
import { Pr2Preview } from "@/components/sections/pr2-preview";
import { Vision } from "@/components/sections/vision";
import { ContactCta } from "@/components/sections/contact-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CompanyOverview />
      <Vision />
      <Problem />
      <Approach />
      <Pr1Showcase />
      <Pr2Preview />
      <ContactCta />
    </>
  );
}
