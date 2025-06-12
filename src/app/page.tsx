'use client';

import Image from "next/image";
import { FaBars, FaTimes } from 'react-icons/fa';
import { GiScissors } from 'react-icons/gi';
import { useState, useEffect } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showRandevuModal, setShowRandevuModal] = useState(false);
  const [randevuGun, setRandevuGun] = useState('');
  const [randevuSaat, setRandevuSaat] = useState('');

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

  // Gün seçeneklerini oluştur
  const getDateOptions = () => {
    const options = [];
    const now = new Date();
    const isAfter2200 = now.getHours() > 22 || (now.getHours() === 22 && now.getMinutes() > 0);
    const start = isAfter2200 ? 1 : 0;
    for (let i = start; i < start + 7; i++) {
      const date = new Date(now);
      date.setDate(now.getDate() + i);
      const label = (i === 0 && start === 0) ? 'Bugün' : date.toLocaleDateString('tr-TR', { weekday: 'long', day: '2-digit', month: '2-digit' });
      options.push({ value: date.toISOString().slice(0, 10), label });
    }
    return options;
  };

  // Saat seçeneklerini oluştur
  const getSaatOptions = () => {
    const saatler = [];
    for (let saat = 9; saat <= 21; saat++) {
      for (const dakika of [0, 15, 30, 45]) {
        const saatStr = saat.toString().padStart(2, '0');
        const dakikaStr = dakika.toString().padStart(2, '0');
        saatler.push(`${saatStr}:${dakikaStr}`);
      }
    }
    // 22:00'ı da ekle
    saatler.push('22:00');
    return saatler;
  };

  // Randevu formunu gönder
  const handleRandevuSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!randevuGun || !randevuSaat) return;
    const gunLabel = getDateOptions().find(opt => opt.value === randevuGun)?.label || randevuGun;
    const mesaj = `Merhaba, şu gün ve saatte müsait misiniz?\nGün: ${gunLabel}\nSaat: ${randevuSaat}`;
    const phone = '+905383690468';
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(mesaj)}`;
    window.open(url, '_blank');
    setShowRandevuModal(false);
    setRandevuGun('');
    setRandevuSaat('');
  };

  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Randevu Modal */}
      {showRandevuModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="bg-zinc-900 rounded-2xl p-6 w-[90vw] max-w-md mx-auto shadow-2xl relative">
            <button onClick={() => setShowRandevuModal(false)} className="absolute top-2 right-2 text-2xl text-[#C8A97E]">&times;</button>
            <h3 className="text-xl font-bold text-[#C8A97E] mb-4 text-center">Randevu Talebi</h3>
            <form onSubmit={handleRandevuSubmit} className="flex flex-col gap-4">
              <div>
                <label className="block mb-1 text-sm">Gün</label>
                <select value={randevuGun} onChange={e => setRandevuGun(e.target.value)} required className="w-full rounded px-3 py-2 bg-zinc-800 text-white border border-[#C8A97E] focus:outline-none">
                  <option value="">Gün Seçiniz</option>
                  {getDateOptions().map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block mb-1 text-sm">Saat</label>
                <select value={randevuSaat} onChange={e => setRandevuSaat(e.target.value)} required className="w-full rounded px-3 py-2 bg-zinc-800 text-white border border-[#C8A97E] focus:outline-none">
                  <option value="">Saat Seçiniz</option>
                  {getSaatOptions().map(saat => (
                    <option key={saat} value={saat}>{saat}</option>
                  ))}
                </select>
              </div>
              <button type="submit" className="bg-[#C8A97E] text-black font-bold py-2 rounded mt-2 hover:bg-[#b69a6e] transition">Randevu Sor</button>
            </form>
          </div>
        </div>
      )}
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
          <a href="#team" onClick={() => setIsMenuOpen(false)} className="text-lg hover:text-[#C8A97E] transition-colors">Ekibimiz</a>
          <a href="#gallery" onClick={() => setIsMenuOpen(false)} className="text-lg hover:text-[#C8A97E] transition-colors">Galeri</a>

          <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-lg hover:text-[#C8A97E] transition-colors">Hizmetler</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-lg hover:text-[#C8A97E] transition-colors">İletişim</a>
          <button
            onClick={() => setShowRandevuModal(true)}
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
          <div className="flex flex-col items-center gap-2 lg:hidden">
            <button
              onClick={() => setIsMenuOpen(true)}
              className="text-2xl text-white"
              aria-label="Menüyü Aç"
            >
              <FaBars />
            </button>
            <button
              onClick={() => setShowRandevuModal(true)}
              className="bg-[#C58154] text-white px-4 py-2 rounded hover:bg-[#A0522D] transition-all duration-300 font-['Merriweather'] text-[16px] font-light"
            >
              Randevu Al
            </button>
          </div>
          <div className="hidden lg:flex items-center gap-8">
            <a href="#team" className="font-['Merriweather'] text-[18px] font-light text-white hover:text-[#C8A97E] transition-all duration-300">Ekibimiz</a>
            <a href="#gallery" className="font-['Merriweather'] text-[18px] font-light text-white hover:text-[#C8A97E] transition-all duration-300">Galeri</a>

            <a href="#services" className="font-['Merriweather'] text-[18px] font-light text-white hover:text-[#C8A97E] transition-all duration-300">Hizmetler</a>
            <a href="#contact" className="font-['Merriweather'] text-[18px] font-light text-white hover:text-[#C8A97E] transition-all duration-300">İletişim</a>
            <button
              onClick={() => setShowRandevuModal(true)}
              className="bg-[#C58154] text-white px-6 py-3 rounded hover:bg-[#A0522D] transition-all duration-300 font-['Merriweather'] text-[24px] font-light"
            >
              Randevu Al
            </button>
          </div>
        </div>
      </nav>

      {/* Separator */}
      <div className="fixed top-[130px] md:top-[100px] w-full z-20">
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
              <div className="flex flex-col gap-4 md:gap-6">
                <h2 className="font-['Bitter'] text-[36px] md:text-[54px] font-normal text-white leading-tight uppercase">
                  GELENEKSEL SANAT,<br />MODERN DOKUNUŞ!
                </h2>
                <span className="font-['Merriweather'] text-[18px] md:text-[22px] font-light text-white/80 mb-2 md:mb-4 block mt-8 md:mt-0">Sadece bir saç tıraşı değil, bir deneyim.</span>
              </div>
            </div>
            <div className="w-full lg:w-auto flex justify-center lg:justify-end">
              <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4 min-w-[180px] max-w-xs text-white text-sm font-poppins text-center lg:text-right mt-8 lg:mt-0 border border-gray-500/30">
                <div className="font-bold mb-2 text-base">Çalışma Saatleri</div>
                <div className="flex flex-col gap-1">
                  <span>Pzt-Cum: 09:00 - 22:00</span>
                  <span>Cmt: 09:00 - 22:00</span>
                  <span>Paz: Kapalı</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-10 md:py-20 px-2 md:px-4 bg-gradient-to-b from-zinc-900 to-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-['Merriweather'] text-[28px] md:text-[36px] font-bold text-[#C8A97E] text-center mb-4 tracking-wide drop-shadow">Hizmetlerimiz</h2>
          <p className="text-center text-zinc-400 mb-10 font-['Merriweather'] text-[20px] font-light">Boss Barbers Club&apos;da sunduğumuz profesyonel erkek kuaförü hizmetleri: İstanbul Eyüp Sultan&apos;da saç kesimi, sakal tıraşı, çocuk saç kesimi, saç bakımı ve modern stillerle hizmetinizdeyiz. Hijyen, kalite ve müşteri memnuniyeti önceliğimizdir.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Saç Kesimi */}
            <div className="bg-zinc-900/90 border-2 border-[#C8A97E] rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:scale-[1.03] transition-transform duration-300 group">
              <svg className="mb-4" width="40" height="40" fill="none" viewBox="0 0 24 24"><path d="M19.5 4.5l-15 15M4.5 4.5l15 15" stroke="#C8A97E" strokeWidth="2.2" strokeLinecap="round"/><circle cx="6.5" cy="6.5" r="2.5" stroke="#C8A97E" strokeWidth="2"/><circle cx="17.5" cy="17.5" r="2.5" stroke="#C8A97E" strokeWidth="2"/></svg>
              <h3 className="text-xl font-bold text-white mb-2">Saç Kesimi</h3>
              <p className="text-zinc-300 text-sm">Modern ve klasik erkek saç kesimi. Yüz tipinize uygun, profesyonel stil önerileriyle en iyi görünüm.</p>
            </div>
            {/* Sakal Kesimi */}
            <div className="bg-zinc-900/90 border-2 border-[#C8A97E] rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:scale-[1.03] transition-transform duration-300 group">
              <svg className="mb-4" width="40" height="40" fill="none" viewBox="0 0 24 24"><path d="M4 17c0 2.5 3.5 3.5 8 3.5s8-1 8-3.5V7c0-2.5-3.5-3.5-8-3.5S4 4.5 4 7v10z" stroke="#C8A97E" strokeWidth="2.2"/><path d="M8 14c.5 1.5 2.5 2.5 4 2.5s3.5-1 4-2.5" stroke="#C8A97E" strokeWidth="2.2"/></svg>
              <h3 className="text-xl font-bold text-white mb-2">Sakal Kesimi</h3>
              <p className="text-zinc-300 text-sm">Düzgün ve simetrik sakal kesimi. Yüz hatlarınıza uygun, özenli ve hijyenik sakal şekillendirme.</p>
            </div>
            {/* Çocuk Saç Kesimi */}
            <div className="bg-zinc-900/90 border-2 border-[#C8A97E] rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:scale-[1.03] transition-transform duration-300 group">
              <svg className="mb-4" width="40" height="40" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4" stroke="#C8A97E" strokeWidth="2.2"/><path d="M4 20c0-3.5 3.5-6 8-6s8 2.5 8 6" stroke="#C8A97E" strokeWidth="2.2"/></svg>
              <h3 className="text-xl font-bold text-white mb-2">Çocuk Saç Kesimi</h3>
              <p className="text-zinc-300 text-sm">Çocuklara özel konforlu ve eğlenceli saç kesimi. Hijyenik ve güvenli ortamda profesyonel hizmet.</p>
            </div>
            {/* Saç Şekillendirme */}
            <div className="bg-zinc-900/90 border-2 border-[#C8A97E] rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:scale-[1.03] transition-transform duration-300 group">
              <svg className="mb-4" width="40" height="40" fill="none" viewBox="0 0 24 24"><path d="M6 18c0-3 4-6 6-6s6 3 6 6" stroke="#C8A97E" strokeWidth="2.2"/><path d="M12 12V6" stroke="#C8A97E" strokeWidth="2.2"/><circle cx="12" cy="4" r="2" stroke="#C8A97E" strokeWidth="2.2"/></svg>
              <h3 className="text-xl font-bold text-white mb-2">Saç Şekillendirme</h3>
              <p className="text-zinc-300 text-sm">Fön, tarama ve modern saç şekillendirme teknikleriyle gün boyu kalıcı stil.</p>
            </div>
            {/* Keratin & Bakım */}
            <div className="bg-zinc-900/90 border-2 border-[#C8A97E] rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:scale-[1.03] transition-transform duration-300 group">
              <svg className="mb-4" width="40" height="40" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="8" stroke="#C8A97E" strokeWidth="2.2"/><path d="M8 16c1-2 3-4 4-4s3 2 4 4" stroke="#C8A97E" strokeWidth="2.2"/></svg>
              <h3 className="text-xl font-bold text-white mb-2">Keratin & Saç Bakımı</h3>
              <p className="text-zinc-300 text-sm">Yıpranmış saçlara özel keratin ve bakım uygulamaları ile sağlıklı ve parlak saçlar.</p>
            </div>
            {/* Damat Tıraşı */}
            <div className="bg-zinc-900/90 border-2 border-[#C8A97E] rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:scale-[1.03] transition-transform duration-300 group">
              <svg className="mb-4" width="40" height="40" fill="none" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="9" stroke="#C8A97E" strokeWidth="2.2"/><path d="M8 16c1-2 3-4 4-4s3 2 4 4" stroke="#C8A97E" strokeWidth="2.2"/></svg>
              <h3 className="text-xl font-bold text-white mb-2">Damat Tıraşı</h3>
              <p className="text-zinc-300 text-sm">Özel günler için profesyonel damat tıraşı ve bakım hizmeti. Unutulmaz bir deneyim.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-10 md:py-20 px-2 md:px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-['Merriweather'] text-[28px] md:text-[36px] font-bold text-[#C8A97E] text-center mb-12 md:mb-16 tracking-wide drop-shadow">Profesyonel Berberlerimiz</h2>
          <p className="text-zinc-300 text-center mb-8">Boss Barbers Club ekibi, İstanbul Eyüp Sultan&apos;da erkek kuaförlüğü ve berberlik alanında uzman, müşteri memnuniyetine önem veren, hijyenik ve güler yüzlü profesyonellerden oluşur. Çocuklara özel saç kesimi ve aile dostu hizmet anlayışımızla her yaştan misafirimize özen gösteriyoruz.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Sercan Çınar */}
            <div className="relative bg-gradient-to-br from-zinc-900 via-black to-zinc-800 border-2 border-[#C8A97E] rounded-2xl shadow-xl p-8 flex flex-col items-center hover:scale-[1.03] transition-transform duration-300 group">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#C8A97E] px-4 py-1 rounded-full text-black font-bold text-sm shadow-lg border border-[#fff2]">Usta Berber</div>
              <div className="mb-4 relative w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-[#C8A97E] shadow-lg">
                <Image
                  src="/barbers/sercan-cinar.png"
                  alt="Sercan Çınar"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 160px, 224px"
                  priority
                />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-1 mt-2 tracking-wide">Sercan Çınar</h3>
              <span className="text-[#C8A97E] font-semibold text-lg mb-3">Usta Berber</span>
              <a
                href="https://instagram.com/cnr.sercan"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white hover:bg-[#C8A97E] transition-colors duration-200 shadow-md mt-2"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Sercan Çınar Instagram"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="24" height="24" rx="6" fill="#E1306C" />
                  <path d="M12 7.2C9.34903 7.2 7.2 9.34903 7.2 12C7.2 14.651 9.34903 16.8 12 16.8C14.651 16.8 16.8 14.651 16.8 12C16.8 9.34903 14.651 7.2 12 7.2ZM12 15.6C10.2332 15.6 8.8 14.1668 8.8 12.4C8.8 10.6332 10.2332 9.2 12 9.2C13.7668 9.2 15.2 10.6332 15.2 12.4C15.2 14.1668 13.7668 15.6 12 15.6Z" fill="white" />
                  <circle cx="16.8" cy="7.2" r="1.2" fill="white" />
                </svg>
                <span className="text-black font-semibold">@cnr.sercan</span>
              </a>
            </div>
            {/* Berke Akyüz */}
            <div className="relative bg-gradient-to-br from-zinc-900 via-black to-zinc-800 border-2 border-[#C8A97E] rounded-2xl shadow-xl p-8 flex flex-col items-center hover:scale-[1.03] transition-transform duration-300 group">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#C8A97E] px-4 py-1 rounded-full text-black font-bold text-sm shadow-lg border border-[#fff2]">Usta Berber</div>
              <div className="mb-4 relative w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-[#C8A97E] shadow-lg">
                <Image
                  src="/barbers/berke-akyuz.png"
                  alt="Berke Akyüz"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 160px, 224px"
                  priority
                />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-1 mt-2 tracking-wide">Berke Akyüz</h3>
              <span className="text-[#C8A97E] font-semibold text-lg mb-3">Usta Berber</span>
              <a
                href="https://instagram.com/akyuzberkee"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white hover:bg-[#C8A97E] transition-colors duration-200 shadow-md mt-2"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Berke Akyüz Instagram"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="24" height="24" rx="6" fill="#E1306C" />
                  <path d="M12 7.2C9.34903 7.2 7.2 9.34903 7.2 12C7.2 14.651 9.34903 16.8 12 16.8C14.651 16.8 16.8 14.651 16.8 12C16.8 9.34903 14.651 7.2 12 7.2ZM12 15.6C10.2332 15.6 8.8 14.1668 8.8 12.4C8.8 10.6332 10.2332 9.2 12 9.2C13.7668 9.2 15.2 10.6332 15.2 12.4C15.2 14.1668 13.7668 15.6 12 15.6Z" fill="white" />
                  <circle cx="16.8" cy="7.2" r="1.2" fill="white" />
                </svg>
                <span className="text-black font-semibold">@akyuzberkee</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-10 md:py-20 px-2 md:px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-['Merriweather'] text-[36px] font-light text-white text-center mb-12 md:mb-16">Galeri</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="col-span-1 md:col-span-2 flex flex-col gap-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="rounded-lg overflow-hidden">
                  <Image src="/barbers/dukkan1.png" alt="Galeri 1" width={600} height={400} className="object-cover w-full h-full" />
                </div>
                <div className="rounded-lg overflow-hidden">
                  <Image src="/barbers/dukkan2.png" alt="Galeri 2" width={600} height={400} className="object-cover w-full h-full" />
                </div>
              </div>
              <div className="rounded-lg overflow-hidden">
                <Image src="/barbers/dukkan3.png" alt="Galeri 3" width={1200} height={400} className="object-cover w-full h-full" />
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="rounded-lg overflow-hidden">
                <Image src="/barbers/dukkan4.png" alt="Galeri 4" width={600} height={400} className="object-cover w-full h-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

            {/* Hakkımızda Section */}
            <section id="aboutus" className="max-w-3xl mx-auto px-4 py-10">
        <div className="bg-zinc-900/90 rounded-2xl shadow-xl border-2 border-[#C8A97E] p-8 md:p-12 flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#C8A97E] mb-4 tracking-wide drop-shadow">Hakkımızda</h2>
          <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">İstanbul Eyüp Sultan Erkek Kuaförü &amp; Berber</h3>
          <p className="text-zinc-300 text-base md:text-lg mb-4 max-w-2xl">Boss Barbers Club, İstanbul Eyüp Sultan ilçesinde erkek kuaförü ve berber olarak profesyonel saç kesimi, sakal tıraşı, saç bakımı ve çocuk saç kesimi hizmetleri sunar. Modern ve klasik saç modelleri, hijyenik ortam, müşteri memnuniyeti ve uygun fiyatlarla bölgenin önde gelen berberlerinden biriyiz.</p>
          <p className="text-zinc-300 text-base md:text-lg max-w-2xl">Çocuklara özel saç kesimi ve aile dostu hizmet anlayışımızla her yaştan misafirimize özen gösteriyoruz. Eyüp Sultan&apos;da erkek kuaförü arıyorsanız, deneyimli ekibimizle Boss Barbers Club olarak size en iyi hizmeti sunmak için buradayız. Randevu almak ve profesyonel berber deneyimi yaşamak için bizimle iletişime geçebilirsiniz.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-10 md:py-20 px-2 md:px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-['Merriweather'] text-[24px] font-light text-white text-center mb-12 md:mb-16">İletişim</h2>
          <div className="grid grid-cols-1 gap-12">
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
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
