
import React from 'react';
import { BarChart, Bar, ResponsiveContainer, Cell, XAxis, Tooltip } from 'recharts';
import { Language, translations } from '../data/translations';

interface TrustIndicatorsProps {
  lang: Language;
}

const data = [
  { name: '2021', value: 45 },
  { name: '2022', value: 120 },
  { name: '2023', value: 310 },
  { name: '2024', value: 580 },
];

const TrustIndicators: React.FC<TrustIndicatorsProps> = ({ lang }) => {
  const t = translations[lang].trust;

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {t.stats.map((stat, idx) => (
            <div key={idx} className="text-center group">
              <p className="text-gray-500 text-[11px] font-black mb-2 uppercase tracking-widest">{stat.label}</p>
              <h3 className="text-3xl md:text-5xl font-black text-blue-900 group-hover:scale-110 transition-transform duration-300 tracking-tighter">
                {stat.value}
              </h3>
              <p className="text-blue-600 text-[10px] mt-2 font-black uppercase tracking-widest">{stat.sub}</p>
            </div>
          ))}
        </div>

        <div className="bg-blue-900 rounded-[2.5rem] p-12 flex flex-col md:flex-row items-center justify-between text-white shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="md:w-1/2 mb-10 md:mb-0 pr-8 relative z-10 text-center md:text-left">
            <h4 className="text-3xl font-black mb-6 tracking-tight leading-tight whitespace-pre-line">{t.chartTitle}</h4>
            <p className="text-blue-200 text-lg font-light leading-relaxed">
              {t.chartDesc}
            </p>
          </div>
          <div className="md:w-1/2 h-56 w-full relative z-10">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <XAxis dataKey="name" stroke="#93c5fd" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  cursor={{fill: 'rgba(255,255,255,0.05)'}} 
                  contentStyle={{backgroundColor: '#1e3a8a', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: '#fff'}}
                  itemStyle={{color: '#fff'}}
                />
                <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === data.length - 1 ? '#3b82f6' : '#60a5fa'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustIndicators;
