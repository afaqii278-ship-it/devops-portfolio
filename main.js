/* ============================================
   AWS CLOUD ENGINEER PORTFOLIO — MAIN JS
   ============================================ */

// ── CANVAS PARTICLE BACKGROUND ──
(function initCanvas() {
  const canvas = document.getElementById('bgCanvas');
  const ctx = canvas.getContext('2d');
  let W, H, particles = [], connections = [];
  const PARTICLE_COUNT = 100;

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  class Particle {
    constructor() { this.reset(); }
    reset() {
      this.x  = Math.random() * W;
      this.y  = Math.random() * H;
      this.vx = (Math.random() - 0.5) * 0.4;
      this.vy = (Math.random() - 0.5) * 0.4;
      this.r  = Math.random() * 2 + 0.5;
      this.alpha = Math.random() * 0.5 + 0.2;
      this.color = Math.random() > 0.7 ? '#ff9900' : '#00d4ff';
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.x < 0 || this.x > W) this.vx *= -1;
      if (this.y < 0 || this.y > H) this.vy *= -1;
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.globalAlpha = this.alpha;
      ctx.fill();
      ctx.globalAlpha = 1;
    }
  }

  for (let i = 0; i < PARTICLE_COUNT; i++) particles.push(new Particle());

  function drawConnections() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(0,212,255,${0.12 * (1 - dist / 120)})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    }
  }

  function loop() {
    ctx.clearRect(0, 0, W, H);
    // Dark gradient background
    const grad = ctx.createRadialGradient(W/2, H/2, 0, W/2, H/2, Math.max(W,H)/1.5);
    grad.addColorStop(0, 'rgba(10,20,50,0.8)');
    grad.addColorStop(1, 'rgba(5,11,24,0.98)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, W, H);

    drawConnections();
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(loop);
  }
  loop();
})();


// ── NAVBAR SCROLL ──
(function initNavbar() {
  const navbar = document.getElementById('navbar');
  const links  = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');

    // Active link highlight
    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
    });
    links.forEach(l => {
      l.classList.remove('active');
      if (l.getAttribute('href') === `#${current}`) l.classList.add('active');
    });
  });

  // Hamburger
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    const open = navLinks.classList.contains('open');
    hamburger.children[0].style.transform = open ? 'rotate(45deg) translate(5px, 5px)' : '';
    hamburger.children[1].style.opacity   = open ? '0' : '1';
    hamburger.children[2].style.transform = open ? 'rotate(-45deg) translate(5px,-5px)' : '';
  });

  // Close menu on link click
  document.querySelectorAll('.nav-link').forEach(l =>
    l.addEventListener('click', () => navLinks.classList.remove('open'))
  );
})();


// ── TYPING EFFECT ──
(function initTyping() {
  const el = document.getElementById('typedText');
  const words = [
    'AWS Cloud Engineer',
    'DevOps Specialist',
    'Terraform Expert',
    'Kubernetes Admin',
    'Cloud Architect',
    'Infrastructure Guru'
  ];
  let wi = 0, ci = 0, deleting = false;

  function type() {
    const word = words[wi];
    if (!deleting) {
      el.textContent = word.slice(0, ++ci);
      if (ci === word.length) { deleting = true; setTimeout(type, 1800); return; }
    } else {
      el.textContent = word.slice(0, --ci);
      if (ci === 0) { deleting = false; wi = (wi + 1) % words.length; }
    }
    setTimeout(type, deleting ? 60 : 90);
  }
  type();
})();


// ── 3D MOUSE PARALLAX ──
(function init3D() {
  const wrapper = document.getElementById('profile3d');
  const card    = wrapper ? wrapper.querySelector('.profile-card') : null;
  if (!wrapper || !card) return;

  wrapper.addEventListener('mousemove', (e) => {
    const rect = wrapper.getBoundingClientRect();
    const cx   = rect.left + rect.width  / 2;
    const cy   = rect.top  + rect.height / 2;
    const rx   = ((e.clientY - cy) / rect.height) * 20;
    const ry   = ((e.clientX - cx) / rect.width)  * -20;
    card.style.animation = 'none';
    card.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) scale(1.04)`;
  });

  wrapper.addEventListener('mouseleave', () => {
    card.style.animation = '';
    card.style.transform = '';
  });
})();


// ── SCROLL ANIMATIONS (AOS-like) ──
(function initAOS() {
  const targets = document.querySelectorAll('[data-aos]');
  const delays  = { '100': 100, '200': 200, '300': 300, '400': 400, '500': 500, '600': 600 };

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = entry.target.getAttribute('data-aos-delay') || 0;
        setTimeout(() => entry.target.classList.add('aos-animate'), parseInt(delay));
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  targets.forEach(t => obs.observe(t));
})();


// ── SKILL BAR ANIMATION ──
(function initSkillBars() {
  const bars = document.querySelectorAll('.skill-bar-fill');
  const obs  = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const w = entry.target.getAttribute('data-width');
        entry.target.style.width = w + '%';
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  bars.forEach(b => obs.observe(b));
})();


// ── CONTACT FORM (Formspree) ──
(function initForm() {
  const form    = document.getElementById('contactForm');
  const btn     = document.getElementById('submitBtn');
  const success = document.getElementById('formSuccess');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const action = form.action;

    // Show loading state
    btn.querySelector('.btn-text').style.display = 'none';
    btn.querySelector('.btn-loading').style.display = 'inline-flex';
    btn.disabled = true;

    try {
      const data = new FormData(form);
      const res  = await fetch(action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      if (res.ok) {
        form.reset();
        btn.style.display = 'none';
        success.style.display = 'block';
      } else {
        alert('Oops! Something went wrong. Please email me directly.');
        btn.disabled = false;
        btn.querySelector('.btn-text').style.display = 'inline-flex';
        btn.querySelector('.btn-loading').style.display = 'none';
      }
    } catch {
      alert('Network error. Please try again or email me directly.');
      btn.disabled = false;
      btn.querySelector('.btn-text').style.display = 'inline-flex';
      btn.querySelector('.btn-loading').style.display = 'none';
    }
  });
})();


// ── BACK TO TOP ──
(function initBackToTop() {
  const btn = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) btn.classList.add('visible');
    else btn.classList.remove('visible');
  });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
})();


// ── COUNTER ANIMATION ──
(function initCounters() {
  const counters = document.querySelectorAll('.stat-num');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el  = entry.target;
      const raw = el.textContent.replace(/\D/g, '');
      if (!raw) return;
      const end    = parseInt(raw);
      const suffix = el.textContent.replace(/\d/g, '');
      let current  = 0;
      const step   = Math.ceil(end / 40);
      const timer  = setInterval(() => {
        current += step;
        if (current >= end) { current = end; clearInterval(timer); }
        el.textContent = current + suffix;
      }, 40);
      obs.unobserve(el);
    });
  }, { threshold: 0.5 });
  counters.forEach(c => obs.observe(c));
})();


// ── SMOOTH ICON LOAD FALLBACK ──
document.querySelectorAll('.floating-icon img, .tech-card img').forEach(img => {
  img.addEventListener('error', function () {
    // If SVG icon fails to load, replace with a styled text fallback
    const name = this.alt || 'Tool';
    const abbr = name.slice(0, 2).toUpperCase();
    const span = document.createElement('span');
    span.textContent = abbr;
    span.style.cssText = 'font-weight:800;font-size:0.75rem;color:#00d4ff;';
    this.parentNode.replaceChild(span, this);
  });
});


// ── PAGE LOAD ANIMATION ──
window.addEventListener('load', () => {
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.5s ease';
  setTimeout(() => { document.body.style.opacity = '1'; }, 100);
});
