import React from 'react';
import { HOTEL_CONTACT } from '../data/hotelData';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#041a38] text-white pt-16 pb-12 border-t border-white/10">
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Column 1: Brand & Philosophy */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/assets/aistudio/Image_5_f9bc1e4f.jpeg"
                alt="Hotel Ucla Center Valledupar"
                className="w-10 h-10 object-contain rounded bg-white p-0.5"
              />
              <div className="flex flex-col">
                <span className="font-serif text-2xl text-white tracking-tight font-bold">
                  HOTEL UCLA
                </span>
                <span className="font-sans text-[10px] uppercase tracking-widest text-[#ffdeaa] font-semibold">
                  Center • Con Encanto
                </span>
              </div>
            </div>
            <p className="font-sans text-xs text-[#d5e3ff] leading-relaxed">
              Un oasis de serenidad y calidez en el corazón de Valledupar. Hospitalidad boutique,
              diseño sosegado y el ritmo acogedor de la capital del vallenato.
            </p>
            <div className="pt-2">
              <a
                className="inline-flex items-center gap-2 text-[#ffdeaa] font-sans text-xs uppercase tracking-wider hover:text-white transition-colors duration-150 font-semibold"
                href={HOTEL_CONTACT.lobbyPmsUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-base">calendar_month</span>
                <span>Motor Oficial LobbyPMS</span>
              </a>
            </div>
          </div>

          {/* Column 2: Location & Contact */}
          <div className="space-y-3">
            <h4 className="font-serif text-lg font-bold text-white">Ubicación & Contacto</h4>
            <ul className="space-y-2.5 text-[#d5e3ff] font-sans text-xs">
              <li className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-base text-[#ffdeaa] mt-0.5 shrink-0">
                  pin_drop
                </span>
                <span>{HOTEL_CONTACT.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-base text-[#ffdeaa] shrink-0">
                  phone_iphone
                </span>
                <a href={`tel:${HOTEL_CONTACT.phone1.replace(/\s+/g, '')}`} className="hover:text-white">
                  {HOTEL_CONTACT.phone1} (Recepción)
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-base text-[#ffdeaa] shrink-0">
                  phone
                </span>
                <a href={`tel:${HOTEL_CONTACT.phone2.replace(/\s+/g, '')}`} className="hover:text-white">
                  {HOTEL_CONTACT.phone2} (Reservas)
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-base text-[#ffdeaa] shrink-0">
                  alternate_email
                </span>
                <span>{HOTEL_CONTACT.email1}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-base text-[#ffdeaa] shrink-0">
                  mail
                </span>
                <span>{HOTEL_CONTACT.email2}</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Navigation */}
          <div className="space-y-3">
            <h4 className="font-serif text-lg font-bold text-white">Experiencias</h4>
            <ul className="space-y-2 text-[#d5e3ff] font-sans text-xs">
              <li>
                <a className="hover:text-white transition-colors" href="#habitaciones">
                  Suites Ejecutivas y Familiares
                </a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="#restaurante-caobos">
                  Restaurante Gourmet Caobos
                </a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="#experiencias">
                  Terraza & Jacuzzi con Cascada
                </a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="#experiencias">
                  Pasadía Relax ($60.000 COP)
                </a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="#eventos">
                  Salón de Conferencias & Eventos
                </a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="#galeria">
                  Galería & Recorridos Virtuales
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Connectivity & Social */}
          <div className="space-y-3">
            <h4 className="font-serif text-lg font-bold text-white">Conectividad</h4>
            <p className="font-sans text-xs text-[#d5e3ff] leading-relaxed">
              Acompáñenos en nuestros canales oficiales y comparta su experiencia en Valledupar.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <a
                className="px-3 py-1.5 rounded-lg bg-[#1c2f4e] text-white hover:bg-[#ffdeaa] hover:text-[#271900] transition-colors font-sans text-xs uppercase font-semibold"
                href={HOTEL_CONTACT.social.facebook}
                rel="noopener noreferrer"
                target="_blank"
              >
                Facebook
              </a>
              <a
                className="px-3 py-1.5 rounded-lg bg-[#1c2f4e] text-white hover:bg-[#ffdeaa] hover:text-[#271900] transition-colors font-sans text-xs uppercase font-semibold"
                href={HOTEL_CONTACT.social.instagram}
                rel="noopener noreferrer"
                target="_blank"
              >
                Instagram
              </a>
              <a
                className="px-3 py-1.5 rounded-lg bg-[#1c2f4e] text-white hover:bg-[#ffdeaa] hover:text-[#271900] transition-colors font-sans text-xs uppercase font-semibold"
                href={HOTEL_CONTACT.social.tiktok}
                rel="noopener noreferrer"
                target="_blank"
              >
                TikTok
              </a>
              <a
                className="px-3 py-1.5 rounded-lg bg-[#1c2f4e] text-white hover:bg-[#ffdeaa] hover:text-[#271900] transition-colors font-sans text-xs uppercase font-semibold"
                href={HOTEL_CONTACT.googleMapsUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                Google Maps
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[#d5e3ff] font-sans text-xs">
          <p>© 2025 Hotel Ucla Center. Todos los derechos reservados. Valledupar, Colombia.</p>
          <p className="font-serif text-base italic text-[#ffdeaa]">Un Hotel con encanto</p>
        </div>
      </div>
    </footer>
  );
};
