import SectionHeading from "@/components/ui/SectionHeading";
import { specs } from "@/lib/site-config";

export default function Specs() {
  return (
    <section
      id="specs"
      className="border-y border-white/6 bg-bg-alt px-5 py-[clamp(80px,10vw,140px)] md:px-12"
    >
      <div className="mx-auto max-w-[1200px]">
        <SectionHeading eyebrow="Техника" title="Технические характеристики" />

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-white/8 bg-white/8 sm:grid-cols-2 lg:grid-cols-4">
          {specs.map((spec) => (
            <div key={spec.label} className="bg-bg-alt px-8 py-9">
              <div className="text-[36px] font-extrabold tracking-[-0.02em] text-accent">
                {spec.value}
              </div>
              <div className="mt-2.5 text-sm text-fg/55">{spec.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
