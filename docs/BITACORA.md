# Bitácora de AJB Cleaning Services

Qué se hizo, qué se midió y qué se aprendió, con fecha. Si el crecimiento llega, este archivo
es la prueba de qué lo causó. **Regla: no se escribe nada aquí que no se haya comprobado.**

## Línea base al 5 de noviembre de 2026

El sitio público todavía es la versión del 27 de mayo. Estos son los datos del punto de partida.

| Dato | Valor | Cómo se comprobó |
|---|---|---|
| Dominio registrado | 3 de mayo de 2026 (6 meses) | RDAP de Verisign |
| Última publicación del sitio | 27 de mayo de 2026 | Cabecera `Last-Modified` |
| Páginas en el índice de Bing | 0 | `site:ajbcleaningservices.com` en Bing |
| Páginas en el índice de Google | **Sin medir** | Google pidió CAPTCHA; lo mira Miguel en Search Console |
| Analítica | Ninguna | Sin `gtag` ni similar en ninguna página |
| Visitas, llamadas y formularios | **Desconocidos** | No había con qué medirlos |
| Ficha de Google | Sin reclamar, 2 fotos, 0 reseñas | Vista pública de Maps, 29 de octubre |
| Velocidad en PageSpeed | **Sin medir** | La API sin clave devolvió 429 |
| Respuesta del servidor | 326 ms para la portada | Una medición; las lentas de esa sesión eran de la red local |
| Webhook del formulario | n8n responde `ok`, preflight 204 | `healthz` y `OPTIONS`, sin enviar nada |
| Correo del formulario | **Sin probar** | Un envío real escribe al buzón del negocio |

**Conclusión honesta:** "la página no funciona" no se puede confirmar ni descartar. Sin analítica
nadie sabe si entra alguien. Lo que sí se sabe es que la ficha está vacía, que Bing no conoce el
sitio y que seis meses es poco para un dominio nuevo sin enlaces ni reseñas.

## Cambios

### 5 de noviembre de 2026: conversión y veracidad (rama `seo-aeo-v2`, sin publicar)

| Cambio | Por qué |
|---|---|
| Quitada la pantalla de carga de la portada | Todo visitante esperaba 3,4 s antes de ver a qué se dedica AJB |
| Texto del hero visible desde el primer momento | Dependía de una animación de entrada |
| Hero nuevo: qué, para quién y dónde, más botón de llamar | Decía "premium para negocios ocupados" sin ubicación; el segundo botón era "Nuestra historia" |
| Formulario en cada página de ciudad y de servicio | Antes mandaban a la portada |
| Barra fija de llamar y cotizar en móvil, teléfono en el menú | Las páginas de aterrizaje no tenían ninguna acción visible en móvil |
| Cada lead indica página y fuente de origen | Sale en el correo sin tocar n8n; es la primera atribución del sitio |
| Si el envío falla, se ofrece teléfono y WhatsApp | Antes solo un `alert` en inglés |
| Analítica lista para activarse | Falta el ID de GA4 en `js/lead.js`; mide clics de llamada, WhatsApp y leads |
| Corregido "OSHA Certified" y "EPA-certified"; quitado "Green Seal" | OSHA no certifica empresas de limpieza, la EPA registra desinfectantes y Green Seal no está en el manual de marca |
| Reescrito el contenido de las 42 páginas de ciudad | Ver "Errores míos" |
| Fotos reales de trabajos en las páginas de ciudad | Antes usaban una imagen que parece generada por IA y un `alt` que describía una cuadrilla inexistente |
| `.htaccess`: `www` redirige al dominio sin `www` | `www` servía el mismo sitio sin redirigir |
| Imágenes para redes publicadas en `/img/` | El build no las copiaba |
| `lastmod` real desde git en el sitemap | Antes marcaba todo como cambiado hoy |
| IndexNow listo en `tools/indexnow.mjs` | Avisa a Bing tras publicar |
| Quitados el botón de Instagram muerto y una meta de verificación inválida | Enlace a `#` y valor incorrecto |

Probado en el build de producción con el envío interceptado: validación, éxito, fallo, atribución y
móvil a 375 px. **Sin probar:** el `.htaccess` en LiteSpeed real y la llegada del correo.

### 1 de octubre de 2026: base técnica (misma rama, sin publicar)

Schema, imágenes de 107,6 MB a 17,5 MB, versión en español con hreflang `en-US`/`es-US`, 42 páginas
de ciudad, dirección corregida a Windsor y hero de páginas de servicio visible sin esperar 6,5 s.

## Errores míos que hay que tener presentes

Quedan aquí para que nadie los repita al replicar el método.

1. **Inventé promesas de operación en las páginas de ciudad.** Fregadoras montables, supervisor
   asignado, inicio en una semana, cuentas atendidas antes de las 7 a. m., rutas programadas. Nadie
   las confirmó. Las quité el 5 de noviembre. Nunca se publicaron.
2. **Dije que el PR "ya tenía los commits".** El repo tiene 0 PR: nunca se abrió.
3. **Di por bueno "CLS = 0".** La misma API del navegador no devolvía ninguna métrica de pintura, así
   que ese cero no prueba nada. El CLS sigue sin medir.
4. **Exageré el efecto del hero oculto en el LCP.** El texto tardaba 6,5 s, pero el elemento LCP medido
   es la imagen. Era un problema de experiencia real; lo del "LCP destrozado" no lo demostré.
5. **Dije que un 20 % de solapamiento dejaba las páginas "lejos" de la política de doorway pages.** Ese
   número no prueba cumplimiento. Lo que cuenta es que sirvan de verdad en esas ciudades.
6. **Presenté FAQPage como una gran victoria.** Google limita ese resultado enriquecido a sitios de
   gobierno y salud desde 2023. Sigue siendo útil para motores de IA, no como estrellas o desplegables.
7. **Afirmé sin fuente que un duplicado de ficha suspende ambas.** Es un riesgo conocido, no una regla
   que haya verificado. Quedó redactado así en la lista de tareas.
8. **El ZIP del 29 de octubre tenía rutas con `\`.** Extraído en Hostinger podía romper las carpetas.
   Nunca se subió. Usa solo `ajb-site-2026-11-05.zip`, ya comprobado.

## Falsas alarmas descartadas

Para no volver a perseguirlas.

- **"El webhook no existe":** el error de DNS era de esta red. Con resolvers externos el dominio resuelve
  y n8n responde.
- **"El formulario falla desde `www`":** n8n acepta el origen que recibe; desde `www` el preflight pasa.
- **"El servidor tarda 47 s":** era la red local. La misma URL respondió en 326 ms poco después.

## Experimentos

Un cambio cada vez, con fecha, para saber qué funcionó. Se llena cuando haya analítica.

| Fecha | Cambio | Métrica | Antes | Después (a 30 días) | Decisión |
|---|---|---|---|---|---|
| | | | | | |

## Registro de leads

Cada lead, sin excepción. Es el dato con el que se decide todo lo demás.

| Fecha | Fuente | Página | Tipo de edificio | Ciudad | ¿Cotizado? | ¿Cerrado? | Valor mensual |
|---|---|---|---|---|---|---|---|
| | | | | | | | |
