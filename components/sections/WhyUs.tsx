import SectionHeading from "@/components/ui/SectionHeading";
import { advantages } from "@/lib/site-config";

export default function WhyUs() {
  return (
    <section id="why" className="bg-bg px-5 py-[clamp(80px,10vw,140px)] md:px-12">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeading eyebrow="Почему мы" title="Работаем без сюрпризов" />

        <div className="mt-16 grid grid-cols-1 gap-9 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((item) => (
            <div key={item.title} className="flex gap-4">
              <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
              <div>
                <div className="text-[17px] font-bold text-fg">{item.title}</div>
                <div className="mt-1.5 text-[15px] leading-[1.5] text-fg/55">
                  {item.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
