
import React, { useState } from 'react';
import { Language, translations } from '../data/translations';
import { SiteImages } from '../data/siteImages';

interface NavbarProps {
  isScrolled: boolean;
  currentPage: string;
  onNavigate: (page: string) => void;
  lang: Language;
  onLangChange: (lang: Language) => void;
  siteImages: SiteImages;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled, currentPage, onNavigate, lang, onLangChange, siteImages }) => {
  const [isOpen, setIsOpen] = useState(false);
  const t = translations[lang].nav;

  const navLinks = [
    { name: t.home, id: 'home' },
    { name: t.about, id: 'about' },
    { name: t.solutions, id: 'solutions' },
    { name: t.blog, id: 'blog' },
    { name: t.contact, id: 'contact' },
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
          
          {/* Logo - Back to Left */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => handleLinkClick('home')}
              className={`flex items-center transition-all duration-300`}
            >
              {siteImages.logo ? (
                <img 
                  src={siteImages.logo} 
                  alt="EAGLEWINGS" 
                  className={`h-8 md:h-10 w-auto object-contain transition-all ${(!isScrolled && isHome) ? 'brightness-0 invert' : ''}`} 
                />
              ) : (
                <span className={`text-2xl font-black tracking-tighter transition-colors duration-300 ${ (isScrolled || !isHome) ? 'text-blue-900' : 'text-white'}`}>
                  EAGLEWINGS
                </span>
              )}
            </button>
          </div>
          
          {/* Right Section: Desktop Links + Language Box */}
          <div className="flex items-center">
            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-10 mr-12">
              {navLinks.map((link) => {
                const isActive = currentPage === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleLinkClick(link.id)}
                    className={`${
                      (isScrolled || !isHome) ? 'text-gray-600 hover:text-blue-600' : 'text-gray-300 hover:text-white'
                    } ${isActive ? 'text-blue-600 font-black' : ''} text-[11px] font-black tracking-[0.2em] transition-all relative group uppercase`}
                  >
                    {link.name}
                    {isActive && <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-blue-600"></span>}
                  </button>
                );
              })}
            </div>

            {/* Language Switcher - Prominent Box Style */}
            <div className={`flex items-center p-1.5 rounded-2xl border transition-all shadow-sm ${
              isScrolled || !isHome 
              ? 'bg-gray-100 border-gray-200' 
              : 'bg-white/10 border-white/20 backdrop-blur-md'
            }`}>
              <button 
                onClick={() => onLangChange('en')}
                className={`px-4 py-2 rounded-xl text-[10px] font-black tracking-widest transition-all ${
                  lang === 'en' 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' 
                  : (isScrolled || !isHome ? 'text-gray-400 hover:text-gray-600' : 'text-gray-300 hover:text-white')
                }`}
              >
                EN
              </button>
              <button 
                onClick={() => onLangChange('ko')}
                className={`px-4 py-2 rounded-xl text-[10px] font-black tracking-widest transition-all ${
                  lang === 'ko' 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' 
                  : (isScrolled || !isHome ? 'text-gray-400 hover:text-gray-600' : 'text-gray-300 hover:text-white')
                }`}
              >
                KO
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden flex items-center ml-4">
              <button onClick={() => setIsOpen(!isOpen)} className={`${(isScrolled || !isHome) ? 'text-gray-800' : 'text-white'} p-2`}>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16v12H4z"} />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-2xl absolute top-full left-0 w-full border-t border-gray-100 animate-slideIn">
          <div className="px-8 py-10 space-y-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`block w-full text-left text-xl font-black tracking-tight uppercase ${currentPage === link.id ? 'text-blue-600' : 'text-gray-900'}`}
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
      <style>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slideIn {
          animation: slideIn 0.3s ease-out forwards;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
