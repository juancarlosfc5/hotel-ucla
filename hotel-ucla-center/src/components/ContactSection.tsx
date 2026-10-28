import React, { useState } from 'react';
import { HOTEL_CONTACT } from '../data/hotelData';

interface ContactSectionProps {
  onOpenBooking: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenBooking }) => {
  const [formName, setFormName] = useState('');
  const [formContact, setFormContact] = useState('');
  const [formSubject, setFormSubject] = useState('Consulta General');
  const [formMessage, setFormMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName.trim() || !formContact.trim() || !formMessage.trim()) return;

    const msg = `*MENSAJE DESDE LA WEB - HOTEL UCLA CENTER*\n\n👤 *Nombre:* ${formName}\n📞 *Contacto:* ${formContact}\n📌 *Asunto:* ${formSubject}\n💬 *Mensaje:* ${formMessage}`;
    const url = `https://wa.me/${HOTEL_CONTACT.whatsappRaw}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
    setSubmitted(true);
  };

  return (
    <div id="contacto">
      {/* 1. Final Call To Action Banner */}
      <section className="w-full bg-[#001a39] text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-gradient from-white/5 to-transparent pointer-events-none"></div>
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="font-sans text-xs uppercase tracking-widest text-[#ffdeaa] mb-2 block font-bold">
            TU ESTANCIA TE ESPERA
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white font-normal tracking-tight mb-4 text-balance">
            Tu próximo viaje merece{' '}
            <span className="italic font-light text-[#ffdeaa]">una estancia con encanto.</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#d5e3ff] max-w-2xl mx-auto mb-8 leading-relaxed text-balance">
            Descubre Hotel Ucla Center y encuentra el espacio ideal para descansar, compartir y
            disfrutar Valledupar.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-md mx-auto">
            <button
              type="button"
              onClick={onOpenBooking}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-[#735b31] text-white font-sans text-xs font-bold uppercase tracking-wider hover:bg-[#ffdeaa] hover:text-[#271900] transition-all duration-300 shadow-xl cursor-pointer"
            >
              <span>Reservar ahora</span>
              <span className="material-symbols-outlined ml-2 text-lg">calendar_month</span>
            </button>
            <a
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-white/15 backdrop-blur-md text-white font-sans text-xs font-bold uppercase tracking-wider hover:bg-white/25 transition-all duration-300 border border-white/20"
              href={`https://wa.me/${HOTEL_CONTACT.whatsappRaw}?text=${encodeURIComponent(
                'Hola, deseo comunicarme con la recepción de Hotel Ucla Center para una consulta.'
              )}`}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="material-symbols-outlined mr-2 text-lg text-[#ffdeaa]">
                phone_forwarded
              </span>
              <span>Hablar con recepción</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. Location & Contact Grid */}
      <section className="w-full bg-[#fbf9f4] py-16 lg:py-24 border-t border-[#001a39]/5">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Contact Details & Map Info (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="font-sans text-xs uppercase tracking-widest text-[#735b31] font-bold block mb-1">
                  UBICACIÓN Y ATENCIÓN
                </span>
                <h3 className="font-serif text-3xl text-[#001a39] font-bold">
                  En el corazón de Valledupar
                </h3>
                <p className="font-sans text-sm text-[#43474f] mt-2 leading-relaxed">
                  Estamos ubicados en una zona residencial y comercial privilegiada, tranquila y con
                  fácil conectividad hacia cualquier punto de la ciudad.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5 p-4 bg-white rounded-xl border border-[#001a39]/10 shadow-xs">
                  <div className="w-10 h-10 rounded-lg bg-[#ffdeaa]/50 text-[#735b31] flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-xl">pin_drop</span>
                  </div>
                  <div>
                    <h5 className="font-serif font-bold text-sm text-[#001a39]">Dirección</h5>
                    <p className="font-sans text-xs text-[#43474f] mt-0.5">
                      {HOTEL_CONTACT.address}
                    </p>
                    <a
                      href={HOTEL_CONTACT.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-[#735b31] hover:underline mt-1"
                    >
                      <span>Abrir en Google Maps</span>
                      <span className="material-symbols-outlined text-xs">open_in_new</span>
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 bg-white rounded-xl border border-[#001a39]/10 shadow-xs">
                  <div className="w-10 h-10 rounded-lg bg-[#ffdeaa]/50 text-[#735b31] flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-xl">phone_in_talk</span>
                  </div>
                  <div>
                    <h5 className="font-serif font-bold text-sm text-[#001a39]">
                      Líneas de Atención 24/7
                    </h5>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 font-sans text-xs text-[#43474f] mt-0.5">
                      <a href={`tel:${HOTEL_CONTACT.phone1.replace(/\s+/g, '')}`} className="hover:text-[#001a39]">
                        {HOTEL_CONTACT.phone1} (Recepción)
                      </a>
                      <a href={`tel:${HOTEL_CONTACT.phone2.replace(/\s+/g, '')}`} className="hover:text-[#001a39]">
                        {HOTEL_CONTACT.phone2} (Reservas)
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 bg-white rounded-xl border border-[#001a39]/10 shadow-xs">
                  <div className="w-10 h-10 rounded-lg bg-[#ffdeaa]/50 text-[#735b31] flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-xl">mail</span>
                  </div>
                  <div>
                    <h5 className="font-serif font-bold text-sm text-[#001a39]">
                      Correos Electrónicos
                    </h5>
                    <p className="font-sans text-xs text-[#43474f] mt-0.5">
                      {HOTEL_CONTACT.email1} · {HOTEL_CONTACT.email2}
                    </p>
                  </div>
                </div>
              </div>

              {/* Transportation tips */}
              <div className="p-4 bg-[#f0eee9] rounded-xl border border-[#001a39]/10 space-y-2 text-xs text-[#43474f]">
                <span className="font-bold text-[#001a39] block">
                  Puntos de referencia cercanos:
                </span>
                <p>✈️ <strong>Aeropuerto Alfonso López Pumarejo:</strong> A 15 minutos en taxi.</p>
                <p>🚌 <strong>Terminal de Transportes de Valledupar:</strong> A 10 minutos.</p>
                <p>🏛️ <strong>Plaza Alfonso López & Centro Histórico:</strong> A 5 minutos.</p>
              </div>
            </div>

            {/* Direct Message Form (6 cols) */}
            <div className="lg:col-span-6">
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#001a39]/10 shadow-md">
                <h4 className="font-serif text-2xl text-[#001a39] font-bold mb-1">
                  Envíanos un Mensaje
                </h4>
                <p className="text-xs text-[#43474f] mb-6">
                  ¿Preguntas sobre grupos, eventos, reservas o traslados? Te responderemos a la brevedad.
                </p>

                {submitted ? (
                  <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-xl text-center space-y-2">
                    <span className="material-symbols-outlined text-3xl text-emerald-600">
                      check_circle
                    </span>
                    <h5 className="font-serif text-lg font-bold text-emerald-900">
                      ¡Mensaje Preparado con Éxito!
                    </h5>
                    <p className="text-xs text-emerald-700">
                      Se ha abierto tu aplicación de WhatsApp para entregar tu solicitud directamente a nuestra recepción.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="mt-3 text-xs text-[#001a39] underline font-semibold"
                    >
                      Enviar otra consulta
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                    <div>
                      <label className="block font-medium text-[#43474f] mb-1">
                        Nombre completo *
                      </label>
                      <input
                        type="text"
                        required
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                        placeholder="Ej. Laura Martínez"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#001a39]/20 text-xs text-[#1b1c19] focus:outline-none focus:ring-2 focus:ring-[#001a39]"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block font-medium text-[#43474f] mb-1">
                          Teléfono o WhatsApp *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formContact}
                          onChange={(e) => setFormContact(e.target.value)}
                          placeholder="+57 310..."
                          className="w-full px-3.5 py-2.5 rounded-lg border border-[#001a39]/20 text-xs text-[#1b1c19] focus:outline-none focus:ring-2 focus:ring-[#001a39]"
                        />
                      </div>

                      <div>
                        <label className="block font-medium text-[#43474f] mb-1">
                          Motivo del Contacto
                        </label>
                        <select
                          value={formSubject}
                          onChange={(e) => setFormSubject(e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-lg border border-[#001a39]/20 text-xs text-[#1b1c19] focus:outline-none focus:ring-2 focus:ring-[#001a39] bg-white"
                        >
                          <option value="Consulta General">Consulta General</option>
                          <option value="Reserva de Habitación">Reserva de Habitación</option>
                          <option value="Pasadía Relax ($60.000)">Pasadía Relax ($60.000)</option>
                          <option value="Plan Romántico Parejas">Plan Romántico Parejas</option>
                          <option value="Evento / Reunión Corporativa">Evento Corporativo</option>
                          <option value="Restaurante Caobos">Restaurante Caobos</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block font-medium text-[#43474f] mb-1">
                        Mensaje o detalles de tu consulta *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formMessage}
                        onChange={(e) => setFormMessage(e.target.value)}
                        placeholder="Escribe aquí las fechas deseadas, número de personas o cualquier requerimiento especial..."
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#001a39]/20 text-xs text-[#1b1c19] focus:outline-none focus:ring-2 focus:ring-[#001a39]"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 rounded-lg bg-[#001a39] hover:bg-[#002f5d] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-md flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-base">send</span>
                      <span>Enviar Consulta a Recepción</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
