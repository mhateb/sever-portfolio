import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sever.house"),
  title: {
    default: "север/ — модульные дома",
    template: "%s — север/",
  },
  description:
    "Модульные дома с отделкой за 90 дней. Коллекция Север 45, 80 и 120 — ближе к природе, без стройки на участке.",
  openGraph: {
    title: "север/ — ближе к природе",
    description:
      "Современный дом с отделкой за 90 дней. Три масштаба, один подход к жизни.",
    locale: "ru_RU",
    type: "website",
    images: [{ url: "/images/hero.png", alt: "Дом Север 80 среди сосен" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={inter.variable}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
