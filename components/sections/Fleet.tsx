import SectionHeading from "@/components/ui/SectionHeading";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import { fleet } from "@/lib/site-config";

export default function Fleet() {
  return (
    <section
      id="fleet"
      className="border-y border-white/6 bg-bg-alt px-5 py-[clamp(80px,10vw,140px)] md:px-12"
    >
      <div className="mx-auto max-w-[1200px]">
        <SectionHeading eyebrow="Парк техники" title="Техника в отличном состоянии" />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {fleet.map((item) => (
            <div key={item.label}>
              <div className="h-[260px] w-full overflow-hidden rounded-[20px] border border-white/8">
                <ImagePlaceholder label="Фото манипулятора" />
              </div>
              <div className="mt-4 text-base font-semibold text-fg">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
