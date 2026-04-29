import React, { useEffect } from 'react';
import gsap from 'gsap';

const Apply: React.FC = () => {
  useEffect(() => {
    gsap.fromTo('.page-header', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' });
    gsap.fromTo('.dept-card', { opacity: 0, x: -30 }, { opacity: 1, x: 0, duration: 0.8, stagger: 0.2, ease: 'power3.out' });

    // Animate process steps
    gsap.fromTo('.process-step',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, scrollTrigger: { trigger: '.process-timeline', start: 'top 80%' } }
    );
  }, []);

  const departments = [
    {
      id: 'lspd',
      name: 'LSPD',
      icon: '🚔',
      desc: 'Protect and serve the citizens of Los Santos. Join the thin blue line.',
      tags: ['Tactical', 'Leadership', 'Serious RP']
    },
    {
      id: 'ems',
      name: 'EMS',
      icon: '🚑',
      desc: 'Save lives on the front line. Every second counts in medical emergencies.',
      tags: ['Medical', 'Support', 'Fast-Paced']
    },
    {
      id: 'doj',
      name: 'DOJ',
      icon: '⚖️',
      desc: 'Uphold the law in the courts. Prosecution, defense, and judicial oversight.',
      tags: ['Legal', 'Intelligence', 'Debate']
    }
  ];

  const processSteps = [
    { title: 'Application', desc: 'Submit your detailed character story and experience.' },
    { title: 'Interview', desc: 'A face-to-face talk with department leadership.' },
    { title: 'Training', desc: 'Hands-on training in the field with field officers.' },
    { title: 'Probation', desc: 'Show your skills during your first weeks on the job.' }
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
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <h2 className="hero-subtitle">Recruitment</h2>
          <h1 className="hero-title">Join The <span className="text-red">Elite</span></h1>
          <p className="hero-desc">Choose your path and start your journey in the city.</p>
        </div>
      </section>

      <section className="container" style={{ padding: '8rem 0' }}>
        <div className="section-header text-center">
          <h2 className="hero-subtitle reveal-text">Career Paths</h2>
          <h1 className="section-title reveal-text">Active <span className="text-red">Departments</span></h1>
        </div>

        <div className="divine-grid">
          {departments.map((dept) => (
            <div key={dept.id} className="divine-card glass-panel dept-card reveal-text">
              <div className="card-icon">{dept.icon}</div>
              <h3>{dept.name}</h3>
              <p>{dept.desc}</p>
              <div className="dept-tags" style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem', flexWrap: 'wrap' }}>
                {dept.tags.map(tag => (
                  <span key={tag} className="badge badge-success" style={{ fontSize: '0.6rem' }}>{tag}</span>
                ))}
              </div>
              <button className="btn btn-primary" style={{ width: '100%', marginTop: '2rem' }}>Apply Now</button>
            </div>
          ))}
        </div>

        <div className="process-section" style={{ marginTop: '10rem' }}>
          <div className="section-header text-center">
            <h2 className="hero-subtitle reveal-text">The Journey</h2>
            <h1 className="section-title reveal-text">Recruitment <span className="text-red">Process</span></h1>
          </div>

          <div className="process-timeline" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem', position: 'relative' }}>
            {processSteps.map((step, i) => (
              <div key={i} className="process-step text-center">
                <div className="step-num glass-panel" style={{ width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', border: '2px solid var(--primary-red)', fontWeight: 'bold', fontSize: '1.2rem', position: 'relative', zIndex: 2 }}>
                  {i + 1}
                </div>
                <h3 style={{ marginBottom: '0.5rem' }}>{step.title}</h3>
                <p style={{ fontSize: '0.9rem' }}>{step.desc}</p>
              </div>
            ))}
            <div className="timeline-line" style={{ position: 'absolute', top: '30px', left: '10%', right: '10%', height: '2px', background: 'rgba(255,255,255,0.05)', zIndex: 1 }}></div>
          </div>
        </div>

        <div className="requirements-section glass-panel" style={{ marginTop: '10rem', padding: '4rem' }}>
          <div className="rules-split">
            <div className="req-text">
              <h2 className="hero-subtitle">Prerequisites</h2>
              <h1 className="section-title">Core <span className="text-red">Requirements</span></h1>
              <p className="hero-desc" style={{ marginBottom: '2rem' }}>Before applying, ensure you meet the following baseline standards to ensure a high-quality experience for everyone.</p>
              <ul className="req-list" style={{ listStyle: 'none', padding: 0 }}>
                {['Minimum 18 years of age', 'Working high-quality microphone', 'Basic knowledge of server rules', 'Clear character backstory', 'Ability to record gameplay'].map(item => (
                  <li key={item} style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <span className="text-red" style={{ fontWeight: 'bold' }}>✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="req-visual" style={{ textAlign: 'center' }}>
              <div className="glass-panel" style={{ padding: '2rem', display: 'inline-block' }}>
                <span style={{ fontSize: '5rem' }}>📄</span>
                <h3 style={{ marginTop: '1rem' }}>Ready to Apply?</h3>
                <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Standard review time: 48 hours</p>
                <button className="btn btn-primary">Open Application</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Apply;
