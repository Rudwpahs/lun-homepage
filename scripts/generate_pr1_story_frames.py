"""
PR1 스토리 스크롤 스크럽용 개념 애니메이션 프레임 생성기.

LUNDA 진실성 규칙: 실제 제품처럼 보이는 렌더링을 만들지 않는다.
따라서 무선 신호·오디오 파형·공간·사람의 이동을 추상적인 선과 점으로만 표현한다.
(05_DESIGN_REQUIREMENTS / 09_TRUTH_AND_SAFETY_RULES 준수)

3단계 스토리 (홈의 Approach 카드와 동일한 구조):
  Phase 1 — Separate: 사람이 스마트폰(소스)에서 분리되어 걸어 나간다.
  Phase 2 — Connect : 송신 노드에서 무선 신호 아크가 공간을 가로질러 퍼진다.
  Phase 3 — Listen  : 사람 곁에 오픈이어 파형이 나타난다. 화면 없이 청취.

색상은 app/globals.css의 LUNDA 디자인 토큰과 동일 계열.

사용법: python scripts/generate_pr1_story_frames.py
출력:   public/frames/pr1-story/frame_0001.jpg ... frame_0100.jpg (1600x900)
"""

import math
import os

from PIL import Image, ImageDraw, ImageFilter

FRAME_COUNT = 100
W, H = 1600, 900

# LUNDA 토큰 (globals.css와 동일 계열)
BG = (6, 34, 46)          # marina-950
GRID = (12, 62, 82)       # marina-800
LINE = (181, 210, 225)    # marina-200
SOFT = (89, 130, 150)     # 흐려진 요소용
AQUA = (53, 181, 194)     # aqua-500
AQUA_L = (122, 208, 217)  # aqua-300
WHITE = (237, 244, 248)   # marina-50

OUT_DIR = os.path.join(os.path.dirname(__file__), "..", "public", "frames", "pr1-story")


def ease(t: float) -> float:
    t = max(0.0, min(1.0, t))
    return 4 * t * t * t if t < 0.5 else 1 - pow(-2 * t + 2, 3) / 2


def mix(c1, c2, a: float):
    return tuple(int(c1[i] + (c2[i] - c1[i]) * a) for i in range(3))


def build_base() -> Image.Image:
    """배경 + 점 그리드 + 은은한 글로우 (정적 — 한 번만 렌더)."""
    img = Image.new("RGB", (W, H), BG)
    draw = ImageDraw.Draw(img)
    for row in range(12):
        for col in range(21):
            x = 40 + col * 76
            y = 60 + row * 72
            draw.ellipse([x - 2, y - 2, x + 2, y + 2], fill=GRID)
    glow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    gd = ImageDraw.Draw(glow)
    gd.ellipse([W // 2 - 620, H // 2 - 320, W // 2 + 620, H // 2 + 320],
               fill=(18, 121, 164, 22))
    glow = glow.filter(ImageFilter.GaussianBlur(120))
    return Image.alpha_composite(img.convert("RGBA"), glow).convert("RGB")


BASE = build_base()

# 주요 좌표 (cover-fit 크롭을 고려해 중앙 안전 영역 위주 배치)
SRC_X, SRC_Y = 430, 585          # 소스(스마트폰+송신 노드) 위치
DEST_X = 1150                    # 사람 도착 지점
PATH_Y = 600                     # 이동 경로 기준선


def draw_phone(draw, dim: float):
    """스마트폰 + 송신 노드. dim 0→1이면 배경 쪽으로 흐려진다(뒤로 물러나는 기술)."""
    c = mix(LINE, mix(BG, SOFT, 0.55), dim)
    x, y, w, h = SRC_X, SRC_Y, 62, 122
    draw.rounded_rectangle([x - w // 2, y - h // 2, x + w // 2, y + h // 2],
                           radius=12, outline=c, width=4)
    draw.line([x - 14, y + h // 2 - 16, x + 14, y + h // 2 - 16], fill=c, width=3)


def draw_transmitter(draw, appear: float):
    """송신 노드: 폰 위 작은 안테나 점 — Phase 2에서 또렷해진다."""
    if appear <= 0.01:
        return
    c = mix(BG, AQUA, appear)
    x, y = SRC_X, SRC_Y - 92
    draw.line([x, y + 12, x, y + 30], fill=c, width=3)
    draw.ellipse([x - 7, y - 7, x + 7, y + 7], outline=c, width=3)
    draw.ellipse([x - 2, y - 2, x + 2, y + 2], fill=c)


def draw_path(draw, upto: float):
    """사람이 걸어간 자취 (점선)."""
    steps = 26
    for i in range(int(steps * upto)):
        f = i / steps
        x = SRC_X + 60 + (DEST_X - SRC_X - 60) * f
        y = PATH_Y + 34 - 26 * math.sin(f * math.pi * 0.9)
        draw.ellipse([x - 2.5, y - 2.5, x + 2.5, y + 2.5], fill=mix(GRID, LINE, 0.35))


def draw_person(draw, walk: float, bob_t: float):
    """머리(점) + 몸(선) — 추상적 인물."""
    f = ease(walk)
    x = SRC_X + 60 + (DEST_X - SRC_X - 60) * f
    y = PATH_Y - 26 * math.sin(f * math.pi * 0.9)
    bob = 3 * math.sin(bob_t * math.pi * 10) * (0.15 + 0.85 * min(1, walk * 4) * (1 - ease(max(0, walk * 1.05 - 0.05)) * 0))
    hy = y - 78 + bob
    draw.ellipse([x - 12, hy - 12, x + 12, hy + 12], outline=WHITE, width=4)
    draw.line([x, hy + 12, x - 4, y - 18], fill=WHITE, width=4)
    lean = 10 * math.sin(bob_t * math.pi * 10)
    draw.line([x - 4, y - 18, x - 10 - lean * 0.6, y + 8], fill=WHITE, width=4)
    draw.line([x - 4, y - 18, x + 6 + lean * 0.6, y + 8], fill=WHITE, width=4)
    return x, hy


def draw_arcs(draw, t_arc: float, strength: float):
    """송신 노드에서 사람 방향으로 퍼지는 신호 아크."""
    if strength <= 0.01:
        return
    ox, oy = SRC_X, SRC_Y - 92
    max_r = DEST_X - SRC_X + 60
    n = 4
    for k in range(n):
        r = ((t_arc * 0.55 + k / n) % 1.0) * max_r + 26
        fade = (1 - r / (max_r + 26)) * strength
        if fade <= 0.03:
            continue
        c = mix(BG, AQUA, fade * 0.9)
        draw.arc([ox - r, oy - r, ox + r, oy + r], start=-42, end=42,
                 fill=c, width=3)


def draw_listen(draw, px: float, py: float, strength: float, t: float):
    """사람 머리 옆 오픈이어 파형 + 이어 아크."""
    if strength <= 0.01:
        return
    c = mix(BG, AQUA_L, strength)
    draw.arc([px - 20, py - 20, px + 20, py + 20], start=-55, end=55, fill=c, width=3)
    for k in range(5):
        bx = px + 34 + k * 13
        amp = (6 + 10 * abs(math.sin(k * 1.7 + t * math.pi * 6))) * strength
        draw.line([bx, py - amp, bx, py + amp], fill=c, width=4)


def main():
    os.makedirs(OUT_DIR, exist_ok=True)
    for i in range(FRAME_COUNT):
        t = i / (FRAME_COUNT - 1)
        img = BASE.copy()
        draw = ImageDraw.Draw(img)

        p1 = max(0.0, min(1.0, t / 0.34))            # Separate
        p2 = max(0.0, min(1.0, (t - 0.30) / 0.36))   # Connect
        p3 = max(0.0, min(1.0, (t - 0.64) / 0.36))   # Listen

        walk = ease(min(1.0, t / 0.72))              # 이동은 t=0.72에 완료

        draw_path(draw, walk)
        draw_phone(draw, dim=ease(p1) * 0.75)
        draw_transmitter(draw, appear=min(1.0, p1 * 1.6))
        draw_arcs(draw, t_arc=t, strength=ease(p2))
        px, py = draw_person(draw, walk, bob_t=t)
        draw_listen(draw, px, py, strength=ease(p3), t=t)

        img.save(os.path.join(OUT_DIR, f"frame_{i + 1:04d}.jpg"), "JPEG", quality=84)
        if (i + 1) % 25 == 0:
            print(f"  {i + 1}/{FRAME_COUNT}")
    print(f"Done: {FRAME_COUNT} frames -> {os.path.abspath(OUT_DIR)}")


if __name__ == "__main__":
    main()
