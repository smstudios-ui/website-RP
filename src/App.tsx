import React, { useState, useCallback, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Racing from './pages/Racing';
import Gallery from './pages/Gallery';
import Apply from './pages/Apply';
import Rules from './pages/Rules';
import Public from './pages/Public';
import Bans from './pages/Bans';
import Staff from './pages/Staff';
import Preloader from './components/Preloader';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  const [isPreloaderActive, setIsPreloaderActive] = useState(true);
  const [isSiteVisible, setIsSiteVisible] = useState(false);

  // Stable callbacks to prevent Preloader from re-running its effect on every App render
  const handleReveal = useCallback(() => {
    setIsSiteVisible(true);
  }, []);

  const handleComplete = useCallback(() => {
    setIsPreloaderActive(false);
  }, []);

  return (
    <>
      {isPreloaderActive && (
        <Preloader 
          onReveal={handleReveal} 
          onComplete={handleComplete} 
        />
      )}
      
      <div 
        className="main-wrapper" 
        style={{ 
          opacity: isSiteVisible ? 1 : 0, 
          visibility: isSiteVisible ? 'visible' : 'hidden',
          transition: 'opacity 1.2s ease'
        }}
      >
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home isLoaded={isSiteVisible} />} />
          <Route path="/racing" element={<Racing />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/public" element={<Public />} />
          <Route path="/bans" element={<Bans />} />
          <Route path="/staff" element={<Staff />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;
