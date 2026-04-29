import React, { useEffect, useState } from 'react';
import gsap from 'gsap';

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    gsap.fromTo('.page-header', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' });
    gsap.fromTo('.gallery-grid .gallery-item', { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.8, stagger: 0.1, ease: 'back.out(1.2)' });
  }, [filter]);

  const categories = ['All', 'Action', 'Life', 'Racing', 'Scenic'];

  const galleryItems = [
    { id: 1, category: 'Racing', img: 'https://picsum.photos/seed/rp1/800/600' },
    { id: 2, category: 'Action', img: 'https://picsum.photos/seed/rp2/800/600' },
    { id: 3, category: 'Life', img: 'https://picsum.photos/seed/rp3/800/600' },
    { id: 4, category: 'Scenic', img: 'https://picsum.photos/seed/rp4/800/600' },
    { id: 5, category: 'Racing', img: 'https://picsum.photos/seed/rp5/800/600' },
    { id: 6, category: 'Action', img: 'https://picsum.photos/seed/rp6/800/600' },
  ];

  const filteredItems = filter === 'All' ? galleryItems : galleryItems.filter(item => item.category === filter);

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
          <p className="hero-desc">Capturing the most intense moments in Los Santos.</p>
        </div>
      </section>

      <section className="container" style={{ padding: '8rem 0' }}>
        <div className="filter-bar text-center" style={{ marginBottom: '4rem' }}>
          <div className="glass-panel" style={{ display: 'inline-flex', padding: '0.5rem', borderRadius: '100px', gap: '0.5rem' }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`nav-link ${filter === cat ? 'active' : ''}`}
                style={{ border: 'none', cursor: 'pointer', background: 'transparent' }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="gallery-grid">
          {filteredItems.map((item) => (
            <div key={item.id} className="gallery-item glass-panel reveal-text">
              <div className="image-wrapper">
                <img src={item.img} alt={`Gallery ${item.id}`} />
                <div className="gallery-overlay">
                  <span className="badge badge-success">{item.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="photographer-spotlight glass-panel" style={{ marginTop: '10rem', padding: '4rem', display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '4rem', alignItems: 'center' }}>
          <div className="spotlight-image">
            <div className="image-wrapper" style={{ borderRadius: '50%', width: '200px', height: '200px', margin: '0 auto', overflow: 'hidden', border: '4px solid var(--primary-red)' }}>
              <img src="https://i.pravatar.cc/300?u=photog" alt="Photographer" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
          <div className="spotlight-text">
            <h2 className="hero-subtitle">Featured Photographer</h2>
            <h1 className="section-title">Lens <span className="text-red">Master</span></h1>
            <p className="hero-desc" style={{ marginBottom: '2rem' }}>"I don't just take pictures; I capture the soul of the city. Every chase, every sunset, every bullet—there's a story behind it."</p>
            <div className="hero-buttons" style={{ justifyContent: 'flex-start' }}>
              <a href="#" className="btn btn-primary">View Portfolio</a>
              <a href="#" className="btn btn-glass">Follow on Socials</a>
            </div>
          </div>
        </div>

        <div className="upload-cta text-center" style={{ marginTop: '10rem' }}>
          <h2 className="hero-subtitle reveal-text">Share Your Story</h2>
          <h1 className="section-title reveal-text">Upload Your <span className="text-red">Moments</span></h1>
          <p className="hero-desc reveal-text" style={{ maxWidth: '600px', margin: '0 auto 3rem' }}>Captured an insane heist or a beautiful cinematic? Share it with the community and get featured on the main page.</p>
          <button className="btn btn-primary btn-lg reveal-text">Submit Media</button>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
