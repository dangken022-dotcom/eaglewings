
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import InquiryFloating from './components/InquiryFloating';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import SolutionsPage from './pages/SolutionsPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import BlogPostDetail from './pages/BlogPostDetail';
import AdminPage from './pages/AdminPage';
import { defaultSiteImages, SiteImages } from './data/siteImages';
import { Language } from './data/translations';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [selectedPostId, setSelectedPostId] = useState<number | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [siteImages, setSiteImages] = useState<SiteImages>(defaultSiteImages);
  const [lang, setLang] = useState<Language>('en');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (page: string, postId?: number) => {
    if (postId) {
      setSelectedPostId(postId);
    } else {
      setSelectedPostId(null);
    }
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const updateImages = (newImages: SiteImages) => {
    setSiteImages(newImages);
  };

  const toggleLang = (newLang: Language) => {
    setLang(newLang);
  };

  const renderPage = () => {
    if (currentPage === 'blog-detail' && selectedPostId) {
      return <BlogPostDetail postId={selectedPostId} onNavigate={navigateTo} siteImages={siteImages} lang={lang} />;
    }

    switch (currentPage) {
      case 'home': return <Home onNavigate={navigateTo} siteImages={siteImages} lang={lang} />;
      case 'about': return <AboutPage siteImages={siteImages} lang={lang} />;
      case 'solutions': return <SolutionsPage siteImages={siteImages} lang={lang} />;
      case 'blog': return <BlogPage onNavigate={navigateTo} siteImages={siteImages} lang={lang} />;
      case 'contact': return <ContactPage lang={lang} />;
      case 'admin': return <AdminPage currentImages={siteImages} onUpdate={updateImages} onNavigate={navigateTo} />;
      default: return <Home onNavigate={navigateTo} siteImages={siteImages} lang={lang} />;
    }
  };

  return (
    <div className="relative min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900 bg-white overflow-x-hidden">
      <Navbar 
        isScrolled={isScrolled} 
        currentPage={currentPage} 
        onNavigate={navigateTo} 
        lang={lang}
        onLangChange={toggleLang}
        siteImages={siteImages}
      />
      
      <div key={currentPage + (selectedPostId || '') + lang} className="animate-pageTransition">
        {renderPage()}
      </div>

      <Footer onNavigate={navigateTo} lang={lang} />
      <InquiryFloating />
      
      <style>{`
        @keyframes pageTransition {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-pageTransition {
          animation: pageTransition 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default App;
