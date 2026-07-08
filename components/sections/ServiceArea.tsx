import SectionHeading from "@/components/ui/SectionHeading";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import { serviceAreaCities, siteConfig } from "@/lib/site-config";

export default function ServiceArea() {
  return (
    <section id="area" className="bg-bg px-5 py-[clamp(80px,10vw,140px)] md:px-12">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-14 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="Зона обслуживания"
            title={`${siteConfig.city} и ${siteConfig.region}`}
          />
          <p className="mt-5 max-w-[480px] text-base leading-[1.6] text-fg/60">
            Выезжаем в радиусе до {siteConfig.radiusKm} км от{" "}
            {siteConfig.city} — быстро подаём технику в соседние города и
            населённые пункты.
          </p>
          <div className="mt-8 flex flex-wrap gap-2.5">
            {serviceAreaCities.map((city) => (
              <span
                key={city}
                className="rounded-full border border-white/12 px-[18px] py-[9px] text-sm text-fg/80"
              >
                {city}
              </span>
            ))}
          </div>
        </div>

        <div className="relative h-[420px] w-full overflow-hidden rounded-[28px] border border-white/8">
          <ImagePlaceholder label="Карта зоны обслуживания" />
          <div className="pointer-events-none absolute bottom-5 left-5 rounded-full bg-bg/75 px-[18px] py-2.5 text-sm font-bold text-accent backdrop-blur-md">
            Радиус до {siteConfig.radiusKm} км
          </div>
        </div>
      </div>
    </section>
  );
}
