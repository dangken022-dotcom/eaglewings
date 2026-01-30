
import React, { useState } from 'react';
import { SiteImages } from '../data/siteImages';

interface AdminPageProps {
  currentImages: SiteImages;
  onUpdate: (newImages: SiteImages) => void;
  onNavigate: (page: string) => void;
}

const AdminPage: React.FC<AdminPageProps> = ({ currentImages, onUpdate, onNavigate }) => {
  const [images, setImages] = useState<SiteImages>(currentImages);
  const [success, setSuccess] = useState(false);
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState(false);

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === '1212') {
      setIsAuthenticated(true);
      setError(false);
    } else {
      setError(true);
      setPassword('');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setImages(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    onUpdate(images);
    setSuccess(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => setSuccess(false), 3000);
  };

  const ImageInput = ({ label, name, value }: { label: string, name: string, value: string }) => (
    <div className="space-y-3">
      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600 block">{label}</label>
      <input 
        type="text" 
        name={name}
        value={value} 
        onChange={handleChange}
        className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-xs focus:ring-2 focus:ring-blue-500 outline-none font-mono"
      />
      <div className="aspect-video rounded-2xl overflow-hidden bg-gray-100 border border-gray-100 shadow-sm relative group">
        <img src={value} alt="Preview" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
      </div>
    </div>
  );

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-6">
        <div className="max-w-md w-full text-center">
          <div className="w-20 h-20 bg-blue-600 rounded-3xl flex items-center justify-center text-white mx-auto mb-10 shadow-2xl shadow-blue-600/20">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h1 className="text-3xl font-black text-gray-900 mb-2 tracking-tighter">Admin Access</h1>
          <p className="text-gray-400 text-sm font-light mb-10">관리자 전용 페이지입니다. 비밀번호를 입력해주세요.</p>
          <form onSubmit={handleAuth} className="space-y-4">
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••"
              autoFocus
              className={`w-full bg-gray-50 border-2 ${error ? 'border-red-500' : 'border-gray-100'} rounded-2xl px-6 py-4 text-center text-2xl tracking-[1em] focus:ring-2 focus:ring-blue-500 outline-none transition-all`}
            />
            {error && <p className="text-red-500 text-xs font-bold animate-pulse">비밀번호가 일치하지 않습니다.</p>}
            <button type="submit" className="w-full bg-blue-600 text-white py-5 rounded-2xl font-black text-sm tracking-widest hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 active:scale-95">
              인증하기
            </button>
          </form>
          <button onClick={() => onNavigate('home')} className="mt-8 text-gray-300 hover:text-gray-900 text-[10px] font-black tracking-widest uppercase transition-colors">
            ← Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-32 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="text-4xl font-black text-gray-900 mb-2 tracking-tighter">Site-wide Image Administration</h1>
            <p className="text-gray-500 font-light">사이트의 모든 사진을 위치별로 관리하고 실시간으로 교체합니다.</p>
          </div>
          <div className="flex items-center gap-4">
             {success && <span className="text-green-600 font-black text-xs animate-bounce uppercase tracking-widest">✓ Successfully Saved</span>}
             <button onClick={() => setIsAuthenticated(false)} className="text-[10px] font-black text-red-500 border border-red-100 px-6 py-3 rounded-xl hover:bg-red-50 transition-all uppercase tracking-widest">
               LOGOUT
             </button>
          </div>
        </div>

        <div className="space-y-12">
          {/* Section: Main Layout */}
          <div className="bg-white rounded-[2.5rem] shadow-xl border border-gray-100 p-10">
            <h3 className="text-lg font-black text-gray-900 mb-8 pb-4 border-b border-gray-50 flex items-center gap-3">
              <span className="w-2 h-6 bg-blue-600 rounded-full"></span>
              MAIN LAYOUT
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <ImageInput label="Hero Background" name="hero" value={images.hero} />
              <ImageInput label="About Story Main" name="aboutMain" value={images.aboutMain} />
            </div>
          </div>

          {/* Section: Solutions Page */}
          <div className="bg-white rounded-[2.5rem] shadow-xl border border-gray-100 p-10">
            <h3 className="text-lg font-black text-gray-900 mb-8 pb-4 border-b border-gray-50 flex items-center gap-3">
              <span className="w-2 h-6 bg-blue-400 rounded-full"></span>
              SOLUTIONS PAGE IMAGES
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ImageInput label="Solution 01" name="solution1" value={images.solution1} />
              <ImageInput label="Solution 02" name="solution2" value={images.solution2} />
              <ImageInput label="Solution 03" name="solution3" value={images.solution3} />
            </div>
          </div>

          {/* Section: Activity Sketch */}
          <div className="bg-white rounded-[2.5rem] shadow-xl border border-gray-100 p-10">
            <h3 className="text-lg font-black text-gray-900 mb-8 pb-4 border-b border-gray-50 flex items-center gap-3">
              <span className="w-2 h-6 bg-purple-400 rounded-full"></span>
              ACTIVITY & SKETCH (About Bottom)
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              <ImageInput label="Sketch 01" name="sketch1" value={images.sketch1} />
              <ImageInput label="Sketch 02" name="sketch2" value={images.sketch2} />
              <ImageInput label="Sketch 03" name="sketch3" value={images.sketch3} />
              <ImageInput label="Sketch 04" name="sketch4" value={images.sketch4} />
            </div>
          </div>

          {/* Section: Blog Posts */}
          <div className="bg-white rounded-[2.5rem] shadow-xl border border-gray-100 p-10">
            <h3 className="text-lg font-black text-gray-900 mb-8 pb-4 border-b border-gray-50 flex items-center gap-3">
              <span className="w-2 h-6 bg-green-400 rounded-full"></span>
              BLOG POST IMAGES
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => (
                <ImageInput 
                  key={i} 
                  label={`Blog Post #${i}`} 
                  name={`blog${i}`} 
                  value={(images as any)[`blog${i}`]} 
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 bg-blue-900 text-white rounded-[2.5rem] p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl shadow-blue-900/30">
          <div className="max-w-xl text-center md:text-left">
            <h4 className="text-2xl font-black mb-4 tracking-tight">작업을 완료하셨나요?</h4>
            <p className="text-blue-200 font-light text-sm leading-relaxed">
              변경사항은 저장 즉시 모든 방문자에게 실시간으로 반영됩니다. 저장하기 전 이미지 주소가 정확한지 다시 한번 확인해주세요.
            </p>
          </div>
          <button 
            onClick={handleSave}
            className="bg-white text-blue-900 px-16 py-6 rounded-2xl font-black text-sm tracking-[0.2em] hover:bg-blue-50 transition-all shadow-xl active:scale-95 whitespace-nowrap"
          >
            SAVE CHANGES
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
