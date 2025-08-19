import React from 'react';
const AboutSection = () => {
  return <section id="about" className="py-16 bg-podcast-lightGray">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-podcast-navy text-center mb-8">
            About the Podcast
          </h2>
          
          <div className="bg-white rounded-xl shadow-sm p-8">
            <p className="text-podcast-gray mb-4 leading-relaxed">The CIO Diary is a podcast series that takes you behind the scenes of digital leadership. In each episode, host Karthikeyan Krishnan (KK) sits down with visionary CIOs and technology leaders to explore their real-life journeys—unfiltered and unedited.</p>
            
            <p className="text-podcast-gray mb-4 leading-relaxed">
              From personal stories and leadership lessons to the wins, failures, and hard-earned insights, this podcast is designed to inspire and educate current and aspiring CIOs, CDOs, and IT professionals who are shaping tomorrow's enterprises.
            </p>
            
            <p className="text-podcast-gray leading-relaxed">
              Whether you're navigating your first major transformation or leading change at scale, this podcast is your front-row seat to the experiences that rarely get shared in public.
            </p>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;