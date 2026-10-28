# Hotel Ucla Center · carpeta de trabajo

Esta carpeta conserva la página exportada de Google AI Studio y su memoria de mantenimiento.

- Abre `iniciar-pagina.cmd` para iniciar la vista local cuando las dependencias estén instaladas.
- Deposita materiales de la empresa en `Docs/`, sin necesidad de ordenarlos previamente.
- Continúa conversando con Codex en esta misma carpeta. Las reglas viven en `AGENTS.md` y el contexto en `wiki/index.md`.
- Consulta `wiki/estado-del-proyecto.md` para las comprobaciones reales y `wiki/pendientes.md` para lo que falta.

El código está en `hotel-ucla-center/`. El ZIP y los originales de Docs se conservan intactos, fuera de los archivos versionados. Una vista local o un commit no publican la página.

Repositorio del usuario: [juancarlosfc5/hotel-ucla](https://github.com/juancarlosfc5/hotel-ucla), rama `main`. Código subido por solicitud expresa el 2026-10-28. El alojamiento web todavía no está configurado.

Para mantenimiento técnico desde `hotel-ucla-center/`: `npm.cmd ci` (con lock), `npm.cmd run lint`, `npm.cmd run build` y `npm.cmd run dev`. No se necesita una clave Gemini para los componentes actuales de la landing.
