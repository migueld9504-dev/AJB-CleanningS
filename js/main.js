/**
 * AJB Cleaning Services — Main JavaScript v2.0
 * Features:
 *  - 3D launch screen with animated progress bar
 *  - Navbar scroll + mobile toggle
 *  - Reveal-on-scroll (reveal-up + reveal-3d)
 *  - Contact form submission handler
 *  - Stat badge counter animation
 */

(function () {
  'use strict';

  // ===== 3D LAUNCH SCREEN =====
  const launchScreen = document.getElementById('launchScreen');
  const launchBar    = document.getElementById('launchBar');
  const LAUNCH_DURATION = 3200; // ms total before dismissal
  let launchStart = null;

  function animateLaunchBar(timestamp) {
    if (!launchStart) launchStart = timestamp;
    const progress = Math.min((timestamp - launchStart) / LAUNCH_DURATION * 100, 100);
    if (launchBar) launchBar.style.width = progress + '%';
    if (progress < 100) {
      requestAnimationFrame(animateLaunchBar);
    }
  }

  function hideLaunchScreen() {
    if (launchScreen) {
      launchScreen.classList.add('hidden');
      // After CSS transition, trigger hero reveal animations
      setTimeout(() => {
        try {
          triggerReveal3D();
          triggerRevealUp();
        } catch (e) {
          console.warn("Reveal animation failed: ", e);
        }
      }, 400);
    }
  }

  if (launchScreen) {
    try {
      requestAnimationFrame(animateLaunchBar);
    } catch (e) {
      console.warn("Progress bar animation failed: ", e);
    }
    setTimeout(hideLaunchScreen, LAUNCH_DURATION + 200);
  } else {
    // No launch screen — reveal immediately
    document.addEventListener('DOMContentLoaded', () => {
      console.log('AJB: DOMContentLoaded - No launch screen, revealing content.');
      try {
        triggerReveal3D();
        triggerRevealUp();
      } catch (e) {
        console.error("AJB: Immediate reveal failed: ", e);
      }
    });
  }

  // Failsafe: If for any reason content is still hidden after 5 seconds, show it
  setTimeout(() => {
    document.querySelectorAll('.reveal-up:not(.is-visible), .reveal-3d:not(.is-visible)').forEach(el => {
      el.classList.add('is-visible');
    });
  }, 5000);

  // ===== REVEAL 3D (hero elements) =====
  function triggerReveal3D() {
    document.querySelectorAll('.reveal-3d').forEach((el, i) => {
      const delay = parseFloat(el.style.getPropertyValue('--delay') || '0') * 1000;
      setTimeout(() => el.classList.add('is-visible'), delay + i * 80);
    });
  }

  // ===== REVEAL UP (scroll-based) =====
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.05, rootMargin: '0px 0px -50px 0px' }
  );

  function triggerRevealUp() {
    document.querySelectorAll('.reveal-up').forEach(el => revealObserver.observe(el));
  }

  // ===== NAVBAR SCROLL =====
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 60);
    }, { passive: true });
  }

  // ===== MOBILE NAV TOGGLE =====
  const navToggle = document.getElementById('navToggle');
  const navLinks  = document.getElementById('navLinks');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => navLinks.classList.remove('open'));
    });
  }

  // ===== SMOOTH ANCHOR SCROLL =====
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const top = target.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });


  // ===== STAT BADGE COUNTER =====
  const statObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const numEl = entry.target.querySelector('.stat-number');
        if (!numEl || numEl.dataset.animated) return;
        numEl.dataset.animated = 'true';
        const raw = numEl.textContent.trim();
        if (raw.startsWith('28')) {
          let start = null;
          const duration = 1400;
          const step = ts => {
            if (!start) start = ts;
            const p = Math.min((ts - start) / duration, 1);
            numEl.textContent = Math.floor(p * 28) + '+';
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
        statObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.5 }
  );

  document.querySelectorAll('.stat-badge').forEach(b => statObserver.observe(b));

  // ===== HERO BACKGROUND SLIDER =====
  const heroSlider = document.getElementById('heroBgSlider');
  if (heroSlider) {
    const heroSlides = heroSlider.querySelectorAll('.hero-slide');
    let currentHeroSlide = 0;
    
    // Initial check
    if (heroSlides.length > 1) {
      setInterval(() => {
        heroSlides[currentHeroSlide].classList.remove('active');
        currentHeroSlide = (currentHeroSlide + 1) % heroSlides.length;
        heroSlides[currentHeroSlide].classList.add('active');
      }, 7000); // Change every 7 seconds
    }
  }

  // ===== AJB 3D GALLERY LOGIC =====
  const gallery = document.getElementById('ajbGallery3D');
  if (gallery) {
    let slides = [...gallery.querySelectorAll('.ajb-gallery-slide')];
    const dotsWrap = gallery.querySelector('#ajbGalleryDots');
    const prevBtn = gallery.querySelector('#ajbGalleryPrev');
    const nextBtn = gallery.querySelector('#ajbGalleryNext');
    const filters = document.querySelectorAll('.filter-btn');
    let active = 0;
    let autoPlay;
    let visibleSlides = [...slides]; // Start with all visible
    console.log('AJB: Gallery found, initializing with', slides.length, 'slides');

    function buildDots() {
      if (!dotsWrap) return;
      dotsWrap.innerHTML = '';
      visibleSlides.forEach((_, index) => {
        const dot = document.createElement('button');
        dot.className = 'ajb-gallery-dot';
        dot.type = 'button';
        dot.setAttribute('aria-label', `Go to slide ${index + 1}`);
        dot.addEventListener('click', () => setActive(index));
        dotsWrap.appendChild(dot);
      });
    }

    function setActive(index) {
      if (visibleSlides.length === 0) return;
      active = (index + visibleSlides.length) % visibleSlides.length;
      
      visibleSlides.forEach((slide, i) => {
        const rawOffset = i - active;
        const wrappedOffset = rawOffset > visibleSlides.length / 2
          ? rawOffset - visibleSlides.length
          : rawOffset < -visibleSlides.length / 2
          ? rawOffset + visibleSlides.length
          : rawOffset;

        slide.style.setProperty('--offset', wrappedOffset);
        slide.style.setProperty('--abs', Math.abs(wrappedOffset));
        slide.classList.toggle('is-active', wrappedOffset === 0);
        slide.style.display = 'block'; // Ensure it's shown if it's in the visible list
      });

      // Hide slides not in the visible list
      slides.forEach(slide => {
        if (!visibleSlides.includes(slide)) {
          slide.style.display = 'none';
        }
      });

      const dots = [...gallery.querySelectorAll('.ajb-gallery-dot')];
      dots.forEach((dot, i) => {
        dot.setAttribute('aria-current', i === active ? 'true' : 'false');
      });
    }

    function startAutoPlay() {
      stopAutoPlay();
      if (visibleSlides.length > 1) {
        autoPlay = setInterval(() => setActive(active + 1), 2500);
      }
    }

    function stopAutoPlay() {
      clearInterval(autoPlay);
    }

    // Filtering logic
    filters.forEach(btn => {
      btn.addEventListener('click', () => {
        filters.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.dataset.filter;
        
        if (filter === 'all') {
          visibleSlides = slides;
        } else {
          visibleSlides = slides.filter(s => s.dataset.category === filter);
        }
        
        buildDots();
        setActive(0);
        startAutoPlay();
      });
    });

    if (prevBtn) prevBtn.addEventListener('click', () => { setActive(active - 1); startAutoPlay(); });
    if (nextBtn) nextBtn.addEventListener('click', () => { setActive(active + 1); startAutoPlay(); });
    
    gallery.addEventListener('mouseenter', stopAutoPlay);
    gallery.addEventListener('mouseleave', startAutoPlay);
    
    // Swipe support
    let touchstartX = 0;
    let touchendX = 0;
    gallery.addEventListener('touchstart', e => { touchstartX = e.changedTouches[0].screenX; stopAutoPlay(); }, {passive: true});
    gallery.addEventListener('touchend', e => { 
      touchendX = e.changedTouches[0].screenX; 
      if (touchstartX - touchendX > 50) setActive(active + 1);
      if (touchendX - touchstartX > 50) setActive(active - -1);
      startAutoPlay();
    }, {passive: true});

    // Lightbox Logic
    const lightbox = document.getElementById('ajbLightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxTitle = document.getElementById('lightboxTitle');
    const lightboxDesc = document.getElementById('lightboxDesc');
    const lightboxClose = document.getElementById('lightboxClose');

    slides.forEach(slide => {
      // Find the card inside the slide for a better click target
      const card = slide.querySelector('.ajb-gallery-card');
      const target = card || slide;

      target.addEventListener('click', (e) => {
        // ALWAYS trigger lightbox on click, removing is-active restriction for better UX
        e.preventDefault();
        e.stopPropagation();
        
        const img = slide.querySelector('img');
        const titleEl = slide.querySelector('h3');
        const descEl = slide.querySelector('p');
        
        const title = titleEl ? titleEl.textContent : "";
        const desc = descEl ? descEl.textContent : "";

        if (lightbox && lightboxImg) {
          lightboxImg.src = img.src;
          if (lightboxTitle) lightboxTitle.textContent = title;
          if (lightboxDesc) lightboxDesc.textContent = desc;
          lightbox.classList.add('active');
          stopAutoPlay();
        }
      });
    });

    if (lightboxClose) {
      lightboxClose.addEventListener('click', () => {
        lightbox.classList.remove('active');
        startAutoPlay();
      });
    }

    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        lightbox.classList.remove('active');
        startAutoPlay();
      }
    });

    buildDots();
    setActive(0);
    startAutoPlay();
  }

  // ===== REVIEWS SECTION TOGGLE =====
  const navReviewsBtn    = document.getElementById('navReviewsBtn');
  const footerReviewsBtn = document.getElementById('footerReviewsBtn');
  const viewAllReviewsBtn = document.getElementById('viewAllReviewsBtn');
  const leaveReviewBtn   = document.getElementById('leaveReviewBtn');
  const reviewsSection   = document.getElementById('reviewsIntegrated');
  
  const toggleReviews = (e) => {
    if(e) e.preventDefault();
    if(reviewsSection) {
      reviewsSection.classList.toggle('active');
      if (reviewsSection.classList.contains('active')) {
        const top = reviewsSection.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }
  };

  if (navReviewsBtn)     navReviewsBtn.addEventListener('click', toggleReviews);
  if (footerReviewsBtn)  footerReviewsBtn.addEventListener('click', toggleReviews);
  if (viewAllReviewsBtn) viewAllReviewsBtn.addEventListener('click', toggleReviews);
  if (leaveReviewBtn)    leaveReviewBtn.addEventListener('click', toggleReviews);

  // --- CONTACT FORM: PHONE MASK ---
  const phoneInput = document.getElementById('contactPhone');
  if (phoneInput) {
    phoneInput.addEventListener('input', function () {
      let raw = this.value.replace(/\D/g, ''); // digits only

      // Remove leading 1 if user typed it
      if (raw.startsWith('1')) raw = raw.slice(1);

      // Limit to 10 digits
      raw = raw.slice(0, 10);

      let formatted = '+1 ';
      if (raw.length > 0) formatted += '(' + raw.slice(0, 3);
      if (raw.length >= 3) formatted += ') ' + raw.slice(3, 6);
      if (raw.length >= 6) formatted += '-' + raw.slice(6, 10);

      this.value = formatted === '+1 ' ? '' : formatted;
    });

    phoneInput.addEventListener('keydown', function (e) {
      // Allow backspace/tab/enter/delete/arrows
      if ([8, 9, 13, 46, 37, 39].includes(e.keyCode)) return;
      // Allow only digits
      if (!/^\d$/.test(e.key) && !e.ctrlKey && !e.metaKey) e.preventDefault();
    });
  }

  // --- CONTACT FORM HANDLER ---
  const contactForm = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');

  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      console.log('AJB: Form submission detected!');

      // --- Validation ---
      let valid = true;

      const nameInput  = document.getElementById('contactName');
      const emailInput = document.getElementById('contactEmail');
      const phoneInp   = document.getElementById('contactPhone');
      const nameErr    = document.getElementById('nameError');
      const emailErr   = document.getElementById('emailError');
      const phoneErr   = document.getElementById('phoneError');

      // Name: letters, spaces, hyphens only
      const nameOk = /^[a-zA-ZÀ-ÿ\s'\-]{2,}$/.test(nameInput.value.trim());
      nameInput.classList.toggle('invalid', !nameOk);
      nameErr.classList.toggle('visible', !nameOk);
      if (!nameOk) valid = false;

      // Email
      const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim());
      emailInput.classList.toggle('invalid', !emailOk);
      emailErr.classList.toggle('visible', !emailOk);
      if (!emailOk) valid = false;

      // Phone: must match +1 (xxx) xxx-xxxx or be empty
      const phoneVal = phoneInp.value.trim();
      const phoneOk  = phoneVal === '' || /^\+1 \(\d{3}\) \d{3}-\d{4}$/.test(phoneVal);
      phoneInp.classList.toggle('invalid', !phoneOk);
      phoneErr.classList.toggle('visible', !phoneOk);
      if (!phoneOk) valid = false;

      if (!valid) return;

      const btn = contactForm.querySelector('button[type="submit"]');
      const originalText = btn.innerHTML;

      // Gather data and transform to uppercase
      const formData = new FormData(contactForm);
      const data = Object.fromEntries(formData.entries());
      
      // Auto-uppercase all text values before sending
      if (data.name) data.name = data.name.toUpperCase();
      if (data.service) data.service = data.service.toUpperCase();
      if (data.email) data.email = data.email.toLowerCase(); // Email usually lowercase
      
      data.source = 'AJB Website';
      data.submittedAt = new Date().toLocaleString();

      console.log('AJB: Sending data to n8n:', data);

      try {
        btn.disabled = true;
        btn.innerHTML = 'Sending...';

        const response = await fetch('https://dykanproject-n8n1.pnbelu.easypanel.host/webhook/ajb-contact-form', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });

        if (response.ok) {
          console.log('AJB: Success!');
          // Show in-place success message
          contactForm.style.display = 'none';
          if (formSuccess) formSuccess.classList.add('visible');
        } else {
          throw new Error('Server error ' + response.status);
        }
      } catch (err) {
        console.error('AJB: Error:', err);
        btn.disabled = false;
        btn.innerHTML = originalText;
        alert('There was a problem sending your request. Please try again or call us directly.');
      }
    });
  }

  // ===== GLOBAL IMAGE ERROR HANDLER (Clean deployment) =====
  document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', function() {
      console.warn("AJB: Image failed to load:", this.src);
      this.style.opacity = '0.5'; // Allow CSS placeholder background to show
      // Using a transparent 1x1 base64 to hide the broken icon
      this.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
    });
  });

})();
