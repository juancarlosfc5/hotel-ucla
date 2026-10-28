import React from 'react';

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: 'María Fernanda Gómez',
      city: 'Bogotá, Colombia',
      badge: 'Viaje en Pareja',
      text:
        'Excelente atención de todo el equipo de recepción. El jacuzzi en la terraza con vista al atardecer es simplemente mágico. La habitación impecable, el aire acondicionado enfría perfecto para el clima de Valledupar y la cama muy cómoda. ¡Volveremos!',
    },
    {
      name: 'Jorge Eliécer Quintero',
      city: 'Barranquilla, Colombia',
      badge: 'Viaje de Negocios',
      text:
        'Me hospedé 4 noches por motivos laborales. La conexión Wi-Fi es rápida y estable para reuniones virtuales. Además, el servicio a la habitación del Restaurante Caobos fue puntual y delicioso. Ubicación muy conveniente cerca al centro.',
    },
    {
      name: 'Andrea & Familia Morales',
      city: 'Medellín, Colombia',
      badge: 'Estancia Familiar',
      text:
        'Viajamos con nuestros 3 hijos y la habitación familiar con camarotes fue perfecta: espaciosa, fresca y segura. Disfrutamos mucho el Pasadía Relax en la terraza. El trato fue como en casa. Muy recomendado para familias.',
    },
  ];

  return (
    <section className="w-full bg-[#fbf9f4] py-16 lg:py-24">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="font-sans text-xs uppercase tracking-widest text-[#735b31] font-bold block mb-2">
            EXPERIENCIAS DE NUESTROS HUÉSPEDES
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#001a39] font-normal tracking-tight mb-3 text-balance">
            Cada visita tiene su propia historia.
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#43474f] leading-relaxed">
            Opiniones de quienes nos eligen para descansar, trabajar o celebrar en Valledupar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white p-6 sm:p-7 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between border border-[#001a39]/10"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-[#735b31]">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <span
                        key={s}
                        className="material-symbols-outlined text-lg fill-1"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        star
                      </span>
                    ))}
                  </div>
                  <span className="px-2.5 py-1 rounded-md bg-[#f0eee9] text-[#735b31] font-sans text-[10px] font-bold uppercase tracking-wider">
                    {t.badge}
                  </span>
                </div>
                <p className="font-sans text-sm text-[#43474f] italic leading-relaxed mb-6">
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-[#001a39]/5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#001a39] text-[#ffdeaa] flex items-center justify-center font-serif font-bold text-base">
                  {t.name[0]}
                </div>
                <div>
                  <span className="font-serif font-bold text-base text-[#001a39] block leading-tight">
                    {t.name}
                  </span>
                  <span className="font-sans text-xs text-[#735b31]">{t.city}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
