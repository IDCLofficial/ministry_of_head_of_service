import React from "react";
import MediaHeroSection from "./MediaHeroSection";
import MediaGalleryGrid from "./MediaGalleryGrid";
import Footer from "../components/Footer";
import CTASection from "../components/CTASection";
import getMedia from "./media";
import { Media } from "../../../lib/types";

export default async function MediaPage() {
  const mediaItems = await getMedia();
  const media = mediaItems

  return (
    <main className="min-h-screen w-full bg-[#F7F9FA] flex flex-col">
      <MediaHeroSection
        title="Explore Our Gallery"
        subtitle="Discover how the Ministry of Youth Development and Talent Hunt empowers young people and nurtures talent for a brighter future."
        backgroundImage="/images/heroImage.png"
      />
      <section className="w-full max-w-7xl mx-auto py-12 px-4">
        <MediaGalleryGrid items={media as unknown as Media[]} />
      </section>
      <CTASection 
        heading="Need Assistance with Civil Service Matters?"
        subtext="Get help with appointments, promotions, pensions, and other civil service services."
        buttonLabel="Contact Us"
        buttonHref="/contact-us"
      />
      <Footer />
    </main>
  );
}
