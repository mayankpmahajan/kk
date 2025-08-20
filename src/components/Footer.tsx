import { Linkedin, Mail, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-podcast-navy text-white">
      {/* Elegant top border */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-podcast-blue to-transparent"></div>

      <div className="container px-6 mx-auto max-w-7xl">
        {/* Main Footer Content */}
        <div className="py-20">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-16">
            {/* Brand Section - Premium styling */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h3 className="font-display text-3xl font-light tracking-wide text-white mb-4">
                  The CIO Diary
                </h3>
                <div className="w-16 h-0.5 bg-podcast-blue mb-6"></div>
                <p className="text-gray-300 text-lg leading-relaxed font-light max-w-lg">
                  An exclusive series of candid conversations with distinguished
                  technology leaders and visionary CIOs who are architecting the
                  future of enterprise innovation.
                </p>
              </div>

              {/* Elegant Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-700/50">
                <div>
                  <div className="text-3xl font-light text-white mb-2">50+</div>
                  <div className="text-xs uppercase tracking-widest text-gray-400 font-medium">
                    Distinguished Episodes
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-light text-white mb-2">
                    25K+
                  </div>
                  <div className="text-xs uppercase tracking-widest text-gray-400 font-medium">
                    Executive Audience
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-light text-white mb-2">
                    100+
                  </div>
                  <div className="text-xs uppercase tracking-widest text-gray-400 font-medium">
                    Industry Leaders
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation - Classic layout */}
            <div>
              <h4 className="text-sm uppercase tracking-widest font-medium text-gray-400 mb-8 border-b border-gray-700/50 pb-4">
                Navigation
              </h4>
              <nav className="space-y-4">
                <a
                  href="/#about"
                  className="block text-gray-300 hover:text-white transition-all duration-300 font-light text-base"
                >
                  About the Podcast
                </a>
                <a
                  href="/#episodes"
                  className="block text-gray-300 hover:text-white transition-all duration-300 font-light text-base"
                >
                  Featured Episodes
                </a>
                <a
                  href="/#host"
                  className="block text-gray-300 hover:text-white transition-all duration-300 font-light text-base"
                >
                  Meet the Host
                </a>
                <a
                  href="/resources"
                  className="block text-gray-300 hover:text-white transition-all duration-300 font-light text-base"
                >
                  Executive Resources
                </a>
                <a
                  href="/be-a-guest"
                  className="block text-gray-300 hover:text-white transition-all duration-300 font-light text-base"
                >
                  Guest Inquiries
                </a>
              </nav>
            </div>

            {/* Contact & Connect - Refined */}
            <div>
              <h4 className="text-sm uppercase tracking-widest font-medium text-gray-400 mb-8 border-b border-gray-700/50 pb-4">
                Connect
              </h4>

              {/* Contact Information */}
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-podcast-blue mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-sm text-gray-400 uppercase tracking-wide font-medium mb-1">
                      Email
                    </div>
                    <a
                      href="mailto:hello@ciodiary.com"
                      className="text-gray-300 hover:text-white transition-colors font-light"
                    >
                      hello@ciodiary.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-podcast-blue mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-sm text-gray-400 uppercase tracking-wide font-medium mb-1">
                      Guest Relations
                    </div>
                    <a
                      href="mailto:guest@ciodiary.com"
                      className="text-gray-300 hover:text-white transition-colors font-light"
                    >
                      guest@ciodiary.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Links - Minimalist */}
              <div className="space-y-3">
                <h5 className="text-xs uppercase tracking-widest text-gray-500 font-medium mb-4">
                  Follow
                </h5>
                <a
                  href="https://www.youtube.com/@TheCIODiary"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-all duration-300 group"
                >
                  <Youtube className="w-4 h-4 text-gray-500 group-hover:text-podcast-blue transition-colors" />
                  <span className="font-light">YouTube Channel</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/karthikeyank/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-all duration-300 group"
                >
                  <Linkedin className="w-4 h-4 text-gray-500 group-hover:text-podcast-blue transition-colors" />
                  <span className="font-light">Professional Network</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Ultra refined */}
        <div className="border-t border-gray-700/30 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 text-sm text-gray-400">
              <p className="font-light">
                © {new Date().getFullYear()} The CIO Diary. All rights reserved.
              </p>
              <div className="flex items-center gap-6">
                <a
                  href="/privacy-terms"
                  className="hover:text-white transition-colors font-light"
                >
                  Privacy & Terms
                </a>
                <span className="w-px h-4 bg-gray-600"></span>
                <a
                  href="/sitemap"
                  className="hover:text-white transition-colors font-light"
                >
                  Sitemap
                </a>
              </div>
            </div>

            <div className="text-sm text-gray-500 font-light italic">
              Crafted for executive excellence
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
