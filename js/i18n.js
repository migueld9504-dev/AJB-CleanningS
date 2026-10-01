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
      svc_carpet_title: 'Shampoo Carpet',
      svc_carpet_desc: 'Deep fiber cleaning using advanced shampooing techniques to remove stains, odors, and allergens from high-traffic areas.',
      svc_wax_title: 'Scrubber, Stripper & Wax',
      svc_wax_desc: 'Full floor restoration: machine scrubbing, old wax stripping, and premium waxing for a durable, mirror-like finish.',
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
      val1_desc: 'Commitment to quality, responsibility, and fulfillment in every service.',
      val2_title: 'Integrity',
      val2_desc: 'Firm orientation towards honesty, ethics, and transparency.',
      val3_title: 'Responsibility',
      val3_desc: 'Dedication to punctual fulfillment and attention to detail.',
      val4_title: 'Excellence',
      val4_desc: 'Constant search for high standards in every service.',
      val5_title: 'Adaptability',
      val5_desc: "Ability to quickly adjust to each client's needs.",
      val6_title: 'Security',
      val6_desc: 'Focus on protecting people, spaces, and assets.',

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
      testi1_text: '"AJB has been servicing our medical facility for years. Their attention to sanitation protocols is exceptional."',
      testi1_name: 'Dr. Rivera',
      testi1_role: 'Medical Director',
      testi2_text: '"We hired AJB for our luxury condo in Manhattan. The results were absolutely flawless."',
      testi2_name: 'Sarah M.',
      testi2_role: 'Luxury Residential',
      testi3_text: '"Post-construction cleanup was handled with incredible speed and professionalism."',
      testi3_name: 'James L.',
      testi3_role: 'General Contractor',
      testi_view_all: 'View All Reviews',
      tp_tag: 'Client Voices',
      tp_title: 'Real Reviews,',
      tp_title_gold: 'Real Clients',
      tp_view_all: 'View All Reviews',

      // Contact
      contact_tag: 'Get in Touch',
      contact_title: 'Request Your',
      contact_title_gold: 'Free Quote',
      contact_desc: 'No commitment. No pressure. Just a free, personalized assessment of your space and a transparent proposal.',
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
      form_svc_halls: 'Halls / Classrooms',
      form_svc_hospitals: 'Hospitals',
      form_svc_luxury: 'Luxury Residential',
      form_svc_move: 'Move In / Move Out',
      form_svc_deep: 'Deep Cleaning',
      form_svc_window: 'Window Cleaning',
      form_svc_construction: 'Construction Cleanup',
      form_svc_carpet: 'Shampoo Carpet',
      form_svc_wax: 'Scrubber, Stripper & Wax',
      form_svc_other: 'Other / Not Sure',
      form_message: 'Message (Optional)',
      form_message_ph: 'Tell us about your space...',
      form_submit: 'Request My Free Quote',
      form_success_title: 'Request Sent!',
      form_success_desc: 'Thank you! We received your quote request and will contact you within 24 hours.',
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
      cat_auditoriums: 'Auditoriums',
      cat_gym: 'Fitness Centers',
      cat_dining: 'Dining Rooms',
      cat_training: 'Training Centers',
      cat_church: 'Churches',
      cat_hospitals: 'Hospitals & Clinics',
      cat_green_zones: 'Green Zones',
      cat_carpets: 'Carpets & Floors',

      // Gallery Items
      g_title_off_rec1: 'Main Reception',
      g_desc_off_rec1: 'First impressions with crystal clear surfaces.',
      g_title_off_rec2: 'Corporate Office',
      g_desc_off_rec2: 'Professional environment for high performance.',
      g_title_off_rec3: 'Executive Lounge',
      g_desc_off_rec3: 'Comfort and cleanliness in every corner.',
      g_title_off_rec4: 'Lobby Area',
      g_desc_off_rec4: 'Impeccable welcome management.',
      g_title_off_rec5: 'Office Wing',
      g_desc_off_rec5: 'Deep cleaning for workspaces.',
      g_title_off_rec6: 'Meeting Room',
      g_desc_off_rec6: 'Crystal clean glass and surfaces.',
      g_title_off_rec7: 'Administrative Wing',
      g_desc_off_rec7: 'Sanitized desks for administrative staff.',
      g_title_off_rec9: 'Open Office',
      g_desc_off_rec9: 'Dynamic workspaces kept hygienic.',
      g_title_off_rec10: 'Boardroom',
      g_desc_off_rec10: 'Premium cleaning for executive meetings.',
      g_title_off_rec11: 'Industrial Floor Care',
      g_desc_off_rec11: 'Deep scrubbing and maintenance for commercial floors.',
      g_title_cls1: 'Main Classroom',
      g_desc_cls1: 'Clean learning environments for students.',
      g_title_cls2: 'Lecture Room',
      g_desc_cls2: 'Detailed cleaning for educational spaces.',
      g_title_cls3: 'Study Area',
      g_desc_cls3: 'Dust-free zones for concentration.',
      g_title_cls5: 'Laboratory',
      g_desc_cls5: 'High-standard sanitization for labs.',
      g_title_cls6: 'Art Room',
      g_desc_cls6: 'Ready for creativity and learning.',
      g_title_cls7: 'Library Hall',
      g_desc_cls7: 'Clean and quiet knowledge centers.',
      g_title_aud1: 'Grand Auditorium',
      g_desc_aud1: 'Large scale cleaning for public spaces.',
      g_title_aud2: 'Auditorium',
      g_desc_aud2: 'Meticulous maintenance of seats and floors.',
      g_title_aud3: 'Auditorium',
      g_desc_aud3: 'Clean spaces for mass communication.',
      g_title_aud4: 'Auditorium',
      g_desc_aud4: 'Spotless stage for your best moments.',
      g_title_aud5: 'Auditorium',
      g_desc_aud5: 'Deep cleaning of carpets and seating.',
      g_title_aud6: 'Auditorium',
      g_desc_aud6: 'Surfaces ready for major events.',
      g_title_gym1: 'Fitness Center',
      g_desc_gym1: 'Deep sanitization for health and safety.',
      g_title_gym3: 'Cardio Area',
      g_desc_gym3: 'Clean training equipment.',
      g_title_gym4: 'Training Zone',
      g_desc_gym4: 'Professional maintenance.',
      g_title_gym5: 'Main Gym Hall',
      g_desc_gym5: 'Spacious and sanitized for member safety.',
      g_title_gym6: 'Cardio Zone',
      g_desc_gym6: 'Detailed maintenance of cardio equipment.',
      g_title_gym7: 'Weight Area',
      g_desc_gym7: 'Clean surfaces for heavy training.',
      g_title_gym8: 'Exercise Floor',
      g_desc_gym8: 'Spotless gym floor.',
      g_title_gym9: 'Equipment Care',
      g_desc_gym9: 'Surgical-level cleanliness on touch surfaces.',
      g_title_gym_mir: 'Reflective Surfaces',
      g_desc_gym_mir: 'Spotless mirrors without streaks.',
      g_title_gym_mir2: 'Gym Mirrors',
      g_desc_gym_mir2: 'Perfect reflections.',
      g_title_caf1: 'Modern Cafeteria',
      g_desc_caf1: 'Flawless surfaces for food service.',
      g_title_caf2: 'Coffee Station',
      g_desc_caf2: 'Detail-oriented maintenance.',
      g_title_caf3: 'Cafe Seating',
      g_desc_caf3: 'Hygienic seating area.',
      g_title_trn1: 'University Campus',
      g_desc_trn1: 'Inspirational spaces for learning.',
      g_title_trn2: 'Training Center',
      g_desc_trn2: 'Productive environment for students.',
      g_title_chu1: 'Main Sanctuary',
      g_desc_chu1: 'Respectful and thorough cleaning.',
      g_title_chu3: 'Sacristy',
      g_desc_chu3: 'Meticulous care for sacred items.',
      g_title_chu4: 'Church Sanctuary',
      g_desc_chu4: 'Clean spaces.',
      g_title_chu5: 'Church Entrance',
      g_desc_chu5: 'Welcoming and clean hallways.',
      g_title_chu6: 'Chapel',
      g_desc_chu6: 'Deep cleaning for sacred spaces.',
      g_title_chu7: 'Pews & Aisles',
      g_desc_chu7: 'Attention to every detail.',
      g_title_chu8: 'Altar Area',
      g_desc_chu8: 'Respectful maintenance of the altar.',
      g_title_grn1: 'Exterior Garden',
      g_desc_grn1: 'Meticulous care for green areas.',
      g_title_grn2: 'Park Area',
      g_desc_grn2: 'Clean spaces for outdoor relaxation.',
      g_title_grn3: 'Lawn Maintenance',
      g_desc_grn3: 'Professional landscape hygiene.',
      g_title_grn4: 'Pathways',
      g_desc_grn4: 'Keeping walkways clear and safe.',
      g_title_grn5: 'Building Courtyard',
      g_desc_grn5: 'Peaceful and pristine outdoor settings.',
      g_title_grn6: 'Exterior Surroundings',
      g_desc_grn6: 'Meticulous cleaning of the facility grounds.',
      g_title_grn7: 'Entrance Grounds',
      g_desc_grn7: 'First impressions start at the doorstep.',
      g_title_grn8: 'Private Grounds',
      g_desc_grn8: 'Secure and clean outdoor areas.',
      g_title_grn9: 'Social Surroundings',
      g_desc_grn9: 'Ideal environments for outdoor interaction.',
      g_title_hosp1: 'Medical Facility',
      g_desc_hosp1: 'Sanitized environments for patient safety.',
      g_title_hosp2: 'Private Clinic',
      g_desc_hosp2: 'Detailed cleaning for consultation rooms.',
      g_title_hosp4: 'Medical Wing',
      g_desc_hosp4: 'Advanced disinfection protocols.',
      g_title_hosp5: 'Clinic Area',
      g_desc_hosp5: 'Clean spaces.',
      g_title_hosp6: 'Medical Facility',
      g_desc_hosp6: 'Sanitized environment.',
      g_title_hosp7: 'Medical Facility',
      g_desc_hosp7: 'Sanitized environment.',
      g_title_hosp8: 'Medical Facility',
      g_desc_hosp8: 'Sanitized environment.',
      g_title_cons2: 'Consultation Room',
      g_desc_cons2: 'Sanitized space.',
      g_title_cons3: 'Medical Office',
      g_desc_cons3: 'Professional hygiene.',
      g_title_cons4: 'Exam Room',
      g_desc_cons4: 'Ready for patients.',
      g_title_mad1: 'Wood Floor Care',
      g_desc_mad1: 'Specialized treatment for hardwood.',
      g_title_mad2: 'Wood Polishing',
      g_desc_mad2: 'Professional shine.',
      g_title_tap1: 'Premium Carpets',
      g_desc_tap1: 'Deep extraction cleaning.',
      g_title_tap2: 'Rug Care',
      g_desc_tap2: 'Fiber protection.',
      g_title_tap3: 'Area Rug Care',
      g_desc_tap3: 'Deep cleaning.',
      g_title_vid_aud: 'Auditorium Action',
      g_desc_vid_aud: 'Watch our team transform the space.',
      g_title_vid_caf: 'Cafeteria Care',
      g_desc_vid_caf: 'Professional sanitization video.',
      g_title_vid_uni: 'Campus Cleaning',
      g_desc_vid_uni: 'Deep cleaning for educational facilities.',

      // Launch screen
      launch_tagline: '"More than cleaning,<br />a sustainable space<br />for your comfort."',

      // Gallery header
      gallery_tag: 'Portfolio',
      gallery_title: 'Our Gallery of',
      gallery_title_gold: 'Excellence',
      gallery_subtitle: 'Spaces transformed by our dedication and attention to detail.',

      // FAQ
      faq_tag: 'Official Help Center',
      faq_title: 'Frequently Asked',
      faq_title_gold: 'Questions',
      faq_subtitle: 'Get official answers directly from AJB Cleaning Services, LLC — your trusted, licensed, and registered corporate partner since 1998.',
      faq_q1: 'Is AJB Cleaning Services, LLC the official and registered company?',
      faq_a1: 'Yes, absolutely. We are <strong>AJB Cleaning Services, LLC</strong>, the official, legally registered commercial cleaning corporation established in <strong>1998</strong> by Julio. With over 28 years of history, we are fully licensed, bonded, and insured (General Liability &amp; Worker\'s Comp). Beware of unregistered copycat entities using similar names — we are the only original AJB Cleaning Services operating in NY, NJ, CT, and PA with certified OSHA hygiene standards.',
      faq_q2: 'What geographic locations do you serve officially?',
      faq_a2: 'Our registered service area spans across four states: <strong>New York (NY), New Jersey (NJ), Connecticut (CT), and Pennsylvania (PA)</strong>. We dispatch our highly-trained local crews to major corporate hubs, medical facilities, and luxury residential sectors across these states, ensuring premium compliance and scheduling 24/7.',
      faq_q3: 'Does AJB Cleaning Services offer OSHA-certified medical cleaning?',
      faq_a3: 'Yes. We specialize in deep sanitization and terminal cleaning for healthcare facilities, dental offices, private clinics, and surgery rooms. Our entire cleaning team is certified and trained in OSHA standards, bloodborne pathogens protocols, and CDC sanitation guidelines to ensure the safety of both patients and clinical staff.',
      faq_q4: 'Why should we choose your registered services over unregistered cleaners?',
      faq_a4: 'Unregistered cleaners pose immense legal, financial, and operational risks to your business. By partnering with <strong>AJB Cleaning Services, LLC</strong>, you receive: (1) A legally binding contract with an insured and licensed entity, (2) A 24-hour guarantee (if you are not 100% satisfied, we return to fix it at zero cost), (3) Fully-vetted, background-checked personnel, and (4) Transparent billing with corporate tax compliance.',
      faq_q5: 'What is your "sustainable space" eco-friendly policy?',
      faq_a5: 'Aligned with our slogan, <em>"More than cleaning, a sustainable space for your comfort,"</em> we use Green Seal certified, eco-friendly cleaning solutions and advanced HEPA filtration vacuums. This drastically reduces allergens, volatile organic compounds (VOCs), and environmental impact, keeping your indoor air pristine and safe.',
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
      svc_carpet_title: 'Shampoo de Alfombras',
      svc_carpet_desc: 'Limpieza profunda de fibras mediante técnicas avanzadas de champú para eliminar manchas, olores y alérgenos en zonas de alto tráfico.',
      svc_wax_title: 'Lavado, Decapado y Encerado',
      svc_wax_desc: 'Restauración total de pisos: lavado mecánico, decapado de cera vieja y encerado premium para un acabado duradero y brillante.',
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
      val1_desc: 'Compromiso con la calidad, la responsabilidad y el cumplimiento.',
      val2_title: 'Integridad',
      val2_desc: 'Firme orientación hacia la honestidad, la ética y la transparencia.',
      val3_title: 'Responsabilidad',
      val3_desc: 'Dedicación al cumplimiento puntual y atención al detalle.',
      val4_title: 'Excelencia',
      val4_desc: 'Búsqueda constante de altos estándares en cada servicio.',
      val5_title: 'Adaptabilidad',
      val5_desc: 'Capacidad de ajustarnos con agilidad a las necesidades de cada cliente.',
      val6_title: 'Security',
      val6_desc: 'Enfoque en la protección de las personas, los espacios y los bienes.',

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
      testi1_text: '"AJB lleva años prestando servicio en nuestra clínica. Su atención a los protocolos de higiene es excepcional."',
      testi1_name: 'Dr. Rivera',
      testi1_role: 'Director de Clínica Médica',
      testi2_text: '"Contratamos a AJB para nuestro condominio de lujo en Manhattan. Los resultados fueron impecables."',
      testi2_name: 'Sarah M.',
      testi2_role: 'Residencial de Lujo',
      testi3_text: '"La limpieza post-construcción se manejó con una rapidez y profesionalismo increíbles."',
      testi3_name: 'James L.',
      testi3_role: 'Contratista General',
      testi_view_all: 'Ver Todas las Reseñas',
      tp_tag: 'Voces de Clientes',
      tp_title: 'Reseñas Reales,',
      tp_title_gold: 'Clientes Reales',
      tp_view_all: 'Ver Todas las Reseñas',

      // Contact
      contact_tag: 'Contáctanos',
      contact_title: 'Solicita tu',
      contact_title_gold: 'Cotización Gratuita',
      contact_desc: 'Sin compromisos. Sin presión. Solo una evaluación gratuita y personalizada de tu espacio.',
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
      form_svc_halls: 'Salones / Clases',
      form_svc_hospitals: 'Hospitales',
      form_svc_luxury: 'Residencial de Lujo',
      form_svc_move: 'Mudanza (Entrada/Salida)',
      form_svc_deep: 'Limpieza Profunda',
      form_svc_window: 'Limpieza de Vidrios',
      form_svc_construction: 'Limpieza de Obra',
      form_svc_carpet: 'Lavado de Tapetes (Shampoo)',
      form_svc_wax: 'Lavado, Decapado y Encerado',
      form_svc_other: 'Otro / No Estoy Seguro',
      form_message: 'Mensaje (Opcional)',
      form_message_ph: 'Cuéntanos sobre tu espacio...',
      form_submit: 'Solicitar Cotización Gratis',
      form_success_title: '¡Solicitud Enviada!',
      form_success_desc: '¡Gracias! Recibimos tu solicitud y te contactaremos en las próximas 24 horas.',
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
      cat_auditoriums: 'Auditorios',
      cat_gym: 'Gimnasios',
      cat_dining: 'Comedores y Cafeterías',
      cat_training: 'Entrenamiento / Universidad',
      cat_church: 'Iglesias',
      cat_hospitals: 'Hospitales y Clínicas',
      cat_green_zones: 'Zonas Verdes',
      cat_carpets: 'Tapetes y Pisos',

      // Gallery Items
      g_title_off_rec1: 'Recepción Principal',
      g_desc_off_rec1: 'Primeras impresiones con superficies cristalinas.',
      g_title_off_rec2: 'Oficina Corporativa',
      g_desc_off_rec2: 'Entorno profesional para alto rendimiento.',
      g_title_off_rec3: 'Sala VIP / Lounge',
      g_desc_off_rec3: 'Comodidad e higiene en cada rincón.',
      g_title_off_rec4: 'Área de Lobby',
      g_desc_off_rec4: 'Gestión de bienvenida impecable.',
      g_title_off_rec5: 'Ala de Oficinas',
      g_desc_off_rec5: 'Desinfectado y listo para el trabajo.',
      g_title_off_rec6: 'Sala de Reuniones',
      g_desc_off_rec6: 'Atención a cada detalle.',
      g_title_off_rec7: 'Ala Administrativa',
      g_desc_off_rec7: 'Escritorios sanitizados para el personal administrativo.',
      g_title_off_rec9: 'Oficina Abierta',
      g_desc_off_rec9: 'Espacios de trabajo dinámicos e higiénicos.',
      g_title_off_rec10: 'Sala de Juntas',
      g_desc_off_rec10: 'Limpieza premium para reuniones ejecutivas.',
      g_title_off_rec11: 'Cuidado de Pisos Industriales',
      g_desc_off_rec11: 'Limpieza profunda y mantenimiento para pisos comerciales.',
      g_title_cls1: 'Salón de Clases',
      g_desc_cls1: 'Ambientes de aprendizaje limpios para estudiantes.',
      g_title_cls2: 'Salón de lectura',
      g_desc_cls2: 'Limpieza detallada para espacios educativos.',
      g_title_cls3: 'Área de Estudio',
      g_desc_cls3: 'Zonas libres de polvo para la concentración.',
      g_title_cls5: 'Laboratorios',
      g_desc_cls5: 'Sanitización de alto estándar para laboratorios.',
      g_title_cls6: 'Salón de Arte',
      g_desc_cls6: 'Listo para la creatividad y el aprendizaje.',
      g_title_cls7: 'Biblioteca',
      g_desc_cls7: 'Centros de conocimiento limpios y tranquilos.',
      g_title_aud1: 'Gran Auditorio',
      g_desc_aud1: 'Limpieza a gran escala para espacios públicos.',
      g_title_aud2: 'Auditorio',
      g_desc_aud2: 'Mantenimiento meticuloso de sillas y pisos.',
      g_title_aud3: 'Auditorio',
      g_desc_aud3: 'Espacios limpios para comunicación masiva.',
      g_title_aud4: 'Auditorio',
      g_desc_aud4: 'Escenario impecable para tus mejores momentos.',
      g_title_aud5: 'Auditorio',
      g_desc_aud5: 'Limpieza profunda de alfombras y butacas.',
      g_title_aud6: 'Auditorio',
      g_desc_aud6: 'Superficies listas para grandes eventos.',
      g_title_gym1: 'Centro de Fitness',
      g_desc_gym1: 'Desinfección profunda para salud y seguridad.',
      g_title_gym3: 'Área de Cardio',
      g_desc_gym3: 'Equipos de entrenamiento limpios.',
      g_title_gym4: 'Zona de Entrenamiento',
      g_desc_gym4: 'Mantenimiento profesional.',
      g_title_gym5: 'Gimnasio Principal',
      g_desc_gym5: 'Espacioso y sanitizado para la seguridad de los socios.',
      g_title_gym6: 'Zona de Cardio',
      g_desc_gym6: 'Mantenimiento detallado de equipos de cardio.',
      g_title_gym7: 'Cuidado de pisos de madera',
      g_desc_gym7: 'Superficies limpias cuidado especial en madera.',
      g_title_gym8: 'Piso de Ejercicio',
      g_desc_gym8: 'Piso de gimnasio impecable.',
      g_title_gym9: 'Cuidado de Equipos',
      g_desc_gym9: 'Limpieza de nivel quirúrgico en superficies de contacto.',
      g_title_gym_mir: 'Superficies Reflectantes',
      g_desc_gym_mir: 'Espejos impecables y sin vetas en áreas de entrenamiento.',
      g_title_gym_mir2: 'Espejos de Gimnasio',
      g_desc_gym_mir2: 'Reflejos perfectos.',
      g_title_caf1: 'Cafetería Moderna',
      g_desc_caf1: 'Superficies impecables para servicio de alimentos.',
      g_title_caf2: 'Estación de Café',
      g_desc_caf2: 'Mantenimiento orientado al detalle.',
      g_title_caf3: 'Asientos de Café',
      g_desc_caf3: 'Área de asientos higiénica.',
      g_title_trn1: 'Campus Universitario',
      g_desc_trn1: 'Espacios inspiradores para el aprendizaje.',
      g_title_trn2: 'Centro de Capacitación',
      g_desc_trn2: 'Ambiente productivo para estudiantes.',
      g_title_chu1: 'Santuario Principal',
      g_desc_chu1: 'Limpieza respetuosa y profunda.',
      g_title_chu3: 'Sacristía',
      g_desc_chu3: 'Cuidado meticuloso para artículos sagrados.',
      g_title_chu4: 'Santuario de la Iglesia',
      g_desc_chu4: 'Espacios limpios.',
      g_title_chu5: 'Entrada de la Iglesia',
      g_desc_chu5: 'Pasillos de bienvenida mantenidos impecables.',
      g_title_chu6: 'Capilla',
      g_desc_chu6: 'Limpieza profunda para espacios sagrados.',
      g_title_chu7: 'Bancas y Pasillos',
      g_desc_chu7: 'Atención a cada detalle.',
      g_title_chu8: 'Área del Altar',
      g_desc_chu8: 'Mantenimiento respetuoso del altar.',
      g_title_grn1: 'Jardín Exterior',
      g_desc_grn1: 'Limpieza profesional de los entornos exteriores.',
      g_title_grn2: 'Zona de Parque',
      g_desc_grn2: 'Espacios limpios para la relajación al aire libre.',
      g_title_grn3: 'Mantenimiento de Césped',
      g_desc_grn3: 'Higiene profesional del paisaje.',
      g_title_grn4: 'Senderos Peatonales',
      g_desc_grn4: 'Manteniendo senderos despejados y seguros.',
      g_title_grn5: 'Patio del Edificio',
      g_desc_grn5: 'Entornos exteriores tranquilos e impecables.',
      g_title_grn6: 'Alrededores Exteriores',
      g_desc_grn6: 'Mantenimiento impecable de los alrededores.',
      g_title_grn7: 'Zonas Perimetrales',
      g_desc_grn7: 'Limpieza detallada de los límites del recinto.',
      g_title_grn8: 'Áreas de Paisajismo',
      g_desc_grn8: 'Cuidado estético de las zonas comunes externas.',
      g_title_grn9: 'Entorno Social Exterior',
      g_desc_grn9: 'Espacios al aire libre listos para el uso público.',
      g_title_hosp1: 'Instalación Médica',
      g_desc_hosp1: 'Ambientes sanitizados para la seguridad del paciente.',
      g_title_hosp2: 'Clínica Privada',
      g_desc_hosp2: 'Limpieza detallada para salas de consulta.',
      g_title_hosp4: 'Ala Médica',
      g_desc_hosp4: 'Protocolos avanzados de desinfección.',
      g_title_hosp5: 'Área de Clínica',
      g_desc_hosp5: 'Espacios limpios.',
      g_title_hosp6: 'Centro Médico',
      g_desc_hosp6: 'Ambiente sanitizado.',
      g_title_hosp7: 'Centro Médico',
      g_desc_hosp7: 'Ambiente sanitizado.',
      g_title_hosp8: 'Centro Médico',
      g_desc_hosp8: 'Ambiente sanitizado.',
      g_title_cons2: 'Consultorio',
      g_desc_cons2: 'Espacio sanitizado.',
      g_title_cons3: 'Oficina Médica',
      g_desc_cons3: 'Higiene profesional.',
      g_title_cons4: 'Sala de Exámenes',
      g_desc_cons4: 'Listo para pacientes.',
      g_title_mad1: 'Cuidado de Pisos de Madera',
      g_desc_mad1: 'Tratamiento especializado para madera dura.',
      g_title_mad2: 'Pulido de Madera',
      g_desc_mad2: 'Brillo profesional.',
      g_title_tap1: 'Alfombras Premium',
      g_desc_tap1: 'Limpieza de extracción profunda.',
      g_title_tap2: 'Cuidado de Tapetes',
      g_desc_tap2: 'Protección de fibras.',
      g_title_tap3: 'Cuidado de Tapetes de Área',
      g_desc_tap3: 'Limpieza profunda.',
      g_title_vid_aud: 'Auditorio en Acción',
      g_desc_vid_aud: 'Mira a nuestro equipo transformar el espacio.',
      g_title_vid_caf: 'Cuidado de Cafetería',
      g_desc_vid_caf: 'Video de desinfección profesional.',
      g_title_vid_uni: 'Limpieza del Campus',
      g_desc_vid_uni: 'Limpieza profunda para instalaciones educativas.',

      // Launch screen
      launch_tagline: '"Más que limpieza,<br />un espacio sostenible<br />para su comodidad."',

      // Gallery header
      gallery_tag: 'Portafolio',
      gallery_title: 'Nuestra Galería de',
      gallery_title_gold: 'Excelencia',
      gallery_subtitle: 'Espacios transformados por nuestra dedicación y atención al detalle.',

      // FAQ
      faq_tag: 'Centro Oficial de Ayuda',
      faq_title: 'Preguntas',
      faq_title_gold: 'Frecuentes',
      faq_subtitle: 'Respuestas oficiales directamente de AJB Cleaning Services, LLC — su socio corporativo registrado, asegurado y de confianza desde 1998.',
      faq_q1: '¿AJB Cleaning Services, LLC es la empresa oficial y registrada?',
      faq_a1: 'Sí, por completo. Somos <strong>AJB Cleaning Services, LLC</strong>, la corporación de limpieza comercial oficial y legalmente registrada, fundada en <strong>1998</strong> por Julio. Con más de 28 años de historia, contamos con licencia, fianza y seguro vigentes (Responsabilidad Civil General y Compensación Laboral). Desconfíe de entidades no registradas que usan nombres parecidos: somos la única AJB Cleaning Services original que opera en NY, NJ, CT y PA con estándares de higiene certificados por OSHA.',
      faq_q2: '¿Qué zonas geográficas cubren oficialmente?',
      faq_a2: 'Nuestra área de servicio registrada abarca cuatro estados de <strong>Estados Unidos</strong>: <strong>Nueva York (NY), Nueva Jersey (NJ), Connecticut (CT) y Pensilvania (PA)</strong>. Enviamos cuadrillas locales altamente capacitadas a los principales centros corporativos, instalaciones médicas y zonas residenciales de lujo de estos estados, con cumplimiento premium y programación 24/7.',
      faq_q3: '¿AJB Cleaning Services ofrece limpieza médica certificada por OSHA?',
      faq_a3: 'Sí. Nos especializamos en desinfección profunda y limpieza terminal para instalaciones de salud, consultorios dentales, clínicas privadas y quirófanos. Todo nuestro equipo está certificado y capacitado en normas OSHA, protocolos de patógenos transmitidos por la sangre y lineamientos de sanitización de los CDC, para proteger tanto a pacientes como al personal clínico.',
      faq_q4: '¿Por qué elegir un servicio registrado en lugar de limpiadores informales?',
      faq_a4: 'Los limpiadores no registrados representan enormes riesgos legales, financieros y operativos para su empresa. Al trabajar con <strong>AJB Cleaning Services, LLC</strong> usted recibe: (1) un contrato legalmente vinculante con una entidad asegurada y con licencia, (2) una garantía de 24 horas (si no queda 100% satisfecho, regresamos a corregirlo sin costo), (3) personal verificado con antecedentes revisados y (4) facturación transparente con cumplimiento fiscal corporativo.',
      faq_q5: '¿En qué consiste su política ecológica de "espacio sostenible"?',
      faq_a5: 'En línea con nuestro lema, <em>"Más que limpieza, un espacio sostenible para su comodidad"</em>, usamos soluciones de limpieza ecológicas certificadas por Green Seal y aspiradoras avanzadas con filtración HEPA. Esto reduce drásticamente los alérgenos, los compuestos orgánicos volátiles (COV) y el impacto ambiental, manteniendo el aire interior puro y seguro.',
    }
  };

  // ===== CORE TRANSLATION FUNCTION =====
  let currentLang = 'en';
  // La URL manda: / sirve HTML en ingles y /es/ sirve HTML en espanol.
  // Si la pagina declara su idioma con data-lang, ese gana sobre localStorage,
  // para que la URL y el contenido indexado nunca se contradigan.
  const pageLang = document.documentElement.getAttribute('data-lang');
  if (pageLang && LANGS[pageLang]) {
    currentLang = pageLang;
  } else {
    try {
      currentLang = localStorage.getItem('ajb_lang') || 'en';
    } catch (e) {
      console.warn("localStorage access denied, defaulting to 'en'");
    }
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
        try { localStorage.setItem('ajb_lang', newLang); } catch (err) { }
        // Si existe una version servida en el otro idioma, ir a su URL en vez de
        // traducir en cliente: asi el usuario y el buscador ven lo mismo.
        // acepta tanto "es" como "es-US": el sitio apunta a Estados Unidos, asi que
        // los hreflang llevan region, pero el selector no debe depender de eso
        const alt = document.querySelector(
          'link[rel="alternate"][hreflang="' + newLang + '"], ' +
          'link[rel="alternate"][hreflang^="' + newLang + '-"]'
        );
        if (alt && alt.href) {
          window.location.href = alt.href;
          return;
        }
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
