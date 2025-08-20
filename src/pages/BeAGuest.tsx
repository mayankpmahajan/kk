import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const BeAGuest = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Be a Guest"
        description="Share your story and insights on The CIO Diary podcast. Apply to be a guest and connect with our community of digital leaders."
        keywords="podcast guest, CIO interview, digital leadership, technology stories"
        canonicalUrl="https://theciodiary.com/be-a-guest"
      />
      <Navbar />
      <main className="flex-grow py-8 bg-podcast-lightGray">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl">
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-100">
              <h1 className="text-3xl md:text-4xl font-display font-bold text-podcast-navy text-center">
                Be a Guest on The CIO Diary
              </h1>
              <p className="text-podcast-gray text-center mt-2">
                Share your story and insights with our community
              </p>
            </div>
            <div className="relative" style={{ height: '800px' }}>
              <iframe
                src="https://form.typeform.com/to/GVJlJTxP?typeform-embed=embed-widget"
                className="w-full h-full border-0"
                title="Guest Application Form"
                allow="camera; microphone; autoplay; encrypted-media;"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BeAGuest;