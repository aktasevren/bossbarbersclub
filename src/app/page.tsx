'use client';

import Image from "next/image";
import { FaInstagram, FaWhatsapp, FaBars, FaTimes, FaCut, FaUserAlt } from 'react-icons/fa';
import { GiBeard, GiHairStrands } from 'react-icons/gi';
import { MdFace, MdColorize, MdStyle } from 'react-icons/md';
import { TbMassage, TbWand } from 'react-icons/tb';
import { useState } from 'react';
import VerticalServiceSlider from "./VerticalServiceSlider";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleRandevuClick = () => {
    window.location.href = "https://wa.me/+905555555555";
  };

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Mobil Menü */}
      <div 
        className={`fixed inset-0 bg-black z-50 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 lg:hidden`}
        aria-hidden={!isMenuOpen}
      >
        <div className="flex justify-end p-6">
          <button 
            onClick={() => setIsMenuOpen(false)} 
            className="text-2xl text-[#C8A97E]"
            aria-label="Menüyü Kapat"
          >
            <FaTimes />
          </button>
        </div>
        <div className="flex flex-col items-center gap-8 p-8">
          <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-xl hover:text-[#C8A97E] transition-colors">Hakkımızda</a>
          <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-xl hover:text-[#C8A97E] transition-colors">Hizmetler</a>
          <a href="#team" onClick={() => setIsMenuOpen(false)} className="text-xl hover:text-[#C8A97E] transition-colors">Ekibimiz</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-xl hover:text-[#C8A97E] transition-colors">İletişim</a>
          <button 
            onClick={handleRandevuClick}
            className="bg-[#C8A97E] text-black px-6 py-3 rounded text-xl hover:bg-[#B69A6E] transition-colors w-full"
          >
            Randevu Al
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 bg-[#F5E6D3] py-2 md:py-4">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="relative w-24 h-10 md:w-32 md:h-12">
            <Image
              src="/images/logo.png"
              alt="Boss Barbers Club Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <button 
            onClick={() => setIsMenuOpen(true)} 
            className="text-2xl text-[#C58154] lg:hidden"
            aria-label="Menüyü Aç"
          >
            <FaBars />
          </button>
          <div className="hidden lg:flex items-center gap-8">
            <a href="#about" className="text-[#C58154] hover:text-[#A0522D] transition-all duration-300 text-xs font-semibold uppercase tracking-normal leading-[14px] h-[14px] relative block cursor-pointer antialiased flex items-center">Hakkımızda</a>
            <a href="#services" className="text-[#C58154] hover:text-[#A0522D] transition-all duration-300 text-xs font-semibold uppercase tracking-normal leading-[14px] h-[14px] relative block cursor-pointer antialiased flex items-center">Hizmetler</a>
            <a href="#team" className="text-[#C58154] hover:text-[#A0522D] transition-all duration-300 text-xs font-semibold uppercase tracking-normal leading-[14px] h-[14px] relative block cursor-pointer antialiased flex items-center">Ekibimiz</a>
            <a href="#contact" className="text-[#C58154] hover:text-[#A0522D] transition-all duration-300 text-xs font-semibold uppercase tracking-normal leading-[14px] h-[14px] relative block cursor-pointer antialiased flex items-center">İletişim</a>
            <button 
              onClick={handleRandevuClick}
              className="bg-[#C58154] text-white px-6 py-3 rounded hover:bg-[#A0522D] transition-all duration-300 text-xs font-semibold uppercase tracking-normal leading-[14px] relative cursor-pointer antialiased flex items-center justify-center min-h-[40px]"
            >
              Randevu Al
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="relative min-h-screen flex items-center justify-center pt-24 md:pt-20 pb-8 md:pb-0">
        <div className="absolute inset-0 bg-[url('/images/slider-one.jpg')] bg-cover bg-center opacity-40"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between w-full gap-4 md:gap-8">
            <div className="flex-1">
              <h1 className="font-ebgaramond text-white text-2xl md:text-[36px] font-normal leading-[38px] md:leading-[58px] pl-2 md:pl-[7] text-left transition-all duration-500 ease antialiased block mb-0" style={{boxSizing:'border-box',clear:'both',cursor:'pointer',display:'block',letterSpacing:'normal',margin:0,overflowWrap:'break-word',textDecorationColor:'#fff',textDecorationLine:'none',textDecorationStyle:'solid',textDecorationThickness:'auto',textRendering:'optimizeLegibility',textSizeAdjust:'100%',textTransform:'none',WebkitFontSmoothing:'antialiased',WebkitTapHighlightColor:'rgba(0,0,0,0)'}}>Boss Barbers Club</h1>
              <button 
                onClick={handleRandevuClick}
                className="bg-[#C58154] text-white font-bold py-2 md:py-3 px-4 md:px-8 rounded hover:bg-[#A0522D] transition-colors text-base md:text-lg mt-2 block"
              >
                RANDEVU AL
              </button>
            </div>
            <div className="w-full lg:w-auto flex justify-center lg:justify-end">
              <div className="bg-black/60 rounded-lg p-4 min-w-[180px] max-w-xs text-white text-sm font-poppins text-center lg:text-right mt-8 lg:mt-0">
                <div className="font-bold mb-2 text-base">Çalışma Saatleri</div>
                <div className="flex flex-col gap-1">
                  <span>Pzt-Cum: 09:00 - 21:00</span>
                  <span>Cmt: 09:00 - 22:00</span>
                  <span>Paz: Kapalı</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-10 md:py-20 px-2 md:px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16">Profesyonel Berberlerimiz</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-zinc-900 p-6 rounded-lg text-center hover:bg-zinc-800 transition-colors">
              <div className="mb-4 relative w-48 h-48 md:w-64 md:h-64 mx-auto">
                <Image
                  src="/barbers/sercan-cinar.png"
                  alt="Sercan Çınar"
                  fill
                  className="rounded-lg object-cover"
                  sizes="(max-width: 768px) 192px, 256px"
                  priority
                />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-2">Sercan Çınar</h3>
              <a 
                href="https://instagram.com/cnr.sercan" 
                className="text-gray-400 hover:text-[#C8A97E] flex items-center justify-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Sercan Çınar Instagram"
              >
                <FaInstagram />
                <span>@cnr.sercan</span>
              </a>
            </div>
            <div className="bg-zinc-900 p-6 rounded-lg text-center hover:bg-zinc-800 transition-colors">
              <div className="mb-4 relative w-48 h-48 md:w-64 md:h-64 mx-auto">
                <Image
                  src="/barbers/berke-akyuz.png"
                  alt="Berke Akyüz"
                  fill
                  className="rounded-lg object-cover"
                  sizes="(max-width: 768px) 192px, 256px"
                  priority
                />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-2">Berke Akyüz</h3>
              <a 
                href="https://instagram.com/akyuzberkee" 
                className="text-gray-400 hover:text-[#C8A97E] flex items-center justify-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Berke Akyüz Instagram"
              >
                <FaInstagram />
                <span>@akyuzberkee</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Hizmetlerimiz Section - Dikey Slider */}
      <section id="hizmetlerimiz" className="py-10 md:py-24 px-2 md:px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-ebgaramond text-white text-2xl md:text-3xl font-bold leading-tight mb-4 text-center whitespace-nowrap">BOSS BARBERS CLUB HİZMETLERİ</h2>
          <div className="flex flex-col lg:flex-row justify-center items-center gap-12 w-full">
            <VerticalServiceSlider />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-10 md:py-20 px-2 md:px-4 bg-gradient-to-b from-zinc-900 to-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 font-ebgaramond tracking-tight">Hizmetlerimiz</h2>
          <p className="text-center text-zinc-400 mb-10 font-poppins">Boss Barbers Club'da sunduğumuz profesyonel hizmetler</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-zinc-800/80 rounded-xl shadow-lg p-8 flex items-center justify-center text-center text-white text-lg font-semibold font-poppins hover:bg-zinc-700 transition-all duration-300">Saç Kesimi</div>
            <div className="bg-zinc-800/80 rounded-xl shadow-lg p-8 flex items-center justify-center text-center text-white text-lg font-semibold font-poppins hover:bg-zinc-700 transition-all duration-300">Sakal Kesimi</div>
            <div className="bg-zinc-800/80 rounded-xl shadow-lg p-8 flex items-center justify-center text-center text-white text-lg font-semibold font-poppins hover:bg-zinc-700 transition-all duration-300">Çocuk Saç Kesimi</div>
            <div className="bg-zinc-800/80 rounded-xl shadow-lg p-8 flex items-center justify-center text-center text-white text-lg font-semibold font-poppins hover:bg-zinc-700 transition-all duration-300">Saç Tarama- Fön</div>
            <div className="bg-zinc-800/80 rounded-xl shadow-lg p-8 flex items-center justify-center text-center text-white text-lg font-semibold font-poppins hover:bg-zinc-700 transition-all duration-300">Kalıcı Saç Düzleştirme</div>
            <div className="bg-zinc-800/80 rounded-xl shadow-lg p-8 flex items-center justify-center text-center text-white text-lg font-semibold font-poppins hover:bg-zinc-700 transition-all duration-300">Keratin Bakımı</div>
            <div className="bg-zinc-800/80 rounded-xl shadow-lg p-8 flex items-center justify-center text-center text-white text-lg font-semibold font-poppins hover:bg-zinc-700 transition-all duration-300">Saç Boyama</div>
            <div className="bg-zinc-800/80 rounded-xl shadow-lg p-8 flex items-center justify-center text-center text-white text-lg font-semibold font-poppins hover:bg-zinc-700 transition-all duration-300">Sakal Boyama</div>
            <div className="bg-zinc-800/80 rounded-xl shadow-lg p-8 flex items-center justify-center text-center text-white text-lg font-semibold font-poppins hover:bg-zinc-700 transition-all duration-300">Saç Renk Açma</div>
            <div className="bg-zinc-800/80 rounded-xl shadow-lg p-8 flex items-center justify-center text-center text-white text-lg font-semibold font-poppins hover:bg-zinc-700 transition-all duration-300">Perma</div>
            <div className="bg-zinc-800/80 rounded-xl shadow-lg p-8 flex items-center justify-center text-center text-white text-lg font-semibold font-poppins hover:bg-zinc-700 transition-all duration-300">Saç Bakımı</div>
            <div className="bg-zinc-800/80 rounded-xl shadow-lg p-8 flex items-center justify-center text-center text-white text-lg font-semibold font-poppins hover:bg-zinc-700 transition-all duration-300">Sakal Bakımı</div>
            <div className="bg-zinc-800/80 rounded-xl shadow-lg p-8 flex items-center justify-center text-center text-white text-lg font-semibold font-poppins hover:bg-zinc-700 transition-all duration-300">Damat Tıraşı</div>
            <div className="bg-zinc-800/80 rounded-xl shadow-lg p-8 flex items-center justify-center text-center text-white text-lg font-semibold font-poppins hover:bg-zinc-700 transition-all duration-300">Manikür</div>
            <div className="bg-zinc-800/80 rounded-xl shadow-lg p-8 flex items-center justify-center text-center text-white text-lg font-semibold font-poppins hover:bg-zinc-700 transition-all duration-300">Pedikür</div>
            <div className="bg-zinc-800/80 rounded-xl shadow-lg p-8 flex items-center justify-center text-center text-white text-lg font-semibold font-poppins hover:bg-zinc-700 transition-all duration-300">Kaş Dizayn</div>
            <div className="bg-zinc-800/80 rounded-xl shadow-lg p-8 flex items-center justify-center text-center text-white text-lg font-semibold font-poppins hover:bg-zinc-700 transition-all duration-300">Cilt Bakımı</div>
            <div className="bg-zinc-800/80 rounded-xl shadow-lg p-8 flex items-center justify-center text-center text-white text-lg font-semibold font-poppins hover:bg-zinc-700 transition-all duration-300">Makine Body Tıraş</div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-10 md:py-20 px-2 md:px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16">İletişim</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-bold mb-6">Adres</h3>
              <p className="text-gray-400 mb-4">Boss Barbers Club, Düğmeciler, Eyüp Sultan Blv No 105/B, 34040 Eyüpsultan/İstanbul</p>
              <div className="w-full mt-4 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12041.96493475936!2d28.9262244!3d41.0434057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cabb0cc05843a3%3A0x8596e33d4020c465!2sBoss%20Barbers%20Club!5e0!3m2!1str!2str!4v1718030000000!5m2!1str!2str"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Boss Barbers Club Harita"
                ></iframe>
              </div>
              <div className="flex gap-4 mt-8 justify-center md:justify-start">
                <a 
                  href="https://instagram.com/bossbarbersclub" 
                  className="text-2xl text-[#C8A97E] hover:text-[#B69A6E]"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Boss Barbers Club Instagram"
                >
                  <FaInstagram />
                </a>
                <button
                  onClick={handleRandevuClick}
                  className="text-2xl text-[#C8A97E] hover:text-[#B69A6E]"
                  aria-label="WhatsApp ile Randevu Al"
                >
                  <FaWhatsapp />
                </button>
              </div>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-bold mb-6">Çalışma Saatleri</h3>
              <div className="space-y-2 text-gray-400">
                <p>Pazartesi: 08:30 - 21:00</p>
                <p>Salı: 08:30 - 21:00</p>
                <p>Çarşamba: 08:30 - 21:00</p>
                <p>Perşembe: 08:30 - 21:00</p>
                <p>Cuma: 08:30 - 21:00</p>
                <p>Cumartesi: 08:30 - 22:00</p>
                <p>Pazar: Kapalı</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
