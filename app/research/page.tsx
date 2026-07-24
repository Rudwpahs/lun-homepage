import type { Metadata } from "next";
import { researchSection } from "@/content/lun-content";
import { PageHero } from "@/components/layout/page-hero";
import { ResearchMap } from "@/components/sections/research-map";

export const metadata: Metadata = {
  title: "연구 방향",
  description: researchSection.description,
};

export default function ResearchPage() {
  return (
    <>
      <PageHero
        eyebrow="연구 방향"
        title={researchSection.title}
        description={researchSection.description}
        visualLabel="LUNDA 연구 핵심"
        visualItems={[
          { word: "분리", detail: "화면과 청취" },
          { word: "연결", detail: "사람과 공간" },
          { word: "개방", detail: "소리와 주변" },
        ]}
      />
      <ResearchMap />
    </>
  );
}
