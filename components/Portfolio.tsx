
import React from 'react';

const cases = [
  {
    id: 1,
    brand: 'K-Beauty Brand A',
    result: '출시 6개월 만에 월 매출 3억 돌파',
    category: '뷰티/스킨케어',
    imageUrl: 'https://picsum.photos/id/101/600/400',
    growth: '+320% YoY'
  },
  {
    id: 2,
    brand: 'Food Tech C',
    result: '말레이시아 내 오프라인 매장 10개점 입점',
    category: '식음료/F&B',
    imageUrl: 'https://picsum.photos/id/102/600/400',
    growth: '10개점 확장'
  },
  {
    id: 3,
    brand: 'Fashion Brand B',
    result: 'TikTok Shop 뷰티 카테고리 랭킹 1위',
    category: '패션/잡화',
    imageUrl: 'https://picsum.photos/id/103/600/400',
    growth: '카테고리 TOP 1'
  }
];

const Portfolio: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
        <div className="mb-8 md:mb-0">
          <h2 className="text-blue-400 font-bold text-sm tracking-widest uppercase mb-3">Portfolio</h2>
          <h3 className="text-4xl md:text-5xl font-black">실제 성공 사례로 증명합니다</h3>
        </div>
        <button className="text-white border-b-2 border-blue-500 pb-1 font-bold hover:text-blue-400 transition-colors">
          전체 사례 보기
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cases.map((c) => (
          <div key={c.id} className="group relative overflow-hidden rounded-3xl bg-gray-800">
            <img 
              src={c.imageUrl} 
              alt={c.brand} 
              className="w-full h-80 object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-8 flex flex-col justify-end">
              <span className="text-blue-400 text-xs font-bold mb-2">{c.category}</span>
              <h4 className="text-2xl font-bold mb-2">{c.brand}</h4>
              <p className="text-gray-300 text-sm mb-4">{c.result}</p>
              <div className="flex items-center justify-between">
                <span className="bg-blue-600 px-3 py-1 rounded text-xs font-black uppercase">{c.growth}</span>
                <svg className="w-6 h-6 text-white transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 p-12 bg-gray-800 rounded-3xl text-center border border-gray-700">
        <h4 className="text-2xl font-bold mb-6">현지 활동 스케치</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1,2,3,4].map(i => (
            <img 
              key={i} 
              src={`https://picsum.photos/id/${10 + i}/300/300`} 
              alt="Activity" 
              className="rounded-xl grayscale hover:grayscale-0 transition-all cursor-pointer" 
            />
          ))}
        </div>
        <p className="mt-8 text-gray-400 font-light">실제로 발로 뛰며 현장의 목소리를 듣는 Eaglewings입니다.</p>
      </div>
    </div>
  );
};

export default Portfolio;
