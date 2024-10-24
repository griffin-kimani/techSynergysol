import React, { useState, useEffect } from 'react';
import logo from '../../assets/pexels.jpg';
import './navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="section">
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-left">
          <div className="navbar-logo">
            <img src={logo} alt="Logo" />
          </div>
          <ul className="home-link">
            <li><a href="#home">Home</a></li>
          </ul>
        </div>

        <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <li><a href="#home">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#footer">Contact Us</a></li>
          <li><a href="#talktous">Talk to Us</a></li>
          <li><a href="#portal">Portal</a></li>
        </ul>
      </nav>

      <div className="hero-text">
        <h1>techSynergy Solutions</h1>
        <p>Your Trusted Technology Partner</p>
        <a href="#learn-more" className="cta-button">Learn More</a>
      </div>
    </div>
  );
};

export default Navbar;
