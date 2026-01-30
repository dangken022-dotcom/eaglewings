
import React from 'react';

const posts = [
  {
    title: '2024년 말레이시아 이커머스 트렌드 TOP 5',
    date: '2024.03.15',
    excerpt: '현재 말레이시아 시장에서 가장 주목해야 할 기술적 변화와 소비자 행태 분석 보고서입니다.',
    category: 'Market Trend'
  },
  {
    title: '말레이시아 진출을 위한 할랄 인증 기초 가이드',
    date: '2024.03.10',
    excerpt: '화장품 및 식품 기업이 반드시 알아야 할 할랄 인증 프로세스와 주의사항을 정리했습니다.',
    category: 'Regulation'
  },
  {
    title: 'TikTok Shop 말레이시아: 새로운 기회의 땅',
    date: '2024.02.28',
    excerpt: '틱톡 샵을 통한 라이브 커머스가 말레이시아 유통 판도를 어떻게 바꾸고 있는지 설명합니다.',
    category: 'Strategy'
  }
];

const Insights: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-black mb-6">Malaysia Market Insights</h2>
        <p className="text-gray-600 text-lg font-light max-w-2xl mx-auto">
          전문가가 전하는 현지 최신 정보를 통해 시장에 대한 이해도를 높이세요.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post, idx) => (
          <div key={idx} className="border border-gray-100 p-8 rounded-3xl hover:border-blue-500 hover:shadow-lg transition-all cursor-pointer group">
            <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded-full mb-6 group-hover:bg-blue-100 group-hover:text-blue-600">
              {post.category}
            </span>
            <h4 className="text-xl font-bold mb-4 leading-tight group-hover:text-blue-700 transition-colors">{post.title}</h4>
            <p className="text-gray-500 text-sm mb-6 font-light leading-relaxed">{post.excerpt}</p>
            <div className="flex items-center justify-between pt-6 border-t border-gray-50">
              <span className="text-gray-400 text-xs">{post.date}</span>
              <span className="text-blue-600 font-bold text-sm">Read More →</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Insights;
