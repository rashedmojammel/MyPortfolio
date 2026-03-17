/* ── LOADER ── */
window.addEventListener('load', () => {
  setTimeout(() => {
    const loader = document.getElementById('loader');
    if (loader) loader.classList.add('hidden');
  }, 1900);
});

/* ── THEME TOGGLE ── */
const themeBtn = document.getElementById('theme-toggle');
const themeIcon = themeBtn ? themeBtn.querySelector('i') : null;

// Load saved preference
if (localStorage.getItem('theme') === 'light') {
  document.body.classList.add('light-mode');
  if (themeIcon) { themeIcon.classList.remove('fa-sun'); themeIcon.classList.add('fa-moon'); }
}

if (themeBtn) {
  themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    const isLight = document.body.classList.contains('light-mode');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    if (themeIcon) {
      themeIcon.classList.toggle('fa-sun', !isLight);
      themeIcon.classList.toggle('fa-moon', isLight);
    }
  });
}


/* ── SCROLL PROGRESS BAR ── */
const progressBar = document.createElement('div');
progressBar.id = 'scroll-progress';
document.body.prepend(progressBar);
window.addEventListener('scroll', () => {
  const pct = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
  progressBar.style.width = pct + '%';
}, { passive: true });

/* ── CUSTOM CURSOR ── */
const cursorDot  = document.createElement('div');
const cursorRing = document.createElement('div');
cursorDot.className = 'cursor-dot';
cursorRing.className = 'cursor-ring';
document.body.appendChild(cursorDot);
document.body.appendChild(cursorRing);
let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0;
document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX; mouseY = e.clientY;
  cursorDot.style.left = mouseX + 'px'; cursorDot.style.top = mouseY + 'px';
});
(function animateCursor() {
  ringX += (mouseX - ringX) * 0.12; ringY += (mouseY - ringY) * 0.12;
  cursorRing.style.left = ringX + 'px'; cursorRing.style.top = ringY + 'px';
  requestAnimationFrame(animateCursor);
})();
document.querySelectorAll('a, button, .p-card, .tab-btn').forEach(el => {
  el.addEventListener('mouseenter', () => { cursorDot.classList.add('hover'); cursorRing.classList.add('hover'); });
  el.addEventListener('mouseleave', () => { cursorDot.classList.remove('hover'); cursorRing.classList.remove('hover'); });
});

/* ── BACK TO TOP ── */
const backToTop = document.createElement('button');
backToTop.id = 'back-to-top';
backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
document.body.appendChild(backToTop);
window.addEventListener('scroll', () => {
  backToTop.classList.toggle('visible', window.scrollY > 500);
}, { passive: true });
backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

/* ── PARTICLES ── */
const homeSection = document.querySelector('.home');
if (homeSection) {
  const canvas = document.createElement('canvas');
  canvas.id = 'particle-canvas';
  homeSection.prepend(canvas);
  const ctx = canvas.getContext('2d');
  let W, H, particles;
  function resize() { W = canvas.width = homeSection.offsetWidth; H = canvas.height = homeSection.offsetHeight; }
  function Particle() {
    this.reset = () => {
      this.x = Math.random()*W; this.y = Math.random()*H;
      this.size = Math.random()*1.5+0.3;
      this.speedX = (Math.random()-0.5)*0.3; this.speedY = (Math.random()-0.5)*0.3;
      this.opacity = Math.random()*0.5+0.1;
    }; this.reset();
  }
  function draw() {
    ctx.clearRect(0,0,W,H);
    particles.forEach(p => {
      ctx.beginPath(); ctx.arc(p.x,p.y,p.size,0,Math.PI*2);
      ctx.fillStyle = `rgba(201,168,76,${p.opacity})`; ctx.fill();
      p.x += p.speedX; p.y += p.speedY;
      if (p.x<0||p.x>W||p.y<0||p.y>H) p.reset();
    });
    requestAnimationFrame(draw);
  }
  resize();
  particles = Array.from({length: Math.floor((W*H)/12000)}, () => new Particle());
  draw();
  window.addEventListener('resize', () => { resize(); particles = Array.from({length: Math.floor((W*H)/12000)}, () => new Particle()); });
}

/* ── TYPING EFFECT ── */
const roleEl = document.querySelector('.home-role');
if (roleEl) {
  const roles = ['Software Engineer','Full-Stack Developer','Problem Solver'];
  let rI = 0, cI = 0, deleting = false;
  function type() {
    const cur = roles[rI];
    roleEl.innerHTML = cur.slice(0, deleting ? --cI : ++cI) + '<span class="type-cursor">|</span>';
    if (!deleting && cI === cur.length) { deleting = true; return setTimeout(type, 2200); }
    if (deleting && cI === 0) { deleting = false; rI = (rI+1) % roles.length; return setTimeout(type, 400); }
    setTimeout(type, deleting ? 38 : 75);
  }
  setTimeout(type, 1000);
}

/* ── GLITCH ON NAME HOVER ── */
const homeName = document.querySelector('.home-name');
if (homeName) {
  homeName.addEventListener('mouseenter', () => {
    homeName.classList.add('glitch');
    setTimeout(() => homeName.classList.remove('glitch'), 700);
  });
}

/* ── SKILL CARD SHIMMER ── */
document.querySelectorAll('.skill-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const r = card.getBoundingClientRect();
    card.style.setProperty('--shimmer-x', ((e.clientX-r.left)/r.width*100)+'%');
    card.style.setProperty('--shimmer-y', ((e.clientY-r.top)/r.height*100)+'%');
  });
});

/* ── 3D TILT ON PROJECT CARDS ── */
document.querySelectorAll('.p-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const r = card.getBoundingClientRect();
    const dx = (e.clientX - r.left - r.width/2) / (r.width/2);
    const dy = (e.clientY - r.top - r.height/2) / (r.height/2);
    card.style.transform = `perspective(900px) rotateX(${dy*-8}deg) rotateY(${dx*8}deg) translateY(-6px)`;
    card.style.transition = 'transform 0.1s ease';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
    card.style.transition = 'transform 0.5s ease';
  });
});
/* ═══════════════════════════════════════════════════
   NUMAN PORTFOLIO — MAIN JAVASCRIPT
═══════════════════════════════════════════════════ */

/* ── YouTube embed URLs ─────────────────────────── */
const VIDEO_SRCS = {
  m1: 'https://www.youtube.com/embed/xPAio-kAbhk',
  m2: 'https://www.youtube.com/embed/QSno4rXUnew',
  m3: 'https://www.youtube.com/embed/7y2ioy4NYc8',
  m4: 'https://www.youtube.com/embed/8eoZIrefc58',
  m5: 'https://www.youtube.com/embed/ubyMm3Xg8Ek',
};


/* ══════════════════════════════════════════════════
   1. MOBILE NAV TOGGLE
══════════════════════════════════════════════════ */
const menuToggle = document.getElementById('menu-toggle');
const navlist    = document.getElementById('navlist');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('open');
  navlist.classList.toggle('open');
});

// Close nav when a link is clicked
navlist.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    menuToggle.classList.remove('open');
    navlist.classList.remove('open');
  });
});


/* ══════════════════════════════════════════════════
   2. ACTIVE NAV LINK ON SCROLL
══════════════════════════════════════════════════ */
const sections = document.querySelectorAll('section[id], div[id]');
const navLinks = document.querySelectorAll('.navlist a');

function setActiveNav() {
  const scrollY = window.scrollY + 100;

  sections.forEach(section => {
    const top    = section.offsetTop;
    const height = section.offsetHeight;
    const id     = section.getAttribute('id');

    if (scrollY >= top && scrollY < top + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

window.addEventListener('scroll', setActiveNav, { passive: true });


/* ══════════════════════════════════════════════════
   3. STICKY HEADER SHADOW ON SCROLL
══════════════════════════════════════════════════ */
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    header.style.boxShadow = '0 4px 30px rgba(0,0,0,0.4)';
  } else {
    header.style.boxShadow = 'none';
  }
}, { passive: true });


/* ══════════════════════════════════════════════════
   4. SCROLL REVEAL
══════════════════════════════════════════════════ */
const revealEls = document.querySelectorAll('[data-reveal]');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    const el    = entry.target;
    const delay = parseInt(el.dataset.delay || 0);

    setTimeout(() => {
      el.classList.add('revealed');
    }, delay);

    revealObserver.unobserve(el);
  });
}, { threshold: 0.12 });

revealEls.forEach(el => revealObserver.observe(el));


/* ══════════════════════════════════════════════════
   5. ABOUT TABS
══════════════════════════════════════════════════ */
const tabBtns   = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.tab;

    // Update buttons
    tabBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // Update panels
    tabPanels.forEach(panel => {
      panel.classList.remove('active');
      if (panel.id === `tab-${target}`) {
        panel.classList.add('active');
      }
    });
  });
});


/* ══════════════════════════════════════════════════
   6. MODALS
══════════════════════════════════════════════════ */

/**
 * Open a modal by ID and start the YouTube video.
 * @param {string} id - Modal element ID
 */
function openModal(id) {
  const modal  = document.getElementById(id);
  const iframe = document.getElementById(`${id}-iframe`);

  if (!modal || !iframe) return;

  iframe.src = VIDEO_SRCS[id] + '?autoplay=1&rel=0';
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';

  // Focus trap — close button
  const closeBtn = modal.querySelector('.modal-close');
  if (closeBtn) setTimeout(() => closeBtn.focus(), 350);
}

/**
 * Close a modal by ID and stop the video.
 * @param {string} id - Modal element ID
 */
function closeModal(id) {
  const modal  = document.getElementById(id);
  const iframe = document.getElementById(`${id}-iframe`);

  if (!modal) return;

  modal.classList.remove('open');
  document.body.style.overflow = '';

  // Stop video by clearing src after transition ends
  setTimeout(() => {
    if (iframe) iframe.src = '';
  }, 350);
}

// Close modal when clicking the backdrop
document.querySelectorAll('.modal').forEach(modal => {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal(modal.id);
    }
  });
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal.open').forEach(m => closeModal(m.id));
  }
});

// Expose to global scope for inline onclick
window.openModal  = openModal;
window.closeModal = closeModal;


/* ══════════════════════════════════════════════════
   7. CONTACT FORM
══════════════════════════════════════════════════ */
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxEXJGDZyyWXR1_t115J7sfhWlM5wVBbm3mTSapTxhvsB_0fJPhaU53lrlx8JX8brHH/exec';

const contactForm = document.getElementById('contact-form');
const formMsg     = document.getElementById('form-msg');
const btnText     = document.getElementById('btn-text');

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    btnText.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending…';

    try {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        body: new FormData(contactForm),
        mode: 'no-cors',
      });

      formMsg.textContent = '✓ Message sent! I\'ll get back to you soon.';
      formMsg.style.color = 'var(--gold)';
      contactForm.reset();
    } catch (err) {
      formMsg.textContent = '✗ Something went wrong. Please try again.';
      formMsg.style.color = '#e06c6c';
      console.error('Form error:', err);
    } finally {
      btnText.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
      setTimeout(() => { formMsg.textContent = ''; }, 6000);
    }
  });
}

// UPDATE the pdf paths to your actual files!
const EDU_DATA = {
  edu1: {
    title:  'B.Sc. in Computer Science & Engineering',
    sub:    'American International University-Bangladesh (AIUB)',
    icon:   'fas fa-graduation-cap',
    year:   '2023 – Present',
    type: 'image' ,
    pdf:    './img/AIUB_Certificate.jpg'       // ← update path
  },
  edu2: {
    title:  'Higher Secondary Certificate (HSC)',
    sub:    'Hathazari Govt. College',
    icon:   'fas fa-university',
    year:   '2021',
    type: 'image' ,
    pdf:    './img/Hsc_certificate.jpg'        // ← update path
  },
  edu3: {
    title:  'Secondary School Certificate (SSC)',
    sub:    'Wadudia High School',
    icon:   'fas fa-school',
    year:   '2019',
    type: 'image' ,
    pdf:    './img/Ssc_certifcate.jpg'        // ← update path
  },
  edu4: {
    title:  'Junior School Certificate (JSC)',
    sub:    'Wadudia High School',
    icon:   'fas fa-school',
    year:   '2016',
    type: 'image' ,
    pdf:    './img/Jsc_certificate.jpg'        // ← update path
  }
};

function openEduModal(id) {
  const data = EDU_DATA[id];
  if (!data) return;

  document.getElementById('eduModalTitle').textContent = data.title;
  document.getElementById('eduModalSub').textContent   = data.sub;
  document.getElementById('eduModalYear').textContent  = data.year;
  document.getElementById('eduModalIcon').innerHTML    = `<i class="${data.icon}"></i>`;

  const img    = document.getElementById('eduModalImg');
  const iframe = document.getElementById('eduModalIframe');

  if (data.type === 'image') {
    img.src = data.file || data.pdf;
    img.style.display = 'block';
    iframe.src = '';
    iframe.style.display = 'none';
  } else {
    iframe.src = data.file || data.pdf;
    iframe.style.display = 'block';
    img.src = '';
    img.style.display = 'none';
  }

  document.getElementById('eduDownloadBtn').href = data.file || data.pdf;
  document.getElementById('eduOpenBtn').href     = data.file || data.pdf;

  document.getElementById('eduModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeEduModal() {
  document.getElementById('eduModal').classList.remove('open');
  document.body.style.overflow = '';
  setTimeout(() => {
    document.getElementById('eduModalIframe').src = '';
  }, 350);
}

function closeEduModalOutside(e) {
  if (e.target === document.getElementById('eduModal')) closeEduModal();
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeEduModal();
  
});
/* ── HOME IMAGE SLIDER ── */
(function () {
  const frames = document.querySelectorAll('.home-img-slider .home-img-frame');
  const dots   = document.querySelectorAll('.home-img-dot');
  let current  = 0;
  let timer;

  function goTo(index) {
    frames[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = (index + frames.length) % frames.length;
    frames[current].classList.add('active');
    dots[current].classList.add('active');
  }

  function next() { goTo(current + 1); }

  function startTimer() { timer = setInterval(next, 3500); }
  function resetTimer()  { clearInterval(timer); startTimer(); }

  // Dot click
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => { goTo(i); resetTimer(); });
  });

  startTimer();
})();
/* ── Door Loader ── */
(function () {
  const loader = document.getElementById('loader');
  const bloom  = document.getElementById('loader-bloom');
  if (!loader) return;

  // After progress fills (~1.8s), swing doors open
  setTimeout(() => {
    loader.classList.add('open');

    // Brief gold bloom flash
    if (bloom) {
      setTimeout(() => bloom.style.opacity = '0', 400);
    }

    // Hide loader completely after doors finish swinging
    setTimeout(() => {
      loader.classList.add('hidden');
    }, 1700);

  }, 1800);
})();
