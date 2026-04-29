import React, { useEffect } from 'react';
import gsap from 'gsap';

const Public: React.FC = () => {
  useEffect(() => {
    gsap.fromTo('.page-header', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' });
    gsap.fromTo('.status-card', { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.8, stagger: 0.2, ease: 'back.out(1.2)' });
  }, []);

  const serverStats = [
    { label: 'Server Status', value: 'Online', type: 'badge' },
    { label: 'Uptime', value: '14 Days, 6 Hours', type: 'text' },
    { label: 'Average Ping', value: '42ms', type: 'text' },
    { label: 'Resources', value: '350+ Scripts', type: 'text' }
  ];

  const events = [
    { title: 'Los Santos Grand Prix', date: 'May 5th, 8PM EST', desc: 'The biggest race of the year. $1M prize pool.' },
    { title: 'Department Job Fair', date: 'May 7th, 6PM EST', desc: 'LSPD and EMS are hiring! Come meet the team.' },
    { title: 'Music Festival', date: 'May 10th, 9PM EST', desc: 'Live DJ set at the Vinewood Bowl.' }
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
          <h2 className="hero-subtitle">Live Data</h2>
          <h1 className="hero-title">Public <span className="text-red">Information</span></h1>
          <p className="hero-desc">Real-time statistics and community updates.</p>
        </div>
      </section>

      <section className="container" style={{ padding: '8rem 0' }}>
        <div className="section-header text-center">
          <h2 className="hero-subtitle reveal-text">Real-Time</h2>
          <h1 className="section-title reveal-text">Server <span className="text-red">Statistics</span></h1>
        </div>

        <div className="divine-grid">
          <div className="divine-card glass-panel status-card reveal-text">
            <div className="card-icon">👥</div>
            <h3>Player Count</h3>
            <h1 className="text-red" style={{ fontSize: '3rem', margin: '1rem 0' }}>124 <span style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>/ 256</span></h1>
            <p>Peak count today: 210 players</p>
          </div>
          <div className="divine-card glass-panel status-card reveal-text">
            <div className="card-icon">⚡</div>
            <h3>Performance</h3>
            <h1 className="text-red" style={{ fontSize: '3rem', margin: '1rem 0' }}>Stable</h1>
            <p>Server heartbeat is optimal. No lag detected.</p>
          </div>
          <div className="divine-card glass-panel status-card reveal-text">
            <div className="card-icon">🛡️</div>
            <h3>Protection</h3>
            <h1 className="text-red" style={{ fontSize: '3rem', margin: '1rem 0' }}>Active</h1>
            <p>Anti-cheat and DDoS shields are online.</p>
          </div>
        </div>

        <div className="stats-list-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
          {serverStats.map((stat, i) => (
            <div key={i} className="glass-panel reveal-text" style={{ padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: 'var(--text-muted)' }}>{stat.label}</span>
              {stat.type === 'badge' ? <span className="badge badge-success">{stat.value}</span> : <span style={{ fontWeight: 'bold' }}>{stat.value}</span>}
            </div>
          ))}
        </div>

        <div className="events-section" style={{ marginTop: '10rem' }}>
          <div className="section-header text-center">
            <h2 className="hero-subtitle reveal-text">Community</h2>
            <h1 className="section-title reveal-text">Upcoming <span className="text-red">Events</span></h1>
          </div>
          <div className="divine-grid">
            {events.map((event, i) => (
              <div key={i} className="divine-card glass-panel reveal-text">
                <div className="event-date" style={{ color: 'var(--primary-red)', fontWeight: 'bold', fontSize: '0.8rem', marginBottom: '0.5rem', textTransform: 'uppercase' }}>{event.date}</div>
                <h3>{event.title}</h3>
                <p>{event.desc}</p>
                <button className="btn btn-glass" style={{ marginTop: '1.5rem', width: '100%' }}>Remind Me</button>
              </div>
            ))}
          </div>
        </div>

        <div className="staff-online-section glass-panel" style={{ marginTop: '10rem', padding: '4rem', textAlign: 'center' }}>
          <h2 className="hero-subtitle reveal-text">Support</h2>
          <h1 className="section-title reveal-text">Staff <span className="text-red">Online</span></h1>
          <p className="hero-desc reveal-text" style={{ maxWidth: '600px', margin: '0 auto 3rem' }}>Our team is currently available in-game and on Discord to assist you with any issues.</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            <div className="staff-stat">
              <h2 className="text-red">8</h2>
              <span>Admins</span>
            </div>
            <div className="staff-stat">
              <h2 className="text-red">12</h2>
              <span>Moderators</span>
            </div>
            <div className="staff-stat">
              <h2 className="text-red">5</h2>
              <span>Support</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Public;
