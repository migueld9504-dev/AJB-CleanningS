/**
 * Captacion de leads, compartida por todas las paginas.
 *  - Envia los formularios .lead-form al mismo webhook que el formulario de la portada.
 *  - Anota en el mensaje de que pagina y de que fuente vino cada lead: la plantilla de
 *    correo de n8n ya imprime "message", asi que no hay que tocar el workflow.
 *  - Mide clics en llamar y en WhatsApp. Para activar Google Analytics basta poner el
 *    ID en GA_ID; sin ID no se carga nada de terceros.
 */
(function () {
  'use strict';

  var WEBHOOK = 'https://dykanproject-n8n1.pnbelu.easypanel.host/webhook/ajb-contact-form';
  var GA_ID = ''; // Ej: 'G-XXXXXXXXXX'
  var PHONE = '+1 860-931-2274';
  var PHONE_HREF = 'tel:+18609312274';
  var WHATSAPP = 'https://wa.me/18609312274';

  var isEs = (document.documentElement.getAttribute('lang') || 'en').indexOf('es') === 0;

  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  if (GA_ID) {
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(s);
    gtag('js', new Date());
    gtag('config', GA_ID);
  }
  function track(name, params) {
    gtag('event', name, params || {});
  }

  // Primer contacto de la visita: de donde llego y por que pagina entro
  function attribution() {
    var stored = null;
    try { stored = JSON.parse(sessionStorage.getItem('ajb_first_touch')); } catch (e) { }
    if (!stored) {
      var q = new URLSearchParams(location.search);
      var ref = document.referrer;
      var external = ref && ref.indexOf(location.hostname) === -1;
      stored = {
        source: q.get('utm_source') || (external ? new URL(ref).hostname : 'direct'),
        campaign: q.get('utm_campaign') || '',
        landing: location.pathname
      };
      try { sessionStorage.setItem('ajb_first_touch', JSON.stringify(stored)); } catch (e) { }
    }
    return stored;
  }
  attribution();

  function withAttribution(message) {
    var a = attribution();
    var lines = ['Page: ' + location.pathname, 'Landing page: ' + a.landing, 'Source: ' + a.source];
    if (a.campaign) lines.push('Campaign: ' + a.campaign);
    return (message ? message + '\n\n' : '') + '---\n' + lines.join('\n');
  }

  function send(data) {
    data.source = 'AJB Website';
    data.submittedAt = new Date().toLocaleString();
    data.message = withAttribution(data.message);
    return fetch(WEBHOOK, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }).then(function (res) {
      if (!res.ok) throw new Error('Server error ' + res.status);
      track('generate_lead', { page_path: location.pathname, lead_source: attribution().source });
    });
  }

  var TXT = isEs ? {
    sending: 'Enviando...',
    name: 'Escriba su nombre.',
    email: 'Escriba un correo válido.',
    phone: 'Escriba un teléfono de 10 dígitos.',
    failed: 'No pudimos enviar su solicitud. Llámenos o escríbanos por WhatsApp y le atendemos ahora:',
    call: 'Llamar',
    done: 'Recibimos su solicitud. Le contactaremos pronto para coordinar la visita.'
  } : {
    sending: 'Sending...',
    name: 'Please enter your name.',
    email: 'Please enter a valid email.',
    phone: 'Please enter a 10-digit phone number.',
    failed: 'We could not send your request. Call or message us on WhatsApp and we will help you right away:',
    call: 'Call',
    done: 'We received your request and will contact you soon to schedule the walkthrough.'
  };

  function validate(data) {
    var digits = String(data.phone || '').replace(/\D/g, '');
    if (digits.length === 11 && digits.charAt(0) === '1') digits = digits.slice(1);
    if (String(data.name || '').trim().length < 2) return TXT.name;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(data.email || '').trim())) return TXT.email;
    if (digits.length !== 10) return TXT.phone;
    return '';
  }

  // El aviso de fallo nunca deja al visitante sin salida: siempre le da telefono y WhatsApp
  function failureBox() {
    var box = document.createElement('div');
    box.className = 'lead-status lead-status--error';
    box.setAttribute('role', 'alert');
    box.innerHTML = '<p>' + TXT.failed + '</p><p><a href="' + PHONE_HREF + '">' + TXT.call + ' ' + PHONE +
      '</a> &middot; <a href="' + WHATSAPP + '" target="_blank" rel="noopener">WhatsApp</a></p>';
    return box;
  }

  document.querySelectorAll('form.lead-form').forEach(function (form) {
    var started = false;
    form.addEventListener('input', function () {
      if (!started) { started = true; track('form_start', { page_path: location.pathname }); }
    });
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var old = form.querySelector('.lead-status');
      if (old) old.remove();

      var data = Object.fromEntries(new FormData(form).entries());
      if (data.website) return; // honeypot: solo un bot llena este campo
      delete data.website;

      var error = validate(data);
      if (error) {
        var msg = document.createElement('div');
        msg.className = 'lead-status lead-status--error';
        msg.setAttribute('role', 'alert');
        msg.textContent = error;
        form.appendChild(msg);
        return;
      }

      data.name = String(data.name).trim().toUpperCase();
      data.email = String(data.email).trim().toLowerCase();
      if (data.service) data.service = String(data.service).toUpperCase();

      var btn = form.querySelector('button[type="submit"]');
      var label = btn.innerHTML;
      btn.disabled = true;
      btn.innerHTML = TXT.sending;

      send(data).then(function () {
        var ok = document.createElement('div');
        ok.className = 'lead-status lead-status--ok';
        ok.setAttribute('role', 'status');
        ok.textContent = TXT.done;
        form.replaceWith(ok);
      }).catch(function () {
        btn.disabled = false;
        btn.innerHTML = label;
        form.appendChild(failureBox());
        track('lead_failed', { page_path: location.pathname });
      });
    });
  });

  // Los enlaces son HTML normal y funcionan sin este script; aqui solo se miden
  document.addEventListener('click', function (e) {
    var a = e.target.closest ? e.target.closest('a[href]') : null;
    if (!a) return;
    var href = a.getAttribute('href');
    if (href.indexOf('tel:') === 0) track('call_click', { page_path: location.pathname });
    else if (href.indexOf('wa.me') !== -1) track('whatsapp_click', { page_path: location.pathname });
  });

  window.AJBlead = { withAttribution: withAttribution, track: track, failureBox: failureBox };
})();
