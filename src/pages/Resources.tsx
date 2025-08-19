import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
const resources = [{
  title: "My AI Arsenal: How I Boost Productivity as a Business Leader",
  description: "A comprehensive guide to the AI tools I use daily to cut through the noise, automate tasks, and amplify my impact as a business leader.",
  icon: "🤖",
  link: "/ai-arsenal"
}, {
  title: "The Ultimate Guide to AI Agent Reports",
  description: "Comprehensive collection of enterprise AI reports from leading organizations including PwC, McKinsey, Google, and Microsoft.",
  icon: "📊",
  link: "/ai-reports"
}, {
  title: "Unlock Your Influence: Strategic Benefits of Podcast Guesting",
  description: "Discover why podcast guesting is essential for ambitious IT leaders to establish thought leadership, build professional equity, and accelerate industry influence.",
  icon: "🎙️",
  link: "/guest-benefits"
}, {
  title: "IT Operating Models",
  description: "Modern IT operating models that align technology capabilities with business outcomes. Coming soon...",
  icon: "⚙️"
}, {
  title: "Innovation Scorecards & Templates",
  description: "Tools to measure and track innovation initiatives and their business impact. Coming soon...",
  icon: "📊"
}, {
  title: "Thought Leadership Articles",
  description: "Essential reading for IT leaders navigating digital disruption and business transformation. Coming soon...",
  icon: "📚"
}];
const Resources = () => {
  return <div className="min-h-screen flex flex-col">
      <SEO 
        title="Resources for Digital Leaders"
        description="Curated resources by KK for CIOs and IT leaders. Find actionable tools, frameworks, and insights for digital transformation and technology leadership."
        keywords="CIO resources, digital transformation, IT leadership, technology frameworks, enterprise tools"
        canonicalUrl="https://theciodiary.com/resources"
      />
      <Navbar />
      <main className="flex-grow">
        <section className="py-16 bg-podcast-lightGray">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-display font-bold text-podcast-navy mb-4">
                Resources for Digital Leaders
              </h1>
              <p className="text-podcast-gray max-w-2xl mx-auto">
                Curated by KK, this section is designed to equip CIOs and IT leaders with actionable tools, frameworks, and inspiration.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources.map((resource, index) => <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow rounded-xl overflow-hidden">
                  {resource.link ? <Link to={resource.link} className="block">
                      <CardContent className="p-6">
                        <div className="text-4xl mb-4">{resource.icon}</div>
                        <h3 className="text-xl font-bold mb-3 text-podcast-navy">{resource.title}</h3>
                        <p className="text-podcast-gray">{resource.description}</p>
                        <div className="mt-4">
                          <span className="text-podcast-purple font-medium text-sm">Read full article →</span>
                        </div>
                      </CardContent>
                    </Link> : <CardContent className="p-6">
                      <div className="text-4xl mb-4">{resource.icon}</div>
                      <h3 className="text-xl font-bold mb-3 text-podcast-navy">{resource.title}</h3>
                      <p className="text-podcast-gray">{resource.description}</p>
                    </CardContent>}
                </Card>)}
            </div>
            
            <div className="mt-10 text-center">
              
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>;
};
export default Resources;