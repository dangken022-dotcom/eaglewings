
import React from 'react';
import { getBlogPosts } from '../data/blogPosts';
import { SiteImages } from '../data/siteImages';
import { Language, translations } from '../data/translations';

interface BlogPageProps {
  onNavigate: (page: string, postId?: number) => void;
  siteImages: SiteImages;
  lang: Language;
}

const BlogPage: React.FC<BlogPageProps> = ({ onNavigate, siteImages, lang }) => {
  const t = translations[lang].home.blog;
  const posts = getBlogPosts(lang);

  return (
    <div className="pt-32">
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-24">
            <h1 className="text-5xl md:text-6xl font-black text-gray-900 tracking-tighter mb-6">{t.title}</h1>
            <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">Market insights delivered by local experts in Malaysia.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
            {posts.map(post => {
              const postImage = (siteImages as any)[`blog${post.id}`] || post.image;
              return (
                <div 
                  key={post.id} 
                  className="group cursor-pointer"
                  onClick={() => onNavigate('blog-detail', post.id)}
                >
                  <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden mb-8 shadow-2xl shadow-gray-200/50">
                     <img src={postImage} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={post.title} />
                  </div>
                  <div className="flex items-center gap-4 mb-4">
                     <span className="text-blue-600 text-[10px] font-black tracking-widest uppercase">{post.category}</span>
                     <span className="text-gray-300 text-[10px] font-black uppercase">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-black text-gray-900 mb-4 group-hover:text-blue-600 transition-colors tracking-tight leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-sm font-light leading-relaxed line-clamp-2 mb-6">
                    {post.excerpt}
                  </p>
                  <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                     <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Source: {post.source}</span>
                     <svg className="w-5 h-5 text-blue-600 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-24 flex justify-center space-x-4">
             <button className="w-12 h-12 rounded-2xl font-black text-sm bg-blue-600 text-white shadow-xl shadow-blue-500/30 transition-all">
               1
             </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
