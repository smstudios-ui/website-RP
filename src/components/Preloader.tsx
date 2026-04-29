import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface PreloaderProps {
  onReveal: () => void;
  onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onReveal, onComplete }) => {
  const preloaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: onComplete
    });

    // 1. Shutter Opening Animation (Panels meeting in the middle)
    gsap.set('.panel-left', { xPercent: -100 });
    gsap.set('.panel-right', { xPercent: 100 });
    gsap.set('.loader-title', { opacity: 0, scale: 0.8 });

    tl.to('.preloader-panel', {
      xPercent: 0,
      duration: 1.2,
      ease: 'expo.inOut',
      force3D: true
    })
    .to('.loader-title', {
      opacity: 1,
      scale: 1,
      duration: 1.5,
      ease: 'power2.out',
      force3D: true
    }, "-=0.2")
    .to('.loader-title', {
      scale: 1.02,
      duration: 2,
      repeat: 1,
      yoyo: true,
      ease: 'sine.inOut'
    })
    .to('.loader-title', {
      opacity: 0,
      scale: 1.05,
      filter: 'blur(10px)',
      duration: 1,
      ease: 'power2.in',
      force3D: true
    })
    // 2. PAIRING: Start revealing the site EXACTLY as panels start opening
    .to('.panel-left', {
      xPercent: -100,
      duration: 1.8, // Slightly slower for more cinematic pairing
      ease: 'expo.inOut',
      force3D: true,
      onStart: onReveal // TRIGGER SITE REVEAL HERE
    }, "-=0.3")
    .to('.panel-right', {
      xPercent: 100,
      duration: 1.8,
      ease: 'expo.inOut',
      force3D: true
    }, "<")
    .to('.preloader', {
      opacity: 0,
      duration: 0.8,
      ease: 'power2.inOut',
      pointerEvents: 'none'
    }, "-=0.8");

    return () => {
      tl.kill();
    };
  }, [onReveal, onComplete]);

  return (
    <div className="preloader" ref={preloaderRef}>
      <div className="preloader-panel panel-left"></div>
      <div className="preloader-panel panel-right"></div>
      
      <div className="preloader-inner">
        <div className="loader-glow"></div>
        <h1 className="loader-title">
          APEXON <span className="text-red">RP</span>
        </h1>
      </div>
    </div>
  );
};

export default Preloader;
