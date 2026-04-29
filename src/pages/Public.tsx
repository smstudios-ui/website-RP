import React, { useEffect } from 'react';
import gsap from 'gsap';

const Public: React.FC = () => {
  useEffect(() => {
    gsap.fromTo('.page-header', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' });
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
          <h2 className="hero-subtitle">Live Data</h2>
          <h1 className="hero-title">Public <span className="text-red">Information</span></h1>
        </div>
      </section>
      
      <section className="container" style={{ padding: '8rem 0' }}>
        <div className="status-grid glass-panel">
          <div className="status-item">
            <h3>Server Status</h3>
            <span className="badge badge-success">Online</span>
          </div>
          <div className="status-item">
            <h3>Player Count</h3>
            <p>124 / 256</p>
          </div>
          <div className="status-item">
            <h3>Next Restart</h3>
            <p>04:00 AM EST</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Public;
