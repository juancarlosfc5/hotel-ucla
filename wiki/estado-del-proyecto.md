---
tipo: estado
estado: listo-local
creado: 2026-10-28
actualizado: 2026-10-28
tags: [estado, ejecucion, pruebas]
fuentes: ["../hotel-ucla-center/package.json", "../hotel-ucla-center/vite.config.ts", "../hotel-ucla-center---valledupar.zip", "inspeccion local, 2026-10-28"]
---
# Estado del proyecto

## Confirmado
- Empresa del proyecto: Hotel Ucla Center, Valledupar. Código vigente en `hotel-ucla-center/`; versión de paquete `0.0.0` del export.
- Único ZIP: `hotel-ucla-center---valledupar.zip`, 1.574.908 bytes, SHA-256 `85dce4b61df66c2bee1d30dc57186ce8f212290bc79bb2767a784097fd5f438a`. Original intacto; extracción en destino nuevo con validación previa de rutas, colisiones y enlaces.
- Stack: React 19, TypeScript, Vite 8, Tailwind 4. No había lock ni node_modules. `npm` es el gestor documentado en el export.
- Herramientas disponibles y ejecutadas: Node `v24.18.0`, npm `12.0.2`, Git `2.52.0.windows.1`. Python y FFmpeg/FFprobe disponibles para inventario y muestras locales.
- Git inicializado en la raíz. Commit original recuperable: `239c017` (`Conservar version original de Hotel Ucla Center importada de AI Studio`); configuración/dependencias: `f194362`. Identidad Git existente reutilizada sin modificar configuración. Sin remoto configurado.
- Docs: 10 JPEG y 3 MP4; fotos revisadas visualmente, videos inspeccionados con FFprobe y muestras. El clip elegido se revisó de principio a fin y se reprodujo completo en escritorio. Catálogo en [[documentos-y-activos]], con originales, copias elegidas y pendientes.

## Ejecución local lista
- Instalación completada con npm y `package-lock.json` generado. Primer intento: fallo DNS del entorno restringido; reintento con permiso de red. Se resolvió además `ERESOLVE` ajustando esbuild de `^0.25.0` a `^0.28.0`, compatible con el Vite del export. No se usaron `--force` ni `--legacy-peer-deps`.
- Versiones resueltas en el lock: Vite `8.3.5`, esbuild `0.28.2`, TypeScript `7.0.2`. npm notificó scripts de instalación bloqueados de tres paquetes; no se ampliaron permisos de scripts y las comprobaciones de compilación funcionaron.
- Vista local iniciada y verificada: **http://localhost:3000/**, servidor ligado a `127.0.0.1`. Ejecución actual: `npm.cmd run dev`; sesión de esta ejecución `94212` (temporal, puede terminar al cerrar el entorno). Reutilizar si sigue activo; si no, abrir `../iniciar-pagina.cmd`. No iniciar otra copia sobre el mismo puerto.
- Comandos comprobados desde `hotel-ucla-center/`: `npm.cmd run dev`, `npm.cmd run lint` (`tsc --noEmit`) y `npm.cmd run build`. Para reinstalar con el lock se dispone de `npm.cmd ci` (no se ejecutó porque la instalación ya funciona). `preview` existe, no se ejecutó. No hay script de tests en el original. `clean` no se ejecutó.
- No se detectaron imports activos de Gemini, backend, pagos o API de reservas en el código inspeccionado. La instrucción del README sobre Gemini es genérica y no implica que haya que introducir una clave.

## Primera mejora realizada
Por elección explícita del usuario se incorporó el video `Docs/WhatsApp Video 2026-10-28 at 3.15.40 PM.mp4` en **Galería → Videos & Recorridos Guiados → Nuestras Habitaciones en Detalle**. Duración real 8,433333 segundos, sin pista de audio. Se copió el MP4 elegido y se extrajo una portada; el original conserva su hash. Reproductor con controles nativos y adaptación vertical/horizontal, cierre, Escape y manejo de foco. Los otros dos recorridos se muestran como “Video pendiente”, sin reproducción simulada. No se cambiaron tarifas, contactos, títulos ni fotografías de otras secciones.

## Comprobaciones ejecutadas
| Comprobación | Resultado y alcance |
| --- | --- |
| TypeScript, `npm.cmd run lint` | Correcto en la versión final |
| Producción, `npm.cmd run build` | Correcto; MP4 y portada incluidos en dist |
| HTTP de la página y del MP4 | 200; video servido como `video/mp4`, 1.629.156 bytes |
| Video en navegador, escritorio 1280×720 | Archivo cargado (`readyState: 4`), 480×848 tras rotación; reproducción hasta `ended: true`, 8,433333 s; reproducción y pausa verificadas con controles nativos |
| Video en celular 390×844 | Reproducción iniciada y observada; controles y cierre visibles; ancho sin desbordamiento en el reproductor |
| Celular horizontal 844×390 | Panel con desplazamiento vertical; cierre visible dentro del viewport |
| Teclado del reproductor | Escape cierra y devuelve foco; Shift+Tab/Tab entre extremos permanece en el diálogo |
| Botón principal de reservas | Abre el cotizador local; se cerró sin confirmar ni enviar nada |
| Imágenes y anclas internas | Sin imágenes cargadas rotas ni destinos de ancla inexistentes detectados en el recorrido; dependencias remotas siguen presentes |
| Encabezado en móvil | **Pendiente previo detectado:** el menú queda fuera de pantalla a 390 px por el ancho del botón de reservas; documentado, sin modificar |
| Memoria y originales | 7 páginas wiki con YAML y enlaces resueltos; 13 originales sin duplicados exactos; ZIP y copia del video con hashes verificados |
| Privacidad/versionado | Docs, ZIP, .local, secretos, node_modules y dist ignorados; archivos de tarea revisados explícitamente antes de agregar |

Aviso de compilación no bloqueante: Vite anticipa que una futura configuración nativa no admitirá `__dirname` en `vite.config.ts`. No impide el build actual y no se cambió el framework ni se silenció el aviso.

Capturas locales (ignoradas por Git): `../.local/video-en-escritorio.jpg` y `../.local/video-en-celular.jpg`. La página del navegador se conserva como entregable.

## Publicación y alcance
- **Vista local:** lista, revisada y abierta en el navegador; requiere el servidor local activo.
- **GitHub/remoto:** no configurado, nada subido.
- **Sitio público:** no comprobado. No hay autorización de despliegue, dominio/DNS ni costos.
- Contacto por WhatsApp: destino identificado en código; no se enviaron mensajes y recepción pendiente de prueba autorizada.

## Siguiente paso
La configuración inicial y la primera mejora están realizadas. Elegir el siguiente ajuste en [[pendientes]]: se recomienda corregir el espacio del encabezado en celular. Antes de una publicación, validar contenido comercial/contactos, destino de LobbyPMS y autorización de despliegue. La recepción de WhatsApp sigue sin probarse porque no hay canal de prueba autorizado.
