import './style.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Preloader and Hero Animations
window.addEventListener('load', () => {
  const tl = gsap.timeline();
  
  // Progress bar animation
  tl.to('.progress-bar', {
    width: '100%',
    duration: 1.5,
    ease: 'power2.inOut'
  })
  // Glitch effect on text (simulated with quick opacity changes)
  .to('.glitch-text', {
    opacity: 0.2,
    duration: 0.1,
    yoyo: true,
    repeat: 5
  }, "-=0.5")
  // Fade out preloader
  .to('.preloader', {
    yPercent: -100,
    duration: 0.8,
    ease: 'power4.inOut'
  })
  // Hero background slight zoom out
  .fromTo('.hero-bg img', 
    { scale: 1.1 },
    { scale: 1, duration: 2, ease: 'power2.out' },
    "-=0.8"
  )
  // Hero content animations
  .from('.hero-subtitle', {
    y: 30,
    opacity: 0,
    duration: 0.6,
    ease: 'power3.out'
  }, "-=1.5")
  .from('.hero-title', {
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out'
  }, "-=1.3")
  .from('.hero-desc', {
    y: 30,
    opacity: 0,
    duration: 0.6,
    ease: 'power3.out'
  }, "-=1.1")
  .from('.hero-buttons .btn', {
    y: 20,
    opacity: 0,
    duration: 0.4,
    stagger: 0.2,
    ease: 'power3.out'
  }, "-=0.9")
  .from('.navbar', {
    y: -100,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out'
  }, "-=1");

  // Navbar Scroll Effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      document.querySelector('.navbar')?.classList.add('scrolled');
    } else {
      document.querySelector('.navbar')?.classList.remove('scrolled');
    }
  });

  // --- Interactive Animations ---

  // 1. Custom Cursor Logic
  const cursor = document.querySelector('.custom-cursor') as HTMLElement;
  const follower = document.querySelector('.custom-cursor-follower') as HTMLElement;

  window.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.1,
      ease: 'power2.out'
    });
    gsap.to(follower, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.3,
      ease: 'power2.out'
    });

    // Update mouse position for card glow effects
    const cards = document.querySelectorAll('.feature-card');
    cards.forEach((card: any) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty('--mouse-x', `${x}%`);
      card.style.setProperty('--mouse-y', `${y}%`);
    });
  });

  // 2. Magnetic Buttons
  const magneticBtns = document.querySelectorAll('.btn-primary, .btn-glass, .btn-outline');
  magneticBtns.forEach((btn: any) => {
    btn.addEventListener('mousemove', (e: any) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      gsap.to(btn, {
        x: x * 0.3,
        y: y * 0.3,
        duration: 0.3,
        ease: 'power2.out'
      });
      gsap.to(cursor, { scale: 1.5 });
      gsap.to(follower, { scale: 1.5 });
    });
    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, {
        x: 0,
        y: 0,
        duration: 0.3,
        ease: 'power2.out'
      });
      gsap.to(cursor, { scale: 1 });
      gsap.to(follower, { scale: 1 });
    });
  });

  // 3. Link Hover Scaling
  const links = document.querySelectorAll('a, button');
  links.forEach((link: any) => {
    link.addEventListener('mouseenter', () => {
      gsap.to(cursor, { scale: 2, mixBlendMode: 'normal' });
      gsap.to(follower, { opacity: 0 });
    });
    link.addEventListener('mouseleave', () => {
      gsap.to(cursor, { scale: 1, mixBlendMode: 'difference' });
      gsap.to(follower, { opacity: 1 });
    });
  });

  // --- Scrollytelling Enhancements ---

  // 1. Hero Parallax
  gsap.to('.hero-bg img', {
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: true
    },
    y: 100,
    scale: 1.2,
    ease: 'none'
  });

  gsap.to('.hero-overlay', {
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: true
    },
    background: 'rgba(5, 5, 5, 0.95)',
    ease: 'none'
  });

  // 2. Journey Section Scrollytelling (Pinning)
  const steps = gsap.utils.toArray('.journey-step');
  const visuals = gsap.utils.toArray('.visual-item');

  steps.forEach((step: any, i: number) => {
    ScrollTrigger.create({
      trigger: step,
      start: 'top center',
      end: 'bottom center',
      onEnter: () => {
        step.classList.add('active');
        if (visuals[i]) {
          gsap.to(visuals, { opacity: 0, scale: 0.9, duration: 0.5 });
          gsap.to(visuals[i] as any, { opacity: 1, scale: 1, duration: 0.5 });
        }
      },
      onLeaveBack: () => {
        step.classList.remove('active');
        if (i > 0 && visuals[i-1]) {
          gsap.to(visuals, { opacity: 0, scale: 0.9, duration: 0.5 });
          gsap.to(visuals[i-1] as any, { opacity: 1, scale: 1, duration: 0.5 });
        }
      }
    });
  });

  // 3. Factions Horizontal Scroll
  const factionsWrapper = document.querySelector('.factions-wrapper') as HTMLElement;
  if (factionsWrapper) {
    gsap.to(factionsWrapper, {
      x: () => -(factionsWrapper.scrollWidth - window.innerWidth + window.innerWidth * 0.1),
      ease: 'none',
      scrollTrigger: {
        trigger: '.factions',
        start: 'top top',
        end: () => `+=${factionsWrapper.scrollWidth}`,
        scrub: 1,
        pin: true,
        invalidateOnRefresh: true,
      }
    });
  }

  // 4. Rules Reveal
  gsap.from('.rule-item', {
    scrollTrigger: {
      trigger: '.rules',
      start: 'top 80%',
    },
    y: 30,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power3.out'
  });

  // 5. Secondary Page Rule Cards Reveal
  gsap.utils.toArray('.rule-card-full').forEach((card: any) => {
    gsap.to(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      },
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power3.out'
    });
  });

  // Existing animations...
  gsap.from('.about-text', {
    scrollTrigger: {
      trigger: '.about',
      start: 'top 75%',
    },
    x: -50,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
  });

  gsap.from('.about-image', {
    scrollTrigger: {
      trigger: '.about',
      start: 'top 75%',
    },
    x: 50,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
  });

  gsap.from('.feature-card', {
    scrollTrigger: {
      trigger: '.features',
      start: 'top 75%',
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power3.out'
  });
});


