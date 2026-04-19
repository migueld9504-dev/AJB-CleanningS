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
      nav_services: 'Services',
      nav_industries: 'Industries',
      nav_about: 'About',
      nav_contact: 'Contact',
      nav_gallery: 'Gallery',
      nav_testimonials: '⭐ Reviews',
      nav_cta: 'Request a Quote',

      // Hero
      hero_badge: '⭐ 28+ Years of Excellence',
      hero_title_1: 'PREMIUM COMMERCIAL',
      hero_title_2: 'CLEANING',
      hero_title_3: 'FOR BUSY BUSINESSES.',
      hero_subtitle: 'Expert cleaning solutions for healthcare, corporate offices, and facilities that demand the highest standards — NY, NJ, CT & PA.',
      hero_cta_primary: 'Get a Free Quote',
      hero_cta_secondary: 'Our Story',
      hero_scroll: 'Scroll',

      // Trust Bar
      trust_licensed: 'Licensed & Insured',
      trust_247: '24/7 Service',
      trust_osha: 'OSHA-Certified Team',
      trust_eco: 'Eco-Friendly Products',
      trust_guarantee: '24-Hour Guarantee',

      // Services
      svc_tag: 'What We Do',
      svc_title: 'Our',
      svc_title_gold: 'Specialized',
      svc_title2: 'Services',
      svc_subtitle: 'Every space is unique. Every solution we offer is tailored to match your exact requirements.',
      svc_learn: 'Learn More →',

      svc_office_title: 'Office & Commercial',
      svc_office_desc: 'Daily, weekly, or monthly maintenance for offices, restaurants, schools, and government buildings.',
      svc_medical_title: 'Healthcare Facilities',
      svc_medical_desc: 'Deep disinfection for hospitals, clinics, dental offices, and labs — meeting strict OSHA compliance standards.',
      svc_post_title: 'Post-Construction',
      svc_post_desc: 'Elimination of dust, debris, and construction residue for immediate occupancy after renovations or new builds.',
      svc_res_title: 'Luxury Residential',
      svc_res_desc: 'White-glove service for high-end condos, move-in/move-out cleans, and Airbnb turnarounds in premium locations.',
      svc_floor_title: 'Floor Treatment',
      svc_floor_desc: 'Professional polishing, stripping, and waxing for vinyl, hardwood, and marble floors using industrial-grade equipment.',
      svc_custom_title: 'Need Something Custom?',
      svc_custom_desc: 'We evaluate every space personally. Pressure washing, eco-clean, carpet care — if you need it, we do it.',
      svc_custom_cta: 'Get a Free Assessment',

      // Story
      story_tag: 'Since 1998',
      story_title: 'A Story Built on',
      story_title_gold: 'Hard Work',
      story_p1: 'In 1998, our founder Julio started with a simple vision: that spaces deserve a <strong>rigorous, personalized culture of hygiene</strong> — not just a routine wipe-down.',
      story_p2: 'Working <strong>14-hour days</strong>, learning English from zero, handing out business cards one by one — he built a team and a reputation from the ground up. Today, <strong>28+ years later</strong>, AJB Cleaning Services stands as proof that commitment and quality create a resilient, profitable business.',
      story_quote: '"More than cleaning, we create a sustainable space for your comfort."',
      story_cta: 'Start With Us Today',

      // Values
      values_tag: 'Our DNA',
      values_title: 'Values That',
      values_title_gold: 'Define Us',
      val1_title: 'Trust',
      val1_desc: 'Commitment to quality, responsibility, and fulfillment in every service. It is the result of solid processes, qualified personnel, and the constant satisfaction of our clients.',
      val2_title: 'Integrity',
      val2_desc: 'Firm orientation towards honesty, ethics, and transparency in every action. We act with responsibility and coherence, guaranteeing trustworthy relationships.',
      val3_title: 'Responsibility',
      val3_desc: 'Dedication to punctual fulfillment, attention to detail, and respect for acquired commitments. We act with discipline and efficiency.',
      val4_title: 'Excellence',
      val4_desc: 'Constant search for high standards in every service. We focus on continuous improvement, attention to detail, and quality in every result.',
      val5_title: 'Adaptability',
      val5_desc: 'Ability to quickly adjust to each client\'s needs and environmental changes. We respond with efficient and flexible solutions.',
      val6_title: 'Security',
      val6_desc: 'Focus on protecting people, spaces, and assets. We apply rigorous protocols, trained personnel, and responsible practices.',

      // Industries
      ind_tag: 'Who We Serve',
      ind_title: 'Industries We',
      ind_title_gold: 'Specialize In',
      ind_health_title: 'Healthcare & Medical',
      ind_health_desc: 'Hospitals, clinics, dental offices, labs & veterinary facilities',
      ind_edu_title: 'Education',
      ind_edu_desc: 'Private & public schools, universities, and daycare centers',
      ind_gov_title: 'Government',
      ind_gov_desc: 'Federal and state buildings requiring strict compliance',
      ind_retail_title: 'Retail & Hospitality',
      ind_retail_desc: 'Malls, banks, hotels, restaurants & airports',
      ind_ind_title: 'Industrial & Warehouse',
      ind_ind_desc: 'Large facilities and storage spaces',
      ind_luxury_title: 'Luxury Residential',
      ind_luxury_desc: 'High-end condos in Manhattan, Greenwich & The Hamptons',

      // Why Us
      why_tag: 'Why AJB?',
      why_title: 'The Standard',
      why_title_gold: 'Others Aspire To',
      why_subtitle: "We don't just clean — we protect your assets, your reputation, and the health of everyone who walks through your doors.",
      why_p1_bold: '28+ years',
      why_p1_rest: 'of proven excellence in the NY/NJ/CT/PA market',
      why_p2_bold: 'Free initial assessment',
      why_p2_rest: 'and personalized quote — no commitment needed',
      why_p3_bold: '24-hour satisfaction guarantee:',
      why_p3_rest: "we'll come back, no questions asked",
      why_p4_bold: 'OSHA-trained staff',
      why_p4_rest: 'for safe handling of chemicals and equipment',
      why_p5_bold: 'Eco-friendly options',
      why_p5_rest: 'with EPA-certified, biodegradable products',
      why_p6_bold: 'Fully licensed & insured',
      why_p6_rest: 'for your complete peace of mind',
      why_cta: 'Get Your Free Quote',
      stat1_label: 'Years in Business',
      stat2_label: 'Available Service',

      // Testimonials
      testi_tag: 'Client Voices',
      testi_title: 'What Clients',
      testi_title_gold: 'Say About Us',
      testi_subtitle: 'Real experiences from real clients across NY, NJ, CT & PA.',
      testi1_text: '"AJB has been servicing our medical facility for years. Their attention to sanitation protocols is exceptional and gives us complete confidence."',
      testi1_name: 'Dr. Rivera',
      testi1_role: 'Medical Clinic Director, NJ',
      testi2_text: '"Reliable, professional, and thorough. Our office has never looked better. They truly go above and beyond every single visit."',
      testi2_name: 'Sarah M.',
      testi2_role: 'Luxury Residential Specialist',
      testi3_text: '"Post-construction cleanup was handled with incredible speed and professionalism. Our site was spotless in record time."',
      testi3_name: 'James L.',
      testi3_role: 'General Contractor',
      testi_view_all: 'View All Reviews / Leave a Review →',
      tp_tag: 'Client Voices',
      tp_title: 'Real Reviews,',
      tp_title_gold: 'Real Clients',
      tp_view_all: 'View All Reviews',

      // Contact
      contact_tag: 'Get in Touch',
      contact_title: 'Request Your',
      contact_title_gold: 'Free Quote',
      contact_desc: 'No commitment. No pressure. Just a free, personalized assessment of your space and a transparent proposal — delivered fast.',
      contact_phone_label: 'Call / WhatsApp:',
      contact_email_label: 'Email:',
      contact_serving_label: 'Serving:',
      contact_leave_review: '⭐ Leave a Review',

      // Form
      form_title: "Start Here — It's Free",
      form_name: 'Full Name',
      form_name_ph: 'Your full name',
      form_email: 'Email',
      form_email_ph: 'your@email.com',
      form_phone: 'Phone / WhatsApp',
      form_service: 'Service Type',
      form_service_default: 'Select a service...',
      form_svc_general: 'General Cleaning',
      form_svc_church: 'Churches',
      form_svc_schools: 'Schools',
      form_svc_university: 'University',
      form_svc_offices: 'Offices',
      form_svc_halls: 'Halls',
      form_svc_hospitals: 'Hospitals',
      form_svc_luxury: 'Luxury Residential',
      form_svc_move: 'Move In / Move Out',
      form_svc_deep: 'Deep Cleaning',
      form_svc_window: 'Window Cleaning',
      form_svc_construction: 'Construction Cleanup',
      form_svc_other: 'Other / Not Sure',
      form_message: 'Message (Optional)',
      form_message_ph: 'Tell us about your space...',
      form_submit: 'Request My Free Quote',
      form_success_title: 'Request Sent!',
      form_success_desc: 'Thank you! We received your quote request and will contact you within 24 hours. Check your email for a confirmation.',
      rf_form_title: 'Your Experience Matters',
      rf_name_ph: 'Name',
      rf_role_ph: 'Role',
      rf_review_ph: 'Your review...',
      rf_submit: 'Submit Review',

      // Footer
      footer_tagline: 'More than cleaning, we create a sustainable space for your comfort.',
      footer_services_title: 'Services',
      footer_company_title: 'Company',
      footer_contact_title: 'Contact',
      footer_copy: '© 2026 AJB Cleaning Services, LLC. All rights reserved.',

      // Gallery Categories
      cat_all: 'All',
      cat_offices_recep: 'Offices & Receptions',
      cat_classrooms: 'Classrooms / Schools',
      cat_mirrors: 'Mirrors',
      cat_auditoriums: 'Auditoriums',
      cat_gym: 'Fitness Centers',
      cat_dining: 'Dining Rooms',
      cat_cafeteria: 'Cafeterias',
      cat_training: 'Training Centers',
      cat_church: 'Churches',
      cat_green_zones: 'Green Zones',

      // Gallery Specific Titles (1-36)
      g_title_off_rec4: 'Lobby Area',
      g_desc_off_rec4: 'Impeccable lobby management.',
      g_title_off_rec5: 'Modern Workspace',
      g_desc_off_rec5: 'Desinfected and ready for work.',
      g_title_off_rec6: 'Corporate Suite',
      g_desc_off_rec6: 'Attention to every detail.',
      g_title_off_rec7: 'Administrative Wing',
      g_desc_off_rec7: 'Sanitized desks for administrative staff.',
      g_title_off_rec8: 'Meeting Room',
      g_desc_off_rec8: 'Crystal clean glass and surfaces.',
      g_title_off_rec9: 'Open Office',
      g_desc_off_rec9: 'Dynamic workspaces kept hygienic.',
      g_title_off_rec10: 'Boardroom',
      g_desc_off_rec10: 'Premium cleaning for executive meetings.',
      g_title_off_rec11: 'Break Area',
      g_desc_off_rec11: 'Refreshment zones maintained spotless.',
      
      g_title_classroom1: 'Main Classroom',
      g_desc_classroom1: 'Clean learning environments for students.',
      g_title_classroom2: 'Lecture Room',
      g_desc_classroom2: 'Detailed cleaning for educational spaces.',
      g_title_classroom3: 'Study Area',
      g_desc_classroom3: 'Dust-free zones for concentration.',
      g_title_classroom4: 'Faculty Lounge',
      g_desc_classroom4: 'Hygienic spaces for staff and teachers.',

      g_title_mirror1: 'Reflective Surfaces',
      g_desc_mirror1: 'Spotless mirrors without streaks.',
      g_title_mirror2: 'Glass & Detail',
      g_desc_mirror2: 'Maximum transparency and brightness.',
      g_title_mirror3: 'Detailed Glass',
      g_desc_mirror3: 'Clarity in every reflection.',
      g_title_mirror4: 'Window Care',
      g_desc_mirror4: 'Professional treatment for glass surfaces.',

      g_title_audi1: 'Grand Auditorium',
      g_desc_audi1: 'Large scale cleaning for public spaces.',
      g_title_audi2: 'Theater Area',
      g_desc_audi2: 'Meticulous maintenance of seats and floors.',
      g_title_audi3: 'Lecture Hall',
      g_desc_audi3: 'Clean spaces for mass communication.',
      g_title_audi4: 'Performance Stage',
      g_desc_audi4: 'Spotless stage for your best moments.',
      g_title_audi5: 'Auditorium',
      g_desc_audi5: 'Deep cleaning of carpets and seating.',
      g_title_audi6: 'Auditorium',
      g_desc_audi6: 'Surfaces ready for major events.',

      g_title_gym1: 'Fitness Center',
      g_desc_gym1: 'Deep sanitization for health and safety.',
      g_title_gym2: 'Weight Room',
      g_desc_gym2: 'Hygienic environment for high-traffic areas.',
      g_title_gym3: 'Training Floor',
      g_desc_gym3: 'Surface maintenance for specialized equipment.',
      g_title_gym4: 'Locker Rooms',
      g_desc_gym4: 'High-standard hygiene in wet areas.',

      g_title_dining1: 'Executive Dining',
      g_desc_dining1: 'High standards of hygiene in food areas.',
      g_title_dining2: 'Staff Canteen',
      g_desc_dining2: 'Clean and pleasant spaces for breaks.',
      g_title_dining3: 'Restaurant Floor',
      g_desc_dining3: 'Spotless environment for diners.',
      g_title_dining4: 'Kitchen Facility',
      g_desc_dining4: 'Rigorous sanitation for food prep.',

      g_title_cafeteria1: 'Modern Cafeteria',
      g_desc_cafeteria1: 'Flawless surfaces for food service.',
      g_title_cafeteria2: 'Coffee Station',
      g_desc_cafeteria2: 'Detail-oriented maintenance.',
      g_title_cafeteria3: 'Bistro Area',
      g_desc_cafeteria3: 'Welcoming and clean social spots.',
      g_title_cafeteria4: 'Snack Bar',
      g_desc_cafeteria4: 'Quick cleaning for busy areas.',

      g_title_training1: 'University Campus',
      g_desc_training1: 'Inspirational spaces for learning.',
      g_title_training2: 'Training Center',
      g_desc_training2: 'Productive environment for students.',
      g_title_training3: 'Study Lab',
      g_desc_training3: 'Sanitized equipment and desks.',
      g_title_training4: 'College Library',
      g_desc_training4: 'Quiet and dust-free knowledge centers.',

      g_title_church1: 'Main Sanctuary',
      g_desc_church1: 'Respectful and thorough cleaning.',
      g_title_church2: 'Community Hall',
      g_desc_church2: 'Welcoming spaces for congregations.',
      g_title_church3: 'Sacristy',
      g_desc_church3: 'Meticulous care for sacred items.',
      g_title_church4: 'Church Garden',
      g_desc_church4: 'Clean exterior spaces for reflection.',

      g_title_green1: 'Exterior Garden',
      g_desc_green1: 'Meticulous care for green areas.',
      g_title_green2: 'Park Area',
      g_desc_green2: 'Clean spaces for outdoor relaxation.',
      g_title_green3: 'Lawn Maintenance',
      g_desc_green3: 'Professional landscape hygiene.',
      g_title_green4: 'Pathways',
      g_desc_green4: 'Keeping walkways clear and safe.',

      g_title_off_rec5: 'Modern Workspace',
      g_desc_off_rec5: 'Disinfected and ready for work.',
      g_title_off_rec6: 'Corporate Suite',
      g_desc_off_rec6: 'Attention to every detail.',

      g_title_hall_esc1: 'Grand Staircase',
      g_desc_hall_esc1: 'High-traffic areas kept spotless.',
      g_title_hall_pas1: 'Office Corridor',
      g_desc_hall_pas1: 'Reflective floors and clean walls.',

      g_title_vid_aud: 'Auditorium Action',
      g_desc_vid_aud: 'Watch our team transform the space.',
      g_title_vid_caf: 'Cafeteria Care',
      g_desc_vid_caf: 'Professional sanitization video.',
      g_title_vid_uni: 'Campus Cleaning',
      g_desc_vid_uni: 'Deep cleaning for educational facilities.',
    },

    es: {
      // Navbar
      nav_services: 'Servicios',
      nav_industries: 'Industrias',
      nav_about: 'Nosotros',
      nav_contact: 'Contacto',
      nav_gallery: 'Galería',
      nav_testimonials: '⭐ Reseñas',
      nav_cta: 'Solicitar Cotización',

      // Hero
      hero_badge: '⭐ 28+ Años de Excelencia',
      hero_title_1: 'LIMPIEZA COMERCIAL',
      hero_title_2: 'PREMIUM',
      hero_title_3: 'PARA EMPRESAS EXIGENTES.',
      hero_subtitle: 'Soluciones expertas de limpieza para instalaciones de salud, oficinas corporativas y negocios que exigen los más altos estándares — NY, NJ, CT y PA.',
      hero_cta_primary: 'Obtener Cotización Gratis',
      hero_cta_secondary: 'Nuestra Historia',
      hero_scroll: 'Deslizar',

      // Trust Bar
      trust_licensed: 'Licenciados y Asegurados',
      trust_247: 'Servicio 24/7',
      trust_osha: 'Equipo Certificado OSHA',
      trust_eco: 'Productos Ecológicos',
      trust_guarantee: 'Garantía de 24 Horas',

      // Services
      svc_tag: 'Lo Que Hacemos',
      svc_title: 'Nuestros',
      svc_title_gold: 'Servicios',
      svc_title2: 'Especializados',
      svc_subtitle: 'Cada espacio es único. Cada solución que ofrecemos está diseñada para cumplir exactamente sus requerimientos.',
      svc_learn: 'Ver Más →',

      svc_office_title: 'Oficinas y Comercial',
      svc_office_desc: 'Mantenimiento diario, semanal o mensual para oficinas, restaurantes, escuelas y edificios gubernamentales.',
      svc_medical_title: 'Instalaciones de Salud',
      svc_medical_desc: 'Desinfección profunda para hospitales, clínicas, consultorios dentales y laboratorios — cumpliendo normas estrictas de OSHA.',
      svc_post_title: 'Post-Construcción',
      svc_post_desc: 'Eliminación de polvo, escombros y residuos de construcción para ocupación inmediata tras renovaciones u obras nuevas.',
      svc_res_title: 'Residencial de Lujo',
      svc_res_desc: 'Servicio guante blanco para condominios de alto nivel, limpiezas de mudanza y apartamentos Airbnb en ubicaciones premium.',
      svc_floor_title: 'Tratamiento de Pisos',
      svc_floor_desc: 'Pulido, decapado y encerado profesional de pisos de vinilo, madera y mármol con equipos industriales de alta gama.',
      svc_custom_title: '¿Necesitas Algo Personalizado?',
      svc_custom_desc: 'Evaluamos cada espacio de forma personal. Lavado a presión, limpieza ecológica, alfombras — si lo necesitas, lo hacemos.',
      svc_custom_cta: 'Solicitar Evaluación Gratuita',

      // Story
      story_tag: 'Desde 1998',
      story_title: 'Una Historia de',
      story_title_gold: 'Esfuerzo y Dedicación',
      story_p1: 'En 1998, nuestro fundador Julio comenzó con una visión simple: que los espacios merecen una <strong>cultura de higiene rigurosa y personalizada</strong> — no solo una limpieza de rutina.',
      story_p2: 'Trabajando <strong>14 horas diarias</strong>, aprendiendo inglés desde cero, repartiendo tarjetas de negocio una a una — construyó un equipo y una reputación desde sus cimientos. Hoy, <strong>más de 28 años después</strong>, AJB Cleaning Services es la prueba de que el compromiso y la calidad construyen un negocio resiliente y rentable.',
      story_quote: '"Más que limpieza, creamos un espacio sostenible para tu comodidad."',
      story_cta: 'Empieza Con Nosotros Hoy',

      // Values
      values_tag: 'Nuestro ADN',
      values_title: 'Los Valores Que',
      values_title_gold: 'Nos Definen',
      val1_title: 'Confianza',
      val1_desc: 'Compromiso con la calidad, la responsabilidad y el cumplimiento en cada servicio. Es el resultado de procesos sólidos, personal calificado y la satisfacción constante de nuestros clientes. Elegirnos es contar con un servicio seguro, transparente y profesional.',
      val2_title: 'Integridad',
      val2_desc: 'Firme orientación hacia la honestidad, la ética y la transparencia en cada acción. Actuamos con responsabilidad y coherencia, garantizando relaciones de confianza y un servicio que cumple lo que promete.',
      val3_title: 'Responsabilidad',
      val3_desc: 'Dedicación al cumplimiento puntual, el cuidado de cada detalle y el respeto por los compromisos adquiridos. Actuamos con disciplina y eficiencia, garantizando un servicio confiable y consistente en todo momento.',
      val4_title: 'Excelencia',
      val4_desc: 'Búsqueda constante de altos estándares en cada servicio. Nos enfocamos en la mejora continua, la atención al detalle y la calidad en cada resultado, garantizando experiencias superiores para nuestros clientes.',
      val5_title: 'Adaptabilidad',
      val5_desc: 'Capacidad de ajustarnos con agilidad a las necesidades de cada cliente y a los cambios del entorno. Respondemos con soluciones eficientes y flexibles, garantizando un servicio oportuno y alineado con cada requerimiento.',
      val6_title: 'Seguridad',
      val6_desc: 'Enfoque en la protección de las personas, los espacios y los bienes de nuestros clientes. Aplicamos protocolos rigurosos, personal capacitado y prácticas responsables, garantizando un servicio confiable y libre de riesgos.',

      // Industries
      ind_tag: 'A Quiénes Servimos',
      ind_title: 'Industrias en las que',
      ind_title_gold: 'Nos Especializamos',
      ind_health_title: 'Salud y Medicina',
      ind_health_desc: 'Hospitales, clínicas, consultorios dentales, laboratorios y veterinarias',
      ind_edu_title: 'Educación',
      ind_edu_desc: 'Colegios públicos y privados, universidades y guarderías',
      ind_gov_title: 'Gobierno',
      ind_gov_desc: 'Edificios federales y estatales con cumplimiento estricto',
      ind_retail_title: 'Comercio y Hospitalidad',
      ind_retail_desc: 'Centros comerciales, bancos, hoteles, restaurantes y aeropuertos',
      ind_ind_title: 'Industrial y Almacenes',
      ind_ind_desc: 'Grandes instalaciones y espacios de almacenamiento',
      ind_luxury_title: 'Residencial de Lujo',
      ind_luxury_desc: 'Condominios de alto nivel en Manhattan, Greenwich y The Hamptons',

      // Why Us
      why_tag: '¿Por Qué AJB?',
      why_title: 'El Estándar al que',
      why_title_gold: 'Otros Aspiran',
      why_subtitle: 'No solo limpiamos — protegemos tus activos, tu reputación y la salud de todos los que caminan por tus instalaciones.',
      why_p1_bold: '28+ años',
      why_p1_rest: 'de excelencia comprobada en los mercados de NY/NJ/CT/PA',
      why_p2_bold: 'Evaluación inicial gratuita',
      why_p2_rest: 'y cotización personalizada — sin ningún compromiso',
      why_p3_bold: 'Garantía de satisfacción de 24 horas:',
      why_p3_rest: 'regresamos sin hacer preguntas',
      why_p4_bold: 'Personal certificado OSHA',
      why_p4_rest: 'para el manejo seguro de químicos y equipos',
      why_p5_bold: 'Opciones ecológicas',
      why_p5_rest: 'con productos certificados por la EPA, biodegradables',
      why_p6_bold: 'Totalmente licenciados y asegurados',
      why_p6_rest: 'para tu completa tranquilidad',
      why_cta: 'Obtener Cotización Gratis',
      stat1_label: 'Años en el Mercado',
      stat2_label: 'Servicio Disponible',

      // Testimonials
      testi_tag: 'Voz de Nuestros Clientes',
      testi_title: 'Lo que los Clientes',
      testi_title_gold: 'Dicen de Nosotros',
      testi_subtitle: 'Experiencias reales de clientes reales en NY, NJ, CT y PA.',
      testi1_text: '"AJB lleva años prestando servicio en nuestra clínica. Su atención a los protocolos de higiene es excepcional y nos da total confianza."',
      testi1_name: 'Dr. Rivera',
      testi1_role: 'Director de Clínica Médica, NJ',
      testi2_text: '"Confiable, profesional y minucioso. Nuestra oficina nunca ha lucido mejor. Realmente van más allá en cada visita."',
      testi2_name: 'Sarah M.',
      testi2_role: 'Especialista en Residencial de Lujo',
      testi3_text: '"La limpieza post-construcción se manejó con una rapidez y profesionalismo increíbles. Nuestro sitio quedó impecable en tiempo récord."',
      testi3_name: 'James L.',
      testi3_role: 'Contratista General',
      testi_view_all: 'Ver Todas las Reseñas / Dejar una Reseña →',
      tp_tag: 'Voces de Clientes',
      tp_title: 'Reseñas Reales,',
      tp_title_gold: 'Clientes Reales',
      tp_view_all: 'Ver Todas las Reseñas',

      // Contact
      contact_tag: 'Contáctanos',
      contact_title: 'Solicita tu',
      contact_title_gold: 'Cotización Gratuita',
      contact_desc: 'Sin compromisos. Sin presión. Solo una evaluación gratuita y personalizada de tu espacio y una propuesta transparente — entregada rápido.',
      contact_phone_label: 'Llama / WhatsApp:',
      contact_email_label: 'Correo:',
      contact_serving_label: 'Servimos a:',
      contact_leave_review: '⭐ Dejar una Reseña',

      // Form
      form_title: 'Empieza Aquí — ¡Es Gratis!',
      form_name: 'Nombre Completo',
      form_name_ph: 'Tu nombre completo',
      form_email: 'Correo Electrónico',
      form_email_ph: 'tu@correo.com',
      form_phone: 'Teléfono / WhatsApp',
      form_service: 'Tipo de Servicio',
      form_service_default: 'Selecciona un servicio...',
      form_svc_general: 'Limpieza General',
      form_svc_church: 'Iglesias',
      form_svc_schools: 'Colegios',
      form_svc_university: 'Universidad',
      form_svc_offices: 'Oficinas',
      form_svc_halls: 'Salones',
      form_svc_hospitals: 'Hospitales',
      form_svc_luxury: 'Residencial de Lujo',
      form_svc_move: 'Mudanza (Entrada/Salida)',
      form_svc_deep: 'Limpieza Profunda',
      form_svc_window: 'Limpieza de Vidrios',
      form_svc_construction: 'Limpieza de Obra',
      form_svc_other: 'Otro / No Estoy Seguro',
      form_message: 'Mensaje (Opcional)',
      form_message_ph: 'Cuéntanos sobre tu espacio...',
      form_submit: 'Solicitar Cotización Gratis',
      form_success_title: '¡Solicitud Enviada!',
      form_success_desc: '¡Gracias! Recibimos tu solicitud y te contactaremos en las próximas 24 horas. Revisa tu correo para ver la confirmación.',
      rf_form_title: 'Tu Experiencia nos Importa',
      rf_name_ph: 'Nombre',
      rf_role_ph: 'Cargo / Empresa',
      rf_review_ph: 'Tu reseña...',
      rf_submit: 'Enviar Reseña',

      // Footer
      footer_tagline: 'Más que limpieza, creamos un espacio sostenible para tu comodidad.',
      footer_services_title: 'Servicios',
      footer_company_title: 'Empresa',
      footer_contact_title: 'Contacto',
      footer_copy: '© 2026 AJB Cleaning Services, LLC. Todos los derechos reservados.',

      // Categorías de Galería
      cat_all: 'Todos',
      cat_offices_recep: 'Oficinas y Recepciones',
      cat_classrooms: 'Salones / Colegios',
      cat_mirrors: 'Espejos',
      cat_auditoriums: 'Auditorios',
      cat_gym: 'Gimnasios',
      cat_dining: 'Comedores y Cafeterías',
      cat_cafeteria: 'Cafeterías',
      cat_training: 'Entrenamiento / Universidad',
      cat_church: 'Iglesias',
      cat_green_zones: 'Zonas Verdes',

      // Títulos Específicos de Galería (1-36)
      g_title_off_rec1: 'Recepción Principal',
      g_desc_off_rec1: 'Primeras impresiones con superficies cristalinas.',
      g_title_off_rec2: 'Oficina Corporativa',
      g_desc_off_rec2: 'Entorno profesional para alto rendimiento.',
      g_title_off_rec3: 'Sala VIP / Lounge',
      g_desc_off_rec3: 'Comodidad e higiene en cada rincón.',
      g_title_off_rec4: 'Área de Lobby',
      g_desc_off_rec4: 'Gestión de bienvenida impecable.',
      g_title_off_rec5: 'Espacio Moderno',
      g_desc_off_rec5: 'Desinfectado y listo para el trabajo.',
      g_title_off_rec6: 'Suite Corporativa',
      g_desc_off_rec6: 'Atención a cada detalle.',
      g_title_off_rec7: 'Ala Administrativa',
      g_desc_off_rec7: 'Escritorios sanitizados para el personal administrativo.',
      g_title_off_rec8: 'Sala de Reuniones',
      g_desc_off_rec8: 'Vidrios y superficies cristalinas.',
      g_title_off_rec9: 'Oficina Abierta',
      g_desc_off_rec9: 'Espacios de trabajo dinámicos e higiénicos.',
      g_title_off_rec10: 'Sala de Juntas',
      g_desc_off_rec10: 'Limpieza premium para reuniones ejecutivas.',
      g_title_off_rec11: 'Área de Descanso',
      g_desc_off_rec11: 'Zonas de refrigerio mantenidas impecables.',

      g_title_classroom1: 'Salón de Clases',
      g_desc_classroom1: 'Ambientes de aprendizaje limpios para estudiantes.',
      g_title_classroom2: 'Salón de Clases',
      g_desc_classroom2: 'Limpieza detallada para espacios educativos.',
      g_title_classroom3: 'Área de Estudio',
      g_desc_classroom3: 'Zonas libres de polvo para la concentración.',
      g_title_classroom4: 'Laboratorios',
      g_desc_classroom4: 'Espacios higiénicos para el personal y docentes.',

      g_title_gym_mir: 'Superficies Reflectantes',
      g_desc_gym_mir: 'Espejos impecables y sin vetas en áreas de entrenamiento.',

      g_title_audi1: 'Gran Auditorio',
      g_desc_audi1: 'Limpieza a gran escala para espacios públicos.',
      g_title_audi2: 'Auditorio',
      g_desc_audi2: 'Mantenimiento meticuloso de sillas y pisos.',
      g_title_audi3: 'Auditorio',
      g_desc_audi3: 'Espacios limpios para comunicación masiva.',
      g_title_audi4: 'Auditorio',
      g_desc_audi4: 'Escenario impecable para tus mejores momentos.',
      g_title_audi5: 'Auditorio',
      g_desc_audi5: 'Limpieza profunda de alfombras y butacas.',
      g_title_audi6: 'Auditorio',
      g_desc_audi6: 'Superficies listas para grandes eventos.',

      g_title_gym1: 'Gym',
      g_desc_gym1: 'Desinfección profunda para salud y seguridad.',
      g_title_gym2: 'Área de Entrenamiento',
      g_desc_gym2: 'Ambiente fresco e higiénico para deportistas.',
      g_title_gym3: 'Área de Entrenamiento',
      g_desc_gym3: 'Mantenimiento de superficies para equipos especializados.',
      g_title_gym4: 'Canchas de Básquet',
      g_desc_gym4: 'Higiene de alto estándar en áreas húmedas.',

      g_title_dining1: 'Comedor Ejecutivo',
      g_desc_dining1: 'Altos estándares de higiene en áreas de comida.',
      g_title_dining2: 'Cafetería de Personal',
      g_desc_dining2: 'Espacios limpios y agradables para descansos.',
      g_title_dining3: 'Piso de Restaurante',
      g_desc_dining3: 'Ambiente impecable para comensales.',
      g_title_dining4: 'Instalación de Cocina',
      g_desc_dining4: 'Sanitización rigurosa para preparación de comida.',

      g_title_cafeteria1: 'Cafetería Moderna',
      g_desc_cafeteria1: 'Superficies impecables para servicio de alimentos.',
      g_title_cafeteria2: 'Estación de Café',
      g_desc_cafeteria2: 'Mantenimiento orientado al detalle.',
      g_title_cafeteria3: 'Área de Bistro',
      g_desc_cafeteria3: 'Puntos sociales acogedores y limpios.',
      g_title_cafeteria4: 'Snack Bar',
      g_desc_cafeteria4: 'Limpieza rápida para áreas concurridas.',

      g_title_training1: 'Campus Universitario',
      g_desc_training1: 'Espacios inspiradores para el aprendizaje.',
      g_title_training2: 'Centro de Capacitación',
      g_desc_training2: 'Ambiente productivo para estudiantes.',
      g_title_training3: 'Laboratorio de Estudio',
      g_desc_training3: 'Equipos y escritorios sanitizados.',
      g_title_training4: 'Centro de Prácticas',
      g_desc_training4: 'Centros de conocimiento tranquilos y sin polvo.',

      g_title_church1: 'Santuario Principal',
      g_desc_church1: 'Limpieza respetuosa y profunda.',
      g_title_church2: 'Salón Comunitario',
      g_desc_church2: 'Espacios acogedores para congregaciones.',
      g_title_church3: 'Santuario',
      g_desc_church3: 'Cuidado meticuloso para artículos sagrados.',
      g_title_church4: 'Interior del Santuario',
      g_desc_church4: 'Espacios interiores mantenidos con respeto y cuidado.',
      g_title_church5: 'Vestíbulo de Entrada',
      g_desc_church5: 'Área de bienvenida mantenida impecable.',
      g_title_church6: 'Área de Altar',
      g_desc_church6: 'Cuidado meticuloso de los espacios sagrados.',

      g_title_green1: 'Alrededores del Edificio',
      g_desc_green1: 'Limpieza profesional de los entornos exteriores.',
      g_title_green2: 'Áreas de Circulación',
      g_desc_green2: 'Mantenimiento de pasillos y accesos externos.',
      g_title_green3: 'Mantenimiento de Fachadas',
      g_desc_green3: 'Cuidado del aspecto exterior del establecimiento.',
      g_title_green4: 'Zonas de Acceso',
      g_desc_green4: 'Entradas despejadas y libres de residuos.',
      g_title_green5: 'Patio de Maniobras',
      g_desc_green5: 'Espacios funcionales exteriores siempre limpios.',
      g_title_green6: 'Entorno del Edificio',
      g_desc_green6: 'Mantenimiento impecable de los alrededores.',
      g_title_green7: 'Zonas Perimetrales',
      g_desc_green7: 'Limpieza detallada de los límites del recinto.',
      g_title_green8: 'Áreas de Paisajismo',
      g_desc_green8: 'Cuidado estético de las zonas comunes externas.',
      g_title_green9: 'Entorno Social Exterior',
      g_desc_green9: 'Espacios al aire libre listos para el uso público.',

      g_title_off_rec5: 'Espacio Moderno',
      g_desc_off_rec5: 'Desinfectado y listo para el trabajo.',
      g_title_off_rec6: 'Sala de Espera',
      g_desc_off_rec6: 'Atención a cada detalle.',

      g_title_hall_esc1: 'Gran Escalera',
      g_desc_hall_esc1: 'Áreas de alto tráfico mantenidas impecables.',
      g_title_hall_pas1: 'Pasillo de Oficinas',
      g_desc_hall_pas1: 'Pisos reflectantes y paredes limpias.',

      g_title_vid_aud: 'Auditorio en Acción',
      g_desc_vid_aud: 'Mira a nuestro equipo transformar el espacio.',
      g_title_vid_caf: 'Cuidado de Cafetería',
      g_desc_vid_caf: 'Video de desinfección profesional.',
      g_title_vid_uni: 'Centro de Entrenamiento',
      g_desc_vid_uni: 'Limpieza profunda para instalaciones educativas.',
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
    } catch (e) { }

    // Dispatch event for other scripts to react
    document.dispatchEvent(new CustomEvent('ajb-lang-change', { detail: { lang } }));

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
    const mobileBtn = document.getElementById('mobileLangToggle');

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
