'use client';

import Image from "next/image";
import { FaInstagram, FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa';
import { GiScissors } from 'react-icons/gi';
import { useState, useEffect } from 'react';
import VerticalServiceSlider from "./VerticalServiceSlider";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleRandevuClick = () => {
    window.location.href = "https://wa.me/+905555555555";
  };

  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
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
      <nav className={`fixed top-0 w-full z-40 py-2 md:py-4 transition-all duration-300 ${isScrolled ? 'bg-zinc-900/90 backdrop-blur-sm' : ''}`}>
        <div className="w-full flex flex-col lg:flex-row justify-between items-center px-4 md:px-36">
          <h1 className="font-['Alfa_Slab_One'] text-[24px] md:text-[48px] font-normal text-white whitespace-nowrap text-center lg:text-left px-4">BOSS BARBERS CLUB</h1>
          <button 
            onClick={() => setIsMenuOpen(true)} 
            className="text-2xl text-white lg:hidden mt-2"
            aria-label="Menüyü Aç"
          >
            <FaBars />
          </button>
          <div className="hidden lg:flex items-center gap-8">
            <a href="#about" className="font-['Merriweather'] text-[24px] font-light text-white hover:text-[#C8A97E] transition-all duration-300">Hakkımızda</a>
            <a href="#services" className="font-['Merriweather'] text-[24px] font-light text-white hover:text-[#C8A97E] transition-all duration-300">Hizmetler</a>
            <a href="#team" className="font-['Merriweather'] text-[24px] font-light text-white hover:text-[#C8A97E] transition-all duration-300">Ekibimiz</a>
            <a href="#contact" className="font-['Merriweather'] text-[24px] font-light text-white hover:text-[#C8A97E] transition-all duration-300">İletişim</a>
            <button 
              onClick={handleRandevuClick}
              className="bg-[#C58154] text-white px-6 py-3 rounded hover:bg-[#A0522D] transition-all duration-300 font-['Merriweather'] text-[24px] font-light"
            >
              Randevu Al
            </button>
          </div>
        </div>
      </nav>

      {/* Separator */}
      <div className="fixed top-[90px] md:top-[100px] w-full z-30">
        <div className="relative w-full h-[2px] bg-white/50">
          <div className="absolute left-[25%] -top-4 text-white">
            <GiScissors size={32} />
          </div>
          <div className="absolute left-[50%] -top-4 text-white">
            <GiScissors size={32} />
          </div>
          <div className="absolute left-[75%] -top-4 text-white">
            <GiScissors size={32} />
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section id="about" className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('/images/slider-one.jpg')] bg-cover bg-center opacity-40"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full mt-24 md:mt-32">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between w-full gap-4 md:gap-8">
            <div className="flex-1">
              <h2 className="font-['Bitter'] text-[36px] md:text-[54px] font-normal text-white leading-tight">
                GELENEKSEL SANAT,<br />
                MODERN DOKUNUŞ!
              </h2>
            </div>
            <div className="w-full lg:w-auto flex justify-center lg:justify-end">
              <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4 min-w-[180px] max-w-xs text-white text-sm font-poppins text-center lg:text-right mt-8 lg:mt-0 border border-gray-500/30">
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
          <h2 className="font-['Merriweather'] text-[24px] font-light text-white text-center mb-12 md:mb-16">Profesyonel Berberlerimiz</h2>
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
                <span>&apos;cnr.sercan</span>
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
                <span>&apos;akyuzberkee</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Hizmetlerimiz Section - Dikey Slider */}
      <section id="hizmetlerimiz" className="px-2 md:px-4 bg-black pb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-['Merriweather'] text-[24px] font-light text-white text-center mb-18">Boss Barbers Club Hizmetleri</h2>
          <div className="flex flex-col lg:flex-row justify-center items-center gap-12 w-full">
            <VerticalServiceSlider />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-10 md:py-20 px-2 md:px-4 bg-gradient-to-b from-zinc-900 to-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-['Merriweather'] text-[24px] font-light text-white text-center mb-4">Hizmetlerimiz</h2>
          <p className="text-center text-zinc-400 mb-10 font-['Merriweather'] text-[24px] font-light">Boss Barbers Club&apos;da sunduğumuz profesyonel hizmetler</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-zinc-800/80 rounded-xl shadow-lg p-8 flex items-center justify-center text-center text-white text-lg font-['Bitter'] hover:bg-zinc-700 transition-all duration-300">Saç Kesimi</div>
            <div className="bg-zinc-800/80 rounded-xl shadow-lg p-8 flex items-center justify-center text-center text-white text-lg font-['Bitter'] hover:bg-zinc-700 transition-all duration-300">Sakal Kesimi</div>
            <div className="bg-zinc-800/80 rounded-xl shadow-lg p-8 flex items-center justify-center text-center text-white text-lg font-['Bitter'] hover:bg-zinc-700 transition-all duration-300">Çocuk Saç Kesimi</div>
            <div className="bg-zinc-800/80 rounded-xl shadow-lg p-8 flex items-center justify-center text-center text-white text-lg font-['Bitter'] hover:bg-zinc-700 transition-all duration-300">Saç Tarama- Fön</div>
            <div className="bg-zinc-800/80 rounded-xl shadow-lg p-8 flex items-center justify-center text-center text-white text-lg font-['Bitter'] hover:bg-zinc-700 transition-all duration-300">Kalıcı Saç Düzleştirme</div>
            <div className="bg-zinc-800/80 rounded-xl shadow-lg p-8 flex items-center justify-center text-center text-white text-lg font-['Bitter'] hover:bg-zinc-700 transition-all duration-300">Keratin Bakımı</div>
            <div className="bg-zinc-800/80 rounded-xl shadow-lg p-8 flex items-center justify-center text-center text-white text-lg font-['Bitter'] hover:bg-zinc-700 transition-all duration-300">Saç Boyama</div>
            <div className="bg-zinc-800/80 rounded-xl shadow-lg p-8 flex items-center justify-center text-center text-white text-lg font-['Bitter'] hover:bg-zinc-700 transition-all duration-300">Sakal Boyama</div>
            <div className="bg-zinc-800/80 rounded-xl shadow-lg p-8 flex items-center justify-center text-center text-white text-lg font-['Bitter'] hover:bg-zinc-700 transition-all duration-300">Saç Renk Açma</div>
            <div className="bg-zinc-800/80 rounded-xl shadow-lg p-8 flex items-center justify-center text-center text-white text-lg font-['Bitter'] hover:bg-zinc-700 transition-all duration-300">Perma</div>
            <div className="bg-zinc-800/80 rounded-xl shadow-lg p-8 flex items-center justify-center text-center text-white text-lg font-['Bitter'] hover:bg-zinc-700 transition-all duration-300">Saç Bakımı</div>
            <div className="bg-zinc-800/80 rounded-xl shadow-lg p-8 flex items-center justify-center text-center text-white text-lg font-['Bitter'] hover:bg-zinc-700 transition-all duration-300">Sakal Bakımı</div>
            <div className="bg-zinc-800/80 rounded-xl shadow-lg p-8 flex items-center justify-center text-center text-white text-lg font-['Bitter'] hover:bg-zinc-700 transition-all duration-300">Damat Tıraşı</div>
            <div className="bg-zinc-800/80 rounded-xl shadow-lg p-8 flex items-center justify-center text-center text-white text-lg font-['Bitter'] hover:bg-zinc-700 transition-all duration-300">Manikür</div>
            <div className="bg-zinc-800/80 rounded-xl shadow-lg p-8 flex items-center justify-center text-center text-white text-lg font-['Bitter'] hover:bg-zinc-700 transition-all duration-300">Pedikür</div>
            <div className="bg-zinc-800/80 rounded-xl shadow-lg p-8 flex items-center justify-center text-center text-white text-lg font-['Bitter'] hover:bg-zinc-700 transition-all duration-300">Kaş Dizayn</div>
            <div className="bg-zinc-800/80 rounded-xl shadow-lg p-8 flex items-center justify-center text-center text-white text-lg font-['Bitter'] hover:bg-zinc-700 transition-all duration-300">Cilt Bakımı</div>
            <div className="bg-zinc-800/80 rounded-xl shadow-lg p-8 flex items-center justify-center text-center text-white text-lg font-['Bitter'] hover:bg-zinc-700 transition-all duration-300">Makine Body Tıraş</div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-10 md:py-20 px-2 md:px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-['Merriweather'] text-[24px] font-light text-white text-center mb-12 md:mb-16">İletişim</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-center md:text-left">
              <h3 className="font-['Merriweather'] text-[20px] font-light text-white mb-6">Adres</h3>
              <p className="font-['Merriweather'] text-[16px] font-light text-gray-400 mb-4">Boss Barbers Club, Düğmeciler, Eyüp Sultan Blv No 105/B, 34040 Eyüpsultan/İstanbul</p>
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
              <h3 className="font-['Merriweather'] text-[20px] font-light text-white mb-6">Çalışma Saatleri</h3>
              <div className="space-y-2">
                <p className="font-['Merriweather'] text-[16px] font-light text-gray-400">Pazartesi: 08:30 - 21:00</p>
                <p className="font-['Merriweather'] text-[16px] font-light text-gray-400">Salı: 08:30 - 21:00</p>
                <p className="font-['Merriweather'] text-[16px] font-light text-gray-400">Çarşamba: 08:30 - 21:00</p>
                <p className="font-['Merriweather'] text-[16px] font-light text-gray-400">Perşembe: 08:30 - 21:00</p>
                <p className="font-['Merriweather'] text-[16px] font-light text-gray-400">Cuma: 08:30 - 21:00</p>
                <p className="font-['Merriweather'] text-[16px] font-light text-gray-400">Cumartesi: 08:30 - 22:00</p>
                <p className="font-['Merriweather'] text-[16px] font-light text-gray-400">Pazar: Kapalı</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
