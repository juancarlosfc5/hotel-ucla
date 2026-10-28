import React, { useState } from 'react';
import { HOTEL_CONTACT } from '../data/hotelData';

export const EventsSection: React.FC = () => {
  const [attendees, setAttendees] = useState<number>(20);
  const [eventType, setEventType] = useState<string>('Reunión Ejecutiva');
  const [includeCoffee, setIncludeCoffee] = useState<boolean>(true);
  const [includeLunch, setIncludeLunch] = useState<boolean>(false);
  const [includeProjector, setIncludeProjector] = useState<boolean>(true);

  const calculateEstimate = () => {
    let base = 250000; // room base
    if (includeCoffee) base += attendees * 12000;
    if (includeLunch) base += attendees * 28000;
    if (includeProjector) base += 80000;
    return base;
  };

  const formatCop = (val: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      maximumFractionDigits: 0,
    }).format(val);
  };

  const handleQuoteViaWhatsApp = () => {
    let msg = `*COTIZACIÓN DE EVENTO / REUNIÓN CORPORATIVA*\n\n`;
    msg += `🏢 *Hotel:* Hotel Ucla Center Valledupar\n`;
    msg += `📋 *Tipo de Evento:* ${eventType}\n`;
    msg += `👥 *Asistentes Estimados:* ${attendees} personas\n`;
    msg += `☕ *Estación de Café Permanente:* ${includeCoffee ? 'Sí' : 'No'}\n`;
    msg += `🍽️ *Almuerzo Ejecutivo Caobos:* ${includeLunch ? 'Sí' : 'No'}\n`;
    msg += `📽️ *Equipos Audiovisuales y Proyector:* ${includeProjector ? 'Sí' : 'No'}\n`;
    msg += `💰 *Presupuesto Estimado:* ${formatCop(calculateEstimate())} COP\n\n`;
    msg += `Por favor, infórmenme sobre disponibilidad de fechas y propuesta formal. ¡Gracias!`;

    const url = `https://wa.me/${HOTEL_CONTACT.whatsappRaw}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="w-full bg-[#041a38] text-white py-16 lg:py-24 relative overflow-hidden" id="eventos">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <span className="font-sans text-xs uppercase tracking-widest text-[#ffdeaa] font-bold block">
              ENCUENTROS Y NEGOCIOS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-normal tracking-tight text-balance">
              Tus encuentros importantes{' '}
              <span className="italic font-light text-[#ffdeaa]">
                merecen el lugar indicado.
              </span>
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#d5e3ff] font-normal leading-relaxed">
              Convierte tus reuniones empresariales, encuentros de equipo y eventos en
              experiencias bien organizadas. Conoce nuestros espacios y consulta las opciones
              disponibles para tu próxima actividad en el corazón de Valledupar.
            </p>

            {/* 3 Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
              <div className="bg-[#1c2f4e]/70 p-4 rounded-xl border border-white/10">
                <span className="material-symbols-outlined text-[#ffdeaa] text-2xl mb-1">
                  co_present
                </span>
                <h4 className="font-serif text-base text-white font-bold mb-1">
                  Reuniones empresariales
                </h4>
                <p className="font-sans text-xs text-[#d5e3ff]">
                  Conectividad de fibra, mesas de trabajo y climatización.
                </p>
              </div>
              <div className="bg-[#1c2f4e]/70 p-4 rounded-xl border border-white/10">
                <span className="material-symbols-outlined text-[#ffdeaa] text-2xl mb-1">
                  groups_2
                </span>
                <h4 className="font-serif text-base text-white font-bold mb-1">
                  Capacitaciones
                </h4>
                <p className="font-sans text-xs text-[#d5e3ff]">
                  Ambiente óptimo para talleres, inducciones y conferencias.
                </p>
              </div>
              <div className="bg-[#1c2f4e]/70 p-4 rounded-xl border border-white/10">
                <span className="material-symbols-outlined text-[#ffdeaa] text-2xl mb-1">
                  celebration
                </span>
                <h4 className="font-serif text-base text-white font-bold mb-1">
                  Celebraciones y cierres
                </h4>
                <p className="font-sans text-xs text-[#d5e3ff]">
                  Coffee breaks, banquetes y coctelería con Caobos.
                </p>
              </div>
            </div>

            {/* Interactive Quick Quote Box */}
            <div className="bg-[#1c2f4e] p-5 rounded-2xl border border-white/15 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#ffdeaa]">
                  Calculadora Rápida para Eventos
                </span>
                <span className="text-xs text-[#d5e3ff]">Estimado en tiempo real</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="block text-[#d5e3ff] mb-1">Tipo de Evento:</span>
                  <select
                    value={eventType}
                    onChange={(e) => setEventType(e.target.value)}
                    className="w-full p-2 rounded-lg bg-[#001a39] border border-white/20 text-white"
                  >
                    <option value="Reunión Ejecutiva">Reunión Ejecutiva de Junta</option>
                    <option value="Taller de Capacitación">Taller o Seminario</option>
                    <option value="Conferencia de Negocios">Conferencia Empresarial</option>
                    <option value="Celebración Corporativa">Celebración / Cierre de Año</option>
                  </select>
                </div>

                <div>
                  <span className="block text-[#d5e3ff] mb-1">
                    Número de Asistentes: <strong>{attendees} personas</strong>
                  </span>
                  <input
                    type="range"
                    min="5"
                    max="60"
                    step="5"
                    value={attendees}
                    onChange={(e) => setAttendees(Number(e.target.value))}
                    className="w-full accent-[#ffdeaa] cursor-pointer"
                  />
                </div>
              </div>

              <div className="flex flex-wrap gap-4 text-xs pt-1">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={includeCoffee}
                    onChange={(e) => setIncludeCoffee(e.target.checked)}
                    className="rounded accent-[#ffdeaa]"
                  />
                  <span>Estación de Café permanente</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={includeLunch}
                    onChange={(e) => setIncludeLunch(e.target.checked)}
                    className="rounded accent-[#ffdeaa]"
                  />
                  <span>Almuerzo Ejecutivo Caobos</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={includeProjector}
                    onChange={(e) => setIncludeProjector(e.target.checked)}
                    className="rounded accent-[#ffdeaa]"
                  />
                  <span>Equipos Proyector & Smart TV</span>
                </label>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-white/10">
                <div>
                  <span className="text-[11px] text-[#d5e3ff] block">Presupuesto Sugerido:</span>
                  <span className="font-serif text-2xl font-bold text-[#ffdeaa]">
                    {formatCop(calculateEstimate())} COP
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleQuoteViaWhatsApp}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-[#735b31] hover:bg-[#ffdeaa] hover:text-[#271900] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-md flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-base">chat</span>
                  <span>Cotizar este evento por WhatsApp</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column Specifications */}
          <div className="lg:col-span-5">
            <div className="bg-[#1c2f4e] p-6 sm:p-8 rounded-3xl space-y-6 shadow-2xl border border-white/10">
              <h3 className="font-serif text-2xl text-white font-medium">
                Servicios Corporativos Incluidos
              </h3>

              <div className="space-y-4 font-sans text-xs sm:text-sm text-[#d5e3ff]">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#ffdeaa] text-xl shrink-0 mt-0.5">
                    check_circle
                  </span>
                  <span>
                    Internet corporativo dedicado de fibra óptica con soporte simultáneo sin caídas.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#ffdeaa] text-xl shrink-0 mt-0.5">
                    check_circle
                  </span>
                  <span>
                    Equipos audiovisuales completos: pantallas Smart TV, puntero láser y proyector HD.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#ffdeaa] text-xl shrink-0 mt-0.5">
                    check_circle
                  </span>
                  <span>
                    Servicio de estación de café permanente, aguas saborizadas y refrigerios típicos.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#ffdeaa] text-xl shrink-0 mt-0.5">
                    check_circle
                  </span>
                  <span>
                    Tarifas corporativas preferenciales y facturación electrónica para delegaciones.
                  </span>
                </div>
              </div>

              <div className="pt-2 bg-white/5 p-4 rounded-xl border border-white/10">
                <span className="font-sans text-[11px] text-[#ffdeaa] uppercase tracking-wider font-bold block mb-1">
                  Ubicación Estratégica en Valledupar
                </span>
                <p className="font-sans text-xs text-white leading-relaxed">
                  Calle 22C #18A-31 · A minutos de los complejos comerciales, bancarios y
                  gubernamentales de la ciudad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
