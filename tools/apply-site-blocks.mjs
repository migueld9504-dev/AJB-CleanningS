/**
 * Aplica a las paginas hechas a mano (portada y paginas de servicio) los bloques de
 * conversion de tools/partials.mjs y las correcciones de afirmaciones. Se puede correr
 * varias veces: lo que ya esta aplicado se deja como esta.
 *
 *   node tools/apply-site-blocks.mjs
 */
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { callBar, leadSection, navPhone, PHONE, PHONE_HREF } from './partials.mjs';

const SERVICE_PAGES = [
  ['commercial-cleaning-ny-nj.html', 'en', 'Offices'],
  ['healthcare-cleaning-osha-certified.html', 'en', 'Healthcare'],
  ['post-construction-cleaning-ny-nj-ct-pa.html', 'en', 'Post-construction'],
  ['luxury-residential-cleaning-white-glove.html', 'en', 'Residential'],
  ['es/limpieza-comercial-oficinas-ny-nj.html', 'es', 'Offices'],
  ['es/limpieza-clinicas-hospitales-osha.html', 'es', 'Healthcare'],
  ['es/limpieza-post-construccion-ny-nj-ct-pa.html', 'es', 'Post-construction'],
  ['es/limpieza-residencial-lujo-guante-blanco.html', 'es', 'Residential']
];

// OSHA no certifica empresas ni personal de limpieza, y la EPA registra desinfectantes, no
// "certifica" productos. Green Seal no aparece en el manual de marca del cliente. Se baja
// cada afirmacion a lo que el manual respalda; ver docs/PUESTA-EN-MARCHA.md.
const CLAIMS = [
  ['Green Seal certified, eco-friendly', 'eco-friendly'],
  ['Green Seal certified, non-toxic', 'non-toxic'],
  ['Green Seal certified non-toxic', 'non-toxic'],
  ['using Green Seal certified products', 'using eco-friendly products'],
  ['and Green Seal certified eco-friendly', 'and eco-friendly'],
  ['- Certifications used on site: Green Seal certified cleaning products, HEPA filtration vacuums\n', ''],
  ['- Certifications used on site: Green Seal certified cleaning products, HEPA filtration vacuums\r\n', ''],
  ['OSHA Certified Healthcare Cleaning', 'OSHA-Compliant Healthcare Cleaning'],
  ['OSHA Certified Medical Cleaning', 'OSHA-Compliant Medical Cleaning'],
  ['OSHA Certified medical', 'OSHA-compliant medical'],
  ['OSHA Certified, registered', 'OSHA-compliant, registered'],
  ['OSHA CERTIFIED', 'OSHA-COMPLIANT'],
  ['OSHA-certified results', 'OSHA-aligned results'],
  ['OSHA-certified terminal', 'OSHA-compliant terminal'],
  ['offer OSHA-certified medical cleaning', 'offer OSHA-compliant medical cleaning'],
  ['with certified OSHA hygiene standards', 'with crews trained to OSHA standards'],
  ['certified and trained in OSHA', 'trained in OSHA'],
  ['strictly certified in bloodborne', 'trained in bloodborne'],
  ['OSHA-Certified Team', 'OSHA-Trained Team'],
  ['EPA-certified, biodegradable', 'eco-friendly, biodegradable'],
  ['ecológicas certificadas por Green Seal', 'ecológicas'],
  ['no tóxicas y certificadas por Green Seal', 'no tóxicas'],
  ['con productos certificados Green Seal', 'con productos ecológicos'],
  ['con estándares de higiene certificados por OSHA', 'con cuadrillas capacitadas en normas OSHA'],
  ['médica certificada por OSHA', 'médica conforme a OSHA'],
  ['CERTIFICADA OSHA', 'CONFORME A OSHA'],
  ['Certificada OSHA', 'Conforme a OSHA'],
  ['Certificados OSHA, registrados', 'Conformes a OSHA, registrados'],
  ['Personal certificado OSHA', 'Personal capacitado en OSHA'],
  ['Equipo Certificado OSHA', 'Equipo Capacitado en OSHA'],
  ['está certificado y capacitado en normas', 'está capacitado en normas'],
  ['está certificado en patógenos', 'está capacitado en patógenos'],
  ['productos certificados por la EPA, biodegradables', 'productos ecológicos y biodegradables'],
  // Afirmaciones sin respaldo que escribi yo en los archivos para agentes
  ['hot-water extraction with HEPA-filtered equipment', 'deep cleaning of fibers to remove tough stains and odors in high-traffic areas'],
  ['hot-water extraction and shampoo of commercial and residential carpets with HEPA-filtered equipment', 'deep cleaning of fibers to remove tough stains and odors in high-traffic areas'],
  ['New York, New Jersey and Pennsylvania are served on scheduled contract routes.', 'Availability outside the Hartford area is confirmed for each address when requesting a quote.'],
  ['24/7 scheduling, 24-hour response guarantee', '24/7 scheduling; if something is not right, it is corrected at no cost within 24 hours']
];

const fixClaims = (t) => CLAIMS.reduce((s, [a, b]) => s.split(a).join(b), t);

// Reemplaza el contenido de un elemento identificado por su data-t, sin anidamiento
const setT = (h, key, val) => h.replace(
  new RegExp('(data-t="' + key + '"[^>]*>)[^<]*(<)'), (m, a, b) => a + val + b);

const HERO = {
  en: {
    hero_title_1: 'COMMERCIAL CLEANING', hero_title_2: 'FOR OFFICES &amp; CLINICS', hero_title_3: 'ACROSS CT, NY, NJ &amp; PA.',
    hero_subtitle: 'Licensed and insured crews based in Windsor, CT. Tell us about your building and get a free quote.',
    title: 'Commercial Cleaning in CT, NY, NJ &amp; PA | AJB Cleaning Services',
    call: `Call ${PHONE}`
  },
  es: {
    hero_title_1: 'LIMPIEZA COMERCIAL', hero_title_2: 'PARA OFICINAS Y CLÍNICAS', hero_title_3: 'EN CT, NY, NJ Y PA.',
    hero_subtitle: 'Cuadrillas con licencia y seguro, con base en Windsor, CT. Cuéntenos sobre su edificio y reciba una cotización gratis.',
    title: null,
    call: `Llamar ${PHONE}`
  }
};

for (const [file, lang] of [['index.html', 'en'], ['es/index.html', 'es']]) {
  const up = lang === 'en' ? '' : '../';
  const v = HERO[lang];
  let h = fixClaims(readFileSync(file, 'utf8'));

  // Pantalla de carga de 3,4 s: todo visitante esperaba antes de ver a que se dedica AJB
  h = h.replace(/[ \t]*<!-- ===== LAUNCH SCREEN[\s\S]*?(?=[ \t]*<!-- ===== NAVBAR)/, '');
  // Un valor invalido: la verificacion real de Search Console es el archivo html
  h = h.replace(/[ \t]*<meta name="google-site-verification"[^>]*>\r?\n/, '');
  // Enlace muerto: el boton de Instagram apuntaba a "#"
  h = h.replace(/[ \t]*<a href="#" class="social-btn" id="footerIG"[\s\S]*?<\/a>\r?\n/, '');

  for (const k of ['hero_title_1', 'hero_title_2', 'hero_title_3', 'hero_subtitle']) h = setT(h, k, v[k]);
  if (v.title) {
    h = h.replace(/<title>[^<]*<\/title>/, `<title>${v.title}</title>`);
    h = h.replace(/(<meta property="og:title" content=")[^"]*/, '$1' + v.title);
    h = h.replace(/(<meta property="twitter:title" content=")[^"]*/, '$1' + v.title);
  }

  // heroVisible: sin la animacion de entrada el titulo se ve en la primera pintura
  for (const c of ['hero-badge', 'hero-title', 'hero-subtitle', 'hero-actions']) h = h.split('class="' + c + ' reveal-3d"').join('class="' + c + '"');

  // El enlace al indice de ciudades va en el pie, no repetido en el menu
  const areas = lang === 'en' ? ['locations.html', 'Service Areas'] : ['ubicaciones.html', 'Zonas de Servicio'];
  h = h.replace(/[ \t]*<li><a href="[a-z]+\.html" class="footer-locations-link">[^<]*<\/a><\/li>\r?\n/, '');
  h = h.replace(/(<h4 data-t="footer_company_title">[^<]*<\/h4>\s*<ul>)/,
    '$1\n            <li><a href="' + areas[0] + '" class="footer-locations-link">' + areas[1] + '</a></li>');

  // El segundo boton del hero era "Nuestra historia": ahora llama
  h = h.replace(/<a href="#about" class="btn btn-ghost btn-lg" id="heroStoryBtn"[^>]*>[^<]*<\/a>/,
    `<a href="${PHONE_HREF}" class="btn btn-ghost btn-lg" id="heroCallBtn">${v.call}</a>`);

  if (!h.includes('class="nav-phone"')) h = h.replace(/(<div class="nav-actions">\s*)/, '$1' + navPhone() + '\n        ');
  if (!h.includes('ajb-callbar')) {
    h = h.replace(/<script src="(?:\.\.\/)?js\/i18n\.js/, `${callBar(lang, '#contact')}\n  <script src="${up}js/lead.js?v=1"></script>\n  $&`);
  }
  h = h.replace(/js\/i18n\.js\?v=[0-9.]+/, 'js/i18n.js?v=1.8').replace(/js\/main\.js\?v=[0-9.]+/, 'js/main.js?v=1.7');
  writeFileSync(file, h);
  console.log('OK ' + file);
}

for (const [file, lang, service] of SERVICE_PAGES) {
  let h = fixClaims(readFileSync(file, 'utf8'));
  const up = lang === 'en' ? '' : '../';
  // Los botones mandaban a la portada: ahora cotizan aqui mismo
  h = h.replace(/href="(?:\.\.\/)?index\.html#contact" class="btn/g, 'href="#quote" class="btn');
  if (!h.includes('id="quote"')) h = h.replace(/([ \t]*<!-- RELATED SERVICES)/, leadSection(lang, { service }) + '\n$1');
  if (!h.includes('class="nav-phone"')) h = h.replace(/(<div class="nav-actions">\s*)/, '$1' + navPhone() + '\n        ');
  if (!h.includes('ajb-callbar')) h = h.replace('</body>', `${callBar(lang)}\n  <script src="${up}js/lead.js?v=1" defer></script>\n</body>`);
  writeFileSync(file, h);
  console.log('OK ' + file);
}

for (const f of ['public/llms.txt', 'llms.txt', 'public/services.md', 'services.md', 'js/i18n.js']) {
  if (existsSync(f)) writeFileSync(f, fixClaims(readFileSync(f, 'utf8')));
}

// Diccionario: lo que el motor i18n pinta al cargar tiene que coincidir con el HTML
let j = readFileSync('js/i18n.js', 'utf8');
const dict = (key, en, es) => {
  let n = 0;
  j = j.replace(new RegExp("(" + key + ": )'[^'\\n]*'", 'g'), (m, a) => a + "'" + (n++ === 0 ? en : es) + "'");
  if (n !== 2) console.log(`!! ${key}: ${n} coincidencias`);
};
dict('hero_title_1', 'COMMERCIAL CLEANING', 'LIMPIEZA COMERCIAL');
dict('hero_title_2', 'FOR OFFICES &amp; CLINICS', 'PARA OFICINAS Y CLÍNICAS');
dict('hero_title_3', 'ACROSS CT, NY, NJ &amp; PA.', 'EN CT, NY, NJ Y PA.');
dict('hero_subtitle', HERO.en.hero_subtitle, HERO.es.hero_subtitle);
writeFileSync('js/i18n.js', j);
console.log('OK js/i18n.js y archivos para agentes');
