
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
      (isScrolled || !isHome) ? 'bg-white/95 backdrop-blur-xl shadow-md py-4' : 'bg-transparent py-7'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center">
          
          {/* Logo - Left Aligned */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => handleLinkClick('home')}
              className="flex items-center transition-transform active:scale-95 duration-300"
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
          
          {/* Right Cluster: Links + Language Box */}
          <div className="flex items-center">
            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-10 mr-12">
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
                    <span className={`absolute -bottom-2 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                  </button>
                );
              })}
            </div>

            {/* Language Switcher Box */}
            <div className={`flex items-center p-1 rounded-2xl border transition-all duration-300 shadow-sm ${
              isScrolled || !isHome 
              ? 'bg-gray-100 border-gray-200' 
              : 'bg-white/10 border-white/20 backdrop-blur-md'
            }`}>
              <button 
                onClick={() => onLangChange('en')}
                className={`px-4 py-1.5 rounded-xl text-[10px] font-black tracking-widest transition-all ${
                  lang === 'en' 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30' 
                  : (isScrolled || !isHome ? 'text-gray-400 hover:text-gray-600' : 'text-gray-300 hover:text-white')
                }`}
              >
                EN
              </button>
              <button 
                onClick={() => onLangChange('ko')}
                className={`px-4 py-1.5 rounded-xl text-[10px] font-black tracking-widest transition-all ${
                  lang === 'ko' 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30' 
                  : (isScrolled || !isHome ? 'text-gray-400 hover:text-gray-600' : 'text-gray-300 hover:text-white')
                }`}
              >
                KO
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="lg:hidden flex items-center ml-4">
              <button onClick={() => setIsOpen(!isOpen)} className={`${(isScrolled || !isHome) ? 'text-gray-800' : 'text-white'} p-2 transition-transform active:rotate-90`}>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-[60] lg:hidden transition-all duration-500 transform ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'}`}>
        <div className="p-8 flex flex-col h-full">
          <div className="flex justify-between items-center mb-16">
             <span className="text-2xl font-black text-blue-900 tracking-tighter">EAGLEWINGS</span>
             <button onClick={() => setIsOpen(false)} className="p-2 text-gray-900">
               <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
               </svg>
             </button>
          </div>
          <div className="space-y-8 flex-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`block w-full text-left text-4xl font-black tracking-tighter uppercase transition-colors ${currentPage === link.id ? 'text-blue-600' : 'text-gray-900'}`}
              >
                {link.name}
              </button>
            ))}
          </div>
          <div className="pt-12 border-t border-gray-100">
             <p className="text-[10px] font-black text-gray-300 tracking-[0.3em] uppercase mb-4">Official Partner in Malaysia</p>
             <div className="flex gap-6">
                <span className="text-xs font-bold text-gray-500">Instagram</span>
                <span className="text-xs font-bold text-gray-500">LinkedIn</span>
             </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
