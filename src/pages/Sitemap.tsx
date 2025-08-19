import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SEO from '@/components/SEO';

const Sitemap = () => {
  const mainPages = [
    { title: "Home", path: "/", description: "Welcome to AI in Business Podcast" },
    { title: "Be a Guest", path: "/be-a-guest", description: "Apply to be featured on our podcast" },
    { title: "Resources", path: "/resources", description: "Valuable resources for business leaders" }
  ];

  const resourcePages = [
    { title: "AI Arsenal", path: "/ai-arsenal", description: "Essential AI tools and technologies" },
    { title: "AI Reports", path: "/ai-reports", description: "Industry insights and analysis" },
    { title: "Guest Benefits", path: "/guest-benefits", description: "Why you should be our guest" }
  ];

  const legalPages = [
    { title: "Privacy & Terms", path: "/privacy-terms", description: "Privacy policy and terms of service" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Sitemap"
        description="Find all pages and resources available on The CIO Diary website. Navigate easily through our content and resources."
        keywords="sitemap, website navigation, CIO diary pages, podcast resources"
        canonicalUrl="https://theciodiary.com/sitemap"
      />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">Sitemap</h1>
          <p className="text-muted-foreground mb-12">
            Find all pages and resources available on our website.
          </p>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Main Pages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {mainPages.map((page) => (
                    <div key={page.path} className="border-l-4 border-primary pl-4">
                      <Link 
                        to={page.path}
                        className="text-lg font-semibold text-primary hover:underline"
                      >
                        {page.title}
                      </Link>
                      <p className="text-muted-foreground">{page.description}</p>
                      <p className="text-xs text-muted-foreground mt-1">{page.path}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Resource Pages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {resourcePages.map((page) => (
                    <div key={page.path} className="border-l-4 border-secondary pl-4">
                      <Link 
                        to={page.path}
                        className="text-lg font-semibold text-primary hover:underline"
                      >
                        {page.title}
                      </Link>
                      <p className="text-muted-foreground">{page.description}</p>
                      <p className="text-xs text-muted-foreground mt-1">{page.path}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Legal & Policies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {legalPages.map((page) => (
                    <div key={page.path} className="border-l-4 border-muted pl-4">
                      <Link 
                        to={page.path}
                        className="text-lg font-semibold text-primary hover:underline"
                      >
                        {page.title}
                      </Link>
                      <p className="text-muted-foreground">{page.description}</p>
                      <p className="text-xs text-muted-foreground mt-1">{page.path}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Link 
              to="/"
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;