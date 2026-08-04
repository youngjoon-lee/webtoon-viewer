/**
 * 사이트 전역 설정 — 사업자 정보 / 요금제 / API 엔드포인트의 단일 소스.
 *
 * ⚠️ 배포 전에 아래 PLACEHOLDER 값을 전부 실제 값으로 교체해야 합니다.
 *    교체가 필요한 항목 전체 목록은 저장소 루트의 BUSINESS_INFO_TODO.md 참고.
 *    미교체 항목이 남아 있으면 브라우저 콘솔에 경고가 출력됩니다.
 */

/** 아직 채워지지 않은 값을 표시하는 마커. 이 접두사로 시작하면 미기입으로 간주합니다. */
const TODO = (label) => `<<TODO: ${label}>>`;

/**
 * 전자상거래법 제10조(사업자의 신원 등에 대한 표시)에 따라
 * 초기화면에 반드시 노출해야 하는 항목들입니다.
 */
export const BUSINESS = {
  /** 상호 (사업자등록증상 명칭) */
  name: '오드우드',
  /** 영문/브랜드 표기 */
  brandName: 'Oudwud',
  /** 서비스명 */
  serviceName: 'Webtoon Viewer',
  /** 대표자 성명 */
  ceo: '이영준',
  /** 사업자등록번호 (000-00-00000) */
  businessNumber: TODO('사업자등록번호'),
  /** 통신판매업 신고번호 (제0000-지역-0000호) — 전자상거래 유료 판매 시 필수 */
  mailOrderNumber: TODO('통신판매업신고번호'),
  /** 사업장 주소 (사업자등록증상 소재지) */
  address: TODO('사업장 주소'),
  /** 고객센터 전화번호 */
  phone: TODO('고객센터 전화번호'),
  /** 고객 문의 이메일 */
  email: 'oudwud.dev@gmail.com',
  /** 개인정보 보호책임자 성명 (개인정보보호법 제31조) */
  privacyOfficer: '이영준',
  /** 개인정보 보호책임자 연락처 */
  privacyOfficerEmail: 'oudwud.dev@gmail.com',
  /** 호스팅 서비스 제공자 (전자상거래법 표시사항) */
  hostingProvider: 'GitHub, Inc. (GitHub Pages)',
  /** 사업자정보 공개 페이지 (국세청 확인 링크). 통신판매업 신고 후 발급되는 URL. */
  businessInfoUrl: TODO('사업자정보 공개페이지 URL'),
  /** 회사 홈페이지 */
  homepage: 'https://oudwud.dev',
  /** 약관/정책 시행일 (YYYY-MM-DD) */
  policyEffectiveDate: TODO('약관 시행일'),
};

/** 결제/구독 API 서버 주소. server/ 디렉터리의 백엔드를 배포한 뒤 여기에 기입합니다. */
export const API_BASE_URL = TODO('API 서버 주소 (예: https://api.oudwud.dev)');

/** 기존 서버 merge 엔드포인트 (구독 게이팅은 API 서버가 담당) */
export const LEGACY_MERGE_URL =
  'https://webtoon-service-2svnippdua-an.a.run.app/v1/merge';

/**
 * 요금제 정의.
 * ⚠️ 금액은 예시입니다. 확정 후 교체하고, 서버(server/src/plans.js)의 값과 반드시 일치시켜야 합니다.
 *    금액이 서버와 다르면 결제 금액 불일치로 거래가 거절됩니다.
 */
export const PLANS = [
  {
    id: 'free',
    name: '무료',
    price: 0,
    interval: null,
    priceLabel: '₩0',
    intervalLabel: '',
    tagline: '개인 열람용. 설치도 가입도 필요 없습니다.',
    features: [
      { text: 'zip · jpg · png · gif 열람', included: true },
      { text: '이미지 너비 조절 · 상하 이동', included: true },
      { text: '브라우저 내 이미지 병합', included: true },
      { text: '파일이 기기 밖으로 나가지 않음', included: true },
      { text: '대용량 서버 병합', included: false },
      { text: '병합 결과 7일 보관', included: false },
    ],
    cta: '그냥 쓰기',
  },
  {
    id: 'pro_monthly',
    name: 'Pro 월간',
    price: 4900,
    interval: 'month',
    priceLabel: '₩4,900',
    intervalLabel: '/ 월',
    tagline: '브라우저 한계를 넘는 대용량 작업까지.',
    featured: true,
    features: [
      { text: '무료 플랜 기능 전부', included: true },
      { text: '대용량 서버 병합 (브라우저 한계 초과분)', included: true },
      { text: '월 200회 서버 병합', included: true },
      { text: '병합 결과 7일 보관 · 재다운로드', included: true },
      { text: '우선 처리 큐', included: true },
      { text: '이메일 문의 지원', included: true },
    ],
    cta: 'Pro 시작하기',
  },
  {
    id: 'pro_yearly',
    name: 'Pro 연간',
    price: 49000,
    interval: 'year',
    priceLabel: '₩49,000',
    intervalLabel: '/ 년',
    tagline: '2개월치 무료. 오래 쓸 거라면.',
    badge: '2개월 무료',
    features: [
      { text: 'Pro 월간 기능 전부', included: true },
      { text: '월 200회 서버 병합', included: true },
      { text: '연 단위 결제로 17% 절약', included: true },
      { text: '병합 결과 7일 보관 · 재다운로드', included: true },
      { text: '우선 처리 큐', included: true },
      { text: '이메일 문의 지원', included: true },
    ],
    cta: 'Pro 연간 시작하기',
  },
];

export const PLANS_BY_ID = Object.fromEntries(PLANS.map((p) => [p.id, p]));

/** 결제 전 반드시 동의받아야 하는 항목 (전자상거래법 제8조 · 정기결제 사전고지) */
export const CHECKOUT_CONSENTS = [
  {
    id: 'terms',
    required: true,
    label: '이용약관 및 유료서비스 이용조건에 동의합니다.',
    href: 'legal/terms.html',
  },
  {
    id: 'privacy',
    required: true,
    label: '개인정보 수집·이용에 동의합니다.',
    href: 'legal/privacy.html',
  },
  {
    id: 'recurring',
    required: true,
    label:
      '해지 전까지 결제수단으로 이용료가 자동으로 정기 결제되는 것에 동의합니다.',
    href: 'legal/refund.html',
  },
  {
    id: 'age',
    required: true,
    label: '만 19세 이상이거나, 법정대리인의 동의를 받았습니다.',
  },
  {
    id: 'marketing',
    required: false,
    label: '(선택) 신규 기능 및 혜택 안내 메일 수신에 동의합니다.',
  },
];

/** 플레이스홀더가 남아 있는지 검사 (배포 전 자체 점검용) */
export function findUnfilledPlaceholders() {
  const unfilled = [];
  const scan = (obj, path) => {
    for (const [key, value] of Object.entries(obj)) {
      if (typeof value === 'string' && value.startsWith('<<TODO:')) {
        unfilled.push(`${path}${key}`);
      }
    }
  };
  scan(BUSINESS, 'BUSINESS.');
  if (typeof API_BASE_URL === 'string' && API_BASE_URL.startsWith('<<TODO:')) {
    unfilled.push('API_BASE_URL');
  }
  return unfilled;
}
