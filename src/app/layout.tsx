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
  title: "İstanbul Eyüp Sultan Erkek Berberi | Boss Barbers Club",
  description: "Eyüp Sultan Belediyesi karşısında, lüks ve elit erkek berberi. Modern ve geleneksel tıraş, profesyonel bakım, kaliteli hizmet. Hemen randevu alın!",
  keywords: [
    "erkek berberi",
    "Eyüp Sultan berber",
    "lüks berber",
    "elit berber",
    "İstanbul erkek kuaförü",
    "profesyonel tıraş",
    "saç sakal bakım",
    "Eyüp Sultan Boss Barbers Club",
    "Eyüp Sultan Belediyesi karşısı",
    "en iyi berber"
  ].join(", ")
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
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://bossbarbersclub.com" />
        <meta property="og:title" content="İstanbul Eyüp Sultan Erkek Berberi | Boss Barbers Club" />
        <meta property="og:description" content="Eyüp Sultan Belediyesi karşısında, lüks ve elit erkek berberi. Modern ve geleneksel tıraş, profesyonel bakım, kaliteli hizmet. Hemen randevu alın!" />
        <meta property="og:type" content="business.business" />
        <meta property="og:url" content="https://bossbarbersclub.com" />
        <meta property="og:locale" content="tr_TR" />
        <meta property="og:site_name" content="Boss Barbers Club" />
        <meta property="og:image" content="/images/slider-one.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="İstanbul Eyüp Sultan Erkek Berberi | Boss Barbers Club" />
        <meta name="twitter:description" content="Eyüp Sultan Belediyesi karşısında, lüks ve elit erkek berberi. Modern ve geleneksel tıraş, profesyonel bakım, kaliteli hizmet. Hemen randevu alın!" />
        <meta name="twitter:image" content="/images/slider-one.jpg" />
        <meta name="twitter:site" content="@bossbarbersclub" />
        <meta name="twitter:creator" content="@bossbarbersclub" />
        <meta name="author" content="Boss Barbers Club" />
      </head>
      <body className={`${inter.className} ${poppins.variable} ${ebGaramond.variable} ${merriweather.variable} ${bitter.variable}`}>{children}</body>
    </html>
  );
}
