import React, { useState } from 'react';

interface GalleryItem {
  id: string;
  category: 'all' | 'rooms' | 'terrace' | 'romantic';
  title: string;
  subtitle: string;
  src: string;
  span?: string;
}

export const GallerySection: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [videoModal, setVideoModal] = useState<{ title: string; duration: string; poster: string } | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  const galleryItems: GalleryItem[] = [
    {
      id: 'g1',
      category: 'terrace',
      title: 'Terraza & Jacuzzi Panorámico',
      subtitle: 'Vista abierta a Valledupar con cascada de agua y solárium',
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCImEp-7EwFtyiHmgfxBCqIirywFuJjaPNSPEqseTC325NV0WL0RhTpz5kPvDUnR-C8dwWhH5Bak30DFJRyQ0qV2dXRSexsxXL6-ilIlJrNQThFBMysQggyOeF-vsyIgD_6nQySohp_zedAs2VJv2VEiwHk64GCCBydkY3qWF0Ao8QtDebN6lBP2knwJ2Yl6CNVEXOIEflnU1vNVCDO9k6sHKyzT_xdfut_4XewK2OhLgwr8RcrfZhV4GE8HCOjB_X7',
      span: 'col-span-2 row-span-2 min-h-[380px]',
    },
    {
      id: 'g2',
      category: 'terrace',
      title: 'Pasadía Relax con Cócteles',
      subtitle: 'Pasadía oficial de $60.000 con hidromasaje y almuerzo',
      src: '/assets/aistudio/Image_4_409e9a1d.jpeg',
      span: 'h-52',
    },
    {
      id: 'g3',
      category: 'rooms',
      title: 'Suite Deluxe con Balcón Privado',
      subtitle: 'Luz natural, brisa fresca y juego de mesa bistro',
      src: '/assets/aistudio/Image_8_d43112a3.jpeg',
      span: 'h-52',
    },
    {
      id: 'g4',
      category: 'rooms',
      title: 'Habitación Deluxe Confort',
      subtitle: 'Cabecero de madera iluminado y arte abstracto',
      src: '/assets/aistudio/Image_10_29383964.jpeg',
      span: 'h-52',
    },
    {
      id: 'g5',
      category: 'romantic',
      title: 'Planes Románticos Te Amo',
      subtitle: 'Decoración exclusiva con rosas rojas, pétalos y globos',
      src: '/assets/aistudio/Image_3_4150344c.jpeg',
      span: 'h-52',
    },
    {
      id: 'g6',
      category: 'rooms',
      title: 'Habitación Estándar Triple',
      subtitle: 'Espacio y confort para grupos y delegaciones',
      src: '/assets/aistudio/Image_6_f7b49a31.jpeg',
      span: 'h-52',
    },
    {
      id: 'g7',
      category: 'rooms',
      title: 'Habitación Cuádruple con Camarote',
      subtitle: 'Camarote en madera maciza y distribución amplia',
      src: '/assets/aistudio/Image_7_1652c744.jpeg',
      span: 'h-52',
    },
    {
      id: 'g8',
      category: 'rooms',
      title: 'Habitación Familiar Amplia',
      subtitle: 'Capacidad para hasta 6 personas',
      src: '/assets/aistudio/Image_11_e644c7f8.jpeg',
      span: 'h-52',
    },
  ];

  const filteredItems = galleryItems.filter(
    (item) => filter === 'all' || item.category === filter
  );

  const videoTours = [
    {
      title: 'Recorrido por la Terraza & Jacuzzi',
      duration: '0:45',
      description: 'Conoce el área húmeda, la cascada y la vista panorámica de la ciudad.',
      poster:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCImEp-7EwFtyiHmgfxBCqIirywFuJjaPNSPEqseTC325NV0WL0RhTpz5kPvDUnR-C8dwWhH5Bak30DFJRyQ0qV2dXRSexsxXL6-ilIlJrNQThFBMysQggyOeF-vsyIgD_6nQySohp_zedAs2VJv2VEiwHk64GCCBydkY3qWF0Ao8QtDebN6lBP2knwJ2Yl6CNVEXOIEflnU1vNVCDO9k6sHKyzT_xdfut_4XewK2OhLgwr8RcrfZhV4GE8HCOjB_X7',
    },
    {
      title: 'Nuestras Habitaciones en Detalle',
      duration: '1:12',
      description: 'Un vistazo a los acabados, camas confort y comodidades de cada suite.',
      poster: '/assets/aistudio/Image_10_29383964.jpeg',
    },
    {
      title: 'Experiencia Gastronómica Caobos',
      duration: '0:58',
      description: 'Los sabores, tablas gourmet y bebidas refrescantes que esperan por ti.',
      poster: '/assets/aistudio/Image_12_a5d0fd0e.jpeg',
    },
  ];

  return (
    <section className="w-full bg-[#fbf9f4] py-16 lg:py-24" id="galeria">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="font-sans text-xs uppercase tracking-widest text-[#735b31] font-bold block mb-2">
            CONOCE UCLA CENTER
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#001a39] font-normal tracking-tight mb-3 text-balance">
            Un recorrido por nuestro hotel.
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#43474f] leading-relaxed">
            Fotografías reales de nuestras instalaciones, suites y rincones con encanto en Valledupar.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 mt-6 p-1 bg-[#eae8e3] rounded-xl max-w-md mx-auto">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                filter === 'all' ? 'bg-[#001a39] text-white shadow-sm' : 'text-[#43474f]'
              }`}
            >
              Todas
            </button>
            <button
              onClick={() => setFilter('rooms')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                filter === 'rooms' ? 'bg-[#001a39] text-white shadow-sm' : 'text-[#43474f]'
              }`}
            >
              Habitaciones
            </button>
            <button
              onClick={() => setFilter('terrace')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                filter === 'terrace' ? 'bg-[#001a39] text-white shadow-sm' : 'text-[#43474f]'
              }`}
            >
              Terraza & Jacuzzi
            </button>
            <button
              onClick={() => setFilter('romantic')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                filter === 'romantic' ? 'bg-[#001a39] text-white shadow-sm' : 'text-[#43474f]'
              }`}
            >
              Romántico
            </button>
          </div>
        </div>

        {/* Photo Mosaic Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(index)}
              className={`rounded-2xl overflow-hidden shadow-sm relative group cursor-pointer border border-[#001a39]/10 bg-black/5 ${
                item.span || 'h-52'
              }`}
            >
              <img
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                src={item.src}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001a39]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end">
                <span className="font-serif text-white font-bold text-base sm:text-lg">
                  {item.title}
                </span>
                <span className="text-[11px] text-[#ffdeaa] mt-0.5 line-clamp-1">
                  {item.subtitle}
                </span>
              </div>
              <div className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="material-symbols-outlined text-sm text-[#001a39]">zoom_in</span>
              </div>
            </div>
          ))}
        </div>

        {/* Video Tour Section */}
        <div className="mt-12 pt-10 border-t border-[#001a39]/10">
          <div className="text-center mb-8">
            <span className="text-xs uppercase tracking-widest text-[#735b31] font-bold block mb-1">
              EXPERIENCIA MULTIMEDIA
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#001a39] font-bold">
              Videos & Recorridos Guiados
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videoTours.map((vid, i) => (
              <div
                key={i}
                onClick={() => {
                  setVideoModal(vid);
                  setIsPlaying(true);
                }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group cursor-pointer border border-[#001a39]/10"
              >
                <div className="relative h-48 bg-[#001a39] overflow-hidden">
                  <img
                    alt={vid.title}
                    className="w-full h-full object-cover opacity-75 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                    src={vid.poster}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-white/90 text-[#001a39] flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:bg-[#ffdeaa] transition-all">
                      <span className="material-symbols-outlined text-3xl">play_arrow</span>
                    </div>
                  </div>
                  <span className="absolute bottom-3 right-3 bg-[#001a39]/90 backdrop-blur-md text-white text-[11px] font-sans px-2 py-0.5 rounded font-semibold">
                    {vid.duration}
                  </span>
                </div>
                <div className="p-5">
                  <h4 className="font-serif text-lg text-[#001a39] font-bold mb-1">
                    {vid.title}
                  </h4>
                  <p className="font-sans text-xs text-[#43474f] leading-relaxed">
                    {vid.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-4 right-4 text-white hover:text-[#ffdeaa] p-2 z-10"
            aria-label="Cerrar visor de fotos"
          >
            <span className="material-symbols-outlined text-3xl">close</span>
          </button>

          <button
            onClick={() =>
              setLightboxIndex((prev) =>
                prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : null
              )
            }
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-[#ffdeaa] p-2 bg-black/40 rounded-full"
            aria-label="Foto anterior"
          >
            <span className="material-symbols-outlined text-3xl">chevron_left</span>
          </button>

          <button
            onClick={() =>
              setLightboxIndex((prev) =>
                prev !== null ? (prev + 1) % filteredItems.length : null
              )
            }
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-[#ffdeaa] p-2 bg-black/40 rounded-full"
            aria-label="Foto siguiente"
          >
            <span className="material-symbols-outlined text-3xl">chevron_right</span>
          </button>

          <div className="max-w-4xl max-h-[85vh] flex flex-col items-center">
            <img
              src={filteredItems[lightboxIndex].src}
              alt={filteredItems[lightboxIndex].title}
              className="max-h-[75vh] w-auto max-w-full rounded-xl object-contain shadow-2xl"
            />
            <div className="text-center mt-4 text-white">
              <h4 className="font-serif text-xl font-bold">
                {filteredItems[lightboxIndex].title}
              </h4>
              <p className="text-xs text-[#d5e3ff]">
                {filteredItems[lightboxIndex].subtitle}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Video Simulation Modal */}
      {videoModal && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#001a39] rounded-2xl w-full max-w-3xl overflow-hidden shadow-2xl border border-white/20">
            <div className="p-4 bg-[#002f5d] flex items-center justify-between text-white">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#ffdeaa]">movie</span>
                <span className="font-serif font-bold text-base">{videoModal.title}</span>
              </div>
              <button
                onClick={() => setVideoModal(null)}
                className="text-white/70 hover:text-white"
              >
                <span className="material-symbols-outlined text-xl">close</span>
              </button>
            </div>

            <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden">
              <img
                src={videoModal.poster}
                alt={videoModal.title}
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30"></div>

              {/* Simulated Ambient Player Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <button
                  type="button"
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-16 h-16 rounded-full bg-[#ffdeaa] text-[#001a39] flex items-center justify-center shadow-2xl hover:scale-110 transition-transform cursor-pointer"
                >
                  <span className="material-symbols-outlined text-4xl">
                    {isPlaying ? 'pause' : 'play_arrow'}
                  </span>
                </button>
                <span className="text-xs font-semibold text-white/90 mt-3 bg-black/60 px-3 py-1 rounded-full">
                  {isPlaying ? 'Reproduciendo recorrido visual...' : 'Pausado'}
                </span>
              </div>

              {/* Bottom Progress Bar */}
              <div className="absolute bottom-3 left-4 right-4 flex items-center gap-3 text-xs text-white">
                <span>0:14</span>
                <div className="flex-1 h-1.5 bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full bg-[#ffdeaa] w-1/3 animate-pulse"></div>
                </div>
                <span>{videoModal.duration}</span>
              </div>
            </div>

            <div className="p-4 bg-[#001a39] text-xs text-[#d5e3ff] flex items-center justify-between">
              <span>Hotel Ucla Center • Valledupar, Colombia</span>
              <a
                href="https://www.instagram.com/hoteluclacenter/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ffdeaa] hover:underline"
              >
                Ver más videos en @hoteluclacenter
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
