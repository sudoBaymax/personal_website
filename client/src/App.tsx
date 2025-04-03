import React from 'react';
import TerminalSection from './components/TerminalSection'; // Import the new terminal section
import NavBar from './components/NavBar';
import LandingPage from './pages/LandingPage';
import Footer from './components/Footer'; // Import the footer component
import { ThemeProvider } from './context/ThemeContext';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <div className="wrapper">
        <NavBar /> 
        <div className="content-container">
          <TerminalSection /> {/* Add the terminal section to the main layout */}
          <LandingPage />
        </div>
        <Footer /> {/* Add the footer to the main layout */}
      </div>
    </ThemeProvider>
  );
}

export default App;
