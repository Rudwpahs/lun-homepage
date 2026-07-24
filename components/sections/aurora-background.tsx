/**
 * 페이지 전역 오로라 배경.
 *
 * 글래스 표면이 굴절할 은은한 색을 화면 뒤에 깝니다. 순수 장식이므로
 * aria-hidden 처리하고 pointer-events는 CSS(.aurora)에서 none으로 막습니다.
 * 색·모션·투명도는 app/globals.css의 .aurora / .aurora__blob 정의를 따릅니다.
 * prefers-reduced-motion 환경에서는 CSS에서 드리프트 애니메이션이 정지됩니다.
 */
export function AuroraBackground() {
  return (
    <div className="aurora" aria-hidden>
      <div className="aurora__blob aurora__blob--1" />
      <div className="aurora__blob aurora__blob--2" />
      <div className="aurora__blob aurora__blob--3" />
    </div>
  );
}
