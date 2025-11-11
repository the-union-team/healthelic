import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black opacity-50"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-16 pb-16 border-b border-gray-800/50">
          {/* Product */}
          <div className="group">
            <h3 className="text-lg font-bold mb-6 text-white tracking-tight">Product</h3>
            <ul className="space-y-4">
              <li>
                <Link 
                  href="#features" 
                  className="text-gray-400 hover:text-white transition-all duration-300 text-sm font-medium group-hover:text-gray-300 inline-block hover:translate-x-1"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link 
                  href="#pricing" 
                  className="text-gray-400 hover:text-white transition-all duration-300 text-sm font-medium group-hover:text-gray-300 inline-block hover:translate-x-1"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link 
                  href="#demo" 
                  className="text-gray-400 hover:text-white transition-all duration-300 text-sm font-medium group-hover:text-gray-300 inline-block hover:translate-x-1"
                >
                  Demo
                </Link>
              </li>
              <li>
                <Link 
                  href="#roadmap" 
                  className="text-gray-400 hover:text-white transition-all duration-300 text-sm font-medium group-hover:text-gray-300 inline-block hover:translate-x-1"
                >
                  Roadmap
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="group">
            <h3 className="text-lg font-bold mb-6 text-white tracking-tight">Company</h3>
            <ul className="space-y-4">
              <li>
                <Link 
                  href="#about" 
                  className="text-gray-400 hover:text-white transition-all duration-300 text-sm font-medium group-hover:text-gray-300 inline-block hover:translate-x-1"
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  href="#team" 
                  className="text-gray-400 hover:text-white transition-all duration-300 text-sm font-medium group-hover:text-gray-300 inline-block hover:translate-x-1"
                >
                  Team
                </Link>
              </li>
              <li>
                <Link 
                  href="#careers" 
                  className="text-gray-400 hover:text-white transition-all duration-300 text-sm font-medium group-hover:text-gray-300 inline-block hover:translate-x-1"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link 
                  href="#contact" 
                  className="text-gray-400 hover:text-white transition-all duration-300 text-sm font-medium group-hover:text-gray-300 inline-block hover:translate-x-1"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="group">
            <h3 className="text-lg font-bold mb-6 text-white tracking-tight">Resources</h3>
            <ul className="space-y-4">
              <li>
                <Link 
                  href="#blog" 
                  className="text-gray-400 hover:text-white transition-all duration-300 text-sm font-medium group-hover:text-gray-300 inline-block hover:translate-x-1"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link 
                  href="#case-studies" 
                  className="text-gray-400 hover:text-white transition-all duration-300 text-sm font-medium group-hover:text-gray-300 inline-block hover:translate-x-1"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link 
                  href="#help-center" 
                  className="text-gray-400 hover:text-white transition-all duration-300 text-sm font-medium group-hover:text-gray-300 inline-block hover:translate-x-1"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link 
                  href="#api-docs" 
                  className="text-gray-400 hover:text-white transition-all duration-300 text-sm font-medium group-hover:text-gray-300 inline-block hover:translate-x-1"
                >
                  API Docs
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 mb-12">
          {/* Legal */}
          <div className="group">
            <h3 className="text-lg font-bold mb-6 text-white tracking-tight">Legal</h3>
            <ul className="space-y-4">
              <li>
                <Link 
                  href="#privacy" 
                  className="text-gray-400 hover:text-white transition-all duration-300 text-sm font-medium group-hover:text-gray-300 inline-block hover:translate-x-1"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link 
                  href="#terms" 
                  className="text-gray-400 hover:text-white transition-all duration-300 text-sm font-medium group-hover:text-gray-300 inline-block hover:translate-x-1"
                >
                  Terms
                </Link>
              </li>
              <li>
                <Link 
                  href="#hipaa" 
                  className="text-gray-400 hover:text-white transition-all duration-300 text-sm font-medium group-hover:text-gray-300 inline-block hover:translate-x-1"
                >
                  HIPAA
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white tracking-tight">Social</h3>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group/social flex items-center justify-center w-12 h-12 rounded-full bg-gray-900/50 border border-gray-800/50 hover:border-gray-700 hover:bg-gray-900 transition-all duration-300 hover:scale-110"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5 text-gray-400 group-hover/social:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link>
              <Link 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group/social flex items-center justify-center w-12 h-12 rounded-full bg-gray-900/50 border border-gray-800/50 hover:border-gray-700 hover:bg-gray-900 transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5 text-gray-400 group-hover/social:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group/social flex items-center justify-center w-12 h-12 rounded-full bg-gray-900/50 border border-gray-800/50 hover:border-gray-700 hover:bg-gray-900 transition-all duration-300 hover:scale-110"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5 text-gray-400 group-hover/social:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright and Bottom Bar */}
        <div className="pt-8 border-t border-gray-800/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500 font-medium">
              © {new Date().getFullYear()} HealthElic. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-600 font-medium">Made with</span>
              <span className="text-red-500 animate-pulse">❤️</span>
              <span className="text-xs text-gray-600 font-medium">for healthcare</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
