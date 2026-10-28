import React, { useState, useEffect } from 'react';
import { HOTEL_CONTACT } from '../data/hotelData';

interface NavbarProps {
  onOpenBooking: (roomId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Habitaciones', href: '#habitaciones' },
    { name: 'Experiencias', href: '#experiencias' },
    { name: 'Restaurante Caobos', href: '#restaurante-caobos' },
    { name: 'Eventos', href: '#eventos' },
    { name: 'Galería', href: '#galeria' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#fbf9f4]/95 backdrop-blur-md shadow-md py-3'
          : 'bg-[#fbf9f4]/90 backdrop-blur-sm py-4 border-b border-[#001a39]/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-6">
        {/* Zone 1: Brand Wordmark & Emblem */}
        <a href="#inicio" className="flex items-center gap-3 shrink-0 group">
          <img
            src="/assets/aistudio/Image_5_f9bc1e4f.jpeg"
            alt="Hotel Ucla Center Logo"
            className="w-10 h-10 object-contain rounded border border-[#735b31]/20 bg-white p-0.5 shadow-sm group-hover:scale-105 transition-transform"
          />
          <div className="flex flex-col">
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#001a39] leading-none">
              HOTEL UCLA
            </span>
            <span className="font-sans text-[10px] uppercase tracking-widest text-[#735b31] mt-0.5 font-semibold">
              Center • Valledupar
            </span>
          </div>
        </a>

        {/* Zone 2: Navigation Links (Desktop) */}
        <nav className="hidden xl:flex items-center gap-7 text-sm font-medium text-[#43474f]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="uppercase tracking-wider text-xs font-semibold hover:text-[#001a39] transition-colors whitespace-nowrap relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#735b31] hover:after:w-full after:transition-all after:duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action & Quick WhatsApp Contact */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={`https://wa.me/${HOTEL_CONTACT.whatsappRaw}?text=${encodeURIComponent(
              'Hola, deseo información sobre disponibilidad y reservas en Hotel Ucla Center Valledupar.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded text-xs font-semibold tracking-wider uppercase text-[#001a39] hover:bg-[#eae8e3] transition-colors"
          >
            <span className="material-symbols-outlined text-lg text-emerald-600">chat</span>
            <span>WhatsApp</span>
          </a>

          <button
            onClick={() => onOpenBooking()}
            className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2.5 rounded bg-[#001a39] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#002f5d] transition-all duration-200 shadow-md hover:shadow-lg whitespace-nowrap cursor-pointer"
          >
            <span className="material-symbols-outlined text-base">calendar_month</span>
            <span>Reservar ahora</span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded text-[#001a39] hover:bg-[#eae8e3] transition-colors focus:outline-none"
            aria-label="Abrir menú de navegación"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#fbf9f4] border-t border-[#001a39]/10 px-6 py-5 shadow-xl transition-all">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold tracking-wide text-[#001a39] py-2 border-b border-[#001a39]/5 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="material-symbols-outlined text-sm text-[#735b31]">
                  chevron_right
                </span>
              </a>
            ))}

            <div className="pt-3 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 rounded bg-[#001a39] text-white text-xs font-semibold uppercase tracking-wider text-center shadow"
              >
                Reservar Habitación o Experiencia
              </button>
              <a
                href={`https://wa.me/${HOTEL_CONTACT.whatsappRaw}?text=${encodeURIComponent(
                  'Hola Hotel Ucla Center, deseo cotizar mi estadía.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded border border-[#735b31] text-[#735b31] text-xs font-semibold uppercase tracking-wider text-center flex items-center justify-center gap-1.5"
              >
                <span className="material-symbols-outlined text-base text-emerald-600">chat</span>
                <span>Chatear por WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
