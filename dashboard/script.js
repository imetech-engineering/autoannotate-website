document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    // ──────────── SCROLL PROGRESS BAR ────────────
    const scrollProgress = document.getElementById('scroll-progress');
    if (scrollProgress) {
        function updateScrollProgress() {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            scrollProgress.style.width = docHeight > 0 ? (scrollTop / docHeight) * 100 + '%' : '0%';
        }
        window.addEventListener('scroll', updateScrollProgress, { passive: true });
        updateScrollProgress();
    }

    // ──────────── NAVBAR SCROLL EFFECT ────────────
    const navbar = document.getElementById('navbar');
    if (navbar) {
        function updateNavbar() {
            navbar.classList.toggle('scrolled', window.scrollY > 50);
        }
        window.addEventListener('scroll', updateNavbar, { passive: true });
        updateNavbar();
    }

    // ──────────── HAMBURGER MENU ────────────
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('open');
        });
        navLinks.querySelectorAll('a').forEach(el => {
            el.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('open');
            });
        });
    }

    // ──────────── GSAP ANIMATIONS ────────────
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
        const revealEase = 'power1.out';
        const revealStart = 'top 85%';

        gsap.utils.toArray('.reveal').forEach(el => {
            gsap.to(el, { opacity: 1, y: 0, duration: 1, ease: revealEase, scrollTrigger: { trigger: el, start: revealStart, once: true }, delay: parseFloat(el.dataset.delay || 0) });
        });
        gsap.utils.toArray('.reveal-left').forEach(el => {
            gsap.to(el, { opacity: 1, x: 0, duration: 1, ease: revealEase, scrollTrigger: { trigger: el, start: revealStart, once: true } });
        });
        gsap.utils.toArray('.reveal-right').forEach(el => {
            gsap.to(el, { opacity: 1, x: 0, duration: 1, ease: revealEase, scrollTrigger: { trigger: el, start: revealStart, once: true } });
        });
        gsap.utils.toArray('.reveal-scale').forEach(el => {
            gsap.to(el, { opacity: 1, scale: 1, duration: 1.2, ease: revealEase, scrollTrigger: { trigger: el, start: revealStart, once: true } });
        });
        gsap.utils.toArray('.pain-point').forEach((el, i) => {
            gsap.to(el, { opacity: 1, x: 0, duration: 0.8, ease: revealEase, delay: i * 0.15, scrollTrigger: { trigger: el.closest('.probleem-points'), start: revealStart, once: true } });
        });
    }

    // ──────────── COUNTER ANIMATION ────────────
    function animateCounter(el) {
        const target = parseInt(el.dataset.target, 10);
        const suffix = el.dataset.suffix || '';
        const duration = 2000;
        const startTime = performance.now();
        function update(currentTime) {
            const progress = Math.min((currentTime - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = Math.round(eased * target) + suffix;
            if (progress < 1) requestAnimationFrame(update);
        }
        requestAnimationFrame(update);
    }
    const counterObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => { if (entry.isIntersecting) { animateCounter(entry.target); counterObserver.unobserve(entry.target); } });
    }, { threshold: 0.5 });
    document.querySelectorAll('.metric-value').forEach(el => {
        if (el.dataset.target) counterObserver.observe(el);
    });

    // ──────────── SMOOTH SCROLL + CTA HIGHLIGHT ────────────
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetEl = document.querySelector(targetId);
            if (targetEl) {
                e.preventDefault();
                const offset = (navbar && navbar.offsetHeight) ? navbar.offsetHeight : 80;
                const targetPos = targetEl.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top: targetPos, behavior: 'smooth' });
                if (targetId === '#contact' || targetId === '#contact-form-wrap') {
                    const cf = document.querySelector('.contact-form');
                    if (cf) {
                        setTimeout(() => {
                            cf.classList.remove('highlight');
                            void cf.offsetWidth; // trigger reflow
                            cf.classList.add('highlight');
                            const firstInput = cf.querySelector('input');
                            if (firstInput) firstInput.focus();
                            setTimeout(() => cf.classList.remove('highlight'), 2000);
                        }, 500);
                    }
                }
            }
        });
    });
});
