import React from 'react';

export const WhyUsSection: React.FC = () => {
  const pillars = [
    {
      icon: 'meeting_room',
      title: 'Habitaciones para cada viaje',
      description:
        'Desde la práctica Small hasta la Suite Familiar de hasta seis personas o apartaestudios con cocina integral.',
    },
    {
      icon: 'pool',
      title: 'Espacios de descanso y relax',
      description:
        'Terraza solárium, jacuzzi exterior con hidromasaje y suave cascada para disfrutar de la brisa caribeña.',
    },
    {
      icon: 'restaurant_menu',
      title: 'Gastronomía con Caobos',
      description:
        'Platos tradicionales y de autor con ingredientes seleccionados, servidos en comedor o en tu habitación.',
    },
    {
      icon: 'support_agent',
      title: 'Atención personalizada 24/7',
      description:
        'Recepción permanente y un equipo cálido siempre dispuesto a orientarte y cuidar cada detalle de tu visita.',
    },
  ];

  return (
    <section className="w-full bg-[#f5f3ee] py-16 lg:py-24 border-y border-[#001a39]/5">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="font-sans text-xs uppercase tracking-widest text-[#735b31] font-bold block mb-2">
            HOSPITALIDAD CON ENCANTO
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#001a39] font-normal tracking-tight mb-3 text-balance">
            Un lugar para sentirte bien,{' '}
            <span className="italic font-light text-[#735b31]">
              sea cual sea el motivo de tu viaje.
            </span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#43474f] leading-relaxed">
            En cada rincón de Hotel Ucla Center combinamos el confort moderno con el trato cálido y
            cercano que caracteriza a Valledupar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all border border-[#001a39]/10"
            >
              <div className="w-12 h-12 rounded-xl bg-[#ffdeaa]/50 text-[#735b31] flex items-center justify-center mb-5">
                <span className="material-symbols-outlined text-2xl">{pillar.icon}</span>
              </div>
              <h3 className="font-serif text-lg text-[#001a39] font-bold mb-2">
                {pillar.title}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#43474f] leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
