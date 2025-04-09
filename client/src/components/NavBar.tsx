import React, { useEffect, useState } from 'react';
import '../styles/Nav.css';
import LogoDark from "../assets/logo/logo.png";
import LogoLight from "../assets/logo/logo-light.png";
import { useTheme } from '../context/ThemeContext';
import { Menu } from 'lucide-react';

function NavBar() {
    const [scrolling, setScrolling] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => setScrolling(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleScrollTo = (event: React.MouseEvent<HTMLAnchorElement>, target: string) => {
        event.preventDefault();
        const element = document.getElementById(target);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className={`navbar ${scrolling ? 'scrolled' : ''}`}>
            <div className="logo">
                <img src={theme === 'dark' ? LogoLight : LogoDark} alt="Logo" />
            </div>
            
            <button 
                className="hamburger"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
            >
                <Menu size={24} />
            </button>

            <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
                <a href="#about" onClick={(e) => { handleScrollTo(e, 'about'); setIsMenuOpen(false); }}>About</a>
                <a href="#contact" onClick={(e) => { handleScrollTo(e, 'contact'); setIsMenuOpen(false); }}>Contact</a>
                <a className="resume-button" id="resume-button" href="http://localhost:5000/resume" target="_blank" rel="noopener noreferrer">Resume</a>
                <button className="theme-toggle" onClick={toggleTheme}>
                    {theme === 'light' ? '🌙' : '☀️'}
                </button>
            </div>
        </nav>
    );
}

export default NavBar;
