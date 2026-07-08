import { siteConfig } from "@/lib/site-config";

export default function Footer() {
  return (
    <footer className="border-t border-white/8 bg-bg px-5 py-10 md:px-12">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-5">
        <div className="flex items-center gap-2.5">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-accent-light text-sm font-extrabold text-bg">
            М
          </div>
          <span className="text-[15px] font-semibold text-fg/70">
            {siteConfig.name}
          </span>
        </div>
        <div className="text-center text-sm text-fg/40">
          © {new Date().getFullYear()} {siteConfig.name}. {siteConfig.city},{" "}
          {siteConfig.region}.
        </div>
        <a href={siteConfig.phoneHref} className="text-[15px] font-bold text-fg">
          {siteConfig.phone}
        </a>
      </div>
    </footer>
  );
}
