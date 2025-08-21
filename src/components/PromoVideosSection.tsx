import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Youtube } from "lucide-react";
import { useState } from "react";

// Sample promo video data
const promoVideos = [
  {
    id: "1",
    title:
      "Self-Driving Networks : Inside the Juniper n Microland AI Advantage",
    subtitle: "Executive Interview",
    youtubeId: "HbNslmyAkf8",
  },
  {
    id: "2",
    title:
      "Unlocking IT's Business Impact & Success Secrets with Jason Richardson",
    subtitle: "Leadership Insights",
    youtubeId: "E0fAzsLVBDE",
  },
];

const PromoVideosSection = () => {
  const [loadingStates, setLoadingStates] = useState<{
    [key: string]: boolean;
  }>(promoVideos.reduce((acc, video) => ({ ...acc, [video.id]: true }), {}));

  const handleIframeLoad = (videoId: string) => {
    setLoadingStates((prev) => ({ ...prev, [videoId]: false }));
  };

  return (
    <section id="promos" className="py-16 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-podcast-navy mb-4">
            Promotional Videos
          </h2>
          <p className="text-podcast-gray max-w-2xl mx-auto">
            Watch our 90-second promotional clips that highlight key insights
            from our full episodes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {promoVideos.map((video) => (
            <Card
              key={video.id}
              className="overflow-hidden border-0 shadow-lg rounded-xl"
            >
              <div className="relative">
                <AspectRatio ratio={16 / 9}>
                  {loadingStates[video.id] && (
                    <div className="absolute inset-0 z-10 bg-gradient-to-br from-podcast-navy to-gray-400 animate-pulse">
                      <div className="flex items-center justify-center h-full">
                        <div className="w-16 h-16 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                      </div>
                    </div>
                  )}
                  <iframe
                    src={`https://www.youtube.com/embed/${video.youtubeId}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                    onLoad={() => handleIframeLoad(video.id)}
                  ></iframe>
                </AspectRatio>
              </div>

              <CardContent className="p-6">
                {loadingStates[video.id] ? (
                  <div className="space-y-3">
                    <Skeleton className="h-6 w-3/4 bg-gradient-to-r from-podcast-navy/20 to-gray-300/40" />
                    <Skeleton className="h-4 w-1/2 bg-gradient-to-r from-gray-300/40 to-podcast-navy/20" />
                  </div>
                ) : (
                  <>
                    <h3 className="text-xl font-bold mb-1">{video.title}</h3>
                    <p className="text-podcast-purple font-medium mb-4">
                      {video.subtitle}
                    </p>
                  </>
                )}
              </CardContent>

              <CardFooter className="px-6 pb-6 pt-0 flex gap-3">
                {loadingStates[video.id] ? (
                  <Skeleton className="h-8 w-32 bg-gradient-to-r from-podcast-navy/20 to-gray-300/40 rounded" />
                ) : (
                  <Button
                    className="bg-podcast-blue hover:bg-podcast-navy text-white"
                    size="sm"
                    onClick={() =>
                      window.open(
                        `https://www.youtube.com/watch?v=${video.youtubeId}`,
                        "_blank"
                      )
                    }
                  >
                    <Youtube size={16} className="mr-2" />
                    <span>Watch Full Episode</span>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromoVideosSection;
