import React, { useState, useEffect } from 'react';
import TerminalPage from './pages/TerminalPage';
import NavBar from './components/NavBar';
import LandingPage from './pages/LandingPage';
import Footer from './components/Footer';
import EmailPopup from './components/Email-Popup';
import { ThemeProvider } from './context/ThemeContext';
import './App.css';

function App() {
  const [showEmailPopup, setShowEmailPopup] = useState(false);

  useEffect(() => {
    // Show the email popup when the component mounts (user enters the website)
    setShowEmailPopup(true);
  }, []);

  const handleClosePopup = () => {
    setShowEmailPopup(false);
  };

  const sendIntroEmail = () => {
    
  }

  return (
    <ThemeProvider>
      <div className="wrapper">
        <div className="wrapper-nav">
          <NavBar />
        </div>
        <div className="content-container">
          <LandingPage />
          <TerminalPage />
        </div>
        <Footer />
        {showEmailPopup && <EmailPopup onClose={handleClosePopup} />}
      </div>
    </ThemeProvider>
  );
}

export default App;
