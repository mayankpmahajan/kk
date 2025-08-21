import { Button } from "@/components/ui/button";
import { Youtube } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: "38% center" }}
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/hero-background.mp4" type="video/mp4" />
        {/* Fallback background image if video fails to load */}
        <div
          className="absolute inset-0 bg-cover bg-left bg-no-repeat"
          style={{
            backgroundImage:
              "url('/lovable-uploads/a014cebb-ee38-49f7-8b97-7ac185124072.png')",
          }}
        />
      </video>

      {/* Black Overlay for text readability */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="container px-4 md:px-6 mx-auto relative z-10 min-h-screen flex items-center justify-center">
        <div className="text-center max-w-4xl">
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
            The CIO Diary
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-white mb-8 leading-relaxed drop-shadow-lg">
            Candid conversations with digital leaders who are shaping the future
            of business through technology.
          </p>
          <p className="text-lg md:text-xl text-white/90 mb-10 drop-shadow-lg">
            Stories of transformation, leadership, innovation straight from the
            people behind the change.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              className="bg-white/20 backdrop-blur-sm border border-white/40 text-white hover:bg-white hover:text-podcast-navy px-8 py-3 text-lg rounded-lg flex items-center gap-2 shadow-2xl"
              onClick={() =>
                window.open("https://www.youtube.com/@theCIOdiary", "_blank")
              }
            >
              <Youtube size={24} />
              <span>Watch on YouTube</span>
            </Button>
            <Button
              variant="ghost"
              className="text-white hover:text-podcast-blue hover:bg-white/20 border border-white/20 px-8 py-3 text-lg rounded-lg shadow-2xl backdrop-blur-sm"
              onClick={() => navigate("/be-a-guest")}
            >
              Apply to Be a Guest
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
