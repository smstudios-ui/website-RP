import React, { useEffect } from 'react';
import gsap from 'gsap';

const Staff: React.FC = () => {
  useEffect(() => {
    gsap.fromTo('.page-header', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' });
    gsap.fromTo('.staff-card', { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.8, stagger: 0.2, ease: 'back.out(1.7)' });
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
          <h2 className="hero-subtitle">The Team</h2>
          <h1 className="hero-title">Meet The <span className="text-red">Staff</span></h1>
        </div>
      </section>
      
      <section className="container" style={{ padding: '8rem 0' }}>
        <div className="staff-grid">
          <div className="staff-card glass-panel">
            <div className="staff-avatar">👑</div>
            <h3>OwnerName</h3>
            <span className="staff-role">Founder</span>
          </div>
          <div className="staff-card glass-panel">
            <div className="staff-avatar">🛠️</div>
            <h3>DevName</h3>
            <span className="staff-role">Lead Developer</span>
          </div>
          <div className="staff-card glass-panel">
            <div className="staff-avatar">👮</div>
            <h3>ModName</h3>
            <span className="staff-role">Head Moderator</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Staff;
