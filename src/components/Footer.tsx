
import React from 'react';
import { Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-podcast-navy text-white py-12">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Tagline */}
          <div>
            <h3 className="font-display text-2xl font-bold mb-4">The CIO Diary</h3>
            <p className="text-gray-300 mb-6">
              Candid conversations with digital leaders who are shaping the future of business through technology.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <a href="/#about" className="text-gray-300 hover:text-white transition-colors">
                About
              </a>
              <a href="/#episodes" className="text-gray-300 hover:text-white transition-colors">
                Episodes
              </a>
              <a href="/#promos" className="text-gray-300 hover:text-white transition-colors">
                Promotional Videos
              </a>
              <a href="/resources" className="text-gray-300 hover:text-white transition-colors">
                Resources
              </a>
              <a href="/#host" className="text-gray-300 hover:text-white transition-colors">
                Host
              </a>
              <a href="/#contact" className="text-gray-300 hover:text-white transition-colors">
                Contact
              </a>
              <a href="/be-a-guest" className="text-gray-300 hover:text-white transition-colors">
                Be a Guest
              </a>
            </nav>
          </div>
          
          {/* Subscribe */}
          <div>
            <h4 className="text-lg font-bold mb-4">Listen On</h4>
            <div className="flex flex-col space-y-3">
              <a href="https://www.youtube.com/@TheCIODiary" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                <Youtube size={16} />
                <span>YouTube</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} The CIO Diary. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="/privacy-terms" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy & Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
