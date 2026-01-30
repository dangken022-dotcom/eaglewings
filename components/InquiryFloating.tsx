
import React from 'react';

const InquiryFloating: React.FC = () => {
  return (
    <div className="fixed bottom-10 right-10 z-40 flex flex-col space-y-4 items-end">
      {/* Floating Buttons */}
      <div className="flex flex-col space-y-4">
        <button className="w-16 h-16 bg-[#FEE500] rounded-2xl shadow-2xl flex items-center justify-center hover:scale-110 transition-all group">
          <span className="font-black text-[10px] text-black tracking-tighter">KAKAO</span>
        </button>
        <button className="w-16 h-16 bg-blue-600 text-white rounded-2xl shadow-2xl flex items-center justify-center hover:scale-110 transition-all group">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default InquiryFloating;
