# LUN 공식 홈페이지

LUN은 스마트폰 화면 의존을 줄이는 오디오 인터페이스를 연구하는 기술 프로젝트 브랜드입니다.
이 저장소는 LUN의 공식 홈페이지(한국어 중심) 소스입니다.

- **PR1** — 현재 핵심 개발 프로젝트: 분리형 무선 오디오 시스템 (Current Focus / Prototype Stage)
- **PR2** — 미래 연구 프로젝트: 초소형 오픈이어 오디오 (Future Research / Exploration Phase)

> 이 사이트는 기술 검증 단계의 프로젝트를 소개합니다.
> 검증되지 않은 성능 수치·후기·파트너·인증을 표기하지 않는 것이 콘텐츠 원칙입니다.
> 자세한 규칙은 `content/lun-content.ts` 상단 주석과 `DESIGN_SYSTEM.md`를 참고하세요.

## 기술 스택

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4 (`app/globals.css`의 `@theme` 토큰)
- Lucide React 아이콘
- Pretendard Variable (npm 패키지, 로컬 번들)
- ESLint 9

## 실행 방법

Node.js 20.9 이상이 필요합니다 (Next.js 16 요구사항, LTS 권장).

Node가 없다면 [nodejs.org](https://nodejs.org)에서 LTS를 설치하세요.
포터블 버전을 쓴다면 실행 전 해당 경로를 `PATH`에 추가하면 됩니다.

```bash
npm install       # 의존성 설치
npm run dev       # 개발 서버 (http://localhost:3000)
npm run lint      # ESLint
npm run build     # 프로덕션 빌드
npm run start     # 빌드 결과 실행
```

## 폴더 구조

```
app/                    # 라우트 (App Router)
  layout.tsx            # 공통 레이아웃, 메타데이터, 스킵 링크
  page.tsx              # 홈
  projects/pr1/         # PR1 상세
  projects/pr2/         # PR2 상세
  development/          # 개발 로드맵
  research/             # 연구·기록 (준비 중 상태)
  about/                # 브랜드 비전
  contact/              # 문의 폼 (개발용)
  sitemap.ts robots.ts opengraph-image.tsx
components/
  layout/               # Header, Footer, Logo, PageHero
  sections/             # 홈·상세 페이지 섹션
  ui/                   # Badge, ButtonLink, SectionHeading, Reveal, Icon
  contact/              # ContactForm
content/
  lun-content.ts        # ★ 모든 사이트 문구·데이터 (콘텐츠와 UI 분리)
lib/
  site-config.ts        # 사이트 URL, 내비게이션
  utils.ts              # cn 헬퍼
public/brand/           # 로고 SVG 플레이스홀더
DESIGN_SYSTEM.md        # 디자인 시스템 확정본
design-system/lun/      # UI UX Pro Max 생성 원본 (참고용)
```

## 페이지 설명

| 경로 | 내용 |
|---|---|
| `/` | 히어로, 문제 정의, 접근 방식, **PR1 핵심 섹션(최대 비중)**, PR2 프리뷰(작은 비중), 로드맵 프리뷰, 비전, 문의 CTA |
| `/projects/pr1` | PR1 개요, **스크롤 개념 스토리(Separate→Connect→Listen)**, 시스템 구조 다이어그램, 검증 항목, 8단계 로드맵, 정직 고지 |
| `/projects/pr2` | PR2 키워드·연구 방향, PR1과의 관계, 5단계 로드맵, 정직 고지 |
| `/development` | 상태 라벨 안내, PR1/PR2 전체 로드맵, 개발 일지(준비 중) |
| `/research` | 6개 기록 카테고리 — 게시물이 없으므로 전부 "준비 중" 표시 |
| `/about` | 브랜드 정의, 철학, 비전 인용, 6가지 가치 |
| `/contact` | 문의 폼 — **백엔드 미연결(개발용) 상태를 UI에 명시** |

## 콘텐츠 수정 방법

문구·로드맵·검증 항목은 전부 `content/lun-content.ts`에서 수정합니다.
컴포넌트 파일을 열 필요가 없습니다. 예:

- 로드맵 단계 상태 변경 → `pr1Roadmap`의 `status` 값 수정 (`"Completed" | "In Progress" | "Planned" | "Future"`)
- 검증 항목 추가 → `pr1.validationItems`에 항목 추가
- 내비게이션 변경 → `lib/site-config.ts`의 `navItems`

## PR1 스크롤 스토리 (개념 애니메이션)

`/projects/pr1` 상단의 스크롤 연동 애니메이션은 사전 렌더된 100장의 JPEG
프레임(`public/frames/pr1-story/`)을 캔버스에 스크럽하는 방식입니다.

- 프레임 수정: `scripts/generate_pr1_story_frames.py` 편집 후
  `python scripts/generate_pr1_story_frames.py` 실행 (Pillow 필요)
- 프레임 수를 바꾸면 `components/sections/pr1-story.tsx`의 `FRAME_COUNT`도 갱신
- 캡션 문구: `content/lun-content.ts`의 `pr1Story`
- 접근성: `prefers-reduced-motion` 환경에서는 정적 이미지+텍스트로 자동 대체
- 진실성 규칙에 따라 추상 개념 시각화만 사용합니다(제품 렌더링 금지, 라벨 명시)

## 이미지 교체 방법

현재 프로토타입 사진이 없으므로 개념 다이어그램과 추상 SVG만 사용합니다(가짜 렌더링 금지 원칙).
실제 사진이 준비되면:

1. `public/images/`에 파일 추가 (WebP 권장)
2. 해당 섹션에 `next/image`의 `<Image src="/images/..." alt="설명" width={} height={} />` 추가
3. `alt` 텍스트 필수

## 로고 교체 방법

로고는 `components/layout/logo.tsx` 한 곳에서만 렌더링됩니다.
고래 심볼 로고가 확정되면:

1. `public/brand/`에 SVG 추가
2. `logo.tsx` 내부의 임시 웨이브 SVG를 `<Image>` 또는 인라인 SVG로 교체
3. `onDark` prop(푸터용 밝은 버전) 분기를 유지

## 문의 폼 백엔드 연결 방법

`components/contact/contact-form.tsx`는 현재 어떤 서버로도 데이터를 보내지 않으며,
제출 시 "전송되지 않았습니다" 안내를 표시합니다(허위 성공 표시 금지).

연결 절차:

1. `app/api/contact/route.ts` 생성 — `POST` 핸들러에서 이메일 발송(예: Resend) 또는 스프레드시트/DB 저장
2. `contact-form.tsx`의 `handleSubmit`에서 `fetch("/api/contact", { method: "POST", body: ... })` 호출로 교체
3. 성공/실패 상태를 실제 응답 기준으로 표시하고, 개발용 안내 배너(`devNotice`) 제거
4. 스팸 방지(rate limit, honeypot) 추가 권장

## 배포 방법

1. 환경변수 `NEXT_PUBLIC_SITE_URL`을 실제 도메인으로 설정 (sitemap/OG 메타데이터에 사용)
2. Vercel: 저장소 연결 후 기본 설정으로 배포 가능
3. 기타 Node 호스팅: `npm run build && npm run start`
4. 배포 후 `/sitemap.xml`, `/robots.txt`, OG 미리보기 확인

## 아직 미완성인 기능

- **문의 폼 백엔드** — 미연결 (개발용 안내 표시 중)
- **Research 게시물** — 카테고리만 존재, 콘텐츠는 "준비 중"
- **개발 일지** — 준비 중 상태
- **확정 로고** — 텍스트 워드마크 + 임시 심볼 사용 중
- **다국어(영어) 버전** — 초기 버전은 한국어 중심
- **프로토타입 실물 사진** — 확보 시 교체 (가짜 렌더링은 만들지 않음)

## 개발 도구 메모

- `.mcp.json` — 21st.dev MCP 서버 설정. API 키는 `MCP_21ST_API_KEY` 환경변수로만 참조하며 저장소에는 값이 들어가지 않습니다.
- `.claude/` — 로컬 에이전트 도구 설정(스킬 번들, 개인 승인 설정)으로 `.gitignore` 처리되어 있습니다. 사이트 코드와 무관합니다.
- `design-system/lun/` — 디자인 시스템 생성 도구의 원본 출력(참고용). 확정본은 `DESIGN_SYSTEM.md`입니다.
