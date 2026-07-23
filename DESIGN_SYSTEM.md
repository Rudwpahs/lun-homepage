# LUN Design System

LUN 공식 홈페이지의 디자인 시스템 문서입니다.
UI UX Pro Max 스킬의 생성 결과(`design-system/lun/MASTER.md`)를 바탕으로,
브랜드 브리프(Marina Blue, Pretendard, 절제된 모션)에 맞게 보정한 **최종 확정본**입니다.
두 문서가 충돌하면 이 문서가 우선합니다.

---

## 1. 디자인 철학

- **Calm technology** — 기술이 앞에 나서지 않고, 필요한 순간에 뒤로 물러나는 브랜드 성격을 그대로 반영합니다. 화면은 조용하고, 정보는 명확해야 합니다.
- **Minimalism first** — Glassmorphism이나 Liquid Glass보다 정보 위계와 여백을 우선합니다. 효과를 제거해도 구조가 성립해야 합니다.
- **Swiss Modernism 2.0** — 수학적 간격, 명확한 위계, 높은 대비, 최소한의 장식. 12컬럼 감각의 그리드와 여백으로 구조를 만듭니다.
- **Glassmorphism + Liquid Glass** — 유리 재질은 브랜드의 맑고 유동적인 인상을 보조합니다. Glassmorphism은 히어로 비주얼에, Liquid Glass는 헤더·버튼 등 떠 있는 조작층에 집중합니다.
- **연구의 신뢰감** — 투자 유치형 과장 대신 확인된 사실·현재 가설·미래 계획을 구분합니다.
- **콘텐츠와 UI 분리** — 모든 문구는 `content/lun-content.ts`에서 관리하고, 컴포넌트는 표현만 담당합니다.

> 참고: UI UX Pro Max가 1순위로 추천한 Neumorphism 스타일은
> 저대비(접근성 위험)와 브랜드 브리프의 "지나친 Soft UI 금지" 방향과 충돌해 채택하지 않았습니다.

## 2. 색상 토큰

정의 위치: `app/globals.css`의 `@theme` 블록. Tailwind v4 유틸리티로 자동 노출됩니다 (`bg-marina-700` 등).

### Marina Blue (브랜드 주 색상)

| 토큰 | 값 | 용도 |
|---|---|---|
| `marina-50` | `#edf4f8` | 밝은 강조 배경 |
| `marina-100` | `#d9e8f0` | 다크 배경 위 본문 텍스트 |
| `marina-200` | `#b5d2e1` | 밝은 보더, 장식 |
| `marina-500` | `#1279a4` | Clear Ocean Blue — 장식 점·선 |
| `marina-600` | `#0e6285` | 아이브로우·링크·포커스 링 |
| `marina-700` | `#0b4f6c` | **Primary** — 버튼, 주요 강조 |
| `marina-800` | `#0c3e52` | 버튼 hover |
| `marina-900` | `#0b2d3a` | 제목 텍스트, 다크 섹션 배경 |
| `marina-950` | `#06222e` | 푸터 배경 |

### Aqua Accent (제한적 사용)

| 토큰 | 값 | 용도 |
|---|---|---|
| `aqua-300` | `#7ad0d9` | **다크 배경 전용** 텍스트·아이콘 |
| `aqua-500` | `#35b5c2` | 장식(신호선 등). **밝은 배경 위 텍스트 금지** (대비 2.6:1) |

### Neutrals (쿨 그레이)

| 토큰 | 값 | 용도 |
|---|---|---|
| `paper` | `#f8fafb` | 기본 페이지 배경 (Off White) |
| `surface` | `#ffffff` | 카드·섹션 배경 |
| `ink-900` | `#16232b` | 최고 대비 텍스트 |
| `ink-700` | `#3d4f5a` | 본문 텍스트 (8.1:1) |
| `ink-500` | `#5b707c` | 보조 텍스트 (4.95:1 — AA 통과) |
| `line-300` | `#c9d5dc` | 보더, 번호 장식 |
| `line-100` | `#e7edf1` | 미세 보더, 분할선 |

### 상태 색상 (로드맵)

색상만으로 상태를 구분하지 않고 **아이콘 + 한/영 라벨**을 항상 병행합니다 (`StatusBadge`).

| 상태 | 전경 | 배경 | 아이콘 | 대비 |
|---|---|---|---|---|
| Completed 완료 | `#166534` | `#e7f3ec` | CheckCircle2 | 6.26:1 |
| In Progress 진행 중 | `#0b4f6c` | `#e3eef5` | CircleDot | 7.58:1 |
| Planned 예정 | `#52616c` | `#edf1f4` | Circle | 5.63:1 |
| Future 향후 | `#596d7b` | `#f4f7f9` | CircleDashed | 5.01:1 |

모든 실사용 조합은 WCAG AA(일반 텍스트 4.5:1)를 계산으로 검증했습니다.

## 3. 타이포그래피

- **폰트**: Pretendard Variable (npm `pretendard` 패키지, 로컬 번들 — 외부 CDN 요청 없음). 폴백: Apple SD Gothic Neo, Noto Sans KR, system sans. 한글/영문 혼용에 자연스럽습니다.
- **본문**: 16px(1rem), line-height 1.7, letter-spacing -0.011em — 한국어 가독 기준.
- **위계**:
  - `h1`: 30→36→48px (모바일→데스크톱), bold, tracking-tight, `text-balance`
  - `h2`: 24→30→36px
  - `h3`: 16~18px bold
  - 아이브로우 라벨: 14px, semibold, `tracking-widest uppercase`
  - 보조: 14px / 캡션: 12px (본문에는 12px 미사용)
- 장식적·미래적 디스플레이 폰트 금지.

## 4. 간격 시스템

- 8px 기반 (Tailwind 기본 스케일 사용).
- 섹션 수직 패딩: 모바일 `py-14~16`(56~64px), 데스크톱 `py-20~28`(80~112px).
- 컨테이너: `max-w-6xl`(1152px) + `px-4 sm:px-6`. 좁은 읽기 콘텐츠는 `max-w-4xl`.
- 카드 내부 패딩: `p-5~7`.

## 5. 반경 (Radius)

| 토큰 | 값 | 용도 |
|---|---|---|
| `--radius-btn` | 999px | Liquid Glass 버튼 |
| `--radius-card` | 20px | 카드, 패널 |
| `rounded-full` | — | 배지, 칩, 아이콘 원 |

## 6. 그림자

Swiss 방향에 맞춰 보더 중심 + 그림자는 최소화합니다.

| 토큰 | 값 | 용도 |
|---|---|---|
| `--shadow-card` | `0 1px 2px rgb(11 45 58 / 0.05)` | 카드 기본 |
| `--shadow-card-hover` | `0 4px 16px rgb(11 45 58 / 0.10)` | 카드 hover |
| `--shadow-glass` | 다층 외부 그림자 + 흰색 inset highlight | 스크롤된 Liquid Glass 헤더 |

## 7. 버튼 (`components/ui/button-link.tsx`)

- 공통: `min-h-11`(44px 터치 타깃), pill 형태, 180ms 전환, 눌림 시 `scale(0.985)`.
- `primary`: marina tint를 사용하는 불투명도 높은 유리 버튼. 흰 텍스트 대비를 유지합니다.
- `secondary`: 흰색 반투명 표면 + line 보더 + marina 텍스트.
- `ghost`: 기본 상태에는 굴절을 적용하지 않고 hover에서만 얕은 표면을 표시합니다.
- `onDark`: 다크 섹션 전용 — `white/12` 배경 + `white/25` 보더.
- 헤더 자체가 유리층이므로 헤더 안 버튼에는 중첩 `backdrop-filter`를 적용하지 않습니다.
- 화살표는 `showArrow`로 옵트인.

## 8. 카드

- 기본: `bg-surface + border line-100 + radius-card + shadow-card`.
- hover: `shadow-card-hover` (모션 없이 그림자만).
- 본문 카드는 기본적으로 불투명 표면을 유지합니다. 모든 카드를 유리로 만드는 패턴은 금지합니다.
- 분할 그리드 카드: `grid gap-px bg-line-100` 기법으로 1px 분할선 (Problem, 검증 항목).
- 다크 패널: `bg-marina-900 + border-white/10 + bg-white/5` (PR1 다이어그램).
- 회사 구조도: Problem → LUN Approach → PR1(Current Focus) → PR2(Future Research)
  순서로 연결합니다. 공개용 구조도에는 내부 prestudy의 구현·검증 데이터를
  포함하지 않습니다.

### Liquid Glass 적용 범위

- `liquid-nav`: 스크롤 전에는 가볍게, 콘텐츠가 아래로 지나가면 불투명도·그림자를 높여 분리합니다.
- `liquid-control`: hover·press에 빛과 깊이가 반응하는 버튼입니다.
- `hero-glass-lens`: 포인터 위치에 따라 하이라이트와 최대 2.2° 기울기만 반응합니다.
- `prefers-reduced-transparency`, `prefers-reduced-motion`, `backdrop-filter` 미지원 환경에서 불투명 표면으로 폴백합니다.
- Apple 원칙에 따라 본문 콘텐츠층과 유리 조작층을 구분하고 glass-on-glass를 피합니다.

## 9. 배지 (`components/ui/badge.tsx`)

- `Badge tone="primary"` — Current Focus (marina-700 배경).
- `Badge tone="future"` — Future Research (marina-50 배경 + 보더; PR1과 시각적으로 명확히 구분).
- `StatusBadge` — 로드맵 상태. 아이콘 + 한글 + 영문 병기 (색상 단독 구분 금지 원칙).

## 10. 아이콘

- **Lucide React 단일 소스** (`components/ui/icon.tsx`의 `ContentIcon` 매핑). 이모지 아이콘 금지.
- 기본 `strokeWidth 1.5`, 크기 20~24px, 장식 아이콘은 `aria-hidden`.

## 11. 모션

허용 (모두 `prefers-reduced-motion: reduce`에서 자동 비활성 — `globals.css`):

- `Reveal` — IntersectionObserver 기반 섹션 등장 (400ms, 10px 상승, 1회만).
- `.signal-line` — 다이어그램 연결선의 신호 흐름 (dash offset, 1.6s).
- `.signal-pulse` — 히어로 동심 호의 은은한 펄스 (3.2s).
- 히어로 유리 렌즈 포인터 반응 — 비터치 포인터에서 최대 2.2° 기울기.
- 버튼·헤더 hover/press 전환 180~220ms.

금지: 패럴랙스, 스크롤 하이재킹, 자동재생 비디오, 전역 커서 추적, 텍스트 애니메이션, 로딩 인트로.
(21st의 Process Timeline 컴포넌트가 사용하는 스크롤 고정 가로 이동은 이 원칙에 따라 정적 세로 타임라인으로 재설계했습니다.)

**승인된 예외 — PR1 스크롤 스토리** (`components/sections/pr1-story.tsx`, 오너 요청으로 추가):
PR1 상세 페이지 상단의 캔버스 프레임 스크럽 섹션 1곳에 한해 스크롤 연동
스토리텔링을 허용합니다. 조건: ① 추상 개념 애니메이션만 사용(제품 렌더링 금지,
"개념 시각화" 라벨 필수) ② `prefers-reduced-motion`에서는 핀 고정 없는 정적
이미지 + 텍스트 목록으로 대체 ③ 스크롤 이벤트 리스너 없이 rAF 루프만 사용
④ 다른 페이지·섹션으로 확대하지 않음. 프레임 재생성은
`python scripts/generate_pr1_story_frames.py`.

## 12. 반응형 기준

| 브레이크포인트 | 확인 사항 |
|---|---|
| 375px | 단일 컬럼, 다이어그램 세로 전환, 모바일 메뉴, 오버플로 없음 |
| 768px (`md`) | 다이어그램 가로 전환, 2컬럼 그리드 |
| 1024px (`lg`) | 데스크톱 내비게이션 + CTA, 3~4컬럼 |
| 1440px | `max-w-6xl` 컨테이너로 중앙 정렬 유지 |

- 터치 타깃 최소 44px (`min-h-11`, `size-11`).
- 기술 다이어그램은 모바일에서 세로 구조 (`flex-col md:flex-row`) — 가로 잘림 없음.

## 13. 접근성 기준

- 시맨틱 HTML: `header/nav/main/footer/section/article`, `ol` 타임라인, `dl` 상태 설명.
- 페이지당 `h1` 1개, 제목 레벨 건너뛰기 없음 (자동 검증 완료).
- 키보드: 스킵 링크("본문 바로가기"), `:focus-visible` 2px marina-600 아웃라인.
- `aria-label`(아이콘 버튼·다이어그램), `aria-expanded`/`aria-controls`(모바일 메뉴), `aria-current="page"`(활성 메뉴), `aria-live="polite"`(폼 결과), `role="note"`(고지).
- 폼: 모든 입력에 `<label for>` 연결, `autocomplete` 지정.
- 색상 단독 정보 전달 금지 — 상태는 항상 아이콘+텍스트 병행.
- 모든 실사용 색 조합 WCAG AA 이상 (2절 표 참고).
- `prefers-reduced-motion` 전면 지원.

## 14. 사용 금지 패턴

- AI 보라·분홍 그라데이션, 네온, 사이버펑크, 게임 UI, 본문 전체를 덮는 과도한 Glassmorphism
- glass-on-glass 중첩, 저대비 투명 본문, 장식만을 위한 과도한 굴절
- 의미 없는 3D 오브젝트, 가짜 제품 목업·렌더링
- 과장 숫자, 가짜 후기, 가짜 파트너 로고, 존재하지 않는 특허·인증 표기
- "세계 최초", "상용화 완료", "판매 중" 등 검증되지 않은 주장
- 밝은 배경 위 `aqua-500` 텍스트 (대비 미달)
- PR1과 PR2를 동일한 개발 단계처럼 보이게 하는 배치
- prestudy의 보드·패킷·프로토콜·테스트 수치를 회사 소개 콘텐츠로 사용하는 것
- 이모지 아이콘, placeholder만으로 라벨을 대체하는 폼
