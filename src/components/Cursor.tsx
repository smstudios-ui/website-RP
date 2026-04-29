import React, { useEffect } from 'react';
import gsap from 'gsap';

const Cursor: React.FC = () => {
  useEffect(() => {
    const cursor = document.querySelector('.custom-cursor') as HTMLElement;
    const follower = document.querySelector('.custom-cursor-follower') as HTMLElement;

    const onMouseMove = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: 'power2.out'
      });
      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: 'power2.out'
      });

      // Update mouse position for card glow effects
      const cards = document.querySelectorAll('.feature-card');
      cards.forEach((card: any) => {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        card.style.setProperty('--mouse-x', `${x}%`);
        card.style.setProperty('--mouse-y', `${y}%`);
      });
    };

    const onMouseEnterLink = () => {
      gsap.to(cursor, { scale: 2, mixBlendMode: 'normal' });
      gsap.to(follower, { opacity: 0 });
    };

    const onMouseLeaveLink = () => {
      gsap.to(cursor, { scale: 1, mixBlendMode: 'difference' });
      gsap.to(follower, { opacity: 1 });
    };

    window.addEventListener('mousemove', onMouseMove);
    
    // Initial attach for static elements
    const attachListeners = () => {
      const links = document.querySelectorAll('a, button');
      links.forEach(link => {
        link.addEventListener('mouseenter', onMouseEnterLink);
        link.addEventListener('mouseleave', onMouseLeaveLink);
      });
    };

    attachListeners();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <>
      <div className="custom-cursor"></div>
      <div className="custom-cursor-follower"></div>
    </>
  );
};

export default Cursor;
