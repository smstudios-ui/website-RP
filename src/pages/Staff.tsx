import React, { useEffect } from 'react';
import gsap from 'gsap';

const Staff: React.FC = () => {
  useEffect(() => {
    gsap.fromTo('.page-header', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' });
    gsap.fromTo('.staff-card', { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.8, stagger: 0.1, ease: 'back.out(1.2)' });
  }, []);

  const staffCategories = [
    {
      title: 'High Council',
      members: [
        { name: 'OwnerName', role: 'Founder & Lead Dev', avatar: '👑' },
        { name: 'CoOwner', role: 'Co-Founder', avatar: '💎' }
      ]
    },
    {
      title: 'Server Management',
      members: [
        { name: 'AdminName', role: 'Head Admin', avatar: '🛡️' },
        { name: 'ModLead', role: 'Lead Moderator', avatar: '👮' },
        { name: 'DevName', role: 'Backend Developer', avatar: '⚙️' }
      ]
    },
    {
      title: 'Support Team',
      members: [
        { name: 'HelperOne', role: 'Senior Support', avatar: '🤝' },
        { name: 'HelperTwo', role: 'Community Support', avatar: '❤️' }
      ]
    }
  ];

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
          <div className="hero-overlay hero-overlay-red"></div>
        </div>
        <div className="hero-content">
          <h2 className="hero-subtitle">The Team</h2>
          <h1 className="hero-title">Meet The <span className="text-red">Staff</span></h1>
          <p className="hero-desc">The dedicated individuals who keep the city running smoothly.</p>
        </div>
      </section>
      
      <section className="container" style={{ padding: '8rem 0' }}>
        {/* ... existing content ... */}
        {staffCategories.map((cat, i) => (
          <div key={i} className="staff-category" style={{ marginBottom: '6rem' }}>
            <div className="section-header text-center">
              <h1 className="section-title">{cat.title}</h1>
            </div>
            <div className="staff-grid">
              {cat.members.map((member, j) => (
                <div key={j} className="staff-card glass-panel reveal-text">
                  <div className="staff-avatar" style={{ background: 'rgba(230,0,0,0.1)', width: '100px', height: '100px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', border: '1px solid var(--border-red)' }}>
                    <span style={{ fontSize: '3rem' }}>{member.avatar}</span>
                  </div>
                  <h3>{member.name}</h3>
                  <span className="staff-role">{member.role}</span>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="responsibilities-section" style={{ marginTop: '10rem' }}>
          <div className="section-header text-center">
            <h2 className="hero-subtitle">Our Values</h2>
            <h1 className="section-title">Staff <span className="text-red">Responsibilities</span></h1>
          </div>
          <div className="divine-grid">
            <div className="divine-card glass-panel reveal-text">
              <div className="card-icon">🤝</div>
              <h3>Fairness</h3>
              <p>Treating every player with respect and impartiality, regardless of the situation.</p>
            </div>
            <div className="divine-card glass-panel reveal-text">
              <div className="card-icon">⚡</div>
              <h3>Efficiency</h3>
              <p>Responding to reports and support tickets as quickly as possible to maintain RP flow.</p>
            </div>
            <div className="divine-card glass-panel reveal-text">
              <div className="card-icon">🛡️</div>
              <h3>Integrity</h3>
              <p>Upholding the server standard and being a role model for the community.</p>
            </div>
          </div>
        </div>

        <div className="join-staff-cta glass-panel" style={{ marginTop: '10rem', padding: '4rem', textAlign: 'center' }}>
          <h2 className="hero-subtitle reveal-text">Interested?</h2>
          <h1 className="section-title reveal-text">Join the <span className="text-red">Team</span></h1>
          <p className="hero-desc reveal-text" style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>We are always looking for dedicated and passionate community members to join our staff team.</p>
          <div className="hero-buttons" style={{ justifyContent: 'center' }}>
            <button className="btn btn-primary btn-lg">Apply for Staff</button>
            <button className="btn btn-glass btn-lg">Staff FAQ</button>
          </div>
        </div>

      </section>
    </div>
  );
};

export default Staff;
