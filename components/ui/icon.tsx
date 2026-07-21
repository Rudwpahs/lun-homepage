import {
  AudioWaveform,
  Battery,
  Bluetooth,
  ClipboardList,
  Cpu,
  Ear,
  EyeOff,
  FlaskConical,
  Footprints,
  Link2,
  MapPin,
  NotebookPen,
  Radio,
  Ruler,
  Scale,
  Search,
  Smartphone,
  Split,
  Timer,
  User,
  type LucideIcon,
} from "lucide-react";

/**
 * 콘텐츠 데이터(content/lun-content.ts)의 아이콘 문자열을
 * Lucide 아이콘 컴포넌트로 변환하는 매핑.
 */
const iconMap: Record<string, LucideIcon> = {
  "audio-waveform": AudioWaveform,
  battery: Battery,
  bluetooth: Bluetooth,
  "clipboard-list": ClipboardList,
  cpu: Cpu,
  ear: Ear,
  "eye-off": EyeOff,
  "flask-conical": FlaskConical,
  footprints: Footprints,
  link: Link2,
  "map-pin": MapPin,
  "notebook-pen": NotebookPen,
  radio: Radio,
  ruler: Ruler,
  scale: Scale,
  search: Search,
  smartphone: Smartphone,
  split: Split,
  timer: Timer,
  user: User,
};

interface ContentIconProps {
  name: string;
  className?: string;
  strokeWidth?: number;
}

export function ContentIcon({
  name,
  className,
  strokeWidth = 1.5,
}: ContentIconProps) {
  const Icon = iconMap[name] ?? Radio;
  return <Icon className={className} strokeWidth={strokeWidth} aria-hidden />;
}
