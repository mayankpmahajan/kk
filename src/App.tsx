import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AIArsenal from "./pages/AIArsenal";
import AIReports from "./pages/AIReports";
import BeAGuest from "./pages/BeAGuest";
import GuestBenefits from "./pages/GuestBenefits";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PrivacyTerms from "./pages/PrivacyTerms";
import Resources from "./pages/Resources";
import Sitemap from "./pages/Sitemap";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter
          future={{
            v7_startTransition: true,
            v7_relativeSplatPath: true,
          }}
        >
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/be-a-guest" element={<BeAGuest />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/ai-arsenal" element={<AIArsenal />} />
            <Route path="/ai-reports" element={<AIReports />} />
            <Route path="/guest-benefits" element={<GuestBenefits />} />
            <Route path="/privacy-terms" element={<PrivacyTerms />} />
            <Route path="/sitemap" element={<Sitemap />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
