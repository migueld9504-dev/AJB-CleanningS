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
  const launchBar = document.getElementById('launchBar');
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
      try {
        triggerReveal3D();
        triggerRevealUp();
      } catch (e) {
        console.warn("Immediate reveal failed: ", e);
      }
    });
  }

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
    { threshold: 0.12 }
  );

  function triggerRevealUp() {
    document.querySelectorAll('.reveal-up').forEach(el => revealObserver.observe(el));
  }

  // ===== NAVBAR SCROLL =====
  const navbar = document.getElementById('navbar');
  if (navbar) {
    function handleScroll() {
      if (window.scrollY > 60) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
  }

  // ===== MOBILE NAV TOGGLE =====
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
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

  // ===== AJB NETFLIX GALLERY LOGIC =====
  const gallery = document.getElementById('ajbNetflixGallery');
  if (gallery) {
    let slides = [...gallery.querySelectorAll('.ajb-gallery-slide')];
    const filters = document.querySelectorAll('.filter-btn');

    const isCollage = gallery.classList.contains('collage-mode');



    const netflixGallery = document.getElementById('ajbNetflixGallery');
    const featuredContent = document.getElementById('featuredContent');
    const thumbnailsRow = document.getElementById('galleryThumbnails');
    const metaTag = document.getElementById('metaTag');
    const metaTitle = document.getElementById('metaTitle');
    const metaDesc = document.getElementById('metaDesc');
    const galleryPrev = document.getElementById('galleryPrev');
    const galleryNext = document.getElementById('galleryNext');
    
    let activeIndex = 0;
    let autoRotateTimer = null;
    let currentSlides = [];

    function updateFeatured(slide) {
      if (!slide) return;
      featuredContent.innerHTML = '';
      
      const isVideo = slide.querySelector('.video-card');
      const img = slide.querySelector('img');
      const titleEl = slide.querySelector('h3');
      const descEl = slide.querySelector('p');
      const tagEl = slide.querySelector('.ajb-gallery-tag');

      const title = titleEl ? titleEl.innerHTML : "";
      const desc = descEl ? descEl.innerHTML : "";
      const tag = tagEl ? tagEl.innerHTML : "";

      if (isVideo) {
        const videoSrc = slide.querySelector('.video-src').textContent;
        const video = document.createElement('video');
        video.src = videoSrc;
        video.autoplay = true;
        video.muted = true;
        video.loop = true;
        video.playsInline = true;
        featuredContent.appendChild(video);
      } else {
        const newImg = document.createElement('img');
        newImg.src = img.src;
        newImg.alt = img.alt;
        featuredContent.appendChild(newImg);
      }

      // Apply translation keys and trigger update
      if (titleEl) metaTitle.setAttribute('data-t', titleEl.getAttribute('data-t'));
      if (descEl) metaDesc.setAttribute('data-t', descEl.getAttribute('data-t'));
      if (tagEl) metaTag.setAttribute('data-t', tagEl.getAttribute('data-t'));

      if (window.AJBi18n) {
        window.AJBi18n.applyTranslations(window.AJBi18n.getCurrentLang());
      }

      // Update active thumbnail
      document.querySelectorAll('.thumb-item').forEach((thumb, idx) => {
        thumb.classList.toggle('active', idx === activeIndex);
        // Removed scrollIntoView to prevent page jumping during auto-rotation
      });
    }

    function renderThumbnails() {
      thumbnailsRow.innerHTML = '';
      currentSlides.forEach((slide, idx) => {
        const thumb = document.createElement('div');
        thumb.className = 'thumb-item';
        if (idx === activeIndex) thumb.classList.add('active');

        const img = slide.querySelector('img');
        const thumbImg = document.createElement('img');
        thumbImg.src = img.src;
        thumbImg.loading = 'lazy';
        thumb.appendChild(thumbImg);

        if (slide.querySelector('.video-card')) {
          const play = document.createElement('div');
          play.className = 'thumb-play';
          play.innerHTML = '▶';
          thumb.appendChild(play);
        }

        thumb.onclick = () => {
          activeIndex = idx;
          updateFeatured(currentSlides[activeIndex]);
          resetTimer();
        };
        
        thumbnailsRow.appendChild(thumb);
      });
    }

    function setActive(idx) {
      if (currentSlides.length === 0) return;
      activeIndex = (idx + currentSlides.length) % currentSlides.length;
      updateFeatured(currentSlides[activeIndex]);
    }

    function resetTimer() {
      clearInterval(autoRotateTimer);
      autoRotateTimer = setInterval(() => {
        setActive(activeIndex + 1);
      }, 3000);
    }

    function shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }

    function filterGallery(filter) {
      activeIndex = 0;
      if (filter === 'all') {
        currentSlides = shuffle([...slides]);
      } else {
        currentSlides = slides.filter(s => s.dataset.category === filter);
      }

      // Prioritize videos
      currentSlides.sort((a, b) => {
        const aIsVid = a.querySelector('.video-card') ? 1 : 0;
        const bIsVid = b.querySelector('.video-card') ? 1 : 0;
        return bIsVid - aIsVid;
      });

      renderThumbnails();
      setActive(0);
      resetTimer();

      // Ensure text is translated for the newly filtered set
      if (window.AJBi18n) {
        window.AJBi18n.applyTranslations(window.AJBi18n.getCurrentLang());
      }
    }

    filters.forEach(btn => {
      btn.addEventListener('click', () => {
        filters.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        filterGallery(btn.dataset.filter);
      });
    });

    galleryPrev.onclick = () => { setActive(activeIndex - 1); resetTimer(); };
    galleryNext.onclick = () => { setActive(activeIndex + 1); resetTimer(); };

    // Initial load
    filterGallery('all');

    netflixGallery.addEventListener('mouseenter', () => clearInterval(autoRotateTimer));
    netflixGallery.addEventListener('mouseleave', resetTimer);

    // Listen for language changes to update the featured text
    document.addEventListener('ajb-lang-change', () => {
      if (currentSlides[activeIndex]) {
        updateFeatured(currentSlides[activeIndex]);
      }
    });

    // Lightbox Logic
    const lightbox = document.getElementById('ajbLightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxVideo = document.getElementById('lightboxVideo');
    const lbTitle = document.getElementById('lbTitle');
    const lbDesc = document.getElementById('lbDesc');
    const lbClose = document.getElementById('lbClose');
    const lbPrev = document.getElementById('lbPrev');
    const lbNext = document.getElementById('lbNext');

    let lbActiveIndex = 0;

    function openLightbox(idx) {
      lbActiveIndex = idx;
      const slide = currentSlides[lbActiveIndex];
      if (!slide || !lightbox) return;

      const isVideo = slide.querySelector('.video-card');
      const titleEl = slide.querySelector('h3');
      const descEl = slide.querySelector('p');

      if (isVideo) {
        const videoSrc = slide.querySelector('.video-src').textContent;
        if (lightboxVideo) {
          lightboxVideo.src = videoSrc;
          lightboxVideo.style.display = 'block';
          lightboxVideo.play();
        }
        if (lightboxImg) lightboxImg.style.display = 'none';
      } else {
        const img = slide.querySelector('img');
        if (lightboxImg) {
          lightboxImg.src = img.src;
          lightboxImg.style.display = 'block';
        }
        if (lightboxVideo) {
          lightboxVideo.style.display = 'none';
          lightboxVideo.pause();
        }
      }

      // Set translation keys and update
      if (titleEl && lbTitle) lbTitle.setAttribute('data-t', titleEl.getAttribute('data-t'));
      if (descEl && lbDesc) lbDesc.setAttribute('data-t', descEl.getAttribute('data-t'));

      if (window.AJBi18n) {
        window.AJBi18n.applyTranslations(window.AJBi18n.getCurrentLang());
      }

      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
      clearInterval(autoRotateTimer);
    }

    if (featuredContent) {
      featuredContent.onclick = () => openLightbox(activeIndex);
    }

    if (lbClose) {
      lbClose.onclick = () => {
        if (lightbox) lightbox.classList.remove('active');
        if (lightboxVideo) lightboxVideo.pause();
        document.body.style.overflow = 'auto';
        resetTimer();
      };
    }

    if (lbPrev) {
      lbPrev.onclick = (e) => {
        e.stopPropagation();
        openLightbox((lbActiveIndex - 1 + currentSlides.length) % currentSlides.length);
      };
    }

    if (lbNext) {
      lbNext.onclick = (e) => {
        e.stopPropagation();
        openLightbox((lbActiveIndex + 1) % currentSlides.length);
      };
    }

    if (lightbox) {
      lightbox.onclick = (e) => {
        if (e.target === lightbox && lbClose) lbClose.onclick();
      };
    }
  } // End of if (gallery)


  // ===== REVIEWS SECTION TOGGLE =====
  const navReviewsBtn = document.getElementById('navReviewsBtn');
  const footerReviewsBtn = document.getElementById('footerReviewsBtn');
  const viewAllReviewsBtn = document.getElementById('viewAllReviewsBtn');
  const leaveReviewBtn = document.getElementById('leaveReviewBtn');
  const reviewsSection = document.getElementById('reviewsIntegrated');

  const toggleReviews = (e) => {
    if (e) e.preventDefault();
    if (reviewsSection) {
      reviewsSection.classList.toggle('active');
      if (reviewsSection.classList.contains('active')) {
        const top = reviewsSection.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }
  };

  if (navReviewsBtn) navReviewsBtn.addEventListener('click', toggleReviews);
  if (footerReviewsBtn) footerReviewsBtn.addEventListener('click', toggleReviews);
  if (viewAllReviewsBtn) viewAllReviewsBtn.addEventListener('click', toggleReviews);
  if (leaveReviewBtn) leaveReviewBtn.addEventListener('click', toggleReviews);
  
  // Ensure the button in nav always works even if script re-runs
  window.toggleAJBReviews = toggleReviews;

  // --- CONTACT FORM: PHONE MASK ---
  const phoneInput = document.getElementById('contactPhone');
  if (phoneInput) {
    phoneInput.addEventListener('input', function (e) {
      let raw = this.value.replace(/\D/g, ''); // keep only digits
      
      // If starts with 1 and is long, remove it for formatting
      if (raw.startsWith('1') && raw.length > 10) {
        raw = raw.slice(1);
      }
      
      raw = raw.slice(0, 10); // max 10 digits
      
      let formatted = '';
      if (raw.length > 0) {
        formatted = '+1 (';
        formatted += raw.slice(0, 3);
        if (raw.length > 3) formatted += ') ' + raw.slice(3, 6);
        if (raw.length > 6) formatted += '-' + raw.slice(6, 10);
      }
      
      this.value = formatted;
    });

    // Prevent typing non-digits
    phoneInput.addEventListener('keypress', function(e) {
      if (!/\d/.test(e.key)) {
        e.preventDefault();
      }
    });
  }

  // --- CONTACT FORM HANDLER ---
  const contactForm = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');

  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      console.log('AJB: Form submission detected!');

      // Validation Logic
      let valid = true;
      const nameInp = document.getElementById('contactName');
      const emailInp = document.getElementById('contactEmail');
      const phoneInp = document.getElementById('contactPhone');
      
      const nameErr = document.getElementById('nameError');
      const emailErr = document.getElementById('emailError');
      const phoneErr = document.getElementById('phoneError');

      // Name: MUST NOT contain numbers, must be at least 2 chars
      const nameVal = nameInp.value.trim();
      const hasNumber = /\d/.test(nameVal);
      const nameOk = nameVal.length >= 2 && !hasNumber && /^[a-zA-ZÀ-ÿ\s'\-]+$/.test(nameVal);
      
      nameInp.classList.toggle('invalid', !nameOk);
      if (nameErr) nameErr.classList.toggle('visible', !nameOk);
      if (!nameOk) valid = false;

      // Email: must contain @
      const emailVal = emailInp.value.trim();
      const emailOk = emailVal.includes('@') && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal);
      emailInp.classList.toggle('invalid', !emailOk);
      if (emailErr) emailErr.classList.toggle('visible', !emailOk);
      if (!emailOk) valid = false;

      // Phone: must be valid US format
      const digits = phoneInp.value.replace(/\D/g, '');
      const cleanDigits = digits.startsWith('1') ? digits.slice(1) : digits;
      const phoneOk = cleanDigits.length === 10;
      phoneInp.classList.toggle('invalid', !phoneOk);
      if (phoneErr) phoneErr.classList.toggle('visible', !phoneOk);
      if (!phoneOk) valid = false;

      if (!valid) {
        console.warn('AJB: Form validation failed.');
        return false;
      }

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

})();
