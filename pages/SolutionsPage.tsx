
import React from 'react';
import { SiteImages } from '../data/siteImages';

interface SolutionsPageProps {
  siteImages: SiteImages;
}

const SolutionsPage: React.FC<SolutionsPageProps> = ({ siteImages }) => {
  const solutions = [
    {
      id: '01',
      title: 'Brand Seeding Solution',
      label: '브랜드 시딩',
      desc: '시장 진입 전, 현지 소비자들의 실제 반응을 이끌어내고 인허가를 완비하는 가장 중요한 단계입니다.',
      features: ['NPRA / JAKIM 인증 대행', '현지 체험단 마케팅', '시장성 리포트 발행', '샘플링 프로모션 운영'],
      bg: 'bg-white',
      image: siteImages.solution1
    },
    {
      id: '02',
      title: 'Marketing Solution',
      label: '마케팅 솔루션',
      desc: '이미 진입한 브랜드를 현지 트렌드에 맞춰 폭발적으로 성장시키는 퍼포먼스 마케팅 단계입니다.',
      features: ['KOL 메가 인플루언서 캠페인', '공식 인스타그램/틱톡 채널 운영', '라이브 커머스 전문 스튜디오 연동', '현지 유통 채널 바이럴'],
      bg: 'bg-blue-50/50',
      image: siteImages.solution2
    },
    {
      id: '03',
      title: 'Logistics Solution',
      label: '물류 솔루션',
      desc: '배송 경쟁력이 곧 브랜드 경쟁력입니다. 직영 창고를 통해 압도적인 고객 경험을 제공합니다.',
      features: ['쿠알라룸푸르 거점 3PL 풀필먼트', '온도/습도 관리 특화 보관', '실시간 재고 연동 시스템', 'B2B/B2C 통합 배송 지원'],
      bg: 'bg-white',
      image: siteImages.solution3
    }
  ];

  return (
    <div className="pt-32">
      <section className="py-32 bg-gray-900 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={siteImages.hero} className="w-full h-full object-cover blur-sm" alt="Background" />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
           <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-tight">Our <span className="text-blue-500">Solutions</span></h1>
           <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto leading-relaxed">
             말레이시아 비즈니스의 시작부터 끝까지,<br />
             데이터와 현지 인프라가 결합된 완벽한 성공 로드맵을 제안합니다.
           </p>
        </div>
      </section>

      {solutions.map((s, idx) => (
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
