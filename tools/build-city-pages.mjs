/**
 * Genera las paginas por ciudad en ingles y espanol a partir de tools/cities.json
 *
 *   node tools/build-city-pages.mjs
 *
 * Salida:
 *   <slug-en>.html                 paginas EN en la raiz
 *   es/<slug-es>.html              paginas ES
 *   locations.html / es/ubicaciones.html   hubs que las enlazan
 *
 * Regla de contenido: aqui solo entra lo que se pueda respaldar. Hechos del mercado local
 * (cities.json), servicios del manual de marca y tipos de trabajo que aparecen en la
 * galeria real (FACILITIES). Nada de promesas de operacion que el dueno no haya
 * confirmado: horarios, equipos, supervisores, tiempos de arranque.
 */
import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { callBar, leadSection, navPhone, PHONE, PHONE_HREF } from './partials.mjs';

const SITE = 'https://ajbcleaningservices.com/';
const ORG = SITE + '#organization';
const BASE = { lat: 41.8646505, lng: -72.6644873 }; // 80 Lamberton Rd, Windsor, CT
const cities = JSON.parse(readFileSync('tools/cities.json', 'utf8'));

const enSlug = (c) => `commercial-cleaning-${c.slug}.html`;
const esSlug = (c) => `limpieza-comercial-${c.slug}.html`;
const enUrl = (c) => SITE + enSlug(c);
const esUrl = (c) => SITE + 'es/' + esSlug(c);

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const attr = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;');

const STATE_ES = { CT: 'Connecticut', NY: 'Nueva York', NJ: 'Nueva Jersey', PA: 'Pensilvania' };

// Distancia en linea recta a la base, redondeada a 5 millas: es un dato, no una promesa
function miles(c) {
  const r = (d) => d * Math.PI / 180;
  const a = Math.sin(r(c.lat - BASE.lat) / 2) ** 2 +
    Math.cos(r(BASE.lat)) * Math.cos(r(c.lat)) * Math.sin(r(c.lng - BASE.lng) / 2) ** 2;
  const d = 3959 * 2 * Math.asin(Math.sqrt(a));
  return Math.max(5, Math.round(d / 5) * 5);
}

// Fotos reales de trabajos de AJB, no imagenes de banco ni generadas
const PHOTOS = [
  { file: 'oficina-recepcion-7', w: 1600, h: 747, en: 'Office floors after an AJB cleaning', es: 'Pisos de oficina después de una limpieza de AJB' },
  { file: 'auditorio-5', w: 1600, h: 900, en: 'Event hall floors after an AJB cleaning', es: 'Pisos de salón de eventos después de una limpieza de AJB' },
  { file: 'iglesia-1', w: 1599, h: 899, en: 'Church interior cleaned by AJB', es: 'Interior de iglesia limpiado por AJB' },
  { file: 'gym-3', w: 1920, h: 1440, en: 'Fitness center cleaned by AJB', es: 'Gimnasio limpiado por AJB' }
];

// Tipos de instalacion: salen del manual de marca y de las categorias de la galeria real
const FACILITIES = {
  office: { en: ['Offices and reception areas', 'Daily, weekly or monthly service for desks, restrooms, breakrooms, glass and floors.'], es: ['Oficinas y recepciones', 'Servicio diario, semanal o mensual de escritorios, baños, comedores, vidrios y pisos.'] },
  commercial: { en: ['Retail and commercial spaces', 'Entrances, glass, restrooms and floors for spaces customers walk through every day.'], es: ['Locales comerciales', 'Accesos, vidrios, baños y pisos para espacios por donde los clientes pasan a diario.'] },
  medical: { en: ['Clinics and medical offices', 'Disinfection of exam rooms, waiting areas and restrooms, following OSHA requirements.'], es: ['Clínicas y consultorios', 'Desinfección de salas de exploración, áreas de espera y baños, conforme a los requisitos de OSHA.'] },
  dental: { en: ['Dental offices', 'Medical-grade disinfection of treatment rooms and reception areas.'], es: ['Consultorios dentales', 'Desinfección de grado médico de salas de tratamiento y recepción.'] },
  school: { en: ['Schools and university buildings', 'Classrooms, halls, corridors and restrooms.'], es: ['Colegios y edificios universitarios', 'Aulas, salones, pasillos y baños.'] },
  hall: { en: ['Auditoriums and event halls', 'Floors, seating areas and restrooms, before and after events.'], es: ['Auditorios y salones de eventos', 'Pisos, áreas de asientos y baños, antes y después de cada evento.'] },
  church: { en: ['Churches', 'Sanctuaries, halls and restrooms.'], es: ['Iglesias', 'Templos, salones y baños.'] },
  gym: { en: ['Fitness centers', 'Floors, mirrors and locker rooms.'], es: ['Gimnasios', 'Pisos, espejos y vestidores.'] },
  dining: { en: ['Cafeterias and restaurants', 'Dining rooms, floors and restrooms.'], es: ['Cafeterías y restaurantes', 'Comedores, pisos y baños.'] },
  government: { en: ['Government buildings', 'Corridors, public restrooms and meeting rooms.'], es: ['Edificios públicos', 'Pasillos, baños públicos y salas de reuniones.'] },
  lab: { en: ['Laboratories', 'Medical-grade disinfection of the areas your lab designates for cleaning.'], es: ['Laboratorios', 'Desinfección de grado médico de las áreas que su laboratorio designe.'] },
  postcon: { en: ['Post-construction cleanup', 'Dust, debris and residue removal so renovated space is ready to occupy.'], es: ['Limpieza post-construcción', 'Retiro de polvo, escombros y residuos para que el espacio renovado quede listo.'] },
  floors: { en: ['Floor stripping and waxing', 'Stripping, polishing and waxing of wood, vinyl and marble with industrial machinery.'], es: ['Decapado y encerado de pisos', 'Decapado, pulido y encerado de madera, vinilo y mármol con maquinaria industrial.'] },
  residential: { en: ['Luxury condos and move-outs', 'White-glove service and deep move-in and move-out cleaning.'], es: ['Condominios de lujo y mudanzas', 'Servicio de guante blanco y limpieza profunda de entrada y salida.'] }
};

const SERVICES = [
  { en: ['Commercial &amp; office cleaning', 'commercial-cleaning-ny-nj.html'], es: ['Limpieza comercial y de oficinas', 'limpieza-comercial-oficinas-ny-nj.html'] },
  { en: ['Healthcare &amp; clinic cleaning', 'healthcare-cleaning-osha-certified.html'], es: ['Limpieza de clínicas y hospitales', 'limpieza-clinicas-hospitales-osha.html'] },
  { en: ['Post-construction cleanup', 'post-construction-cleaning-ny-nj-ct-pa.html'], es: ['Limpieza post-construcción', 'limpieza-post-construccion-ny-nj-ct-pa.html'] },
  { en: ['White-glove residential cleaning', 'luxury-residential-cleaning-white-glove.html'], es: ['Limpieza residencial de guante blanco', 'limpieza-residencial-lujo-guante-blanco.html'] }
];

const facilitiesOf = (c, lang) => c.types.map(k => FACILITIES[k][lang]);

function faqOf(c, lang) {
  const d = miles(c);
  const types = facilitiesOf(c, lang).map(f => f[0].toLowerCase());
  const list = lang === 'en'
    ? types.slice(0, -1).join(', ') + ' and ' + types[types.length - 1]
    : types.slice(0, -1).join(', ') + ' y ' + types[types.length - 1];
  const isBase = c.slug === 'windsor-ct';
  const far = c.tier === 2;
  if (lang === 'en') {
    return [
      [`Do you clean commercial buildings in ${c.city}, ${c.state}?`,
        isBase
          ? 'Yes. AJB Cleaning Services, LLC is based right here, at 80 Lamberton Rd, Windsor, CT 06095.'
          : `Yes. AJB Cleaning Services, LLC is based at 80 Lamberton Rd, Windsor, CT, roughly ${d} miles from ${c.city} in a straight line.` +
          (far ? ` ${c.city} is outside our home area, so we confirm crew availability for your address before quoting.` : '')],
      [`What kinds of facilities do you take on in ${c.city}?`,
        `In ${c.city} we most often quote ${list}. If your building is something else, tell us about it and we will let you know.`],
      [`How do I get a price for a building in ${c.city}?`,
        'We do not publish a flat rate card, because price depends on square footage, frequency and scope. Call us or send the form on this page and we schedule a physical or virtual walkthrough, then send you a proposal.']
    ];
  }
  return [
    [`¿Limpian edificios comerciales en ${c.city}, ${c.state}?`,
      isBase
        ? 'Sí. AJB Cleaning Services, LLC tiene su base aquí mismo, en 80 Lamberton Rd, Windsor, CT 06095.'
        : `Sí. AJB Cleaning Services, LLC tiene su base en 80 Lamberton Rd, Windsor, CT, a unas ${d} millas en línea recta de ${c.city}.` +
        (far ? ` ${c.city} queda fuera de nuestra zona principal, así que confirmamos la disponibilidad de cuadrillas para su dirección antes de cotizar.` : '')],
    [`¿Qué tipos de instalaciones atienden en ${c.city}?`,
      `En ${c.city} cotizamos sobre todo ${list}. Si su edificio es de otro tipo, cuéntenos y le decimos si podemos atenderlo.`],
    [`¿Cómo obtengo un precio para un edificio en ${c.city}?`,
      'No publicamos una tarifa fija, porque el precio depende de los pies cuadrados, la frecuencia y el alcance. Llámenos o envíe el formulario de esta página: agendamos una visita presencial o virtual y le enviamos una propuesta.']
  ];
}

const L = {
  en: {
    home: 'Home', locations: 'Locations', hub: 'locations.html', index: 'index.html',
    allServices: 'All Services', faqNav: 'FAQ', cta: 'Request a Quote',
    heroBadge: (c) => `📍 SERVING ${c.city.toUpperCase()}, ${c.state}`,
    h1: (c) => `COMMERCIAL CLEANING<br /><span class="text-gold">IN ${c.city.toUpperCase()}, ${c.state}</span>`,
    title: (c) => `Commercial Cleaning in ${c.city}, ${c.state} | AJB Cleaning`,
    whatWeClean: (c) => `What we clean in ${c.city}`,
    servicesHere: (c) => `Services you can request in ${c.city}`,
    coverage: (c) => `Areas around ${c.city}`,
    coverageLead: (c) => `Commercial properties in and around ${c.districts.en}. If your building is nearby, ask us.`,
    photos: 'Real photos of our work',
    photosLead: 'From AJB jobs in our portfolio.',
    faqTitle: 'Frequently Asked Questions',
    heroCta: 'Get a free quote',
    call: 'Call',
    nearbyTitle: 'Nearby service areas',
    nearbyLead: 'AJB Cleaning Services, LLC is based in Windsor, CT and covers New York, New Jersey, Connecticut and Pennsylvania.',
    allLocations: 'See all service areas',
    zips: 'ZIP codes in this area',
    footer: '© 2026 AJB Cleaning Services, LLC. All rights reserved. Registered, licensed, and insured since 1998.',
    langLink: 'ES', nearLabel: 'Commercial cleaning'
  },
  es: {
    home: 'Inicio', locations: 'Ubicaciones', hub: 'ubicaciones.html', index: '../index.html',
    allServices: 'Todos los Servicios', faqNav: 'Preguntas', cta: 'Solicitar Cotización',
    heroBadge: (c) => `📍 ATENDEMOS ${c.city.toUpperCase()}, ${c.state}`,
    h1: (c) => `LIMPIEZA COMERCIAL<br /><span class="text-gold">EN ${c.city.toUpperCase()}, ${c.state}</span>`,
    title: (c) => `Limpieza Comercial en ${c.city}, ${c.state} | AJB Cleaning`,
    whatWeClean: (c) => `Qué limpiamos en ${c.city}`,
    servicesHere: (c) => `Servicios que puede pedir en ${c.city}`,
    coverage: (c) => `Zonas alrededor de ${c.city}`,
    coverageLead: (c) => `Propiedades comerciales en y alrededor de ${c.districts.es}. Si su edificio queda cerca, pregúntenos.`,
    photos: 'Fotos reales de nuestro trabajo',
    photosLead: 'De trabajos de AJB en nuestro portafolio.',
    faqTitle: 'Preguntas Frecuentes',
    heroCta: 'Pedir cotización gratis',
    call: 'Llamar',
    nearbyTitle: 'Zonas de servicio cercanas',
    nearbyLead: 'AJB Cleaning Services, LLC tiene su base en Windsor, Connecticut, y cubre Nueva York, Nueva Jersey, Connecticut y Pensilvania (Estados Unidos).',
    allLocations: 'Ver todas las zonas de servicio',
    zips: 'Códigos postales de esta zona',
    footer: '© 2026 AJB Cleaning Services, LLC. Todos los derechos reservados. Registrados, con licencia y asegurados desde 1998.',
    langLink: 'EN', nearLabel: 'Limpieza comercial'
  }
};

function description(c, lang) {
  const types = facilitiesOf(c, lang).map(f => f[0].toLowerCase()).join(', ');
  const d = lang === 'en'
    ? `Commercial cleaning in ${c.city}, ${c.stateName}: ${types}. Free walkthrough and quote. Call ${PHONE}.`
    : `Limpieza comercial en ${c.city}, ${STATE_ES[c.state]}, EE. UU.: ${types}. Visita y cotización gratis.`;
  if (d.length <= 165) return d;
  return lang === 'en'
    ? `Commercial and office cleaning in ${c.city}, ${c.stateName}. Licensed and insured, based in Windsor, CT. Free quote: ${PHONE}.`
    : `Limpieza comercial y de oficinas en ${c.city}, ${STATE_ES[c.state]}, EE. UU. Con licencia y seguro, base en Windsor, CT. Cotización gratis.`;
}

const ld = (o) => '  <' + 'script type="application/ld+json">\n' +
  JSON.stringify(o, null, 2).split('\n').map(l => '  ' + l).join('\n') + '\n  </' + 'script>\n';

function schema(c, lang) {
  const url = lang === 'en' ? enUrl(c) : esUrl(c);
  const hub = lang === 'en' ? SITE + 'locations.html' : SITE + 'es/ubicaciones.html';
  const t = L[lang];
  const inLang = lang === 'en' ? 'en-US' : 'es-US';

  const breadcrumb = ld({
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: t.home, item: lang === 'en' ? SITE : SITE + 'es/' },
      { '@type': 'ListItem', position: 2, name: t.locations, item: hub },
      { '@type': 'ListItem', position: 3, name: `${c.city}, ${c.state}`, item: url }
    ]
  });

  // Service, no LocalBusiness: AJB solo tiene una sede real (Windsor)
  const service = ld({
    '@context': 'https://schema.org', '@type': 'Service',
    '@id': url + '#service',
    name: lang === 'en' ? `Commercial Cleaning in ${c.city}, ${c.state}` : `Limpieza Comercial en ${c.city}, ${c.state}`,
    serviceType: lang === 'en' ? 'Commercial Cleaning' : 'Limpieza Comercial',
    description: c.intro[lang],
    url,
    inLanguage: inLang,
    provider: { '@id': ORG },
    areaServed: {
      '@type': 'City', name: c.city,
      containedInPlace: { '@type': 'State', name: lang === 'en' ? c.stateName : STATE_ES[c.state] }
    },
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: url + '#quote',
      servicePhone: { '@type': 'ContactPoint', telephone: '+1-860-931-2274', contactType: 'sales', availableLanguage: ['en', 'es'] }
    }
  });

  const faq = ld({
    '@context': 'https://schema.org', '@type': 'FAQPage',
    '@id': url + '#faq', inLanguage: inLang,
    isPartOf: { '@id': SITE + '#website' },
    mainEntity: faqOf(c, lang).map(([q, a]) => ({
      '@type': 'Question', name: q,
      acceptedAnswer: { '@type': 'Answer', text: a }
    }))
  });

  return breadcrumb + '\n' + service + '\n' + faq;
}

const footerHtml = (t) => `  <footer class="footer">
    <div class="container" style="text-align: center;">
      <p style="margin-bottom: 8px;"><strong>AJB Cleaning Services, LLC</strong></p>
      <p style="margin-bottom: 8px;">80 Lamberton Rd, Windsor, CT 06095 &middot; <a href="${PHONE_HREF}" style="color:inherit;">${PHONE}</a></p>
      <p>${t.footer}</p>
    </div>
  </footer>`;

const head = (lang, { title, desc, url, enU, esU, image, extra }) => `<!DOCTYPE html>
<html lang="${lang}" data-lang="${lang}">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="content-language" content="${lang === 'en' ? 'en-US' : 'es-US'}" />
  <meta name="description" content="${attr(desc)}" />
  <title>${esc(title)}</title>

  <link rel="canonical" href="${url}" />
  <link rel="alternate" hreflang="en-US" href="${enU}" />
  <link rel="alternate" hreflang="es-US" href="${esU}" />
  <link rel="alternate" hreflang="x-default" href="${enU}" />

  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
  <meta name="author" content="AJB Cleaning Services, LLC" />
  <meta property="og:site_name" content="AJB Cleaning Services, LLC" />
  <meta property="og:locale" content="${lang === 'en' ? 'en_US' : 'es_US'}" />
  <meta property="og:locale:alternate" content="${lang === 'en' ? 'es_US' : 'en_US'}" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="${url}" />
  <meta property="og:title" content="${attr(title)}" />
  <meta property="og:description" content="${attr(desc)}" />
  <meta property="og:image" content="${image}" />
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content="${url}" />
  <meta property="twitter:title" content="${attr(title)}" />
  <meta property="twitter:description" content="${attr(desc)}" />
  <meta property="twitter:image" content="${image}" />

${extra}
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Inter:wght@300;400;500;600&display=swap"
    rel="stylesheet" />
  <link rel="stylesheet" href="${lang === 'en' ? '' : '../'}css/style.css" />
</head>
`;

function nav(t, lang, other, ctaHref, extraLink) {
  return `  <nav class="navbar scrolled" id="navbar">
    <div class="nav-container">
      <a href="${t.index}" class="nav-logo">
        <span class="logo-ajb">AJB</span>
        <span class="logo-sub">Cleaning Services</span>
      </a>
      <ul class="nav-links">
        <li><a href="${t.index}">${t.home}</a></li>
        <li><a href="${t.index}#services">${t.allServices}</a></li>
${extraLink}
        <li><a href="${t.index}#faq">${t.faqNav}</a></li>
      </ul>
      <div class="nav-actions">
        ${navPhone()}
        <a href="${other}" class="nav-lang-link" hreflang="${lang === 'en' ? 'es-US' : 'en-US'}" lang="${lang === 'en' ? 'es' : 'en'}" style="color: rgba(255,255,255,0.75); text-decoration: none; font-weight: 600; font-size: 0.85rem; letter-spacing: 1px; margin-right: 14px;">${t.langLink}</a>
        <a href="${ctaHref}" class="btn btn-gold nav-cta">${t.cta}</a>
      </div>
    </div>
  </nav>`;
}

function page(c, lang, idx) {
  const t = L[lang];
  const isEn = lang === 'en';
  const up = isEn ? '' : '../';
  const url = isEn ? enUrl(c) : esUrl(c);
  const other = isEn ? 'es/' + esSlug(c) : '../' + enSlug(c);
  const hero = PHOTOS[idx % 2]; // las dos fotos apaisadas de pisos, las de mejor prueba
  const desc = description(c, lang);
  const title = t.title(c);
  const near = c.near.map(s => cities.find(x => x.slug === s)).filter(Boolean);
  const place = `${c.city}, ${c.state}`;

  const facilities = facilitiesOf(c, lang).map(([h, d]) => `        <li style="margin-bottom: 14px;"><strong>${h}:</strong> ${d}</li>`).join('\n');
  const services = SERVICES.map(s => {
    const [label, href] = s[lang];
    return `        <li style="margin-bottom: 10px;"><a href="${href}" style="color: var(--gold-400); text-decoration: none; font-weight: 600;">${label}</a></li>`;
  }).join('\n');
  const faqs = faqOf(c, lang).map(([q, a]) => `      <div style="background: rgba(255,255,255,0.01); border-left: 4px solid var(--gold-500); padding: 20px; margin-bottom: 20px; border-radius: 4px;">
        <strong>${esc(q)}</strong>
        <p style="margin-top: 10px; color: rgba(255,255,255,0.8);">${esc(a)}</p>
      </div>`).join('\n');
  const nearCards = near.map(n => `        <a href="${isEn ? enSlug(n) : esSlug(n)}" style="display: block; padding: 20px; border: 1px solid rgba(255,255,255,0.08); border-radius: 14px; background: rgba(255,255,255,0.02); text-decoration: none;">
          <strong style="display: block; color: var(--gold-400); font-family: 'Outfit', sans-serif; margin-bottom: 6px;">${n.city}, ${n.state}</strong>
          <span style="color: rgba(255,255,255,0.7); font-size: 0.9rem;">${t.nearLabel}</span>
        </a>`).join('\n');
  const gallery = [PHOTOS[(idx + 1) % 2], PHOTOS[2 + idx % 2]].map(p => `        <figure style="margin: 0;">
          <img src="${up}img/${p.file}.webp" alt="${attr(p[lang])}" width="${p.w}" height="${p.h}" loading="lazy" style="width: 100%; height: 220px; object-fit: cover; border-radius: 12px;" />
          <figcaption style="color: rgba(255,255,255,0.6); font-size: 0.85rem; margin-top: 8px;">${p[lang]}</figcaption>
        </figure>`).join('\n');

  return head(lang, {
    title, desc, url, enU: enUrl(c), esU: esUrl(c),
    image: `${SITE}img/${hero.file}.jpg`, extra: schema(c, lang)
  }) + `
<body>

${nav(t, lang, other, '#quote', `        <li><a href="${t.hub}">${t.locations}</a></li>`)}

  <nav class="breadcrumb-bar" aria-label="Breadcrumb" style="background: rgba(0,0,0,0.35); border-bottom: 1px solid rgba(255,255,255,0.06); padding: 90px 0 14px;">
    <div class="container">
      <ol style="list-style: none; display: flex; flex-wrap: wrap; gap: 8px; margin: 0; padding: 0; font-size: 0.85rem; color: rgba(255,255,255,0.6);">
        <li><a href="${t.index}" style="color: rgba(255,255,255,0.6); text-decoration: none;">${t.home}</a></li>
        <li aria-hidden="true" style="color: rgba(255,255,255,0.3);">/</li>
        <li><a href="${t.hub}" style="color: rgba(255,255,255,0.6); text-decoration: none;">${t.locations}</a></li>
        <li aria-hidden="true" style="color: rgba(255,255,255,0.3);">/</li>
        <li aria-current="page" style="color: var(--gold-400);">${place}</li>
      </ol>
    </div>
  </nav>

  <section class="hero" style="height: auto; min-height: 60vh; padding: 40px 0;">
    <div class="hero-bg-wrapper">
      <div class="hero-slide active">
        <img src="${up}img/${hero.file}.webp" alt="${attr(hero[lang])}" class="hero-slide-img" width="${hero.w}" height="${hero.h}" fetchpriority="high" />
      </div>
      <div class="hero-overlay"></div>
    </div>
    <div class="hero-content container" style="text-align: center;">
      <div class="hero-badge">${t.heroBadge(c)}</div>
      <h1 class="hero-title" style="font-size: clamp(1.9rem, 6.5vw, 2.8rem);">${t.h1(c)}</h1>
      <p class="hero-subtitle" style="max-width: 720px; margin: 20px auto;">${esc(c.intro[lang])}</p>
      <div class="lead-hero-actions">
        <a href="#quote" class="btn btn-gold btn-lg">${t.heroCta}</a>
        <a href="${PHONE_HREF}" class="btn btn-ghost btn-lg">${t.call} ${PHONE}</a>
      </div>
    </div>
  </section>

  <section class="section" style="color: white; padding: 80px 0 40px;">
    <div class="container" style="max-width: 900px; line-height: 1.8;">

      <h2 class="text-gold" style="font-size: 2rem; margin-bottom: 20px; font-family: 'Outfit', sans-serif;">${t.whatWeClean(c)}</h2>
      <ul style="margin-bottom: 40px;">
${facilities}
      </ul>

      <h2 style="font-size: 1.8rem; margin-bottom: 8px; font-family: 'Outfit', sans-serif;">${t.photos}</h2>
      <p style="color: rgba(255,255,255,0.65); margin-bottom: 16px;">${t.photosLead}</p>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-bottom: 50px;">
${gallery}
      </div>

      <h2 style="font-size: 1.8rem; margin-bottom: 14px; font-family: 'Outfit', sans-serif;">${t.servicesHere(c)}</h2>
      <ul style="margin-bottom: 50px;">
${services}
      </ul>

      <h2 style="font-size: 1.8rem; margin-bottom: 14px; font-family: 'Outfit', sans-serif;">${t.coverage(c)}</h2>
      <p style="margin-bottom: 10px;">${t.coverageLead(c)}</p>
      <p style="color: rgba(255,255,255,0.6); font-size: 0.92rem; margin-bottom: 50px;">${t.zips}: ${c.zips}</p>

      <h2 class="text-gold" style="font-size: 1.8rem; margin-bottom: 20px; font-family: 'Outfit', sans-serif;">${t.faqTitle}</h2>
${faqs}

    </div>
  </section>
${leadSection(lang, { place })}
  <section class="section" aria-labelledby="nearby-title" style="padding: 70px 0; border-top: 1px solid rgba(255,255,255,0.06);">
    <div class="container" style="max-width: 1000px;">
      <h2 id="nearby-title" style="font-size: 1.9rem; color: white; font-family: 'Outfit', sans-serif; margin-bottom: 10px;">${t.nearbyTitle}</h2>
      <p style="color: rgba(255,255,255,0.65); margin-bottom: 30px;">${t.nearbyLead}</p>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 18px; margin-bottom: 26px;">
${nearCards}
      </div>
      <a href="${t.hub}" style="color: var(--gold-400); font-weight: 600; text-decoration: none;">${t.allLocations} →</a>
    </div>
  </section>

${footerHtml(t)}
${callBar(lang, '#quote')}
  <script src="${up}js/lead.js?v=1" defer></script>
</body>

</html>
`;
}

function hub(lang) {
  const t = L[lang];
  const isEn = lang === 'en';
  const url = isEn ? SITE + 'locations.html' : SITE + 'es/ubicaciones.html';
  const other = isEn ? 'es/ubicaciones.html' : '../locations.html';
  const title = isEn ? 'Service Areas in CT, NY, NJ and PA | AJB Cleaning' : 'Zonas de Servicio en CT, NY, NJ y PA | AJB Cleaning';
  const desc = isEn
    ? 'Every city AJB Cleaning Services covers across Connecticut, New York, New Jersey and Pennsylvania, from our Windsor, CT base.'
    : 'Todas las ciudades que AJB Cleaning Services cubre en Connecticut, Nueva York, Nueva Jersey y Pensilvania, desde nuestra base en Windsor, CT.';

  const groups = ['CT', 'NY', 'NJ', 'PA'].map(st => {
    const list = cities.filter(c => c.state === st);
    const name = isEn ? list[0].stateName : STATE_ES[st];
    const items = list.map(c => `        <a href="${isEn ? enSlug(c) : esSlug(c)}" style="display: block; padding: 18px; border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; background: rgba(255,255,255,0.02); text-decoration: none;">
          <strong style="display: block; color: var(--gold-400); font-family: 'Outfit', sans-serif; margin-bottom: 4px;">${c.city}, ${c.state}</strong>
          <span style="color: rgba(255,255,255,0.65); font-size: 0.88rem;">${c.zips}</span>
        </a>`).join('\n');
    return `      <h2 style="font-size: 1.6rem; color: white; font-family: 'Outfit', sans-serif; margin: 40px 0 18px;">${name}</h2>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px;">
${items}
      </div>`;
  }).join('\n');

  const extra = ld({
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: t.home, item: isEn ? SITE : SITE + 'es/' },
      { '@type': 'ListItem', position: 2, name: t.locations, item: url }
    ]
  }) + '\n' + ld({
    '@context': 'https://schema.org', '@type': 'ItemList',
    name: isEn ? 'AJB Cleaning Services service areas' : 'Zonas de servicio de AJB Cleaning Services',
    numberOfItems: cities.length,
    itemListElement: cities.map((c, i) => ({
      '@type': 'ListItem', position: i + 1, name: `${c.city}, ${c.state}`, url: isEn ? enUrl(c) : esUrl(c)
    }))
  });

  return head(lang, {
    title, desc, url, enU: SITE + 'locations.html', esU: SITE + 'es/ubicaciones.html',
    image: `${SITE}img/oficina-recepcion-7.jpg`, extra
  }) + `
<body>

${nav(t, lang, other, '#quote', '')}

  <nav class="breadcrumb-bar" aria-label="Breadcrumb" style="background: rgba(0,0,0,0.35); border-bottom: 1px solid rgba(255,255,255,0.06); padding: 90px 0 14px;">
    <div class="container">
      <ol style="list-style: none; display: flex; gap: 8px; margin: 0; padding: 0; font-size: 0.85rem; color: rgba(255,255,255,0.6);">
        <li><a href="${t.index}" style="color: rgba(255,255,255,0.6); text-decoration: none;">${t.home}</a></li>
        <li aria-hidden="true" style="color: rgba(255,255,255,0.3);">/</li>
        <li aria-current="page" style="color: var(--gold-400);">${t.locations}</li>
      </ol>
    </div>
  </nav>

  <section class="section" style="color: white; padding: 70px 0 60px;">
    <div class="container" style="max-width: 1000px;">
      <h1 style="font-size: 2.4rem; font-family: 'Outfit', sans-serif; margin-bottom: 14px;">${isEn ? 'Where we clean' : 'Dónde limpiamos'}</h1>
      <p style="color: rgba(255,255,255,0.72); max-width: 720px; line-height: 1.7;">${isEn
      ? 'AJB Cleaning Services, LLC operates from 80 Lamberton Rd, Windsor, CT 06095. The Hartford area is closest to our base; for other cities we confirm availability for your address before quoting.'
      : 'AJB Cleaning Services, LLC opera desde 80 Lamberton Rd, Windsor, CT 06095. El área de Hartford es la más cercana a nuestra base; en otras ciudades confirmamos la disponibilidad para su dirección antes de cotizar.'}</p>
${groups}
    </div>
  </section>
${leadSection(lang)}
${footerHtml(t)}
${callBar(lang, '#quote')}
  <script src="${isEn ? '' : '../'}js/lead.js?v=1" defer></script>
</body>

</html>
`;
}

mkdirSync('es', { recursive: true });
let n = 0;
cities.forEach((c, i) => {
  writeFileSync(enSlug(c), page(c, 'en', i));
  writeFileSync('es/' + esSlug(c), page(c, 'es', i));
  n += 2;
});
writeFileSync('locations.html', hub('en'));
writeFileSync('es/ubicaciones.html', hub('es'));
n += 2;
console.log(`${n} paginas generadas (${cities.length} ciudades x 2 idiomas + 2 hubs)`);
