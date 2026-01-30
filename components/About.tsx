
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Slogan & Vision */}
        <div className="mb-32">
          <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 text-[10px] font-black tracking-[0.2em] rounded-full mb-8 uppercase">
            Slogan & Vision
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-12 leading-[1.1] tracking-tighter">
            Your Local Partner <br />
            for <span className="text-blue-600">Global Scale.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <p className="text-gray-500 text-xl md:text-2xl font-light leading-relaxed">
              우리의 비전은 대한민국 브랜드가 문화와 언어의 장벽을 넘어 말레이시아 시장의 주역이 되도록 돕는 것입니다. Eaglewings는 단순한 대행사를 넘어, 당신의 브랜드가 현지에서 자생할 수 있는 '뿌리'를 내리게 합니다.
            </p>
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center flex-shrink-0 font-bold">01</div>
                <div>
                  <h4 className="text-xl font-bold mb-2 tracking-tight text-gray-900">신뢰와 전문성</h4>
                  <p className="text-gray-500 text-sm font-light">수백 건의 성공적인 진출 사례를 통한 데이터 기반 전략</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-blue-900 text-white rounded-2xl flex items-center justify-center flex-shrink-0 font-bold">02</div>
                <div>
                  <h4 className="text-xl font-bold mb-2 tracking-tight text-gray-900">현지 중심의 사고</h4>
                  <p className="text-gray-500 text-sm font-light">쿠알라룸푸르 현지 팀의 실시간 시장 대응 시스템</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Partnership */}
        <div className="pt-24 border-t border-gray-100">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="max-w-xs">
              <h3 className="text-2xl font-black mb-4 tracking-tight">Global Partnership</h3>
              <p className="text-gray-400 text-sm font-light">주요 유통 채널 및 정부 기관과의 강력한 네트워크를 보유하고 있습니다.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-12 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
              {['WATSONS', 'SASA', 'GUARDIAN', 'SHOPEE', 'LAZADA'].map(brand => (
                <span key={brand} className="text-2xl font-black tracking-tighter">{brand}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
