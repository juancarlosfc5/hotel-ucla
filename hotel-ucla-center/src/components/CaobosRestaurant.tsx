import React, { useState } from 'react';
import { MENU_ITEMS, HOTEL_CONTACT } from '../data/hotelData';

export const CaobosRestaurant: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'desayunos' | 'almuerzos' | 'tablas' | 'cocteles'>('desayunos');
  const [selectedItems, setSelectedItems] = useState<{ [id: string]: number }>({});
  const [orderModalOpen, setOrderModalOpen] = useState(false);

  const tabs = [
    { id: 'desayunos', label: 'Desayunos de la Casa', icon: 'bakery_dining' },
    { id: 'almuerzos', label: 'Almuerzos & Cenas', icon: 'skillet' },
    { id: 'tablas', label: 'Tablas Gourmet & Picadas', icon: 'tapas' },
    { id: 'cocteles', label: 'Cócteles & Bebidas', icon: 'wine_bar' },
  ];

  const filteredItems = MENU_ITEMS.filter((item) => item.category === activeTab);

  const formatCop = (val: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      maximumFractionDigits: 0,
    }).format(val);
  };

  const addItem = (id: string) => {
    setSelectedItems((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const removeItem = (id: string) => {
    setSelectedItems((prev) => {
      const next = { ...prev };
      if (next[id] > 1) {
        next[id] -= 1;
      } else {
        delete next[id];
      }
      return next;
    });
  };

  const totalItemsCount = Object.values(selectedItems).reduce((sum, n) => sum + n, 0);
  const totalOrderCop = Object.entries(selectedItems).reduce((sum, [id, qty]) => {
    const item = MENU_ITEMS.find((m) => m.id === id);
    return sum + (item ? item.priceCop * qty : 0);
  }, 0);

  const sendOrderViaWhatsApp = () => {
    let msg = `*PEDIDO / RESERVA - RESTAURANTE GOURMET CAOBOS*\n\n`;
    Object.entries(selectedItems).forEach(([id, qty]) => {
      const item = MENU_ITEMS.find((m) => m.id === id);
      if (item) {
        msg += `• ${qty}x ${item.name} - ${formatCop(item.priceCop * qty)}\n`;
      }
    });
    msg += `\n💰 *Total Estimado:* ${formatCop(totalOrderCop)} COP\n\n`;
    msg += `Deseo solicitar este servicio para mi habitación o coordinar una mesa en Restaurante Caobos. ¡Gracias!`;

    const url = `https://wa.me/${HOTEL_CONTACT.whatsappRaw}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="w-full bg-[#f0eee9] py-16 lg:py-24 relative overflow-hidden" id="restaurante-caobos">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl border border-[#001a39]/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Identity and Narrative (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Unique Brand Identifier for Caobos */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fcdba7] text-[#775f35]">
                <span className="material-symbols-outlined text-base">restaurant</span>
                <span className="font-sans text-xs uppercase tracking-widest font-bold">
                  RESTAURANTE GOURMET CAOBOS
                </span>
              </div>

              <div>
                <span className="font-sans text-xs uppercase tracking-widest text-[#735b31] font-bold block mb-1">
                  GASTRONOMÍA CON ENCANTO
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#001a39] font-normal tracking-tight text-balance">
                  Delicias que encantan,{' '}
                  <span className="italic font-light text-[#735b31]">
                    momentos que se disfrutan.
                  </span>
                </h2>
              </div>

              <p className="font-sans text-sm sm:text-base text-[#43474f] font-normal leading-relaxed">
                Complementa tu estancia con los sabores de{' '}
                <strong className="text-[#001a39] font-semibold">Restaurante Gourmet Caobos</strong>.
                Un espacio para compartir alrededor de la mesa, disfrutar de una buena comida y
                darle un toque especial a tu visita a Valledupar.
              </p>

              {/* 3 Concepts */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
                <div className="bg-[#fbf9f4] p-4 rounded-xl border border-[#001a39]/5">
                  <span className="material-symbols-outlined text-[#735b31] text-2xl mb-1">
                    skillet
                  </span>
                  <h4 className="font-serif text-base text-[#001a39] font-bold mb-1">
                    Sabores de autor
                  </h4>
                  <p className="font-sans text-xs text-[#43474f]">
                    Recetas vallenatas tradicionales y platos contemporáneos.
                  </p>
                </div>
                <div className="bg-[#fbf9f4] p-4 rounded-xl border border-[#001a39]/5">
                  <span className="material-symbols-outlined text-[#735b31] text-2xl mb-1">
                    wine_bar
                  </span>
                  <h4 className="font-serif text-base text-[#001a39] font-bold mb-1">
                    Para compartir
                  </h4>
                  <p className="font-sans text-xs text-[#43474f]">
                    Tablas gourmet, copas de vino y cócteles al atardecer.
                  </p>
                </div>
                <div className="bg-[#fbf9f4] p-4 rounded-xl border border-[#001a39]/5">
                  <span className="material-symbols-outlined text-[#735b31] text-2xl mb-1">
                    room_service
                  </span>
                  <h4 className="font-serif text-base text-[#001a39] font-bold mb-1">
                    Room Service
                  </h4>
                  <p className="font-sans text-xs text-[#43474f]">
                    Servicio directo y oportuno en la comodidad de tu suite.
                  </p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#001a39] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#002f5d] transition-colors shadow-sm"
                  href={`https://wa.me/${HOTEL_CONTACT.whatsappRaw}?text=${encodeURIComponent(
                    'Hola, deseo conocer el menú completo y reservar una mesa en el Restaurante Gourmet Caobos.'
                  )}`}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span>Reservar Mesa en Caobos</span>
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </a>

                {totalItemsCount > 0 && (
                  <button
                    onClick={() => setOrderModalOpen(true)}
                    className="inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider hover:bg-emerald-800 transition-colors shadow cursor-pointer animate-pulse"
                  >
                    <span className="material-symbols-outlined text-base">shopping_bag</span>
                    <span>Ver Pedido ({totalItemsCount}) - {formatCop(totalOrderCop)}</span>
                  </button>
                )}
              </div>
            </div>

            {/* Caobos Visual Canvas (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[420px] bg-black/10">
                <img
                  alt="Tabla gourmet de carnes frías, pasabocas y cócteles en Restaurante Caobos"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCImEp-7EwFtyiHmgfxBCqIirywFuJjaPNSPEqseTC325NV0WL0RhTpz5kPvDUnR-C8dwWhH5Bak30DFJRyQ0qV2dXRSexsxXL6-ilIlJrNQThFBMysQggyOeF-vsyIgD_6nQySohp_zedAs2VJv2VEiwHk64GCCBydkY3qWF0Ao8QtDebN6lBP2knwJ2Yl6CNVEXOIEflnU1vNVCDO9k6sHKyzT_xdfut_4XewK2OhLgwr8RcrfZhV4GE8HCOjB_X7"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001a39]/95 via-[#001a39]/30 to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="font-sans text-xs uppercase tracking-widest text-[#ffdeaa] font-bold">
                    Carta Especial
                  </span>
                  <span className="font-serif text-2xl font-medium text-white">
                    Sabores Auténticos del Cesar
                  </span>
                  <p className="font-sans text-xs text-[#d5e3ff] mt-1">
                    Desayunos ejecutivos, filetes a la parrilla, tablas gourmet y cócteles refrescantes.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Menu Browser */}
          <div className="mt-12 pt-10 border-t border-[#001a39]/10">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
              <div>
                <h3 className="font-serif text-2xl text-[#001a39] font-bold">
                  Explora Nuestra Carta
                </h3>
                <p className="text-xs text-[#43474f]">
                  Selecciona y agrega opciones para tu servicio a la habitación o visita al restaurante.
                </p>
              </div>

              {/* Menu Category Tabs */}
              <div className="flex flex-wrap gap-1.5 p-1 bg-[#eae8e3] rounded-xl">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`px-3.5 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer ${
                      activeTab === tab.id
                        ? 'bg-[#001a39] text-white shadow'
                        : 'text-[#43474f] hover:text-[#001a39]'
                    }`}
                  >
                    <span className="material-symbols-outlined text-sm">{tab.icon}</span>
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Menu Items Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredItems.map((item) => {
                const qty = selectedItems[item.id] || 0;
                return (
                  <div
                    key={item.id}
                    className="p-4 rounded-xl bg-[#fbf9f4] border border-[#001a39]/10 flex flex-col justify-between hover:border-[#735b31]/40 transition-colors"
                  >
                    <div>
                      <div className="flex items-baseline justify-between mb-1">
                        <h4 className="font-serif font-bold text-base text-[#001a39]">
                          {item.name}
                        </h4>
                        <span className="font-sans text-xs font-bold text-[#735b31]">
                          {formatCop(item.priceCop)}
                        </span>
                      </div>
                      <p className="text-xs text-[#43474f] leading-relaxed mb-4">
                        {item.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-[#001a39]/5">
                      <span className="text-[10px] uppercase font-bold text-[#735b31]">
                        {item.highlight ? '★ Recomendado' : 'Caobos'}
                      </span>
                      {qty > 0 ? (
                        <div className="flex items-center gap-2 bg-white px-2 py-1 rounded-lg border border-[#001a39]/15">
                          <button
                            onClick={() => removeItem(item.id)}
                            className="w-5 h-5 rounded flex items-center justify-center text-xs text-[#001a39] hover:bg-gray-100 cursor-pointer"
                          >
                            -
                          </button>
                          <span className="text-xs font-bold text-[#001a39]">{qty}</span>
                          <button
                            onClick={() => addItem(item.id)}
                            className="w-5 h-5 rounded flex items-center justify-center text-xs text-[#001a39] hover:bg-gray-100 cursor-pointer"
                          >
                            +
                          </button>
                        </div>
                      ) : (
                        <button
                          type="button"
                          onClick={() => addItem(item.id)}
                          className="px-3 py-1 rounded-md bg-[#001a39] text-white text-[11px] font-semibold hover:bg-[#002f5d] transition-colors cursor-pointer"
                        >
                          + Agregar
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Order Summary Modal */}
      {orderModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#fbf9f4] rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl border border-[#001a39]/15">
            <div className="bg-[#001a39] text-white px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-xl text-[#ffdeaa]">
                  restaurant_menu
                </span>
                <h4 className="font-serif text-xl font-bold">
                  Tu Selección en Restaurante Caobos
                </h4>
              </div>
              <button
                onClick={() => setOrderModalOpen(false)}
                className="text-white/70 hover:text-white"
              >
                <span className="material-symbols-outlined text-xl">close</span>
              </button>
            </div>

            <div className="p-6 space-y-4 max-h-[60vh] overflow-y-auto">
              {Object.entries(selectedItems).map(([id, qty]) => {
                const item = MENU_ITEMS.find((m) => m.id === id);
                if (!item) return null;
                return (
                  <div
                    key={id}
                    className="flex items-center justify-between py-2 border-b border-[#001a39]/10"
                  >
                    <div>
                      <span className="font-serif font-bold text-sm text-[#001a39] block">
                        {item.name}
                      </span>
                      <span className="text-xs text-[#735b31]">
                        {formatCop(item.priceCop)} c/u
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2 bg-white px-2 py-0.5 rounded border border-[#001a39]/15">
                        <button onClick={() => removeItem(id)} className="text-xs px-1">
                          -
                        </button>
                        <span className="text-xs font-bold">{qty}</span>
                        <button onClick={() => addItem(id)} className="text-xs px-1">
                          +
                        </button>
                      </div>
                      <span className="text-xs font-bold text-[#001a39] w-20 text-right">
                        {formatCop(item.priceCop * qty)}
                      </span>
                    </div>
                  </div>
                );
              })}

              <div className="pt-3 flex items-baseline justify-between text-base font-bold text-[#001a39]">
                <span>Total Estimado:</span>
                <span className="text-xl text-[#735b31]">{formatCop(totalOrderCop)} COP</span>
              </div>
            </div>

            <div className="p-5 bg-[#eae8e3] flex items-center justify-between gap-3">
              <button
                onClick={() => setSelectedItems({})}
                className="text-xs text-red-700 hover:underline cursor-pointer"
              >
                Vaciar selección
              </button>
              <button
                onClick={sendOrderViaWhatsApp}
                className="px-5 py-2.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow flex items-center gap-1.5 cursor-pointer"
              >
                <span className="material-symbols-outlined text-base">chat</span>
                <span>Enviar pedido por WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
