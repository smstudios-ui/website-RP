import React, { useEffect } from 'react';
import gsap from 'gsap';

const Gallery: React.FC = () => {
  useEffect(() => {
    gsap.fromTo('.page-header', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' });
    gsap.fromTo('.gallery-grid img', { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.8, stagger: 0.2, ease: 'back.out(1.7)' });
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
          <h2 className="hero-subtitle">Visuals</h2>
          <h1 className="hero-title">City <span className="text-red">Gallery</span></h1>
        </div>
      </section>
      
      <section className="container" style={{ padding: '8rem 0' }}>
        <div className="gallery-grid">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="gallery-item glass-panel">
              <div className="image-wrapper">
                <img src={`https://picsum.photos/seed/rp${i}/800/600`} alt={`Gallery ${i}`} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Gallery;
