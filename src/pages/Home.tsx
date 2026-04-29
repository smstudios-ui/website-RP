import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface HomeProps {
  isLoaded: boolean;
}

const Home: React.FC<HomeProps> = ({ isLoaded }) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroBgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isLoaded) return;

    // 1. Optimized Hero Entrance
    const heroTl = gsap.timeline({
      delay: 0, // NO DELAY: We want it to pair perfectly with the panels opening
      defaults: { ease: 'power4.out', force3D: true }
    });

    // Setup initial hidden states
    gsap.set('.hero-bg', { scale: 1.05 });
    gsap.set('.hero-overlay', { opacity: 1, background: '#000' });
    gsap.set(['.hero-title', '.hero-subtitle', '.hero-desc', '.hero-buttons .btn'], {
      opacity: 0,
      y: 40
    });
    heroTl
      .to('.hero-overlay', {
        opacity: 0.6,
        background: 'linear-gradient(to bottom, transparent 0%, rgba(5,5,5,0.8) 100%)',
        duration: 2,
      })
      .to('.hero-bg', {
        scale: 1,
        duration: 3,
      }, 0)
      .to('.hero-title', {
        y: 0,
        opacity: 1,
        duration: 1.5,
      }, 0.5)
      .to('.hero-subtitle', {
        y: 0,
        opacity: 1,
        duration: 1.2,
      }, 0.7)
      .to('.hero-desc', {
        y: 0,
        opacity: 1,
        duration: 1.2,
      }, 0.9)
      .to('.hero-buttons .btn', {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.15,
      }, 1.1);

    // 2. Efficient Global Text Reveal
    const reveals = gsap.utils.toArray('.reveal-text');
    reveals.forEach((el: any) => {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 90%',
          toggleActions: 'play none none none',
          // Performance optimization: prevent calculation on every scroll event
          fastScrollEnd: true,
        }
      });
    });

    // 3. Optimized Journey Scrollytelling
    const steps = gsap.utils.toArray('.journey-step');
    const visuals = gsap.utils.toArray('.visual-item');

    gsap.to('.journey-progress-fill', {
      height: '100%',
      ease: 'none',
      scrollTrigger: {
        trigger: '.journey-container',
        start: 'top center',
        end: 'bottom center',
        scrub: 0.5 // Added slight smoothing to scrub
      }
    });

    steps.forEach((step: any, i: number) => {
      ScrollTrigger.create({
        trigger: step,
        start: 'top 60%',
        end: 'bottom 40%',
        onToggle: self => {
          if (self.isActive) {
            step.classList.add('active');
            visuals.forEach((v, idx) => {
              (v as HTMLElement).classList.toggle('active', idx === i);
            });
          } else {
            step.classList.remove('active');
          }
        }
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [isLoaded]);

  return (
    <main>
      <section className="hero" id="home" ref={heroRef}>
        <div className="hero-flare"></div>
        <div className="hero-bg" ref={heroBgRef}>
          <video
            src="/The Prime - GTA V Cinematic (NoPixel) - neutreN (1080p).mp4"
            autoPlay
            muted
            loop
            playsInline
            className="hero-video"
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <h2 className="hero-subtitle">Welcome to the Underworld</h2>
          <h1 className="hero-title">Rule The <span className="text-red">City</span></h1>
          <p className="hero-desc">The most immersive roleplay experience ever built. Join the elite.</p>
          <div className="hero-buttons">
            <a href="fivem://connect/example" className="btn btn-primary btn-lg">
              Join Server <span className="btn-icon">▶</span>
            </a>
            <a href="#about" className="btn btn-glass btn-lg">
              Explore <span className="btn-icon">→</span>
            </a>
          </div>
        </div>
      </section>

      <section className="about-split" id="about">
        <div className="container about-grid">
          <div className="about-text">
            <h2 className="hero-subtitle reveal-text">Our Story</h2>
            <h1 className="section-title reveal-text">A New Era of <br /><span className="text-red">Roleplay</span></h1>
            <p className="hero-desc reveal-text">Inferno RP is built from the ground up for serious roleplayers. We focus on deep immersion, player-driven economy, and high-quality custom assets.</p>
            <div className="about-stats reveal-text">
              <div className="stat-box">
                <span className="stat-num">500+</span>
                <span className="stat-label">Active Players</span>
              </div>
              <div className="stat-box">
                <span className="stat-num">24/7</span>
                <span className="stat-label">Server Uptime</span>
              </div>
            </div>
          </div>
          <div className="about-visual reveal-text">
            <div className="image-wrapper glass-panel">
              <img src="/feature_1.png" alt="City View" />
            </div>
          </div>
        </div>
      </section>

      <section className="features-grid-section" id="features">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="hero-subtitle reveal-text">What We Offer</h2>
            <h1 className="section-title reveal-text">Premium <span className="text-red">Features</span></h1>
          </div>

          <div className="divine-grid">
            <div className="divine-card glass-panel reveal-text">
              <span className="card-index">01</span>
              <div className="card-icon">💼</div>
              <h3>Player Economy</h3>
              <p>Run your own business, manage employees, and build your empire from the ground up.</p>
            </div>
            <div className="divine-card glass-panel reveal-text">
              <span className="card-index">02</span>
              <div className="card-icon">🚔</div>
              <h3>Advanced LSPD</h3>
              <p>Custom MDT, advanced evidence systems, and high-speed pursuit vehicles.</p>
            </div>
            <div className="divine-card glass-panel reveal-text">
              <span className="card-index">03</span>
              <div className="card-icon">🩸</div>
              <h3>Gang Territories</h3>
              <p>Fight for control over the city streets with dynamic turf wars and spray systems.</p>
            </div>
            <div className="divine-card glass-panel reveal-text">
              <span className="card-index">04</span>
              <div className="card-icon">🏎️</div>
              <h3>Underground Racing</h3>
              <p>Build custom tuner cars, organize street races, and outrun the cops.</p>
            </div>
            <div className="divine-card glass-panel reveal-text">
              <span className="card-index">05</span>
              <div className="card-icon">💊</div>
              <h3>Complex Crime</h3>
              <p>Multi-step heists, drug manufacturing, and black market trading networks.</p>
            </div>
            <div className="divine-card glass-panel reveal-text">
              <span className="card-index">06</span>
              <div className="card-icon">🏠</div>
              <h3>Custom Housing</h3>
              <p>Buy, decorate, and upgrade your own homes and apartments anywhere in the city.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="rules-terminal" id="rules">
        <div className="container rules-split">
          <div className="rules-visual reveal-text">
            <div className="terminal-window glass-panel">
              <div className="terminal-header">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
                <span className="terminal-title">server_rules.exe</span>
              </div>
              <div className="terminal-body">
                <p><span className="text-red">root@inferno:~$</span> ./load_rules</p>
                <p className="terminal-output">Loading core directives...</p>
                <p className="terminal-output">[OK] Rule 1: Value of Life active.</p>
                <p className="terminal-output">[OK] Rule 2: RDM/VDM prevention enabled.</p>
                <p className="terminal-output">[OK] Rule 3: Metagaming shields online.</p>
                <p className="terminal-blink">_</p>
              </div>
            </div>
          </div>
          <div className="rules-text">
            <h2 className="hero-subtitle reveal-text">The Code</h2>
            <h1 className="section-title reveal-text">Server <span className="text-red">Rules</span></h1>
            <p className="hero-desc reveal-text">We maintain a strict standard of roleplay to ensure the best experience for everyone. Ignorance of the rules is not an excuse.</p>
            <div className="hero-buttons" style={{ justifyContent: 'flex-start', marginTop: '2rem' }}>
              <a href="#" className="btn btn-primary btn-lg">Read Full Rules</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
