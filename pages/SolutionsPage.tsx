
import React from 'react';
import { SiteImages } from '../data/siteImages';
import { Language, translations } from '../data/translations';

interface SolutionsPageProps {
  siteImages: SiteImages;
  lang: Language;
}

const SolutionsPage: React.FC<SolutionsPageProps> = ({ siteImages, lang }) => {
  const t = translations[lang].solutions;
  const items = t.items.map((item, idx) => ({
    ...item,
    image: idx === 0 ? siteImages.solution1 : idx === 1 ? siteImages.solution2 : siteImages.solution3,
    bg: idx % 2 === 1 ? 'bg-blue-50/50' : 'bg-white'
  }));

  return (
    <div className="pt-32">
      <section className="py-32 bg-gray-900 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={siteImages.hero} className="w-full h-full object-cover blur-sm" alt="Background" />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
           <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-tight">{t.header} <span className="text-blue-500">{t.headerAccent}</span></h1>
           <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto leading-relaxed">
             {t.desc}
           </p>
        </div>
      </section>

      {items.map((s, idx) => (
        <section key={idx} className={`py-40 ${s.bg} overflow-hidden`}>
          <div className={`max-w-7xl mx-auto px-6 lg:px-12 flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-20 items-center`}>
            <div className="w-full lg:w-1/2">
               <span className="text-blue-600 font-black text-7xl md:text-9xl opacity-10 block mb-6 leading-none">{s.id}</span>
               <div className="inline-block bg-blue-600 text-white px-5 py-2 rounded-full text-[11px] font-black tracking-widest mb-8 uppercase">{s.label}</div>
               <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 tracking-tight leading-[1.1]">{s.title}</h2>
               <p className="text-gray-500 text-xl font-light leading-relaxed mb-12">{s.desc}</p>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {s.features.map(f => (
                    <div key={f} className="flex items-center gap-4 group">
                      <div className="w-2 h-2 bg-blue-600 rounded-full group-hover:scale-150 transition-transform"></div>
                      <span className="text-sm font-bold text-gray-700">{f}</span>
                    </div>
                  ))}
               </div>
            </div>
            <div className="w-full lg:w-1/2 relative">
               <div className="absolute -inset-10 bg-blue-600/5 rounded-[4rem] blur-3xl"></div>
               <div className="relative aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl">
                  <img src={s.image} className="w-full h-full object-cover" alt={s.title} />
               </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default SolutionsPage;
