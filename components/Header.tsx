import React from 'react';

const SunIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.106a.75.75 0 010 1.06l-1.591 1.59a.75.75 0 11-1.06-1.06l1.59-1.591a.75.75 0 011.06 0zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.894 17.894a.75.75 0 01-1.06 0l-1.59-1.591a.75.75 0 111.06-1.06l1.591 1.59a.75.75 0 010 1.061zM12 18a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM6.106 17.894a.75.75 0 010-1.06l1.591-1.59a.75.75 0 111.06 1.06l-1.59 1.591a.75.75 0 01-1.06 0zM4.5 12a.75.75 0 01.75-.75h2.25a.75.75 0 010 1.5H5.25a.75.75 0 01-.75-.75zM6.106 6.106a.75.75 0 011.06 0l1.59 1.591a.75.75 0 11-1.06 1.06L6.106 7.167a.75.75 0 010-1.06z" />
  </svg>
);

const Header: React.FC = () => {
  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#services', label: 'Services' },
    { href: '#about', label: 'About' },
    { href: '#testimonials', label: 'Clients' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-md">
      <div className="container mx-auto px-2 sm:px-4 py-3">
        <div className="flex items-center justify-between">
          <a href="#home" className="flex items-center space-x-1 sm:space-x-2 min-w-0">
            <SunIcon className="w-6 h-6 sm:w-8 sm:h-8 text-orange-500 shrink-0" />
            <span className="text-sm sm:text-lg md:text-xl font-bold text-blue-800 tracking-tight truncate">
              <span className="hidden sm:inline">WATTS FLOWING LTD</span>
              <span className="sm:hidden">WATTS FLOWING</span>
            </span>
          </a>

          <div className="flex items-center space-x-1 sm:space-x-2 shrink-0">
            <nav className="flex items-center space-x-1 sm:space-x-2 md:space-x-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-xs sm:text-sm text-gray-600 font-medium hover:text-orange-500 transition-colors duration-300 px-1 sm:px-2 py-1 rounded-md"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            
            <a
              href="#contact"
              className="inline-block bg-orange-500 text-white font-semibold text-xs sm:text-sm px-3 py-1 sm:px-4 sm:py-2 rounded-full hover:bg-orange-600 transition-all duration-300 shadow-sm"
            >
              <span className="hidden sm:inline">Get a </span>Quote
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;