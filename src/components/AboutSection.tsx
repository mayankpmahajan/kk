const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative py-20 h-[80vh] bg-cover bg-left bg-no-repeat"
      style={{ backgroundImage: "url('/lovable-uploads/about-bg.png')" }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="container px-4 md:px-6 mx-auto relative z-10 h-full">
        <div className="flex justify-end items-center h-full">
          <div className="max-w-xl w-full md:w-2/5 pr-8">
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white/90 mb-16 leading-tight">
              About the Podcast
            </h2>

            <div className="space-y-8 text-white/70">
              <p className="text-lg leading-relaxed font-light">
                The CIO Diary is a podcast series that takes you behind the
                scenes of digital leadership. In each episode, host Karthikeyan
                Krishnan (KK) sits down with visionary CIOs and technology
                leaders to explore their real-life journeys—unfiltered and
                unedited.
              </p>

              <p className="text-base leading-relaxed font-light">
                From personal stories and leadership lessons to the wins,
                failures, and hard-earned insights, this podcast is designed to
                inspire and educate current and aspiring CIOs, CDOs, and IT
                professionals who are shaping tomorrow's enterprises.
              </p>

              <p className="text-base leading-relaxed font-light">
                Whether you're navigating your first major transformation or
                leading change at scale, this podcast is your front-row seat to
                the experiences that rarely get shared in public.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
