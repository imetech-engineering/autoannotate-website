/* ========================================
   AutoAnnotate.ai – Main JavaScript
   GSAP Parallax, Typewriter, Counters,
   Particles, Slider, Form, Nav
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    // ──────────── SCROLL PROGRESS BAR ────────────
    const scrollProgress = document.getElementById('scroll-progress');
    function updateScrollProgress() {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        scrollProgress.style.width = progress + '%';
    }
    window.addEventListener('scroll', updateScrollProgress, { passive: true });

    // ──────────── NAVBAR SCROLL EFFECT ────────────
    const navbar = document.getElementById('navbar');
    function updateNavbar() {
        navbar.classList.toggle('scrolled', window.scrollY > 80);
    }
    window.addEventListener('scroll', updateNavbar, { passive: true });
    updateNavbar();

    // ──────────── HAMBURGER MENU ────────────
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('open');
    });

    // Close menu on nav link click
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('open');
        });
    });

    // ──────────── TYPEWRITER EFFECT ────────────
    const typewriterEl = document.getElementById('typewriter-text');
    const fullText = 'Van ruwe data naar AI-klaar datasets voor robots, zorg & retail.';
    let charIndex = 0;

    function typeWriter() {
        if (charIndex < fullText.length) {
            typewriterEl.textContent += fullText.charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, 40 + Math.random() * 30);
        } else {
            // Typing finished, hide cursor after a short delay (3s)
            setTimeout(() => {
                const cursor = document.querySelector('#hero-subtitle .cursor');
                if (cursor) {
                    cursor.style.opacity = '0';
                    // Remove from view completely after fade transition
                    setTimeout(() => cursor.style.display = 'none', 800);
                }
            }, 3000);
        }
    }
    // Start after hero animations finish
    setTimeout(typeWriter, 1500);

    // ──────────── PARTICLES (Canvas) ────────────
    const canvas = document.getElementById('particles-canvas');
    const ctx = canvas.getContext('2d');
    let particles = [];
    const PARTICLE_COUNT = 60;

    function resizeCanvas() {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    class Particle {
        constructor() {
            this.reset();
        }
        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 3 + 1;
            this.speedX = (Math.random() - 0.5) * 0.5;
            this.speedY = (Math.random() - 0.5) * 0.5;
            this.opacity = Math.random() * 0.5 + 0.2;
            this.pulse = Math.random() * Math.PI * 2;
        }
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            this.pulse += 0.02;
            this.opacity = 0.2 + Math.sin(this.pulse) * 0.15;

            if (this.x < 0 || this.x > canvas.width ||
                this.y < 0 || this.y > canvas.height) {
                this.reset();
            }
        }
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 140, 66, ${this.opacity})`;
            ctx.fill();
        }
    }

    for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push(new Particle());
    }

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
                    ctx.strokeStyle = `rgba(255, 140, 66, ${0.08 * (1 - dist / 120)})`;
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }
            }
        }
    }

    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        drawConnections();
        requestAnimationFrame(animateParticles);
    }
    animateParticles();

    // ──────────── GSAP ANIMATIONS ────────────
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);


        // Generic reveal animations
        gsap.utils.toArray('.reveal').forEach(el => {
            gsap.to(el, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: el,
                    start: 'top 85%',
                    once: true
                },
                delay: parseFloat(el.dataset.delay || 0)
            });
        });

        gsap.utils.toArray('.reveal-left').forEach(el => {
            gsap.to(el, {
                opacity: 1,
                x: 0,
                duration: 0.8,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: el,
                    start: 'top 85%',
                    once: true
                }
            });
        });

        gsap.utils.toArray('.reveal-right').forEach(el => {
            gsap.to(el, {
                opacity: 1,
                x: 0,
                duration: 0.8,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: el,
                    start: 'top 85%',
                    once: true
                }
            });
        });

        gsap.utils.toArray('.reveal-scale').forEach(el => {
            gsap.to(el, {
                opacity: 1,
                scale: 1,
                duration: 1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: el,
                    start: 'top 85%',
                    once: true
                }
            });
        });

        // Pain points stagger
        gsap.utils.toArray('.pain-point').forEach((el, i) => {
            gsap.to(el, {
                opacity: 1,
                x: 0,
                duration: 0.6,
                ease: 'power2.out',
                delay: i * 0.15,
                scrollTrigger: {
                    trigger: el,
                    start: 'top 85%',
                    once: true
                }
            });
        });



        // Step cards stagger
        gsap.utils.toArray('.step-card').forEach((card, i) => {
            gsap.to(card, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: 'back.out(1.2)',
                delay: i * 0.12,
                scrollTrigger: {
                    trigger: card,
                    start: 'top 88%',
                    once: true
                }
            });
        });

        // Compare cards
        gsap.utils.toArray('.compare-card').forEach((card, i) => {
            gsap.to(card, {
                opacity: 1,
                y: 0,
                duration: 0.7,
                ease: 'power2.out',
                delay: i * 0.15,
                scrollTrigger: {
                    trigger: card,
                    start: 'top 85%',
                    once: true
                }
            });
        });

        // App cards stagger
        gsap.utils.toArray('.app-card').forEach((card, i) => {
            gsap.to(card, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: 'power2.out',
                delay: i * 0.12,
                scrollTrigger: {
                    trigger: card,
                    start: 'top 88%',
                    once: true
                }
            });
        });

        // Progress bars animation
        gsap.utils.toArray('.progress-fill').forEach(bar => {
            const width = bar.dataset.width;
            gsap.to(bar, {
                width: width + '%',
                duration: 1.5,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: bar,
                    start: 'top 90%',
                    once: true
                }
            });
        });

    } // end GSAP check

    // ──────────── COUNTER ANIMATION ────────────
    function animateCounter(el) {
        const target = parseInt(el.dataset.target);
        const suffix = el.dataset.suffix || '';
        const duration = 2000;
        const startTime = performance.now();

        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(eased * target);
            el.textContent = current + suffix;

            if (progress < 1) {
                requestAnimationFrame(update);
            }
        }
        requestAnimationFrame(update);
    }

    // Observe counters
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.count, .metric-value').forEach(el => {
        if (el.dataset.target) {
            counterObserver.observe(el);
        }
    });

    // ──────────── TESTIMONIAL SLIDER (smooth crossfade) ────────────
    const slidesWrapper = document.querySelector('.testimonial-slides-wrapper');
    const slides = slidesWrapper ? slidesWrapper.querySelectorAll('.testimonial-slide') : [];
    const dots = document.querySelectorAll('.slider-dot');
    let currentSlide = 0;
    let sliderInterval;

    function goToSlide(index) {
        // Crossfade: hide current, show target
        slides.forEach(s => {
            s.classList.remove('active');
        });
        dots.forEach(d => d.classList.remove('active'));
        slides[index].classList.add('active');
        dots[index].classList.add('active');
        currentSlide = index;
    }

    function nextSlide() {
        goToSlide((currentSlide + 1) % slides.length);
    }

    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            clearInterval(sliderInterval);
            goToSlide(parseInt(dot.dataset.slide));
            sliderInterval = setInterval(nextSlide, 5000);
        });
    });

    sliderInterval = setInterval(nextSlide, 5000);

    // ──────────── CONTACT FORM ────────────
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData.entries());

        // Validate
        if (!data.naam || !data.email) {
            formMessage.textContent = 'Vul alstublieft alle verplichte velden in.';
            formMessage.className = 'form-message error';
            return;
        }

        // Simulate AJAX send (replace with real endpoint)
        const submitBtn = document.getElementById('form-submit');
        submitBtn.textContent = 'Verzenden...';
        submitBtn.disabled = true;

        setTimeout(() => {
            formMessage.innerHTML = '<svg class="icon-emoji" viewBox="0 0 24 24" style="margin-right: 0.3rem; stroke: #c8e6c9;"><polyline points="20 6 9 17 4 12"/></svg> Bedankt! Uw bericht is succesvol verstuurd. We nemen snel contact op.';
            formMessage.className = 'form-message success';
            submitBtn.innerHTML = 'Verstuurd! <svg class="icon-emoji" viewBox="0 0 24 24" style="margin-right: 0; margin-left: 0.3rem; stroke: currentColor;"><polyline points="20 6 9 17 4 12"/></svg>';
            submitBtn.disabled = true;
            contactForm.reset();

            setTimeout(() => {
                submitBtn.innerHTML = 'Verstuur Bericht <svg class="icon-emoji" viewBox="0 0 24 24" style="margin: 0; margin-left: 0.3rem; stroke: currentColor;"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>';
                submitBtn.disabled = false;
                formMessage.className = 'form-message';
            }, 4000);
        }, 1200);
    });

    // ──────────── SMOOTH SCROLL FOR ANCHOR LINKS ────────────
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const targetId = anchor.getAttribute('href');
            if (targetId === '#') return;
            const targetEl = document.querySelector(targetId);
            if (targetEl) {
                e.preventDefault();
                const offset = navbar.offsetHeight + 10;
                const targetPos = targetEl.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top: targetPos, behavior: 'smooth' });

                // Highlight contact form when clicking CTA buttons that link to #contact
                if (targetId === '#contact') {
                    const contactForm = document.querySelector('.contact-form');
                    if (contactForm) {
                        setTimeout(() => {
                            contactForm.classList.remove('highlight');
                            // Force reflow to restart animation
                            void contactForm.offsetWidth;
                            contactForm.classList.add('highlight');
                            // Focus on the first input for UX
                            const firstInput = contactForm.querySelector('input');
                            if (firstInput) firstInput.focus();
                            // Remove class after animation ends
                            setTimeout(() => contactForm.classList.remove('highlight'), 2200);
                        }, 600);
                    }
                }
            }
        });
    });


});
