import React, { useState } from 'react';
import { HOTEL_CONTACT } from '../data/hotelData';

interface FloatingConciergeProps {
  onOpenBooking: () => void;
}

export const FloatingConcierge: React.FC<FloatingConciergeProps> = ({ onOpenBooking }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const quickOptions = [
    {
      title: 'Cotizar Habitación',
      desc: 'Calcula noches y tarifas en COP',
      icon: 'calculate',
      action: () => {
        setMenuOpen(false);
        onOpenBooking();
      },
    },
    {
      title: 'Pasadía Relax ($60.000)',
      desc: 'Jacuzzi, almuerzo y solárium',
      icon: 'pool',
      action: () => {
        setMenuOpen(false);
        window.open(
          `https://wa.me/${HOTEL_CONTACT.whatsappRaw}?text=${encodeURIComponent(
            'Hola, deseo reservar el Pasadía Relax de $60.000 en Hotel Ucla Center.'
          )}`,
          '_blank'
        );
      },
    },
    {
      title: 'Plan Romántico Parejas',
      desc: 'Decoración de rosas y champaña',
      icon: 'favorite',
      action: () => {
        setMenuOpen(false);
        window.open(
          `https://wa.me/${HOTEL_CONTACT.whatsappRaw}?text=${encodeURIComponent(
            'Hola, deseo cotizar el Plan Romántico con rosas en suite.'
          )}`,
          '_blank'
        );
      },
    },
    {
      title: 'Hablar con Recepción',
      desc: 'Chat en tiempo real 24/7',
      icon: 'support_agent',
      action: () => {
        setMenuOpen(false);
        window.open(
          `https://wa.me/${HOTEL_CONTACT.whatsappRaw}?text=${encodeURIComponent(
            'Cordial saludo, deseo consultar disponibilidad en Hotel Ucla Center Valledupar.'
          )}`,
          '_blank'
        );
      },
    },
  ];

  return (
    <aside className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
      {/* Quick Concierge Menu Popover */}
      {menuOpen && (
        <div className="bg-white rounded-2xl p-4 shadow-2xl border border-[#001a39]/15 w-72 mb-1 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-[#001a39]/10">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="font-serif font-bold text-sm text-[#001a39]">
                Concierge Ucla Center
              </span>
            </div>
            <button
              onClick={() => setMenuOpen(false)}
              className="text-[#43474f] hover:text-[#001a39]"
              aria-label="Cerrar opciones"
            >
              <span className="material-symbols-outlined text-base">close</span>
            </button>
          </div>

          <div className="space-y-1.5">
            {quickOptions.map((opt, i) => (
              <button
                key={i}
                type="button"
                onClick={opt.action}
                className="w-full p-2.5 rounded-xl hover:bg-[#fbf9f4] border border-transparent hover:border-[#001a39]/10 transition-all text-left flex items-start gap-2.5 cursor-pointer group"
              >
                <div className="w-8 h-8 rounded-lg bg-[#f0eee9] group-hover:bg-[#001a39] group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                  <span className="material-symbols-outlined text-base">{opt.icon}</span>
                </div>
                <div>
                  <span className="font-serif font-bold text-xs text-[#001a39] block">
                    {opt.title}
                  </span>
                  <span className="text-[10px] text-[#43474f] leading-tight block">
                    {opt.desc}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <div className="flex items-center gap-2.5">
        <div
          onClick={() => setMenuOpen(!menuOpen)}
          className="hidden sm:flex flex-col items-end bg-white px-3.5 py-2 rounded-xl shadow-lg border border-[#001a39]/10 cursor-pointer hover:bg-[#fbf9f4] transition-colors"
        >
          <span className="font-sans text-[11px] uppercase tracking-wider text-[#735b31] font-bold flex items-center gap-1.5">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Atención Personalizada
          </span>
          <span className="font-sans text-xs text-[#001a39] font-medium">
            ¿Desea una reserva inmediata?
          </span>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Contacto directo y reservas vía WhatsApp"
          className="w-14 h-14 rounded-full bg-[#001a39] text-[#ffdeaa] hover:text-white hover:bg-[#002f5d] flex items-center justify-center shadow-2xl hover:scale-105 transition-all duration-200 border-2 border-[#ffdeaa]/40 cursor-pointer"
        >
          <span className="material-symbols-outlined text-2xl">
            {menuOpen ? 'close' : 'chat'}
          </span>
        </button>
      </div>
    </aside>
  );
};
