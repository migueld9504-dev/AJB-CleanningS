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
 * El contenido especifico de cada ciudad (intro, instalaciones, distritos, FAQ) vive
 * en cities.json. Si dos ciudades terminan con el mismo texto, el problema esta en los
 * datos, no en la plantilla: paginas por ciudad casi identicas son doorway pages y
 * Google las trata como spam.
 */
import { readFileSync, writeFileSync, mkdirSync } from 'fs';

const SITE = 'https://ajbcleaningservices.com/';
const ORG = SITE + '#organization';
const cities = JSON.parse(readFileSync('tools/cities.json', 'utf8'));

const enSlug = (c) => `commercial-cleaning-${c.slug}.html`;
const esSlug = (c) => `limpieza-comercial-${c.slug}.html`;
const enUrl = (c) => SITE + enSlug(c);
const esUrl = (c) => SITE + 'es/' + esSlug(c);

const HERO = ['office_service', 'team_working'];
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const attr = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;');

const STATE_ES = { CT: 'Connecticut', NY: 'Nueva York', NJ: 'Nueva Jersey', PA: 'Pensilvania' };

// los 4 servicios, para enlazar desde cada ciudad hacia las paginas de servicio
const SERVICES = [
  { en: ['Commercial &amp; office cleaning', 'commercial-cleaning-ny-nj.html'], es: ['Limpieza comercial y de oficinas', 'limpieza-comercial-oficinas-ny-nj.html'] },
  { en: ['Healthcare &amp; clinic cleaning', 'healthcare-cleaning-osha-certified.html'], es: ['Limpieza de clínicas y hospitales', 'limpieza-clinicas-hospitales-osha.html'] },
  { en: ['Post-construction cleanup', 'post-construction-cleaning-ny-nj-ct-pa.html'], es: ['Limpieza post-construcción', 'limpieza-post-construccion-ny-nj-ct-pa.html'] },
  { en: ['White-glove residential cleaning', 'luxury-residential-cleaning-white-glove.html'], es: ['Limpieza residencial de guante blanco', 'limpieza-residencial-lujo-guante-blanco.html'] }
];

const L = {
  en: {
    home: 'Home', locations: 'Locations', hub: 'locations.html', index: 'index.html',
    allServices: 'All Services', story: 'Our Story', faqNav: 'FAQ', cta: 'Request a Quote',
    heroBadge: (c) => `📍 SERVING ${c.city.toUpperCase()}, ${c.state}`,
    h1: (c) => `COMMERCIAL CLEANING<br /><span class="text-gold">IN ${c.city.toUpperCase()}</span><br />${c.state}`,
    title: (c) => `Commercial Cleaning in ${c.city}, ${c.state} | AJB Cleaning`,
    whatWeClean: (c) => `What we clean in ${c.city}`,
    servicesHere: (c) => `Services available in ${c.city}`,
    servicesLead: (c) => `Every AJB service line is available in ${c.city}. Each one runs on its own protocol and its own crew training:`,
    coverage: (c) => `Areas we cover in ${c.city}`,
    coverageLead: (c) => `Our ${c.city} routes include ${c.districts.en}. If your facility sits just outside these areas, ask anyway — the route may already pass your door.`,
    faqTitle: 'Frequently Asked Questions',
    ctaText: (c) => `Request a walkthrough in ${c.city}`,
    nearbyTitle: 'Nearby service areas',
    nearbyLead: 'AJB Cleaning Services, LLC is based in Windsor, CT and covers New York, New Jersey, Connecticut and Pennsylvania.',
    allLocations: 'See all service areas',
    zips: 'ZIP codes served',
    footer: '© 2026 AJB Cleaning Services, LLC. All rights reserved. Registered, licensed, and insured since 1998.',
    langLink: 'ES'
  },
  es: {
    home: 'Inicio', locations: 'Ubicaciones', hub: 'ubicaciones.html', index: '../index.html',
    allServices: 'Todos los Servicios', story: 'Nuestra Historia', faqNav: 'Preguntas', cta: 'Solicitar Cotización',
    heroBadge: (c) => `📍 ATENDEMOS ${c.city.toUpperCase()}, ${c.state}`,
    h1: (c) => `LIMPIEZA COMERCIAL<br /><span class="text-gold">EN ${c.city.toUpperCase()}</span><br />${c.state}`,
    title: (c) => `Limpieza Comercial en ${c.city}, ${c.state} | AJB Cleaning`,
    whatWeClean: (c) => `Qué limpiamos en ${c.city}`,
    servicesHere: (c) => `Servicios disponibles en ${c.city}`,
    servicesLead: (c) => `Todas las líneas de servicio de AJB están disponibles en ${c.city}. Cada una opera con su propio protocolo y su propia capacitación:`,
    coverage: (c) => `Zonas que cubrimos en ${c.city}`,
    coverageLead: (c) => `Nuestras rutas en ${c.city} incluyen ${c.districts.es}. Si su instalación queda justo fuera de estas zonas, pregunte de todos modos: es posible que la ruta ya pase por su puerta.`,
    faqTitle: 'Preguntas Frecuentes',
    ctaText: (c) => `Solicite una visita en ${c.city}`,
    nearbyTitle: 'Zonas de servicio cercanas',
    nearbyLead: 'AJB Cleaning Services, LLC tiene su base en Windsor, Connecticut, y cubre Nueva York, Nueva Jersey, Connecticut y Pensilvania (Estados Unidos).',
    allLocations: 'Ver todas las zonas de servicio',
    zips: 'Códigos postales atendidos',
    footer: '© 2026 AJB Cleaning Services, LLC. Todos los derechos reservados. Registrados, con licencia y asegurados desde 1998.',
    langLink: 'EN'
  }
};

function description(c, lang) {
  const types = c.facilities[lang].map(f => f[0].toLowerCase()).join(', ');
  const d = lang === 'en'
    ? `Commercial cleaning in ${c.city}, ${c.stateName}: ${types}. Licensed, insured and OSHA-trained crews, registered since 1998.`
    : `Limpieza comercial en ${c.city}, ${STATE_ES[c.state]}, EE. UU.: ${types}. Cuadrillas con licencia, aseguradas y capacitadas en OSHA desde 1998.`;
  if (d.length <= 165) return d;
  return (lang === 'en'
    ? `Commercial and office cleaning in ${c.city}, ${c.stateName}. Licensed, insured and OSHA-trained crews from AJB Cleaning Services, registered since 1998.`
    : `Limpieza comercial y de oficinas en ${c.city}, ${STATE_ES[c.state]}, EE. UU. Cuadrillas con licencia, aseguradas y capacitadas en OSHA desde 1998.`);
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

  // Service, no LocalBusiness: AJB solo tiene una sede real (Windsor). Inventar un
  // negocio local por ciudad seria falso y Google lo trata como spam de ubicaciones.
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
      serviceUrl: (lang === 'en' ? SITE : SITE + 'es/') + '#contact',
      servicePhone: { '@type': 'ContactPoint', telephone: '+1-860-931-2274', contactType: 'sales', availableLanguage: ['en', 'es'] }
    }
  });

  const faq = ld({
    '@context': 'https://schema.org', '@type': 'FAQPage',
    '@id': url + '#faq', inLanguage: inLang,
    isPartOf: { '@id': SITE + '#website' },
    mainEntity: c.faq[lang].map(([q, a]) => ({
      '@type': 'Question', name: q,
      acceptedAnswer: { '@type': 'Answer', text: a }
    }))
  });

  return breadcrumb + '\n' + service + '\n' + faq;
}

function page(c, lang, idx) {
  const t = L[lang];
  const isEn = lang === 'en';
  const up = isEn ? '' : '../';
  const url = isEn ? enUrl(c) : esUrl(c);
  const other = isEn ? 'es/' + esSlug(c) : '../' + enSlug(c);
  const hero = HERO[idx % HERO.length];
  const desc = description(c, lang);
  const title = t.title(c);

  const near = c.near.map(s => cities.find(x => x.slug === s)).filter(Boolean);

  const facilities = c.facilities[lang].map(([h, d]) => `          <li style="margin-bottom: 14px;"><strong>${h}:</strong> ${d}</li>`).join('\n');
  const services = SERVICES.map(s => {
    const [label, href] = s[lang];
    return `          <li style="margin-bottom: 10px;"><a href="${href}" style="color: var(--gold); text-decoration: none; font-weight: 600;">${label}</a></li>`;
  }).join('\n');
  const faqs = c.faq[lang].map(([q, a]) => `        <div style="background: rgba(255,255,255,0.01); border-left: 4px solid var(--gold); padding: 20px; margin-bottom: 20px; border-radius: 4px;">
          <strong>${esc(q)}</strong>
          <p style="margin-top: 10px; color: rgba(255,255,255,0.8);">${esc(a)}</p>
        </div>`).join('\n');
  const nearCards = near.map(n => {
    const href = isEn ? enSlug(n) : esSlug(n);
    const label = `${n.city}, ${n.state}`;
    return `          <a href="${href}" style="display: block; padding: 20px; border: 1px solid rgba(255,255,255,0.08); border-radius: 14px; background: rgba(255,255,255,0.02); text-decoration: none;">
            <strong style="display: block; color: var(--gold); font-family: 'Outfit', sans-serif; margin-bottom: 6px;">${label}</strong>
            <span style="color: rgba(255,255,255,0.7); font-size: 0.9rem;">${isEn ? 'Commercial cleaning' : 'Limpieza comercial'}</span>
          </a>`;
  }).join('\n');

  return `<!DOCTYPE html>
<html lang="${isEn ? 'en' : 'es'}" data-lang="${isEn ? 'en' : 'es'}">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="content-language" content="${isEn ? 'en-US' : 'es-US'}" />
  <meta name="description" content="${attr(desc)}" />
  <title>${esc(title)}</title>

  <link rel="canonical" href="${url}" />

  <!-- hreflang con region: el publico objetivo son residentes de EE.UU., en ingles y en espanol.
       x-default manda a la version en ingles a cualquier otro mercado. -->
  <link rel="alternate" hreflang="en-US" href="${enUrl(c)}" />
  <link rel="alternate" hreflang="es-US" href="${esUrl(c)}" />
  <link rel="alternate" hreflang="x-default" href="${enUrl(c)}" />

  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
  <meta name="author" content="AJB Cleaning Services, LLC" />
  <meta property="og:site_name" content="AJB Cleaning Services, LLC" />
  <meta property="og:locale" content="${isEn ? 'en_US' : 'es_US'}" />
  <meta property="og:locale:alternate" content="${isEn ? 'es_US' : 'en_US'}" />

  <!-- Open Graph -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="${url}" />
  <meta property="og:title" content="${attr(title)}" />
  <meta property="og:description" content="${attr(desc)}" />
  <meta property="og:image" content="${SITE}img/${hero}.jpg" />

  <!-- Twitter Cards -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content="${url}" />
  <meta property="twitter:title" content="${attr(title)}" />
  <meta property="twitter:description" content="${attr(desc)}" />
  <meta property="twitter:image" content="${SITE}img/${hero}.jpg" />

${schema(c, lang)}
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Inter:wght@300;400;500;600&display=swap"
    rel="stylesheet" />
  <link rel="stylesheet" href="${up}css/style.css" />
</head>

<body>

  <!-- NAVBAR -->
  <nav class="navbar scrolled" id="navbar">
    <div class="nav-container">
      <a href="${t.index}" class="nav-logo">
        <span class="logo-ajb">AJB</span>
        <span class="logo-sub">Cleaning Services</span>
      </a>
      <ul class="nav-links">
        <li><a href="${t.index}">${t.home}</a></li>
        <li><a href="${t.index}#services">${t.allServices}</a></li>
        <li><a href="${t.hub}">${t.locations}</a></li>
        <li><a href="${t.index}#faq">${t.faqNav}</a></li>
      </ul>
      <div class="nav-actions">
        <a href="${other}" class="nav-lang-link" hreflang="${isEn ? 'es-US' : 'en-US'}" lang="${isEn ? 'es' : 'en'}" style="color: rgba(255,255,255,0.75); text-decoration: none; font-weight: 600; font-size: 0.85rem; letter-spacing: 1px; margin-right: 14px;">${t.langLink}</a>
        <a href="${t.index}#contact" class="btn btn-gold nav-cta">${t.cta}</a>
      </div>
    </div>
  </nav>

  <!-- BREADCRUMB -->
  <nav class="breadcrumb-bar" aria-label="Breadcrumb" style="background: rgba(0,0,0,0.35); border-bottom: 1px solid rgba(255,255,255,0.06); padding: 90px 0 14px;">
    <div class="container">
      <ol style="list-style: none; display: flex; flex-wrap: wrap; gap: 8px; margin: 0; padding: 0; font-size: 0.85rem; color: rgba(255,255,255,0.6);">
        <li><a href="${t.index}" style="color: rgba(255,255,255,0.6); text-decoration: none;">${t.home}</a></li>
        <li aria-hidden="true" style="color: rgba(255,255,255,0.3);">/</li>
        <li><a href="${t.hub}" style="color: rgba(255,255,255,0.6); text-decoration: none;">${t.locations}</a></li>
        <li aria-hidden="true" style="color: rgba(255,255,255,0.3);">/</li>
        <li aria-current="page" style="color: var(--gold);">${c.city}, ${c.state}</li>
      </ol>
    </div>
  </nav>

  <!-- HERO -->
  <!-- min-height generoso: en movil el titulo rompe en 3-4 lineas y el hero recorta
       lo que se salga (overflow:hidden), asi que el alto lo manda el contenido -->
  <section class="hero" style="height: auto; min-height: 60vh; padding: 40px 0;">
    <div class="hero-bg-wrapper">
      <div class="hero-slide active">
        <img src="${up}img/${hero}.webp" alt="${attr(isEn ? `AJB commercial cleaning crew serving ${c.city}, ${c.state}` : `Cuadrilla de limpieza comercial de AJB en ${c.city}, ${c.state}`)}" class="hero-slide-img" width="640" height="640" />
      </div>
      <div class="hero-overlay"></div>
    </div>
    <div class="hero-content container" style="text-align: center;">
      <div class="hero-badge">${t.heroBadge(c)}</div>
      <h1 class="hero-title" style="font-size: clamp(1.9rem, 6.5vw, 2.8rem);">${t.h1(c)}</h1>
      <p class="hero-subtitle" style="max-width: 720px; margin: 20px auto;">${esc(c.intro[lang])}</p>
    </div>
  </section>

  <!-- CONTENT -->
  <section class="section" style="color: white; padding: 90px 0;">
    <div class="container" style="max-width: 900px; line-height: 1.8;">

      <h2 class="text-gold" style="font-size: 2rem; margin-bottom: 20px; font-family: 'Outfit', sans-serif;">${t.whatWeClean(c)}</h2>
      <ul style="margin-bottom: 50px;">
${facilities}
      </ul>

      <h2 style="font-size: 1.8rem; margin-bottom: 14px; font-family: 'Outfit', sans-serif;">${t.servicesHere(c)}</h2>
      <p style="margin-bottom: 16px;">${t.servicesLead(c)}</p>
      <ul style="margin-bottom: 50px;">
${services}
      </ul>

      <h2 style="font-size: 1.8rem; margin-bottom: 14px; font-family: 'Outfit', sans-serif;">${t.coverage(c)}</h2>
      <p style="margin-bottom: 10px;">${t.coverageLead(c)}</p>
      <p style="color: rgba(255,255,255,0.6); font-size: 0.92rem; margin-bottom: 50px;">${t.zips}: ${c.zips}</p>

      <h2 class="text-gold" style="font-size: 1.8rem; margin-bottom: 20px; font-family: 'Outfit', sans-serif;">${t.faqTitle}</h2>
${faqs}

      <div style="text-align: center; margin-top: 50px;">
        <a href="${t.index}#contact" class="btn btn-gold btn-lg">${t.ctaText(c)}</a>
      </div>

    </div>
  </section>

  <!-- NEARBY -->
  <section class="section" aria-labelledby="nearby-title" style="padding: 70px 0; border-top: 1px solid rgba(255,255,255,0.06);">
    <div class="container" style="max-width: 1000px;">
      <h2 id="nearby-title" style="font-size: 1.9rem; color: white; font-family: 'Outfit', sans-serif; margin-bottom: 10px;">${t.nearbyTitle}</h2>
      <p style="color: rgba(255,255,255,0.65); margin-bottom: 30px;">${t.nearbyLead}</p>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 18px; margin-bottom: 26px;">
${nearCards}
      </div>
      <a href="${t.hub}" style="color: var(--gold); font-weight: 600; text-decoration: none;">${t.allLocations} →</a>
    </div>
  </section>

  <!-- FOOTER -->
  <footer class="footer">
    <div class="container" style="text-align: center;">
      <!-- NAP visible e identico al de la ficha de Google: la consistencia del nombre,
           direccion y telefono entre web y ficha es señal directa de SEO local -->
      <p style="margin-bottom: 8px;"><strong>AJB Cleaning Services, LLC</strong></p>
      <p style="margin-bottom: 8px;">80 Lamberton Rd, Windsor, CT 06095 &middot; <a href="tel:+18609312274" style="color:inherit;">+1 860-931-2274</a></p>
      <p>${t.footer}</p>
    </div>
  </footer>

</body>

</html>
`;
}

function hub(lang) {
  const t = L[lang];
  const isEn = lang === 'en';
  const up = isEn ? '' : '../';
  const url = isEn ? SITE + 'locations.html' : SITE + 'es/ubicaciones.html';
  const other = isEn ? 'es/ubicaciones.html' : '../locations.html';
  const title = isEn ? 'Service Areas in CT, NY, NJ and PA | AJB Cleaning' : 'Zonas de Servicio en CT, NY, NJ y PA | AJB Cleaning';
  const desc = isEn
    ? 'Every city AJB Cleaning Services covers across Connecticut, New York, New Jersey and Pennsylvania, from our Windsor, CT base.'
    : 'Todas las ciudades que AJB Cleaning Services cubre en Connecticut, Nueva York, Nueva Jersey y Pensilvania, desde nuestra base en Windsor, CT.';

  const order = ['CT', 'NY', 'NJ', 'PA'];
  const groups = order.map(st => {
    const list = cities.filter(c => c.state === st);
    const name = isEn ? list[0].stateName : STATE_ES[st];
    const items = list.map(c => {
      const href = isEn ? enSlug(c) : esSlug(c);
      return `          <a href="${href}" style="display: block; padding: 18px; border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; background: rgba(255,255,255,0.02); text-decoration: none;">
            <strong style="display: block; color: var(--gold); font-family: 'Outfit', sans-serif; margin-bottom: 4px;">${c.city}, ${c.state}</strong>
            <span style="color: rgba(255,255,255,0.65); font-size: 0.88rem;">${c.zips}</span>
          </a>`;
    }).join('\n');
    return `      <h2 style="font-size: 1.6rem; color: white; font-family: 'Outfit', sans-serif; margin: 40px 0 18px;">${name}</h2>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px;">
${items}
      </div>`;
  }).join('\n');

  const itemList = ld({
    '@context': 'https://schema.org', '@type': 'ItemList',
    name: isEn ? 'AJB Cleaning Services service areas' : 'Zonas de servicio de AJB Cleaning Services',
    inLanguage: isEn ? 'en-US' : 'es-US',
    numberOfItems: cities.length,
    itemListElement: cities.map((c, i) => ({
      '@type': 'ListItem', position: i + 1,
      name: `${c.city}, ${c.state}`,
      url: isEn ? enUrl(c) : esUrl(c)
    }))
  });
  const crumb = ld({
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: t.home, item: isEn ? SITE : SITE + 'es/' },
      { '@type': 'ListItem', position: 2, name: t.locations, item: url }
    ]
  });

  return `<!DOCTYPE html>
<html lang="${isEn ? 'en' : 'es'}" data-lang="${isEn ? 'en' : 'es'}">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="content-language" content="${isEn ? 'en-US' : 'es-US'}" />
  <meta name="description" content="${attr(desc)}" />
  <title>${esc(title)}</title>

  <link rel="canonical" href="${url}" />
  <link rel="alternate" hreflang="en-US" href="${SITE}locations.html" />
  <link rel="alternate" hreflang="es-US" href="${SITE}es/ubicaciones.html" />
  <link rel="alternate" hreflang="x-default" href="${SITE}locations.html" />

  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
  <meta property="og:site_name" content="AJB Cleaning Services, LLC" />
  <meta property="og:locale" content="${isEn ? 'en_US' : 'es_US'}" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="${url}" />
  <meta property="og:title" content="${attr(title)}" />
  <meta property="og:description" content="${attr(desc)}" />
  <meta property="og:image" content="${SITE}img/office_service.jpg" />

${crumb}
${itemList}
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Inter:wght@300;400;500;600&display=swap"
    rel="stylesheet" />
  <link rel="stylesheet" href="${up}css/style.css" />
</head>

<body>

  <nav class="navbar scrolled" id="navbar">
    <div class="nav-container">
      <a href="${t.index}" class="nav-logo">
        <span class="logo-ajb">AJB</span>
        <span class="logo-sub">Cleaning Services</span>
      </a>
      <ul class="nav-links">
        <li><a href="${t.index}">${t.home}</a></li>
        <li><a href="${t.index}#services">${t.allServices}</a></li>
        <li><a href="${t.index}#faq">${t.faqNav}</a></li>
      </ul>
      <div class="nav-actions">
        <a href="${other}" class="nav-lang-link" hreflang="${isEn ? 'es-US' : 'en-US'}" lang="${isEn ? 'es' : 'en'}" style="color: rgba(255,255,255,0.75); text-decoration: none; font-weight: 600; font-size: 0.85rem; letter-spacing: 1px; margin-right: 14px;">${t.langLink}</a>
        <a href="${t.index}#contact" class="btn btn-gold nav-cta">${t.cta}</a>
      </div>
    </div>
  </nav>

  <nav class="breadcrumb-bar" aria-label="Breadcrumb" style="background: rgba(0,0,0,0.35); border-bottom: 1px solid rgba(255,255,255,0.06); padding: 90px 0 14px;">
    <div class="container">
      <ol style="list-style: none; display: flex; gap: 8px; margin: 0; padding: 0; font-size: 0.85rem; color: rgba(255,255,255,0.6);">
        <li><a href="${t.index}" style="color: rgba(255,255,255,0.6); text-decoration: none;">${t.home}</a></li>
        <li aria-hidden="true" style="color: rgba(255,255,255,0.3);">/</li>
        <li aria-current="page" style="color: var(--gold);">${t.locations}</li>
      </ol>
    </div>
  </nav>

  <section class="section" style="color: white; padding: 70px 0 90px;">
    <div class="container" style="max-width: 1000px;">
      <h1 style="font-size: 2.4rem; font-family: 'Outfit', sans-serif; margin-bottom: 14px;">${isEn ? 'Where we clean' : 'Dónde limpiamos'}</h1>
      <p style="color: rgba(255,255,255,0.72); max-width: 720px; line-height: 1.7;">${isEn
      ? 'AJB Cleaning Services, LLC operates from 80 Lamberton Rd, Windsor, CT 06095. Response times are shortest across the Hartford area and we run scheduled contract routes into New York, New Jersey and Pennsylvania.'
      : 'AJB Cleaning Services, LLC opera desde 80 Lamberton Rd, Windsor, CT 06095. Los tiempos de respuesta son más cortos en el área de Hartford, y hacia Nueva York, Nueva Jersey y Pensilvania operamos rutas de contrato programadas.'}</p>
${groups}
    </div>
  </section>

  <footer class="footer">
    <div class="container" style="text-align: center;">
      <!-- NAP visible e identico al de la ficha de Google: la consistencia del nombre,
           direccion y telefono entre web y ficha es señal directa de SEO local -->
      <p style="margin-bottom: 8px;"><strong>AJB Cleaning Services, LLC</strong></p>
      <p style="margin-bottom: 8px;">80 Lamberton Rd, Windsor, CT 06095 &middot; <a href="tel:+18609312274" style="color:inherit;">+1 860-931-2274</a></p>
      <p>${t.footer}</p>
    </div>
  </footer>

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
