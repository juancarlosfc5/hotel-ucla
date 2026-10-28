import React from 'react';
import { HOTEL_CONTACT } from '../data/hotelData';

interface ExperiencesSectionProps {
  onOpenBooking: () => void;
}

export const ExperiencesSection: React.FC<ExperiencesSectionProps> = ({ onOpenBooking }) => {
  return (
    <div id="experiencias">
      {/* 1. Experiencias y Bienestar */}
      <section className="w-full bg-[#fbf9f4] py-16 lg:py-24">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-3xl mb-12">
            <span className="font-sans text-xs uppercase tracking-widest text-[#735b31] font-bold block mb-2">
              MÁS QUE UNA ESTANCIA
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#001a39] font-normal tracking-tight mb-3 text-balance">
              Momentos para disfrutar, descansar y desconectarte.
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#43474f] leading-relaxed">
              Déjate llevar por la tranquilidad de nuestros espacios. Disfruta de una pausa en el
              jacuzzi con cascada, contempla Valledupar desde nuestra terraza y encuentra rincones
              pensados para hacer tu visita más agradable.
            </p>
          </div>

          {/* 3 Visual Experience Blocks */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            {/* Experience 1: Jacuzzi */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col border border-[#001a39]/10 group">
              <div className="relative h-64 overflow-hidden bg-black/10">
                <img
                  alt="Jacuzzi hidromasaje en terraza con cascada y solárium de madera"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCImEp-7EwFtyiHmgfxBCqIirywFuJjaPNSPEqseTC325NV0WL0RhTpz5kPvDUnR-C8dwWhH5Bak30DFJRyQ0qV2dXRSexsxXL6-ilIlJrNQThFBMysQggyOeF-vsyIgD_6nQySohp_zedAs2VJv2VEiwHk64GCCBydkY3qWF0Ao8QtDebN6lBP2knwJ2Yl6CNVEXOIEflnU1vNVCDO9k6sHKyzT_xdfut_4XewK2OhLgwr8RcrfZhV4GE8HCOjB_X7"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001a39]/80 via-transparent to-transparent"></div>
                <span className="absolute bottom-4 left-4 font-sans text-xs uppercase tracking-widest text-white bg-[#001a39]/70 backdrop-blur-md px-3 py-1 rounded-md font-semibold">
                  Zona Húmeda
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl text-[#001a39] font-bold mb-2">
                    Jacuzzi con Hidromasaje
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#43474f] leading-relaxed mb-4">
                    &ldquo;Una pausa para ti.&rdquo; Sumérgete en nuestro jacuzzi exterior con suave
                    cascada y deck de madera, diseñado para renovar cuerpo y mente tras recorrer la
                    capital del vallenato.
                  </p>
                </div>
                <div className="flex items-center text-[#735b31] font-sans text-xs uppercase tracking-wider font-semibold pt-3 border-t border-[#001a39]/5">
                  <span className="material-symbols-outlined text-base mr-1">spa</span>
                  <span>Hidromasaje · Cascada · Solárium</span>
                </div>
              </div>
            </div>

            {/* Experience 2: Terraza Panorámica */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col border border-[#001a39]/10 group">
              <div className="relative h-64 overflow-hidden bg-black/10">
                <img
                  alt="Terraza panorámica con vistas a la naturaleza y brisa en Valledupar"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src="/assets/aistudio/Image_12_a5d0fd0e.jpeg"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001a39]/80 via-transparent to-transparent"></div>
                <span className="absolute bottom-4 left-4 font-sans text-xs uppercase tracking-widest text-white bg-[#001a39]/70 backdrop-blur-md px-3 py-1 rounded-md font-semibold">
                  Mirador
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl text-[#001a39] font-bold mb-2">
                    Terraza Panorámica
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#43474f] leading-relaxed mb-4">
                    &ldquo;Disfruta Valledupar desde otra perspectiva.&rdquo; Una vista abierta a la
                    vegetación y al cielo vallenato, con brisa fresca al atardecer para departir y
                    disfrutar de cócteles tropicales.
                  </p>
                </div>
                <div className="flex items-center text-[#735b31] font-sans text-xs uppercase tracking-wider font-semibold pt-3 border-t border-[#001a39]/5">
                  <span className="material-symbols-outlined text-base mr-1">wb_twilight</span>
                  <span>Vistas abiertas · Brisa fresca de la Sierra</span>
                </div>
              </div>
            </div>

            {/* Experience 3: Patio y Espacios Sociales */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col border border-[#001a39]/10 group">
              <div className="relative h-64 overflow-hidden bg-black/10">
                <img
                  alt="Recepción elegante y áreas de descanso social en Hotel Ucla Center"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src="/assets/aistudio/Image_8_d43112a3.jpeg"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001a39]/80 via-transparent to-transparent"></div>
                <span className="absolute bottom-4 left-4 font-sans text-xs uppercase tracking-widest text-white bg-[#001a39]/70 backdrop-blur-md px-3 py-1 rounded-md font-semibold">
                  Lobby & Balcones
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl text-[#001a39] font-bold mb-2">
                    Patio y Espacios de Descanso
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#43474f] leading-relaxed mb-4">
                    &ldquo;Pequeños momentos de tranquilidad.&rdquo; Rincones sobrios y luminosos
                    donde leer, conversar o saborear un café local con la hospitalidad sincera de
                    nuestro equipo de recepción.
                  </p>
                </div>
                <div className="flex items-center text-[#735b31] font-sans text-xs uppercase tracking-wider font-semibold pt-3 border-t border-[#001a39]/5">
                  <span className="material-symbols-outlined text-base mr-1">local_cafe</span>
                  <span>Café de bienvenida · Serenidad</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Momentos Especiales y Pasadías (Highlight Real Flyers) */}
      <section className="w-full bg-[#f0eee9] py-16 lg:py-24 border-y border-[#001a39]/5">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="font-sans text-xs uppercase tracking-widest text-[#735b31] font-bold block mb-2">
              EXPERIENCIAS QUE SE RECUERDAN
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#001a39] font-normal tracking-tight mb-3 text-balance">
              Hay momentos que merecen un lugar especial.
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#43474f] leading-relaxed">
              Descubre alternativas para celebrar, compartir o regalarte una pausa diferente en
              Hotel Ucla Center.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Tarjeta 1: Escapadas Románticas */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between border border-[#001a39]/10 group">
              <div>
                <div className="h-64 overflow-hidden relative">
                  <img
                    alt="Habitación decorada con pétalos de rosa y globos románticos en Hotel Ucla Center"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    src="/assets/aistudio/Image_3_4150344c.jpeg"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-[#001a39]/85 backdrop-blur-sm text-white px-3 py-1 rounded text-xs font-sans uppercase tracking-wider font-semibold">
                    Plan Parejas
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl text-[#001a39] font-bold mb-2">
                    Escapadas Románticas
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#43474f] leading-relaxed mb-4">
                    Sorprende a tu pareja con ambientación exclusiva: arreglo de globos, pétalos de
                    rosas rojas con mensaje personalizado en cama, champaña y cena íntima.
                  </p>
                  <ul className="space-y-1.5 font-sans text-xs text-[#43474f] mb-4">
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#735b31] text-sm">
                        check
                      </span>
                      Decoración temática de aniversario / San Valentín
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#735b31] text-sm">
                        check
                      </span>
                      Botella de vino o champaña con copas
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#735b31] text-sm">
                        check
                      </span>
                      Desayuno especial servido en suite
                    </li>
                  </ul>
                </div>
              </div>
              <div className="p-6 pt-0">
                <a
                  className="w-full py-3 px-4 inline-flex items-center justify-center rounded-lg bg-[#001a39] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#002f5d] transition-colors shadow-sm gap-2"
                  href={`https://wa.me/${HOTEL_CONTACT.whatsappRaw}?text=${encodeURIComponent(
                    'Hola, deseo cotizar el Plan Escapada Romántica con decoración de rosas y globos en Hotel Ucla Center.'
                  )}`}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-base">favorite</span>
                  <span>Consultar plan romántico</span>
                </a>
              </div>
            </div>

            {/* Tarjeta 2: Celebraciones Especiales */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between border border-[#001a39]/10 group">
              <div>
                <div className="h-64 overflow-hidden relative">
                  <img
                    alt="Ambiente festivo y montaje decorativo para fechas memorables en Hotel Ucla Center"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    src="/assets/aistudio/Image_12_a5d0fd0e.jpeg"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-[#735b31] text-white px-3 py-1 rounded text-xs font-sans uppercase tracking-wider font-semibold">
                    Fechas Únicas
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl text-[#001a39] font-bold mb-2">
                    Celebraciones Especiales
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#43474f] leading-relaxed mb-4">
                    Cumpleaños, aniversarios de bodas o reencuentros familiares. Personalizamos cada
                    detalle para que tu fecha sea memorable en Valledupar.
                  </p>
                  <ul className="space-y-1.5 font-sans text-xs text-[#43474f] mb-4">
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#735b31] text-sm">
                        check
                      </span>
                      Menú personalizado coordinado con Caobos
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#735b31] text-sm">
                        check
                      </span>
                      Tarta artesanal y ambientación con luces
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#735b31] text-sm">
                        check
                      </span>
                      Asistencia completa de recepción
                    </li>
                  </ul>
                </div>
              </div>
              <div className="p-6 pt-0">
                <a
                  className="w-full py-3 px-4 inline-flex items-center justify-center rounded-lg bg-[#001a39] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#002f5d] transition-colors shadow-sm gap-2"
                  href={`https://wa.me/${HOTEL_CONTACT.whatsappRaw}?text=${encodeURIComponent(
                    'Hola, deseo organizar una celebración especial (cumpleaños/aniversario) en Hotel Ucla Center.'
                  )}`}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-base">celebration</span>
                  <span>Consultar celebración</span>
                </a>
              </div>
            </div>

            {/* Tarjeta 3: Pasadía Relax (Official Real Poster Spotlight) */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between border-2 border-[#735b31]/40 group relative">
              <div className="absolute top-3 right-3 z-20 bg-[#ffdeaa] text-[#271900] px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow">
                ★ El Escape Perfecto
              </div>
              <div>
                <div className="h-64 overflow-hidden relative">
                  <img
                    alt="Plan Pasadía Relax en jacuzzi con cócteles y almuerzo en Valledupar"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    src="/assets/aistudio/Image_4_409e9a1d.jpeg"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-[#735b31] text-white font-bold px-3 py-1 rounded text-xs uppercase tracking-wider">
                    Pasadía Oficial
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-baseline justify-between mb-2">
                    <h3 className="font-serif text-2xl text-[#001a39] font-bold">
                      Pasadía Relax
                    </h3>
                    <span className="font-serif text-2xl text-[#735b31] font-bold">
                      $60.000{' '}
                      <span className="text-xs font-sans font-normal text-[#43474f]">/ persona</span>
                    </span>
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-[#43474f] leading-relaxed mb-4">
                    Un día para desconectarte, relajarte y recargar tu energía. ¡Tú te lo mereces!
                    Disfruta de nuestras mejores instalaciones sin hospedaje nocturno.
                  </p>
                  <ul className="space-y-1.5 font-sans text-xs text-[#43474f] mb-4">
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#735b31] text-sm">
                        check
                      </span>
                      Acceso al jacuzzi con hidromasaje y cascada
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#735b31] text-sm">
                        check
                      </span>
                      Almuerzo completo incluido en la estancia
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#735b31] text-sm">
                        check
                      </span>
                      Uso de zonas comunes y solárium panorámico
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#735b31] text-sm">
                        check
                      </span>
                      Música ambiental y ambiente de relajación
                    </li>
                  </ul>
                </div>
              </div>
              <div className="p-6 pt-0 space-y-2">
                <a
                  className="w-full py-3 px-4 inline-flex items-center justify-center rounded-lg bg-[#735b31] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#ffdeaa] hover:text-[#271900] transition-colors shadow-md gap-2"
                  href={`https://wa.me/${HOTEL_CONTACT.whatsappRaw}?text=${encodeURIComponent(
                    'Hola, deseo reservar el Pasadía Relax de $60.000 por persona en Hotel Ucla Center Valledupar.'
                  )}`}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-base">pool</span>
                  <span>Reservar Pasadía ($60.000)</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
