
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Headphones, Youtube } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const FeaturedEpisode = () => {
  // YouTube video ID for the featured episode
  const featuredVideoId = "U_R5tbvcPJA"; // Updated to new featured episode

  return (
    <section className="py-16 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-podcast-navy text-center mb-12">
          Featured Episode
        </h2>

        <Card className="overflow-hidden border-0 shadow-lg rounded-xl">
          <div className="md:flex">
            <div className="md:w-1/2 bg-gradient-to-br from-podcast-navy to-podcast-purple relative overflow-hidden">
              <AspectRatio ratio={16/9} className="md:aspect-auto">
                <iframe 
                  src={`https://www.youtube.com/embed/${featuredVideoId}`}
                  title="Featured Episode"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </AspectRatio>
            </div>
            
            <CardContent className="md:w-1/2 p-6 md:p-10">
              <div className="mb-4 flex items-center">
                <span className="inline-block px-3 py-1 rounded-full bg-podcast-lightPurple text-podcast-purple text-xs font-medium">
                  Latest Episode
                </span>
              </div>
              
              <h3 className="text-xl md:text-2xl font-display font-bold mb-2">
                Jason Richardson — CDO of APAC
              </h3>
              
              <p className="text-podcast-purple font-medium mb-4">
                "Aligning IT and Business: Lessons from the Frontlines"
              </p>
              
              <p className="text-podcast-gray mb-6">
                In this revealing conversation, Jason shares his journey of transforming IT from a cost center to a strategic enabler, including the pitfalls, victories, and unexpected lessons learned along the way.
              </p>
              
              <div className="flex flex-wrap gap-3">
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <Headphones size={16} />
                  <span>Listen</span>
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex items-center gap-2"
                  onClick={() => window.open(`https://www.youtube.com/watch?v=${featuredVideoId}`, '_blank')}
                >
                  <Youtube size={16} />
                  <span>Watch</span>
                </Button>
              </div>
            </CardContent>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default FeaturedEpisode;
