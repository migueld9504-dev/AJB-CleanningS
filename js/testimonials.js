/**
 * AJB Cleaning Services — Testimonials Page JS
 * Features:
 *  - Interactive star rating picker
 *  - Review form submission
 *  - localStorage: save & display community reviews
 *  - Character counter for review text
 *  - i18n integration (label translations)
 */

(function () {
  'use strict';

  // ===== Add translation keys specific to this page to i18n =====
  // We piggyback on window.AJBi18n after it loads
  const EXTRA_EN = {
    tp_tag:             'Client Voices',
    tp_title:           'Real Reviews from',
    tp_title_gold:      'Real Clients',
    tp_subtitle:        '28+ years of trusted cleaning across NY, NJ, CT & PA. Here\'s what our clients say.',
    tp_avg_label:       'Average Rating',
    tp_review_count:    'Based on verified client reviews',
    tp_grid_tag:        'What They Say',
    tp_grid_title:      'Client',
    tp_no_reviews:      'No community reviews yet. Be the first to share your experience!',
    tp_type_medical:    'Medical',
    tp_type_office:     'Office',
    tp_type_construction:'Post-Construction',
    rf_tag:             'Share Your Experience',
    rf_title:           'Leave a',
    rf_title_gold:      'Review',
    rf_desc:            'Your feedback helps us improve and helps others make the right choice. We genuinely appreciate every review.',
    rf_feat1:           'Your email is never shared publicly',
    rf_feat2:           'Published instantly on this page',
    rf_feat3:           'Helps other clients find us',
    rf_form_title:      'Your Experience Matters',
    rf_name:            'Your Name *',
    rf_name_ph:         'John Smith',
    rf_role:            'Company / Role',
    rf_role_ph:         'Office Manager, NY',
    rf_email:           'Email (not published) *',
    rf_email_ph:        'your@email.com',
    rf_rating:          'Your Rating *',
    rf_service:         'Service Received *',
    rf_review:          'Your Review *',
    rf_review_ph:       'Tell others about your experience with AJB Cleaning Services...',
    rf_location:        'Location (optional)',
    rf_location_ph:     'e.g. Manhattan, NY',
    rf_submit:          'Submit My Review',
  };

  const EXTRA_ES = {
    tp_tag:             'Voz de Clientes',
    tp_title:           'Reseñas Reales de',
    tp_title_gold:      'Clientes Reales',
    tp_subtitle:        'Más de 28 años de limpieza de confianza en NY, NJ, CT y PA. Esto es lo que dicen nuestros clientes.',
    tp_avg_label:       'Calificación Promedio',
    tp_review_count:    'Basado en reseñas verificadas de clientes',
    tp_grid_tag:        'Lo Que Dicen',
    tp_grid_title:      'Testimonios de',
    tp_no_reviews:      '¡Aún no hay reseñas de la comunidad. Sé el primero en compartir tu experiencia!',
    tp_type_medical:    'Médico',
    tp_type_office:     'Oficina',
    tp_type_construction:'Post-Construcción',
    rf_tag:             'Comparte tu Experiencia',
    rf_title:           'Dejar una',
    rf_title_gold:      'Reseña',
    rf_desc:            'Tu opinión nos ayuda a mejorar y ayuda a otros a tomar la decisión correcta. Apreciamos cada reseña.',
    rf_feat1:           'Tu correo nunca se comparte públicamente',
    rf_feat2:           'Se publica de inmediato en esta página',
    rf_feat3:           'Ayuda a otros clientes a encontrarnos',
    rf_form_title:      'Tu Experiencia Importa',
    rf_name:            'Tu Nombre *',
    rf_name_ph:         'Juan García',
    rf_role:            'Empresa / Cargo',
    rf_role_ph:         'Gerente de Oficina, NY',
    rf_email:           'Correo (no se publica) *',
    rf_email_ph:        'tu@correo.com',
    rf_rating:          'Tu Calificación *',
    rf_service:         'Servicio Recibido *',
    rf_review:          'Tu Reseña *',
    rf_review_ph:       'Cuéntales a otros sobre tu experiencia con AJB Cleaning Services...',
    rf_location:        'Ubicación (opcional)',
    rf_location_ph:     'ej. Manhattan, NY',
    rf_submit:          'Enviar Mi Reseña',
  };

  // Inject extra keys into the global i18n dictionaries
  function injectExtraKeys() {
    if (window.AJBi18n && window.AJBi18n.LANGS) {
      Object.assign(window.AJBi18n.LANGS.en, EXTRA_EN);
      Object.assign(window.AJBi18n.LANGS.es, EXTRA_ES);
      // Re-apply current lang
      const lang = window.AJBi18n.getCurrentLang();
      window.AJBi18n.applyTranslations(lang);
    }
  }

  // ===== STAR RATING PICKER =====
  let selectedRating = 0;

  function initStarPicker() {
    const stars = document.querySelectorAll('.star-btn');
    if (!stars.length) return;

    function highlight(n) {
      stars.forEach((s, i) => {
        s.classList.toggle('active', i < n);
      });
    }

    stars.forEach(star => {
      star.addEventListener('mouseenter', () => highlight(parseInt(star.dataset.val)));
      star.addEventListener('mouseleave', () => highlight(selectedRating));
      star.addEventListener('click', () => {
        selectedRating = parseInt(star.dataset.val);
        highlight(selectedRating);
        document.getElementById('rvRating').value = selectedRating;
      });
    });
  }

  // ===== CHAR COUNTER =====
  function initCharCounter() {
    const textarea = document.getElementById('rvText');
    const counter  = document.getElementById('charCount');
    if (!textarea || !counter) return;

    textarea.addEventListener('input', () => {
      const len = textarea.value.length;
      counter.textContent = `${len} / 30 min.`;
      counter.classList.toggle('limit-ok', len >= 30);
    });
  }

  // ===== STORAGE HELPERS =====
  const STORAGE_KEY = 'ajb_community_reviews';

  function loadReviews() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    } catch { return []; }
  }

  function saveReview(review) {
    const reviews = loadReviews();
    reviews.unshift(review); // newest first
    localStorage.setItem(STORAGE_KEY, JSON.stringify(reviews));
  }

  // ===== RENDER COMMUNITY REVIEWS =====
  function starString(n) {
    return '★'.repeat(n) + '☆'.repeat(5 - n);
  }

  function renderCommunityReviews() {
    const container = document.getElementById('reviewsContainer');
    if (!container) return;

    const reviews = loadReviews();
    // Remove previously rendered community reviews (to avoid duplicates on re-render)
    container.querySelectorAll('.rv-community').forEach(el => el.remove());

    if (!reviews.length) return;

    reviews.forEach((rv, i) => {
      const initials = rv.name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
      const article  = document.createElement('article');
      article.className = 'testi-card glass-card reveal-up rv-community';
      article.id = `rv-community-${i}`;
      article.innerHTML = `
        <div class="testi-card-header">
          <div class="author-avatar author-avatar--lg">${initials}</div>
          <div class="testi-author-info">
            <strong>${escapeHtml(rv.name)}</strong>
            <span>${escapeHtml(rv.role || rv.location || '')}</span>
            <div class="testi-stars">${starString(rv.rating)}</div>
          </div>
          <div class="testi-type-badge badge-community">✅ Verified</div>
        </div>
        <p>"${escapeHtml(rv.review)}"</p>
        <div class="testi-meta">
          <span class="testi-service">${escapeHtml(rv.service || '')}</span>
          <span class="testi-date">${escapeHtml(rv.date || '')}</span>
        </div>
      `;
      container.appendChild(article);
      // Trigger reveal animation
      setTimeout(() => article.classList.add('is-visible'), 100 + i * 80);
    });
  }

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  // ===== FORM SUBMISSION =====
  function initReviewForm() {
    const form = document.getElementById('reviewForm');
    const btn  = document.getElementById('submitReviewBtn');
    if (!form) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const rating = selectedRating;
      if (rating === 0) {
        alert('Please select a star rating.');
        return;
      }

      const review = {
        name:     form.name.value.trim(),
        role:     form.rvRole ? form.rvRole.value.trim() : '',
        email:    form.email.value.trim(), // not shown
        rating:   rating,
        service:  form.rvService.options[form.rvService.selectedIndex].text,
        review:   form.rvText.value.trim(),
        location: form.rvLocation ? form.rvLocation.value.trim() : '',
        date:     new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
      };

      saveReview(review);
      renderCommunityReviews();

      // Show success
      const lang = (window.AJBi18n && window.AJBi18n.getCurrentLang()) || 'en';
      btn.textContent = lang === 'es' ? '✅ ¡Reseña Enviada!' : '✅ Review Submitted!';
      btn.style.background = 'linear-gradient(135deg, #2E7D32, #4CAF50)';
      btn.disabled = true;

      setTimeout(() => {
        form.reset();
        selectedRating = 0;
        document.querySelectorAll('.star-btn').forEach(s => s.classList.remove('active'));
        const counter = document.getElementById('charCount');
        if (counter) counter.textContent = '0 / 30 min.';
        btn.textContent = window.AJBi18n ? window.AJBi18n.LANGS[lang].rf_submit : 'Submit My Review';
        btn.style.background = '';
        btn.disabled = false;
      }, 4000);
    });
  }

  // ===== INIT =====
  document.addEventListener('DOMContentLoaded', () => {
    injectExtraKeys();
    initStarPicker();
    initCharCounter();
    renderCommunityReviews();
    initReviewForm();

    // Reveal animations for static elements
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('is-visible'); observer.unobserve(e.target); }
      }),
      { threshold: 0.12 }
    );
    document.querySelectorAll('.reveal-up').forEach(el => observer.observe(el));
  });

})();
