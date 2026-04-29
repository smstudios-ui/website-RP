import React, { useEffect } from 'react';
import gsap from 'gsap';

const Apply: React.FC = () => {
  useEffect(() => {
    gsap.fromTo('.page-header', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' });
    gsap.fromTo('.apply-form', { opacity: 0, x: -30 }, { opacity: 1, x: 0, duration: 1, delay: 0.3, ease: 'power3.out' });
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
          <h2 className="hero-subtitle">Recruitment</h2>
          <h1 className="hero-title">Join The <span className="text-red">Elite</span></h1>
        </div>
      </section>
      
      <section className="container" style={{ padding: '8rem 0' }}>
        <div className="apply-grid">
          <div className="apply-form glass-panel">
            <h2>Department Selection</h2>
            <div className="dept-list">
              <div className="dept-item">
                <h3>🚔 LSPD</h3>
                <p>Protect and serve the city of Los Santos.</p>
                <button className="btn btn-primary">Apply Now</button>
              </div>
              <div className="dept-item">
                <h3>🚑 EMS</h3>
                <p>Save lives and provide medical assistance.</p>
                <button className="btn btn-primary">Apply Now</button>
              </div>
              <div className="dept-item">
                <h3>⚖️ DOJ</h3>
                <p>Uphold justice in the legal system.</p>
                <button className="btn btn-primary">Apply Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Apply;
