
export type Language = 'en' | 'ko';

export const translations = {
  en: {
    nav: {
      home: 'HOME',
      about: 'ABOUT',
      solutions: 'SOLUTIONS',
      blog: 'BLOG',
      contact: 'CONTACT'
    },
    hero: {
      badge: 'Malaysia Market Entry Expert',
      title1: 'Build your',
      titleAccent: 'Global Presence',
      title2: 'in Malaysia.',
      desc: 'Beyond simple entry, to overwhelming success. We give you the safest wings through local infrastructure and data.',
      btnSolutions: 'OUR SOLUTIONS',
      btnLearn: 'LEARN MORE'
    },
    trust: {
      stats: [
        { label: 'Partners', value: '250+', sub: 'Corporate Trust' },
        { label: 'Export Items', value: '1,200+', sub: 'Diverse Categories' },
        { label: 'Influencers', value: '5,000+', sub: 'Local Network' },
        { label: 'Growth Rate', value: '240%', sub: 'Proven Performance' }
      ],
      chartTitle: 'Explosively Increasing Success Indicators\nin Southeast Asia Each Year',
      chartDesc: 'We are not just an agency. We guarantee a fail-proof entry into Malaysia through thorough data-based market analysis.'
    },
    home: {
      who: {
        badge: 'Who We Are',
        title: 'The Most Trusted Local Hub for Global Brands.',
        desc: 'Beyond simple agency, we help brands settle in the Malaysian market with local infrastructure and a strong network. Our vision is to let your brand take root to survive locally.',
        more: 'LEARN ABOUT OUR STORY'
      },
      solutions: {
        badge: 'Core Competency',
        title: 'Business Solutions',
        viewAll: 'VIEW ALL SOLUTIONS',
        items: [
          { id: 'solutions', icon: '🌱', title: 'Brand Seeding', desc: 'Initial market entry and brand awareness' },
          { id: 'solutions', icon: '🔥', title: 'Marketing', desc: 'Influencer and SNS viral campaigns' },
          { id: 'solutions', icon: '📦', title: 'Logistics', desc: 'Fulfillment services based in KL' }
        ]
      },
      blog: {
        badge: 'Latest Insights',
        title: 'Expert Insights',
        viewAll: 'VIEW ALL POSTS'
      },
      contact: {
        title: 'Market Entry, Start with Experts.',
        desc: 'We guide you through the entire process, from complex licensing to logistics and marketing, transparently and safely.',
        btn: 'REQUEST PROPOSAL'
      }
    },
    about: {
      badge: 'About Eaglewings',
      title1: 'Beyond',
      title2: 'Agency,',
      title3: 'Your',
      title4: 'Local Hub.',
      desc: 'Eaglewings was born to break the "invisible barriers" that Korean brands face in overseas markets. We are the most powerful local hub connecting local language, culture, administration, and logistics infrastructure into one.',
      vision: {
        title: 'Making Malaysia the Second Home for Your Brand.',
        item1Title: 'Sustainable Business Model',
        item1Desc: 'We don\'t obsess over one-off export results. We position the brand as a "lifestyle" that local consumers continuously choose.',
        item2Title: 'Data-driven Professionalism',
        item2Desc: 'We speak with data, not guesses. We derive optimal strategies by collecting real-time feedback from major e-commerce and offline channels.'
      },
      partnershipTitle: 'Trusted Global Partnerships',
      partnershipDesc: 'We maintain close cooperative relationships with major distribution hubs and government organizations in Malaysia.'
    },
    solutions: {
      header: 'Our',
      headerAccent: 'Solutions',
      desc: 'From the start to the end of your business in Malaysia, we propose a perfect success roadmap combining data and local infrastructure.',
      items: [
        {
          id: '01',
          title: 'Brand Seeding Solution',
          label: 'Brand Seeding',
          desc: 'The most important stage to elicit real reactions from local consumers and complete licensing before entry.',
          features: ['NPRA / JAKIM Agency', 'Local Reviewer Marketing', 'Marketability Reports', 'Sampling Promotions']
        },
        {
          id: '02',
          title: 'Marketing Solution',
          label: 'Marketing Solution',
          desc: 'A performance marketing stage that explosively grows brands that have already entered the market according to local trends.',
          features: ['KOL Mega Influencer Campaign', 'Official SNS Channel Operation', 'Live Commerce Studio Integration', 'Retail Channel Viral']
        },
        {
          id: '03',
          title: 'Logistics Solution',
          label: 'Logistics Solution',
          desc: 'Delivery competitiveness is brand competitiveness. We provide an overwhelming customer experience through direct warehouses.',
          features: ['KL Hub 3PL Fulfillment', 'Temp/Humidity Controlled Storage', 'Real-time Inventory System', 'B2B/B2C Integrated Support']
        }
      ]
    },
    contact: {
      badge: 'Get in touch',
      title: 'Partner with Us',
      sub: 'Ready to move your brand?',
      desc: 'Request a customized logistics and marketing proposal.',
      form: {
        company: 'Company Name',
        person: 'Contact Person',
        email: 'Email',
        service: 'Service of Interest',
        message: 'Message',
        placeholderMsg: 'Tell us about your goals in Malaysia...',
        btn: 'SEND'
      },
      info: {
        title: 'Contact',
        addressLabel: 'Address',
        phoneLabel: 'Phone',
        emailLabel: 'Email',
        managerLabel: 'Managers'
      }
    },
    footer: {
      desc: 'Eaglewings Agency exists to help brands succeed in global markets. We provide practical solutions combining data and local infrastructure.',
      solutions: 'Solutions',
      company: 'Company',
      contact: 'Contact'
    }
  },
  ko: {
    nav: {
      home: '홈',
      about: '회사소개',
      solutions: '솔루션',
      blog: '블로그',
      contact: '문의하기'
    },
    hero: {
      badge: '말레이시아 진출 공식 파트너',
      title1: '귀하의',
      titleAccent: '글로벌 브랜드',
      title2: '말레이시아에서 구축하세요.',
      desc: '단순한 진출을 넘어 압도적인 성공으로. 현지 인프라와 데이터를 통해 가장 안전한 날개를 달아드립니다.',
      btnSolutions: '우리의 솔루션',
      btnLearn: '더 알아보기'
    },
    trust: {
      stats: [
        { label: '누적 파트너사', value: '250+', sub: '기업 신뢰' },
        { label: '수출 지원 품목', value: '1,200+', sub: '다양한 카테고리' },
        { label: '현지 인플루언서', value: '5,000+', sub: '압도적 네트워크' },
        { label: '연 매출 성장률', value: '240%', sub: '검증된 퍼포먼스' }
      ],
      chartTitle: '매년 폭발적으로 증가하는\n동남아 진출 성공 지표',
      chartDesc: '단순한 대행사가 아닙니다. 데이터 기반의 철저한 시장 분석을 통해 실패 없는 말레이시아 진출을 보장합니다.'
    },
    home: {
      who: {
        badge: 'Who We Are',
        title: '대한민국 브랜드의 가장 신뢰받는 현지 허브.',
        desc: '단순한 대행을 넘어 현지 인프라와 강력한 네트워크로 대한민국 브랜드의 말레이시아 시장 안착을 돕습니다. 우리의 비전은 당신의 브랜드가 현지에서 자생할 수 있는 뿌리를 내리게 하는 것입니다.',
        more: 'ABOUT STORY 더보기'
      },
      solutions: {
        badge: 'Core Competency',
        title: '비즈니스 솔루션',
        viewAll: '전체 솔루션 보기',
        items: [
          { id: 'solutions', icon: '🌱', title: 'Brand Seeding', desc: '초기 시장 진입 및 인지도 확보' },
          { id: 'solutions', icon: '🔥', title: 'Marketing', desc: '인플루언서 및 SNS 바이럴 캠페인' },
          { id: 'solutions', icon: '📦', title: 'Logistics', desc: '쿠알라룸푸르 거점 풀필먼트 서비스' }
        ]
      },
      blog: {
        badge: 'Latest Insights',
        title: '전문가 인사이트',
        viewAll: '블로그 전체보기'
      },
      contact: {
        title: '말레이시아 진출, 전문가와 함께 시작하세요.',
        desc: '복잡한 인허가부터 물류, 마케팅까지 모든 과정을 투명하고 안전하게 가이드해 드립니다.',
        btn: '제안서 요청하기'
      }
    },
    about: {
      badge: 'About Eaglewings',
      title1: '단순한',
      title2: '대행사를 넘어,',
      title3: '가장 강력한',
      title4: '현지 허브.',
      desc: 'Eaglewings는 대한민국 브랜드가 해외 시장에서 겪는 "보이지 않는 장벽"을 허물기 위해 탄생했습니다. 우리는 단순한 대행사를 넘어, 현지의 언어, 문화, 행정, 물류 인프라를 하나로 연결하는 가장 강력한 로컬 허브입니다.',
      vision: {
        title: '말레이시아가 한국 브랜드의 제2의 안방이 되도록.',
        item1Title: '지속 가능한 비즈니스 모델',
        item1Desc: '단발성 수출 성과에 집착하지 않습니다. 현지 소비자들이 브랜드를 일상에서 지속적으로 선택할 수 있는 "라이프스타일"로 자리매김하게 합니다.',
        item2Title: '데이터 기반의 실무 전문성',
        item2Desc: '추측이 아닌 데이터로 말합니다. 현지 주요 이커머스 트렌드와 오프라인 유통 채널의 실시간 피드백을 수집하여 최적의 전략을 도출합니다.'
      },
      partnershipTitle: '글로벌 파트너십',
      partnershipDesc: '우리는 말레이시아의 주요 유통 거점 및 정부 산하 기관들과 긴밀한 협력 관계를 유지하며 압도적인 시너지를 창출합니다.'
    },
    solutions: {
      header: '우리의',
      headerAccent: '솔루션',
      desc: '말레이시아 비즈니스의 시작부터 끝까지, 데이터와 현지 인프라가 결합된 완벽한 성공 로드맵을 제안합니다.',
      items: [
        {
          id: '01',
          title: 'Brand Seeding Solution',
          label: '브랜드 시딩',
          desc: '시장 진입 전, 현지 소비자들의 실제 반응을 이끌어내고 인허가를 완비하는 가장 중요한 단계입니다.',
          features: ['NPRA / JAKIM 인증 대행', '현지 체험단 마케팅', '시장성 리포트 발행', '샘플링 프로모션 운영']
        },
        {
          id: '02',
          title: 'Marketing Solution',
          label: '마케팅 솔루션',
          desc: '이미 진입한 브랜드를 현지 트렌드에 맞춰 폭발적으로 성장시키는 퍼포먼스 마케팅 단계입니다.',
          features: ['KOL 메가 인플루언서 캠페인', '공식 인스타그램/틱톡 채널 운영', '라이브 커머스 전문 스튜디오 연동', '현지 유통 채널 바이럴']
        },
        {
          id: '03',
          title: 'Logistics Solution',
          label: '물류 솔루션',
          desc: '배송 경쟁력이 곧 브랜드 경쟁력입니다. 직영 창고를 통해 압도적인 고객 경험을 제공합니다.',
          features: ['쿠알라룸푸르 거점 3PL 풀필먼트', '온도/습도 관리 특화 보관', '실시간 재고 연동 시스템', 'B2B/B2C 통합 배송 지원']
        }
      ]
    },
    contact: {
      badge: '연락처',
      title: '파트너십 문의',
      sub: '브랜드를 움직일 준비가 되셨나요?',
      desc: '맞춤화된 물류 및 마케팅 제안서를 요청하세요.',
      form: {
        company: '회사명',
        person: '담당자',
        email: '이메일',
        service: '관심 서비스',
        message: '문의 내용',
        placeholderMsg: '말레이시아 진출 목표에 대해 들려주세요...',
        btn: '보내기'
      },
      info: {
        title: '연락처 정보',
        addressLabel: '주소',
        phoneLabel: '전화번호',
        emailLabel: '이메일',
        managerLabel: '담당자'
      }
    },
    footer: {
      desc: 'Eaglewings Agency는 대한민국 브랜드의 성공적인 글로벌 시장 진출을 돕기 위해 존재합니다. 데이터와 현지 인프라가 결합된 실무 중심의 솔루션을 제공합니다.',
      solutions: '솔루션',
      company: '회사소개',
      contact: '연락처'
    }
  }
};
