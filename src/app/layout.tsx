import type { Metadata } from "next";
import { Poppins, Montserrat, EB_Garamond } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '900'],
  variable: '--font-montserrat',
});

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-ebgaramond',
});

export const metadata: Metadata = {
  title: "Boss Barbers Club - Profesyonel Berberlik Hizmetleri",
  description: "İstanbul'un en iyi berber dükkanı. Profesyonel saç kesimi, sakal tıraşı ve bakım hizmetleri.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${poppins.variable} ${montserrat.variable} ${ebGaramond.variable} font-poppins`}>{children}</body>
    </html>
  );
}
