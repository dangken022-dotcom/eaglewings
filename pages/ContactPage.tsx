
import React from 'react';
import Contact from '../components/Contact';
import { Language, translations } from '../data/translations';

interface ContactPageProps {
  lang: Language;
}

const ContactPage: React.FC<ContactPageProps> = ({ lang }) => {
  const t = translations[lang].contact;

  return (
    <div className="pt-32 min-h-screen bg-gray-50">
       <div className="py-16 text-center">
         <div className="text-blue-600 text-[10px] font-black tracking-[0.3em] uppercase mb-4">{t.badge}</div>
         <h1 className="text-5xl md:text-6xl font-black text-gray-900 tracking-tighter mb-4">{t.title}</h1>
       </div>
       <Contact lang={lang} />
    </div>
  );
};

export default ContactPage;
