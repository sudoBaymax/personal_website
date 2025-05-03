import React from 'react';
import './Footer.css'; // Import styles for the footer

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Joseph Jatou. All rights reserved.</p>
      <div className="social-links">
        <a href="https://linkedin.com/in/josephjatou" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/sudoBaymax" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </footer>
  );
};

export default Footer;
