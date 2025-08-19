
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { MenuIcon, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white py-4 sticky top-0 z-50 shadow-sm">
      <div className="container px-4 md:px-6 mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="font-display text-xl sm:text-2xl font-bold text-podcast-navy">The CIO Diary</span>
        </Link>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </Button>
        </div>
        
        {/* Desktop menu */}
        <div className="hidden md:flex md:items-center md:gap-6">
          <a href="/#about" className="text-sm font-medium text-podcast-gray hover:text-podcast-blue transition-colors">
            About
          </a>
          <a href="/#episodes" className="text-sm font-medium text-podcast-gray hover:text-podcast-blue transition-colors">
            Episodes
          </a>
          <Link to="/resources" className="text-sm font-medium text-podcast-gray hover:text-podcast-blue transition-colors">
            Resources
          </Link>
          <a href="/#host" className="text-sm font-medium text-podcast-gray hover:text-podcast-blue transition-colors">
            Host
          </a>
          <a href="/#contact" className="text-sm font-medium text-podcast-gray hover:text-podcast-blue transition-colors">
            Contact
          </a>
          <Button size="sm" className="bg-podcast-blue hover:bg-podcast-navy ml-2" asChild>
            <Link to="/be-a-guest">Be a Guest</Link>
          </Button>
        </div>
      </div>
      
      {/* Mobile menu dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute w-full bg-white shadow-md py-4 px-6 z-50">
          <div className="flex flex-col space-y-4">
            <a href="/#about" className="text-base font-medium text-podcast-gray hover:text-podcast-blue transition-colors" onClick={() => setIsMenuOpen(false)}>
              About
            </a>
            <a href="/#episodes" className="text-base font-medium text-podcast-gray hover:text-podcast-blue transition-colors" onClick={() => setIsMenuOpen(false)}>
              Episodes
            </a>
            <Link to="/resources" className="text-base font-medium text-podcast-gray hover:text-podcast-blue transition-colors" onClick={() => setIsMenuOpen(false)}>
              Resources
            </Link>
            <a href="/#host" className="text-base font-medium text-podcast-gray hover:text-podcast-blue transition-colors" onClick={() => setIsMenuOpen(false)}>
              Host
            </a>
            <a href="/#contact" className="text-base font-medium text-podcast-gray hover:text-podcast-blue transition-colors" onClick={() => setIsMenuOpen(false)}>
              Contact
            </a>
            <Button size="sm" className="bg-podcast-blue hover:bg-podcast-navy w-full" asChild>
              <Link to="/be-a-guest">Be a Guest</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
