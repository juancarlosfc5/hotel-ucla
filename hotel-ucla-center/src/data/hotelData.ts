export interface Room {
  id: string;
  name: string;
  category: 'small' | 'standard' | 'deluxe' | 'family' | 'apartaestudio';
  categoryLabel: string;
  badge: string;
  capacity: number;
  capacityLabel: string;
  beds: string;
  pricePerNightCop: number;
  image: string;
  secondaryImages?: string[];
  description: string;
  amenities: string[];
  features: string[];
}

export interface MenuItem {
  id: string;
  category: 'desayunos' | 'almuerzos' | 'tablas' | 'cocteles';
  name: string;
  description: string;
  priceCop: number;
  highlight?: boolean;
}

export const ROOMS: Room[] = [
  {
    id: 'small',
    name: 'Habitación Small',
    category: 'small',
    categoryLabel: 'Boutique',
    badge: 'Esencial • Individual / Pareja',
    capacity: 2,
    capacityLabel: '1 - 2 personas',
    beds: '1 Cama Semidoble o Doble Confort',
    pricePerNightCop: 120000,
    image: '/assets/aistudio/Image_10_29383964.jpeg',
    secondaryImages: [
      '/assets/aistudio/Image_13_fd30f50a.jpeg',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCImEp-7EwFtyiHmgfxBCqIirywFuJjaPNSPEqseTC325NV0WL0RhTpz5kPvDUnR-C8dwWhH5Bak30DFJRyQ0qV2dXRSexsxXL6-ilIlJrNQThFBMysQggyOeF-vsyIgD_6nQySohp_zedAs2VJv2VEiwHk64GCCBydkY3qWF0Ao8QtDebN6lBP2knwJ2Yl6CNVEXOIEflnU1vNVCDO9k6sHKyzT_xdfut_4XewK2OhLgwr8RcrfZhV4GE8HCOjB_X7'
    ],
    description: 'Todo lo esencial para descansar cómodamente. Un espacio práctico y acogedor, ideal para disfrutar de una estancia sencilla en Valledupar.',
    amenities: ['Aire acondicionado', 'Smart TV', 'Baño privado', 'Nevera', 'Wi-Fi de alta velocidad', 'Escritorio'],
    features: ['Check-in 3:00 PM', 'Check-out 1:00 PM', 'Servicio a la habitación', 'Lencería premium']
  },
  {
    id: 'estandar-doble',
    name: 'Habitación Estándar Doble',
    category: 'standard',
    categoryLabel: 'Cama Doble',
    badge: 'Popular • Parejas / Solos',
    capacity: 2,
    capacityLabel: 'Hasta 2 personas',
    beds: '1 Cama Doble Confort Matrimonial',
    pricePerNightCop: 150000,
    image: '/assets/aistudio/Image_13_fd30f50a.jpeg',
    secondaryImages: [
      '/assets/aistudio/Image_10_29383964.jpeg',
      '/assets/aistudio/Image_6_f7b49a31.jpeg'
    ],
    description: 'Tu espacio para descansar y recargar energías después de cada jornada. Comodidad y practicidad para disfrutar Valledupar a tu ritmo.',
    amenities: ['Cama doble', 'Aire acondicionado', 'Smart TV', 'Baño privado', 'Nevera', 'Wi-Fi'],
    features: ['Iluminación cálida', 'Cerradura electrónica', 'Climatización silenciosa', 'Toallas suaves']
  },
  {
    id: 'estandar-triple',
    name: 'Habitación Estándar Triple',
    category: 'standard',
    categoryLabel: 'Grupos Pequeños',
    badge: '3 Huéspedes • Confortable',
    capacity: 3,
    capacityLabel: '3 personas',
    beds: '3 Camas individuales o 1 Doble + 1 Sencilla',
    pricePerNightCop: 190000,
    image: '/assets/aistudio/Image_6_f7b49a31.jpeg',
    secondaryImages: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBZy-SJlBRtHjYEWgKxY19ds-P-MohoAjDZAsCVqEbdXsIvTtUaGW_eOYKc_kTZmw5AerMkNrzk8TlFJ5RTQtaAs73mBEXYvzhOwl0hLlBQFDYUfI_tnM1CHb6xCnhSctQyAwDywPTnbJ7GpDnJDYRQOffpZM1MJ-ZLfoR3lUNZF7KQhJG7pPjeHJGFiyNnrBXWlghStF8HRQDh3OjKGygSuqk79Sa8Emyql97_PUFvKA-umKHmJzsAMFVj4AaGGJwC',
      '/assets/aistudio/Image_13_fd30f50a.jpeg'
    ],
    description: 'Comparte el viaje y disfruta de un ambiente cómodo para descansar juntos. Una alternativa para pequeños grupos y familias que buscan practicidad durante su estancia.',
    amenities: ['3 Huéspedes', 'Aire acondicionado', 'Smart TV', 'Baño privado', 'Nevera', 'Wi-Fi'],
    features: ['Espacio amplio para equipaje', 'Tomas de corriente por cama', 'Espejo de cuerpo entero']
  },
  {
    id: 'estandar-cuadruple',
    name: 'Habitación Estándar Cuádruple',
    category: 'family',
    categoryLabel: 'Camarote • Cama',
    badge: '4 Huéspedes • Familiar',
    capacity: 4,
    capacityLabel: '4 personas',
    beds: 'Camarote en madera maciza + 1 Cama Doble',
    pricePerNightCop: 240000,
    image: '/assets/aistudio/Image_7_1652c744.jpeg',
    secondaryImages: [
      '/assets/aistudio/Image_11_e644c7f8.jpeg',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCXupbmIufTmzxa9waru2WHazmNnxWECjxE3RPHox-_UygUWLUrlg3HwjiRmNu8u5S0YsFeTgCsgmFEj-CjKUk7ANHDmk2eMIyE2RMPUu6e20fVx1zltC-uzOpmER7CIpHWooZqoM_eH7-YSxXjEVqd_HzrIF1tvrHiS0_nAFsRfm9ewoQGFLkLPw5qofWw0pkAUUJnsVERRLT8vG3zvGtOMCaC9UvClrRLwkPAyml8uIBtvwZtf2kB8i7bLVXJ6AQw'
    ],
    description: 'Más espacio para compartir los mejores momentos de tu visita. Descansa cómodamente y disfruta de una alternativa pensada para viajes en grupo con camarote artesanal de madera.',
    amenities: ['4 personas', 'Camarote de madera', 'Aire acondicionado', 'Smart TV', 'Baño privado', 'Nevera', 'Wi-Fi'],
    features: ['Estructura firme y segura', 'Excelente ventilación', 'Zona de escritorio y closet']
  },
  {
    id: 'estandar-familiar',
    name: 'Habitación Estándar Familiar',
    category: 'family',
    categoryLabel: 'Toda la Familia',
    badge: 'Hasta 6 Huéspedes • Gran Capacidad',
    capacity: 6,
    capacityLabel: 'Hasta 6 personas',
    beds: 'Camarotes múltiples + Camas dobles/sencillas',
    pricePerNightCop: 290000,
    image: '/assets/aistudio/Image_11_e644c7f8.jpeg',
    secondaryImages: [
      '/assets/aistudio/Image_7_1652c744.jpeg',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDGGykMz6lbloPh673EkHsQLAxg7RRxquq6xX7DxbAfJvpSa2mWWMISVMrECTxq70Octf5b9xi6EdLEXdgW9fBdkXm0a2trev0dffPcD7p5WXOYORMhaiYNxvStqV3IcxdcxxyHIGZ1j1z7bKnrJPwpFAAqrnFGbB24oiM58jUtb-ZTl_x8AE79qb8GnEdYz5CwrvYdzFcPB8X5LDXU3NdpUurIL5BnDh1Kyy5aeU9DY1SxPg_0izbISNLDp8q2MMDK'
    ],
    description: 'Porque los viajes en familia merecen comodidad para todos. Comparte la experiencia de visitar Valledupar y encuentra un espacio amplio y luminoso pensado para disfrutar juntos.',
    amenities: ['Hasta 6 personas', 'Aire acondicionado potente', 'Smart TV 43"', 'Baño privado amplio', 'Nevera', 'Wi-Fi'],
    features: ['Ambiente espacioso', 'Ideal para delegaciones o familias', 'Seguridad y tranquilidad']
  },
  {
    id: 'deluxe',
    name: 'Habitación Deluxe',
    category: 'deluxe',
    categoryLabel: 'Exclusiva',
    badge: 'Confort Superior',
    capacity: 2,
    capacityLabel: '2 personas',
    beds: '1 Cama King / Queen Size con cabecero iluminado',
    pricePerNightCop: 180000,
    image: '/assets/aistudio/Image_10_29383964.jpeg',
    secondaryImages: [
      '/assets/aistudio/Image_8_d43112a3.jpeg',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCImEp-7EwFtyiHmgfxBCqIirywFuJjaPNSPEqseTC325NV0WL0RhTpz5kPvDUnR-C8dwWhH5Bak30DFJRyQ0qV2dXRSexsxXL6-ilIlJrNQThFBMysQggyOeF-vsyIgD_6nQySohp_zedAs2VJv2VEiwHk64GCCBydkY3qWF0Ao8QtDebN6lBP2knwJ2Yl6CNVEXOIEflnU1vNVCDO9k6sHKyzT_xdfut_4XewK2OhLgwr8RcrfZhV4GE8HCOjB_X7'
    ],
    description: 'Un toque especial de confort para disfrutar tu estancia con tranquilidad. Un ambiente acogedor con arte contemporáneo e iluminación cálida que invita a descansar y desconectarte.',
    amenities: ['Diseño Deluxe', 'Cabecero con luces de lectura', 'Aire acondicionado', 'Smart TV', 'Baño privado de lujo', 'Nevera', 'Wi-Fi'],
    features: ['Almohadas y cojines UCLA Center', 'Mesa de noche con cargadores', 'Espejo panorámico']
  },
  {
    id: 'deluxe-balcon',
    name: 'Habitación Deluxe con Balcón',
    category: 'deluxe',
    categoryLabel: 'Brisa • Vista',
    badge: 'Balcón Privado • Vista Panorámica',
    capacity: 2,
    capacityLabel: '2 personas',
    beds: '1 Cama King Confort con vista exterior',
    pricePerNightCop: 220000,
    image: '/assets/aistudio/Image_8_d43112a3.jpeg',
    secondaryImages: [
      '/assets/aistudio/Image_10_29383964.jpeg',
      '/assets/aistudio/Image_12_a5d0fd0e.jpeg'
    ],
    description: 'Haz una pausa, contempla el entorno y disfruta de tu propio balcón. Un espacio para vivir tu estancia con mayor tranquilidad y disfrutar de la brisa de Valledupar con juego de mesa y sillas de madera.',
    amenities: ['Balcón privado exterior', 'Juego de mesa bistro', 'Aire acondicionado', 'Smart TV', 'Baño privado', 'Nevera', 'Wi-Fi'],
    features: ['Ventanal de piso a techo', 'Espejos decorativos circulares', 'Vistas a la vegetación']
  },
  {
    id: 'apartaestudio',
    name: 'Habitación Apartaestudio',
    category: 'apartaestudio',
    categoryLabel: 'Total Autonomía',
    badge: 'Equipado • Estancias Prolongadas',
    capacity: 3,
    capacityLabel: '2 - 3 personas',
    beds: '1 Cama Doble + Sofá Cama',
    pricePerNightCop: 260000,
    image: '/assets/aistudio/Image_11_e644c7f8.jpeg',
    secondaryImages: [
      '/assets/aistudio/Image_7_1652c744.jpeg',
      '/assets/aistudio/Image_8_d43112a3.jpeg'
    ],
    description: 'Siéntete como en casa, incluso cuando estás lejos. Disfruta de la comodidad de un espacio independiente, práctico para combinar trabajo, descanso y estancias más prolongadas con cocina completa.',
    amenities: ['Cocina integral equipada', 'Nevera familiar grande', 'Sofá cama', 'Aire acondicionado', 'Smart TV', 'Baño privado', 'Wi-Fi'],
    features: ['Utensilios de cocina y vajilla', 'Lavaplatos y estufa', 'Espacio para teletrabajo']
  }
];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'm1',
    category: 'desayunos',
    name: 'Desayuno Típico Vallenato',
    description: 'Huevos al gusto, arepa de queso costeño asada, porción de queso criollo, chicharrón crocante y café de la Sierra Nevada.',
    priceCop: 24000,
    highlight: true
  },
  {
    id: 'm2',
    category: 'desayunos',
    name: 'Desayuno Americano Confort',
    description: 'Tostadas francesas con miel de abejas pura, tocineta crujiente, huevos revueltos cremosos y jugo natural de fruta tropical.',
    priceCop: 22000
  },
  {
    id: 'm3',
    category: 'desayunos',
    name: 'Bowl de Frutas Silvestres & Granola',
    description: 'Selección de frutas frescas caribeñas (papaya, piña, banano, fresas), yogurt griego natural y semillas de chía.',
    priceCop: 18000
  },
  {
    id: 'm4',
    category: 'almuerzos',
    name: 'Filete de Róbalo en Salsa Caobos',
    description: 'Pescado fresco sellado a la plancha, bañado en reducción de mariscos y leche de coco, acompañado de arroz con coco y patacones.',
    priceCop: 42000,
    highlight: true
  },
  {
    id: 'm5',
    category: 'almuerzos',
    name: 'Lomo Fino a la Parrilla al Carbón',
    description: 'Corte magro de res sazonado con chimichurri casero, puré de papas rústico y ensalada tibia de vegetales asados.',
    priceCop: 45000
  },
  {
    id: 'm6',
    category: 'almuerzos',
    name: 'Pollo Campesino en Reducción de Maracuyá',
    description: 'Pechuga marinada a las finas hierbas con toque cítrico dulce, arroz blanco suelto y tajadas maduras con queso.',
    priceCop: 34000
  },
  {
    id: 'm7',
    category: 'tablas',
    name: 'Tabla Gourmet Caobos (Especial Parejas)',
    description: 'Selección de jamones curados, quesos madurados, dips artesanales, frutos secos, aceitunas y tostadas crujientes.',
    priceCop: 48000,
    highlight: true
  },
  {
    id: 'm8',
    category: 'tablas',
    name: 'Picada Criolla del Cesar',
    description: 'Chicharrón crocante, bollo limpio, butifarra tradicional, carimañolas de carne y salsa de suero costeño.',
    priceCop: 38000
  },
  {
    id: 'm9',
    category: 'cocteles',
    name: 'Cóctel Sunset Vallenato',
    description: 'Ron añejo colombiano, jarabe de corozo silvestre, jugo de maracuyá fresco, hierbabuena y soda helada.',
    priceCop: 28000,
    highlight: true
  },
  {
    id: 'm10',
    category: 'cocteles',
    name: 'Margarita Tropical de la Sierra',
    description: 'Tequila blanco, triple sec, zumo de limón mandarino fresco y escarchado de sal rosada.',
    priceCop: 26000
  },
  {
    id: 'm11',
    category: 'cocteles',
    name: 'Limonada de Coco Artesanal',
    description: 'Bebida sin licor cremosa preparada con pulpa de coco fresco, limón y leche condensada al punto.',
    priceCop: 16000
  }
];

export const FAQ_ITEMS = [
  {
    question: '¿Cómo puedo reservar una habitación?',
    answer: 'Puedes reservar de manera directa e instantánea a través de nuestro motor oficial de reservas LobbyPMS haciendo clic en "Reservar ahora", o comunicándote directamente con nuestra recepción por WhatsApp para recibir asesoría personalizada, fotos adicionales y tarifas al momento.'
  },
  {
    question: '¿Tienen habitaciones para familias y grupos?',
    answer: 'Sí, disponemos de habitaciones Estándar Triples, Cuádruples con camarote de madera maciza y la suite Estándar Familiar con capacidad para hasta seis huéspedes, garantizando comodidad, frescura y privacidad para toda la familia.'
  },
  {
    question: '¿Puedo consultar los servicios del hotel antes de reservar?',
    answer: 'Por supuesto. Nuestro equipo de recepción 24/7 está disponible por WhatsApp para informarte sobre el estado y horarios del jacuzzi, la carta de Restaurante Caobos, disponibilidad de habitaciones con balcón o cualquier detalle para tu llegada.'
  },
  {
    question: '¿Cómo puedo conocer las tarifas exactas?',
    answer: 'Las tarifas varían según la fecha, categoría de habitación y temporada. Puedes calcular el costo estimado con nuestra calculadora interactiva en esta página web, o escribirnos directamente a WhatsApp para cotizaciones con descuentos por estadías prolongadas.'
  },
  {
    question: '¿Puedo recibir información sobre el restaurante y los eventos?',
    answer: 'Sí. Ponemos a tu disposición la carta completa de Restaurante Gourmet Caobos para servicio al comedor o a la habitación, así como cotizaciones para reuniones corporativas, coffee breaks ejecutivos y celebraciones familiares.'
  },
  {
    question: '¿Dónde está ubicado el hotel en Valledupar?',
    answer: 'Nos encontramos en la Calle 22C #18A-31, en Valledupar, Cesar, Colombia. Es una ubicación céntrica y segura, a pocos minutos de los centros bancarios, clínicas, la mítica Plaza Alfonso López y el Aeropuerto Alfonso López Pumarejo.'
  }
];

export const HOTEL_CONTACT = {
  phone1: '+57 310 336 0090',
  phone2: '+57 300 628 2826',
  whatsappRaw: '573103360090',
  address: 'Calle 22C #18A-31, Valledupar, Cesar, Colombia',
  email1: 'hoteluclacenter@gmail.com',
  email2: 'recepcion@hoteluclacenter.com.co',
  lobbyPmsUrl: 'https://engine.lobbypms.com/urrego',
  googleMapsUrl: 'https://maps.app.goo.gl/tqSmtRcNpRACHQvR8',
  social: {
    facebook: 'https://www.facebook.com/HOTELUCLACENTER',
    instagram: 'https://www.instagram.com/hoteluclacenter/',
    tiktok: 'https://www.tiktok.com/@hoteluclacenter'
  }
};
