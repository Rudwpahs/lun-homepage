import type { Metadata } from "next";
import { contactSection } from "@/content/lun-content";
import { PageHero } from "@/components/layout/page-hero";
import { ContactForm } from "@/components/contact/contact-form";

export const metadata: Metadata = {
  title: "Contact — 문의",
  description: contactSection.description,
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={contactSection.title}
        description={contactSection.description}
      />

      <section className="mx-auto max-w-2xl px-4 py-14 sm:px-6 sm:py-20">
        <ContactForm />
      </section>
    </>
  );
}
