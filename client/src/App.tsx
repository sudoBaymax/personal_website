import React from 'react';
import TerminalSection from './components/TerminalSection';
import NavBar from './components/NavBar';
import LandingPage from './pages/LandingPage';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <div className="wrapper">
        <div className="wrapper-nav">
          <NavBar />
        </div>
        <div className="content-container">
          <LandingPage />
          {/* <TerminalSection /> */}
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
