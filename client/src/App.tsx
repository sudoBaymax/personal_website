import React from 'react';
import NavBar from './components/NavBar';
import LandingPage from './pages/LandingPage';
import Terminal from './components/Terminal';
import './App.css';

function App() {
  return (
    <div className="wrapper">
      <NavBar /> 
      <div className="content-container">
        <LandingPage />
        <Terminal />
      </div>
    </div>
  );
}

export default App;