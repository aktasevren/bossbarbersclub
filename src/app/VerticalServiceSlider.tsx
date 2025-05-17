import Image from "next/image";
import { useState } from "react";

const services = [
  {
    title: "SAÇ KESİMİ",
    image: "/images/service-haircut.jpg",
    desc: "Profesyonel saç kesimi ve stil danışmanlığı.",
    number: "-"
  },
  {
    title: "SAKAL KESİMİ",
    image: "/images/service-shave.jpg",
    desc: "Klasik ve modern tıraş deneyimi.",
    number: "-"
  },
  {
    title: "ÇOCUK SAÇ KESİMİ",
    image: "/images/service-beard.jpg",
    desc: "Sakal şekillendirme ve bakım.",
    number: "-"
  },
  {
    title: "SAÇ BOYAMA",
    image: "/images/service-spa.jpg",
    desc: "Rahatlatıcı bakım ve spa hizmetleri.",
    number: "-"
  },
];

export default function VerticalServiceSlider() {
  const [active, setActive] = useState(0);

  return (
    <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-6 md:gap-8 lg:gap-12">
      {/* Resim */}
      <div className="flex-shrink-0 flex items-center justify-center w-full max-w-xs md:max-w-none md:w-64 md:h-64 lg:w-80 lg:h-80">
        <div className="w-full h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 relative rounded-lg overflow-hidden bg-zinc-800">
          <Image
            src={services[active].image}
            alt={services[active].title}
            fill
            className="object-cover object-center transition-all duration-500"
            priority
          />
        </div>
      </div>
      {/* Hizmetler */}
      <div className="flex flex-col justify-center gap-3 w-full max-w-xs md:max-w-md mt-4 md:mt-0">
        {services.map((service, idx) => (
          <button
            key={service.title}
            onClick={() => setActive(idx)}
            className={`transition-all duration-300 text-left px-2 py-2 rounded font-ebgaramond text-lg md:text-xl font-bold tracking-tight relative group whitespace-nowrap ${active === idx ? "text-white" : "text-zinc-500"}`}
            style={{letterSpacing:'normal'}}
          >
            <span className="inline-block mr-2 opacity-60 text-sm align-top text-[#C58154]">{{...service}.number && `{${service.number}}`}</span>
            <span className="inline-block align-middle">{service.title}</span>
            {active === idx && (
              <span className="inline-block text-xs font-poppins font-normal text-zinc-300 ml-2 whitespace-nowrap align-middle">{service.desc}</span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
} 