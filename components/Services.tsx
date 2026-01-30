
import React from 'react';

const solutions = [
  {
    title: 'Market Entry & NPRA',
    category: '인허가 솔루션',
    description: '말레이시아 식약청(NPRA)의 까다로운 기준을 완벽하게 충족하는 전문 인허가 대행 서비스를 제공합니다.',
    items: ['화장품·식품 NPRA 등록', '할랄(JAKIM) 인증 컨설팅', '브랜드 소유권 권리 보호', '수입 통관 행정 지원'],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: 'Social & Viral Marketing',
    category: '마케팅 솔루션',
    description: '브랜드 인지도를 폭발적으로 높이는 현지 최적화 콘텐츠 제작 및 바이럴 마케팅을 집행합니다.',
    items: ['KOL/KOC 인플루언서 매칭', '숏폼(TikTok/Reels) 제작', '라이브 커머스 전문 채널 운영', 'SNS 커뮤니티 관리'],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: 'Logistics & Warehouse',
    category: '물류 솔루션',
    description: '쿠알라룸푸르 거점의 직영 창고를 기반으로 한 풀필먼트 및 현지 라스트마일 배송을 책임집니다.',
    items: ['3PL 풀필먼트 서비스', '온습도 관리 특화 보관', '실시간 재고 추적 시스템', '현지 반품/CS 대행'],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    )
  },
  {
    title: 'Distribution Channel',
    category: '유통 솔루션',
    description: 'Watsons, Sasa 등 주요 오프라인 드럭스토어와 온라인 마켓플레이스 입점을 지원합니다.',
    items: ['메이저 오프라인 채널 입점', 'Shopee/Lazada 스토어 관리', '현지 결제 게이트웨이 연동', 'B2B 도매 바이어 매칭'],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    )
  }
];

const Services: React.FC = () => {
  return (
    <div className="py-32 max-w-7xl mx-auto px-6 lg:px-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-24">
        <div className="max-w-2xl">
          <div className="text-blue-600 text-xs font-black tracking-widest uppercase mb-4">Our Core Solutions</div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight tracking-tight">
            End-to-End Business<br />
            Support in Malaysia
          </h2>
        </div>
        <p className="text-gray-500 text-lg font-light md:max-w-xs mt-6 md:mt-0">
          단순한 수출을 넘어 현지에서의 자생적인 성장을 위한 모든 인프라를 연결합니다.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {solutions.map((item, idx) => (
          <div key={idx} className="bg-white p-12 rounded-[2.5rem] shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-gray-100 group">
            <div className="flex items-center justify-between mb-10">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                {item.icon}
              </div>
              <span className="text-gray-300 font-black text-2xl">0{idx + 1}</span>
            </div>
            <div className="text-blue-600 text-[10px] font-black tracking-widest uppercase mb-2">{item.category}</div>
            <h3 className="text-2xl font-black text-gray-900 mb-4">{item.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-8 font-light">{item.description}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 pt-8 border-t border-gray-50">
              {item.items.map((li, i) => (
                <div key={i} className="flex items-center text-[13px] text-gray-400">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 opacity-50"></span>
                  {li}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
