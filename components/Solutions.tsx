
import React from 'react';

const solutions = [
  {
    title: 'Brand Seeding Solution',
    category: '브랜드 시딩',
    desc: '시장 진입 초기, 타겟 소비자에게 브랜드를 각인시키는 필수 프로세스입니다.',
    items: ['NPRA 인허가 & 서류 대행', '현지 체험단 운영 (KOC)', '시장성 테스트 & 리포트', '샘플링 마케팅 캠페인'],
    icon: '🌱'
  },
  {
    title: 'Marketing Solution',
    category: '마케팅 솔루션',
    desc: '브랜드 인지도를 폭발적으로 확장하고 구매 전환을 극대화합니다.',
    items: ['KOL 메가 인플루언서 매칭', '숏폼(TikTok/Reels) 콘텐츠 제작', '라이브 커머스 정기 운영', '현지 SNS 공식 채널 관리'],
    icon: '🔥'
  },
  {
    title: 'Logistics Solution',
    category: '물류 솔루션',
    desc: '안전하고 빠른 현지 배송 인프라를 통해 고객 경험을 완성합니다.',
    items: ['쿠알라룸푸르 직영 창고 운영', '풀필먼트(WMS) 통합 관리', '현지 통관 및 행정 지원', '라스트마일 배송 & 반품 CS'],
    icon: '📦'
  }
];

const Solutions: React.FC = () => {
  return (
    <div className="py-32 max-w-7xl mx-auto px-6 lg:px-12">
      <div className="text-center mb-24">
        <div className="text-blue-600 text-xs font-black tracking-widest uppercase mb-4">Core Competency</div>
        <h2 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter">One-Stop Solution</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {solutions.map((s, idx) => (
          <div key={idx} className="bg-white p-12 rounded-[2.5rem] shadow-sm border border-gray-100 hover:shadow-2xl transition-all group">
            <div className="text-5xl mb-10 group-hover:scale-110 transition-transform">{s.icon}</div>
            <div className="text-blue-600 text-[10px] font-black tracking-widest uppercase mb-2">{s.category}</div>
            <h3 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">{s.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-8 font-light">{s.desc}</p>
            <ul className="space-y-4 pt-8 border-t border-gray-50">
              {s.items.map((item, i) => (
                <li key={i} className="flex items-center text-[13px] text-gray-400">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Solutions;
