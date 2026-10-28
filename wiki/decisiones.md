---
tipo: decisiones
estado: activo
creado: 2026-10-28
actualizado: 2026-10-28
tags: [decisiones, trazabilidad]
fuentes: ["instrucciones del usuario, 2026-10-28", "../hotel-ucla-center---valledupar.zip"]
---
# Decisiones del proyecto

## 2026-10-28 · Arranque local
- **Confirmado, instrucción del usuario:** aprovechar el sitio descargado, mantener framework, identidad y contenido; no rediseñar por iniciativa propia.
- **Decisión técnica aplicada:** usar `hotel-ucla-center/` como copia de trabajo del único ZIP disponible. Todas las rutas del archivo se validaron antes de extraer; destino nuevo, sin sobrescribir archivos ni aceptar enlaces simbólicos. El ZIP permanece intacto.
- **Confirmado por inspección:** no existían AGENTS, wiki, código extraído ni repositorio Git en esta carpeta. Se inicializó Git local y se guardó la importación original antes de cambiar el código.
- **Decisión técnica aplicada:** mantener npm porque el README del export lo indica; no había lock. Crear y conservar el primer `package-lock.json` al instalar. Node, npm y Git ya funcionaban; no reinstalarlos.
- **Confirmado, instrucción del usuario:** Docs es la entrada principal; los trece originales permanecen allí. Clasificación lógica en el catálogo, sin duplicar todos los archivos ni crear subcarpetas innecesarias.
- **Decisión técnica aplicada:** ignorar Docs, fuentes, ZIP, secretos, dependencias y `.local/` antes del primer commit. No configurar remoto ni publicar.
- **Límite confirmado:** la autorización inicial es local. No incluye enviar WhatsApp reales, hacer reservas, activar pagos ni contratar servicios.
- **Provisional:** las mejoras sugeridas se registran en [[pendientes]] hasta que el usuario elija; no sustituir textos o fotos todavía.

## 2026-10-28 · Instalación y primera mejora autorizada
- **Corrección técnica necesaria:** la instalación original falló con `ERESOLVE`: Vite 8.3.5 requiere esbuild `^0.27.0 || ^0.28.0`, incompatible con el `^0.25.0` declarado. Se ajustó solo esbuild a `^0.28.0`, sin forzar ni ignorar dependencias. Instalación completada y lock generado; compilan los componentes existentes y la mejora.
- **Decisión técnica aplicada:** servir por `127.0.0.1:3000` con puerto estricto; mantener la ejecución dentro del computador. Crear `iniciar-pagina.cmd` para reabrirla sin instalar ni publicar por iniciativa propia.
- **Confirmado, respuesta del usuario:** la primera mejora elegida es “Poner un video real de Docs en la galería”. Se seleccionó `WhatsApp Video 2026-10-28 at 3.15.40 PM.mp4`, 8,43 segundos y sin audio, revisado y copiado sin alterar el original. Fuente y relación en [[documentos-y-activos]].
- **Implementación:** reproductor HTML de video con controles, pantalla completa ofrecida por el navegador, cierre por botón y Escape, devolución de foco y diseño adaptable. Se conservan los temas de terraza/restaurante con estado “Video pendiente”; no se presentan imágenes estáticas como reproducciones.
- **Verificación real:** TypeScript y compilación correctos; MP4 HTTP 200; reproducción de principio a fin en escritorio y reproducción iniciada en celular de 390×844. No se enviaron mensajes ni se publicaron archivos.

## 2026-10-28 · Envío autorizado a GitHub
- **Confirmado, solicitud actual del usuario:** subir la página a su repositorio `https://github.com/juancarlosfc5/hotel-ucla.git`, rama `main`, con `origin` y seguimiento remoto. Esta autorización permite el envío de esta tarea a ese destino; no autoriza costos, DNS ni cambios en otros sitios.
- **Confirmado mediante GitHub:** cuenta conectada `juancarlosfc5`, repositorio propio público, con permiso de escritura y sin ramas antes del envío. Los commits locales ya identificaban a `juancarlosfc5` como autor con su correo noreply existente; no se cambió identidad ni se suplantó otra cuenta.
- **Decisión aplicada:** preservar estructura, historial y código comprobado; enviar con Git normal sin force-push. Originales, secretos, dependencias y temporales permanecen excluidos. Se revisaron archivos e historial antes de transmitirlos.
- **Resultado observado:** `git push -u origin main` terminó correctamente y creó `origin/main`. Subir el código a GitHub no demuestra un despliegue de la web; alojamiento sigue pendiente.
