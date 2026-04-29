import React, { useEffect } from 'react';
import gsap from 'gsap';

const Racing: React.FC = () => {
  useEffect(() => {
    gsap.fromTo('.page-header', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' });
    gsap.fromTo('.racing-content', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: 'power3.out' });

    // Animate leaderboard rows
    gsap.fromTo('.leaderboard-row',
      { opacity: 0, x: -20 },
      { opacity: 1, x: 0, duration: 0.5, stagger: 0.1, scrollTrigger: { trigger: '.leaderboard-section', start: 'top 80%' } }
    );
  }, []);

  const leaderboardData = [
    { rank: 1, name: 'SpeedDemon', car: 'Dominator ASP', time: '1:12.45' },
    { rank: 2, name: 'DriftKing', car: 'Futo GTX', time: '1:13.12' },
    { rank: 3, name: 'TurboTina', car: 'Jester RR', time: '1:14.05' },
    { rank: 4, name: 'NitroNick', car: 'Calico GTF', time: '1:14.88' },
    { rank: 5, name: 'ApexAlpha', car: 'Pariah', time: '1:15.20' },
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
          <h2 className="hero-subtitle">The Underground</h2>
          <h1 className="hero-title">Underground <span className="text-red">Racing</span></h1>
          <p className="hero-desc">Burn rubber, earn respect, and rule the Los Santos streets.</p>
        </div>
      </section>

      <section className="racing-content container" style={{ padding: '8rem 0' }}>
        <div className="section-header text-center">
          <h2 className="hero-subtitle reveal-text">High Performance</h2>
          <h1 className="section-title reveal-text">Racing <span className="text-red">Classes</span></h1>
        </div>

        <div className="divine-grid">
          <div className="divine-card glass-panel reveal-text">
            <span className="card-index">ST</span>
            <div className="card-icon">🏎️</div>
            <h3>Street Tuners</h3>
            <p>Balanced performance and aesthetic perfection. The heart of the underground scene.</p>
            <ul className="card-list" style={{ marginTop: '1rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              <li>• Custom Bodykits</li>
              <li>• Drift Tuning</li>
              <li>• Turbo Upgrades</li>
            </ul>
          </div>
          <div className="divine-card glass-panel reveal-text">
            <span className="card-index">MS</span>
            <div className="card-icon">🏁</div>
            <h3>Muscle Elite</h3>
            <p>Raw power and straight-line speed. Not for the faint of heart or weak of grip.</p>
            <ul className="card-list" style={{ marginTop: '1rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              <li>• High Torque</li>
              <li>• Drag Racing</li>
              <li>• Wheelie Bars</li>
            </ul>
          </div>
          <div className="divine-card glass-panel reveal-text">
            <span className="card-index">EX</span>
            <div className="card-icon">🔥</div>
            <h3>Exotic Super</h3>
            <p>The pinnacle of engineering. Ultra-light, ultra-fast, and ultra-expensive.</p>
            <ul className="card-list" style={{ marginTop: '1rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              <li>• Active Aero</li>
              <li>• AWD Systems</li>
              <li>• Luxury Interior</li>
            </ul>
          </div>
        </div>

        <div className="leaderboard-section" style={{ marginTop: '10rem' }}>
          <div className="section-header text-center">
            <h2 className="hero-subtitle reveal-text">The Best of the Best</h2>
            <h1 className="section-title reveal-text">Current <span className="text-red">Leaderboard</span></h1>
          </div>

          <div className="table-responsive glass-panel reveal-text">
            <table className="bans-table">
              <thead>
                <tr>
                  <th>Rank</th>
                  <th>Driver</th>
                  <th>Vehicle</th>
                  <th>Best Time</th>
                </tr>
              </thead>
              <tbody>
                {leaderboardData.map((item) => (
                  <tr key={item.rank} className="leaderboard-row">
                    <td><span className={item.rank <= 3 ? 'text-red' : ''}>#{item.rank}</span></td>
                    <td>{item.name}</td>
                    <td>{item.car}</td>
                    <td style={{ fontFamily: 'monospace' }}>{item.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="tracks-showcase" style={{ marginTop: '10rem' }}>
          <div className="section-header text-center">
            <h2 className="hero-subtitle reveal-text">The Circuits</h2>
            <h1 className="section-title reveal-text">Iconic <span className="text-red">Tracks</span></h1>
          </div>
          <div className="divine-grid">
            {[
              { name: 'Vinewood Climb', difficulty: 'Hard', length: '4.2km', icon: '⛰️' },
              { name: 'LS River Run', difficulty: 'Medium', length: '3.8km', icon: '🌊' },
              { name: 'Airport Sprint', difficulty: 'Easy', length: '2.5km', icon: '✈️' },
              { name: 'Industrial Loop', difficulty: 'Medium', length: '5.1km', icon: '🏭' }
            ].map((track, i) => (
              <div key={i} className="divine-card glass-panel reveal-text" style={{ padding: '2rem' }}>
                <div className="track-icon" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{track.icon}</div>
                <h3>{track.name}</h3>
                <div className="track-meta" style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  <span>Diff: <span className="text-red">{track.difficulty}</span></span>
                  <span>Length: {track.length}</span>
                </div>
                <button className="btn btn-glass" style={{ width: '100%', marginTop: '1.5rem', fontSize: '0.7rem' }}>View Layout</button>
              </div>
            ))}
          </div>
        </div>

        <div className="crews-section" style={{ marginTop: '10rem' }}>
          <div className="rules-split">
            <div className="crew-text">
              <h2 className="hero-subtitle">The Underground</h2>
              <h1 className="section-title">Active <span className="text-red">Crews</span></h1>
              <p className="hero-desc" style={{ marginBottom: '2rem' }}>Join an established crew or form your own to dominate the leaderboards and control the streets.</p>
              <div className="crew-list" style={{ display: 'grid', gap: '1.5rem' }}>
                {[
                  { name: 'Midnight Club', specialization: 'Street Racing', members: 12 },
                  { name: 'Apex Predators', specialization: 'Circuit Racing', members: 8 },
                  { name: 'Sideways Society', specialization: 'Drifting', members: 15 }
                ].map((crew, i) => (
                  <div key={i} className="glass-panel" style={{ padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <h4 style={{ margin: 0 }}>{crew.name}</h4>
                      <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{crew.specialization}</span>
                    </div>
                    <span className="badge badge-success">{crew.members} Members</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="crew-visual">
              <div className="glass-panel-red" style={{ padding: '3rem', textAlign: 'center' }}>
                <div className="crew-emblem" style={{ fontSize: '4rem', marginBottom: '1rem' }}>🏴‍☠️</div>
                <h3>Want to form a Crew?</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>Register your team to get access to custom liveries and a private discord channel.</p>
                <button className="btn btn-primary">Register Crew</button>
              </div>
            </div>
          </div>
        </div>

        <div className="tuning-section glass-panel" style={{ marginTop: '10rem', padding: '4rem' }}>
          <div className="section-header text-center">
            <h2 className="hero-subtitle">Technical</h2>
            <h1 className="section-title">Vehicle <span className="text-red">Tuning</span></h1>
            <p className="hero-desc" style={{ maxWidth: '800px', margin: '0 auto 3rem' }}>Our advanced tuning system allows for deep customization of your vehicle's performance and handling.</p>
          </div>
          <div className="divine-grid">
            <div className="tuning-item">
              <h3 className="text-red">Stage 1-4</h3>
              <p>Engine and Turbo upgrades to push your BHP to the limit.</p>
            </div>
            <div className="tuning-item">
              <h3 className="text-red">NOS Systems</h3>
              <p>Nitrous Oxide injection for that extra kick on the straights.</p>
            </div>
            <div className="tuning-item">
              <h3 className="text-red">Drift Kits</h3>
              <p>Custom suspension and tire setups for perfect sideways action.</p>
            </div>
            <div className="tuning-item">
              <h3 className="text-red">Cosmetics</h3>
              <p>Hundreds of custom wheels, liveries, and body parts.</p>
            </div>
          </div>
        </div>

        <div className="how-to-join" style={{ marginTop: '10rem', textAlign: 'center' }}>
          <div className="glass-panel" style={{ padding: '4rem' }}>
            <h2 className="hero-subtitle reveal-text">Get Involved</h2>
            <h1 className="section-title reveal-text">How to <span className="text-red">Join</span></h1>
            <p className="hero-desc reveal-text" style={{ maxWidth: '700px', margin: '0 auto 2rem' }}>
              Racing isn't just about speed; it's about connections. Find a crew, prove your worth, and get invited to the secret meets.
            </p>
            <div className="hero-buttons" style={{ justifyContent: 'center' }}>
              <a href="#" className="btn btn-primary btn-lg">Find a Crew</a>
              <a href="#" className="btn btn-glass btn-lg">View Rules</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Racing;
