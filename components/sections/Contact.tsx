"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { siteConfig } from "@/lib/site-config";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          phone: data.get("phone"),
          comment: data.get("comment"),
        }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error || "Не удалось отправить заявку");
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Не удалось отправить заявку"
      );
    }
  }

  return (
    <section
      id="contact"
      className="border-t border-white/6 bg-bg-alt px-5 py-[clamp(80px,10vw,140px)] md:px-12"
    >
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-14 lg:grid-cols-2">
        <div>
          <SectionHeading eyebrow="Контакты" title="Готовы обсудить заказ?" />
          <div className="mt-7 text-[15px] font-semibold text-fg/70">
            {siteConfig.contactName}
          </div>
          <a
            href={siteConfig.phoneHref}
            className="mt-1 block text-[clamp(28px,3.4vw,40px)] font-extrabold tracking-[-0.02em] text-fg"
          >
            {siteConfig.phone}
          </a>
          <div className="mt-2.5 text-[15px] text-fg/55">
            {siteConfig.workingHours}
          </div>
          <div className="mt-7 flex gap-3">
            <a
              href="#"
              className="rounded-full border border-white/14 px-[22px] py-3 text-sm font-semibold text-fg"
            >
              MAX
            </a>
          </div>
        </div>

        {status === "success" ? (
          <div className="flex flex-col items-center justify-center gap-3.5 rounded-3xl border border-white/8 bg-card p-9 text-center">
            <div className="text-lg font-bold text-fg">Заявка отправлена</div>
            <p className="text-[15px] text-fg/60">
              Мы свяжемся с вами в ближайшее время.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-3.5 rounded-3xl border border-white/8 bg-card p-9"
          >
            <label className="flex flex-col gap-2 text-[13px] font-semibold text-fg/60">
              Имя
              <input
                type="text"
                name="name"
                placeholder="Как к вам обращаться"
                className="rounded-xl border border-white/12 bg-bg px-4 py-3.5 font-sans text-[15px] text-fg placeholder:text-fg/40"
              />
            </label>
            <label className="flex flex-col gap-2 text-[13px] font-semibold text-fg/60">
              Телефон
              <input
                type="tel"
                name="phone"
                required
                placeholder="+7 ___ ___-__-__"
                className="rounded-xl border border-white/12 bg-bg px-4 py-3.5 font-sans text-[15px] text-fg placeholder:text-fg/40"
              />
            </label>
            <label className="flex flex-col gap-2 text-[13px] font-semibold text-fg/60">
              Комментарий
              <textarea
                name="comment"
                placeholder="Что нужно перевезти или установить"
                rows={3}
                className="resize-y rounded-xl border border-white/12 bg-bg px-4 py-3.5 font-sans text-[15px] text-fg placeholder:text-fg/40"
              />
            </label>
            {status === "error" && (
              <div className="text-sm text-red-400">{errorMessage}</div>
            )}
            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-2 rounded-full bg-gradient-to-br from-accent to-accent-light py-4 font-sans text-base font-bold text-bg disabled:opacity-60"
            >
              {status === "sending" ? "Отправляем…" : "Отправить заявку"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
