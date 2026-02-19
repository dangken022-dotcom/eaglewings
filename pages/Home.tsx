
import React from 'react';
import Hero from '../components/Hero';
import TrustIndicators from '../components/TrustIndicators';
import { getBlogPosts } from '../data/blogPosts';
import { SiteImages } from '../data/siteImages';
import { Language, translations } from '../data/translations';

interface HomeProps {
  onNavigate: (page: string, postId?: number) => void;
  siteImages: SiteImages;
  lang: Language;
}

const Home: React.FC<HomeProps> = ({ onNavigate, siteImages, lang }) => {
  const t = translations[lang].home;
  const latestPosts = getBlogPosts(lang).slice(0, 3);

  return (
    <div>
      <Hero backgroundImage={siteImages.hero} lang={lang} />
      <TrustIndicators lang={lang} />

      {/* WHO WE ARE SECTION */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <div className="text-blue-600 text-[10px] font-black tracking-[0.3em] uppercase mb-6">{t.who.badge}</div>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-8 tracking-tighter leading-tight">
            {t.who.title}
          </h2>
          <p className="max-w-2xl mx-auto text-gray-500 text-lg font-light leading-relaxed mb-12">
            {t.who.desc}
          </p>
          <button 
            onClick={() => onNavigate('about')}
            className="inline-flex items-center text-sm font-black text-blue-600 border-b-2 border-blue-600 pb-1 hover:text-blue-800 hover:border-blue-800 transition-all group"
          >
            {t.who.more}
            <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </button>
        </div>
      </section>

      {/* SOLUTIONS PREVIEW SECTION */}
      <section id="services-section" className="py-32 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-xl">
              <div className="text-blue-600 text-[10px] font-black tracking-[0.3em] uppercase mb-4">{t.solutions.badge}</div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter">{t.solutions.title}</h2>
            </div>
            <button onClick={() => onNavigate('solutions')} className="hidden md:block text-sm font-black text-blue-600 group uppercase tracking-widest">
              {t.solutions.viewAll} <span className="group-hover:ml-1 transition-all">→</span>
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.solutions.items.map((s, idx) => (
              <div 
                key={idx} 
                className="bg-white p-12 rounded-[2.5rem] shadow-sm border border-gray-100 hover:shadow-2xl transition-all group cursor-pointer" 
                onClick={() => onNavigate(s.id)}
              >
                <div className="text-5xl mb-8 group-hover:scale-110 transition-transform">{s.icon}</div>
                <h3 className="text-2xl font-black mb-4 tracking-tight text-gray-900">{s.title}</h3>
                <p className="text-gray-400 text-sm font-light mb-6 leading-relaxed">{s.desc}</p>
                <div className="w-10 h-1 bg-blue-100 group-hover:w-full transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG PREVIEW SECTION */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <div className="text-blue-600 text-[10px] font-black tracking-[0.3em] uppercase mb-4">{t.blog.badge}</div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter">{t.blog.title}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {latestPosts.map(post => {
              const postImage = (siteImages as any)[`blog${post.id}`] || post.image;
              return (
                <div key={post.id} className="group cursor-pointer" onClick={() => onNavigate('blog-detail', post.id)}>
                  <div className="aspect-[16/10] rounded-3xl bg-gray-100 overflow-hidden mb-8 shadow-lg shadow-gray-200/50">
                    <img src={postImage} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="blog" />
                  </div>
                  <div className="text-blue-600 text-[10px] font-black tracking-widest uppercase mb-3">{post.category}</div>
                  <h4 className="text-xl font-black mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors leading-tight">
                    {post.title}
                  </h4>
                  <p className="text-gray-400 text-sm font-light line-clamp-2 leading-relaxed">{post.excerpt}</p>
                </div>
              );
            })}
          </div>
          <div className="text-center">
            <button 
              onClick={() => onNavigate('blog')}
              className="bg-gray-900 text-white px-12 py-5 rounded-full text-xs font-black tracking-[0.2em] hover:bg-blue-600 hover:shadow-2xl hover:shadow-blue-600/30 transition-all active:scale-95 uppercase"
            >
              {t.blog.viewAll}
            </button>
          </div>
        </div>
      </section>

      {/* CONTACT PREVIEW SECTION */}
      <section className="py-32 bg-[#F8F9FF]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-16">
          <div className="text-center md:text-left max-w-xl">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight leading-tight">{t.contact.title}</h2>
            <p className="text-gray-500 text-lg font-light leading-relaxed">{t.contact.desc}</p>
          </div>
          <button 
            onClick={() => onNavigate('contact')}
            className="bg-[#9587DA] text-white px-14 py-6 rounded-3xl font-black text-sm tracking-[0.2em] hover:bg-[#8374CA] transition-all shadow-xl shadow-[#9587DA]/30 flex items-center group active:scale-95 uppercase"
          >
            {t.contact.btn}
            <svg className="w-5 h-5 ml-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
