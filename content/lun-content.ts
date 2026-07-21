/**
 * LUN 웹사이트 콘텐츠 데이터.
 *
 * 페이지 문구는 최대한 이 파일에서 관리합니다. 문구를 수정할 때는
 * 컴포넌트 코드가 아니라 이 파일을 수정하세요.
 *
 * 진실성 원칙 (09_TRUTH_AND_SAFETY_RULES 기준):
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
  name: "LUN",
  tagline: "화면에서 벗어나도, 연결은 계속됩니다.",
  description:
    "LUN은 스마트폰 화면에 대한 의존을 줄이고, 이동과 일상 속에서 더 자연스럽게 오디오를 이용할 수 있는 새로운 인터페이스를 연구합니다.",
  vision:
    "LUN은 사람을 화면에 더 오래 붙잡아 두는 기술이 아니라, 필요한 순간에 기술이 자연스럽게 뒤로 물러나는 경험을 연구합니다.",
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
  title: "LUN의 접근 방식",
  description:
    "LUN은 화면과 오디오를 분리하는 것에서 출발해, 공간에 맞는 연결 방식을 검증하고, 화면 없는 청취 경험을 설계합니다.",
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

export const pr1 = {
  id: "pr1",
  name: "PR1",
  badge: "Current Focus",
  badgeKo: "현재 집중 개발",
  status: "Prototype Stage",
  stage: "Technology Validation",
  title: "분리형 무선 오디오 시스템",
  headline: "PR1: 현재 집중 개발 중인 분리형 무선 오디오 시스템",
  description:
    "PR1은 운동장, 공원, 산책로와 같은 일정 공간에서 스마트폰 화면을 계속 보지 않고도 오디오를 이용할 수 있도록 하는 LUN의 핵심 개발 프로젝트입니다.",
  coreIdea:
    "스마트폰 또는 오디오 입력 장치와 사용자의 청취 장치를 분리하고, 공간과 목적에 맞는 무선 전송 방식을 검증합니다.",
  diagram: [
    { label: "Audio Source", labelKo: "오디오 입력" },
    { label: "Processing", labelKo: "신호 처리" },
    { label: "SX1280 Wireless", labelKo: "무선 전송" },
    { label: "Receiver", labelKo: "수신기" },
    { label: "Open-Ear Output", labelKo: "오픈이어·골전도 출력" },
  ],
  researchDirections: [
    "송신기와 수신기를 분리한 오디오 시스템",
    "Wi-Fi 또는 일반적인 블루투스 오디오 방식에만 의존하지 않는 통신",
    "SX1280 2.4GHz 무선 통신 모듈 검토",
    "ESP32-S3 기반 개발 보드 검토",
    "microSD 또는 마이크 기반 오디오 입력",
    "골전도 또는 오픈이어 방식의 출력 장치",
    "저비용 프로토타입 제작",
    "실제 거리, 지연 시간, 음질, 배터리 소모 검증",
  ],
  validationItems: [
    { label: "전송 거리", icon: "ruler" },
    { label: "오디오 지연", icon: "timer" },
    { label: "음질", icon: "audio-waveform" },
    { label: "연결 안정성", icon: "link" },
    { label: "전력 소비", icon: "battery" },
    { label: "착용 편의성", icon: "user" },
    { label: "국내 전파 규정 준수 가능성", icon: "scale" },
  ],
  honestyNote:
    "PR1은 완성된 제품이 아니라 기술 검증이 진행 중인 프로토타입 프로젝트입니다. 이 페이지의 내용은 현재 연구 방향을 설명하며, 검증 결과에 따라 달라질 수 있습니다.",
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
    name: "Component Research",
    nameKo: "부품 검토",
    status: "In Progress",
    description: "SX1280, ESP32-S3, 오디오 입출력 검토",
  },
  {
    name: "Basic Wireless Communication Test",
    nameKo: "기본 무선 통신 테스트",
    status: "In Progress",
    description: "송수신 기본 통신 검증",
  },
  {
    name: "Audio Transmission Prototype",
    nameKo: "오디오 전송 프로토타입",
    status: "Planned",
    description: "오디오 데이터 전송 실험",
  },
  {
    name: "Indoor Range Test",
    nameKo: "실내 거리 테스트",
    status: "Planned",
    description: "실내 거리 및 안정성 테스트",
  },
  {
    name: "Outdoor Field Test",
    nameKo: "야외 현장 테스트",
    status: "Planned",
    description: "야외 환경 테스트",
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

export const researchSection = {
  title: "연구 및 기록",
  description:
    "LUN은 개발 과정에서의 검토와 실험을 기록으로 남기려 합니다. 아래 카테고리의 게시물은 준비 중이며, 검증이 진행되는 대로 공개할 예정입니다.",
  categories: [
    {
      title: "기술 검토",
      description: "무선 통신 모듈, 오디오 입출력 등 기술 요소 검토 기록",
      icon: "cpu",
    },
    {
      title: "프로토타입 실험",
      description: "프로토타입 제작 과정과 실험 결과 기록",
      icon: "flask-conical",
    },
    {
      title: "사용자 설문",
      description: "사용 시나리오와 수요를 확인하는 설문 결과",
      icon: "clipboard-list",
    },
    {
      title: "시장 검증",
      description: "유사 제품과 사용 환경에 대한 조사",
      icon: "search",
    },
    {
      title: "법률 및 인증 검토",
      description: "전파 규정 등 준수해야 할 제도에 대한 검토",
      icon: "scale",
    },
    {
      title: "개발 일지",
      description: "개발 과정의 시행착오와 진행 상황 기록",
      icon: "notebook-pen",
    },
  ],
  emptyStateLabel: "준비 중",
  emptyStateDescription: "아직 공개된 게시물이 없습니다.",
} as const;

export const contactSection = {
  title: "프로젝트에 의견을 남겨주세요.",
  description:
    "테스트 참여, 기술 협력, 멘토링, 지원사업 관련 문의를 남겨주시면 향후 개발 과정에 참고하겠습니다.",
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
  title: "LUN에 대하여",
  definition:
    "LUN은 스마트폰 화면에 대한 의존을 줄이고, 이동과 일상 속에서 더 자연스럽게 오디오를 이용할 수 있는 새로운 오디오 인터페이스를 연구하는 기술 프로젝트 브랜드입니다.",
  philosophy: [
    "현대 사용자는 음악, 알림, 안내, 학습, 운동 기록 등 많은 정보를 스마트폰을 통해 이용합니다. 하지만 오디오를 듣는 순간에도 스마트폰을 계속 소지하거나 화면을 확인해야 하는 경우가 많습니다.",
    "LUN은 기술을 더 오래 보게 만드는 것이 아니라, 필요한 순간에 기술이 자연스럽게 뒤로 물러나는 경험을 목표로 합니다.",
    "그래서 LUN의 모든 프로젝트는 실제 하드웨어와 실험을 기반으로, 과장 없이 단계적으로 검증하며 진행됩니다.",
  ],
  currentState:
    "LUN은 현재 제품을 판매하고 있지 않으며, PR1 프로토타입의 기술 검증에 집중하고 있습니다.",
} as const;
