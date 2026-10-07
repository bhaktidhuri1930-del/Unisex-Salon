/**
 * ==========================================================================
 * ELÉVÉ UNISEX SALON - LUXURY INTERACTIVE APPLICATION LOGIC
 * ==========================================================================
 */

// --- Global Data Store ---
const SALON_DATA = {
  services: [
    {
      id: 'srv-1',
      name: 'Signature Haircut & Blowdry',
      category: 'hair',
      gender: 'unisex',
      genderLabel: 'Unisex',
      desc: 'Bespoke precision haircut tailored to your facial architecture, finished with a luxury blowout and texturizing serum.',
      price: 999,
      duration: '45 mins',
      image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=700&q=80'
    },
    {
      id: 'srv-2',
      name: "Men's Precision Fade & Styling",
      category: 'hair',
      gender: 'men',
      genderLabel: 'Men',
      desc: 'Master barber skin fade or taper, hot towel nape clean, and matte clay finish for an effortlessly sharp look.',
      price: 699,
      duration: '35 mins',
      image: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=700&q=80'
    },
    {
      id: 'srv-3',
      name: "Luxury Women's Cut & Volume Blowout",
      category: 'hair',
      gender: 'women',
      genderLabel: 'Women',
      desc: 'Full consultation, split-end removal or transformation cut, paired with high-volume runway blowout.',
      price: 1499,
      duration: '60 mins',
      image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=700&q=80'
    },
    {
      id: 'srv-4',
      name: 'Balayage & French Gloss',
      category: 'hair',
      gender: 'women',
      genderLabel: 'Women',
      desc: 'Hand-painted dimensional ribbons using ammonia-free L\'Oréal Dia Light for radiant, sun-kissed perfection.',
      price: 4999,
      duration: '150 mins',
      image: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=700&q=80'
    },
    {
      id: 'srv-5',
      name: 'Keratin Silk Infusion',
      category: 'hair',
      gender: 'unisex',
      genderLabel: 'Unisex',
      desc: 'Formaldehyde-free smoothing therapy providing intense humidity defense, mirror gloss, and effortless styling for 4 months.',
      price: 3999,
      duration: '120 mins',
      image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=700&q=80'
    },
    {
      id: 'srv-6',
      name: 'Kérastase Deep Hair Spa',
      category: 'hair',
      gender: 'unisex',
      genderLabel: 'Unisex',
      desc: 'Fusio-Dose concentrated booster ceremony with soothing steam bath and 20-minute acupressure scalp massage.',
      price: 1499,
      duration: '60 mins',
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=700&q=80'
    },
    {
      id: 'srv-7',
      name: 'Hair Smoothening / Nanoplastia',
      category: 'hair',
      gender: 'unisex',
      genderLabel: 'Unisex',
      desc: 'Advanced organic botanical straightening that reconstructs the hair fiber while leaving hair naturally silky.',
      price: 5499,
      duration: '180 mins',
      image: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=700&q=80'
    },
    {
      id: 'srv-8',
      name: '24K Gold Hydra Radiance Facial',
      category: 'beauty',
      gender: 'unisex',
      genderLabel: 'Unisex',
      desc: 'Multi-step micro-dermabrasion with colloidal gold collagen infusion for an instant dewy, red-carpet glow.',
      price: 2499,
      duration: '75 mins',
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=700&q=80'
    },
    {
      id: 'srv-9',
      name: 'Express Detox Skin Cleanup',
      category: 'beauty',
      gender: 'unisex',
      genderLabel: 'Unisex',
      desc: 'Gentle ultrasonic pore extraction, botanical toner, and tea tree antioxidant peel to unclog and refresh skin.',
      price: 1199,
      duration: '45 mins',
      image: 'https://images.unsplash.com/photo-1512290900672-1f55b991586a?auto=format&fit=crop&w=700&q=80'
    },
    {
      id: 'srv-10',
      name: 'High-Glam Editorial Makeup',
      category: 'beauty',
      gender: 'women',
      genderLabel: 'Women',
      desc: 'Airbrush base, sculpt contouring, magnetic lash application, and waterproof finish for weddings and gala evenings.',
      price: 4499,
      duration: '90 mins',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=700&q=80'
    },
    {
      id: 'srv-11',
      name: 'Royal Beard Architecture & Styling',
      category: 'grooming',
      gender: 'men',
      genderLabel: 'Men',
      desc: 'Cut-throat razor edge sculpting, warm eucalyptus towel wrap, organic cedarwood oil conditioning, and balm shaping.',
      price: 599,
      duration: '30 mins',
      image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=700&q=80'
    },
    {
      id: 'srv-12',
      name: 'Signature Gentlemen’s Grooming Suite',
      category: 'grooming',
      gender: 'men',
      genderLabel: 'Men',
      desc: 'The complete luxury package: Signature cut, razor beard trim, express charcoal facial cleanup, and head massage.',
      price: 1899,
      duration: '90 mins',
      image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=700&q=80'
    },
    {
      id: 'srv-13',
      name: 'Luxury Gel Manicure with Paraffin Dip',
      category: 'spa',
      gender: 'unisex',
      genderLabel: 'Unisex',
      desc: 'Dead-sea salt exfoliation, cuticle therapy, warm peach paraffin soak, and chip-resistant gel lacquer application.',
      price: 1299,
      duration: '50 mins',
      image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=700&q=80'
    },
    {
      id: 'srv-14',
      name: 'Aromatherapy Reflexology Pedicure',
      category: 'spa',
      gender: 'unisex',
      genderLabel: 'Unisex',
      desc: 'Hydrotherapy foot bath infused with lavender & peppermint oils, pumice callus smoothing, and deep calf massage.',
      price: 1599,
      duration: '60 mins',
      image: 'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?auto=format&fit=crop&w=700&q=80'
    }
  ],

  stylists: [
    {
      id: 'sty-1',
      name: 'Aarav Mehta',
      role: 'Creative Director & Hair Specialist',
      specialization: 'Precision Cuts • Runway Styling • Texture Design',
      experience: '8 Years Experience',
      rating: '4.9',
      reviewsCount: 380,
      photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'sty-2',
      name: 'Meera Shah',
      role: 'Senior Beauty Artist & Esthetician',
      specialization: 'Bridal Glam • Hydra Facials • Dermaplaning',
      experience: '6 Years Experience',
      rating: '5.0',
      reviewsCount: 420,
      photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'sty-3',
      name: 'Vikram Singhania',
      role: 'Master Barber & Grooming Specialist',
      specialization: 'Razor Fades • Beard Architecture • Men’s Spa',
      experience: '9 Years Experience',
      rating: '4.9',
      reviewsCount: 310,
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'sty-4',
      name: 'Ananya Roy',
      role: 'Senior Colour Alchemist',
      specialization: 'Balayage • AirTouch • Pastel Tones & Glossing',
      experience: '7 Years Experience',
      rating: '4.8',
      reviewsCount: 290,
      photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80'
    }
  ],

  gallery: [
    {
      id: 'gal-1',
      title: 'Caramel Macchiato Balayage',
      category: 'colour',
      categoryLabel: 'Colour',
      image: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=900&q=80',
      description: 'Dimensional seamless balayage transition from natural espresso roots to buttery warm caramel ribbons.'
    },
    {
      id: 'gal-2',
      title: 'Precision Mid-Fade & Sculpted Beard',
      category: 'grooming',
      categoryLabel: 'Grooming',
      image: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=900&q=80',
      description: 'Razor sharp mid-fade blended seamlessly with crisp beard line work and matte volume styling.'
    },
    {
      id: 'gal-3',
      title: 'Silky Keratin Mirror Transformation',
      category: 'hair',
      categoryLabel: 'Hair',
      image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=900&q=80',
      description: 'Revived frizzy coarse curls into liquid glass straight strands with deep nourishing keratin infusion.'
    },
    {
      id: 'gal-4',
      title: 'Radiant Gold Red-Carpet Glam',
      category: 'makeup',
      categoryLabel: 'Makeup',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80',
      description: 'Luminous skin focus, subtle smoky bronze eyes, and sculpted nude satin lips for an evening reception.'
    },
    {
      id: 'gal-5',
      title: 'Modern Textured French Crop',
      category: 'hair',
      categoryLabel: 'Hair',
      image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=900&q=80',
      description: 'Choppy textured crown layers paired with an ultra-clean taper fade and defined temporal points.'
    },
    {
      id: 'gal-6',
      title: 'Champagne Blonde AirTouch',
      category: 'colour',
      categoryLabel: 'Colour',
      image: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=900&q=80',
      description: 'Ultra-fine blowdry-separated foil highlights creating an imperceptible grow-out line.'
    }
  ],

  testimonials: [
    {
      name: 'Rohan Deshmukh',
      role: 'Creative Director, Mumbai',
      service: 'Precision Fade & Beard Architecture',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
      text: 'One of the best grooming experiences I\'ve had anywhere in India. Vikram takes beard styling to an architectural level. The ambiance, espresso bar, and attention to detail are world-class.'
    },
    {
      name: 'Dr. Shalini Kulkarni',
      role: 'Dermatologist',
      service: '24K Gold Hydra Facial & Hair Spa',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
      text: 'As a dermatologist, I am very particular about hygiene and product quality. ELÉVÉ completely exceeded my expectations. The autoclave sterilized tools and Kérastase products make this my absolute holy grail.'
    },
    {
      name: 'Natasha Verma',
      role: 'Fashion Model & Influencer',
      service: 'Balayage & Runway Blowout',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
      text: 'Absolutely loved the experience! Aarav understood exactly the champagne blonde shade I wanted without causing any hair damage. I receive compliments on my hair every single day!'
    },
    {
      name: 'Kabir & Tara Sen',
      role: 'Couple Experience',
      service: 'Bridal & Groom Pre-Wedding Suite',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80',
      text: 'Beautiful salon, extremely polite and professional staff, and unparalleled luxury. We booked their private couple suite before our engagement, and everything was executed with perfection.'
    }
  ]
};

// --- Application State ---
const state = {
  currentCategoryFilter: 'all',
  currentGalleryFilter: 'all',
  activeLightboxIndex: 0,
  testimonialIndex: 0,
  testimonialTimer: null,
  activeBookingStep: 1,
  bookingForm: {
    serviceId: null,
    stylistId: null,
    date: null,
    time: null,
    name: '',
    phone: '',
    email: '',
    notes: '',
    promoCode: '',
    discountPercent: 0
  },
  savedBookings: []
};

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
  syncProductionMeta();
  loadSavedBookings();
  initScrollProgress();
  initNavbar();
  initMobileDrawer();
  initCounters();
  renderServices();
  initServiceFilters();
  renderStylists();
  renderGallery();
  initGalleryFilters();
  initLightbox();
  initTestimonialCarousel();
  initOfferCountdown();
  initBookingWizard();
  initFaqAccordion();
  initContactForm();
  initBackToTop();
  updateBookingsBadge();
  setupPromoButtons();
});

function syncProductionMeta() {
  try {
    if (typeof window !== 'undefined' && window.location && window.location.href.startsWith('http')) {
      const currentUrl = window.location.origin + window.location.pathname;
      const canonicalLink = document.querySelector('link[rel="canonical"]');
      if (canonicalLink) canonicalLink.setAttribute('href', currentUrl);
      const ogUrl = document.querySelector('meta[property="og:url"]');
      if (ogUrl) ogUrl.setAttribute('content', currentUrl);
    }
  } catch (_) {}
}

// ==========================================================================
// 1. LOCAL STORAGE & SAVED BOOKINGS
// ==========================================================================
function loadSavedBookings() {
  try {
    const raw = localStorage.getItem('eleve_salon_appointments');
    if (raw) {
      state.savedBookings = JSON.parse(raw);
    }
  } catch (e) {
    console.warn('LocalStorage unavailable or corrupt:', e);
    state.savedBookings = [];
  }
}

function saveBookingsToStorage() {
  try {
    localStorage.setItem('eleve_salon_appointments', JSON.stringify(state.savedBookings));
  } catch (e) {
    console.error('Failed to save to localStorage:', e);
  }
  updateBookingsBadge();
}

function updateBookingsBadge() {
  const badge = document.getElementById('myBookingsBadge');
  if (badge) {
    badge.textContent = state.savedBookings.length;
    badge.style.display = state.savedBookings.length > 0 ? 'inline-flex' : 'none';
  }
}

// ==========================================================================
// 2. SCROLL PROGRESS & NAVBAR
// ==========================================================================
function initScrollProgress() {
  const progressBar = document.getElementById('scroll-progress');
  if (!progressBar) return;

  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
    progressBar.style.width = `${progress}%`;
  }, { passive: true });
}

function initNavbar() {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  // Active link observer to highlight current section
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, { threshold: 0.35 });

  sections.forEach(sec => observer.observe(sec));
}

// ==========================================================================
// 3. MOBILE DRAWER NAVIGATION
// ==========================================================================
function initMobileDrawer() {
  const hamburger = document.getElementById('hamburgerBtn');
  const drawer = document.getElementById('mobileDrawer');
  const backdrop = document.getElementById('mobileBackdrop');
  const closeBtn = document.getElementById('closeDrawerBtn');
  const drawerLinks = document.querySelectorAll('.mobile-nav-link');

  function openDrawer() {
    drawer.style.display = 'flex';
    backdrop.style.display = 'block';
    drawer.removeAttribute('aria-hidden');
    requestAnimationFrame(() => {
      hamburger.classList.add('open');
      drawer.classList.add('open');
      backdrop.classList.add('open');
      document.body.classList.add('modal-open');
    });
  }

  function closeDrawer() {
    hamburger.classList.remove('open');
    drawer.classList.remove('open');
    backdrop.classList.remove('open');
    drawer.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    setTimeout(() => {
      if (!drawer.classList.contains('open')) {
        drawer.style.display = 'none';
        backdrop.style.display = 'none';
      }
    }, 350);
  }

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      if (drawer.classList.contains('open')) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });
  }

  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (backdrop) backdrop.addEventListener('click', closeDrawer);

  drawerLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });
}

// ==========================================================================
// 4. ANIMATED STAT COUNTERS
// ==========================================================================
function initCounters() {
  const counterElements = document.querySelectorAll('.counter-number[data-target]');
  if (!counterElements.length) return;

  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        counterElements.forEach(el => animateCounter(el));
      }
    });
  }, { threshold: 0.3 });

  const targetContainer = document.querySelector('.why-us-counters');
  if (targetContainer) observer.observe(targetContainer);
}

function animateCounter(el) {
  const targetStr = el.getAttribute('data-target');
  const targetNum = parseFloat(targetStr);
  const suffix = el.getAttribute('data-suffix') || '';
  const isDecimal = targetStr.includes('.');
  const duration = 1800;
  const startTime = performance.now();

  function updateCount(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    // EaseOutQuad
    const easeProgress = 1 - (1 - progress) * (1 - progress);
    const currentVal = easeProgress * targetNum;

    if (isDecimal) {
      el.textContent = currentVal.toFixed(1) + suffix;
    } else {
      el.textContent = Math.floor(currentVal).toLocaleString() + suffix;
    }

    if (progress < 1) {
      requestAnimationFrame(updateCount);
    } else {
      el.textContent = targetStr + suffix;
    }
  }

  requestAnimationFrame(updateCount);
}

// ==========================================================================
// 5. SERVICES RENDERING & FILTERING
// ==========================================================================
function renderServices() {
  const grid = document.getElementById('servicesGrid');
  if (!grid) return;

  const filter = state.currentCategoryFilter;
  const filtered = SALON_DATA.services.filter(s => {
    if (filter === 'all') return true;
    if (filter === 'men') return s.gender === 'men' || s.gender === 'unisex';
    if (filter === 'women') return s.gender === 'women' || s.gender === 'unisex';
    if (filter === 'unisex') return s.gender === 'unisex';
    return true;
  });

  grid.innerHTML = filtered.map(s => `
    <div class="service-card" data-id="${s.id}">
      <div class="service-image-wrap">
        <img src="${s.image}" alt="${s.name}" loading="lazy">
        <span class="service-badge">${s.category.toUpperCase()}</span>
        <span class="service-gender-tag">${s.genderLabel}</span>
      </div>
      <div class="service-body">
        <div class="service-meta">
          <span class="service-meta-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            ${s.duration}
          </span>
          <span class="service-meta-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
            Luxury Care
          </span>
        </div>
        <h3 class="service-name">${s.name}</h3>
        <p class="service-desc">${s.desc}</p>
        <div class="service-footer">
          <div class="service-price-block">
            <span class="price-label">Starting From</span>
            <span class="price-value">₹${s.price.toLocaleString()}</span>
          </div>
          <button class="btn btn-primary btn-sm service-book-btn" onclick="openBookingWithService('${s.id}')">
            Book Now
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

function initServiceFilters() {
  const filterBtns = document.querySelectorAll('.service-filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.currentCategoryFilter = btn.getAttribute('data-filter');
      renderServices();
    });
  });
}

// ==========================================================================
// 6. STYLISTS RENDERING
// ==========================================================================
function renderStylists() {
  const grid = document.getElementById('stylistsGrid');
  if (!grid) return;

  grid.innerHTML = SALON_DATA.stylists.map(sty => `
    <div class="stylist-card">
      <div class="stylist-photo-wrap">
        <img src="${sty.photo}" alt="${sty.name}" loading="lazy">
        <span class="stylist-exp-badge">${sty.experience}</span>
      </div>
      <div class="stylist-body">
        <div class="stylist-rating">
          <div class="stylist-rating-stars">
            ${'<svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>'.repeat(5)}
          </div>
          <span>${sty.rating} (${sty.reviewsCount}+)</span>
        </div>
        <h3 class="stylist-name">${sty.name}</h3>
        <p class="stylist-role">${sty.role}</p>
        <p class="stylist-spec">${sty.specialization}</p>
        <button class="btn btn-outline btn-sm" onclick="openBookingWithStylist('${sty.id}')" style="width: 100%;">
          Book With Me
        </button>
      </div>
    </div>
  `).join('');
}

// ==========================================================================
// 7. BEFORE & AFTER GALLERY & LIGHTBOX
// ==========================================================================
function renderGallery() {
  const grid = document.getElementById('galleryGrid');
  if (!grid) return;

  const filter = state.currentGalleryFilter;
  const filtered = SALON_DATA.gallery.filter(item => {
    if (filter === 'all') return true;
    return item.category === filter;
  });

  grid.innerHTML = filtered.map((item, idx) => `
    <div class="gallery-item" onclick="openLightbox(${idx})">
      <img src="${item.image}" alt="${item.title}" loading="lazy">
      <div class="gallery-overlay">
        <span class="gallery-tag">${item.categoryLabel}</span>
        <h4 class="gallery-title">${item.title}</h4>
        <div class="gallery-view-hint">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
          Click to view transformation
        </div>
      </div>
    </div>
  `).join('');
}

function initGalleryFilters() {
  const filterBtns = document.querySelectorAll('.gallery-filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.currentGalleryFilter = btn.getAttribute('data-filter');
      renderGallery();
    });
  });
}

function initLightbox() {
  const lightbox = document.getElementById('lightboxModal');
  const closeBtn = document.getElementById('lightboxCloseBtn');
  const prevBtn = document.getElementById('lightboxPrevBtn');
  const nextBtn = document.getElementById('lightboxNextBtn');

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (prevBtn) prevBtn.addEventListener('click', () => changeLightboxImage(-1));
  if (nextBtn) nextBtn.addEventListener('click', () => changeLightboxImage(1));

  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }

  // Keyboard navigation
  window.addEventListener('keydown', (e) => {
    if (!lightbox || !lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') changeLightboxImage(-1);
    if (e.key === 'ArrowRight') changeLightboxImage(1);
  });
}

function openLightbox(index) {
  const filter = state.currentGalleryFilter;
  const filtered = SALON_DATA.gallery.filter(item => {
    if (filter === 'all') return true;
    return item.category === filter;
  });

  if (!filtered[index]) return;
  state.activeLightboxIndex = index;
  updateLightboxContent(filtered[index]);

  const lightbox = document.getElementById('lightboxModal');
  if (lightbox) {
    lightbox.classList.add('active');
    document.body.classList.add('modal-open');
  }
}

function closeLightbox() {
  const lightbox = document.getElementById('lightboxModal');
  if (lightbox) {
    lightbox.classList.remove('active');
    document.body.classList.remove('modal-open');
  }
}

function changeLightboxImage(delta) {
  const filter = state.currentGalleryFilter;
  const filtered = SALON_DATA.gallery.filter(item => {
    if (filter === 'all') return true;
    return item.category === filter;
  });

  let nextIndex = state.activeLightboxIndex + delta;
  if (nextIndex < 0) nextIndex = filtered.length - 1;
  if (nextIndex >= filtered.length) nextIndex = 0;

  state.activeLightboxIndex = nextIndex;
  updateLightboxContent(filtered[nextIndex]);
}

function updateLightboxContent(item) {
  const img = document.getElementById('lightboxImage');
  const tag = document.getElementById('lightboxTag');
  const title = document.getElementById('lightboxTitle');

  if (img) img.src = item.image;
  if (tag) tag.textContent = item.categoryLabel;
  if (title) title.textContent = item.title;
}

// ==========================================================================
// 8. SPECIAL OFFERS COUNTDOWN TIMER & PROMO TRIGGER
// ==========================================================================
function initOfferCountdown() {
  const hoursEl = document.getElementById('countHours');
  const minsEl = document.getElementById('countMins');
  const secsEl = document.getElementById('countSecs');

  if (!hoursEl || !minsEl || !secsEl) return;

  // Set an end date 48 hours in future from today or end of weekend
  let targetTime = localStorage.getItem('eleve_offer_countdown_end');
  if (!targetTime || parseInt(targetTime) < Date.now()) {
    targetTime = Date.now() + 48 * 60 * 60 * 1000;
    localStorage.setItem('eleve_offer_countdown_end', targetTime);
  } else {
    targetTime = parseInt(targetTime);
  }

  function update() {
    const diff = targetTime - Date.now();
    if (diff <= 0) {
      hoursEl.textContent = '00';
      minsEl.textContent = '00';
      secsEl.textContent = '00';
      return;
    }

    const hours = Math.floor(diff / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((diff % (1000 * 60)) / 1000);

    hoursEl.textContent = String(hours).padStart(2, '0');
    minsEl.textContent = String(mins).padStart(2, '0');
    secsEl.textContent = String(secs).padStart(2, '0');
  }

  update();
  setInterval(update, 1000);
}

function setupPromoButtons() {
  // Coupon code copy
  const copyBtns = document.querySelectorAll('.offer-copy-btn');
  copyBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const code = e.target.getAttribute('data-code');
      if (code) {
        navigator.clipboard.writeText(code).then(() => {
          showToast('Promo Code Copied!', `Use code ${code} during appointment checkout.`);
        });
      }
    });
  });
}

function claimOffer(offerType, promoCode) {
  openBookingModal();
  if (promoCode) {
    state.bookingForm.promoCode = promoCode;
    applyDiscountCode(promoCode, false);
  }

  if (offerType === 'first-visit') {
    // Select popular haircut
    selectBookingService('srv-1');
  } else if (offerType === 'hair-spa') {
    selectBookingService('srv-6');
  } else if (offerType === 'grooming-pack') {
    selectBookingService('srv-11');
  } else if (offerType === 'bridal') {
    selectBookingService('srv-10');
  }

  goToBookingStep(1);
  showToast('Offer Applied!', `Discount code ${promoCode} is locked for your session.`);
}

// ==========================================================================
// 9. TESTIMONIALS CAROUSEL
// ==========================================================================
function initTestimonialCarousel() {
  const track = document.getElementById('testimonialTrack');
  const prevBtn = document.getElementById('reviewPrevBtn');
  const nextBtn = document.getElementById('reviewNextBtn');
  const dotsContainer = document.getElementById('carouselDots');

  if (!track) return;

  // Render slides
  track.innerHTML = SALON_DATA.testimonials.map(item => `
    <div class="review-slide">
      <div class="review-quote-icon">“</div>
      <p class="review-text">"${item.text}"</p>
      <div class="review-stars">
        ${'<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>'.repeat(item.rating)}
      </div>
      <div class="review-author">
        <div class="review-avatar">
          <img src="${item.avatar}" alt="${item.name}" loading="lazy">
        </div>
        <div class="author-info">
          <h4 class="author-name">${item.name}</h4>
          <span class="author-service">${item.service}</span>
        </div>
      </div>
    </div>
  `).join('');

  // Render dots
  if (dotsContainer) {
    dotsContainer.innerHTML = SALON_DATA.testimonials.map((_, idx) => `
      <div class="dot ${idx === 0 ? 'active' : ''}" onclick="goToTestimonialSlide(${idx})"></div>
    `).join('');
  }

  if (prevBtn) prevBtn.addEventListener('click', () => changeTestimonialSlide(-1));
  if (nextBtn) nextBtn.addEventListener('click', () => changeTestimonialSlide(1));

  // Auto slide
  startTestimonialAutoSlide();

  // Pause on hover
  const container = document.querySelector('.carousel-container');
  if (container) {
    container.addEventListener('mouseenter', () => clearInterval(state.testimonialTimer));
    container.addEventListener('mouseleave', () => startTestimonialAutoSlide());
  }
}

function startTestimonialAutoSlide() {
  clearInterval(state.testimonialTimer);
  state.testimonialTimer = setInterval(() => {
    changeTestimonialSlide(1);
  }, 5000);
}

function changeTestimonialSlide(delta) {
  const total = SALON_DATA.testimonials.length;
  let next = state.testimonialIndex + delta;
  if (next < 0) next = total - 1;
  if (next >= total) next = 0;
  goToTestimonialSlide(next);
}

function goToTestimonialSlide(idx) {
  state.testimonialIndex = idx;
  const track = document.getElementById('testimonialTrack');
  const dots = document.querySelectorAll('#carouselDots .dot');

  if (track) {
    track.style.transform = `translateX(-${idx * 100}%)`;
  }

  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === idx);
  });
}

// ==========================================================================
// 10. MULTI-STEP APPOINTMENT BOOKING WIZARD
// ==========================================================================
function initBookingWizard() {
  const modal = document.getElementById('bookingModal');
  const closeBtn = document.getElementById('bookingCloseBtn');
  const prevBtn = document.getElementById('wizardPrevBtn');
  const nextBtn = document.getElementById('wizardNextBtn');

  if (closeBtn) closeBtn.addEventListener('click', closeBookingModal);
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeBookingModal();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (state.activeBookingStep > 1 && state.activeBookingStep < 7) {
        goToBookingStep(state.activeBookingStep - 1);
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      handleWizardNext();
    });
  }

  // Populate services and stylists in modal
  populateBookingServicesList();
  populateBookingStylistsList();
  generateQuickDates();
  generateTimeSlots();

  // Setup Promo Code input listener
  const applyPromoBtn = document.getElementById('applyPromoBtn');
  if (applyPromoBtn) {
    applyPromoBtn.addEventListener('click', () => {
      const codeInput = document.getElementById('bookingPromoInput');
      if (codeInput) {
        applyDiscountCode(codeInput.value.trim());
      }
    });
  }
}

function openBookingModal() {
  const modal = document.getElementById('bookingModal');
  if (!modal) return;
  modal.classList.add('active');
  document.body.classList.add('modal-open');

  // If no date is selected yet, pick today by default
  if (!state.bookingForm.date) {
    const today = new Date();
    state.bookingForm.date = today.toISOString().split('T')[0];
  }
}

function closeBookingModal() {
  const modal = document.getElementById('bookingModal');
  if (!modal) return;
  modal.classList.remove('active');
  document.body.classList.remove('modal-open');
}

function openBookingWithService(serviceId) {
  openBookingModal();
  selectBookingService(serviceId);
  goToBookingStep(2); // advance to stylist step
}

function openBookingWithStylist(stylistId) {
  openBookingModal();
  selectBookingStylist(stylistId);
  goToBookingStep(1); // start at service step
}

function populateBookingServicesList() {
  const list = document.getElementById('bookingServicesList');
  if (!list) return;

  list.innerHTML = SALON_DATA.services.map(s => `
    <div class="service-select-card" id="select-srv-${s.id}" onclick="selectBookingService('${s.id}')">
      <div class="service-select-left">
        <h4>${s.name}</h4>
        <div class="service-select-meta">${s.duration} • ${s.genderLabel}</div>
      </div>
      <div class="service-select-price">₹${s.price.toLocaleString()}</div>
    </div>
  `).join('');
}

function selectBookingService(serviceId) {
  state.bookingForm.serviceId = serviceId;
  const cards = document.querySelectorAll('.service-select-card');
  cards.forEach(card => card.classList.remove('selected'));

  const chosenCard = document.getElementById(`select-srv-${serviceId}`);
  if (chosenCard) chosenCard.classList.add('selected');
}

function populateBookingStylistsList() {
  const grid = document.getElementById('bookingStylistsList');
  if (!grid) return;

  // Add "Any Available Master Stylist" option first
  let html = `
    <div class="stylist-select-card ${!state.bookingForm.stylistId ? 'selected' : ''}" id="select-sty-any" onclick="selectBookingStylist('any')">
      <div class="stylist-select-thumb" style="display:flex;align-items:center;justify-content:center;background:#232330;color:var(--gold-primary);">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
      </div>
      <div class="stylist-select-info">
        <h4>Any Available Master Stylist</h4>
        <div class="stylist-select-role">Fastest Availability</div>
        <div class="stylist-select-rating">✦ Top Rated Expert Assigned</div>
      </div>
    </div>
  `;

  html += SALON_DATA.stylists.map(sty => `
    <div class="stylist-select-card" id="select-sty-${sty.id}" onclick="selectBookingStylist('${sty.id}')">
      <div class="stylist-select-thumb">
        <img src="${sty.photo}" alt="${sty.name}">
      </div>
      <div class="stylist-select-info">
        <h4>${sty.name}</h4>
        <div class="stylist-select-role">${sty.role}</div>
        <div class="stylist-select-rating">★ ${sty.rating} • ${sty.experience}</div>
      </div>
    </div>
  `).join('');

  grid.innerHTML = html;
}

function selectBookingStylist(stylistId) {
  state.bookingForm.stylistId = stylistId;
  const cards = document.querySelectorAll('.stylist-select-card');
  cards.forEach(card => card.classList.remove('selected'));

  const chosenCard = document.getElementById(`select-sty-${stylistId}`);
  if (chosenCard) chosenCard.classList.add('selected');
}

function generateQuickDates() {
  const container = document.getElementById('quickDatesContainer');
  const customDateInput = document.getElementById('bookingCustomDate');
  if (!container) return;

  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
  let html = '';
  const today = new Date();

  // Set min attribute for custom calendar picker to prevent selecting past dates
  if (customDateInput) {
    customDateInput.min = today.toISOString().split('T')[0];
    customDateInput.value = today.toISOString().split('T')[0];
    customDateInput.addEventListener('change', (e) => {
      selectBookingDate(e.target.value);
    });
  }

  for (let i = 0; i < 4; i++) {
    const d = new Date();
    d.setDate(today.getDate() + i);
    const dateStr = d.toISOString().split('T')[0];
    const dayName = i === 0 ? 'Today' : i === 1 ? 'Tomorrow' : days[d.getDay()];
    const dayNum = d.getDate();
    const monthName = months[d.getMonth()];
    const isSelected = i === 0;

    if (isSelected && !state.bookingForm.date) {
      state.bookingForm.date = dateStr;
    }

    html += `
      <div class="date-pill ${isSelected ? 'selected' : ''}" id="date-pill-${dateStr}" onclick="selectBookingDate('${dateStr}')">
        <div class="date-day-name">${dayName}</div>
        <div class="date-number">${dayNum}</div>
        <div class="date-month-name">${monthName}</div>
      </div>
    `;
  }

  container.innerHTML = html;
}

function selectBookingDate(dateStr) {
  state.bookingForm.date = dateStr;
  const pills = document.querySelectorAll('.date-pill');
  pills.forEach(p => p.classList.remove('selected'));

  const activePill = document.getElementById(`date-pill-${dateStr}`);
  if (activePill) activePill.classList.add('selected');

  const customDateInput = document.getElementById('bookingCustomDate');
  if (customDateInput) customDateInput.value = dateStr;
}

function generateTimeSlots() {
  const morningContainer = document.getElementById('morningTimeSlots');
  const afternoonContainer = document.getElementById('afternoonTimeSlots');
  const eveningContainer = document.getElementById('eveningTimeSlots');

  const slots = {
    morning: ['10:00 AM', '10:45 AM', '11:30 AM'],
    afternoon: ['12:30 PM', '01:30 PM', '02:45 PM', '03:30 PM'],
    evening: ['04:45 PM', '05:30 PM', '06:30 PM', '07:15 PM']
  };

  function renderCategory(container, times) {
    if (!container) return;
    container.innerHTML = times.map(t => `
      <div class="time-slot-chip" id="time-${t.replace(/[\s:]/g, '')}" onclick="selectBookingTime('${t}')">
        ${t}
      </div>
    `).join('');
  }

  renderCategory(morningContainer, slots.morning);
  renderCategory(afternoonContainer, slots.afternoon);
  renderCategory(eveningContainer, slots.evening);
}

function selectBookingTime(timeStr) {
  state.bookingForm.time = timeStr;
  const chips = document.querySelectorAll('.time-slot-chip');
  chips.forEach(c => c.classList.remove('selected'));

  const activeChip = document.getElementById(`time-${timeStr.replace(/[\s:]/g, '')}`);
  if (activeChip) activeChip.classList.add('selected');
}

function applyDiscountCode(code, triggerToast = true) {
  if (!code) return;
  const upper = code.toUpperCase();
  let discount = 0;

  if (upper === 'ELEVE20' || upper === 'ELEVEFIRST') {
    discount = 20;
  } else if (upper === 'GLAM500') {
    discount = 15;
  } else {
    if (triggerToast) showToast('Invalid Promo Code', 'Please check the code or try ELEVE20.', 'warning');
    return;
  }

  state.bookingForm.discountPercent = discount;
  state.bookingForm.promoCode = upper;

  const promoInput = document.getElementById('bookingPromoInput');
  if (promoInput) promoInput.value = upper;

  const badge = document.getElementById('appliedPromoBadge');
  if (badge) {
    badge.textContent = `${discount}% Discount Applied!`;
    badge.style.display = 'block';
  }

  if (triggerToast) {
    showToast('Promo Applied!', `${discount}% discount has been added to your bill.`);
  }

  renderBookingSummary();
}

function goToBookingStep(step) {
  state.activeBookingStep = step;

  // Update step views
  for (let i = 1; i <= 7; i++) {
    const stepEl = document.getElementById(`wizardStep${i}`);
    if (stepEl) {
      stepEl.classList.toggle('active', i === step);
    }
  }

  // Update progress indicators
  const indicators = document.querySelectorAll('.step-indicator');
  indicators.forEach(ind => {
    const s = parseInt(ind.getAttribute('data-step'));
    ind.classList.toggle('active', s === step);
    ind.classList.toggle('completed', s < step);
  });

  // Footer button visibility
  const prevBtn = document.getElementById('wizardPrevBtn');
  const nextBtn = document.getElementById('wizardNextBtn');

  if (step === 7) {
    // Confirmation screen: hide regular footer buttons
    if (prevBtn) prevBtn.style.display = 'none';
    if (nextBtn) nextBtn.style.display = 'none';
  } else {
    if (prevBtn) {
      prevBtn.style.display = step > 1 ? 'inline-flex' : 'none';
    }
    if (nextBtn) {
      nextBtn.style.display = 'inline-flex';
      nextBtn.innerHTML = step === 6 
        ? `Confirm Appointment <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>` 
        : `Continue <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>`;
    }
  }

  // When reaching summary step, compile summary
  if (step === 6) {
    renderBookingSummary();
  }
}

function handleWizardNext() {
  const current = state.activeBookingStep;

  // Validation
  if (current === 1) {
    if (!state.bookingForm.serviceId) {
      showToast('Please Select a Service', 'Pick a luxury treatment to continue.', 'warning');
      return;
    }
    goToBookingStep(2);
  } else if (current === 2) {
    if (!state.bookingForm.stylistId) {
      state.bookingForm.stylistId = 'any';
    }
    goToBookingStep(3);
  } else if (current === 3) {
    if (!state.bookingForm.date) {
      showToast('Select a Date', 'Choose your preferred appointment day.', 'warning');
      return;
    }
    goToBookingStep(4);
  } else if (current === 4) {
    if (!state.bookingForm.time) {
      showToast('Select a Time Slot', 'Pick a time for your salon visit.', 'warning');
      return;
    }
    goToBookingStep(5);
  } else if (current === 5) {
    // Validate inputs
    const name = document.getElementById('clientName').value.trim();
    const phone = document.getElementById('clientPhone').value.trim();
    const email = document.getElementById('clientEmail').value.trim();
    const notes = document.getElementById('clientNotes').value.trim();

    if (!name || name.length < 2) {
      showToast('Invalid Name', 'Please provide your full name.', 'warning');
      document.getElementById('clientName').focus();
      return;
    }

    if (!phone || !/^[0-9+ ]{8,15}$/.test(phone)) {
      showToast('Invalid Phone Number', 'Please enter a valid 10-digit mobile number.', 'warning');
      document.getElementById('clientPhone').focus();
      return;
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showToast('Invalid Email', 'Please enter a valid email address for confirmation.', 'warning');
      document.getElementById('clientEmail').focus();
      return;
    }

    state.bookingForm.name = name;
    state.bookingForm.phone = phone;
    state.bookingForm.email = email;
    state.bookingForm.notes = notes;

    goToBookingStep(6);
  } else if (current === 6) {
    // Confirm Appointment!
    finalizeAppointment();
  }
}

function renderBookingSummary() {
  const srv = SALON_DATA.services.find(s => s.id === state.bookingForm.serviceId) || SALON_DATA.services[0];
  const sty = SALON_DATA.stylists.find(s => s.id === state.bookingForm.stylistId);
  const stylistName = sty ? sty.name : 'Any Available Master Stylist';

  const sumService = document.getElementById('summaryServiceName');
  const sumStylist = document.getElementById('summaryStylistName');
  const sumDate = document.getElementById('summaryDate');
  const sumTime = document.getElementById('summaryTime');
  const sumDuration = document.getElementById('summaryDuration');
  const sumClient = document.getElementById('summaryClient');
  
  const basePriceEl = document.getElementById('summaryBasePrice');
  const discountRowEl = document.getElementById('summaryDiscountRow');
  const discountValEl = document.getElementById('summaryDiscountVal');
  const finalPriceEl = document.getElementById('summaryFinalPrice');

  if (sumService) sumService.textContent = srv.name;
  if (sumStylist) sumStylist.textContent = stylistName;
  if (sumDate) sumDate.textContent = formatDateDisplay(state.bookingForm.date);
  if (sumTime) sumTime.textContent = state.bookingForm.time;
  if (sumDuration) sumDuration.textContent = srv.duration;
  if (sumClient) sumClient.textContent = `${state.bookingForm.name} (${state.bookingForm.phone})`;

  const basePrice = srv.price;
  const discountPercent = state.bookingForm.discountPercent || 0;
  const discountAmount = Math.round((basePrice * discountPercent) / 100);
  const finalPrice = basePrice - discountAmount;

  if (basePriceEl) basePriceEl.textContent = `₹${basePrice.toLocaleString()}`;
  if (discountRowEl) {
    if (discountAmount > 0) {
      discountRowEl.style.display = 'flex';
      if (discountValEl) discountValEl.textContent = `-₹${discountAmount.toLocaleString()} (${discountPercent}%)`;
    } else {
      discountRowEl.style.display = 'none';
    }
  }
  if (finalPriceEl) finalPriceEl.textContent = `₹${finalPrice.toLocaleString()}`;
}

function finalizeAppointment() {
  const srv = SALON_DATA.services.find(s => s.id === state.bookingForm.serviceId) || SALON_DATA.services[0];
  const sty = SALON_DATA.stylists.find(s => s.id === state.bookingForm.stylistId);
  const stylistName = sty ? sty.name : 'Any Available Master Stylist';

  const discountPercent = state.bookingForm.discountPercent || 0;
  const discountAmount = Math.round((srv.price * discountPercent) / 100);
  const finalPrice = srv.price - discountAmount;

  // Generate Reference ID: ELV-2026-XXXX
  const randomSuffix = Math.floor(1000 + Math.random() * 9000);
  const refCode = `ELV-2026-${randomSuffix}`;

  const newAppointment = {
    id: refCode,
    service: srv.name,
    duration: srv.duration,
    stylist: stylistName,
    date: state.bookingForm.date,
    time: state.bookingForm.time,
    clientName: state.bookingForm.name,
    clientPhone: state.bookingForm.phone,
    clientEmail: state.bookingForm.email,
    notes: state.bookingForm.notes,
    price: finalPrice,
    createdAt: new Date().toISOString()
  };

  // Add to state and save
  state.savedBookings.unshift(newAppointment);
  saveBookingsToStorage();

  // Populate confirmation view
  const refEl = document.getElementById('confirmationRefCode');
  const detailsEl = document.getElementById('confirmedAppointmentDetails');

  if (refEl) refEl.textContent = refCode;
  if (detailsEl) {
    detailsEl.innerHTML = `
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.75rem;font-size:0.85rem;">
        <div><strong style="color:var(--gold-champagne);">Service:</strong> ${srv.name}</div>
        <div><strong style="color:var(--gold-champagne);">Stylist:</strong> ${stylistName}</div>
        <div><strong style="color:var(--gold-champagne);">Date:</strong> ${formatDateDisplay(state.bookingForm.date)}</div>
        <div><strong style="color:var(--gold-champagne);">Time:</strong> ${state.bookingForm.time}</div>
        <div><strong style="color:var(--gold-champagne);">Client:</strong> ${state.bookingForm.name}</div>
        <div><strong style="color:var(--gold-champagne);">Total:</strong> ₹${finalPrice.toLocaleString()}</div>
      </div>
    `;
  }

  // Move to confirmation step
  goToBookingStep(7);
  showToast('Booking Confirmed!', `Reference ${refCode} has been saved.`);
}

function resetBookingWizard() {
  state.bookingForm = {
    serviceId: null,
    stylistId: null,
    date: null,
    time: null,
    name: '',
    phone: '',
    email: '',
    notes: '',
    promoCode: '',
    discountPercent: 0
  };

  // Reset inputs
  const inputs = ['clientName', 'clientPhone', 'clientEmail', 'clientNotes', 'bookingPromoInput'];
  inputs.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });

  const badge = document.getElementById('appliedPromoBadge');
  if (badge) badge.style.display = 'none';

  // Deselect chips
  document.querySelectorAll('.service-select-card').forEach(c => c.classList.remove('selected'));
  document.querySelectorAll('.stylist-select-card').forEach(c => c.classList.remove('selected'));
  document.querySelectorAll('.time-slot-chip').forEach(c => c.classList.remove('selected'));

  goToBookingStep(1);
}

function copyAppointmentRef() {
  const ref = document.getElementById('confirmationRefCode')?.textContent;
  if (ref) {
    navigator.clipboard.writeText(ref).then(() => {
      showToast('Copied to Clipboard!', `Appointment ID: ${ref}`);
    });
  }
}

function downloadCalendarEvent() {
  const srv = SALON_DATA.services.find(s => s.id === state.bookingForm.serviceId) || SALON_DATA.services[0];
  const dateStr = state.bookingForm.date || new Date().toISOString().split('T')[0];
  const timeStr = state.bookingForm.time || '11:00 AM';

  const cleanDate = dateStr.replace(/-/g, '');
  const title = encodeURIComponent(`ELÉVÉ Salon: ${srv.name}`);
  const details = encodeURIComponent(`Your luxury appointment at ELÉVÉ Unisex Salon.\nStylist: ${state.bookingForm.stylistId || 'Master Stylist'}\nAddress: 402 Luxury Boulevard, Bandra West, Mumbai.`);
  const location = encodeURIComponent('ELÉVÉ Unisex Salon, Bandra West, Mumbai');

  // Google Calendar URL generator
  const gcalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${cleanDate}T053000Z/${cleanDate}T073000Z&details=${details}&location=${location}`;
  window.open(gcalUrl, '_blank');
}

// ==========================================================================
// 11. "MY BOOKINGS" DRAWER
// ==========================================================================
function openMyBookingsDrawer() {
  const drawer = document.getElementById('myBookingsDrawer');
  const backdrop = document.getElementById('bookingsBackdrop');
  if (!drawer) return;

  renderSavedBookingsList();
  drawer.style.display = 'flex';
  if (backdrop) backdrop.style.display = 'block';
  drawer.removeAttribute('aria-hidden');
  requestAnimationFrame(() => {
    drawer.classList.add('open');
    if (backdrop) backdrop.classList.add('open');
    document.body.classList.add('modal-open');
  });
}

function closeMyBookingsDrawer() {
  const drawer = document.getElementById('myBookingsDrawer');
  const backdrop = document.getElementById('bookingsBackdrop');
  if (drawer) {
    drawer.classList.remove('open');
    drawer.setAttribute('aria-hidden', 'true');
  }
  if (backdrop) backdrop.classList.remove('open');
  document.body.classList.remove('modal-open');
  setTimeout(() => {
    if (drawer && !drawer.classList.contains('open')) {
      drawer.style.display = 'none';
    }
    if (backdrop && !backdrop.classList.contains('open')) {
      backdrop.style.display = 'none';
    }
  }, 350);
}

function renderSavedBookingsList() {
  const container = document.getElementById('savedBookingsList');
  if (!container) return;

  if (state.savedBookings.length === 0) {
    container.innerHTML = `
      <div style="text-align:center;padding:3rem 1rem;color:var(--text-muted);">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="margin-bottom:1rem;color:var(--gold-primary);opacity:0.6;"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
        <h4 style="color:var(--text-primary);margin-bottom:0.4rem;font-family:var(--font-serif);font-size:1.3rem;">No Bookings Yet</h4>
        <p style="font-size:0.85rem;margin-bottom:1.5rem;">Your confirmed appointments will appear here.</p>
        <button class="btn btn-primary btn-sm" onclick="closeMyBookingsDrawer(); openBookingModal();">Book An Appointment</button>
      </div>
    `;
    return;
  }

  container.innerHTML = state.savedBookings.map(b => `
    <div class="saved-booking-item confirmed" id="saved-${b.id}">
      <span class="booking-status-tag">Confirmed</span>
      <div style="display:flex;justify-content:space-between;align-items:flex-start;">
        <div>
          <h4 style="font-size:1.1rem;color:var(--text-primary);font-family:var(--font-serif);">${b.service}</h4>
          <div style="font-size:0.75rem;color:var(--gold-champagne);">${b.stylist}</div>
        </div>
        <div style="font-family:var(--font-serif);font-size:1.2rem;font-weight:700;color:var(--gold-light);">₹${b.price.toLocaleString()}</div>
      </div>
      <div style="font-size:0.8rem;color:var(--text-secondary);display:flex;gap:1rem;margin-top:0.4rem;">
        <span>📅 ${formatDateDisplay(b.date)}</span>
        <span>⏰ ${b.time}</span>
      </div>
      <div style="font-size:0.72rem;color:var(--text-muted);font-family:monospace;">Ref: ${b.id}</div>
      <button class="booking-cancel-btn" onclick="cancelSavedBooking('${b.id}')">Cancel Appointment</button>
    </div>
  `).join('');
}

function cancelSavedBooking(refId) {
  if (confirm(`Are you sure you want to cancel appointment ${refId}?`)) {
    state.savedBookings = state.savedBookings.filter(b => b.id !== refId);
    saveBookingsToStorage();
    renderSavedBookingsList();
    showToast('Appointment Cancelled', `Reference ${refId} has been removed.`);
  }
}

// ==========================================================================
// 12. FAQ ACCORDION
// ==========================================================================
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    if (question && answer) {
      question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Close all
        faqItems.forEach(other => {
          other.classList.remove('active');
          const otherAnswer = other.querySelector('.faq-answer');
          if (otherAnswer) otherAnswer.style.maxHeight = null;
          const otherBtn = other.querySelector('.faq-question');
          if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
        });

        if (!isActive) {
          item.classList.add('active');
          answer.style.maxHeight = answer.scrollHeight + 'px';
          question.setAttribute('aria-expanded', 'true');
        }
      });
    }
  });
}

// ==========================================================================
// 13. INQUIRY / CONTACT FORM
// ==========================================================================
function initContactForm() {
  const form = document.getElementById('salonInquiryForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('inquiryName')?.value.trim();
    const phone = document.getElementById('inquiryPhone')?.value.trim();
    const message = document.getElementById('inquiryMessage')?.value.trim();

    if (!name || !phone || !message) {
      showToast('Missing Fields', 'Please complete all required fields.', 'warning');
      return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = `Sending...`;
    submitBtn.disabled = true;

    setTimeout(() => {
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
      form.reset();
      showToast('Inquiry Received!', 'Our concierge will call you back within 2 business hours.');
    }, 900);
  });
}

// ==========================================================================
// 14. TOAST NOTIFICATION SYSTEM
// ==========================================================================
function showToast(title, msg, type = 'success') {
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';

  const iconSvg = type === 'warning'
    ? `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`
    : `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--gold-champagne)" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 14 14"></polyline></svg>`;

  toast.innerHTML = `
    <div class="toast-icon">${iconSvg}</div>
    <div class="toast-body">
      <div class="toast-title">${title}</div>
      <div class="toast-msg">${msg}</div>
    </div>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('removing');
    setTimeout(() => toast.remove(), 350);
  }, 4200);
}

// ==========================================================================
// 15. BACK TO TOP BUTTON
// ==========================================================================
function initBackToTop() {
  const btn = document.getElementById('backToTopBtn');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ==========================================================================
// 16. UTILITY HELPERS
// ==========================================================================
function formatDateDisplay(dateStr) {
  if (!dateStr) return 'Selected Date';
  const parts = dateStr.split('-');
  if (parts.length !== 3) return dateStr;
  const d = new Date(parts[0], parts[1] - 1, parts[2]);
  return d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' });
}

// Global exposure for inline onclick handlers
window.openBookingModal = openBookingModal;
window.closeBookingModal = closeBookingModal;
window.openBookingWithService = openBookingWithService;
window.openBookingWithStylist = openBookingWithStylist;
window.selectBookingService = selectBookingService;
window.selectBookingStylist = selectBookingStylist;
window.selectBookingDate = selectBookingDate;
window.selectBookingTime = selectBookingTime;
window.goToBookingStep = goToBookingStep;
window.resetBookingWizard = resetBookingWizard;
window.claimOffer = claimOffer;
window.openLightbox = openLightbox;
window.closeLightbox = closeLightbox;
window.changeLightboxImage = changeLightboxImage;
window.goToTestimonialSlide = goToTestimonialSlide;
window.changeTestimonialSlide = changeTestimonialSlide;
window.openMyBookingsDrawer = openMyBookingsDrawer;
window.closeMyBookingsDrawer = closeMyBookingsDrawer;
window.cancelSavedBooking = cancelSavedBooking;
window.copyAppointmentRef = copyAppointmentRef;
window.downloadCalendarEvent = downloadCalendarEvent;
