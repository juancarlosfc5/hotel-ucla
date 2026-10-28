import React, { useState } from 'react';
import { Room, ROOMS, HOTEL_CONTACT } from '../data/hotelData';

interface RoomCatalogProps {
  onOpenBooking: (roomId: string) => void;
  onViewRoomDetails: (room: Room) => void;
  activeCategoryFilter?: string;
}

export const RoomCatalog: React.FC<RoomCatalogProps> = ({
  onOpenBooking,
  onViewRoomDetails,
  activeCategoryFilter,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>(activeCategoryFilter || 'all');

  const filterTabs = [
    { id: 'all', label: 'Todas las Habitaciones' },
    { id: 'couples', label: 'Individual / Parejas' },
    { id: 'groups', label: 'Familias & Grupos (3-6 pax)' },
    { id: 'deluxe', label: 'Línea Deluxe & Balcón' },
    { id: 'apartaestudio', label: 'Apartaestudios' },
  ];

  const filteredRooms = ROOMS.filter((room) => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'couples') return room.capacity <= 2 && room.category !== 'deluxe';
    if (selectedFilter === 'groups') return room.capacity >= 3 && room.category !== 'apartaestudio';
    if (selectedFilter === 'deluxe') return room.category === 'deluxe';
    if (selectedFilter === 'apartaestudio') return room.category === 'apartaestudio';
    return true;
  });

  const formatCop = (val: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section className="w-full bg-[#f5f3ee] py-16 lg:py-24 border-t border-[#001a39]/5" id="habitaciones">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="font-sans text-xs uppercase tracking-widest text-[#735b31] font-bold block mb-2">
            NUESTRAS HABITACIONES
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#001a39] font-normal tracking-tight mb-3 text-balance">
            El espacio perfecto para cada forma de viajar.
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#43474f] leading-relaxed">
            Desde escapadas en pareja hasta viajes familiares o jornadas de negocios, descubre
            nuestras 8 categorías y elige la que mejor se adapte a tu estancia en Valledupar.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 mt-8 p-1.5 bg-[#eae8e3] rounded-xl max-w-2xl mx-auto">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSelectedFilter(tab.id)}
                className={`px-3.5 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap ${
                  selectedFilter === tab.id
                    ? 'bg-[#001a39] text-white shadow-sm'
                    : 'text-[#43474f] hover:text-[#001a39] hover:bg-white/60'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Room Grid (2 columns on lg matching editorial style) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredRooms.map((room) => (
            <article
              key={room.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col border border-[#001a39]/10 group"
            >
              {/* Media Thumbnail Container */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#e4e2dd]">
                <img
                  alt={room.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  src={room.image}
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-[#001a39]/85 backdrop-blur-md text-white px-3 py-1 rounded text-[11px] font-sans uppercase tracking-wider font-semibold shadow-sm">
                  {room.badge}
                </div>
                <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md text-[#001a39] px-3 py-1 rounded-lg text-xs font-serif font-bold shadow-md">
                  {formatCop(room.pricePerNightCop)}{' '}
                  <span className="text-[10px] font-sans font-normal text-[#43474f]">/ noche</span>
                </div>
              </div>

              {/* Content Description */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-baseline justify-between mb-2">
                    <h3 className="font-serif text-2xl text-[#001a39] font-medium tracking-tight">
                      {room.name}
                    </h3>
                    <span className="font-sans text-xs uppercase text-[#735b31] font-bold">
                      {room.categoryLabel}
                    </span>
                  </div>

                  <p className="font-sans text-sm text-[#43474f] mb-4 leading-relaxed">
                    {room.description}
                  </p>

                  {/* Amenities Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {room.amenities.map((amenity, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-full bg-[#f0eee9] text-[#001a39] text-xs flex items-center gap-1 font-medium"
                      >
                        <span className="material-symbols-outlined text-sm text-[#735b31]">
                          check
                        </span>
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-[#001a39]/5 flex flex-col sm:flex-row gap-2.5">
                  <button
                    type="button"
                    onClick={() => onOpenBooking(room.id)}
                    className="flex-1 py-3 px-4 text-center rounded-lg bg-[#001a39] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#002f5d] transition-colors shadow-sm flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-base">calendar_month</span>
                    <span>Cotizar / Reservar</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => onViewRoomDetails(room)}
                    className="py-3 px-4 text-center rounded-lg bg-[#f0eee9] hover:bg-[#eae8e3] text-[#001a39] text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-base">info</span>
                    <span>Detalles</span>
                  </button>

                  <a
                    className="py-3 px-3 text-center rounded-lg border border-emerald-600 text-emerald-700 hover:bg-emerald-50 text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center"
                    href={`https://wa.me/${HOTEL_CONTACT.whatsappRaw}?text=${encodeURIComponent(
                      `Hola Hotel Ucla Center, deseo consultar disponibilidad para la ${room.name}.`
                    )}`}
                    rel="noopener noreferrer"
                    target="_blank"
                    aria-label={`Consultar ${room.name} por WhatsApp`}
                  >
                    <span className="material-symbols-outlined text-base">chat</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
