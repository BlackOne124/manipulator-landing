import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import { services } from "@/lib/site-config";

export default function Services() {
  return (
    <section
      id="services"
      className="bg-bg px-5 py-[clamp(80px,10vw,140px)] md:px-12"
    >
      <div className="mx-auto max-w-[1200px]">
        <SectionHeading eyebrow="Услуги" title="Что мы делаем" />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.number}
              className="flex flex-col gap-4 rounded-3xl border border-white/8 bg-card p-10"
            >
              <div className="text-[15px] font-extrabold text-accent">
                {service.number}
              </div>
              <h3 className="m-0 text-[22px] font-bold tracking-[-0.01em] text-fg">
                {service.title}
              </h3>
              <p className="m-0 text-[15px] leading-[1.6] text-fg/60">
                {service.description}
              </p>
              <Link
                href="#contact"
                className="mt-auto pt-2 text-[15px] font-semibold text-accent hover:text-accent-light"
              >
                Узнать стоимость →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
