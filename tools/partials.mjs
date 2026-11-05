/**
 * Bloques de conversion que comparten todas las paginas: barra movil, telefono en el
 * menu y formulario de cotizacion. Un solo lugar para cambiar el telefono o el texto.
 */
export const PHONE = '+1 860-931-2274';
export const PHONE_HREF = 'tel:+18609312274';

const T = {
  en: {
    call: 'Call now', quote: 'Free quote', contact: 'Contact',
    heading: (place) => `Get a free quote${place ? ` in ${place}` : ''}`,
    lead: 'Tell us about your building. We schedule a physical or virtual walkthrough and send you a proposal.',
    name: 'Your name', email: 'Email', phone: 'Phone', service: 'What do you need cleaned?',
    message: 'Building size, schedule, anything useful (optional)',
    submit: 'Request my free quote',
    prefer: 'Prefer to talk?',
    options: [['Offices', 'Offices or commercial space'], ['Healthcare', 'Clinic or medical office'], ['Post-construction', 'Post-construction cleanup'], ['Floors and carpets', 'Floors or carpets'], ['Residential', 'Residential'], ['Other', 'Something else']]
  },
  es: {
    call: 'Llamar', quote: 'Cotización gratis', contact: 'Contacto',
    heading: (place) => `Pida su cotización gratis${place ? ` en ${place}` : ''}`,
    lead: 'Cuéntenos sobre su edificio. Agendamos una visita presencial o virtual y le enviamos una propuesta.',
    name: 'Su nombre', email: 'Correo', phone: 'Teléfono', service: '¿Qué necesita limpiar?',
    message: 'Tamaño del edificio, horario, lo que sea útil (opcional)',
    submit: 'Solicitar mi cotización gratis',
    prefer: '¿Prefiere hablar?',
    options: [['Offices', 'Oficinas o local comercial'], ['Healthcare', 'Clínica o consultorio'], ['Post-construction', 'Limpieza post-construcción'], ['Floors and carpets', 'Pisos o alfombras'], ['Residential', 'Residencial'], ['Other', 'Otra cosa']]
  }
};

export const navPhone = () => `<a class="nav-phone" href="${PHONE_HREF}">${PHONE}</a>`;

export const callBar = (lang, quoteHref = '#quote') => {
  const t = T[lang];
  return `
  <!-- Barra fija en movil: llamar y cotizar siempre a un toque -->
  <div class="ajb-callbar" role="navigation" aria-label="${t.contact}">
    <a class="ajb-callbar__call" href="${PHONE_HREF}">${t.call}</a>
    <a class="ajb-callbar__quote" href="${quoteHref}">${t.quote}</a>
  </div>
`;
};

export const leadSection = (lang, { place = '', service = '' } = {}) => {
  const t = T[lang];
  const options = t.options.map(([v, label]) =>
    `          <option value="${v}"${v === service ? ' selected' : ''}>${label}</option>`).join('\n');
  return `
  <!-- COTIZACION: el formulario vive en cada pagina, sin mandar al visitante a otra -->
  <section class="lead-section" id="quote" aria-labelledby="quote-title">
    <div class="container lead-section__inner">
      <div class="lead-section__copy">
        <h2 id="quote-title">${t.heading(place)}</h2>
        <p>${t.lead}</p>
        <p class="lead-section__alt">${t.prefer} <a href="${PHONE_HREF}">${PHONE}</a></p>
      </div>
      <form class="lead-form" novalidate>
        <label>${t.name}<input type="text" name="name" autocomplete="name" required /></label>
        <label>${t.phone}<input type="tel" name="phone" autocomplete="tel" inputmode="tel" required /></label>
        <label>${t.email}<input type="email" name="email" autocomplete="email" required /></label>
        <label>${t.service}<select name="service">
${options}
        </select></label>
        <label>${t.message}<textarea name="message" rows="3"></textarea></label>
        <label class="lead-form__trap" aria-hidden="true">Website<input type="text" name="website" tabindex="-1" autocomplete="off" /></label>
        <button type="submit" class="btn btn-gold btn-lg">${t.submit}</button>
      </form>
    </div>
  </section>
`;
};
