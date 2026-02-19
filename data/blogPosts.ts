
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
    category: "MARKET ENTRY",
    date: "2024.11.01",
    title: '"NPRA 등록 없이 판매 가능할까?" – 말레이시아 화장품 인허가 완벽 가이드',
    excerpt: "말레이시아 진출의 첫 관문인 NPRA 등록의 필수성과 절차, 그리고 한국 브랜드가 자주 하는 실수에 대해 알아봅니다.",
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=800&q=80",
    source: "EAGLEWINGS REGULATORY TEAM",
    content: `
      <p class="lead">안녕하세요, 말레이시아 진출의 든든한 파트너 Eaglewings Agency입니다.</p>
      <p>한국의 뛰어난 화장품 브랜드들이 동남아 시장, 특히 말레이시아 진출을 고려할 때 가장 먼저 맞닥뜨리는 거대한 벽이 있습니다. 바로 '인허가(Registration)' 문제입니다. "샘플 정도로 조금씩 파는 건 괜찮지 않을까?", "역직구는 등록 안 해도 된다던데?"라며 고민하시는 대표님들을 위해, 오늘은 말레이시아 화장품 시장의 출입문인 NPRA(National Pharmaceutical Regulatory Agency) 등록에 대해 명확히 정리해 드립니다.</p>
      
      <h3>NPRA 등록, 선택이 아닌 필수인 이유</h3>
      <p>결론부터 말씀드리면, 말레이시아 내에서 합리적이고 지속적인 영업을 하기 위해서는 <strong>NOT(Notification) 번호 발급이 필수</strong>입니다.</p>
      <ul>
        <li><strong>오프라인 입점 불가:</strong> 왓슨스(Watsons), 가디언(Guardian) 같은 메이저 유통망은 물론, 작은 편집숍조차 NOT 번호가 없는 제품은 입점시키지 않습니다.</li>
        <li><strong>마케팅의 제약:</strong> SNS 광고나 틱톡샵(TikTok Shop) 운영 시 공식 등록 증빙이 없으면 계정 차단이나 광고 승인 거절의 사유가 됩니다.</li>
        <li><strong>통관 리스크:</strong> 정식 수출 시 NOT 번호가 없으면 세관에서 계류되거나 폐기 처분될 위험이 큽니다.</li>
      </ul>

      <h3>주요 등록 절차와 소요 기간</h3>
      <p>말레이시아 화장품 등록은 타 국가에 비해 비교적 합리적이지만, 꼼꼼한 준비가 필요합니다.</p>
      <ul>
        <li><strong>현지 책임자(Quest Holder) 선정:</strong> 말레이시아 현지 법인 혹은 대행사가 NPRA 시스템에 제품을 등록해야 합니다. (Eaglewings가 이 역할을 수행합니다.)</li>
        <li><strong>서류 준비:</strong> 성분 리스트(Full Ingredient List), 제조 판매 증명서(CFS), ISO/GMP 인증서 등이 필요합니다.</li>
        <li><strong>성분 검토:</strong> 말레이시아 금지 성분이 포함되어 있는지, 배합 한도를 초과하지 않았는지 확인합니다.</li>
        <li><strong>Notification 신청 및 발급:</strong> 통상적으로 서류 결격 사유가 없다면 영업일 기준 7~14일 이내에 NOT 번호가 발급됩니다.</li>
      </ul>

      <h3>한국 브랜드가 자주 하는 실수</h3>
      <ul>
        <li><strong>성분 표기법 오류:</strong> 전성분 표기가 국제 화장품 성분 명칭(INCI) 기준을 따르지 않아 보완 요청을 받는 경우가 많습니다.</li>
        <li><strong>과대광고 문구:</strong> 'White-ning'이나 'Cure' 같은 단어는 현지 규정에 따라 엄격히 제한되므로 패키지 및 마케팅 문구 수정이 필요할 수 있습니다.</li>
      </ul>

      <div class="highlight-box">
        <h4>Eaglewings의 Tip</h4>
        <p>말레이시아 시장은 진입 장벽이 낮아 보이지만, <strong>'사후 관리'</strong>가 매우 중요합니다. NPRA는 등록 후에도 수시로 시장 제품을 수거해 검사하며, 부적합 판정 시 리콜 명령을 내립니다. 따라서 현지 규정을 잘 아는 파트너와 함께 시작하는 것이 브랜드 리스크를 줄이는 가장 빠른 길입니다.</p>
      </div>

      <p>성공적인 말레이시아 진출, 시작은 정확한 인허가부터입니다. 궁금하신 점은 언제든 Eaglewings에 문의해 주세요.</p>
      
      <p class="footer-source">
        출처:<br/>
        - Malaysia National Pharmaceutical Regulatory Agency (NPRA) Official Guidelines<br/>
        - Control of Drugs and Cosmetics Regulations 1984<br/>
        - Eaglewings Agency Local Market Operations Data
      </p>
    `
  },
  {
    id: 2,
    category: "REGULATION",
    date: "2024.11.03",
    title: '"건강기능식품은 화장품과 다르다" – 말레이시아 건기식(MAL) 분류 및 등록의 핵심',
    excerpt: "콜라겐, 유산균 등 건강기능식품이 말레이시아에서 받는 MAL 번호의 까다로운 기준과 전략을 분석합니다.",
    image: "https://images.unsplash.com/photo-1584017947476-83a67008702d?auto=format&fit=crop&w=800&q=80",
    source: "EAGLEWINGS COMPLIANCE LAB",
    content: `
      <p class="lead">안녕하세요, 말레이시아 진출 파트너 Eaglewings Agency입니다.</p>
      <p>화장품(NOT) 등록을 마친 브랜드 오너분들이 가장 많이 하시는 질문 중 하나가 "우리 집 콜라겐 제품도 화장품처럼 금방 등록되나요?"입니다. 안타깝게도 답은 "아니오"입니다. 말레이시아에서 건강기능식품은 화장품보다 훨씬 까다로운 MAL(Drug Registration) 번호를 받아야 합니다.</p>
      
      <h3>식품인가, 약품인가? (Classification)</h3>
      <p>말레이시아 보건부(MOH)는 먹는 제품을 크게 두 가지로 분류합니다.</p>
      <ul>
        <li><strong>General Food:</strong> 일반적인 가공식품 (등록 비교적 용이)</li>
        <li><strong>Health Supplement (HS):</strong> 특정 기능성을 가진 보조제 (MAL 번호 필요)</li>
      </ul>
      <p>비타민, 유산균, 다이어트 보조제 등은 대부분 HS로 분류되어 엄격한 성분 검사와 제조 공정 확인을 거칩니다.</p>

      <h3>MAL 등록이 까다로운 이유</h3>
      <ul>
        <li><strong>성분 규제:</strong> 한국에서는 허용되지만 말레이시아에서는 금지된 약물 성분이 있거나, 배합 함량이 다를 수 있습니다.</li>
        <li><strong>임상 데이터:</strong> 제품의 효능을 주장하려면 이를 뒷받침하는 과학적 근거 자료를 제출해야 합니다.</li>
        <li><strong>소요 기간:</strong> 화장품이 2주 내외라면, 건기식은 최소 6개월에서 1년 이상 소요되기도 합니다.</li>
      </ul>

      <div class="highlight-box">
        <h4>브랜드 오너를 위한 전략</h4>
        <p>건기식 진출은 '호흡'을 길게 가져가야 합니다. 인허가 기간 동안 인플루언서 마케팅이나 사전 붐업을 통해 브랜드 인지도를 쌓아두고, 등록 완료와 동시에 메이저 채널에 입점하는 전략이 필요합니다.</p>
      </div>

      <p class="footer-source">
        출처:<br/>
        - Drug Registration Guidance Document (DRGD), NPRA<br/>
        - Food Act 1983 and Food Regulations 1985<br/>
        - Eaglewings Agency Regulatory Compliance Team
      </p>
    `
  },
  {
    id: 3,
    category: "HALAL",
    date: "2024.11.05",
    title: '"할랄 인증, 꼭 받아야 하나요?" – 무슬림 시장 공략을 위한 현실적인 조언',
    excerpt: "말레이시아 인구 60% 이상을 차지하는 무슬림 소비자를 잡기 위한 할랄 인증의 실제 영향력을 확인하세요.",
    image: "https://images.unsplash.com/photo-1585320840244-5c9c8c07f77b?auto=format&fit=crop&w=800&q=80",
    source: "EAGLEWINGS CULTURAL INSIGHT",
    content: `
      <p class="lead">말레이시아 인구의 약 60% 이상은 무슬림입니다. 이들에게 '할랄(Halal)'은 단순한 종교적 절차를 넘어 '안전하고 깨끗한 제품'이라는 신뢰의 상징입니다.</p>
      
      <h3>할랄 인증 없으면 판매가 안 되나요?</h3>
      <p>결론적으로 <strong>'판매는 가능하지만, 시장 점유율에 한계가 있다'</strong>입니다. 논-할랄 제품도 온라인(Shopee)이나 중화권 타겟 매장에서는 판매될 수 있습니다. 하지만 정부 입찰, 대형 유통망 확장, 무슬림 소비자 신뢰 확보를 위해서는 JAKIM(말레이시아 할랄 인증기관) 인증이 강력한 무기가 됩니다.</p>

      <h3>한국 할랄 인증(KMF)도 인정되나요?</h3>
      <p>네, 다행히 한국이슬람교중앙회(KMF)는 말레이시아 JAKIM과 교차 인증이 되어 있습니다. 하지만 현지 마케팅 시 JAKIM 로고를 직접 부착하고 싶다면 별도의 현지 확인 절차가 필요할 수 있습니다.</p>

      <div class="highlight-box">
        <h4>Eaglewings의 제언</h4>
        <p>처음부터 할랄 인증에 매몰되기보다, 우선 일반 제품으로 시장 반응을 테스트한 후 메인 라인업에 대해 할랄 인증을 추진하는 '단계적 접근'을 권장합니다.</p>
      </div>

      <p class="footer-source">
        출처:<br/>
        - Department of Islamic Development Malaysia (JAKIM)<br/>
        - Halal Industry Development Corporation (HDC)<br/>
        - Eaglewings Agency Market Analysis Report
      </p>
    `
  },
  {
    id: 4,
    category: "MARKETING",
    date: "2024.11.07",
    title: '"틱톡이 대세인 이유" – 말레이시아 MZ세대를 사로잡는 라이브 커머스 전략',
    excerpt: "전 세계 틱톡샵 활성화 상위 국가인 말레이시아에서 성공하기 위한 라이브 커머스와 KOL 매칭 전략.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80",
    source: "EAGLEWINGS DIGITAL GROWTH",
    content: `
      <p class="lead">동남아시아에서 틱톡(TikTok)은 더 이상 단순한 댄스 챌린지 앱이 아닙니다. 특히 말레이시아는 전 세계에서 틱톡샵(TikTok Shop)이 가장 활성화된 국가 중 하나입니다.</p>
      
      <h3>왜 틱톡인가?</h3>
      <p>말레이시아 소비자들은 '신뢰할 수 있는 사람'이 추천하는 제품을 사는 성향이 강합니다. 라이브 커머스를 통해 실시간으로 질문하고 답을 듣는 과정이 구매로 직결됩니다.</p>

      <h3>성공적인 틱톡 전략</h3>
      <ul>
        <li><strong>현지 KOL(Key Opinion Leader) 매칭:</strong> 한국 연예인보다 현지에서 친근하게 활동하는 로컬 인플루언서가 매출 전환율이 훨씬 높습니다.</li>
        <li><strong>숏폼 콘텐츠의 힘:</strong> 15초 내에 제품의 비포/애프터를 확실히 보여주는 영상이 바이럴의 핵심입니다.</li>
      </ul>

      <p>Eaglewings는 자체 스튜디오와 전속 현지 인플루언서 풀을 통해 브랜드의 틱톡샵 운영을 직접 지원합니다.</p>

      <p class="footer-source">
        출처:<br/>
        - TikTok Shop Seller Center Malaysia Data<br/>
        - Digital 2024: Malaysia (We Are Social & Meltwater)<br/>
        - Eaglewings Marketing Performance Insight
      </p>
    `
  },
  {
    id: 5,
    category: "TRENDS",
    date: "2024.11.09",
    title: '"K-뷰티를 넘어선 K-퍼스널케어" – 현재 말레이시아에서 가장 잘 팔리는 제품군',
    excerpt: "단순 화이트닝을 넘어 두피 케어, 이너뷰티, 선케어 등 세분화되고 있는 말레이시아 뷰티 트렌드 분석.",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=800&q=80",
    source: "EAGLEWINGS TREND REPORT",
    content: `
      <p class="lead">과거에는 '화이트닝 크림'이 대세였다면, 현재 말레이시아 시장은 훨씬 더 세분화되고 있습니다.</p>
      
      <h3>급성장 카테고리</h3>
      <ul>
        <li><strong>Scalp Care (두피 케어):</strong> 히잡을 쓰는 여성이 많아 두피 고민이 깊은 현지 특성상, 한국의 탈모 샴푸나 두피 앰플이 큰 인기를 얻고 있습니다.</li>
        <li><strong>Inner Beauty:</strong> 콜라겐, 글루타치온 등 먹는 뷰티 제품에 대한 수요가 급증하고 있습니다.</li>
        <li><strong>Sun Care:</strong> 연중 더운 날씨로 인해 끈적이지 않는 한국산 선스틱, 선세럼은 필수 아이템입니다.</li>
      </ul>

      <div class="highlight-box">
        <h4>시장 기회</h4>
        <p>단순히 "한국 제품이라 좋다"가 아니라 "말레이시아의 덥고 습한 기후에 최적화된 포뮬러"임을 강조하는 것이 성공의 열쇠입니다.</p>
      </div>

      <p class="footer-source">
        출처:<br/>
        - Euromonitor International: Beauty and Personal Care in Malaysia<br/>
        - Shopee Malaysia Best Sellers Category Analysis<br/>
        - Eaglewings Agency Retail Data
      </p>
    `
  },
  {
    id: 6,
    category: "E-COMMERCE",
    date: "2024.11.11",
    title: '"쇼피(Shopee) vs 라자다(Lazada)" – 말레이시아 이커머스 입점 전 비교 분석',
    excerpt: "트래픽의 쇼피와 프리미엄 이미지의 라자다. 우리 브랜드에 맞는 최적의 플랫폼은 어디일까요?",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80",
    source: "EAGLEWINGS E-COMMERCE TEAM",
    content: `
      <p class="lead">말레이시아 이커머스 시장은 <strong>쇼피(Shopee)</strong>와 <strong>라자다(Lazada)</strong> 양강 체제입니다. 하지만 두 플랫폼의 성격은 확실히 다릅니다.</p>
      
      <h3>쇼피 (Shopee): 압도적인 트래픽</h3>
      <ul>
        <li><strong>장점:</strong> 유저 수가 가장 많고 마케팅 툴(바우처, 라이브)이 매우 다양합니다.</li>
        <li><strong>단점:</strong> 가격 경쟁이 매우 치열합니다.</li>
      </ul>

      <h3>라자다 (Lazada): 프리미엄 이미지</h3>
      <ul>
        <li><strong>장점:</strong> 브랜드 전용관(LazMall)의 권위가 높고, 비교적 고가의 제품이 잘 팔립니다.</li>
        <li><strong>단점:</strong> 쇼피에 비해 유입량은 적을 수 있습니다.</li>
      </ul>

      <p>브랜드 초기 진입 시에는 쇼피를 통해 대중적인 인지도를 쌓고, 라자다를 통해 브랜드 이미지를 굳히는 투트랙 전략이 효율적입니다.</p>

      <p class="footer-source">
        출처:<br/>
        - SimilarWeb Malaysia Ecommerce Rankings<br/>
        - Shopee/Lazada Seller Education Hub<br/>
        - Eaglewings Agency Ecommerce Management Case
      </p>
    `
  },
  {
    id: 7,
    category: "LOGISTICS",
    date: "2024.11.13",
    title: '"해외 배송비 아끼는 법" – 현지 풀필먼트(Fullfillment) 서비스의 장점',
    excerpt: "직구의 한계를 넘어 매출을 극대화하는 현지 창고 운영과 라스트마일 배송 최적화 노하우.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    source: "EAGLEWINGS SUPPLY CHAIN",
    content: `
      <p class="lead">한국에서 고객에게 직접 배송하는 역직구 방식은 초기 테스트에는 좋지만, 확장성에는 한계가 있습니다.</p>
      
      <h3>현지 창고 운영의 효과</h3>
      <ul>
        <li><strong>배송 속도:</strong> 1~2일 내 도착 (고객 만족도 및 재구매율 상승)</li>
        <li><strong>배송비 절감:</strong> 대량 해상 운송 후 현지 배송을 통해 건당 물류비를 50% 이상 절감할 수 있습니다.</li>
        <li><strong>반품 처리:</strong> 현지 거점이 있으면 반품 및 교환 처리가 원활해져 신뢰도가 높아집니다.</li>
      </ul>

      <p>Eaglewings는 말레이시아 현지에서 직접 물류 창고를 운영하며 브랜드사의 물류 고민을 해결해 드리고 있습니다.</p>

      <p class="footer-source">
        출처:<br/>
        - Malaysia Digital Economy Corporation (MDEC) Logistics Report<br/>
        - Eaglewings Agency Warehouse Operations Data<br/>
        - Statista: Logistics Market in Southeast Asia
      </p>
    `
  },
  {
    id: 8,
    category: "STRATEGY",
    date: "2024.11.15",
    title: '"가격 책정의 기술" – 말레이시아 최적의 소비자가 설정',
    excerpt: "관세, SST, 플랫폼 수수료를 고려한 정교한 가격 전략이 말레이시아에서의 이익을 결정합니다.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
    source: "EAGLEWINGS FINANCIAL STRATEGY",
    content: `
      <p class="lead">한국 판매가를 단순히 링깃(MYR)으로 환산하면 100% 적자가 납니다.</p>
      
      <h3>고려해야 할 비용 요소</h3>
      <ul>
        <li><strong>수입 관세 및 판매세(SST):</strong> 제품군에 따라 다름</li>
        <li><strong>플랫폼 수수료:</strong> 약 10~15% 내외</li>
        <li><strong>마케팅 비용:</strong> 판매가의 최소 20~30%는 확보해야 함</li>
        <li><strong>물류비:</strong> 현지 풀필먼트 비용 포함</li>
      </ul>

      <div class="highlight-box">
        <h4>최적의 가격대</h4>
        <p>말레이시아 중산층이 부담 없이 지갑을 여는 가격대를 파악하고, 그에 맞춘 번들 구성(Buy 1 Free 1 등)을 기획하는 것이 중요합니다.</p>
      </div>

      <p class="footer-source">
        출처:<br/>
        - Royal Malaysian Customs Department (SST Guidelines)<br/>
        - World Bank Malaysia Economic Monitor<br/>
        - Eaglewings Agency Financial Strategy Team
      </p>
    `
  },
  {
    id: 9,
    category: "RETAIL",
    date: "2024.11.17",
    title: '"오프라인 진출의 관문" – 왓슨스(Watsons), 가디언(Guardian) 입점 프로세스',
    excerpt: "온라인 성공 이후의 최종 목적지, 말레이시아 메이저 드럭스토어 입점을 위한 준비 사항.",
    image: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&w=800&q=80",
    source: "EAGLEWINGS RETAIL DISTRIBUTION",
    content: `
      <p class="lead">온라인에서 자리를 잡았다면 최종 목적지는 오프라인 드럭스토어 입점입니다.</p>
      
      <h3>입점 제안 시 필요한 것</h3>
      <ul>
        <li><strong>온라인 판매 데이터:</strong> "이미 온라인에서 이만큼 팔리고 있다"는 증거가 가장 강력한 제안서입니다.</li>
        <li><strong>현지 법인/파트너:</strong> 대형 유통사는 현지에서 즉각 소통 가능하고 물류를 책임질 수 있는 파트너를 선호합니다.</li>
      </ul>

      <div class="highlight-box">
        <h4>팝업 스토어 활용</h4>
        <p>본 입점 전, 쿠알라룸푸르 주요 쇼핑몰(Pavilion, Mid Valley 등)에서 진행하는 팝업 스토어는 바이어들에게 브랜드의 저력을 보여줄 수 있는 최고의 기회입니다.</p>
      </div>

      <p class="footer-source">
        출처:<br/>
        - Retail Group Malaysia (RGM) Annual Report<br/>
        - AS Watson Group Sustainability Report<br/>
        - Eaglewings Agency Offline Distribution Case Study
      </p>
    `
  }
];

// Added missing postsEN definition
const postsEN: BlogPost[] = [
  {
    id: 1,
    category: "MARKET ENTRY",
    date: "2024.11.01",
    title: '"Can I sell without NPRA registration?" – A complete guide to Malaysian cosmetic licensing',
    excerpt: "We look at the necessity and procedures for NPRA registration, the first gateway to entering Malaysia, and common mistakes made by Korean brands.",
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=800&q=80",
    source: "EAGLEWINGS REGULATORY TEAM",
    content: `
      <p class="lead">Hello, this is Eaglewings Agency, your reliable partner for entering the Malaysian market.</p>
      <p>When excellent Korean cosmetic brands consider entering the Southeast Asian market, especially Malaysia, they first face a huge wall: the issue of 'Registration'. For those CEOs who wonder, "Is it okay to sell small amounts as samples?" or "I heard direct purchases don't need registration?", today we will clearly summarize NPRA (National Pharmaceutical Regulatory Agency) registration, the gateway to the Malaysian cosmetics market.</p>
      
      <h3>Why NPRA registration is mandatory, not optional</h3>
      <p>In conclusion, in order to conduct reasonable and sustainable business in Malaysia, <strong>issuing a NOT (Notification) number is mandatory</strong>.</p>
      <ul>
        <li><strong>Cannot enter offline stores:</strong> Major distribution networks such as Watsons and Guardian, as well as small select shops, do not allow products without a NOT number.</li>
        <li><strong>Marketing constraints:</strong> When running SNS ads or TikTok Shops, lack of official registration proof can be grounds for account blocking or ad approval rejection.</li>
        <li><strong>Customs risk:</strong> During formal export, if there is no NOT number, there is a high risk of being held at customs or disposed of.</li>
      </ul>
      <div class="highlight-box">
        <h4>Eaglewings Tip</h4>
        <p>The Malaysian market seems to have low entry barriers, but <strong>'post-management'</strong> is very important. NPRA frequently collects and inspects market products even after registration.</p>
      </div>
    `
  },
  {
    id: 2,
    category: "REGULATION",
    date: "2024.11.03",
    title: '"Health supplements are different from cosmetics" – Key points of Malaysian health supplement (MAL) registration',
    excerpt: "We analyze the strict standards and strategies for MAL numbers received by health supplements such as collagen and probiotics in Malaysia.",
    image: "https://images.unsplash.com/photo-1584017947476-83a67008702d?auto=format&fit=crop&w=800&q=80",
    source: "EAGLEWINGS COMPLIANCE LAB",
    content: `<p class="lead">Health supplements must receive a much more stringent MAL (Drug Registration) number than cosmetics in Malaysia.</p>`
  },
  {
    id: 3,
    category: "HALAL",
    date: "2024.11.05",
    title: '"Is Halal certification necessary?" – Realistic advice for targeting the Muslim market',
    excerpt: "Check the actual influence of Halal certification to capture Muslim consumers, who account for more than 60% of the Malaysian population.",
    image: "https://images.unsplash.com/photo-1585320840244-5c9c8c07f77b?auto=format&fit=crop&w=800&q=80",
    source: "EAGLEWINGS CULTURAL INSIGHT",
    content: `<p class="lead">For many, 'Halal' is more than just a religious procedure; it is a symbol of trust as a 'safe and clean product'.</p>`
  },
  {
    id: 4,
    category: "MARKETING",
    date: "2024.11.07",
    title: '"Why TikTok is the trend" – Live commerce strategy to capture the MZ generation in Malaysia',
    excerpt: "Live commerce and KOL matching strategies to succeed in Malaysia, one of the top countries for active TikTok Shops worldwide.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80",
    source: "EAGLEWINGS DIGITAL GROWTH",
    content: `<p class="lead">Malaysia is one of the countries where TikTok Shop is most active in the world.</p>`
  },
  {
    id: 5,
    category: "TRENDS",
    date: "2024.11.09",
    title: '"Beyond K-Beauty to K-Personal Care" – Top selling product categories in Malaysia',
    excerpt: "An analysis of beauty trends in Malaysia that are becoming more segmented, such as scalp care, inner beauty, and sun care.",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=800&q=80",
    source: "EAGLEWINGS TREND REPORT",
    content: `<p class="lead">The current Malaysian market is much more segmented than ever before.</p>`
  },
  {
    id: 6,
    category: "E-COMMERCE",
    date: "2024.11.11",
    title: '"Shopee vs Lazada" – A comparative analysis before entering Malaysian e-commerce',
    excerpt: "Shopee for traffic and Lazada for premium image. Which platform is best for our brand?",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80",
    source: "EAGLEWINGS E-COMMERCE TEAM",
    content: `<p class="lead">Malaysian e-commerce market is a duopoly of Shopee and Lazada.</p>`
  },
  {
    id: 7,
    category: "LOGISTICS",
    date: "2024.11.13",
    title: '"How to save on international shipping" – Advantages of local fulfillment services',
    excerpt: "Know-how to optimize local warehouse operations and last-mile delivery that maximize sales.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    source: "EAGLEWINGS SUPPLY CHAIN",
    content: `<p class="lead">Local fulfillment can reduce logistics costs and increase customer satisfaction.</p>`
  },
  {
    id: 8,
    category: "STRATEGY",
    date: "2024.11.15",
    title: '"The art of pricing" – Setting the optimal consumer price in Malaysia',
    excerpt: "A sophisticated pricing strategy considering customs, SST, and platform fees determines profit.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
    source: "EAGLEWINGS FINANCIAL STRATEGY",
    content: `<p class="lead">Consider customs, SST, and platform fees for sustainable growth.</p>`
  },
  {
    id: 9,
    category: "RETAIL",
    date: "2024.11.17",
    title: '"Gateway to offline entry" – Watsons and Guardian entry processes',
    excerpt: "Preparation for entering major Malaysian drugstores, the final destination after online success.",
    image: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&w=800&q=80",
    source: "EAGLEWINGS RETAIL DISTRIBUTION",
    content: `<p class="lead">Entering offline stores requires strong online performance data and a local partner.</p>`
  }
];

export const getBlogPosts = (lang: Language): BlogPost[] => {
  return lang === 'ko' ? postsKO : postsEN;
};

export const blogPosts = postsKO;
