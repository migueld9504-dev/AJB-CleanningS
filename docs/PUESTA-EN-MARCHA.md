# Puesta en marcha — qué tiene que hacer Miguel

Estado al 29 de octubre de 2026: **nada de esto está en línea todavía.** El sitio público
sigue siendo la versión de mayo. Los pasos están en orden de impacto: el 1 y el 3 son los
que mueven la aguja, el resto son consecuencia.

---

## Paso 1 — Publicar el sitio nuevo (lo más importante)

Hay 5 commits esperando en la rama `seo-aeo-v2`. Mientras no se publiquen, el trabajo no
existe para Google.

### 1.1 Fusionar el PR

1. Abre https://github.com/migueld9504-dev/AJB-CleanningS/pulls
2. Entra al PR de `seo-aeo-v2` y pulsa **Merge pull request**.
   (Si nunca llegaste a abrirlo: https://github.com/migueld9504-dev/AJB-CleanningS/pull/new/seo-aeo-v2)

### 1.2 Generar los archivos a subir

En la carpeta del proyecto:

```bash
npm run build
```

Eso deja todo listo dentro de `dist/`. **Lo que se sube es el contenido de `dist/`, no la
carpeta `dist` en sí.**

### 1.3 Subirlo a Hostinger

En hPanel → **Administrador de archivos** → carpeta `public_html`:

1. **Primero haz una copia de seguridad.** hPanel → Copias de seguridad → crear una manual.
   Si algo sale mal, es tu marcha atrás.
2. Borra el contenido viejo de `public_html`. Importante: hay que borrar el `sitemap.xml`
   viejo y el `index.html` viejo, porque si no quedan conviviendo con los nuevos.
3. Sube `ajb-site.zip` y usa **Extraer** dentro de `public_html`.
4. Comprueba que en `public_html` quedaron, entre otros: `index.html`, la carpeta `es/`,
   `locations.html`, `sitemap.xml`, `robots.txt`, `llms.txt`, `services.md` y `assets/`.

> Si prefieres FTP, es el mismo contenido hacia el mismo destino. Y si en hPanel tienes
> activado el despliegue por Git, se puede automatizar; eso lo vemos aparte.

### 1.4 Comprobar que quedó bien

Abre estas cinco direcciones. Las cinco deben cargar, hoy las cuatro últimas dan 404:

- https://ajbcleaningservices.com/
- https://ajbcleaningservices.com/es/
- https://ajbcleaningservices.com/locations.html
- https://ajbcleaningservices.com/commercial-cleaning-windsor-ct.html
- https://ajbcleaningservices.com/sitemap.xml  ← debe listar 54 direcciones, no 5

---

## Paso 2 — Avisarle a Google que hay sitio nuevo

En [Google Search Console](https://search.google.com/search-console), con la propiedad de
ajbcleaningservices.com:

1. **Sitemaps** → envía `sitemap.xml` otra vez. Antes declaraba 5 páginas, ahora 54.
2. **Inspección de URLs** → pega estas y pulsa *Solicitar indexación* en cada una:
   - la página de inicio
   - `/es/`
   - `/locations.html`
   - `/commercial-cleaning-windsor-ct.html`
   - `/commercial-cleaning-hartford-ct.html`

   Google rastreará el resto solo; esas cinco son para acelerar el arranque.
3. Anota la fecha. Es tu punto cero: a partir de ahí las comparaciones tienen sentido.

---

## Paso 3 — Reclamar la ficha de Google (gratis)

Sigue sin reclamar, con 2 fotos y cero reseñas. Es lo que más pesa para que un cliente de
Windsor o Hartford te encuentre, más que todo lo del sitio.

### 3.1 Reclamarla

1. Busca "AJB Cleaning Services LLC" en Google Maps.
2. **Reclamar este negocio** → inicia sesión.
3. Usa una cuenta de Google **del negocio**, no una personal. Si la reclamas con tu cuenta,
   el día que te separes del proyecto Julio pierde el activo. A ti te agregan como
   administrador.
4. **No crees una ficha nueva.** Si creas un duplicado en lugar de reclamar la existente,
   Google suspende las dos.

### 3.2 Verificar por video

Google retiró la verificación por postal el 3 de julio de 2026. Ahora es video: **una sola
toma, continua, sin cortes ni edición**, que muestre tres cosas:

| Qué | Cómo |
|---|---|
| Dónde estás | La calle, el número, negocios vecinos. Que se reconozca Windsor |
| Que el negocio existe ahí | **Letrero permanente con "AJB Cleaning Services"** |
| Que tú lo manejas | Abrir con llave, entrar, mostrar equipo, productos, vehículo rotulado, el registro de la LLC o facturas con el nombre |

**Lo que más rechazos provoca es el letrero.** Si no hay rótulo en 80 Lamberton Rd, ponlo
antes de grabar: cuesta poco y es lo que decide la verificación.

Antes de grabar, revisa si la ficha debe marcarse como **negocio con área de servicio**
(atienden en el local del cliente). Muchos rechazos vienen de ese ajuste mal puesto.
Si deciden ocultar la dirección, avísame: el sitio hoy la muestra en las 54 páginas y hay
que dejarlos consistentes.

Si rechazan el video, Google dice el motivo en "Problemas de la revisión" en la app de
Maps. Se corrige y se vuelve a enviar.

### 3.3 Apenas quede verificada

- **Corrige el horario.** La ficha dice que cierra a las 5 p.m. porque lo pusieron usuarios
  desconocidos; el sitio dice 24/7.
- **Sube 20 o 30 fotos.** Hay 111 imágenes reales en el repo y la ficha tiene 2.
- Categoría principal "Servicio de conserjería" está bien; añade secundarias.
- Comprueba que el nombre, la dirección y el teléfono queden **idénticos** a los del sitio:
  AJB Cleaning Services, LLC · 80 Lamberton Rd, Windsor, CT 06095 · +1 860-931-2274

> Cuidado: al reclamar la ficha empiezan las llamadas y correos de gente que se hace pasar
> por Google pidiendo dinero para "activarla". Google no cobra por esto nunca.

---

## Paso 4 — Reseñas

Es lo único que no se puede acelerar, así que empieza el mismo día que se verifique.

1. En el panel de la ficha, copia el **enlace corto para reseñas**.
2. Mándaselo a los clientes actuales. Nadie deja reseña si no se la piden.
3. Responde todas, también las malas. Google valora la interacción y los clientes leen las
   respuestas más que las quejas.

Meta realista: 15 o 20 reseñas reales en los primeros 90 días. Con eso ya compites en el
bloque local de Windsor y alrededores.

No compres reseñas. Google las detecta y la sanción cuesta más que el beneficio.

---

## Paso 5 — Medir (cuando los pasos 1 a 3 estén hechos)

Medir un sitio sin publicar no dice nada, por eso va al final.

- **Google Search Console** es gratis, oficial y suficiente durante meses. Impresiones,
  clics y posición media por consulta.
- **SerpBear** (opcional) añade seguimiento diario por palabra clave y ubicación. Las 82
  palabras ya están preparadas en `tools/keywords.csv` y `tools/keywords.txt`, en tres
  tandas. Empieza por la tanda 1.
  - Necesita una fuente de datos SERP (ScrapingAnt, ScrapingRobot, SearchApi, SerpApi,
    HasData o proxies propios). Varias tienen plan gratuito limitado: **verifica el cupo
    actual antes de comprometerte**, cambian seguido.
  - No lo instales en tu portátil: solo registraría datos cuando la máquina esté encendida.
    Va en un servidor. El propio proyecto menciona Fly.io y mogenius con plan gratuito.
  - Si lo conectas a Search Console, muestra visitas reales por palabra clave.

---

## Qué NO hagas

- **No compres reseñas ni enlaces.** Es la vía rápida a una penalización manual.
- **No pagues por "verificar" la ficha.** Es gratis siempre.
- **No crees una segunda ficha de Google.** Duplicado = suspensión de ambas.
- **No cambies la dirección en el sitio sin avisarme.** Las 54 páginas, el schema y la ficha
  tienen que decir exactamente lo mismo.

---

## Cómo regenerar las cosas (referencia técnica)

```bash
node tools/build-city-pages.mjs   # regenera las 42 páginas de ciudad + los 2 índices
node tools/build-sitemap.mjs      # regenera el sitemap leyendo el canonical de cada página
node tools/build-keywords.mjs     # regenera la lista de palabras clave
npm run build                     # genera dist/ para subir
```

Las ciudades se editan en `tools/cities.json`. Si agregas una, corre los tres scripts y el
build: las entradas de Vite y el sitemap se descubren solos.
