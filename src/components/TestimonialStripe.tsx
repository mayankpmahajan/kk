import { Quote } from "lucide-react";

const TestimonialStripe = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-podcast-lightGray border-y border-blue-200">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          {/* Quote Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-podcast-blue to-podcast-navy rounded-full flex items-center justify-center shadow-lg">
              <Quote className="w-8 h-8 text-amber-400" />
            </div>
          </div>

          {/* Testimonial Text */}
          <blockquote className="text-xl md:text-2xl font-medium text-podcast-navy leading-relaxed mb-8 italic">
            "Had an excellent experience yesterday recording the CIO Diary with
            KK. The whole session was run with real professionalism from the
            preparation through to the setup, everything was seamless. KK's
            attention to detail made the process effortless, and his energy
            created a relaxed, engaging atmosphere that made it a lot of fun to
            record. He's fantastic to work with!"
          </blockquote>

          {/* Attribution */}
          <div className="flex items-center justify-center">
            <div className="w-1 h-12 bg-gradient-to-b from-amber-400 to-yellow-500 mr-4"></div>
            <div className="text-left">
              <p className="font-bold text-lg text-podcast-navy">
                Craig Randell
              </p>
              <p className="text-podcast-blue font-medium">
                Guest on The CIO Diary
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialStripe;
