
import React, { useState } from 'react';

interface NavbarProps {
  isScrolled: boolean;
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled, currentPage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'HOME', id: 'home' },
    { name: 'ABOUT', id: 'about' },
    { name: 'SOLUTIONS', id: 'solutions' },
    { name: 'BLOG', id: 'blog' },
    { name: 'CONTACT', id: 'contact' },
  ];

  const isHome = currentPage === 'home';

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      (isScrolled || !isHome) ? 'bg-white/90 backdrop-blur-xl shadow-sm py-4' : 'bg-transparent py-7'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <button 
              onClick={() => handleLinkClick('home')}
              className={`text-2xl font-black tracking-tighter transition-colors duration-300 ${ (isScrolled || !isHome) ? 'text-blue-900' : 'text-white'}`}
            >
              EAGLEWINGS
            </button>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-10">
              {navLinks.map((link) => {
                const isActive = currentPage === link.id;
                return (
                  <button
                    key={link.name}
                    onClick={() => handleLinkClick(link.id)}
                    className={`${
                      (isScrolled || !isHome) ? 'text-gray-600 hover:text-blue-600' : 'text-gray-300 hover:text-white'
                    } ${isActive ? 'text-blue-600 font-black' : ''} text-[11px] font-black tracking-[0.2em] transition-all relative group`}
                  >
                    {link.name}
                    {isActive && <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-blue-600"></span>}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className={`${(isScrolled || !isHome) ? 'text-gray-800' : 'text-white'} p-2`}>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16v12H4z"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-2xl absolute top-full left-0 w-full border-t border-gray-100">
          <div className="px-8 py-10 space-y-6">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleLinkClick(link.id)}
                className={`block w-full text-left text-xl font-black tracking-tight ${currentPage === link.id ? 'text-blue-600' : 'text-gray-900'}`}
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
