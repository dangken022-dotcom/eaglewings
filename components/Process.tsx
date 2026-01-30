
import React from 'react';

const steps = [
  {
    title: 'Strategy & Analysis',
    desc: '시장 데이터와 소비자 구매 패턴 분석을 통해 최적의 진출 전략을 수립합니다.',
    items: ['시장성 테스트', '경쟁사 가격 분석', '타겟 세그먼트 선정']
  },
  {
    title: 'Setup & Compliance',
    desc: '현지에서 비즈니스를 수행하기 위한 모든 법적, 행정적 기반을 마련합니다.',
    items: ['NPRA 인허가', '할랄 가이드라인', '수입 권한 확보']
  },
  {
    title: 'Aggressive Marketing',
    desc: '인지도 확보를 위한 대규모 마케팅 캠페인과 바이럴 콘텐츠를 집행합니다.',
    items: ['KOL 바이럴', '틱톡 쇼케이스', '라이브 커머스']
  },
  {
    title: 'Expansion & Growth',
    desc: '온오프라인 유통 채널을 확장하고 데이터를 통한 지속 성장을 도모합니다.',
    items: ['오프라인 입점', 'CRM 마케팅', '주변국 확장']
  }
];

const Process: React.FC = () => {
  return (
    <div className="py-32 bg-gray-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-24">
          <div className="text-blue-400 text-xs font-black tracking-[0.3em] uppercase mb-4">The Success Roadmap</div>
          <h2 className="text-4xl md:text-6xl font-black leading-tight tracking-tight">How we work</h2>
        </div>

        <div className="relative">
          {/* Progress Line */}
          <div className="hidden lg:block absolute top-10 left-0 w-full h-px bg-white/10"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
            {steps.map((step, idx) => (
              <div key={idx} className="group">
                <div className="w-20 h-20 bg-blue-600 rounded-3xl flex items-center justify-center text-3xl font-black mb-10 shadow-2xl shadow-blue-500/30 group-hover:scale-110 transition-transform duration-500">
                  {idx + 1}
                </div>
                <h4 className="text-xl font-bold mb-4 tracking-tight">{step.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-8 font-light opacity-80 group-hover:opacity-100 transition-opacity">
                  {step.desc}
                </p>
                <div className="space-y-3">
                  {step.items.map((item, i) => (
                    <div key={i} className="flex items-center text-xs text-blue-400 font-bold uppercase tracking-widest">
                      <span className="w-1 h-1 bg-white rounded-full mr-2 opacity-30"></span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
