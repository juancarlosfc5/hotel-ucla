import React from 'react';

interface TravelerProfilesProps {
  onSelectCategory: (categoryFilter: string) => void;
}

export const TravelerProfiles: React.FC<TravelerProfilesProps> = ({ onSelectCategory }) => {
  const profiles = [
    {
      id: 'business',
      filter: 'standard',
      number: '01 / Negocios',
      icon: 'laptop_mac',
      title: 'Viajes de Negocios',
      description:
        'Un espacio cómodo para descansar, mantenerte conectado con Wi-Fi de alta velocidad y continuar con tu agenda con total tranquilidad.',
      feature: 'Wi-Fi de alta velocidad · Escritorio ejecutivo',
      anchor: '#habitaciones',
    },
    {
      id: 'couples',
      filter: 'deluxe',
      number: '02 / Parejas',
      icon: 'favorite',
      title: 'Parejas y Escapadas',
      description:
        'Una pausa para compartir momentos especiales, relajarse en el jacuzzi panorámico y disfrutar de un ambiente acogedor y reservado.',
      feature: 'Jacuzzi · Planes Románticos con Rosas',
      anchor: '#habitaciones',
    },
    {
      id: 'families',
      filter: 'family',
      number: '03 / Familia',
      icon: 'diversity_1',
      title: 'Familias y Grupos',
      description:
        'Opciones de alojamiento para vivir Valledupar juntos, con amplios camarotes de madera, comodidad y descanso para todos.',
      feature: 'Hasta 6 personas · Amplitud & Confort',
      anchor: '#habitaciones',
    },
    {
      id: 'longstay',
      filter: 'apartaestudio',
      number: '04 / Long Stay',
      icon: 'home_work',
      title: 'Estancias Prolongadas',
      description:
        'Alternativas prácticas con apartaestudios equipados para quienes necesitan sentirse como en casa durante su visita a la ciudad.',
      feature: 'Cocina equipada · Nevera · Independencia',
      anchor: '#habitaciones',
    },
  ];

  return (
    <section className="w-full bg-[#fbf9f4] py-16 lg:py-24" id="experiencia-viajero">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="font-sans text-xs uppercase tracking-widest text-[#735b31] font-bold block mb-2">
            UNA ESTANCIA A TU MEDIDA
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#001a39] font-normal tracking-tight mb-3 text-balance">
            Cada viaje tiene su motivo.{' '}
            <span className="italic font-normal text-[#735b31]">Nosotros ponemos el encanto.</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#43474f] font-normal leading-relaxed">
            Descubre un lugar para descansar después del trabajo, compartir tiempo en familia o
            disfrutar de una escapada especial en Valledupar.
          </p>
        </div>

        {/* 4 Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {profiles.map((p) => (
            <div
              key={p.id}
              onClick={() => {
                onSelectCategory(p.filter);
                const el = document.getElementById('habitaciones');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col justify-between border border-[#001a39]/10 cursor-pointer hover:-translate-y-1"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#f0eee9] flex items-center justify-center mb-5 text-[#001a39] group-hover:bg-[#001a39] group-hover:text-white transition-colors shadow-xs">
                  <span className="material-symbols-outlined text-2xl">{p.icon}</span>
                </div>
                <span className="font-sans text-[11px] font-bold uppercase text-[#735b31] tracking-widest block mb-1">
                  {p.number}
                </span>
                <h3 className="font-serif text-xl text-[#001a39] font-bold mb-2">
                  {p.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#43474f] leading-relaxed">
                  {p.description}
                </p>
              </div>

              <div className="pt-5 mt-4 border-t border-[#001a39]/5 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-[#735b31]">
                  {p.feature}
                </span>
                <span className="material-symbols-outlined text-base text-[#735b31] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
