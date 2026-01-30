
import React from 'react';

// React.ReactNode를 사용하기 위해 React를 임포트합니다.
export interface ServiceItem {
  title: string;
  description: string;
  details: string[];
  icon: React.ReactNode;
}

export interface CaseStudy {
  id: number;
  brand: string;
  result: string;
  category: string;
  imageUrl: string;
  growth: string;
}

export interface InsightPost {
  title: string;
  date: string;
  excerpt: string;
  category: string;
}