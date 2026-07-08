import Button from "@/components/ui/Button";
import { siteConfig } from "@/lib/site-config";

export default function Hero() {
  return (
    <section
      aria-label="Hero"
      className="relative flex min-h-[92vh] items-center overflow-hidden bg-bg px-5 pt-[140px] pb-20 md:px-12"
    >
      <div className="pointer-events-none absolute top-[-25%] left-1/2 h-[1200px] w-[1200px] max-w-[160vw] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(242,169,59,0.18)_0%,rgba(242,169,59,0)_68%)]" />

      <div className="relative mx-auto flex max-w-[900px] flex-col items-center text-center">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-accent/32 px-[18px] py-[9px] text-[13px] font-semibold tracking-[0.02em] text-accent">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
          {siteConfig.city} и {siteConfig.region}
        </div>

        <h1 className="m-0 text-[clamp(40px,6.2vw,84px)] leading-[1.05] font-extrabold tracking-[-0.03em] text-fg">
          Манипулятор, который приезжает вовремя
        </h1>

        <p className="mt-6 max-w-[620px] text-[clamp(17px,2vw,20px)] leading-[1.6] text-fg/64">
          Перевозка, погрузка и монтаж любой сложности. Современная техника,
          аккуратная работа и честная цена — по одному звонку.
        </p>

        <div className="mt-11 flex flex-wrap justify-center gap-4">
          <Button href={siteConfig.phoneHref} variant="primary" disabled>
            Позвонить: {siteConfig.phone}
          </Button>
          <Button href="#contact" variant="secondary">
            Оставить заявку
          </Button>
        </div>

        <div className="mt-[88px] flex w-full max-w-[760px] flex-wrap justify-center border-t border-white/8 pt-10">
          <div className="min-w-[160px] flex-1 px-5">
            <div className="text-[32px] font-extrabold text-accent">24/7</div>
            <div className="mt-1.5 text-sm text-fg/55">Без выходных</div>
          </div>
          <div className="min-w-[160px] flex-1 px-5">
            <div className="text-[32px] font-extrabold text-accent">
              {siteConfig.radiusKm} км
            </div>
            <div className="mt-1.5 text-sm text-fg/55">Радиус выезда</div>
          </div>
          <div className="min-w-[160px] flex-1 px-5">
            <div className="text-[32px] font-extrabold text-accent">до 3 т</div>
            <div className="mt-1.5 text-sm text-fg/55">
              Грузоподъёмность крана
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
