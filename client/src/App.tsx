import React from 'react';
import TerminalPage from './pages/TerminalPage';
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
          <TerminalPage />
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;