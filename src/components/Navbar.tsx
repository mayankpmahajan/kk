import { Button } from "@/components/ui/button";
import { MenuIcon, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      // Only track sections on home page
      if (location.pathname !== "/") {
        setActiveSection("");
        return;
      }

      const sections = ["home", "about", "episodes", "host", "contact"];
      const scrollPosition = window.scrollY + 100; // Add offset for sticky navbar

      // Check if we're at the top of the page
      if (scrollPosition < 200) {
        setActiveSection("home");
        return;
      }

      for (const section of sections.slice(1)) {
        // Skip 'home' as it's handled above
        const element = document.getElementById(section);
        if (element) {
          const elementTop = element.offsetTop;
          const elementBottom = elementTop + element.offsetHeight;

          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    // Set initial active section based on current route
    if (location.pathname === "/") {
      setActiveSection("home");
      handleScroll(); // Check scroll position on mount
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      setActiveSection("");
    }
  }, [location.pathname]);

  const isActive = (section: string) => {
    if (location.pathname === "/" && section === "home") {
      return activeSection === "home";
    }
    if (location.pathname === "/" && section !== "home") {
      return activeSection === section;
    }
    if (location.pathname === "/resources" && section === "resources") {
      return true;
    }
    return false;
  };

  const getLinkClassName = (section: string) => {
    return `text-sm font-medium transition-colors ${
      isActive(section)
        ? "text-podcast-blue"
        : "text-podcast-gray hover:text-podcast-blue"
    }`;
  };

  const handleHomeClick = (e: React.MouseEvent) => {
    // If we're on the home page, scroll to top instead of navigating
    if (location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveSection("home");
    }
    // If we're on a different page, let the Link component handle navigation
  };

  return (
    <nav className="bg-white py-4 sticky top-0 z-50 shadow-sm">
      <div className="container px-4 md:px-6 mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="font-display text-xl sm:text-2xl font-bold text-podcast-navy">
            The CIO Diary
          </span>
        </Link>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </Button>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex md:items-center md:gap-6">
          <Link
            to="/"
            className={getLinkClassName("home")}
            onClick={handleHomeClick}
          >
            Home
          </Link>
          <a href="/#about" className={getLinkClassName("about")}>
            About
          </a>
          <a href="/#episodes" className={getLinkClassName("episodes")}>
            Episodes
          </a>
          <Link to="/resources" className={getLinkClassName("resources")}>
            Resources
          </Link>
          <a href="/#host" className={getLinkClassName("host")}>
            Host
          </a>
          <a href="/#contact" className={getLinkClassName("contact")}>
            Contact
          </a>
          <Button
            size="sm"
            className="bg-podcast-blue hover:bg-podcast-navy ml-2"
            asChild
          >
            <Link to="/be-a-guest">Apply to Be a Guest</Link>
          </Button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute w-full bg-white shadow-md py-4 px-6 z-50">
          <div className="flex flex-col space-y-4">
            <Link
              to="/"
              className={`text-base font-medium transition-colors ${
                isActive("home")
                  ? "text-podcast-blue"
                  : "text-podcast-gray hover:text-podcast-blue"
              }`}
              onClick={(e) => {
                handleHomeClick(e);
                setIsMenuOpen(false);
              }}
            >
              Home
            </Link>
            <a
              href="/#about"
              className={`text-base font-medium transition-colors ${
                isActive("about")
                  ? "text-podcast-blue"
                  : "text-podcast-gray hover:text-podcast-blue"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="/#episodes"
              className={`text-base font-medium transition-colors ${
                isActive("episodes")
                  ? "text-podcast-blue"
                  : "text-podcast-gray hover:text-podcast-blue"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Episodes
            </a>
            <Link
              to="/resources"
              className={`text-base font-medium transition-colors ${
                isActive("resources")
                  ? "text-podcast-blue"
                  : "text-podcast-gray hover:text-podcast-blue"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Resources
            </Link>
            <a
              href="/#host"
              className={`text-base font-medium transition-colors ${
                isActive("host")
                  ? "text-podcast-blue"
                  : "text-podcast-gray hover:text-podcast-blue"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Host
            </a>
            <a
              href="/#contact"
              className={`text-base font-medium transition-colors ${
                isActive("contact")
                  ? "text-podcast-blue"
                  : "text-podcast-gray hover:text-podcast-blue"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <Button
              size="sm"
              className="bg-podcast-blue hover:bg-podcast-navy w-full"
              asChild
            >
              <Link to="/be-a-guest">Apply to Be a Guest</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
