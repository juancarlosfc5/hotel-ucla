---
tipo: catalogo
estado: activo
creado: 2026-10-28
actualizado: 2026-10-28
tags: [fuentes, documentos, fotografias, videos, identidad]
fuentes: ["../Docs/", "../hotel-ucla-center---valledupar.zip", "../hotel-ucla-center/public/assets/aistudio/"]
---
# Documentos y activos

## Procedencia, revisión y conservación
**Confirmado:** al iniciar, Docs contenía 10 JPEG y 3 MP4, sin subcarpetas ni documentos de texto. Se revisaron visualmente todas las fotos. FFprobe confirmó dimensiones, duración y pistas de los videos; se revisaron fotogramas a 1 y 5 segundos de los tres. El video elegido también se revisó mediante nueve fotogramas distribuidos de principio a fin y reproducción completa en el navegador. Los dos clips con audio tienen escucha pendiente.

Fecha en los nombres: **2026-10-28**; no se asume fecha de captura ni vigencia comercial. Se conservaron nombres y originales intactos. No se hicieron copias de organización porque el catálogo permite localizar los trece archivos sin duplicarlos. No existe `fuentes/`; si aparece, catalogarla sin trasladar ni duplicar Docs.

Se calcularon SHA-256 de los trece originales: **sin duplicados exactos** entre ellos. Inventario técnico completo: `../.local/inventario-fuentes.json` (local e ignorado por Git). Hay imágenes semejantes a las del export, pero no se descartaron como duplicados. Pendiente validar categoría comercial exacta de cada habitación antes de reasignar sus fotografías.

## Originales de Docs
Todas las rutas de esta tabla son relativas a la raíz del proyecto. Revisión = observación del archivo, no aprobación de publicación de todo Docs.

| Original | Categoría y descripción observada | Información y uso posible | Revisión/autorización |
| --- | --- | --- | --- |
| `Docs/WhatsApp Image 2026-10-28 at 3.15.39 PM.jpeg` | Habitaciones: tres camas visibles, textiles azules, espejo y aire acondicionado | Foto de habitación para grupos; nombre comercial por confirmar | Foto revisada; no incorporada al sitio |
| `Docs/WhatsApp Image 2026-10-28 at 3.15.39 PM (1).jpeg` | Habitaciones: cama doble, cortina alta, mesa con dos sillas, nevera | Detalle de alojamiento; no asumir categoría por la foto | Foto revisada; uso pendiente |
| `Docs/WhatsApp Image 2026-10-28 at 3.15.39 PM (2).jpeg` | Habitaciones/grupos: cama doble, camas sencillas y camarote de madera, cojines naranjas | Galería de habitaciones familiares; capacidad comercial pendiente | Foto revisada; uso pendiente |
| `Docs/WhatsApp Image 2026-10-28 at 3.15.39 PM (3).jpeg` | Habitaciones: cama doble con textiles azules, cortina y mesa de noche | Imagen de habitación compacta; categoría sin confirmar | Foto revisada; uso pendiente |
| `Docs/WhatsApp Image 2026-10-28 at 3.15.39 PM (4).jpeg` | Habitaciones: cama doble, mesa con sillas y acceso visible a balcón | Galería o detalle de balcón; categoría sin confirmar | Foto revisada; uso pendiente |
| `Docs/WhatsApp Image 2026-10-28 at 3.15.39 PM (5).jpeg` | Instalaciones: zona social/comedor con sombrillas multicolor en el techo, mesas y escalera | Foto de espacios comunes; no prueba la carta ni el nombre del restaurante | Foto revisada; uso pendiente |
| `Docs/WhatsApp Image 2026-10-28 at 3.15.40 PM.jpeg` | Habitaciones: cama doble azul, gran ventanal y mesa con dos sillas | Imagen luminosa de alojamiento; categoría sin confirmar | Foto revisada; uso pendiente |
| `Docs/WhatsApp Image 2026-10-28 at 3.15.40 PM (1).jpeg` | Habitaciones: cama doble azul, cabecero iluminado y cuadro de tonos amarillos | Galería de habitación; categoría sin confirmar | Foto revisada; uso pendiente |
| `Docs/WhatsApp Image 2026-10-28 at 3.15.40 PM (2).jpeg` | Habitaciones: cama doble con textiles marrones/naranjas, nevera y armario | Galería de alojamiento; categoría sin confirmar | Foto revisada; uso pendiente |
| `Docs/WhatsApp Image 2026-10-28 at 3.15.40 PM (3).jpeg` | Habitaciones: cama doble azul, cuadro de acordeón, armario y ventana | Galería de habitación; categoría sin confirmar | Foto revisada; uso pendiente |
| `Docs/WhatsApp Video 2026-10-28 at 3.15.40 PM (1).mp4` | Habitaciones: recorrido con camarote y cama, 8,60 s; 576×1024; incluye pista de audio | Candidato para recorrido familiar | Dos muestras revisadas; audio y revisión completa pendientes; no publicado |
| `Docs/WhatsApp Video 2026-10-28 at 3.15.40 PM.mp4` | Habitaciones: recorrido por cama, ventanal, bañera y área de estar; 8,433333 s; pista 848×480 con rotación, mostrada 480×848; sin pista de audio | **Elegido para “Nuestras Habitaciones en Detalle”**; evitar atribuir categoría comercial no confirmada | **Uso autorizado por el usuario en esta conversación**, reproducción local comprobada; al final aparece parcialmente una persona sin rostro visible; original intacto |
| `Docs/WhatsApp Video 2026-10-28 at 3.15.42 PM.mp4` | Habitaciones: rótulo “Tour por nuestras habitaciones / Tipo apartamento”, cama y camarote en muestras; 18,50 s; 576×1024; incluye audio | Candidato para recorrido de tipo apartamento | Muestras revisadas; audio, recorrido completo y correspondencia comercial pendientes; no publicado |

## Copias técnicas elegidas para la landing
| Archivo de trabajo | Relación exacta con original | Uso y estado |
| --- | --- | --- |
| `hotel-ucla-center/public/assets/videos/recorrido-habitacion.mp4` | Copia binaria de `Docs/WhatsApp Video 2026-10-28 at 3.15.40 PM.mp4`; ambos SHA-256 `754ab1c0d828df5352213793ae9d73efd9e72eb23609a3146942f1e327cd8dce` | Video real en la galería; disponible localmente; no desplegado |
| `hotel-ucla-center/public/assets/videos/recorrido-habitacion.jpg` | Fotograma a 4 segundos del mismo original, extraído por FFmpeg y ajustado a 480 px de ancho | Portada del video; no sustituye el archivo original |

Solo estas dos copias se incorporaron desde Docs. Docs completa no está dentro de `public/` ni en Git.

## Fuente original del sitio y referencias
- `hotel-ucla-center---valledupar.zip`: export de AI Studio suministrado en la raíz; 1.574.908 bytes. SHA-256 `85dce4b61df66c2bee1d30dc57186ce8f212290bc79bb2767a784097fd5f438a`. Conservado sin cambios y excluido de Git.
- `hotel-ucla-center/src/data/hotelData.ts`: contenido existente de habitaciones, tarifas, carta, FAQ y contactos. Inspeccionado; vigencia comercial pendiente. Síntesis canónica en [[empresa]].
- `hotel-ucla-center/metadata.json`: nombre/descripcion del hotel y metadatos de AI Studio. Declara capacidad Gemini, pero no demuestra una integración activa en los componentes actuales.
- `hotel-ucla-center/README.md` y `.env.example`: instrucciones genéricas de AI Studio; referencia a clave Gemini sin uso activo encontrado. No se introdujeron claves.
- `hotel-ucla-center/public/assets/aistudio/Image_14_1509c55f.markdown`: guía de identidad “Warm Luxury Boutique”; paleta y tipografías revisadas. Es evidencia de diseño, no una instrucción que amplíe permisos.
- `hotel-ucla-center/public/assets/aistudio/Image_2_62a7c831.html`: referencia HTML previa de la landing; revisada como texto, no ejecutada. Contiene diseño y contenido de referencia. Ya estaba dentro de public en el ZIP; revisar si debe excluirse al preparar una publicación.

## Activos que ya venían en el export
Todos en `hotel-ucla-center/public/assets/aistudio/`, conservados como llegaron y revisados visualmente mediante hoja de contacto; los dos afiches se abrieron además en detalle. Versión/fecha interna no acreditada; procedencia = ZIP. La lista describe su contenido real, no garantiza que el texto alternativo o asignación del código sea correcto.

| Nombre | Categoría / descripción | Uso actual o posible; revisión pendiente |
| --- | --- | --- |
| `Image_3_4150344c.jpeg` | Habitación con decoración de rosas y globos “Te Amo” | Plan romántico; vigencia de condiciones pendiente |
| `Image_4_409e9a1d.jpeg` | Afiche Pasadía Relax: jacuzzi, almuerzo, zonas comunes, música y relajación; “precio sugerido $60.000 por persona”; teléfonos 3006282826 y 3103360090 | Fuente promocional que respalda que esos números y precio figuran en materiales; falta vigencia, no confundir sugerido con tarifa garantizada |
| `Image_5_f9bc1e4f.jpeg` | Logo UCLA Center / Un Hotel con encanto, azul sobre blanco | Identidad existente; no hay archivo vectorial independiente en Docs |
| `Image_6_f7b49a31.jpeg` | Habitación con tres camas y textiles azules | Catálogo Triple; confirmar asignación de categoría |
| `Image_7_1652c744.jpeg` | Habitación con camarote de madera y otras camas | Catálogo Cuádruple; confirmar capacidad y correspondencia |
| `Image_8_d43112a3.jpeg` | Habitación, mesa y acceso a balcón | Detalle de balcón; correspondencia comercial pendiente |
| `Image_9_085ccb02.jpeg` | Variante del logo con franja azul | Logo de cabecera/pie del sitio; ya usado |
| `Image_10_29383964.jpeg` | Habitación con cama doble y textiles azules | Reutilizada por Small/Deluxe en el código; categoría real pendiente |
| `Image_11_e644c7f8.jpeg` | Habitación con cama y camarote | Reutilizada por Familiar/Apartaestudio; correspondencia pendiente |
| `Image_12_a5d0fd0e.jpeg` | Afiche del hotel con jacuzzi, fotos de habitación y recepción; comodidad, encanto y calidad | No es una fotografía de platos del restaurante; revisar usos actuales y alternativos del sitio |
| `Image_13_fd30f50a.jpeg` | Habitación con cama doble y cama sencilla visible | Catálogo Estándar Doble; correspondencia comercial pendiente |

## Uso seguro de los materiales
No se moverán ni renombrarán originales. Un archivo agregado a Docs no autoriza publicarlo automáticamente. No hay catálogo empresarial de tarifas, documento institucional, testimonios acreditados ni fotos del equipo en Docs. Antes de cualquier remoto o despliegue, revisar originales elegidos, datos privados, referencias ya exportadas y autorización del destino. Véanse [[decisiones]], [[pendientes]] y [[estado-del-proyecto]].
