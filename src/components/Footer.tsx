import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer-modern" style={{ paddingBottom: '2rem' }}>
      <div className="container">
        <div className="footer-modern-content glass-panel-red" style={{ padding: '1rem 3rem', borderRadius: '100px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div className="footer-brand-mini" style={{ fontWeight: 'bold', letterSpacing: '2px' }}>
            APEXON <span className="text-red">RP</span>
          </div>
          <div className="footer-copyright-mini" style={{ fontSize: '0.7rem', opacity: 0.6 }}>
            &copy; {new Date().getFullYear()} Apexon Roleplay. Not affiliated with Rockstar Games.
          </div>
          <div className="footer-links-mini" style={{ display: 'flex', gap: '1.5rem', fontSize: '0.8rem', textTransform: 'uppercase', fontWeight: 'bold' }}>
            <a href="#" className="nav-link">Discord</a>
            <a href="#" className="nav-link">Terms</a>
            <a href="#" className="nav-link">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
