import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/racing', label: 'Racing' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/apply', label: 'Apply' },
    { path: '/rules', label: 'Rules' },
    { path: '/public', label: 'Public' },
    { path: '/bans', label: 'Bans' },
    { path: '/staff', label: 'Staff' }
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-links-container">
        {navLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            {link.label}
          </NavLink>
        ))}
      </div>

      <div className="nav-search-container">
        <div className="search-box">
          <span className="search-icon">🔍</span>
          <input type="text" placeholder="Search..." className="search-input" />
        </div>
      </div>

      <div className="nav-actions">
        <a
          href="https://discord.gg/example"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-nav-discord"
        >
          <span>💬</span> Discord
        </a>
        <NavLink
          to="/apply"
          className="btn-nav-join"
        >
          Join Now
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
