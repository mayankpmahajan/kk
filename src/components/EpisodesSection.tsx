import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Headphones, Youtube } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
const episodes = [{
  id: "1",
  guest: "Satish Sukumar",
  title: "SVP & Head of Platforms",
  theme: "Building Platforms for Observability & Intelligent Ops",
  youtubeId: "VibcsAdxxOo",
  thumbnailColor: "from-blue-600 to-purple-600",
  comingSoon: false
}, {
  id: "2",
  guest: "Tom Wilburn & Robert Wysocki",
  title: "",
  theme: "Self-Driving Networks : Inside the Juniper n Microland AI Advantage",
  youtubeId: "CQ2ht0TWai4",
  thumbnailColor: "from-purple-600 to-pink-500",
  comingSoon: false
}];
const EpisodesSection = () => {
  return <section id="episodes" className="py-16 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-podcast-navy mb-4">
            Episodes
          </h2>
          <p className="text-podcast-gray max-w-2xl mx-auto">
            Each episode features a one-on-one conversation with a leading CIO or digital executive.
            Browse by topic or guest.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {episodes.map(episode => <Card key={episode.id} className={`border-0 shadow-sm overflow-hidden rounded-xl ${episode.comingSoon ? 'opacity-75' : ''}`}>
              <div className={`bg-gradient-to-r ${episode.thumbnailColor}`}>
                {episode.comingSoon ? <div className="h-48 flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-md">
                      <span className="text-white font-medium">Coming Soon</span>
                    </div>
                  </div> : <AspectRatio ratio={16 / 9}>
                    <iframe src={`https://www.youtube.com/embed/${episode.youtubeId}`} title={episode.guest} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="w-full h-full"></iframe>
                  </AspectRatio>}
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-1">{episode.guest}</h3>
                <p className="text-podcast-gray text-sm mb-3">{episode.title}</p>
                <p className="text-podcast-purple font-medium">"{episode.theme}"</p>
              </CardContent>
              {!episode.comingSoon && <CardFooter className="px-6 pb-6 pt-0 flex gap-3">
                  
                  <Button variant="outline" size="sm" className="flex items-center gap-2" onClick={() => window.open(`https://www.youtube.com/watch?v=${episode.youtubeId}`, '_blank')}>
                    <Youtube size={14} />
                    <span>Watch</span>
                  </Button>
                </CardFooter>}
            </Card>)}
        </div>
      </div>
    </section>;
};
export default EpisodesSection;