
import React from 'react';
import { Language, translations } from '../data/translations';

interface FooterProps {
  onNavigate: (page: string) => void;
  lang: Language;
}

const Footer: React.FC<FooterProps> = ({ onNavigate, lang }) => {
  const t = translations[lang].footer;
  const nav = translations[lang].nav;

  return (
    <footer className="bg-white border-t border-gray-100 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row justify-between gap-16 mb-24">
          <div className="max-w-sm">
            <button onClick={() => onNavigate('home')} className="text-2xl font-black tracking-tighter text-blue-900 mb-8">EAGLEWINGS</button>
            <p className="text-gray-500 text-sm font-light leading-relaxed mb-10">
              {t.desc}
            </p>
            <div className="flex space-x-5">
              {['LinkedIn', 'Facebook', 'Instagram'].map(sns => (
                <a key={sns} href="#" className="text-[10px] font-black tracking-widest uppercase text-gray-400 hover:text-blue-600 transition-colors">
                  {sns}
                </a>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-24">
            <div>
              <h4 className="text-xs font-black tracking-widest uppercase mb-8 text-gray-900">{t.solutions}</h4>
              <ul className="space-y-4 text-[13px] text-gray-500 font-light">
                <li onClick={() => onNavigate('solutions')} className="hover:text-blue-600 cursor-pointer transition-colors">Brand Seeding</li>
                <li onClick={() => onNavigate('solutions')} className="hover:text-blue-600 cursor-pointer transition-colors">Marketing</li>
                <li onClick={() => onNavigate('solutions')} className="hover:text-blue-600 cursor-pointer transition-colors">Logistics</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-black tracking-widest uppercase mb-8 text-gray-900">{t.company}</h4>
              <ul className="space-y-4 text-[13px] text-gray-500 font-light">
                <li onClick={() => onNavigate('about')} className="hover:text-blue-600 cursor-pointer transition-colors uppercase">{nav.about}</li>
                <li onClick={() => onNavigate('solutions')} className="hover:text-blue-600 cursor-pointer transition-colors uppercase">{nav.solutions}</li>
                <li onClick={() => onNavigate('blog')} className="hover:text-blue-600 cursor-pointer transition-colors uppercase">{nav.blog}</li>
                <li onClick={() => onNavigate('admin')} className="hover:text-blue-600 cursor-pointer transition-colors mt-6 font-black text-gray-300">ADMIN</li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h4 className="text-xs font-black tracking-widest uppercase mb-8 text-gray-900">{t.contact}</h4>
              <ul className="space-y-4 text-[13px] text-gray-500 font-light">
                <li className="opacity-80">VO3-06-18, Lingkaran SV, KL</li>
                <li className="opacity-80">uxc8917@gmail.com</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-400 font-bold tracking-widest uppercase">
          <p>© 2024 EAGLEWINGS AGENCY. ALL RIGHTS RESERVED.</p>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <a href="#" className="hover:text-gray-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-600 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
