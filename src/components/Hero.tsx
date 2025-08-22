import { Button } from "@/components/ui/button";
import { Youtube } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  // Video thumbnail URL - using the actual podcast image provided
  const videoThumbnail =
    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAfACoDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD3+iiigAooooAKKKKACiiigAooooAKKKKACiiigD//2Q==";

  const handleVideoLoaded = () => {
    setVideoLoaded(true);
  };

  const handleVideoError = () => {
    setVideoError(true);
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-podcast-navy">
      {/* Static Placeholder/Fallback Image - Always visible until video loads */}
      <div
        className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ${
          videoLoaded && !videoError ? "opacity-0" : "opacity-100"
        }`}
        style={{
          backgroundImage: `url('${videoThumbnail}')`,
        }}
      />

      {/* Loading Indicator - Only show while video is loading */}
      {!videoLoaded && !videoError && (
        <div className="absolute inset-0 z-5 bg-black/20">
          <div className="absolute bottom-8 right-8">
            <div className="flex items-center gap-3 bg-podcast-navy/80 backdrop-blur-sm text-white px-4 py-2 rounded-full">
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              <span className="text-sm font-medium">Loading video...</span>
            </div>
          </div>
        </div>
      )}

      {/* Background Video - Hidden until loaded, no autoplay initially */}
      <video
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          videoLoaded && !videoError ? "opacity-100" : "opacity-0"
        }`}
        style={{ objectPosition: "38% center" }}
        loop
        muted
        playsInline
        preload="metadata"
        onCanPlayThrough={handleVideoLoaded}
        onError={handleVideoError}
        poster={videoThumbnail}
        ref={(video) => {
          if (video && videoLoaded && !videoError) {
            video.play().catch(() => {
              setVideoError(true);
            });
          }
        }}
      >
        <source src="/hero-background.mp4" type="video/mp4" />
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
