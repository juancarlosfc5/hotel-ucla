import React, { useState } from 'react';
import { HOTEL_CONTACT } from '../data/hotelData';

interface HeroProps {
  onOpenBooking: (roomId?: string, checkIn?: string, checkOut?: string, guests?: number) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const todayStr = new Date().toISOString().split('T')[0];
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowStr = tomorrow.toISOString().split('T')[0];

  const [quickCheckIn, setQuickCheckIn] = useState<string>(todayStr);
  const [quickCheckOut, setQuickCheckOut] = useState<string>(tomorrowStr);
  const [quickGuests, setQuickGuests] = useState<number>(2);

  const handleQuickSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenBooking(undefined, quickCheckIn, quickCheckOut, quickGuests);
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#001a39] text-white pt-24 pb-16 lg:pt-36 lg:pb-24" id="inicio">
      {/* Ambient Backdrop Gradient & Background Image */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#001a39] via-[#001a39]/75 to-[#001a39]/40 z-10 pointer-events-none"></div>
      <div className="absolute inset-0 z-0 scale-105 transform opacity-50 transition-transform duration-1000 ease-out hover:scale-100">
        <img
          alt="Terraza con jacuzzi y solarium en Hotel Ucla Center Valledupar"
          className="w-full h-full object-cover object-center"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCImEp-7EwFtyiHmgfxBCqIirywFuJjaPNSPEqseTC325NV0WL0RhTpz5kPvDUnR-C8dwWhH5Bak30DFJRyQ0qV2dXRSexsxXL6-ilIlJrNQThFBMysQggyOeF-vsyIgD_6nQySohp_zedAs2VJv2VEiwHk64GCCBydkY3qWF0Ao8QtDebN6lBP2knwJ2Yl6CNVEXOIEflnU1vNVCDO9k6sHKyzT_xdfut_4XewK2OhLgwr8RcrfZhV4GE8HCOjB_X7"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        {/* Top Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md mb-6 shadow-sm border border-white/10">
          <span className="inline-block w-2 h-2 rounded-full bg-[#ffdeaa]"></span>
          <span className="font-sans text-xs uppercase tracking-widest text-[#ffdeaa] font-bold">
            HOTEL UCLA CENTER · VALLEDUPAR
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl max-w-4xl tracking-tight leading-tight mb-4 font-normal text-balance">
          Tu próxima experiencia en Valledupar{' '}
          <span className="italic font-light text-[#ffdeaa]">comienza aquí.</span>
        </h1>

        {/* Subtitle */}
        <p className="font-sans text-base sm:text-lg text-[#d5e3ff] max-w-2xl mb-8 font-normal leading-relaxed text-balance">
          Ya sea por trabajo, descanso o una ocasión especial, en Hotel Ucla Center encontrarás
          espacios para sentirte cómodo, disfrutar cada momento y vivir una estancia con encanto.
        </p>

        {/* Conversion Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full max-w-md mb-10">
          <button
            type="button"
            onClick={() => onOpenBooking()}
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded bg-[#735b31] text-white font-sans text-xs font-bold uppercase tracking-wider hover:bg-[#ffdeaa] hover:text-[#271900] transition-all duration-300 shadow-xl group cursor-pointer"
          >
            <span>Reservar mi estancia</span>
            <span className="material-symbols-outlined ml-2 text-lg transition-transform duration-200 group-hover:translate-x-1">
              calendar_month
            </span>
          </button>

          <a
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded bg-white/15 backdrop-blur-md text-white font-sans text-xs font-bold uppercase tracking-wider hover:bg-white/25 transition-all duration-300 border border-white/15"
            href={`https://wa.me/${HOTEL_CONTACT.whatsappRaw}?text=${encodeURIComponent(
              'Hola, visité la página web de Hotel Ucla Center y quiero consultar disponibilidad para una estancia en Valledupar.'
            )}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="material-symbols-outlined mr-2 text-lg text-[#ffdeaa]">chat</span>
            <span>Consultar por WhatsApp</span>
          </a>
        </div>

        {/* Interactive Quick Booking Search Bar */}
        <div className="w-full max-w-4xl bg-white/95 backdrop-blur-lg rounded-2xl p-4 sm:p-5 shadow-2xl border border-white/20 text-[#1b1c19] mb-12">
          <form
            onSubmit={handleQuickSearch}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 items-end"
          >
            <div className="text-left">
              <label className="block text-[11px] font-bold uppercase tracking-wider text-[#735b31] mb-1">
                Llegada (Check-in)
              </label>
              <div className="relative">
                <input
                  type="date"
                  value={quickCheckIn}
                  min={todayStr}
                  onChange={(e) => setQuickCheckIn(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-lg bg-[#fbf9f4] border border-[#001a39]/15 text-xs text-[#1b1c19] focus:outline-none focus:ring-2 focus:ring-[#001a39] font-medium"
                />
              </div>
            </div>

            <div className="text-left">
              <label className="block text-[11px] font-bold uppercase tracking-wider text-[#735b31] mb-1">
                Salida (Check-out)
              </label>
              <div className="relative">
                <input
                  type="date"
                  value={quickCheckOut}
                  min={quickCheckIn}
                  onChange={(e) => setQuickCheckOut(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-lg bg-[#fbf9f4] border border-[#001a39]/15 text-xs text-[#1b1c19] focus:outline-none focus:ring-2 focus:ring-[#001a39] font-medium"
                />
              </div>
            </div>

            <div className="text-left">
              <label className="block text-[11px] font-bold uppercase tracking-wider text-[#735b31] mb-1">
                Huéspedes
              </label>
              <select
                value={quickGuests}
                onChange={(e) => setQuickGuests(Number(e.target.value))}
                className="w-full px-3 py-2.5 rounded-lg bg-[#fbf9f4] border border-[#001a39]/15 text-xs text-[#1b1c19] focus:outline-none focus:ring-2 focus:ring-[#001a39] font-medium"
              >
                <option value={1}>1 Persona (Individual)</option>
                <option value={2}>2 Personas (Pareja/Twin)</option>
                <option value={3}>3 Personas (Triple)</option>
                <option value={4}>4 Personas (Cuádruple)</option>
                <option value={5}>5 Personas (Familiar)</option>
                <option value={6}>6 Personas (Grupo Max)</option>
              </select>
            </div>

            <div>
              <button
                type="submit"
                className="w-full py-2.5 px-4 rounded-lg bg-[#001a39] hover:bg-[#002f5d] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-md flex items-center justify-center gap-1.5 cursor-pointer h-[41px]"
              >
                <span className="material-symbols-outlined text-base text-[#ffdeaa]">search</span>
                <span>Ver Disponibilidad</span>
              </button>
            </div>
          </form>
        </div>

        {/* Three Visual Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 w-full max-w-4xl pt-4">
          <div className="flex items-center justify-center md:justify-start gap-3 bg-[#1c2f4e]/60 backdrop-blur-sm p-4 rounded-xl border border-white/10">
            <span className="material-symbols-outlined text-[#ffdeaa] text-2xl">bed</span>
            <span className="font-sans text-xs font-semibold text-white text-left tracking-wide">
              Habitaciones para cada tipo de viaje
            </span>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-3 bg-[#1c2f4e]/60 backdrop-blur-sm p-4 rounded-xl border border-white/10">
            <span className="material-symbols-outlined text-[#ffdeaa] text-2xl">hot_tub</span>
            <span className="font-sans text-xs font-semibold text-white text-left tracking-wide">
              Experiencias de descanso & jacuzzi
            </span>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-3 bg-[#1c2f4e]/60 backdrop-blur-sm p-4 rounded-xl border border-white/10">
            <span className="material-symbols-outlined text-[#ffdeaa] text-2xl">room_service</span>
            <span className="font-sans text-xs font-semibold text-white text-left tracking-wide">
              Atención personalizada y cercana
            </span>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <a
          aria-label="Explorar experiencias del hotel"
          className="mt-10 inline-flex flex-col items-center text-[#ffdeaa] hover:text-white transition-colors animate-bounce"
          href="#experiencia-viajero"
        >
          <span className="font-sans text-[11px] uppercase tracking-widest text-[#d5e3ff] mb-1">
            Descubrir
          </span>
          <span className="material-symbols-outlined text-2xl">keyboard_arrow_down</span>
        </a>
      </div>
    </section>
  );
};
