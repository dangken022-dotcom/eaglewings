
import React from 'react';
import { Language, translations } from '../data/translations';

interface ContactProps {
  lang: Language;
}

const Contact: React.FC<ContactProps> = ({ lang }) => {
  const t = translations[lang].contact;

  return (
    <div className="py-32 bg-white max-w-7xl mx-auto px-6 lg:px-12">
      <div className="text-center mb-24">
        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">{t.sub}</h2>
        <p className="text-gray-400 text-lg font-light">{t.desc}</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left: Contact Info */}
        <div className="w-full lg:w-[350px] bg-blue-50/50 rounded-[2.5rem] p-12 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-black text-gray-900 mb-12">{t.info.title}</h3>
            
            <div className="space-y-10">
              <div className="flex items-start space-x-5">
                <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center flex-shrink-0">
                   <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                </div>
                <div>
                  <p className="text-[10px] font-black text-gray-400 tracking-widest uppercase mb-1">{t.info.addressLabel}</p>
                  <p className="text-sm text-gray-700 leading-relaxed font-medium">VO3-06-18, DESIGNER OFFICE Lingkaran SV, Maluri, 55100 Kuala Lumpur</p>
                </div>
              </div>

              <div className="flex items-start space-x-5">
                <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center flex-shrink-0">
                   <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                </div>
                <div>
                  <p className="text-[10px] font-black text-gray-400 tracking-widest uppercase mb-1">{t.info.phoneLabel}</p>
                  <p className="text-sm text-gray-700 font-black">033-132-5670 / 012-973-8914</p>
                </div>
              </div>

              <div className="flex items-start space-x-5">
                <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center flex-shrink-0">
                   <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </div>
                <div>
                  <p className="text-[10px] font-black text-gray-400 tracking-widest uppercase mb-1">{t.info.emailLabel}</p>
                  <p className="text-sm text-gray-700 font-medium">uxc8917@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-10 border-t border-gray-100 mt-10">
            <h4 className="text-xs font-black text-gray-400 tracking-widest uppercase mb-6">{t.info.managerLabel}</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-sm font-bold text-gray-700">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span>Peter kang (Direct)</span>
              </div>
              <div className="flex items-center space-x-3 text-sm font-bold text-gray-700">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Luke Lim (Operation)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Form */}
        <div className="flex-1 bg-white border border-gray-100 rounded-[2.5rem] p-10 md:p-16 shadow-2xl shadow-gray-200/50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-3">
              <label className="text-[10px] font-black text-gray-400 tracking-widest uppercase ml-1">{t.form.company}</label>
              <input type="text" placeholder="e.g. Musa Beauty Co." className="w-full bg-gray-50 border-none rounded-2xl px-6 py-5 focus:ring-2 focus:ring-blue-500 outline-none transition-all placeholder:text-gray-300" />
            </div>
            <div className="space-y-3">
              <label className="text-[10px] font-black text-gray-400 tracking-widest uppercase ml-1">{t.form.person}</label>
              <input type="text" placeholder="Full Name" className="w-full bg-gray-50 border-none rounded-2xl px-6 py-5 focus:ring-2 focus:ring-blue-500 outline-none transition-all placeholder:text-gray-300" />
            </div>
            <div className="space-y-3">
              <label className="text-[10px] font-black text-gray-400 tracking-widest uppercase ml-1">{t.form.email}</label>
              <input type="email" placeholder="email@example.com" className="w-full bg-gray-50 border-none rounded-2xl px-6 py-5 focus:ring-2 focus:ring-blue-500 outline-none transition-all placeholder:text-gray-300" />
            </div>
            <div className="space-y-3">
              <label className="text-[10px] font-black text-gray-400 tracking-widest uppercase ml-1">{t.form.service}</label>
              <select className="w-full bg-gray-50 border-none rounded-2xl px-6 py-5 focus:ring-2 focus:ring-blue-500 outline-none transition-all text-gray-700 appearance-none">
                <option>Brand Seeding</option>
                <option>Marketing Solution</option>
                <option>Logistics & Supply Chain</option>
                <option>Direct Investment</option>
              </select>
            </div>
          </div>
          <div className="space-y-3 mb-10">
            <label className="text-[10px] font-black text-gray-400 tracking-widest uppercase ml-1">{t.form.message}</label>
            <textarea placeholder={t.form.placeholderMsg} rows={6} className="w-full bg-gray-50 border-none rounded-2xl px-6 py-5 focus:ring-2 focus:ring-blue-500 outline-none transition-all placeholder:text-gray-300 resize-none"></textarea>
          </div>
          <button className="w-full bg-[#9587DA] text-white py-6 rounded-2xl font-black tracking-widest hover:bg-[#8374CA] transition-all shadow-xl shadow-[#9587DA]/20 flex items-center justify-center space-x-3 uppercase">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>
            <span>{t.form.btn}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
