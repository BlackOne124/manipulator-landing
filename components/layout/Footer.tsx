import { companyRequisites, siteConfig } from "@/lib/site-config";

export default function Footer() {
  return (
    <footer className="border-t border-white/8 bg-bg px-5 py-10 md:px-12">
      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-wrap items-center justify-between gap-5">
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

        <div className="mt-8 border-t border-white/8 pt-8">
          <div className="text-xs font-semibold tracking-[0.04em] text-fg/35 uppercase">
            Реквизиты
          </div>
          <div className="mt-3 grid grid-cols-1 gap-x-8 gap-y-1.5 text-xs leading-relaxed text-fg/35 sm:grid-cols-2">
            <div className="sm:col-span-2">{companyRequisites.name}</div>
            <div>Юр. адрес: {companyRequisites.legalAddress}</div>
            <div>ИНН: {companyRequisites.inn}</div>
            <div>ОГРНИП: {companyRequisites.ogrnip}</div>
            <div>Р/с: {companyRequisites.bankAccount}</div>
            <div>Банк: {companyRequisites.bankName}</div>
            <div>ИНН банка: {companyRequisites.bankInn}</div>
            <div>БИК: {companyRequisites.bik}</div>
            <div>К/с: {companyRequisites.correspondentAccount}</div>
            <div className="sm:col-span-2">
              Адрес банка: {companyRequisites.bankAddress}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
