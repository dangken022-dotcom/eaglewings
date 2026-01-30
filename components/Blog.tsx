
import React from 'react';

const posts = Array.from({ length: 9 }).map((_, i) => ({
  id: i + 1,
  title: `말레이시아 시장 진입 전략 Report #${i + 1}`,
  excerpt: '현지 소비자들의 구매 트렌드와 이커머스 시장의 변화를 분석한 최신 데이터 기반 보고서입니다.',
  source: 'Eaglewings Insight Lab',
  image: `https://picsum.photos/seed/${i + 10}/600/400`,
  category: i % 3 === 0 ? 'Market Trend' : i % 3 === 1 ? 'Logistics' : 'Marketing'
}));

const Blog: React.FC = () => {
  return (
    <div className="py-32 max-w-7xl mx-auto px-6 lg:px-12">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20">
        <div>
          <div className="text-blue-600 text-xs font-black tracking-widest uppercase mb-4">Expert Insights</div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter">Knowledge Base</h2>
        </div>
        <button className="hidden md:block text-sm font-bold border-b-2 border-blue-600 pb-1 hover:text-blue-600 transition-colors">VIEW ALL POSTS</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
        {posts.map((post) => (
          <div key={post.id} className="group cursor-pointer">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden mb-6 relative">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-black text-blue-600 tracking-widest">
                {post.category}
              </div>
            </div>
            <h3 className="text-xl font-black text-gray-900 mb-4 group-hover:text-blue-600 transition-colors tracking-tight leading-tight">
              {post.title}
            </h3>
            <p className="text-gray-500 text-sm font-light leading-relaxed mb-6 line-clamp-2">
              {post.excerpt}
            </p>
            <div className="flex items-center justify-between pt-6 border-t border-gray-100">
              <span className="text-[10px] font-black text-gray-400 tracking-widest uppercase">Source: {post.source}</span>
              <svg className="w-5 h-5 text-blue-600 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
