import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  BookOpen,
  Brain,
  Clock,
  Download,
  Mic,
  Settings,
  TrendingUp,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

const featuredResources = [
  {
    title: "My AI Arsenal: How I Boost Productivity as a Business Leader",
    description:
      "A comprehensive guide to the AI tools I use daily to cut through the noise, automate tasks, and amplify my impact as a business leader.",
    icon: <Brain className="w-8 h-8" />,
    link: "/ai-arsenal",
    category: "AI & Productivity",
    readTime: "8 min read",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGFydGlmaWNpYWwlMjBpbnRlbGxpZ2VuY2V8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "The Ultimate Guide to AI Agent Reports",
    description:
      "Comprehensive collection of enterprise AI reports from leading organizations including PwC, McKinsey, Google, and Microsoft.",
    icon: <TrendingUp className="w-8 h-8" />,
    link: "/ai-reports",
    category: "Research & Reports",
    readTime: "12 min read",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YnVzaW5lc3MlMjByZXBvcnR8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Unlock Your Influence: Strategic Benefits of Podcast Guesting",
    description:
      "Discover why podcast guesting is essential for ambitious IT leaders to establish thought leadership, build professional equity, and accelerate industry influence.",
    icon: <Mic className="w-8 h-8" />,
    link: "/guest-benefits",
    category: "Leadership",
    readTime: "10 min read",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cG9kY2FzdHxlbnwwfHwwfHx8MA%3D%3D",
  },
];

const additionalResources = [
  {
    title: "IT Operating Models",
    description:
      "Modern IT operating models that align technology capabilities with business outcomes.",
    icon: <Settings className="w-6 h-6" />,
    category: "Frameworks",
    status: "Coming Soon",
  },
  {
    title: "Innovation Scorecards & Templates",
    description:
      "Tools to measure and track innovation initiatives and their business impact.",
    icon: <Download className="w-6 h-6" />,
    category: "Templates",
    status: "Coming Soon",
  },
  {
    title: "Thought Leadership Articles",
    description:
      "Essential reading for IT leaders navigating digital disruption and business transformation.",
    icon: <BookOpen className="w-6 h-6" />,
    category: "Articles",
    status: "Coming Soon",
  },
  {
    title: "CIO Playbook Series",
    description:
      "Step-by-step guides for common CIO challenges and strategic initiatives.",
    icon: <Users className="w-6 h-6" />,
    category: "Guides",
    status: "Coming Soon",
  },
];

const Resources = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Resources for Digital Leaders"
        description="Curated resources by KK for CIOs and IT leaders. Find actionable tools, frameworks, and insights for digital transformation and technology leadership."
        keywords="CIO resources, digital transformation, IT leadership, technology frameworks, enterprise tools"
        canonicalUrl="https://theciodiary.com/resources"
      />
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-podcast-navy via-podcast-navy to-blue-900 py-24 overflow-hidden">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                backgroundSize: "40px 40px",
              }}
            ></div>
          </div>

          <div className="container px-4 md:px-6 mx-auto relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-8 border border-white/20">
                <BookOpen className="w-4 h-4 text-white" />
                <span className="text-sm font-medium text-white tracking-wide">
                  Curated by KK
                </span>
              </div>
              <h1 className="font-display text-5xl md:text-7xl font-light mb-8 leading-tight tracking-wide">
                <span className="bg-gradient-to-r from-gray-300 via-white to-gray-400 bg-clip-text text-transparent font-medium drop-shadow-2xl">
                  Resources for
                  <br />
                  Digital Leaders
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
                Curated insights, actionable frameworks, and strategic tools
                designed to empower technology executives in their digital
                transformation journey.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Resources */}
        <section className="py-24 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl md:text-5xl font-light text-podcast-navy mb-6 tracking-wide">
                Featured Resources
              </h2>
              <p className="text-lg text-podcast-gray max-w-2xl mx-auto font-light leading-relaxed">
                Carefully curated insights that deliver immediate value to
                technology executives
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-12">
              {featuredResources.map((resource, index) => (
                <Card
                  key={index}
                  className="group border-0 bg-white hover:bg-gray-50/50 transition-all duration-500 overflow-hidden"
                >
                  {/* Image header */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={resource.image}
                      alt={resource.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute top-4 left-6">
                      <span className="bg-black/40 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium tracking-wide">
                        {resource.category}
                      </span>
                    </div>
                    <div className="absolute bottom-4 right-6 text-white drop-shadow-lg">
                      {resource.icon}
                    </div>
                  </div>

                  <CardContent className="p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Clock className="w-4 h-4" />
                        {resource.readTime}
                      </div>
                    </div>

                    <h3 className="font-display text-xl font-normal text-podcast-navy mb-4 leading-tight group-hover:text-podcast-blue transition-colors">
                      {resource.title}
                    </h3>

                    <p className="text-podcast-gray mb-8 leading-relaxed font-light">
                      {resource.description}
                    </p>

                    <Link to={resource.link}>
                      <Button className="w-full bg-podcast-navy hover:bg-podcast-blue text-white border-0 py-3 font-medium tracking-wide transition-all duration-300 group">
                        Explore Resource
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Resources */}
        <section className="py-24 bg-gray-50/50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl md:text-5xl font-light text-podcast-navy mb-6 tracking-wide">
                Coming Soon
              </h2>
              <p className="text-lg text-podcast-gray max-w-2xl mx-auto font-light leading-relaxed">
                Additional frameworks and tools currently in development
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {additionalResources.map((resource, index) => (
                <Card
                  key={index}
                  className="border border-gray-200/50 bg-white hover:bg-white transition-all duration-300 group"
                >
                  <CardContent className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 bg-podcast-blue/10 rounded-xl flex items-center justify-center text-podcast-blue group-hover:bg-podcast-blue/20 transition-colors">
                        {resource.icon}
                      </div>
                      <span className="text-xs bg-amber-50 text-amber-600 px-3 py-1 rounded-full font-medium border border-amber-200">
                        {resource.status}
                      </span>
                    </div>

                    <h3 className="font-display text-lg font-normal text-podcast-navy mb-3 leading-tight">
                      {resource.title}
                    </h3>

                    <p className="text-sm text-podcast-gray mb-4 font-light leading-relaxed">
                      {resource.description}
                    </p>

                    <div className="text-xs text-podcast-blue font-medium uppercase tracking-widest">
                      {resource.category}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;
