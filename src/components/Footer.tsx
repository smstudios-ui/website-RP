import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer-modern">
      <div className="container">
        <div className="footer-modern-content glass-panel">
          <div className="footer-brand-mini">
            INFERNO <span className="text-red">RP</span>
          </div>
          <div className="footer-copyright-mini">
            &copy; {new Date().getFullYear()} Inferno Roleplay. Not affiliated with Rockstar Games.
          </div>
          <div className="footer-links-mini">
            <a href="#">Discord</a>
            <span className="separator">•</span>
            <a href="#">Terms</a>
            <span className="separator">•</span>
            <a href="#">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
