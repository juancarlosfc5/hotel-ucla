import React, { useState } from 'react';
import { FAQ_ITEMS, HOTEL_CONTACT } from '../data/hotelData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#f5f3ee] py-16 lg:py-24 border-t border-[#001a39]/5">
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="font-sans text-xs uppercase tracking-widest text-[#735b31] font-bold block mb-2">
            RESOLVEMOS TUS DUDAS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#001a39] font-normal tracking-tight mb-3 text-balance">
            Preguntas Frecuentes
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#43474f] leading-relaxed">
            Información clara y rápida para planificar tu visita a Hotel Ucla Center.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-3">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-xs border border-[#001a39]/10 transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(index)}
                  aria-expanded={isOpen}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-[#fbf9f4] transition-colors cursor-pointer"
                >
                  <span className="font-serif text-base sm:text-lg font-bold text-[#001a39]">
                    {item.question}
                  </span>
                  <span
                    className={`material-symbols-outlined text-[#735b31] transition-transform duration-300 text-2xl shrink-0 ${
                      isOpen ? 'rotate-180 text-[#001a39]' : ''
                    }`}
                  >
                    expand_more
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#43474f] leading-relaxed border-t border-[#001a39]/5">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* FAQ CTA */}
        <div className="mt-10 text-center">
          <a
            className="inline-flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-wider text-[#001a39] hover:text-[#735b31] transition-colors bg-white px-5 py-3 rounded-full border border-[#001a39]/10 shadow-xs"
            href={`https://wa.me/${HOTEL_CONTACT.whatsappRaw}?text=${encodeURIComponent(
              'Hola, tengo una pregunta sobre mi estancia en Hotel Ucla Center Valledupar.'
            )}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="material-symbols-outlined text-emerald-600">help_outline</span>
            <span>¿Tienes otra pregunta? Escríbenos directamente</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </a>
        </div>
      </div>
    </section>
  );
};
