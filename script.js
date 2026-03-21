/* ========================================
   AutoAnnotate – Main JavaScript
   Scroll, Nav, GSAP, Counters, Slider, Form
   (i18n: form messages use AA_I18N.t)
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    function tr(key) {
        return window.AA_I18N ? AA_I18N.t(AA_I18N.currentLang(), key) : key;
    }

    // ──────────── TRUST MARQUEE (partner logos) ────────────
    const trustTrack = document.getElementById('trust-marquee-track');
    if (trustTrack) {
        const partners = [
            { name: 'TZA', logo: '/images/TZA.png', alt: 'TZA' },
            { name: 'Buddy Zorg', logo: '/images/buddy_zorg.png', alt: 'Buddy Zorg' },
            { name: 'R2R Engineering', logo: '/images/R2R.png', alt: 'R2R Engineering' },
            { name: 'Photoboothhuren.com', logo: '/images/photoboothhuren.com.webp', alt: 'Photoboothhuren.com' },
            { name: 'Mijzo', logo: '/images/Mijzo.png', alt: 'Mijzo' },
            { name: 'Vilans', logo: '/images/Vilans.webp', alt: 'Vilans' },
            { name: 'Ekas Verduurzaming', logo: '/images/ekas_verduurzaming.png', alt: 'Ekas Verduurzaming' },
            { name: 'SmartRobot Solutions', logo: '/images/smartrobot.solutions.png', alt: 'SmartRobot Solutions' },
            { name: 'Avoord', logo: '/images/Avoord.webp', alt: 'Avoord' }
        ];
        /* Vaste volgorde (geen shuffle): voorkomt verschillende marquee-lengte/perceptie na F5 */
        const ordered = partners.slice().sort((a, b) => a.name.localeCompare(b.name, 'nl'));
        function createLogoEl(p) {
            const div = document.createElement('div');
            div.className = 'trust-logo-link';
            div.setAttribute('aria-hidden', 'true');
            const img = document.createElement('img');
            img.src = p.logo;
            img.alt = p.alt;
            img.loading = 'eager';
            div.appendChild(img);
            return div;
        }
        ordered.forEach(p => trustTrack.appendChild(createLogoEl(p)));
        ordered.forEach(p => trustTrack.appendChild(createLogoEl(p)));
    }

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
            navbar.classList.toggle('scrolled', window.scrollY > 80);
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
        navLinks.querySelectorAll('a, .lang-btn').forEach(el => {
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
        const revealDuration = 1;
        const revealStart = 'top 88%';

        gsap.utils.toArray('.reveal').forEach(el => {
            gsap.to(el, { opacity: 1, y: 0, duration: revealDuration, ease: revealEase, scrollTrigger: { trigger: el, start: revealStart, once: true }, delay: parseFloat(el.dataset.delay || 0) });
        });
        gsap.utils.toArray('.reveal-left').forEach(el => {
            gsap.to(el, { opacity: 1, x: 0, duration: revealDuration, ease: revealEase, scrollTrigger: { trigger: el, start: revealStart, once: true } });
        });
        gsap.utils.toArray('.reveal-right').forEach(el => {
            gsap.to(el, { opacity: 1, x: 0, duration: revealDuration, ease: revealEase, scrollTrigger: { trigger: el, start: revealStart, once: true } });
        });
        gsap.utils.toArray('.reveal-scale').forEach(el => {
            gsap.to(el, { opacity: 1, scale: 1, duration: 1.1, ease: revealEase, scrollTrigger: { trigger: el, start: revealStart, once: true } });
        });
        gsap.utils.toArray('.pain-point').forEach((el, i) => {
            gsap.to(el, { opacity: 1, x: 0, duration: 0.85, ease: revealEase, delay: i * 0.12, scrollTrigger: { trigger: el, start: revealStart, once: true } });
        });
        gsap.utils.toArray('.step-card').forEach((card, i) => {
            const inWave = card.closest('.steps-flow-wave');
            gsap.to(card, {
                opacity: 1,
                ...(inWave ? {} : { y: 0 }),
                duration: 0.85,
                ease: revealEase,
                delay: i * 0.1,
                scrollTrigger: { trigger: card, start: revealStart, once: true }
            });
        });
        gsap.utils.toArray('.compare-card').forEach((card, i) => {
            gsap.to(card, { opacity: 1, y: 0, duration: 0.9, ease: revealEase, delay: i * 0.12, scrollTrigger: { trigger: card, start: revealStart, once: true } });
        });
        gsap.utils.toArray('.app-card').forEach((card, i) => {
            gsap.to(card, { opacity: 1, y: 0, duration: 0.85, ease: revealEase, delay: i * 0.1, scrollTrigger: { trigger: card, start: revealStart, once: true } });
        });
        gsap.utils.toArray('.progress-fill').forEach(bar => {
            const width = bar.dataset.width;
            gsap.to(bar, { width: width + '%', duration: 1.2, ease: revealEase, scrollTrigger: { trigger: bar, start: revealStart, once: true } });
        });

        /* Team: één trigger + vaste duur/stagger (geen aparte ScrollTrigger per kaart, geen wissel door lazy layout) */
        const teamRoot = document.querySelector('.team-section');
        if (teamRoot) {
            const teamEls = teamRoot.querySelectorAll('.team-gsap');
            gsap.to(teamEls, {
                opacity: 1,
                y: 0,
                duration: 0.48,
                stagger: 0.1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: teamRoot,
                    start: 'top 86%',
                    once: true
                }
            });
        }
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
    document.querySelectorAll('.count, .metric-value').forEach(el => {
        if (el.dataset.target) counterObserver.observe(el);
    });

    // ──────────── TESTIMONIAL SLIDER ────────────
    const slidesWrapper = document.querySelector('.testimonial-slides-wrapper');
    const slides = slidesWrapper ? slidesWrapper.querySelectorAll('.testimonial-slide') : [];
    const dots = document.querySelectorAll('.slider-dot');
    let currentSlide = 0;
    let sliderInterval;
    function goToSlide(index) {
        slides.forEach(s => s.classList.remove('active'));
        dots.forEach(d => d.classList.remove('active'));
        if (slides[index]) slides[index].classList.add('active');
        if (dots[index]) dots[index].classList.add('active');
        currentSlide = index;
    }
    function nextSlide() { goToSlide((currentSlide + 1) % slides.length); }
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            clearInterval(sliderInterval);
            goToSlide(parseInt(dot.dataset.slide, 10));
            sliderInterval = setInterval(nextSlide, 5000);
        });
    });
    const testimonialSlider = document.getElementById('testimonial-slider');
    if (testimonialSlider && slides.length > 0) {
        let touchStartX = 0;
        testimonialSlider.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].screenX; }, { passive: true });
        testimonialSlider.addEventListener('touchend', e => {
            const diff = touchStartX - e.changedTouches[0].screenX;
            if (Math.abs(diff) < 50) return;
            clearInterval(sliderInterval);
            goToSlide(diff > 0 ? (currentSlide + 1) % slides.length : (currentSlide - 1 + slides.length) % slides.length);
            sliderInterval = setInterval(nextSlide, 5000);
        }, { passive: true });
    }
    if (slides.length > 0) sliderInterval = setInterval(nextSlide, 5000);

    // ──────────── CONTACT FORM (Web3Forms + i18n messages) ────────────
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');
    const WEB3FORMS_URL = 'https://api.web3forms.com/submit';
    const FORM_SOURCE_PREFIX = '[AutoAnnotate] ';

    if (contactForm && formMessage) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData.entries());

            if (!data.naam || !data.email) {
                formMessage.textContent = tr('form.req');
                formMessage.className = 'form-message error';
                formMessage.style.display = 'block';
                return;
            }

            const key1 = (document.getElementById('access_key_imetech') && document.getElementById('access_key_imetech').value || '').trim();
            const key2 = (document.getElementById('access_key_r2r') && document.getElementById('access_key_r2r').value || '').trim();

            if (!key1) {
                formMessage.textContent = tr('form.cfg');
                formMessage.className = 'form-message error';
                formMessage.style.display = 'block';
                return;
            }

            const submitBtn = document.getElementById('form-submit');
            const originalText = submitBtn ? submitBtn.textContent : '';
            if (submitBtn) { submitBtn.textContent = tr('form.sending'); submitBtn.disabled = true; }
            formMessage.textContent = '';
            formMessage.className = 'form-message';
            formMessage.style.display = 'none';

            const rawMessage = (data.bericht || '').trim() || '(Geen bericht)';
            const messageWithSource = FORM_SOURCE_PREFIX + rawMessage;

            const buildPayload = (accessKey) => ({
                access_key: accessKey,
                subject: 'AutoAnnotate – Contactform',
                name: data.naam,
                email: data.email,
                message: messageWithSource,
                company: (data.bedrijf || '').trim() || '',
                botcheck: data.botcheck || ''
            });

            try {
                const requests = [fetch(WEB3FORMS_URL, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(buildPayload(key1)) })];
                if (key2) requests.push(fetch(WEB3FORMS_URL, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(buildPayload(key2)) }));

                const responses = await Promise.all(requests);
                const results = await Promise.all(responses.map(r => r.ok ? r.json().catch(() => ({})) : Promise.resolve({ success: false })));
                const allOk = responses.every(r => r.ok) && results.every(j => j.success !== false);
                const bothConfigured = !!key2;

                if (allOk) {
                    formMessage.innerHTML = '<svg class="icon-emoji" viewBox="0 0 24 24" style="margin-right:0.3rem;stroke:#c8e6c9;"><polyline points="20 6 9 17 4 12"/></svg> ' + tr('form.ok');
                    formMessage.className = 'form-message success';
                    formMessage.style.display = 'block';
                    if (submitBtn) submitBtn.textContent = tr('form.submit');
                    contactForm.reset();
                } else {
                    const anyOk = responses.some(r => r.ok);
                    const msg = !anyOk ? tr('form.err') : (bothConfigured && responses.some(r => !r.ok)) ? tr('form.err') : (results[0] && results[0].message) || tr('form.err');
                    formMessage.textContent = msg;
                    formMessage.className = 'form-message error';
                    formMessage.style.display = 'block';
                    if (submitBtn) { submitBtn.textContent = originalText; submitBtn.disabled = false; }
                }
            } catch (err) {
                formMessage.textContent = tr('form.err');
                formMessage.className = 'form-message error';
                formMessage.style.display = 'block';
                if (submitBtn) { submitBtn.textContent = originalText; submitBtn.disabled = false; }
            }

            if (formMessage.className.includes('success') && submitBtn) {
                setTimeout(() => {
                    submitBtn.textContent = tr('form.submit');
                    submitBtn.disabled = false;
                    formMessage.style.display = 'none';
                }, 5000);
            }
        });
    }

    // ──────────── DEEPLINKS: hash scroll (navbar offset) + contact highlight ────────────
    function getNavOffset() {
        return (navbar && navbar.offsetHeight) ? navbar.offsetHeight + 10 : 70;
    }

    function prefersReducedMotion() {
        return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }

    /** Echt scrollende root (bij overflow-x:hidden op html scrollt vaak <body>, niet window). */
    function getScrollRoot() {
        return document.scrollingElement || document.documentElement;
    }

    function getDocScrollY() {
        return getScrollRoot().scrollTop;
    }

    function setDocScrollY(y) {
        const root = getScrollRoot();
        root.scrollTop = y;
        window.scrollTo(0, y);
    }

    /**
     * Vloeiende scroll: window.scrollTo werkt niet betrouwbaar als scrollingElement === body.
     * GSAP op scrollTop is consistent; RAF-fallback zet zelfde root.
     */
    function smoothScrollWindowTo(targetY) {
        const root = getScrollRoot();
        const maxY = Math.max(0, root.scrollHeight - window.innerHeight);
        const endY = Math.max(0, Math.min(Math.round(targetY), maxY));
        const startY = root.scrollTop;
        const distance = endY - startY;
        if (Math.abs(distance) < 2) return Promise.resolve();

        if (prefersReducedMotion()) {
            setDocScrollY(endY);
            return Promise.resolve();
        }

        const durationSec = Math.min(1.15, Math.max(0.52, Math.abs(distance) * 0.0009));

        if (typeof gsap !== 'undefined') {
            gsap.killTweensOf(root);
            return gsap.to(root, {
                scrollTop: endY,
                duration: durationSec,
                ease: 'power2.out',
                overwrite: 'auto'
            }).then(() => {});
        }

        const durationMs = durationSec * 1000;
        const t0 = performance.now();
        function easeOutCubic(t) {
            return 1 - Math.pow(1 - t, 3);
        }
        return new Promise((resolve) => {
            function tick(now) {
                const elapsed = now - t0;
                const t = Math.min(1, elapsed / durationMs);
                setDocScrollY(startY + distance * easeOutCubic(t));
                if (t < 1) requestAnimationFrame(tick);
                else resolve();
            }
            requestAnimationFrame(tick);
        });
    }

    function highlightContactForm(delayMs) {
        const cf = document.querySelector('.contact-form');
        if (!cf) return;
        setTimeout(() => {
            cf.classList.remove('highlight');
            void cf.offsetWidth;
            cf.classList.add('highlight');
            const firstInput = cf.querySelector('input');
            if (firstInput) firstInput.focus({ preventScroll: true });
            setTimeout(() => cf.classList.remove('highlight'), 2200);
        }, delayMs);
    }

    function scrollToHashTarget(hash, smooth) {
        if (!hash || hash === '#') return false;
        const targetEl = document.querySelector(hash);
        if (!targetEl) return false;
        const targetPos = targetEl.getBoundingClientRect().top + getDocScrollY() - getNavOffset();
        const y = Math.max(0, targetPos);
        const isContact = hash === '#contact' || hash === '#contact-form-wrap';

        function runContactHighlight() {
            if (isContact) highlightContactForm(smooth && !prefersReducedMotion() ? 120 : 80);
        }

        if (!smooth || prefersReducedMotion()) {
            setDocScrollY(y);
            runContactHighlight();
            return true;
        }

        smoothScrollWindowTo(y).then(runContactHighlight);
        return true;
    }

    function scrollToSectionId(sectionId, smooth) {
        if (!sectionId || sectionId === 'hero') {
            if (!smooth || prefersReducedMotion()) setDocScrollY(0);
            else smoothScrollWindowTo(0);
            return true;
        }
        return scrollToHashTarget('#' + sectionId, smooth);
    }

    function stripLangParam(search) {
        const p = new URLSearchParams(search || '');
        p.delete('lang');
        const s = p.toString();
        return s ? '?' + s : '';
    }

    function isAppPath(pathname) {
        const I = window.AA_I18N;
        if (!I) return false;
        const norm = (pathname || '/').replace(/\/+$/, '') || '/';
        if (norm === '/') return true;
        const parts = norm.split('/').filter(Boolean);
        if (parts.length === 1) {
            if (parts[0] === 'en' || parts[0] === 'nl') return true;
            return I.isValidSection(parts[0]);
        }
        if (parts.length === 2) {
            if (parts[0] !== 'en' && parts[0] !== 'nl') return false;
            return I.isValidSection(parts[1]);
        }
        return false;
    }

    function normalizeNlPrefixPath() {
        const I = window.AA_I18N;
        if (!I || !history.replaceState) return;
        const parsed = I.parsePathname(location.pathname);
        if (parsed.lang !== 'nl') return;
        const target = I.pathFor('nl', parsed.section);
        if (location.pathname === target) return;
        try {
            history.replaceState(null, '', target + stripLangParam(location.search) + location.hash);
        } catch (e) { /* ignore */ }
    }

    function navigateToPath(fullPathWithSearchHash, { replace = false, smooth = true } = {}) {
        const I = window.AA_I18N;
        if (!I) return;
        let url;
        try {
            url = new URL(fullPathWithSearchHash, location.href);
        } catch (e) {
            return;
        }
        const parsed = I.parsePathname(url.pathname);
        if (parsed.lang !== null) I.applyLang(parsed.lang);
        url.searchParams.delete('lang');
        const pathAndSearch = url.pathname + (url.search || '');
        const hash = url.hash || '';
        try {
            if (replace) history.replaceState(null, '', pathAndSearch + hash);
            else history.pushState(null, '', pathAndSearch + hash);
        } catch (err) { /* ignore */ }
        scrollToSectionId(parsed.section, smooth);
        if (typeof ScrollTrigger !== 'undefined') {
            requestAnimationFrame(() => ScrollTrigger.refresh());
        }
    }

    function applyRouteFromLocation(smooth) {
        const I = window.AA_I18N;
        if (!I) return;
        const parsed = I.parsePathname(location.pathname);
        if (parsed.lang !== null) I.applyLang(parsed.lang);
        let sec = parsed.section;
        if (!sec && location.hash && location.hash.length > 1) {
            const h = location.hash.slice(1);
            if (I.isValidSection(h)) sec = h;
        }
        if (sec) scrollToSectionId(sec, smooth);
        else if (location.hash) scrollToHashTarget(location.hash, smooth);
        else scrollToSectionId(null, smooth);
    }

    function updateSectionLinks() {
        const I = window.AA_I18N;
        if (!I) return;
        const lang = I.currentLang();
        document.querySelectorAll('a[data-aa-section]').forEach(a => {
            const sec = a.getAttribute('data-aa-section');
            if (!sec) return;
            a.setAttribute('href', I.pathFor(lang, sec));
        });
    }

    normalizeNlPrefixPath();
    updateSectionLinks();
    document.addEventListener('aa-lang-change', (e) => {
        const I = window.AA_I18N;
        if (!I || !e.detail || !e.detail.lang) return;
        const L = e.detail.lang;
        const cur = I.parsePathname(location.pathname);
        let sec = cur.section;
        if (!sec && location.hash && location.hash.length > 1) {
            const h = location.hash.slice(1);
            if (I.isValidSection(h)) sec = h;
        }
        const newPath = I.pathFor(L, sec || 'hero') + stripLangParam(location.search);
        try {
            if (history.replaceState) history.replaceState(null, '', newPath + location.hash);
        } catch (err) { /* ignore */ }
        updateSectionLinks();
    });

    document.addEventListener('click', (e) => {
        if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
        const a = e.target.closest('a[href]');
        if (!a) return;
        const hrefAttr = a.getAttribute('href');
        if (!hrefAttr || hrefAttr === '#' || hrefAttr.startsWith('#')) return;
        if (!hrefAttr.startsWith('/')) return;
        let url;
        try {
            url = new URL(a.href);
        } catch (err) {
            return;
        }
        if (url.origin !== location.origin) return;
        if (!isAppPath(url.pathname)) return;
        e.preventDefault();
        navigateToPath(url.pathname + url.search + url.hash, { replace: false, smooth: true });
    }, true);

    window.addEventListener('popstate', () => {
        normalizeNlPrefixPath();
        applyRouteFromLocation(true);
        updateSectionLinks();
    });

    window.addEventListener('hashchange', () => {
        if (!location.hash) return;
        scrollToHashTarget(location.hash, true);
    });

    window.addEventListener('load', () => {
        if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
        normalizeNlPrefixPath();
        const I = window.AA_I18N;
        const parsed = I ? I.parsePathname(location.pathname) : { section: null };
        if (parsed.section) scrollToSectionId(parsed.section, false);
        else if (location.hash) scrollToHashTarget(location.hash, false);
        else setDocScrollY(0);
    });

    // ──────────── SMOOTH SCROLL (hash-only links) ────────────
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetEl = document.querySelector(targetId);
            if (targetEl) {
                e.preventDefault();
                scrollToHashTarget(targetId, true);
            }
        });
    });
});

/* Vóór script’s eigen DOMContentLoaded kan i18n al aa-i18n-applied sturen — listener daarom top-level. */
document.addEventListener('aa-i18n-applied', () => {
    const I = window.AA_I18N;
    if (!I) return;
    const lang = I.currentLang();
    document.querySelectorAll('a[data-aa-section]').forEach(a => {
        const sec = a.getAttribute('data-aa-section');
        if (sec) a.setAttribute('href', I.pathFor(lang, sec));
    });
});
