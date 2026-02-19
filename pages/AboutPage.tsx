
import React from 'react';
import { SiteImages } from '../data/siteImages';
import { Language, translations } from '../data/translations';

interface AboutPageProps {
  siteImages: SiteImages;
  lang: Language;
}

const AboutPage: React.FC<AboutPageProps> = ({ siteImages, lang }) => {
  const t = translations[lang].about;

  return (
    <div className="min-h-screen">
      {/* Intro Header */}
      <section className="pt-48 pb-24 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
           <div className="text-blue-600 text-xs font-black tracking-[0.3em] uppercase mb-8">{t.badge}</div>
           <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-tight mb-12">
             {t.title1} <span className="text-blue-600">{t.title2}</span><br />
             {t.title3} <span className="text-blue-600">{t.title4}</span>
           </h1>
           <p className="text-2xl text-gray-400 font-light max-w-4xl leading-relaxed">
             {t.desc}
           </p>
        </div>
      </section>

      {/* Slogan & Vision Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
             <div className="relative group">
               <div className="absolute -inset-4 bg-blue-600/5 rounded-[3.5rem] group-hover:scale-105 transition-transform duration-700"></div>
               <img 
                 src={siteImages.aboutMain} 
                 className="relative rounded-[3rem] shadow-2xl z-10 w-full h-auto aspect-square object-cover" 
                 alt="Collaboration" 
               />
             </div>
             <div>
               <h2 className="text-4xl font-black mb-10 tracking-tight leading-tight text-gray-900">{t.vision.title}</h2>
               <div className="space-y-12">
                  <div className="flex gap-8">
                    <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center flex-shrink-0 font-black text-2xl shadow-xl shadow-blue-600/20">01</div>
                    <div>
                      <h4 className="text-xl font-bold mb-3 text-gray-900">{t.vision.item1Title}</h4>
                      <p className="text-gray-500 font-light leading-relaxed">{t.vision.item1Desc}</p>
                    </div>
                  </div>
                  <div className="flex gap-8">
                    <div className="w-16 h-16 bg-blue-900 text-white rounded-2xl flex items-center justify-center flex-shrink-0 font-black text-2xl shadow-xl shadow-blue-900/20">02</div>
                    <div>
                      <h4 className="text-xl font-bold mb-3 text-gray-900">{t.vision.item2Title}</h4>
                      <p className="text-gray-500 font-light leading-relaxed">{t.vision.item2Desc}</p>
                    </div>
                  </div>
               </div>
             </div>
           </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-32 bg-gray-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-24">
            <h2 className="text-4xl font-black mb-6 tracking-tight">{t.partnershipTitle}</h2>
            <p className="text-gray-400 font-light max-w-2xl mx-auto text-lg leading-relaxed">
              {t.partnershipDesc}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-16 opacity-30 hover:opacity-100 transition-opacity duration-700 grayscale hover:grayscale-0">
            {['WATSONS', 'GUARDIAN', 'SASA', 'AEON', 'SHOPEE', 'LAZADA', 'TIKTOK SHOP', 'GRAB MART'].map(p => (
              <div key={p} className="text-2xl md:text-3xl font-black tracking-tighter text-center">{p}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Activity Sketch Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
           <div className="text-center mb-16">
              <h2 className="text-3xl font-black tracking-tight mb-4">Activity Sketch</h2>
              <p className="text-gray-400 font-light">Eaglewings creates success by running with partners locally.</p>
           </div>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[siteImages.sketch1, siteImages.sketch2, siteImages.sketch3, siteImages.sketch4].map((img, i) => (
                <div key={i} className="aspect-square rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all group">
                   <img src={img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Activity" />
                </div>
              ))}
           </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
