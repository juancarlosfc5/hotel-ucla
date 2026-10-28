---
tipo: pendientes
estado: activo
creado: 2026-10-28
actualizado: 2026-10-28
tags: [pendientes, verificacion, mejoras]
fuentes: ["../hotel-ucla-center/src/components/", "../hotel-ucla-center/src/data/hotelData.ts", "../Docs/"]
---
# Pendientes y próximos cambios

## Primera modificación realizada
**Elección confirmada por el usuario:** “Poner un video real de Docs en la galería”. Se incorporó el clip sin audio de 8,43 segundos en “Nuestras Habitaciones en Detalle”. Los otros dos recorridos quedan identificados como “Video pendiente”, sin reproductor simulado. Véanse [[estado-del-proyecto]] y [[documentos-y-activos]].

## Siguientes mejoras sugeridas, sin aprobación todavía
- Ajustar el encabezado en celular: a 390 px, el botón “Reservar ahora” ocupa el espacio del menú y lo desplaza fuera de la vista (borde del menú observado a 447 px). Es anterior al cambio del video; la galería y su nuevo reproductor sí se comprobaron en móvil. No se modificó el encabezado en esta tarea.
- Corregir la consulta rápida de fechas/habitación para que llegue al cotizador: sus valores iniciales se guardan al montar el componente y no se sincronizan al abrirlo después. No se cambió este flujo en el arranque.
- Incorporar recorridos reales de terraza y restaurante si se aportan materiales adecuados. Los otros MP4 de Docs muestran habitaciones, no se atribuirán a estos espacios.

## Verificación y contenido
- Validar con la empresa la vigencia de contactos, tarifas, capacidades, carta, extras, horarios, tiempos de traslado y procedencia/autorización de testimonios. No inventar sustitutos.
- Comprobar la pertenencia del enlace LobbyPMS `/urrego` y el destino del mapa antes de publicar o tramitar reservas. No se ha realizado ninguna reserva ni envío.
- Los formularios preparan un WhatsApp; falta una prueba de recepción con datos ficticios y un canal expresamente autorizado. No declarar entrega efectiva por abrir la aplicación.
- Se sustituyó la simulación por un reproductor real. El clip elegido no tiene audio. Los otros dos MP4 de Docs tienen pista de audio pendiente de escucha y revisión completa antes de usarlos.
- Imágenes cargadas y anclas internas revisadas en el navegador sin errores detectados en ese recorrido. Quedan referencias remotas de Google; no se garantiza disponibilidad futura ni se descargaron por iniciativa propia.
- No se encontró logo independiente/vectorial, catálogo empresarial, documento de tarifas ni texto institucional en Docs. Se pueden depositar nuevos materiales allí sin organizarlos previamente.
- Antes de un remoto: revisar privacidad de wiki, referencias HTML/Markdown del export y archivos seleccionados, además de los ignorados. El primer commit es local y no constituye publicación.

## Publicación
**Pendiente:** destino público y autorización. No se encontró evidencia de publicación actual en esta carpeta. La vista local y Git local son estados distintos del sitio público.

Véanse [[estado-del-proyecto]], [[empresa]] y [[documentos-y-activos]].
