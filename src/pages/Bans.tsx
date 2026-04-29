import React, { useEffect } from 'react';
import gsap from 'gsap';

const Bans: React.FC = () => {
  useEffect(() => {
    gsap.fromTo('.page-header', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' });
    gsap.fromTo('.stat-card', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: 'power3.out' });
  }, []);

  const banStats = [
    { label: 'Total Bans', count: '1,245', icon: '🚫' },
    { label: 'Permanent', count: '432', icon: '💀' },
    { label: 'Temporary', count: '813', icon: '⏳' }
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
          <h2 className="hero-subtitle">Justice</h2>
          <h1 className="hero-title">Ban <span className="text-red">List</span></h1>
          <p className="hero-desc">Maintaining a fair and safe environment for all players.</p>
        </div>
      </section>

      <section className="container" style={{ padding: '8rem 0' }}>
        <div className="divine-grid" style={{ marginBottom: '6rem' }}>
          {banStats.map((stat, i) => (
            <div key={i} className="divine-card glass-panel stat-card reveal-text">
              <div className="card-icon">{stat.icon}</div>
              <h1 className="text-red" style={{ fontSize: '2.5rem', margin: '0.5rem 0' }}>{stat.count}</h1>
              <p style={{ color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.8rem' }}>{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="search-section" style={{ marginBottom: '3rem' }}>
          <div className="search-box glass-panel" style={{ maxWidth: '600px', margin: '0 auto' }}>
            <span className="search-icon">🔍</span>
            <input type="text" placeholder="Search by Player Name or Steam ID..." className="search-input" style={{ width: '100%', fontSize: '1rem' }} />
          </div>
        </div>

        <div className="table-responsive glass-panel reveal-text">
          <table className="bans-table">
            <thead>
              <tr>
                <th>Player</th>
                <th>Reason</th>
                <th>Duration</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>PlayerOne</td>
                <td>RDM in Greenzone</td>
                <td>3 Days</td>
                <td><span className="badge badge-success">Expired</span></td>
                <td>2026-04-28</td>
              </tr>
              <tr>
                <td>ToxicUser</td>
                <td>Hate Speech</td>
                <td>Permanent</td>
                <td><span className="badge" style={{ background: 'rgba(230,0,0,0.1)', color: 'var(--primary-red)', border: '1px solid var(--border-red)' }}>Active</span></td>
                <td>2026-04-27</td>
              </tr>
              <tr>
                <td>RuleBreaker</td>
                <td>FailRP / Combat Log</td>
                <td>7 Days</td>
                <td><span className="badge" style={{ background: 'rgba(230,0,0,0.1)', color: 'var(--primary-red)', border: '1px solid var(--border-red)' }}>Active</span></td>
                <td>2026-04-25</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="appeal-section glass-panel" style={{ marginTop: '10rem', padding: '4rem', textAlign: 'center' }}>
          <h2 className="hero-subtitle reveal-text">Wrongly Banned?</h2>
          <h1 className="section-title reveal-text">Appeal <span className="text-red">Process</span></h1>
          <p className="hero-desc reveal-text" style={{ maxWidth: '600px', margin: '0 auto 3rem' }}>If you believe your ban was unjustified or you have served your time and wish to return, follow our appeal process.</p>
          <div className="hero-buttons" style={{ justifyContent: 'center' }}>
            <a href="#" className="btn btn-primary btn-lg">Submit Appeal</a>
            <a href="#" className="btn btn-glass btn-lg">Read Ban Policy</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Bans;
