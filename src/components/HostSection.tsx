import { Button } from "@/components/ui/button";
const HostSection = () => {
  return (
    <section id="host" className="py-16 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="md:flex md:items-center md:gap-12">
          {/* Host Image */}
          <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-podcast-lightPurple">
              <img
                src="/lovable-uploads/a920fba8-098d-48ac-a712-34c30927ee1d.png"
                alt="Karthikeyan Krishnan (KK)"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Host Info */}
          <div className="md:w-2/3">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-podcast-navy mb-6">
              About the Host
            </h2>

            <h3 className="text-xl font-bold mb-4">
              Karthikeyan Krishnan (KK)
            </h3>

            <p className="text-podcast-gray mb-6 leading-relaxed">
              KK is a seasoned technology executive and business leader with
              over two decades of experience in digital transformation, IT
              strategy, and managed services. Currently heading the EMEA
              business at Microland, KK brings a unique blend of strategic
              insight and hands-on leadership experience across global
              enterprises.
            </p>

            <p className="text-podcast-gray mb-8 leading-relaxed">
              A strong advocate for practical innovation and real-world impact,
              KK launched The CIO Diary to build a platform where IT leaders can
              share their stories, inspire the next generation, and create a
              community that learns from each other.
            </p>

            <Button
              className="bg-podcast-blue hover:bg-podcast-navy flex items-center gap-2"
              asChild
            >
              <a
                href="https://www.linkedin.com/in/karthikeyank/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Connect on LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HostSection;
