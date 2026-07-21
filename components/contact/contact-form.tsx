"use client";

import { useState } from "react";
import { Info } from "lucide-react";
import { contactSection } from "@/content/lun-content";

/**
 * 문의 폼 — 개발용(백엔드 미연결) 상태.
 *
 * ⚠️ 아직 전송 서버(API Route, 이메일 서비스 등)가 연결되어 있지 않습니다.
 * 전송 성공을 허위로 표시하지 않고, 제출 시 개발 중 안내를 보여줍니다.
 * 백엔드 연결 방법은 README.md의 "문의 폼 백엔드 연결" 항목을 참고하세요.
 */
export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // TODO(backend): 폼 데이터를 실제 접수 엔드포인트로 전송하도록 교체하세요.
    // 현재는 어떤 서버로도 데이터를 보내지 않습니다.
    setSubmitted(true);
  }

  return (
    <div>
      {/* 개발용 상태 안내 배너 */}
      <div
        role="note"
        className="mb-8 flex items-start gap-3 rounded-(--radius-card) border border-marina-200 bg-marina-50 p-4 text-sm leading-relaxed text-marina-800"
      >
        <Info className="mt-0.5 size-4 shrink-0" aria-hidden />
        <p>{contactSection.devNotice}</p>
      </div>

      <form onSubmit={handleSubmit} noValidate={false} className="space-y-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="contact-name"
              className="mb-2 block text-sm font-semibold text-marina-900"
            >
              이름
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              required
              autoComplete="name"
              className="w-full min-h-11 rounded-(--radius-btn) border border-line-300 bg-surface px-4 py-2.5 text-base text-ink-900 placeholder:text-ink-500/60 focus:border-marina-500"
              placeholder="홍길동"
            />
          </div>
          <div>
            <label
              htmlFor="contact-email"
              className="mb-2 block text-sm font-semibold text-marina-900"
            >
              이메일
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className="w-full min-h-11 rounded-(--radius-btn) border border-line-300 bg-surface px-4 py-2.5 text-base text-ink-900 placeholder:text-ink-500/60 focus:border-marina-500"
              placeholder="you@example.com"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="contact-type"
            className="mb-2 block text-sm font-semibold text-marina-900"
          >
            문의 유형
          </label>
          <select
            id="contact-type"
            name="type"
            required
            className="w-full min-h-11 cursor-pointer rounded-(--radius-btn) border border-line-300 bg-surface px-4 py-2.5 text-base text-ink-900 focus:border-marina-500"
            defaultValue=""
          >
            <option value="" disabled>
              문의 유형을 선택해주세요
            </option>
            {contactSection.inquiryTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="contact-message"
            className="mb-2 block text-sm font-semibold text-marina-900"
          >
            메시지
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={6}
            className="w-full rounded-(--radius-btn) border border-line-300 bg-surface px-4 py-3 text-base text-ink-900 placeholder:text-ink-500/60 focus:border-marina-500"
            placeholder="프로젝트에 대한 의견이나 문의 내용을 남겨주세요."
          />
        </div>

        <div className="flex items-start gap-3">
          <input
            id="contact-consent"
            name="consent"
            type="checkbox"
            required
            className="mt-1 size-5 cursor-pointer accent-marina-700"
          />
          <label
            htmlFor="contact-consent"
            className="text-sm leading-relaxed text-ink-700"
          >
            문의 응대 목적의 개인정보(이름, 이메일) 수집·이용에 동의합니다.
            수집된 정보는 문의 처리 이외의 목적으로 사용하지 않습니다.
          </label>
        </div>

        <button
          type="submit"
          className="inline-flex min-h-11 cursor-pointer items-center justify-center rounded-(--radius-btn) bg-marina-700 px-6 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-marina-800 active:bg-marina-900"
        >
          문의 보내기
        </button>

        {/* 제출 시: 허위 성공 대신 정직한 개발 중 안내 (스크린리더에 즉시 전달) */}
        <div aria-live="polite">
          {submitted && (
            <p className="rounded-(--radius-btn) border border-line-300 bg-line-100 p-4 text-sm leading-relaxed text-ink-700">
              아직 문의 접수 서버가 연결되지 않아 메시지가 전송되지 않았습니다.
              불편을 드려 죄송합니다. 폼 기능은 준비되는 대로 활성화됩니다.
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
