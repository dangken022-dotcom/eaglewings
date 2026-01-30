
import React from 'react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row justify-between gap-16 mb-24">
          <div className="max-w-sm">
            <button onClick={() => onNavigate('home')} className="text-2xl font-black tracking-tighter text-blue-900 mb-8">EAGLEWINGS</button>
            <p className="text-gray-500 text-sm font-light leading-relaxed mb-10">
              Eaglewings Agency는 대한민국 브랜드의 성공적인 글로벌 시장 진출을 돕기 위해 존재합니다. 데이터와 현지 인프라가 결합된 실무 중심의 솔루션을 제공합니다.
            </p>
            <div className="flex space-x-5">
              {['LinkedIn', 'Facebook', 'Instagram'].map(sns => (
                <a key={sns} href="#" className="text-[10px] font-black tracking-widest uppercase text-gray-400 hover:text-blue-600 transition-colors">
                  {sns}
                </a>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-24">
            <div>
              <h4 className="text-xs font-black tracking-widest uppercase mb-8 text-gray-900">Solutions</h4>
              <ul className="space-y-4 text-[13px] text-gray-500 font-light">
                <li onClick={() => onNavigate('solutions')} className="hover:text-blue-600 cursor-pointer transition-colors">브랜드 시딩</li>
                <li onClick={() => onNavigate('solutions')} className="hover:text-blue-600 cursor-pointer transition-colors">마케팅 솔루션</li>
                <li onClick={() => onNavigate('solutions')} className="hover:text-blue-600 cursor-pointer transition-colors">물류 솔루션</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-black tracking-widest uppercase mb-8 text-gray-900">Company</h4>
              <ul className="space-y-4 text-[13px] text-gray-500 font-light">
                <li onClick={() => onNavigate('about')} className="hover:text-blue-600 cursor-pointer transition-colors">ABOUT</li>
                <li onClick={() => onNavigate('solutions')} className="hover:text-blue-600 cursor-pointer transition-colors">SOLUTIONS</li>
                <li onClick={() => onNavigate('blog')} className="hover:text-blue-600 cursor-pointer transition-colors">BLOG</li>
                <li onClick={() => onNavigate('admin')} className="hover:text-blue-600 cursor-pointer transition-colors mt-6 font-black text-gray-300">ADMIN</li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h4 className="text-xs font-black tracking-widest uppercase mb-8 text-gray-900">Contact</h4>
              <ul className="space-y-4 text-[13px] text-gray-500 font-light">
                {/* 하단 내용 삭제됨 */}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-400 font-bold tracking-widest uppercase">
          <p>© 2024 EAGLEWINGS AGENCY. ALL RIGHTS RESERVED.</p>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <a href="#" className="hover:text-gray-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-600 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
