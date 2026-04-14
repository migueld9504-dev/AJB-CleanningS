/**
 * AJB Cleaning Services — i18n Translation Engine
 * Supported: English (en) | Spanish (es)
 * Usage: add data-t="key" to any element. For placeholders: data-t-placeholder="key"
 */

(function () {
  'use strict';

  // ===== TRANSLATION DICTIONARIES =====
  const LANGS = {
    en: {
      // Navbar
      nav_services:      'Services',
      nav_industries:    'Industries',
      nav_about:         'About',
      nav_contact:       'Contact',
      nav_testimonials:  '⭐ Reviews',
      nav_cta:           'Request a Quote',

      // Hero
      hero_badge:        '⭐ 28+ Years of Excellence',
      hero_title_1:      'PREMIUM COMMERCIAL',
      hero_title_2:      'CLEANING',
      hero_title_3:      'FOR BUSY BUSINESSES.',
      hero_subtitle:     'Expert cleaning solutions for healthcare, corporate offices, and facilities that demand the highest standards — NY, NJ, CT & PA.',
      hero_cta_primary:  'Get a Free Quote',
      hero_cta_secondary:'Our Story',
      hero_scroll:       'Scroll',

      // Trust Bar
      trust_licensed:    'Licensed & Insured',
      trust_247:         '24/7 Service',
      trust_osha:        'OSHA-Certified Team',
      trust_eco:         'Eco-Friendly Products',
      trust_guarantee:   '24-Hour Guarantee',

      // Services
      svc_tag:           'What We Do',
      svc_title:         'Our',
      svc_title_gold:    'Specialized',
      svc_title2:        'Services',
      svc_subtitle:      'Every space is unique. Every solution we offer is tailored to match your exact requirements.',
      svc_learn:         'Learn More →',

      svc_office_title:  'Office & Commercial',
      svc_office_desc:   'Daily, weekly, or monthly maintenance for offices, restaurants, schools, and government buildings.',
      svc_medical_title: 'Healthcare Facilities',
      svc_medical_desc:  'Deep disinfection for hospitals, clinics, dental offices, and labs — meeting strict OSHA compliance standards.',
      svc_post_title:    'Post-Construction',
      svc_post_desc:     'Elimination of dust, debris, and construction residue for immediate occupancy after renovations or new builds.',
      svc_res_title:     'Luxury Residential',
      svc_res_desc:      'White-glove service for high-end condos, move-in/move-out cleans, and Airbnb turnarounds in premium locations.',
      svc_floor_title:   'Floor Treatment',
      svc_floor_desc:    'Professional polishing, stripping, and waxing for vinyl, hardwood, and marble floors using industrial-grade equipment.',
      svc_custom_title:  'Need Something Custom?',
      svc_custom_desc:   'We evaluate every space personally. Pressure washing, eco-clean, carpet care — if you need it, we do it.',
      svc_custom_cta:    'Get a Free Assessment',

      // Story
      story_tag:         'Since 1998',
      story_title:       'A Story Built on',
      story_title_gold:  'Hard Work',
      story_p1:          'In 1998, our founder Julio started with a simple vision: that spaces deserve a <strong>rigorous, personalized culture of hygiene</strong> — not just a routine wipe-down.',
      story_p2:          'Working <strong>14-hour days</strong>, learning English from zero, handing out business cards one by one — he built a team and a reputation from the ground up. Today, <strong>28+ years later</strong>, AJB Cleaning Services stands as proof that commitment and quality create a resilient, profitable business.',
      story_quote:       '"More than cleaning, we create a sustainable space for your comfort."',
      story_cta:         'Start With Us Today',

      // Values
      values_tag:        'Our DNA',
      values_title:      'Values That',
      values_title_gold: 'Define Us',
      val1_title:        'Honesty & Integrity',
      val1_desc:         'Long-term relationships built on reliability.',
      val2_title:        'Trust & Security',
      val2_desc:         'You invite us into your space — we honor that privilege.',
      val3_title:        'Attention to Detail',
      val3_desc:         'Thorough, methodical cleaning every single visit.',
      val4_title:        'People-First',
      val4_desc:         'Clients and collaborators are our greatest asset.',

      // Industries
      ind_tag:           'Who We Serve',
      ind_title:         'Industries We',
      ind_title_gold:    'Specialize In',
      ind_health_title:  'Healthcare & Medical',
      ind_health_desc:   'Hospitals, clinics, dental offices, labs & veterinary facilities',
      ind_edu_title:     'Education',
      ind_edu_desc:      'Private & public schools, universities, and daycare centers',
      ind_gov_title:     'Government',
      ind_gov_desc:      'Federal and state buildings requiring strict compliance',
      ind_retail_title:  'Retail & Hospitality',
      ind_retail_desc:   'Malls, banks, hotels, restaurants & airports',
      ind_ind_title:     'Industrial & Warehouse',
      ind_ind_desc:      'Large facilities and storage spaces',
      ind_luxury_title:  'Luxury Residential',
      ind_luxury_desc:   'High-end condos in Manhattan, Greenwich & The Hamptons',

      // Why Us
      why_tag:           'Why AJB?',
      why_title:         'The Standard',
      why_title_gold:    'Others Aspire To',
      why_subtitle:      "We don't just clean — we protect your assets, your reputation, and the health of everyone who walks through your doors.",
      why_p1_bold:       '28+ years',
      why_p1_rest:       'of proven excellence in the NY/NJ/CT/PA market',
      why_p2_bold:       'Free initial assessment',
      why_p2_rest:       'and personalized quote — no commitment needed',
      why_p3_bold:       '24-hour satisfaction guarantee:',
      why_p3_rest:       "we'll come back, no questions asked",
      why_p4_bold:       'OSHA-trained staff',
      why_p4_rest:       'for safe handling of chemicals and equipment',
      why_p5_bold:       'Eco-friendly options',
      why_p5_rest:       'with EPA-certified, biodegradable products',
      why_p6_bold:       'Fully licensed & insured',
      why_p6_rest:       'for your complete peace of mind',
      why_cta:           'Get Your Free Quote',
      stat1_label:       'Years in Business',
      stat2_label:       'Available Service',

      // Testimonials
      testi_tag:         'Client Voices',
      testi_title:       'What Clients',
      testi_title_gold:  'Say About Us',
      testi_subtitle:    'Real experiences from real clients across NY, NJ, CT & PA.',
      testi1_text:       '"AJB has been servicing our medical facility for years. Their attention to sanitation protocols is exceptional and gives us complete confidence."',
      testi1_name:       'Dr. Rivera',
      testi1_role:       'Medical Clinic Director, NJ',
      testi2_text:       '"Reliable, professional, and thorough. Our office has never looked better. They truly go above and beyond every single visit."',
      testi2_name:       'Sarah M.',
      testi2_role:       'Luxury Residential Specialist',
      testi3_text:       '"Post-construction cleanup was handled with incredible speed and professionalism. Our site was spotless in record time."',
      testi3_name:       'James L.',
      testi3_role:       'General Contractor',
      testi_view_all:    'View All Reviews / Leave a Review →',
      tp_tag:            'Client Voices',
      tp_title:          'Real Reviews,',
      tp_title_gold:     'Real Clients',
      tp_view_all:       'View All Reviews',

      // Contact
      contact_tag:          'Get in Touch',
      contact_title:        'Request Your',
      contact_title_gold:   'Free Quote',
      contact_desc:         'No commitment. No pressure. Just a free, personalized assessment of your space and a transparent proposal — delivered fast.',
      contact_phone_label:  'Call / WhatsApp:',
      contact_email_label:  'Email:',
      contact_serving_label:'Serving:',
      contact_leave_review: '⭐ Leave a Review',

      // Form
      form_title:           "Start Here — It's Free",
      form_name:            'Full Name',
      form_name_ph:         'Your full name',
      form_email:           'Email',
      form_email_ph:        'your@email.com',
      form_phone:           'Phone / WhatsApp',
      form_service:         'Service Type',
      form_service_default: 'Select a service...',
      form_svc_office:      'Office & Commercial',
      form_svc_medical:     'Healthcare / Medical',
      form_svc_post:        'Post-Construction',
      form_svc_res:         'Luxury Residential',
      form_svc_floor:       'Floor Treatment',
      form_svc_pressure:    'Pressure Washing',
      form_svc_other:       'Other / Not Sure',
      form_message:         'Message (Optional)',
      form_message_ph:      'Tell us about your space...',
      form_submit:          'Request My Free Quote',
      form_success:         '✅ Request Sent!',
      form_success_title:   'Request Sent!',
      form_success_desc:    'Thank you! We received your quote request and will contact you within 24 hours. Check your email for a confirmation.',

      // Footer
      footer_tagline:       'More than cleaning, we create a sustainable space for your comfort.',
      footer_services_title:'Services',
      footer_company_title: 'Company',
      footer_contact_title: 'Contact',
      footer_copy:          '© 2026 AJB Cleaning Services, LLC. All rights reserved.',

      // Gallery Categories
      cat_all:           'All',
      cat_office:        'Offices',
      cat_medical:       'Medical',
      cat_residential:   'Residential',
      cat_construction:  'Construction',
      cat_industrial:    'Industrial',

      // Gallery Specific Titles (1-18)
      g_title_off1:      'Headquarters',
      g_desc_off1:       'Impeccable workspaces for productivity.',
      g_title_med1:      'Diagnostic Center',
      g_desc_med1:       'Sterile environments for patient safety.',
      g_title_res1:      'Penthouse Suite',
      g_desc_res1:       'Luxury care for premium residences.',
      g_title_con1:      'Post-Build Shine',
      g_desc_con1:       'Ready for occupants, zero dust.',
      g_title_ind1:      'Industrial Floor',
      g_desc_ind1:       'Heavy duty care for logistics hubs.',
      g_title_off2:      'Executive Suite',
      g_desc_off2:       'Premium maintenance for boardrooms.',
      g_title_off3:      'Open Workspace',
      g_desc_off3:       'Dynamic cleaning for modern teams.',
      g_title_med2:      'Private Lab',
      g_desc_med2:       'OSHA-compliant deep disinfection.',
      g_title_res2:      'Modern Flat',
      g_desc_res2:       'Personalized routine for comfort.',
      g_title_con2:      'Retail Build',
      g_desc_con2:       'Perfect presentation for store openings.',
      g_title_ind2:      'Main Factory',
      g_desc_ind2:       'High-standard hygiene for production lines.',
      g_title_off4:      'Reception Area',
      g_desc_off4:       'First impressions that matter.',
      g_title_med3:      'Surgical Room',
      g_desc_med3:       'Highest standards of sterility.',
      g_title_res3:      'Family Estate',
      g_desc_res3:       'Privacy and quality combined.',
      g_title_con3:      'New Development',
      g_desc_con3:       'Large scale post-build care.',
      g_title_ind3:      'Storage Units',
      g_desc_ind3:       'Safe and hygienic logistics.',
      g_title_off5:      'Coworking Space',
      g_desc_off5:       'Adaptive cleaning for shared areas.',
      g_title_med4:      'Patient Ward',
      g_desc_med4:       'Comfort through meticulous hygiene.',
    },

    es: {
      // Navbar
      nav_services:      'Servicios',
      nav_industries:    'Industrias',
      nav_about:         'Nosotros',
      nav_contact:       'Contacto',
      nav_testimonials:  '⭐ Reseñas',
      nav_cta:           'Solicitar Cotización',

      // Hero
      hero_badge:        '⭐ 28+ Años de Excelencia',
      hero_title_1:      'LIMPIEZA COMERCIAL',
      hero_title_2:      'PREMIUM',
      hero_title_3:      'PARA EMPRESAS EXIGENTES.',
      hero_subtitle:     'Soluciones expertas de limpieza para instalaciones de salud, oficinas corporativas y negocios que exigen los más altos estándares — NY, NJ, CT y PA.',
      hero_cta_primary:  'Obtener Cotización Gratis',
      hero_cta_secondary:'Nuestra Historia',
      hero_scroll:       'Deslizar',

      // Trust Bar
      trust_licensed:    'Licenciados y Asegurados',
      trust_247:         'Servicio 24/7',
      trust_osha:        'Equipo Certificado OSHA',
      trust_eco:         'Productos Ecológicos',
      trust_guarantee:   'Garantía de 24 Horas',

      // Services
      svc_tag:           'Lo Que Hacemos',
      svc_title:         'Nuestros',
      svc_title_gold:    'Servicios',
      svc_title2:        'Especializados',
      svc_subtitle:      'Cada espacio es único. Cada solución que ofrecemos está diseñada para cumplir exactamente sus requerimientos.',
      svc_learn:         'Ver Más →',

      svc_office_title:  'Oficinas y Comercial',
      svc_office_desc:   'Mantenimiento diario, semanal o mensual para oficinas, restaurantes, escuelas y edificios gubernamentales.',
      svc_medical_title: 'Instalaciones de Salud',
      svc_medical_desc:  'Desinfección profunda para hospitales, clínicas, consultorios dentales y laboratorios — cumpliendo normas estrictas de OSHA.',
      svc_post_title:    'Post-Construcción',
      svc_post_desc:     'Eliminación de polvo, escombros y residuos de construcción para ocupación inmediata tras renovaciones u obras nuevas.',
      svc_res_title:     'Residencial de Lujo',
      svc_res_desc:      'Servicio guante blanco para condominios de alto nivel, limpiezas de mudanza y apartamentos Airbnb en ubicaciones premium.',
      svc_floor_title:   'Tratamiento de Pisos',
      svc_floor_desc:    'Pulido, decapado y encerado profesional de pisos de vinilo, madera y mármol con equipos industriales de alta gama.',
      svc_custom_title:  '¿Necesitas Algo Personalizado?',
      svc_custom_desc:   'Evaluamos cada espacio de forma personal. Lavado a presión, limpieza ecológica, alfombras — si lo necesitas, lo hacemos.',
      svc_custom_cta:    'Solicitar Evaluación Gratuita',

      // Story
      story_tag:         'Desde 1998',
      story_title:       'Una Historia de',
      story_title_gold:  'Esfuerzo y Dedicación',
      story_p1:          'En 1998, nuestro fundador Julio comenzó con una visión simple: que los espacios merecen una <strong>cultura de higiene rigurosa y personalizada</strong> — no solo una limpieza de rutina.',
      story_p2:          'Trabajando <strong>14 horas diarias</strong>, aprendiendo inglés desde cero, repartiendo tarjetas de negocio una a una — construyó un equipo y una reputación desde sus cimientos. Hoy, <strong>más de 28 años después</strong>, AJB Cleaning Services es la prueba de que el compromiso y la calidad construyen un negocio resiliente y rentable.',
      story_quote:       '"Más que limpieza, creamos un espacio sostenible para tu comodidad."',
      story_cta:         'Empieza Con Nosotros Hoy',

      // Values
      values_tag:        'Nuestro ADN',
      values_title:      'Los Valores Que',
      values_title_gold: 'Nos Definen',
      val1_title:        'Honestidad e Integridad',
      val1_desc:         'Relaciones a largo plazo basadas en la confiabilidad.',
      val2_title:        'Confianza y Seguridad',
      val2_desc:         'Nos invitas a tu espacio — honramos ese privilegio.',
      val3_title:        'Atención al Detalle',
      val3_desc:         'Limpieza minuciosa y metódica en cada visita.',
      val4_title:        'Las Personas Primero',
      val4_desc:         'Los clientes y colaboradores son nuestro mayor activo.',

      // Industries
      ind_tag:           'A Quiénes Servimos',
      ind_title:         'Industrias en las que',
      ind_title_gold:    'Nos Especializamos',
      ind_health_title:  'Salud y Medicina',
      ind_health_desc:   'Hospitales, clínicas, consultorios dentales, laboratorios y veterinarias',
      ind_edu_title:     'Educación',
      ind_edu_desc:      'Colegios públicos y privados, universidades y guarderías',
      ind_gov_title:     'Gobierno',
      ind_gov_desc:      'Edificios federales y estatales con cumplimiento estricto',
      ind_retail_title:  'Comercio y Hospitalidad',
      ind_retail_desc:   'Centros comerciales, bancos, hoteles, restaurantes y aeropuertos',
      ind_ind_title:     'Industrial y Almacenes',
      ind_ind_desc:      'Grandes instalaciones y espacios de almacenamiento',
      ind_luxury_title:  'Residencial de Lujo',
      ind_luxury_desc:   'Condominios de alto nivel en Manhattan, Greenwich y The Hamptons',

      // Why Us
      why_tag:           '¿Por Qué AJB?',
      why_title:         'El Estándar al que',
      why_title_gold:    'Otros Aspiran',
      why_subtitle:      'No solo limpiamos — protegemos tus activos, tu reputación y la salud de todos los que caminan por tus instalaciones.',
      why_p1_bold:       '28+ años',
      why_p1_rest:       'de excelencia comprobada en los mercados de NY/NJ/CT/PA',
      why_p2_bold:       'Evaluación inicial gratuita',
      why_p2_rest:       'y cotización personalizada — sin ningún compromiso',
      why_p3_bold:       'Garantía de satisfacción de 24 horas:',
      why_p3_rest:       'regresamos sin hacer preguntas',
      why_p4_bold:       'Personal certificado OSHA',
      why_p4_rest:       'para el manejo seguro de químicos y equipos',
      why_p5_bold:       'Opciones ecológicas',
      why_p5_rest:       'con productos certificados por la EPA, biodegradables',
      why_p6_bold:       'Totalmente licenciados y asegurados',
      why_p6_rest:       'para tu completa tranquilidad',
      why_cta:           'Obtener Cotización Gratis',
      stat1_label:       'Años en el Mercado',
      stat2_label:       'Servicio Disponible',

      // Testimonials
      testi_tag:         'Voz de Nuestros Clientes',
      testi_title:       'Lo que los Clientes',
      testi_title_gold:  'Dicen de Nosotros',
      testi_subtitle:    'Experiencias reales de clientes reales en NY, NJ, CT y PA.',
      testi1_text:       '"AJB lleva años prestando servicio en nuestra clínica. Su atención a los protocolos de higiene es excepcional y nos da total confianza."',
      testi1_name:       'Dr. Rivera',
      testi1_role:       'Director de Clínica Médica, NJ',
      testi2_text:       '"Confiable, profesional y minucioso. Nuestra oficina nunca ha lucido mejor. Realmente van más allá en cada visita."',
      testi2_name:       'Sarah M.',
      testi2_role:       'Especialista en Residencial de Lujo',
      testi3_text:       '"La limpieza post-construcción se manejó con una rapidez y profesionalismo increíbles. Nuestro sitio quedó impecable en tiempo récord."',
      testi3_name:       'James L.',
      testi3_role:       'Contratista General',
      testi_view_all:    'Ver Todas las Reseñas / Dejar una Reseña →',
      tp_tag:            'Voces de Clientes',
      tp_title:          'Reseñas Reales,',
      tp_title_gold:     'Clientes Reales',
      tp_view_all:       'Ver Todas las Reseñas',

      // Contact
      contact_tag:          'Contáctanos',
      contact_title:        'Solicita tu',
      contact_title_gold:   'Cotización Gratuita',
      contact_desc:         'Sin compromisos. Sin presión. Solo una evaluación gratuita y personalizada de tu espacio y una propuesta transparente — entregada rápido.',
      contact_phone_label:  'Llama / WhatsApp:',
      contact_email_label:  'Correo:',
      contact_serving_label:'Servimos a:',
      contact_leave_review: '⭐ Dejar una Reseña',

      // Form
      form_title:           'Empieza Aquí — ¡Es Gratis!',
      form_name:            'Nombre Completo',
      form_name_ph:         'Tu nombre completo',
      form_email:           'Correo Electrónico',
      form_email_ph:        'tu@correo.com',
      form_phone:           'Teléfono / WhatsApp',
      form_service:         'Tipo de Servicio',
      form_service_default: 'Selecciona un servicio...',
      form_svc_office:      'Oficinas y Comercial',
      form_svc_medical:     'Salud / Médico',
      form_svc_post:        'Post-Construcción',
      form_svc_res:         'Residencial de Lujo',
      form_svc_floor:       'Tratamiento de Pisos',
      form_svc_pressure:    'Lavado a Presión',
      form_svc_other:       'Otro / No Estoy Seguro',
      form_message:         'Mensaje (Opcional)',
      form_message_ph:      'Cuéntanos sobre tu espacio...',
      form_submit:          'Solicitar Cotización Gratis',
      form_success:         '✅ ¡Solicitud Enviada!',
      form_success_title:   '¡Solicitud Enviada!',
      form_success_desc:    '¡Gracias! Recibimos tu solicitud y te contactaremos en las próximas 24 horas. Revisa tu correo para ver la confirmación.',

      // Footer
      footer_tagline:       'Más que limpieza, creamos un espacio sostenible para tu comodidad.',
      footer_services_title:'Servicios',
      footer_company_title: 'Empresa',
      footer_contact_title: 'Contacto',
      footer_copy:          '© 2026 AJB Cleaning Services, LLC. Todos los derechos reservados.',

      // Categorías de Galería
      cat_all:           'Todos',
      cat_office:        'Oficinas',
      cat_medical:       'Salud',
      cat_residential:   'Residencial',
      cat_construction:  'Construcción',
      cat_industrial:    'Industrial',

      // Títulos Específicos de Galería (1-18)
      g_title_off1:      'Sede Corporativa',
      g_desc_off1:       'Espacios de trabajo impecables para la productividad.',
      g_title_med1:      'Centro de Diagnóstico',
      g_desc_med1:       'Entornos estériles para la seguridad del paciente.',
      g_title_res1:      'Suite Penthouse',
      g_desc_res1:       'Cuidado de lujo para residencias premium.',
      g_title_con1:      'Brillo Post-Obra',
      g_desc_con1:       'Listo para ocupantes, cero polvo.',
      g_title_ind1:      'Planta Industrial',
      g_desc_ind1:       'Cuidado pesado para centros logísticos.',
      g_title_off2:      'Suite Ejecutiva',
      g_desc_off2:       'Mantenimiento premium para salas de juntas.',
      g_title_off3:      'Espacio Abierto',
      g_desc_off3:       'Limpieza dinámica para equipos modernos.',
      g_title_med2:      'Laboratorio Privado',
      g_desc_med2:       'Desinfección profunda bajo normas OSHA.',
      g_title_res2:      'Apartamento Moderno',
      g_desc_res2:       'Rutina personalizada para tu comodidad.',
      g_title_con2:      'Obra Comercial',
      g_desc_con2:       'Presentación perfecta para aperturas.',
      g_title_ind2:      'Fábrica Principal',
      g_desc_ind2:       'Higiene de alto estándar en líneas de producción.',
      g_title_off4:      'Área de Recepción',
      g_desc_off4:       'Primeras impresiones que cuentan.',
      g_title_med3:      'Sala Quirúrgica',
      g_desc_med3:       'Los más altos estándares de esterilidad.',
      g_title_res3:      'Finca Familiar',
      g_desc_res3:       'Privacidad y calidad combinadas.',
      g_title_con3:      'Desarrollo Nuevo',
      g_desc_con3:       'Cuidado post-obra a gran escala.',
      g_title_ind3:      'Unidades de Bodegaje',
      g_desc_ind3:       'Logística segura e higiénica.',
      g_title_off5:      'Espacio Coworking',
      g_desc_off5:       'Limpieza adaptativa para áreas compartidas.',
      g_title_med4:      'Sala de Pacientes',
      g_desc_med4:       'Confort a través de una higiene meticulosa.',
    }
  };

  // ===== CORE TRANSLATION FUNCTION =====
  let currentLang = 'en';
  try {
    currentLang = localStorage.getItem('ajb_lang') || 'en';
  } catch (e) {
    console.warn("localStorage access denied, defaulting to 'en'");
  }

  function applyTranslations(lang) {
    const dict = LANGS[lang];
    if (!dict) return;
    currentLang = lang;
    try {
      localStorage.setItem('ajb_lang', lang);
    } catch (e) {}

    // Update html[lang] attribute
    document.documentElement.setAttribute('lang', lang);

    // Update text content
    document.querySelectorAll('[data-t]').forEach(el => {
      const key = el.getAttribute('data-t');
      if (dict[key] !== undefined) {
        el.innerHTML = dict[key];
      }
    });

    // Update placeholders
    document.querySelectorAll('[data-t-placeholder]').forEach(el => {
      const key = el.getAttribute('data-t-placeholder');
      if (dict[key] !== undefined) {
        el.setAttribute('placeholder', dict[key]);
      }
    });

    // Update language toggle button
    const btn = document.getElementById('langToggle');
    if (btn) {
      btn.textContent = lang === 'en' ? 'ES' : 'EN';
      btn.setAttribute('aria-label', lang === 'en' ? 'Switch to Spanish' : 'Cambiar a Inglés');
    }
  }

  // ===== LANGUAGE TOGGLE BUTTONS =====
  function initLangToggle() {
    const desktopBtn = document.getElementById('langToggle');
    const mobileBtn  = document.getElementById('mobileLangToggle');
    
    const elements = [desktopBtn, mobileBtn].filter(el => el);
    
    elements.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const newLang = currentLang === 'en' ? 'es' : 'en';
        applyTranslations(newLang);
      });
    });
  }

  // ===== INIT =====
  document.addEventListener('DOMContentLoaded', () => {
    initLangToggle();
    applyTranslations(currentLang);
  });

  // Expose for external use (e.g., testimonials page)
  window.AJBi18n = { applyTranslations, LANGS, getCurrentLang: () => currentLang };
})();
