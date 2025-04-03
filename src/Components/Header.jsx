import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullScreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullScreen(false);
      }
    }
  };
  return (
    <header className="header fixed top-0 left-0 right-0 z-10 bg-transparent backdrop-blur-md" 
      style={{ background: 'rgba(255,255,255,0.1)', height: '15vh', borderBottom: '2px solid rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)' }}>
      
      <NavLink to="/" className="logo"></NavLink>
      
      <nav className="navbar pt-3">
        <NavLink to="/" exact="true" activeClassName="active" style={{ "--i": 1 }}>Home</NavLink>
        {/* <NavLink to="/about" activeClassName="active" style={{ "--i": 2 }}>Uniqee</NavLink> */}
        <NavLink to="/whyus" activeClassName="active" style={{ "--i": 3 }}>Diets</NavLink>
        <NavLink to="/contact" activeClassName="active" style={{ "--i": 4 }}>ContactUs</NavLink>
        <NavLink to="/profile" activeClassName="active" style={{ "--i": 5 }}>Profile</NavLink>
        <NavLink to="/sports" activeClassName="active" style={{ "--i": 6 }} className="absolute right-24">SportsMode</NavLink>

        {/* Fullscreen Button */}
        <button 
          onClick={handleFullScreen} 
          className={`full-screen-btn ${isFullScreen ? 'active' : ''}`} 
          style={{
            position: 'absolute',
            right: '10px',
            top: '20px',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            background: 'rgba(255, 165, 0, 0.8)', // Orangish color
            border: 'none',
            cursor: 'pointer',
            transition: 'transform 0.3s ease',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
          <span style={{ color: '#fff', fontSize: '20px' }}>⛶</span>
        </button>
      </nav>
    </header>
  );
}

export default Header;
