import React, { useState } from 'react';
import { ROOMS, HOTEL_CONTACT } from '../data/hotelData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedRoomId?: string;
  initialCheckIn?: string;
  initialCheckOut?: string;
  initialGuests?: number;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedRoomId,
  initialCheckIn,
  initialCheckOut,
  initialGuests = 2,
}) => {
  // Format dates
  const todayStr = new Date().toISOString().split('T')[0];
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowStr = tomorrow.toISOString().split('T')[0];

  const [checkIn, setCheckIn] = useState<string>(initialCheckIn || todayStr);
  const [checkOut, setCheckOut] = useState<string>(initialCheckOut || tomorrowStr);
  const [guests, setGuests] = useState<number>(initialGuests);
  const [selectedRoomId, setSelectedRoomId] = useState<string>(
    preselectedRoomId || 'estandar-doble'
  );
  const [guestName, setGuestName] = useState<string>('');
  const [guestPhone, setGuestPhone] = useState<string>('');
  const [specialNotes, setSpecialNotes] = useState<string>('');

  // Add-ons
  const [includePasadia, setIncludePasadia] = useState<boolean>(false);
  const [pasadiaCount, setPasadiaCount] = useState<number>(1);
  const [includeRomantic, setIncludeRomantic] = useState<boolean>(false);
  const [includeBreakfast, setIncludeBreakfast] = useState<boolean>(false);
  const [includeAirportTransfer, setIncludeAirportTransfer] = useState<boolean>(false);

  if (!isOpen) return null;

  // Calculate nights
  const d1 = new Date(checkIn);
  const d2 = new Date(checkOut);
  const diffTime = Math.max(0, d2.getTime() - d1.getTime());
  const nights = Math.max(1, Math.round(diffTime / (1000 * 60 * 60 * 24)));

  const selectedRoom = ROOMS.find((r) => r.id === selectedRoomId) || ROOMS[0];
  const roomTotal = selectedRoom.pricePerNightCop * nights;

  // Add-on totals
  const pasadiaPrice = includePasadia ? 60000 * pasadiaCount : 0;
  const romanticPrice = includeRomantic ? 90000 : 0;
  const breakfastPrice = includeBreakfast ? 24000 * guests * nights : 0;
  const transferPrice = includeAirportTransfer ? 35000 : 0;

  const grandTotalCop = roomTotal + pasadiaPrice + romanticPrice + breakfastPrice + transferPrice;

  const formatCop = (val: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      maximumFractionDigits: 0,
    }).format(val);
  };

  const handleWhatsAppBooking = () => {
    let msg = `*SOLICITUD DE RESERVA - HOTEL UCLA CENTER*\n\n`;
    if (guestName.trim()) msg += `👤 *Huésped:* ${guestName.trim()}\n`;
    if (guestPhone.trim()) msg += `📞 *Teléfono:* ${guestPhone.trim()}\n`;
    msg += `🏨 *Habitación:* ${selectedRoom.name} (${selectedRoom.categoryLabel})\n`;
    msg += `📅 *Fechas:* Del ${checkIn} al ${checkOut} (${nights} noche${nights > 1 ? 's' : ''})\n`;
    msg += `👥 *Huéspedes:* ${guests} persona${guests > 1 ? 's' : ''}\n\n`;

    const extras = [];
    if (includePasadia) extras.push(`- Pasadía Relax (${pasadiaCount} pax) [${formatCop(pasadiaPrice)}]`);
    if (includeRomantic) extras.push(`- Decoración Romántica 'Te Amo' con rosas y globos [${formatCop(romanticPrice)}]`);
    if (includeBreakfast) extras.push(`- Desayuno Caobos Gourmet (${guests} pax x ${nights} días) [${formatCop(breakfastPrice)}]`);
    if (includeAirportTransfer) extras.push(`- Traslado Aeropuerto Alfonso López [${formatCop(transferPrice)}]`);

    if (extras.length > 0) {
      msg += `✨ *Servicios adicionales:*\n${extras.join('\n')}\n\n`;
    }

    if (specialNotes.trim()) {
      msg += `📝 *Observaciones:* ${specialNotes.trim()}\n\n`;
    }

    msg += `💰 *Total Estimado:* ${formatCop(grandTotalCop)} COP\n\n`;
    msg += `Por favor, confirmen disponibilidad para proceder con el pago de anticipo. ¡Muchas gracias!`;

    const url = `https://wa.me/${HOTEL_CONTACT.whatsappRaw}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5">
      <div className="relative bg-[#fbf9f4] rounded-2xl w-full max-w-3xl overflow-hidden shadow-2xl border border-[#001a39]/15 flex flex-col max-h-[92vh]">
        {/* Modal Header */}
        <div className="bg-[#001a39] text-white px-6 py-4 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-2xl text-[#ffdeaa]">
              hotel_class
            </span>
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-medium tracking-tight">
                Cotizar y Reservar Estancia
              </h3>
              <p className="font-sans text-xs text-[#d5e3ff]">
                Hotel Ucla Center • Valledupar, Cesar
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white p-1 rounded hover:bg-white/10 transition-colors"
            aria-label="Cerrar modal"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1 space-y-5 text-[#1b1c19]">
          {/* Room Selection Carousel / Grid */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#735b31] mb-2">
              1. Selecciona tu Habitación
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {ROOMS.map((room) => {
                const isSelected = room.id === selectedRoomId;
                return (
                  <button
                    key={room.id}
                    type="button"
                    onClick={() => setSelectedRoomId(room.id)}
                    className={`text-left p-2.5 rounded-xl border transition-all text-xs flex flex-col justify-between cursor-pointer ${
                      isSelected
                        ? 'border-[#001a39] bg-white ring-2 ring-[#001a39] shadow-sm'
                        : 'border-[#001a39]/10 bg-[#f5f3ee] hover:bg-white'
                    }`}
                  >
                    <div className="relative h-16 w-full rounded-lg overflow-hidden mb-2">
                      <img
                        src={room.image}
                        alt={room.name}
                        className="w-full h-full object-cover"
                      />
                      {isSelected && (
                        <div className="absolute top-1 right-1 bg-[#001a39] text-[#ffdeaa] rounded-full p-0.5">
                          <span className="material-symbols-outlined text-xs">check</span>
                        </div>
                      )}
                    </div>
                    <span className="font-serif font-bold text-xs text-[#001a39] line-clamp-1">
                      {room.name}
                    </span>
                    <span className="text-[11px] text-[#735b31] font-semibold mt-0.5">
                      {formatCop(room.pricePerNightCop)}/noche
                    </span>
                    <span className="text-[10px] text-[#43474f] mt-0.5">
                      {room.capacityLabel}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Dates & Guests */}
          <div className="bg-white p-4 rounded-xl border border-[#001a39]/10 shadow-sm">
            <label className="block text-xs font-bold uppercase tracking-wider text-[#735b31] mb-3">
              2. Fechas y Huéspedes
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <span className="block text-xs font-medium text-[#43474f] mb-1">
                  Fecha de Entrada (Check-in)
                </span>
                <input
                  type="date"
                  value={checkIn}
                  min={todayStr}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-[#001a39]/20 text-xs text-[#1b1c19] focus:outline-none focus:ring-2 focus:ring-[#001a39]"
                />
              </div>

              <div>
                <span className="block text-xs font-medium text-[#43474f] mb-1">
                  Fecha de Salida (Check-out)
                </span>
                <input
                  type="date"
                  value={checkOut}
                  min={checkIn}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-[#001a39]/20 text-xs text-[#1b1c19] focus:outline-none focus:ring-2 focus:ring-[#001a39]"
                />
              </div>

              <div>
                <span className="block text-xs font-medium text-[#43474f] mb-1">
                  Número de Huéspedes
                </span>
                <select
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="w-full px-3 py-2 rounded-lg border border-[#001a39]/20 text-xs text-[#1b1c19] focus:outline-none focus:ring-2 focus:ring-[#001a39] bg-white"
                >
                  <option value={1}>1 Huésped</option>
                  <option value={2}>2 Huéspedes</option>
                  <option value={3}>3 Huéspedes</option>
                  <option value={4}>4 Huéspedes</option>
                  <option value={5}>5 Huéspedes</option>
                  <option value={6}>6 Huéspedes</option>
                </select>
              </div>
            </div>

            <div className="mt-2.5 flex items-center justify-between text-xs text-[#735b31] pt-2 border-t border-[#001a39]/5">
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">schedule</span>
                Duración: <strong>{nights} noche{nights > 1 ? 's' : ''}</strong>
              </span>
              <span>Check-in: 3:00 PM · Check-out: 1:00 PM</span>
            </div>
          </div>

          {/* Add-on Experiences & Services */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#735b31] mb-2">
              3. Personaliza tu Experiencia (Opcional)
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {/* Pasadía Relax */}
              <div
                onClick={() => setIncludePasadia(!includePasadia)}
                className={`p-3 rounded-xl border cursor-pointer transition-all flex items-start gap-3 ${
                  includePasadia
                    ? 'border-[#735b31] bg-[#fcdba7]/20 ring-1 ring-[#735b31]'
                    : 'border-[#001a39]/10 bg-white hover:bg-[#f5f3ee]'
                }`}
              >
                <input
                  type="checkbox"
                  checked={includePasadia}
                  onChange={() => {}}
                  className="mt-1 rounded text-[#001a39]"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-serif font-bold text-xs text-[#001a39]">
                      Pasadía Relax
                    </span>
                    <span className="text-xs font-bold text-[#735b31]">
                      $60.000 / pax
                    </span>
                  </div>
                  <p className="text-[11px] text-[#43474f] mt-0.5">
                    Jacuzzi con hidromasaje, almuerzo incluido, zonas comunes y solárium.
                  </p>
                  {includePasadia && (
                    <div
                      className="mt-2 flex items-center gap-2"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span className="text-[11px] text-[#1b1c19]">Personas:</span>
                      <select
                        value={pasadiaCount}
                        onChange={(e) => setPasadiaCount(Number(e.target.value))}
                        className="px-2 py-0.5 text-xs rounded border bg-white"
                      >
                        {[1, 2, 3, 4, 5, 6].map((n) => (
                          <option key={n} value={n}>
                            {n}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}
                </div>
              </div>

              {/* Plan Romántico */}
              <div
                onClick={() => setIncludeRomantic(!includeRomantic)}
                className={`p-3 rounded-xl border cursor-pointer transition-all flex items-start gap-3 ${
                  includeRomantic
                    ? 'border-[#735b31] bg-[#fcdba7]/20 ring-1 ring-[#735b31]'
                    : 'border-[#001a39]/10 bg-white hover:bg-[#f5f3ee]'
                }`}
              >
                <input
                  type="checkbox"
                  checked={includeRomantic}
                  onChange={() => {}}
                  className="mt-1 rounded text-[#001a39]"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-serif font-bold text-xs text-[#001a39]">
                      Plan Romántico 'Te Amo'
                    </span>
                    <span className="text-xs font-bold text-[#735b31]">
                      $90.000
                    </span>
                  </div>
                  <p className="text-[11px] text-[#43474f] mt-0.5">
                    Pétalos de rosa, globos con helio, champaña o vino y velas LED.
                  </p>
                </div>
              </div>

              {/* Desayuno Caobos Gourmet */}
              <div
                onClick={() => setIncludeBreakfast(!includeBreakfast)}
                className={`p-3 rounded-xl border cursor-pointer transition-all flex items-start gap-3 ${
                  includeBreakfast
                    ? 'border-[#735b31] bg-[#fcdba7]/20 ring-1 ring-[#735b31]'
                    : 'border-[#001a39]/10 bg-white hover:bg-[#f5f3ee]'
                }`}
              >
                <input
                  type="checkbox"
                  checked={includeBreakfast}
                  onChange={() => {}}
                  className="mt-1 rounded text-[#001a39]"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-serif font-bold text-xs text-[#001a39]">
                      Desayuno Típico Caobos
                    </span>
                    <span className="text-xs font-bold text-[#735b31]">
                      $24.000 / pax / día
                    </span>
                  </div>
                  <p className="text-[11px] text-[#43474f] mt-0.5">
                    Huevos al gusto, arepa con queso costeño, frutas y café de la Sierra.
                  </p>
                </div>
              </div>

              {/* Traslado Aeropuerto */}
              <div
                onClick={() => setIncludeAirportTransfer(!includeAirportTransfer)}
                className={`p-3 rounded-xl border cursor-pointer transition-all flex items-start gap-3 ${
                  includeAirportTransfer
                    ? 'border-[#735b31] bg-[#fcdba7]/20 ring-1 ring-[#735b31]'
                    : 'border-[#001a39]/10 bg-white hover:bg-[#f5f3ee]'
                }`}
              >
                <input
                  type="checkbox"
                  checked={includeAirportTransfer}
                  onChange={() => {}}
                  className="mt-1 rounded text-[#001a39]"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-serif font-bold text-xs text-[#001a39]">
                      Traslado Aeropuerto Alfonso López
                    </span>
                    <span className="text-xs font-bold text-[#735b31]">
                      $35.000
                    </span>
                  </div>
                  <p className="text-[11px] text-[#43474f] mt-0.5">
                    Recogida puntual en vehículo climatizado a tu llegada a Valledupar.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-[#43474f] mb-1">
                Nombre y Apellido
              </label>
              <input
                type="text"
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                placeholder="Ej. Carlos Mendoza"
                className="w-full px-3 py-2 rounded-lg border border-[#001a39]/20 text-xs text-[#1b1c19] focus:outline-none focus:ring-2 focus:ring-[#001a39] bg-white"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-[#43474f] mb-1">
                Teléfono / WhatsApp de Contacto
              </label>
              <input
                type="tel"
                value={guestPhone}
                onChange={(e) => setGuestPhone(e.target.value)}
                placeholder="Ej. +57 300 123 4567"
                className="w-full px-3 py-2 rounded-lg border border-[#001a39]/20 text-xs text-[#1b1c19] focus:outline-none focus:ring-2 focus:ring-[#001a39] bg-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-[#43474f] mb-1">
              Peticiones Especiales u Horario de Llegada
            </label>
            <input
              type="text"
              value={specialNotes}
              onChange={(e) => setSpecialNotes(e.target.value)}
              placeholder="Ej. Llegada en vuelo de las 4:00 PM, requerimos cama extra."
              className="w-full px-3 py-2 rounded-lg border border-[#001a39]/20 text-xs text-[#1b1c19] focus:outline-none focus:ring-2 focus:ring-[#001a39] bg-white"
            />
          </div>

          {/* Pricing Breakdown Card */}
          <div className="bg-[#001a39] text-white p-4 rounded-xl space-y-2">
            <div className="flex items-center justify-between text-xs text-[#d5e3ff]">
              <span>
                {selectedRoom.name} ({nights} noche{nights > 1 ? 's' : ''})
              </span>
              <span>{formatCop(roomTotal)} COP</span>
            </div>
            {includePasadia && (
              <div className="flex items-center justify-between text-xs text-[#ffdeaa]">
                <span>Pasadía Relax ({pasadiaCount} pax)</span>
                <span>+{formatCop(pasadiaPrice)} COP</span>
              </div>
            )}
            {includeRomantic && (
              <div className="flex items-center justify-between text-xs text-[#ffdeaa]">
                <span>Decoración Romántica 'Te Amo'</span>
                <span>+{formatCop(romanticPrice)} COP</span>
              </div>
            )}
            {includeBreakfast && (
              <div className="flex items-center justify-between text-xs text-[#ffdeaa]">
                <span>Desayunos Caobos ({guests} pax x {nights} días)</span>
                <span>+{formatCop(breakfastPrice)} COP</span>
              </div>
            )}
            {includeAirportTransfer && (
              <div className="flex items-center justify-between text-xs text-[#ffdeaa]">
                <span>Traslado Aeropuerto Alfonso López</span>
                <span>+{formatCop(transferPrice)} COP</span>
              </div>
            )}
            <div className="pt-2 border-t border-white/15 flex items-baseline justify-between">
              <div>
                <span className="font-serif text-lg font-bold text-white block leading-tight">
                  Total Estimado
                </span>
                <span className="text-[10px] text-[#ffdeaa]/90">
                  Tarifa directa sin comisiones de intermediarios
                </span>
              </div>
              <span className="font-serif text-2xl font-bold text-[#ffdeaa]">
                {formatCop(grandTotalCop)} COP
              </span>
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="bg-[#f0eee9] px-6 py-4 border-t border-[#001a39]/10 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <a
            href={HOTEL_CONTACT.lobbyPmsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-4 py-2.5 rounded-lg border border-[#001a39]/30 text-[#001a39] text-xs font-semibold uppercase tracking-wider hover:bg-white transition-colors text-center flex items-center justify-center gap-1.5"
          >
            <span className="material-symbols-outlined text-base">open_in_new</span>
            <span>Motor Oficial LobbyPMS</span>
          </a>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-[#43474f] hover:bg-[#e4e2dd] transition-colors"
            >
              Cancelar
            </button>
            <button
              onClick={handleWhatsAppBooking}
              className="flex-1 sm:flex-initial px-5 py-2.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span className="material-symbols-outlined text-base">chat</span>
              <span>Confirmar por WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
