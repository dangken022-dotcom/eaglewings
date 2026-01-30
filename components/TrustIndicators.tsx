
import React from 'react';
import { BarChart, Bar, ResponsiveContainer, Cell, XAxis, Tooltip } from 'recharts';

const data = [
  { name: '2021', value: 45 },
  { name: '2022', value: 120 },
  { name: '2023', value: 310 },
  { name: '2024 (현재)', value: 580 },
];

const TrustIndicators: React.FC = () => {
  const stats = [
    { label: '누적 파트너사', value: '250+', sub: '기업 신뢰' },
    { label: '수출 지원 품목', value: '1,200+', sub: '다양한 카테고리' },
    { label: '현지 인플루언서', value: '5,000+', sub: '압도적 네트워크' },
    { label: '연 매출 성장률', value: '240%', sub: '검증된 퍼포먼스' },
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center group">
              <p className="text-gray-500 text-sm font-medium mb-1 uppercase tracking-wider">{stat.label}</p>
              <h3 className="text-3xl md:text-5xl font-black text-blue-900 group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </h3>
              <p className="text-blue-600 text-xs mt-2 font-bold">{stat.sub}</p>
            </div>
          ))}
        </div>

        <div className="bg-blue-900 rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between text-white shadow-2xl">
          <div className="md:w-1/2 mb-10 md:mb-0 pr-8">
            <h4 className="text-3xl font-bold mb-4">매년 폭발적으로 증가하는<br />동남아 진출 성공 지표</h4>
            <p className="text-blue-200 text-lg font-light leading-relaxed">
              단순한 대행사가 아닙니다. 데이터 기반의 철저한 시장 분석을 통해 
              실패 없는 말레이시아 진출을 보장합니다.
            </p>
          </div>
          <div className="md:w-1/2 h-48 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <XAxis dataKey="name" stroke="#93c5fd" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  cursor={{fill: 'transparent'}} 
                  contentStyle={{backgroundColor: '#1e3a8a', border: 'none', borderRadius: '8px', color: '#fff'}}
                  itemStyle={{color: '#fff'}}
                />
                <Bar dataKey="value" radius={[4, 4, 0, 0]}>
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
