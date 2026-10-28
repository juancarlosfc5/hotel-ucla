import React, { useState } from 'react';
import { Room, HOTEL_CONTACT } from '../data/hotelData';

interface RoomDetailModalProps {
  room: Room | null;
  onClose: () => void;
  onBookRoom: (roomId: string) => void;
}

export const RoomDetailModal: React.FC<RoomDetailModalProps> = ({
  room,
  onClose,
  onBookRoom,
}) => {
  if (!room) return null;

  const allImages = [room.image, ...(room.secondaryImages || [])];
  const [activeImage, setActiveImage] = useState<string>(room.image);

  const formatCop = (val: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/65 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5">
      <div className="relative bg-[#fbf9f4] rounded-2xl w-full max-w-4xl overflow-hidden shadow-2xl border border-[#001a39]/15 flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="bg-[#001a39] text-white px-6 py-4 flex items-center justify-between shrink-0">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-serif text-xl sm:text-2xl font-medium tracking-tight">
                {room.name}
              </span>
              <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-[#ffdeaa] text-[#271900] font-bold uppercase tracking-wider">
                {room.categoryLabel}
              </span>
            </div>
            <p className="text-xs text-[#d5e3ff] mt-0.5">{room.badge}</p>
          </div>
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white p-1 rounded hover:bg-white/10 transition-colors"
            aria-label="Cerrar detalles"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {/* Main Gallery */}
          <div className="space-y-3">
            <div className="relative h-72 sm:h-96 w-full rounded-xl overflow-hidden bg-black/10 shadow-md">
              <img
                src={activeImage}
                alt={room.name}
                className="w-full h-full object-cover transition-all duration-300"
              />
              <div className="absolute top-4 left-4 bg-[#001a39]/80 backdrop-blur-md text-white px-3 py-1 rounded text-xs uppercase tracking-wider font-semibold">
                {room.beds}
              </div>
              <div className="absolute bottom-4 right-4 bg-[#001a39]/90 backdrop-blur-md text-[#ffdeaa] px-3.5 py-1.5 rounded-lg text-sm font-serif font-bold shadow-md">
                {formatCop(room.pricePerNightCop)}{' '}
                <span className="text-xs font-normal text-white/80">/ noche</span>
              </div>
            </div>

            {/* Thumbnail Navigation */}
            {allImages.length > 1 && (
              <div className="flex items-center gap-2.5 overflow-x-auto pb-1">
                {allImages.map((imgUrl, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImage(imgUrl)}
                    className={`relative w-20 h-14 rounded-lg overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                      activeImage === imgUrl
                        ? 'border-[#001a39] scale-105 shadow'
                        : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={imgUrl}
                      alt={`${room.name} view ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Description & Specs Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-4">
              <div>
                <h4 className="font-serif text-lg font-bold text-[#001a39] mb-1">
                  Descripción y Espacio
                </h4>
                <p className="text-sm text-[#43474f] leading-relaxed">
                  {room.description}
                </p>
              </div>

              <div>
                <h4 className="font-serif text-base font-bold text-[#001a39] mb-2">
                  Amenidades Incluidas
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {room.amenities.map((amenity, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 p-2 rounded-lg bg-white border border-[#001a39]/10 text-xs text-[#1b1c19]"
                    >
                      <span className="material-symbols-outlined text-base text-[#735b31]">
                        check_circle
                      </span>
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-serif text-base font-bold text-[#001a39] mb-2">
                  Detalles y Confort
                </h4>
                <ul className="space-y-1.5 text-xs text-[#43474f]">
                  {room.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#735b31]"></span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Quick Policies Card */}
            <div className="bg-[#f0eee9] p-5 rounded-xl border border-[#001a39]/10 space-y-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#735b31] block mb-1">
                  Políticas de Estancia
                </span>
                <div className="space-y-2 text-xs text-[#43474f]">
                  <div className="flex items-center justify-between pb-1.5 border-b border-[#001a39]/10">
                    <span className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-sm text-[#001a39]">
                        login
                      </span>
                      Check-in
                    </span>
                    <strong className="text-[#001a39]">3:00 PM</strong>
                  </div>
                  <div className="flex items-center justify-between pb-1.5 border-b border-[#001a39]/10">
                    <span className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-sm text-[#001a39]">
                        logout
                      </span>
                      Check-out
                    </span>
                    <strong className="text-[#001a39]">1:00 PM</strong>
                  </div>
                  <div className="flex items-center justify-between pb-1.5 border-b border-[#001a39]/10">
                    <span className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-sm text-[#001a39]">
                        group
                      </span>
                      Capacidad
                    </span>
                    <strong className="text-[#001a39]">{room.capacityLabel}</strong>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-white rounded-lg border border-[#001a39]/10 text-xs text-[#43474f] space-y-1">
                <span className="font-bold text-[#001a39] block">
                  Beneficios al reservar directo:
                </span>
                <p>• Mejor tarifa garantizada.</p>
                <p>• Asistencia personalizada vía WhatsApp.</p>
                <p>• Flexibilidad en horarios de llegada sujeta a disponibilidad.</p>
              </div>

              <div className="space-y-2 pt-2">
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onBookRoom(room.id);
                  }}
                  className="w-full py-3 rounded-lg bg-[#001a39] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#002f5d] transition-colors shadow-md flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-base">calendar_month</span>
                  <span>Reservar esta habitación</span>
                </button>

                <a
                  href={`https://wa.me/${HOTEL_CONTACT.whatsappRaw}?text=${encodeURIComponent(
                    `Hola, deseo información detallada y consultar disponibilidad para la ${room.name} (${room.beds}).`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-lg border border-emerald-700 text-emerald-800 bg-emerald-50 hover:bg-emerald-100 text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5"
                >
                  <span className="material-symbols-outlined text-base">chat</span>
                  <span>Consultar por WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
