
import React from 'react';
import Navbar from '@/components/Navbar';
import SEO from '@/components/SEO';
import Hero from '@/components/Hero';
import FeaturedEpisode from '@/components/FeaturedEpisode';
import AboutSection from '@/components/AboutSection';
import HostSection from '@/components/HostSection';
import EpisodesSection from '@/components/EpisodesSection';
import PromoVideosSection from '@/components/PromoVideosSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "PodcastSeries",
    "name": "The CIO Diary",
    "description": "Candid conversations with digital leaders who are shaping the future of business through technology.",
    "url": "https://theciodiary.com",
    "author": {
      "@type": "Person",
      "name": "Karthikeyan Krishnan"
    },
    "publisher": {
      "@type": "Organization",
      "name": "The CIO Diary"
    }
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
        <FeaturedEpisode />
        <AboutSection />
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
