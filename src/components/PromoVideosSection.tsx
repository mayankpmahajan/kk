
import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Headphones, Youtube } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

// Sample promo video data
const promoVideos = [
  {
    id: "1",
    title: "Self-Driving Networks : Inside the Juniper n Microland AI Advantage",
    subtitle: "Executive Interview",
    youtubeId: "HbNslmyAkf8",
    thumbnailColor: "from-blue-600 to-purple-600",
  },
  {
    id: "2",
    title: "Unlocking IT's Business Impact & Success Secrets with Jason Richardson", 
    subtitle: "Leadership Insights",
    youtubeId: "E0fAzsLVBDE",
    thumbnailColor: "from-purple-600 to-pink-500",
  },
];

const PromoVideosSection = () => {
  return (
    <section id="promos" className="py-16 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-podcast-navy mb-4">
            Promotional Videos
          </h2>
          <p className="text-podcast-gray max-w-2xl mx-auto">
            Watch our 90-second promotional clips that highlight key insights from our full episodes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {promoVideos.map((video) => (
            <Card key={video.id} className="overflow-hidden border-0 shadow-lg rounded-xl">
              <div className={`bg-gradient-to-r ${video.thumbnailColor}`}>
                <AspectRatio ratio={16 / 9}>
                  <iframe 
                    src={`https://www.youtube.com/embed/${video.youtubeId}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </AspectRatio>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-1">{video.title}</h3>
                <p className="text-podcast-purple font-medium mb-4">{video.subtitle}</p>
              </CardContent>
              
              <CardFooter className="px-6 pb-6 pt-0 flex gap-3">
                <Button 
                  className="bg-podcast-blue hover:bg-podcast-navy text-white" 
                  size="sm" 
                  onClick={() => window.open(`https://www.youtube.com/watch?v=${video.youtubeId}`, '_blank')}
                >
                  <Youtube size={16} className="mr-2" />
                  <span>Watch Full Episode</span>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromoVideosSection;
