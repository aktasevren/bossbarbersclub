import type { Metadata } from "next";
import { Inter, Poppins, EB_Garamond, Merriweather, Bitter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
  variable: '--font-poppins'
});
const ebGaramond = EB_Garamond({ 
  subsets: ["latin"],
  variable: '--font-ebgaramond'
});
const merriweather = Merriweather({
  weight: ['300'],
  subsets: ["latin"],
  variable: '--font-merriweather'
});
const bitter = Bitter({
  weight: ['400'],
  subsets: ["latin"],
  variable: '--font-bitter'
});

export const metadata: Metadata = {
  title: "Boss Barbers Club",
  description: "Profesyonel Berber Dükkanı",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.className} ${poppins.variable} ${ebGaramond.variable} ${merriweather.variable} ${bitter.variable}`}>{children}</body>
    </html>
  );
}
