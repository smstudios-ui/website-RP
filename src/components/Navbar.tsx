import React, { useEffect, useState, useRef } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const linksRef = useRef<{ [key: string]: HTMLAnchorElement | null }>({});


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'journey', 'factions', 'rules'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 250 && rect.bottom >= 250) {
            setActiveTab(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);




  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'journey', label: 'Journey' },
    { id: 'factions', label: 'Factions' },
    { id: 'rules', label: 'Rules' }
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-links-container">
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            ref={(el) => { linksRef.current[link.id] = el; }}
            className={`nav-link ${activeTab === link.id ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' });
              setActiveTab(link.id);
            }}
          >
            {link.label}
          </a>
        ))}
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
        <a 
          href="#home" 
          className="btn-nav-join"
        >
          Join Now
        </a>
      </div>

    </nav>
  );
};

export default Navbar;
