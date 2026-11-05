# Playbook: conseguir clientes para un negocio local de servicios

Método para repetir con AJB en una zona nueva o con otro negocio. Está escrito a partir de lo que
pasó aquí, incluidos los errores. **Aún no está validado por resultados:** AJB no tiene su primer
cliente por este canal. Cada fase se marca como probada cuando haya datos en `BITACORA.md`.

## La idea central

El crecimiento de un negocio local se apoya en un ciclo, no en una página:

```
cliente bien atendido -> reseña y referido -> más visibilidad y confianza -> siguiente cliente
```

Sin clientes, ese ciclo no arranca. Por eso los primeros contratos casi nunca salen del SEO: salen de
vender directamente. El sitio y la ficha hacen que ese esfuerzo cierre y que luego se multiplique.

## Orden de trabajo

No se pasa a la siguiente fase sin cumplir la condición de salida. En AJB se invirtió el orden:
primero optimización, y seis meses después nadie había probado si el formulario llega.

| Fase | Qué se hace | Condición de salida |
|---|---|---|
| 0. Verdad | Confirmar con el dueño cada dato: dirección, años, licencias, seguros, zonas, capacidad | Lista firmada; nada dudoso publicado |
| 1. Ruta del lead | Enviar un formulario real, llamar al teléfono, escribir por WhatsApp | Los tres llegan a una persona que responde |
| 2. Medición | Analítica, Search Console, registro de leads | Se puede responder cuánta gente entró y qué hizo |
| 3. Publicación | Subir el sitio, enviar sitemap, avisar a Bing | El buscador lista las páginas |
| 4. Ficha y directorios | Reclamar la ficha de Google; Yelp, BBB y similares con datos idénticos | Ficha verificada y nombre, dirección y teléfono iguales en todas partes |
| 5. Venta directa | 20 contactos a la semana en la zona más cercana | Primeros contratos |
| 6. Reseñas | Pedir reseña a cada cliente con el enlace directo | Una reseña real por cada trabajo terminado |
| 7. Contenido local | Casos reales, con fotos y permiso del cliente | Cada página tiene prueba de esa zona |
| 8. Medir y repetir | Revisión mensual; un experimento cada vez | Se sabe qué canal trae contratos |

## Reglas de contenido

Son las que se violaron aquí y costaron retrabajo.

1. **No se publica nada que el dueño no haya confirmado.** Ni promesas de operación, ni certificaciones,
   ni testimonios. En Estados Unidos la FTC sanciona los testimonios falsos.
2. **Primero la zona donde realmente se puede servir.** Una página por ciudad solo si se atiende esa ciudad.
3. **Fotos reales antes que bonitas.** Un piso brillante fotografiado con el celular prueba más que una
   imagen generada.
4. **Decir qué, para quién y dónde en la primera pantalla,** más teléfono visible.
5. **Cada página permite contactar sin salir de ella.**

## Reglas de verificación

1. Comprobar el estado real antes de opinar: qué está publicado, si el PR existe, qué dice la cabecera.
2. Un error de red en la máquina propia no es un error del sitio: repetir con otra fuente.
3. Una métrica sin datos no es cero. Si la API no devuelve nada, se reporta "sin medir".
4. Un envío de prueba interceptado valida el código, no la entrega. La entrega solo se prueba con uno real.
5. Las imágenes referenciadas con URL absoluta deben existir en `dist/`, no solo en el repo.
6. Un ZIP hecho en Windows puede llevar rutas con `\`, que en un servidor Linux no crean carpetas.
   Antes de entregarlo, comprobar que las entradas usan `/`, como `es/index.html`.

## Tablero mensual

Se llena el día 1 de cada mes. Sin este cuadro no hay forma de saber qué funciona.

| Mes | Clics Google | Impresiones | Visitas | Llamadas | Formularios | Cotizados | Cerrados | Reseñas | Ingreso mensual nuevo |
|---|---|---|---|---|---|---|---|---|---|
| | | | | | | | | | |

**El número que importa es "Cerrados".** Con él se calcula el costo por contrato de cada canal, y solo
entonces tiene sentido invertir más en el que gana. El crecimiento rápido, si llega, viene de repetir el
canal que cierra y de sumar zonas una por una, no de agregar páginas.

## Cómo clonarlo

Todo el sitio se regenera con datos, sin programar:

| Archivo | Qué cambiar |
|---|---|
| `tools/cities.json` | Ciudades, textos de cada zona, tipos de instalación y coordenadas |
| `tools/build-city-pages.mjs` | `BASE` (coordenadas de la sede), `FACILITIES` y `PHOTOS` |
| `tools/partials.mjs` | Teléfono, textos del formulario y de la barra móvil |
| `js/lead.js` | `WEBHOOK`, `GA_ID`, `PHONE` y `WHATSAPP` |
| `public/.htaccess`, `tools/indexnow.mjs`, `tools/build-sitemap.mjs` | El dominio |

```bash
node tools/build-city-pages.mjs
node tools/apply-site-blocks.mjs
node tools/build-sitemap.mjs
node tools/build-keywords.mjs
npm run build
```

Después de publicar, avisar a Bing:

```bash
node tools/indexnow.mjs
```

`tools/apply-site-blocks.mjs` contiene reemplazos propios de AJB; al clonar, revisa sus listas `CLAIMS`
y `HERO` antes de correrlo.
