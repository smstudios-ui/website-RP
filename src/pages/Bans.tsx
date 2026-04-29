import React, { useEffect } from 'react';
import gsap from 'gsap';

const Bans: React.FC = () => {
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
          <h2 className="hero-subtitle">Justice</h2>
          <h1 className="hero-title">Ban <span className="text-red">List</span></h1>
        </div>
      </section>
      
      <section className="container" style={{ padding: '8rem 0' }}>
        <div className="table-responsive glass-panel">
          <table className="bans-table">
            <thead>
              <tr>
                <th>Player</th>
                <th>Reason</th>
                <th>Duration</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>PlayerOne</td>
                <td>RDM in Greenzone</td>
                <td>3 Days</td>
                <td>2026-04-28</td>
              </tr>
              <tr>
                <td>ToxicUser</td>
                <td>Hate Speech</td>
                <td>Permanent</td>
                <td>2026-04-27</td>
              </tr>
              <tr>
                <td>RuleBreaker</td>
                <td>FailRP / Combat Log</td>
                <td>7 Days</td>
                <td>2026-04-25</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Bans;
