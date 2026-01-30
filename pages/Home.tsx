
import React from 'react';
import Hero from '../components/Hero';
import TrustIndicators from '../components/TrustIndicators';
import { blogPosts } from '../data/blogPosts';
import { SiteImages } from '../data/siteImages';

interface HomeProps {
  onNavigate: (page: string, postId?: number) => void;
  siteImages: SiteImages;
}

const Home: React.FC<HomeProps> = ({ onNavigate, siteImages }) => {
  // 최신글 3개만 추출
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <div>
      <Hero backgroundImage={siteImages.hero} />
      <TrustIndicators />

      {/* ABOUT PREVIEW SECTION */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <div className="text-blue-600 text-[10px] font-black tracking-[0.3em] uppercase mb-6">Who We Are</div>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-8 tracking-tighter leading-tight">
            대한민국 브랜드의 <br />가장 신뢰받는 <span className="text-blue-600">현지 허브.</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-500 text-lg font-light leading-relaxed mb-12">
            단순한 대행을 넘어 현지 인프라와 강력한 네트워크로 대한민국 브랜드의 말레이시아 시장 안착을 돕습니다. 우리의 비전은 당신의 브랜드가 현지에서 자생할 수 있는 뿌리를 내리게 하는 것입니다.
          </p>
          <button 
            onClick={() => onNavigate('about')}
            className="inline-flex items-center text-sm font-black text-blue-600 border-b-2 border-blue-600 pb-1 hover:text-blue-800 hover:border-blue-800 transition-all group"
          >
            ABOUT STORY 더보기
            <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </button>
        </div>
      </section>

      {/* SOLUTIONS PREVIEW SECTION */}
      <section className="py-32 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-xl">
              <div className="text-blue-600 text-[10px] font-black tracking-[0.3em] uppercase mb-4">Core Competency</div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter">Business Solutions</h2>
            </div>
            <button onClick={() => onNavigate('solutions')} className="hidden md:block text-sm font-black text-blue-600 group">
              전체 솔루션 보기 <span className="group-hover:ml-1 transition-all">→</span>
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { id: 'solutions', icon: '🌱', title: 'Brand Seeding', desc: '초기 시장 진입 및 인지도 확보' },
              { id: 'solutions', icon: '🔥', title: 'Marketing', desc: '인플루언서 및 SNS 바이럴 캠페인' },
              { id: 'solutions', icon: '📦', title: 'Logistics', desc: '쿠알라룸푸르 거점 풀필먼트 서비스' },
            ].map((s, idx) => (
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
            <div className="text-blue-600 text-[10px] font-black tracking-[0.3em] uppercase mb-4">Latest Insights</div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter">Expert Insights</h2>
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
              className="bg-gray-900 text-white px-12 py-5 rounded-full text-xs font-black tracking-[0.2em] hover:bg-blue-600 hover:shadow-2xl hover:shadow-blue-600/30 transition-all active:scale-95"
            >
              블로그 전체보기
            </button>
          </div>
        </div>
      </section>

      {/* CONTACT PREVIEW SECTION */}
      <section className="py-32 bg-[#F8F9FF]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-16">
          <div className="text-center md:text-left max-w-xl">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight leading-tight">말레이시아 진출,<br />전문가와 함께 시작하세요.</h2>
            <p className="text-gray-500 text-lg font-light leading-relaxed">복잡한 인허가부터 물류, 마케팅까지 모든 과정을 투명하고 안전하게 가이드해 드립니다.</p>
          </div>
          <button 
            onClick={() => onNavigate('contact')}
            className="bg-[#9587DA] text-white px-14 py-6 rounded-3xl font-black text-sm tracking-[0.2em] hover:bg-[#8374CA] transition-all shadow-xl shadow-[#9587DA]/30 flex items-center group active:scale-95"
          >
            제안서 요청하기
            <svg className="w-5 h-5 ml-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
