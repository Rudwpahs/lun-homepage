/**
 * LUNDA 웹사이트 콘텐츠 데이터.
 *
 * 페이지 문구는 최대한 이 파일에서 관리합니다. 문구를 수정할 때는
 * 컴포넌트 코드가 아니라 이 파일을 수정하세요.
 *
 * 진실성 원칙 (09_TRUTH_AND_SAFETY_RULES 기준):
 * - 이 사이트는 LUNDA 회사와 공개 가능한 연구 방향을 소개합니다.
 * - prestudy의 보드·패킷·프로토콜·테스트 데이터는 홈페이지 콘텐츠와 분리합니다.
 * - PR1은 "현재 핵심 개발 프로젝트"이며 완제품이 아닙니다.
 * - PR2는 "미래 연구 프로젝트"이며 PR1 검증 이후 구체화됩니다.
 * - 검증되지 않은 성능 수치, 후기, 파트너, 인증, 특허를 표기하지 않습니다.
 */

export type ProjectStatus = "Completed" | "In Progress" | "Planned" | "Future";

export const statusLabels: Record<ProjectStatus, string> = {
  Completed: "완료",
  "In Progress": "진행 중",
  Planned: "예정",
  Future: "향후",
};

export const brand = {
  name: "LUNDA",
  tagline: "화면에서 벗어나도, 연결은 계속됩니다.",
  description:
    "LUNDA는 스마트폰 화면에 대한 의존을 줄이고, 이동과 일상 속에서 더 자연스럽게 오디오를 이용할 수 있는 새로운 인터페이스를 연구합니다.",
  vision:
    "LUNDA는 사람을 화면에 더 오래 붙잡아 두는 기술이 아니라, 필요한 순간에 기술이 자연스럽게 뒤로 물러나는 경험을 연구합니다.",
  values: [
    {
      key: "Screen-light",
      description: "화면 의존을 줄이는 경험",
    },
    {
      key: "Human-centered",
      description: "사람의 집중과 움직임을 먼저 고려",
    },
    {
      key: "Open listening",
      description: "귀를 완전히 막지 않는 청취 경험",
    },
    {
      key: "Focus",
      description: "흐름이 끊기지 않는 몰입",
    },
    {
      key: "Mobility",
      description: "이동 중에도 자연스러운 오디오 이용",
    },
    {
      key: "Practical innovation",
      description: "실험과 검증을 바탕으로 한 현실적인 혁신",
    },
  ],
} as const;

export const problemSection = {
  title: "오디오는 자유로운데, 사용 방식은 아직 화면에 묶여 있습니다.",
  description:
    "스마트폰과 무선 이어폰은 이미 훌륭한 도구입니다. 다만 오디오를 이용하는 방식은 여전히 개인 기기와 화면 확인을 전제로 설계되어 있습니다.",
  points: [
    {
      title: "계속 소지해야 하는 스마트폰",
      description: "오디오를 듣기 위해 스마트폰을 계속 몸에 지녀야 합니다.",
      icon: "smartphone",
    },
    {
      title: "끊어지는 집중",
      description: "화면을 확인하는 과정에서 집중이 깨질 수 있습니다.",
      icon: "eye-off",
    },
    {
      title: "이동·운동 중의 불편",
      description:
        "이동과 운동 중 스마트폰 사용은 불편하고 때로는 위험할 수 있습니다.",
      icon: "footprints",
    },
    {
      title: "짧은 개인 연결의 전제",
      description: "기존 무선 이어폰은 개인 기기와의 짧은 연결을 전제로 합니다.",
      icon: "bluetooth",
    },
    {
      title: "검증되지 않은 공간 단위 오디오",
      description:
        "운동장·공원 같은 공간 단위의 새로운 오디오 이용 방식은 아직 충분히 검증되지 않았습니다.",
      icon: "map-pin",
    },
  ],
} as const;

export const approachSection = {
  title: "LUNDA의 접근 방식",
  description:
    "LUNDA는 화면과 오디오를 분리하는 것에서 출발해, 공간에 맞는 연결 방식을 검증하고, 화면 없는 청취 경험을 설계합니다.",
  cards: [
    {
      key: "Separate",
      title: "분리",
      description:
        "스마트폰과 오디오 수신 장치를 분리해 사용자의 움직임을 더 자유롭게 만듭니다.",
      icon: "split",
    },
    {
      key: "Connect",
      title: "연결",
      description: "공간과 목적에 적합한 무선 전송 방식을 실험하고 검증합니다.",
      icon: "radio",
    },
    {
      key: "Listen",
      title: "청취",
      description:
        "화면을 계속 확인하지 않고도 필요한 오디오를 자연스럽게 이용하는 경험을 설계합니다.",
      icon: "ear",
    },
  ],
} as const;

export const companyOverview = {
  title: "LUNDA는 하나의 질문에서 출발합니다.",
  description:
    "어떻게 하면 필요한 오디오는 남기고, 화면은 자연스럽게 뒤로 물러나게 할 수 있을까요? LUNDA의 현재 개발과 미래 연구는 이 질문에서 연결됩니다.",
  core: {
    label: "LUNDA / Company Direction",
    title: "화면 의존을 줄이는 오디오 인터페이스",
    description:
      "필요한 소리는 이어지고 화면은 뒤로 물러나는 경험을 연구·개발합니다.",
    principles: ["Screen-light", "Human-centered", "Practical innovation"],
  },
  journey: [
    {
      label: "Problem",
      labelKo: "문제",
      title: "필요한 오디오 때문에 화면까지 곁에 둡니다.",
      description:
        "듣는 일과 화면을 확인하는 일이 하나의 기기에 묶여 집중과 움직임을 방해할 수 있습니다.",
      tone: "neutral",
      icon: "smartphone",
    },
    {
      label: "LUNDA Approach",
      labelKo: "LUNDA의 접근",
      title: "화면과 청취 경험을 분리합니다.",
      description:
        "기술이 앞에 드러나기보다, 필요한 순간에 자연스럽게 뒤로 물러나는 사용 경험을 설계합니다.",
      tone: "neutral",
      icon: "split",
    },
    {
      label: "PR1 / Current Focus",
      labelKo: "현재 집중 개발",
      title: "공간 안에서 필요한 소리만 이어지는 경험",
      description:
        "화면과 청취 장치를 분리하고, 목적과 공간에 맞는 연결 경험을 현재 집중적으로 연구합니다.",
      tone: "primary",
      icon: "radio",
    },
    {
      label: "PR2 / Future Research",
      labelKo: "미래 연구",
      title: "더 작고 자연스러운 일상형 오디오",
      description:
        "PR1에서 확인한 사용자 경험을 바탕으로 더 자연스러운 착용 형태를 탐색합니다.",
      tone: "future",
      icon: "ear",
    },
  ],
  sequence:
    "PR1의 사용자 경험과 구현 가능성을 먼저 확인하고, 그 결과를 바탕으로 PR2의 형태와 방향을 구체화합니다.",
} as const;

export const pr1 = {
  id: "pr1",
  name: "PR1",
  badge: "Current Focus",
  badgeKo: "현재 집중 개발",
  status: "Current Research",
  stage: "Experience Validation",
  title: "분리형 무선 오디오 시스템",
  headline: "PR1: 화면과 청취를 분리하는 오디오 경험",
  description:
    "PR1은 스마트폰을 계속 들고 화면을 확인하지 않아도 필요한 오디오를 개인 청취 장치로 이어 주는 LUNDA의 현재 핵심 프로젝트입니다.",
  coreIdea:
    "오디오가 시작되는 자리와 사람이 듣는 자리를 분리해, 화면은 멀리 두고 필요한 소리만 자연스럽게 이어지는 경험을 설계합니다.",
  diagram: [
    { label: "Keep", labelKo: "화면은 제자리에" },
    { label: "Separate", labelKo: "화면과 청취 분리" },
    { label: "Connect", labelKo: "공간에 맞게 연결" },
    { label: "Listen", labelKo: "필요한 소리만 청취" },
  ],
  researchDirections: [
    "스마트폰을 계속 소지하지 않아도 청취할 수 있는 사용 흐름",
    "공간과 목적에 맞는 개인 오디오 연결 경험",
    "집중과 이동을 방해하지 않는 단순한 조작",
    "주변 환경을 함께 인지할 수 있는 개방형 청취",
    "학습·산책·운동 등 사용 장면별 적합성",
    "실제 사용에서 느끼는 안정감·편의성·안전성",
    "법규와 인증을 고려한 책임 있는 제품화 가능성",
    "사용자 피드백을 반영한 제품 방향",
  ],
  validationItems: [
    { label: "연결 신뢰성", icon: "link" },
    { label: "청취 명료도", icon: "audio-waveform" },
    { label: "조작 단순성", icon: "user" },
    { label: "착용 편안함", icon: "ear" },
    { label: "주변 인지", icon: "eye-off" },
    { label: "사용 맥락 적합성", icon: "map-pin" },
    { label: "안전·규정 적합성", icon: "scale" },
  ],
  honestyNote:
    "PR1은 현재 연구·개발 중인 프로젝트이며 아직 판매 제품이 아닙니다. 이 페이지는 공개 가능한 제품 방향과 사용자 경험을 설명하며, 검증 결과에 따라 달라질 수 있습니다.",
} as const;

export const pr2 = {
  id: "pr2",
  name: "PR2",
  badge: "Future Research",
  badgeKo: "미래 연구",
  status: "Exploration Phase",
  stage: "Planned After PR1 Validation",
  title: "초소형 오픈이어 오디오 연구",
  headline: "PR2: 차세대 초소형 오픈이어 오디오 연구",
  description:
    "PR2는 귀를 완전히 막지 않으면서도 외부에서 잘 보이지 않는 일상형 오디오 장치를 탐색하는 미래 연구 프로젝트입니다. PR1 검증 이후 본격적인 개발 방향을 구체화합니다.",
  keywords: [
    {
      key: "초소형",
      description: "일상에서 부담 없는 크기와 무게를 탐색합니다.",
    },
    {
      key: "저노출",
      description: "겉으로 드러나는 요소를 줄인 절제된 착용감을 연구합니다.",
    },
    {
      key: "오픈이어",
      description: "귀를 막지 않아 주변 소리를 함께 들을 수 있는 구조를 지향합니다.",
    },
  ],
  researchDirections: [
    "초소형 저노출 디자인",
    "귀 내부의 자연스러운 공간을 활용하는 착용 방식",
    "실리콘 또는 유연한 소재를 이용한 안정적인 고정",
    "오픈이어 또는 연골전도 방식",
    "음성 중심의 선명한 오디오",
    "주변 소리를 들을 수 있는 안전성",
    "외부로 새어 나가는 소리 감소",
    "운동용보다는 일상용 제품에 우선 집중",
  ],
  relationToPr1:
    "PR2는 PR1과 동시에 진행되는 제품이 아닙니다. PR1에서 무선 오디오 전송, 사용 시나리오, 사용자 반응, 안전성 등을 먼저 검증한 뒤 PR2의 형태와 제품 방향을 구체화합니다.",
  honestyNote:
    "PR2는 아직 탐색 단계의 연구 프로젝트입니다. 완성된 제품이나 확정된 디자인이 존재하지 않으며, PR1 검증 결과에 따라 방향이 조정될 수 있습니다.",
} as const;

export interface RoadmapStep {
  name: string;
  nameKo: string;
  status: ProjectStatus;
  description: string;
}

export const pr1Roadmap: RoadmapStep[] = [
  {
    name: "Problem Definition",
    nameKo: "문제 정의",
    status: "Completed",
    description: "문제 정의와 사용 시나리오 정리",
  },
  {
    name: "Experience Concept",
    nameKo: "경험 개념 정리",
    status: "In Progress",
    description: "화면과 청취를 분리하는 핵심 경험 정리",
  },
  {
    name: "Feasibility Research",
    nameKo: "구현 가능성 검토",
    status: "In Progress",
    description: "핵심 경험을 구현할 수 있는지 단계적으로 확인",
  },
  {
    name: "Experience Prototype",
    nameKo: "경험 시제품",
    status: "Planned",
    description: "사용 흐름을 확인할 수 있는 시제품 구성",
  },
  {
    name: "Controlled Validation",
    nameKo: "통제 환경 검증",
    status: "Planned",
    description: "안정적인 환경에서 핵심 경험 검증",
  },
  {
    name: "Field Validation",
    nameKo: "사용 환경 검증",
    status: "Planned",
    description: "실제 사용 장면에서 적합성과 안전성 확인",
  },
  {
    name: "User Feedback",
    nameKo: "사용자 피드백",
    status: "Planned",
    description: "설문 및 테스트 피드백",
  },
  {
    name: "Product Direction Decision",
    nameKo: "제품 방향 결정",
    status: "Future",
    description: "제품화 방향 판단",
  },
];

export const pr2Roadmap: RoadmapStep[] = [
  {
    name: "Concept Definition",
    nameKo: "컨셉 정의",
    status: "In Progress",
    description: "저노출 오픈이어 컨셉 정리",
  },
  {
    name: "Anatomical Fit Study",
    nameKo: "착용 구조 검토",
    status: "Planned",
    description: "착용 위치와 고정 방식 검토",
  },
  {
    name: "Sound Leakage Research",
    nameKo: "소리 누출 연구",
    status: "Planned",
    description: "음성 중심 저누출 구조 검토",
  },
  {
    name: "Industrial Design Direction",
    nameKo: "제품 디자인 방향",
    status: "Planned",
    description: "일상형 제품 디자인 탐색",
  },
  {
    name: "Prototype Planning",
    nameKo: "프로토타입 계획",
    status: "Future",
    description: "PR1 검증 이후 구체화",
  },
];

export const developmentSection = {
  title: "LUNDA는 문제부터 검증합니다.",
  description:
    "외부에 공개하는 개발 페이지는 부품 목록이나 실험 로그가 아니라, LUNDA가 어떤 기준으로 제품을 연구하고 판단하는지 설명합니다.",
  principles: [
    {
      key: "Problem First",
      title: "문제부터 시작",
      description:
        "기술을 먼저 정하지 않고, 사용자가 겪는 불편과 실제 사용 장면을 먼저 정의합니다.",
      icon: "search",
    },
    {
      key: "One Gate at a Time",
      title: "한 번에 하나의 관문",
      description:
        "가장 불확실한 가정을 하나씩 확인해 불필요한 확장과 과장을 줄입니다.",
      icon: "split",
    },
    {
      key: "Evidence Before Claims",
      title: "주장보다 근거",
      description:
        "확인된 사실, 현재의 가설, 앞으로의 계획을 구분해 설명합니다.",
      icon: "clipboard-list",
    },
    {
      key: "Responsible by Design",
      title: "책임 있는 제품화",
      description:
        "사용자 경험과 함께 안전, 법규, 인증 가능성을 초기부터 검토합니다.",
      icon: "scale",
    },
  ],
  portfolio: [
    {
      name: "PR1",
      badge: "Current Focus",
      tone: "primary",
      title: "화면과 청취를 분리하는 오디오 경험",
      description:
        "현재 가장 먼저 사용자 가치와 구현 가능성을 확인하고 있는 핵심 프로젝트입니다.",
      href: "/projects/pr1",
    },
    {
      name: "PR2",
      badge: "Future Research",
      tone: "future",
      title: "더 작고 자연스러운 일상형 오디오",
      description:
        "PR1에서 얻은 근거를 바탕으로 이후 구체화할 미래 연구 프로젝트입니다.",
      href: "/projects/pr2",
    },
  ],
  disclosure:
    "LUNDA는 확인되지 않은 성능, 완성되지 않은 제품, 확정되지 않은 일정은 성과처럼 표현하지 않습니다.",
} as const;

export const researchSection = {
  title: "LUNDA의 연구 방향",
  description:
    "LUNDA는 특정 부품이나 하나의 제품 형태보다, 화면 의존을 줄이는 오디오 경험을 중심으로 연구합니다.",
  categories: [
    {
      label: "Experience",
      title: "Screen-light Experience",
      description:
        "필요한 정보는 이어지되 화면 확인은 줄어드는 사용 흐름과 인터페이스를 연구합니다.",
      icon: "eye-off",
    },
    {
      label: "Connection",
      title: "Spatial Audio Interface",
      description:
        "개인 기기 중심의 연결을 넘어, 목적과 공간에 맞는 오디오 이용 방식을 탐색합니다.",
      icon: "radio",
    },
    {
      label: "Listening",
      title: "Open Listening",
      description:
        "귀를 완전히 막지 않고 주변 환경을 함께 인지할 수 있는 청취 경험을 지향합니다.",
      icon: "ear",
    },
    {
      label: "Human",
      title: "Human-centered Validation",
      description:
        "성능 수치뿐 아니라 집중, 이동, 편안함, 조작 부담 같은 실제 경험을 함께 확인합니다.",
      icon: "user",
    },
    {
      label: "Responsibility",
      title: "Responsible Technology",
      description:
        "안전과 법규, 인증 가능성을 제품 방향과 분리하지 않고 초기부터 함께 검토합니다.",
      icon: "scale",
    },
    {
      label: "Future",
      title: "Everyday Form Factor",
      description:
        "PR1에서 얻은 근거를 바탕으로 더 작고 자연스러운 일상형 오디오 형태를 탐색합니다.",
      icon: "search",
    },
  ],
} as const;

export const contactSection = {
  title: "프로젝트에 의견을 남겨주세요.",
  description:
    "테스트 참여, 기술 협력, 멘토링, 지원사업 관련 문의를 남겨주시면 향후 연구와 제품 방향에 참고하겠습니다.",
  inquiryTypes: [
    "프로젝트 의견",
    "테스트 참여",
    "기술 협력",
    "멘토링 및 자문",
    "지원사업 관련 연락",
  ],
  devNotice:
    "현재 문의 폼은 개발 중인 기능입니다. 아직 전송 서버가 연결되어 있지 않아 메시지가 실제로 접수되지 않습니다.",
} as const;

/**
 * PR1 스크롤 스토리 (개념 시각화).
 * 실제 제품 렌더링이 아닌 추상 개념 애니메이션임을 항상 명시한다.
 */
export const pr1Story = {
  label: "PR1 Concept",
  labelKo: "개념 시각화",
  honesty: "추상 개념 애니메이션입니다. 실제 제품의 형상이 아닙니다.",
  phases: [
    {
      key: "Separate",
      title: "분리",
      description:
        "스마트폰과 청취 장치를 분리합니다. 화면은 제자리에 두고, 사람은 움직입니다.",
    },
    {
      key: "Connect",
      title: "연결",
      description:
        "송신 노드가 공간에 맞는 무선 전송 방식으로 오디오를 실어 보냅니다.",
    },
    {
      key: "Listen",
      title: "청취",
      description:
        "귀를 막지 않는 방식으로, 화면을 보지 않고 필요한 오디오를 듣습니다.",
    },
  ],
} as const;

export const aboutSection = {
  title: "LUNDA에 대하여",
  definition:
    "LUNDA는 스마트폰 화면에 대한 의존을 줄이고, 이동과 일상 속에서 더 자연스럽게 오디오를 이용할 수 있는 새로운 오디오 인터페이스를 연구하는 기술 프로젝트 브랜드입니다.",
  philosophy: [
    "현대 사용자는 음악, 알림, 안내, 학습, 운동 기록 등 많은 정보를 스마트폰을 통해 이용합니다. 하지만 오디오를 듣는 순간에도 스마트폰을 계속 소지하거나 화면을 확인해야 하는 경우가 많습니다.",
    "LUNDA는 기술을 더 오래 보게 만드는 것이 아니라, 필요한 순간에 기술이 자연스럽게 뒤로 물러나는 경험을 목표로 합니다.",
    "그래서 LUNDA의 모든 프로젝트는 실제 하드웨어와 실험을 기반으로, 과장 없이 단계적으로 검증하며 진행됩니다.",
  ],
  currentState:
    "LUNDA는 현재 제품을 판매하고 있지 않으며, PR1의 사용자 가치와 구현 가능성을 단계적으로 확인하고 있습니다.",
} as const;
