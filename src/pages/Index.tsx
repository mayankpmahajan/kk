import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import EpisodesSection from "@/components/EpisodesSection";
import FeaturedEpisode from "@/components/FeaturedEpisode";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HostSection from "@/components/HostSection";
import Navbar from "@/components/Navbar";
import PromoVideosSection from "@/components/PromoVideosSection";
import SEO from "@/components/SEO";
import StatsStripe from "@/components/StatsStripe";
import TestimonialStripe from "@/components/TestimonialStripe";

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "PodcastSeries",
    name: "The CIO Diary",
    description:
      "Candid conversations with digital leaders who are shaping the future of business through technology.",
    url: "https://theciodiary.com",
    author: {
      "@type": "Person",
      name: "Karthikeyan Krishnan",
    },
    publisher: {
      "@type": "Organization",
      name: "The CIO Diary",
    },
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        structuredData={structuredData}
        canonicalUrl="https://theciodiary.com/"
      />
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <StatsStripe />
        <FeaturedEpisode />
        <AboutSection />
        <TestimonialStripe />
        <PromoVideosSection />
        <EpisodesSection />
        <HostSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
