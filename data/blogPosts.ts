
import { Language } from './translations';

export interface BlogPost {
  id: number;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  source: string;
}

const postsKO: BlogPost[] = [
  {
    id: 1,
    category: "Market Entry",
    date: "2024.11.01",
    title: '"NPRA 등록 없이 판매 가능할까?" – 말레이시아 화장품 인허가 완벽 가이드',
    excerpt: "말레이시아 진출의 첫 관문인 NPRA 등록의 필수성과 절차, 그리고 한국 브랜드가 자주 하는 실수에 대해 실무진이 상세히 알려드립니다.",
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=800&q=80",
    source: "Eaglewings Regulatory Team",
    content: `
      <div class="lead">안녕하세요, 말레이시아 진출의 든든한 파트너 Eaglewings Agency입니다. 한국의 뛰어난 화장품 브랜드들이 동남아 시장, 특히 말레이시아 진출을 고려할 때 가장 먼저 맞닥뜨리는 거대한 벽인 '인허가' 문제를 명확히 정리해 드립니다.</div>
      <h3>1. NPRA 등록, 선택이 아닌 필수인 이유</h3>
      <p>결론부터 말씀드리면, 말레이시아 내에서 합리적이고 지속적인 영업을 하기 위해서는 NOT(Notification) 번호 발급이 필수입니다.</p>
      <ul>
        <li><strong>오프라인 입점 불가:</strong> 왓슨스(Watsons), 가디언(Guardian) 같은 메이저 유통망은 NOT 번호가 없는 제품을 입점시키지 않습니다.</li>
        <li><strong>마케팅의 제약:</strong> SNS 광고나 틱톡샵 운영 시 공식 등록 증빙이 없으면 계정 차단이나 광고 승인 거절의 사유가 됩니다.</li>
      </ul>
      <blockquote>"NPRA 등록은 단순히 번호를 받는 것 이상의 의미가 있습니다. 이는 브랜드가 말레이시아 법적 테두리 안에서 보호받기 위한 최소한의 안전장치입니다."</blockquote>
    `
  },
  {
    id: 2,
    category: "Regulation",
    date: "2024.11.03",
    title: '"건강기능식품은 화장품과 다르다" – 말레이시아 건기식(MAL) 등록의 핵심',
    excerpt: "콜라겐, 유산균 등 건강기능식품이 말레이시아에서 받는 MAL 번호의 까다로운 기준과 전략을 분석합니다.",
    image: "https://images.unsplash.com/photo-1584017947476-83a67008702d?auto=format&fit=crop&w=800&q=80",
    source: "Eaglewings Compliance Lab",
    content: `<h3>1. 건강기능식품(Health Supplement) 분류 이해</h3><p>말레이시아에서 캡슐, 정제 형태의 보조식품은 일반 가공식품이 아닌 '의약품'에 준하는 관리를 받습니다.</p>`
  },
  {
    id: 3,
    category: "Halal",
    date: "2024.11.05",
    title: '"할랄 인증, 꼭 받아야 하나요?" – 무슬림 시장 공략을 위한 현실적인 조언',
    excerpt: "인구 60% 이상의 무슬림을 대상으로 한 할랄 경제의 메커니즘과 JAKIM 인증의 실질적인 가치를 심층 분석합니다.",
    image: "https://images.unsplash.com/photo-1585320840244-5c9c8c07f77b?auto=format&fit=crop&w=800&q=80",
    source: "Eaglewings Cultural Insight",
    content: `<h3>1. 할랄은 종교를 넘어선 '품질 표준'</h3><p>말레이시아 소비자들에게 JAKIM 할랄 마크는 'Clean & Safe'를 의미합니다.</p>`
  }
];

const postsEN: BlogPost[] = [
  {
    id: 1,
    category: "Market Entry",
    date: "Nov 01, 2024",
    title: '"Can I sell without NPRA?" – Complete Guide to Malaysia Cosmetic Licensing',
    excerpt: "Our team explains the necessity and procedure of NPRA registration, the first gateway to Malaysia.",
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=800&q=80",
    source: "Eaglewings Regulatory Team",
    content: `
      <div class="lead">Greetings from Eaglewings Agency. We clarify the 'Licensing' issues that brands face when entering Southeast Asia.</div>
      <h3>1. Why NPRA is Mandatory</h3>
      <p>Issuing a NOT(Notification) number is essential for sustainable business in Malaysia.</p>
      <ul>
        <li><strong>No Offline Entry:</strong> Major retailers like Watsons and Guardian will not list products without a NOT number.</li>
        <li><strong>Marketing Limits:</strong> Lack of registration can lead to account bans on TikTok Shop.</li>
      </ul>
      <h3>2. Registration Process</h3>
      <p>Includes appointing a local Quest Holder and preparing full ingredient lists (INCI).</p>
      <div class="highlight-box">
        <h4>💡 Eaglewings Tip</h4>
        <p>Registration is just the start. Post-market surveillance is key as NPRA samples products randomly.</p>
      </div>
    `
  },
  {
    id: 2,
    category: "Regulation",
    date: "Nov 03, 2024",
    title: '"Supplements are different from Cosmetics" – Key to Health Supplement (MAL) Registration',
    excerpt: "Analyzing the strict standards for obtaining MAL numbers for supplements in Malaysia.",
    image: "https://images.unsplash.com/photo-1584017947476-83a67008702d?auto=format&fit=crop&w=800&q=80",
    source: "Eaglewings Compliance Lab",
    content: `<h3>1. Understanding Health Supplement Classification</h3><p>In Malaysia, capsules and tablets are managed as pharmaceuticals, not general food.</p>`
  },
  {
    id: 3,
    category: "Halal",
    date: "Nov 05, 2024",
    title: '"Do I really need Halal?" – Realistic Advice for Targeting the Muslim Market',
    excerpt: "In-depth analysis of the JAKIM certification and its practical value for business growth.",
    image: "https://images.unsplash.com/photo-1585320840244-5c9c8c07f77b?auto=format&fit=crop&w=800&q=80",
    source: "Eaglewings Cultural Insight",
    content: `<h3>1. Halal as a Quality Standard</h3><p>To Malaysian Muslims, JAKIM Halal is synonymous with 'Clean & Safe'.</p>`
  }
];

export const getBlogPosts = (lang: Language): BlogPost[] => {
  return lang === 'ko' ? postsKO : postsEN;
};

export const blogPosts = postsKO; // Default legacy support
