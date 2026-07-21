import { ImageResponse } from "next/og";

export const alt = "LUN — Screen-light Audio Interface Research";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Open Graph 공유 이미지.
 * 빌드 타임 렌더러(satori)의 한글 폰트 제약을 피하기 위해
 * 이미지 안에서는 영문 워드마크만 사용합니다.
 */
export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#0b2d3a",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <svg width="120" height="60" viewBox="0 0 40 20" fill="none">
          <path
            d="M2 10C7 3 12 3 17 10C22 17 27 17 32 10"
            stroke="#7ad0d9"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <circle cx="37" cy="10" r="2" fill="#7ad0d9" />
        </svg>
        <div
          style={{
            display: "flex",
            fontSize: 96,
            fontWeight: 700,
            letterSpacing: "0.2em",
            marginTop: 24,
          }}
        >
          LUN
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 32,
            color: "#b5d2e1",
            marginTop: 16,
          }}
        >
          Screen-light Audio Interface Research
        </div>
      </div>
    ),
    { ...size },
  );
}
