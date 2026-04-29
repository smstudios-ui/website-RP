import React, { useEffect } from 'react';
import gsap from 'gsap';

const Rules: React.FC = () => {
  useEffect(() => {
    gsap.fromTo('.page-header', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' });
    gsap.fromTo('.rule-card', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out' });
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
          <h2 className="hero-subtitle">The Code</h2>
          <h1 className="hero-title">Server <span className="text-red">Rules</span></h1>
        </div>
      </section>
      
      <section className="container" style={{ padding: '8rem 0' }}>
        <div className="rules-list">
          <div className="rule-card glass-panel">
            <span className="rule-num">01</span>
            <h3>Value of Life (NVL)</h3>
            <p>You must value your life as if it were your own. If you are held at gunpoint, you must comply.</p>
          </div>
          <div className="rule-card glass-panel">
            <span className="rule-num">02</span>
            <h3>Random Deathmatch (RDM)</h3>
            <p>Killing another player without a valid roleplay reason is strictly prohibited.</p>
          </div>
          <div className="rule-card glass-panel">
            <span className="rule-num">03</span>
            <h3>Vehicle Deathmatch (VDM)</h3>
            <p>Using your vehicle as a weapon to kill others is not allowed.</p>
          </div>
          <div className="rule-card glass-panel">
            <span className="rule-num">04</span>
            <h3>Metagaming</h3>
            <p>Using out-of-character information for in-character gain is forbidden.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rules;
