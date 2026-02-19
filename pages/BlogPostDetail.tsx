
import React from 'react';
import { getBlogPosts } from '../data/blogPosts';
import { SiteImages } from '../data/siteImages';
import { Language } from '../data/translations';

interface BlogPostDetailProps {
  postId: number;
  onNavigate: (page: string) => void;
  siteImages: SiteImages;
  lang: Language;
}

const BlogPostDetail: React.FC<BlogPostDetailProps> = ({ postId, onNavigate, siteImages, lang }) => {
  const posts = getBlogPosts(lang);
  const post = posts.find(p => p.id === postId);

  if (!post) {
    return (
      <div className="pt-48 pb-24 text-center">
        <h2 className="text-2xl font-bold mb-4">Post not found.</h2>
        <button onClick={() => onNavigate('blog')} className="text-blue-600 font-bold">Return to list</button>
      </div>
    );
  }

  const postImage = (siteImages as any)[`blog${post.id}`] || post.image;

  return (
    <div className="pt-32 pb-32">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <button 
          onClick={() => onNavigate('blog')}
          className="flex items-center text-gray-400 hover:text-blue-600 transition-colors mb-10 group text-[11px] font-black tracking-widest uppercase"
        >
          <svg className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M7 16l-4-4m0 0l4-4m-4 4h18"/></svg>
          BACK TO INSIGHTS
        </button>
        
        <div className="flex items-center gap-4 mb-6">
          <span className="bg-blue-600 text-white text-[9px] font-black tracking-widest uppercase px-3 py-1 rounded-full">{post.category}</span>
          <span className="text-gray-300 text-[10px] font-black uppercase tracking-widest">{post.date}</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter leading-[1.1] mb-12">
          {post.title}
        </h1>
        
        <div className="aspect-[21/9] rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-2xl mb-24 border border-gray-100">
          <img src={postImage} className="w-full h-full object-cover" alt={post.title} />
        </div>

        <div className="max-w-3xl mx-auto">
          <article 
            className="blog-content-container"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          <div className="mt-32 p-12 bg-gray-50 rounded-[3rem] border border-gray-100 flex flex-col md:flex-row items-center gap-8">
            <div className="w-20 h-20 bg-blue-600 rounded-3xl flex items-center justify-center text-white font-black text-2xl shadow-xl shadow-blue-600/20">E</div>
            <div className="flex-1 text-center md:text-left">
              <h4 className="text-xl font-black text-gray-900 mb-2">Eaglewings Insight Lab</h4>
              <p className="text-gray-500 text-sm font-light leading-relaxed mb-6">
                This report was prepared through reviews by the local operations and legal teams of Eaglewings Agency in Malaysia. It is a professional insight report published regularly for Korean companies wishing to enter the Malaysian market.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <button onClick={() => onNavigate('contact')} className="bg-blue-600 text-white px-8 py-3 rounded-2xl text-xs font-black tracking-widest hover:bg-blue-700 transition-all uppercase">Consultation</button>
                <button onClick={() => onNavigate('solutions')} className="bg-white border border-gray-200 text-gray-600 px-8 py-3 rounded-2xl text-xs font-black tracking-widest hover:bg-gray-50 transition-all uppercase">All Solutions</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .blog-content-container {
          color: #374151;
          font-size: 1.125rem;
          line-height: 1.8;
          font-weight: 300;
        }
        .blog-content-container .lead {
          font-size: 1.5rem;
          color: #111827;
          font-weight: 700;
          line-height: 1.5;
          margin-bottom: 3rem;
          letter-spacing: -0.02em;
          border-left: 4px solid #2563eb;
          padding-left: 2rem;
        }
        .blog-content-container h3 {
          font-weight: 900;
          font-size: 2.25rem;
          color: #111827;
          margin-top: 5rem;
          margin-bottom: 2rem;
          letter-spacing: -0.04em;
          line-height: 1.2;
        }
        .blog-content-container h4 {
          font-weight: 900;
          font-size: 1.5rem;
          color: #1e3a8a;
          margin-top: 3rem;
          margin-bottom: 1.5rem;
          letter-spacing: -0.02em;
        }
        .blog-content-container p {
          margin-bottom: 2rem;
        }
        .blog-content-container ul, .blog-content-container ol {
          margin-bottom: 3rem;
          padding-left: 1.5rem;
          list-style-type: disc;
        }
        .blog-content-container li {
          margin-bottom: 1rem;
        }
        .blog-content-container strong {
          font-weight: 900;
          color: #111827;
        }
        .blog-content-container blockquote {
          margin: 4rem 0;
          padding: 3rem;
          background: #f8fafc;
          border-radius: 2.5rem;
          font-style: italic;
          color: #475569;
          font-size: 1.25rem;
          position: relative;
        }
        .blog-content-container .highlight-box {
          margin: 4rem 0;
          padding: 3rem;
          background: #eff6ff;
          border-radius: 2.5rem;
          border: 1px solid #dbeafe;
        }
        .blog-content-container .highlight-box h4 {
          margin-top: 0;
          color: #1e40af;
        }
        .blog-content-container .footer-source {
          margin-top: 6rem;
          padding-top: 2rem;
          border-top: 1px solid #f3f4f6;
          font-size: 0.75rem;
          color: #9ca3af;
          font-weight: 700;
          letter-spacing: 0.05em;
        }
      `}</style>
    </div>
  );
};

export default BlogPostDetail;
