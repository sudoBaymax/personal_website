import Header from './Header'; 
import HeroSection from './HeroSection'; 
import FeaturesSection from './FeaturesSection'; 
import Footer from './Footer'; 
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <div className="wrapper">
      <NavBar /> 
      <LandingPage />
    </div>
  )
}

export default App;
