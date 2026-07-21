import { cn } from "@/lib/utils";

interface DiagramNode {
  label: string;
  labelKo: string;
}

interface SignalDiagramProps {
  nodes: readonly DiagramNode[];
  className?: string;
}

/** 노드 사이 연결선: 데스크톱은 가로, 모바일은 세로. 장식 요소이므로 aria-hidden */
function Connector() {
  return (
    <li aria-hidden className="flex items-center justify-center">
      {/* 세로 (모바일) */}
      <svg className="h-10 w-6 md:hidden" viewBox="0 0 24 40" fill="none">
        <line
          x1="12"
          y1="2"
          x2="12"
          y2="30"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className="signal-line text-aqua-500"
        />
        <path
          d="M7 30L12 37L17 30"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-aqua-500"
        />
      </svg>
      {/* 가로 (데스크톱) */}
      <svg className="hidden h-6 w-10 md:block" viewBox="0 0 40 24" fill="none">
        <line
          x1="2"
          y1="12"
          x2="30"
          y2="12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className="signal-line text-aqua-500"
        />
        <path
          d="M30 7L37 12L30 17"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-aqua-500"
        />
      </svg>
    </li>
  );
}

/**
 * PR1 시스템 구조 다이어그램.
 * 짙은 Marina Blue 배경 위에서 사용하는 것을 전제로 한 색상입니다.
 * 모바일에서는 세로 구조로 전환되어 가로로 잘리지 않습니다.
 */
export function SignalDiagram({ nodes, className }: SignalDiagramProps) {
  return (
    <ol
      aria-label="PR1 오디오 전송 구조"
      className={cn(
        "flex flex-col items-stretch md:flex-row md:items-center",
        className,
      )}
    >
      {nodes.map((node, index) => (
        // Fragment 대신 배열 평탄화를 피하기 위해 노드와 연결선을 나란히 렌더
        <NodeWithConnector
          key={node.label}
          node={node}
          index={index}
          isLast={index === nodes.length - 1}
        />
      ))}
    </ol>
  );
}

function NodeWithConnector({
  node,
  index,
  isLast,
}: {
  node: DiagramNode;
  index: number;
  isLast: boolean;
}) {
  return (
    <>
      <li className="flex-1">
        <div className="flex h-full min-h-20 flex-col justify-center rounded-(--radius-card) border border-white/15 bg-white/5 px-4 py-3 text-center">
          <span className="text-xs font-semibold tracking-widest text-aqua-300">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="mt-1 text-sm font-semibold text-white">
            {node.label}
          </span>
          <span className="text-xs text-marina-100/70">{node.labelKo}</span>
        </div>
      </li>
      {!isLast && <Connector />}
    </>
  );
}
