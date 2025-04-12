'use client';

import Image from "next/image";
import { FaInstagram, FaWhatsapp, FaBars, FaTimes, FaCut, FaUserAlt } from 'react-icons/fa';
import { GiBeard, GiHairStrands } from 'react-icons/gi';
import { MdFace, MdColorize, MdStyle } from 'react-icons/md';
import { TbMassage, TbWand } from 'react-icons/tb';
import { BsScissors } from 'react-icons/bs';
import { useState } from 'react';

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
      <nav className="fixed top-0 w-full z-40 bg-black/90 py-4">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="text-xl md:text-2xl font-bold text-[#C8A97E]">Boss Barber&apos;s Club</div>
          <button 
            onClick={() => setIsMenuOpen(true)} 
            className="text-2xl text-[#C8A97E] lg:hidden"
            aria-label="Menüyü Aç"
          >
            <FaBars />
          </button>
          <div className="hidden lg:flex gap-8">
            <a href="#about" className="hover:text-[#C8A97E] transition-colors">Hakkımızda</a>
            <a href="#services" className="hover:text-[#C8A97E] transition-colors">Hizmetler</a>
            <a href="#team" className="hover:text-[#C8A97E] transition-colors">Ekibimiz</a>
            <a href="#contact" className="hover:text-[#C8A97E] transition-colors">İletişim</a>
            <button 
              onClick={handleRandevuClick}
              className="bg-[#C8A97E] text-black px-4 py-2 rounded hover:bg-[#B69A6E] transition-colors"
            >
              Randevu Al
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 bg-[url('/barber-bg.jpg')] bg-cover bg-center opacity-40"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-7xl font-bold mb-6">HAKKIMIZDA</h1>
          <p className="text-lg md:text-xl mb-8">Saç ve sakal bakımında tutkunuzu ve profesyonelliğinizi yansıtın</p>
          <button 
            onClick={handleRandevuClick}
            className="bg-[#C8A97E] text-black font-bold py-3 px-8 rounded hover:bg-[#B69A6E] transition-colors text-lg"
          >
            RANDEVU AL
          </button>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-16 md:py-20 px-4">
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
              <p className="text-[#C8A97E] mb-4">Master Barber</p>
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
              <p className="text-[#C8A97E] mb-4">Master Barber</p>
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

      {/* Services Section */}
      <section id="services" className="py-16 md:py-20 px-4 bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16">Premium Hizmetlerimiz</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-black p-6 rounded-lg text-center hover:bg-zinc-800 transition-colors group">
              <div className="text-4xl text-[#C8A97E] mb-4 flex justify-center">
                <MdFace className="group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-4">Profesyonel Cilt Bakımı</h3>
              <p className="text-gray-400">Uzman cilt bakımı ve terapi</p>
            </div>
            
            <div className="bg-black p-6 rounded-lg text-center hover:bg-zinc-800 transition-colors group">
              <div className="text-4xl text-[#C8A97E] mb-4 flex justify-center">
                <FaCut className="group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-4">Anatomik Saç Kesimi</h3>
              <p className="text-gray-400">Yüz hatlarınıza özel kesim</p>
            </div>

            <div className="bg-black p-6 rounded-lg text-center hover:bg-zinc-800 transition-colors group">
              <div className="text-4xl text-[#C8A97E] mb-4 flex justify-center">
                <GiBeard className="group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-4">Sakal Kesimi</h3>
              <p className="text-gray-400">Profesyonel sakal şekillendirme</p>
            </div>

            <div className="bg-black p-6 rounded-lg text-center hover:bg-zinc-800 transition-colors group">
              <div className="text-4xl text-[#C8A97E] mb-4 flex justify-center">
                <MdStyle className="group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-4">Saç Fön</h3>
              <p className="text-gray-400">Profesyonel fön ve şekillendirme</p>
            </div>

            <div className="bg-black p-6 rounded-lg text-center hover:bg-zinc-800 transition-colors group">
              <div className="text-4xl text-[#C8A97E] mb-4 flex justify-center">
                <MdColorize className="group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-4">Pigment Renklendirme</h3>
              <p className="text-gray-400">Özel pigmentlerle renklendirme</p>
            </div>

            <div className="bg-black p-6 rounded-lg text-center hover:bg-zinc-800 transition-colors group">
              <div className="text-4xl text-[#C8A97E] mb-4 flex justify-center">
                <TbWand className="group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-4">Perma</h3>
              <p className="text-gray-400">Kalıcı şekillendirme</p>
            </div>

            <div className="bg-black p-6 rounded-lg text-center hover:bg-zinc-800 transition-colors group">
              <div className="text-4xl text-[#C8A97E] mb-4 flex justify-center">
                <GiHairStrands className="group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-4">Keratin</h3>
              <p className="text-gray-400">Keratin bakım ve düzleştirme</p>
            </div>

            <div className="bg-black p-6 rounded-lg text-center hover:bg-zinc-800 transition-colors group">
              <div className="text-4xl text-[#C8A97E] mb-4 flex justify-center">
                <TbMassage className="group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-4">Saç Botox</h3>
              <p className="text-gray-400">Yoğun bakım ve onarım</p>
            </div>

            <div className="bg-black p-6 rounded-lg text-center hover:bg-zinc-800 transition-colors group">
              <div className="text-4xl text-[#C8A97E] mb-4 flex justify-center">
                <FaUserAlt className="group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-4">Profesyonel Saç Bakımı</h3>
              <p className="text-gray-400">Kapsamlı saç bakım hizmetleri</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16">İletişim</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-bold mb-6">Adres</h3>
              <p className="text-gray-400 mb-4">Boss Barbers Club, Düğmeciler, Eyüp Sultan Blv No 105/B, 34040 Eyüpsultan/İstanbul</p>
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
