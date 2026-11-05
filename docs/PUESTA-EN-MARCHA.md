# Lo que Miguel y Julio tienen que hacer

Actualizado el 5 de noviembre de 2026. Está en orden: lo primero es lo que más puede explicar que no
haya clientes. Marca cada casilla al terminar. Lo técnico que falta lo hago yo cuando me avises.

## Hoy mismo (30 minutos, gratis)

- [ ] **Probar el formulario actual.** Entra a https://ajbcleaningservices.com/#contact, envía una solicitud
  con tus datos y revisa si llega a `ajbcleanningservicesny@gmail.com`, incluida la carpeta de spam. Yo
  comprobé que el servidor responde, no que el correo llegue. Si no llega, avísame: es lo primero que se arregla.
- [ ] **Revisar ese buzón completo.** Busca "Nueva Cotizacion Web". Si hay solicitudes de meses atrás sin
  responder, llámalas hoy.
- [ ] **Llamar al +1 860-931-2274 desde otro número.** ¿Contesta una persona? ¿Hay buzón de voz con el nombre de la empresa?
- [ ] **Mirar Search Console** (https://search.google.com/search-console). Anótame dos cosas: cuántas páginas
  están indexadas y cuántas impresiones hubo en 3 meses. Si no tienes acceso, dímelo.

## Confirmar los datos del negocio (Julio)

Están publicados o a punto de publicarse. Si algo es falso es un riesgo legal en Estados Unidos, y también
de reputación si un cliente lo pregunta. Responde sí o no a cada uno:

- [ ] **Los testimonios de la portada** (Dr. Rivera, Sarah M., James L.): ¿son clientes reales que autorizaron
  su uso? La sección dice "Real Reviews, Real Clients". Si no lo son, hay que quitarlos: la FTC sanciona
  los testimonios falsos.
- [ ] **Fundada en 1998 y 28 años de operación.** El dominio es de mayo de 2026; el dato necesita respaldo.
  ¿La LLC figura en el registro de Connecticut?
- [ ] **Licencia y seguro:** ¿General Liability y Worker's Comp vigentes? ¿Pueden emitir certificado (COI)?
- [ ] **"Bonded":** ¿tienen fianza?
- [ ] **Capacitación OSHA:** ¿hay certificados de los cursos del personal? Yo cambié "OSHA Certified" por "OSHA-trained".
- [ ] **Verificación federal de antecedentes y acuerdos de confidencialidad (NDA)** del personal: ¿se hacen?
- [ ] **Aspiradoras HEPA, productos ecológicos y garantía de corrección en 24 horas:** ¿es lo que hacen hoy?
- [ ] **Servicio 24/7:** la ficha de Google dice que cierra a las 5 p. m. ¿Cuál es el horario real?
- [ ] **"La única AJB original" y los avisos de imitadores:** ¿hay un caso real detrás? A un cliente nuevo le genera
  desconfianza y puede traer problemas con la otra empresa. Yo los quitaría.
- [ ] **Zonas reales:** ¿pueden atender hoy NY, NJ y PA, o solo Connecticut? Si no, retiro esas páginas.

## Publicar el sitio nuevo (lo más urgente del trabajo técnico)

Nada de lo hecho desde octubre está en línea. Publicar no depende del PR: basta con subir el ZIP.

- [ ] Resuelve antes lo de los testimonios: el ZIP los incluye tal como están hoy.
- [ ] hPanel → **Copias de seguridad** → crea una manual.
- [ ] **Administrador de archivos** → `public_html` → descarga una copia del `.htaccess` actual, si existe
  (activa "mostrar archivos ocultos").
- [ ] Borra el resto del contenido de `public_html` y sube `ajb-site-2026-11-05.zip`. Usa **Extraer** dentro de `public_html`.
- [ ] Comprueba que cargan:
  - https://ajbcleaningservices.com/
  - https://ajbcleaningservices.com/es/
  - https://ajbcleaningservices.com/commercial-cleaning-windsor-ct.html
  - https://www.ajbcleaningservices.com/ (debe redirigir, sin `www`)
- [ ] **Si el sitio da error 500 o entra en bucle,** renombra `.htaccess` a `.htaccess-off`. Es lo único que no pude
  probar en un servidor igual al tuyo. Luego avísame.
- [ ] Envía un formulario de prueba desde la página de Windsor y confirma que el correo trae la línea `Page:`.
- [ ] **Avísame.** Yo aviso a Bing, mido la velocidad con el sitio real y actualizo la bitácora.

## Medir

- [ ] Crea una propiedad en **Google Analytics 4** (gratis) y pásame el ID `G-XXXXXXXXXX`. Lo activo y queda
  midiendo llamadas, WhatsApp y formularios. Sin esto seguimos sin saber si entra alguien.
- [ ] En Search Console, reenvía `sitemap.xml` y pide indexar inicio, `/es/`, `/locations.html` y las páginas de Windsor y Hartford.
- [ ] Anota cada lead en la tabla de `BITACORA.md`.

## Ficha de Google (gratis)

Es la mayor palanca para alguien de Windsor o Hartford que busca limpieza.

- [ ] Busca "AJB Cleaning Services LLC" en Maps → **Reclamar este negocio**, con una cuenta de Google del negocio.
  A ti te agregan como administrador. No crees una ficha nueva: un duplicado puede dar problemas de suspensión.
- [ ] Verifica con el método que te ofrezca Google. Según guías de 2026 suele ser un video continuo con la calle,
  el letrero y prueba de que operan ahí. **Si no hay letrero con el nombre en 80 Lamberton Rd, ponlo antes.**
- [ ] Si no reciben clientes en esa dirección, marca la ficha como negocio con área de servicio y avísame.
- [ ] Corrige el horario y sube 20 o 30 fotos reales.
- [ ] Nombre, dirección y teléfono idénticos al sitio: AJB Cleaning Services, LLC · 80 Lamberton Rd, Windsor, CT 06095 · +1 860-931-2274.
- [ ] Desconfía de quien llame a cobrar por "activar" la ficha: es gratis.

## Lo que yo no puedo hacer

| Qué falta | Por qué no puedo | Quién |
|---|---|---|
| Reclamar la ficha y grabar el video | Requiere estar en el lugar y una cuenta del negocio | Julio |
| Conseguir reseñas | Solo pueden darlas clientes reales | Julio |
| **Vender: llamar y visitar** | Requiere hablar con los clientes en su nombre | Julio o vendedor |
| Fotos reales de la cuadrilla con uniforme y letrero | La foto principal parece generada por IA; hace falta una real | Julio |
| Subir el sitio a Hostinger | No tengo acceso ni debo manejar la contraseña | Miguel |
| Crear GA4 y entrar a Search Console | Son cuentas de ustedes | Miguel |
| Correo profesional | `ajbcleanningservicesny@gmail.com` tiene un error de escritura y dice NY. El dominio ya tiene correo en Hostinger: crea `info@ajbcleaningservices.com` y me pasas la dirección | Miguel |
| Perfiles en Yelp, BBB, Angi y Thumbtack | Requieren cuenta y aceptar términos. Yelp y BBB salen en la primera página de Bing para "commercial cleaning Windsor CT" | Miguel |
| Instagram o Facebook | No me pasaron una cuenta; quité el botón muerto | Miguel |
| Casos reales con permiso del cliente | Solo ustedes tienen la relación | Julio |

## Vender directamente: lo que puede traer el primer contrato

Los contratos de limpieza comercial suelen cerrarse hablando con quien administra el edificio. El SEO local
tarda meses, y este dominio tiene seis. Esto puede empezar hoy, gratis, mientras el resto madura.

**Meta:** 20 contactos a la semana, solo en Windsor, Bloomfield, Hartford y South Windsor. Anótalos todos.

**A quién:** administradores de edificios de oficinas, consultorios médicos y dentales, iglesias, colegios
privados, gimnasios y contratistas que entregan obras. El corredor de Day Hill Road, en Windsor, es un buen punto de partida.

**Llamada** (adáptala a lo que sea cierto):

> Hi, this is [name] from AJB Cleaning Services, here in Windsor. Who takes care of the cleaning for your
> building? ... We clean offices and medical spaces around Hartford, licensed and insured. I am not asking you
> to switch today. Could I stop by for ten minutes, see the space and send you a free quote to compare?

**Correo:**

> Subject: Cleaning quote for [building name]
>
> Hi [name], I run AJB Cleaning Services in Windsor, close to your building. We clean offices and medical
> spaces in the Hartford area, licensed and insured. If you ever want a second price to compare, I can do a
> free ten-minute walkthrough this week. Photos of our work: https://ajbcleaningservices.com/#gallery
> [name] · +1 860-931-2274

**Cada trabajo:** fotos de antes y después, reseña en Google el mismo día, y pregunta quién más podría necesitarlo.

**Si hay presupuesto,** pregúntame antes de gastar. Las opciones a evaluar son los anuncios por zona en Google y las
plataformas de pago por lead. No conviene pagar por tráfico hasta probar que el formulario y el teléfono responden.

## Lo que no conviene hacer

- Comprar reseñas o enlaces.
- Pagar por "verificar" la ficha.
- Cambiar la dirección en un solo sitio: la ficha, el sitio y los directorios tienen que coincidir.
- Agregar más páginas o ciudades antes de tener clientes en las primeras.
