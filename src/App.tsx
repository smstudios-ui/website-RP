import React, { useState, useCallback } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Preloader from './components/Preloader';

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
        <Navbar />
        <Home isLoaded={isSiteVisible} />
        <Footer />
      </div>
    </>
  );
};

export default App;
