import type { Metadata } from "next";
import { Golos_Text } from "next/font/google";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const golosText = Golos_Text({
  variable: "--font-golos",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: `${siteConfig.name} — аренда манипулятора в ${siteConfig.city}`,
  description: siteConfig.description,
  keywords: [
    "манипулятор Бронницы",
    "аренда манипулятора",
    "грузоперевозки Бронницы",
    "манипулятор Московская область",
    "доставка бытовок",
  ],
  openGraph: {
    title: `${siteConfig.name} — аренда манипулятора в ${siteConfig.city}`,
    description: siteConfig.description,
    locale: "ru_RU",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={golosText.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
