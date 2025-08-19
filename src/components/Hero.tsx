
import React from 'react';
import { Button } from "@/components/ui/button";
import { Youtube } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-left lg:bg-left-top bg-no-repeat"
        style={{
          backgroundImage: "url('/lovable-uploads/a014cebb-ee38-49f7-8b97-7ac185124072.png')"
        }}
      />
      
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-black/30" />

      <div className="container px-4 md:px-6 mx-auto relative z-10 min-h-screen flex items-center">
        <div className="w-full lg:w-1/2 lg:ml-auto">
          <div className="max-w-2xl lg:max-w-none text-center lg:text-left">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              The CIO Diary
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Candid conversations with digital leaders who are shaping the future of business through technology.
            </p>
            <p className="text-lg md:text-xl text-white/80 mb-10">
              Stories of transformation, leadership, innovation — straight from the people behind the change.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Button 
                className="bg-white/20 backdrop-blur-sm border border-white/40 text-white hover:bg-white hover:text-podcast-navy px-6 py-2 rounded-md flex items-center gap-2"
                onClick={() => window.open('https://www.youtube.com/@theCIOdiary', '_blank')}
              >
                <Youtube size={20} />
                <span>Watch on YouTube</span>
              </Button>
              <Button 
                variant="ghost" 
                className="text-white hover:text-podcast-blue hover:bg-white/10 px-6 py-2 rounded-md"
                onClick={() => navigate('/be-a-guest')}
              >
                Be a Guest
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
