
import React from 'react';
import { Language, translations } from '../data/translations';

interface HeroProps {
  backgroundImage?: string;
  lang: Language;
}

const Hero: React.FC<HeroProps> = ({ backgroundImage, lang }) => {
  const t = translations[lang].hero;

  const scrollToServices = () => {
    const services = document.getElementById('services-section');
    if (services) {
      services.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If we are not on home, just a fallback or behavior
      window.scrollTo({ top: 800, behavior: 'smooth' });
    }
  };

  const defaultImage = "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1920&q=80";

  return (
    <div className="relative h-screen flex items-center overflow-hidden bg-gray-900">
      {/* Background Overlay with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10"></div>
      
      {/* Background Image */}
      <img 
        src={backgroundImage || defaultImage} 
        alt="Kuala Lumpur" 
        className="absolute inset-0 w-full h-full object-cover scale-105 animate-slowZoom"
      />

      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12 w-full text-white">
        <div className="max-w-4xl">
          <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full mb-8">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
            <span className="text-[10px] font-black tracking-[0.3em] uppercase">{t.badge}</span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[1.05] tracking-tighter">
            {t.title1} <br />
            <span className="text-blue-500">{t.titleAccent}</span><br />
            {t.title2}
          </h1>
          
          <p className="text-lg md:text-2xl text-gray-300 mb-12 leading-relaxed font-light max-w-2xl">
            {t.desc}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5">
            <button 
              onClick={scrollToServices}
              className="group bg-blue-600 text-white px-10 py-5 rounded-full font-black text-sm tracking-widest hover:bg-blue-700 transition-all flex items-center justify-center shadow-2xl shadow-blue-600/30"
            >
              {t.btnSolutions}
              <svg className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <button className="bg-white/5 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-full font-black text-sm tracking-widest hover:bg-white/10 transition-all">
              {t.btnLearn}
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-12 z-20 hidden md:block">
        <div className="flex items-center space-x-4 opacity-50">
          <div className="w-px h-12 bg-white"></div>
          <span className="text-[10px] font-black tracking-[0.4em] uppercase vertical-text">Scroll</span>
        </div>
      </div>

      <style>{`
        @keyframes slowZoom {
          from { transform: scale(1.05); }
          to { transform: scale(1.15); }
        }
        .animate-slowZoom {
          animation: slowZoom 30s infinite alternate linear;
        }
        .vertical-text {
          writing-mode: vertical-rl;
        }
      `}</style>
    </div>
  );
};

export default Hero;
