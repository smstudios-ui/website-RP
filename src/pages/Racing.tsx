import React, { useEffect } from 'react';
import gsap from 'gsap';

const Racing: React.FC = () => {
  useEffect(() => {
    gsap.fromTo('.page-header', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' });
    gsap.fromTo('.racing-content', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: 'power3.out' });
  }, []);

  return (
    <div className="page-wrapper">
      <section className="hero mini-hero">
        <div className="hero-bg">
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
          <h2 className="hero-subtitle">The Underground</h2>
          <h1 className="hero-title">Underground <span className="text-red">Racing</span></h1>
        </div>
      </section>
      
      <section className="racing-content container" style={{ padding: '8rem 0' }}>
        <div className="divine-grid">
          <div className="divine-card glass-panel reveal-text">
            <span className="card-index">01</span>
            <div className="card-icon">🏎️</div>
            <h3>Custom Tuners</h3>
            <p>Access our exclusive range of performance parts and visual modifications.</p>
          </div>
          <div className="divine-card glass-panel reveal-text">
            <span className="card-index">02</span>
            <div className="card-icon">🏁</div>
            <h3>Street Circuits</h3>
            <p>Race across the city in organized underground events.</p>
          </div>
          <div className="divine-card glass-panel reveal-text">
            <span className="card-index">03</span>
            <div className="card-icon">🔥</div>
            <h3>Drift Events</h3>
            <p>Show off your skills in our dedicated drift zones.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Racing;
