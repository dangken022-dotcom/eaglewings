
import React from 'react';
import { SiteImages } from '../data/siteImages';

interface AboutPageProps {
  siteImages: SiteImages;
}

const AboutPage: React.FC<AboutPageProps> = ({ siteImages }) => {
  return (
    <div className="min-h-screen">
      {/* Intro Header */}
      <section className="pt-48 pb-24 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
           <div className="text-blue-600 text-xs font-black tracking-[0.3em] uppercase mb-8">About Eaglewings</div>
           <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-tight mb-12">
             Beyond <span className="text-blue-600">Agency</span>,<br />
             Your <span className="text-blue-600">Local Hub.</span>
           </h1>
           <p className="text-2xl text-gray-400 font-light max-w-4xl leading-relaxed">
             Eaglewings는 대한민국 브랜드가 해외 시장에서 겪는 '보이지 않는 장벽'을 허물기 위해 탄생했습니다. 우리는 단순한 대행사를 넘어, 현지의 언어, 문화, 행정, 물류 인프라를 하나로 연결하는 가장 강력한 로컬 허브입니다.
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
               <h2 className="text-4xl font-black mb-10 tracking-tight leading-tight text-gray-900">말레이시아가 한국 브랜드의<br />제2의 안방이 되도록.</h2>
               <div className="space-y-12">
                  <div className="flex gap-8">
                    <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center flex-shrink-0 font-black text-2xl shadow-xl shadow-blue-600/20">01</div>
                    <div>
                      <h4 className="text-xl font-bold mb-3 text-gray-900">지속 가능한 비즈니스 모델</h4>
                      <p className="text-gray-500 font-light leading-relaxed">단발성 수출 성과에 집착하지 않습니다. 현지 소비자들이 브랜드를 일상에서 지속적으로 선택할 수 있는 '라이프스타일'로 자리매김하게 합니다.</p>
                    </div>
                  </div>
                  <div className="flex gap-8">
                    <div className="w-16 h-16 bg-blue-900 text-white rounded-2xl flex items-center justify-center flex-shrink-0 font-black text-2xl shadow-xl shadow-blue-900/20">02</div>
                    <div>
                      <h4 className="text-xl font-bold mb-3 text-gray-900">데이터 기반의 실무 전문성</h4>
                      <p className="text-gray-500 font-light leading-relaxed">추측이 아닌 데이터로 말합니다. 현지 주요 이커머스 트렌드와 오프라인 유통 채널의 실시간 피드백을 수집하여 최적의 전략을 도출합니다.</p>
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
            <h2 className="text-4xl font-black mb-6 tracking-tight">Trusted Global Partnerships</h2>
            <p className="text-gray-400 font-light max-w-2xl mx-auto text-lg leading-relaxed">
              우리는 말레이시아의 주요 유통 거점 및 정부 산하 기관들과 긴밀한 협력 관계를 유지하며 압도적인 시너지를 창출합니다.
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
              <h2 className="text-3xl font-black tracking-tight mb-4">현지 활동 스케치</h2>
              <p className="text-gray-400 font-light">Eaglewings는 현지에서 발로 뛰며 파트너사의 성공을 만들어갑니다.</p>
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
