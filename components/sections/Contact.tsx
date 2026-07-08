"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import { siteConfig } from "@/lib/site-config";

export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-white/6 bg-bg-alt px-5 py-[clamp(80px,10vw,140px)] md:px-12"
    >
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-14 lg:grid-cols-2">
        <div>
          <SectionHeading eyebrow="Контакты" title="Готовы обсудить заказ?" />
          <a
            href={siteConfig.phoneHref}
            className="mt-7 block text-[clamp(28px,3.4vw,40px)] font-extrabold tracking-[-0.02em] text-fg"
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
              WhatsApp
            </a>
            <a
              href="#"
              className="rounded-full border border-white/14 px-[22px] py-3 text-sm font-semibold text-fg"
            >
              Telegram
            </a>
          </div>
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
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
          <button
            type="submit"
            className="mt-2 rounded-full bg-gradient-to-br from-accent to-accent-light py-4 font-sans text-base font-bold text-bg"
          >
            Отправить заявку
          </button>
        </form>
      </div>
    </section>
  );
}
