import React, { useEffect, useState } from 'react';
import '../styles/Nav.css';
import Logo from "../assets/logo/logo.png";
import { useTheme } from '../context/ThemeContext';

function NavBar() {
    const [scrolling, setScrolling] = useState(false);
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
                <img src={Logo} alt="Logo" />
            </div>
            <div className="menu">
                <a href="#about" onClick={(e) => handleScrollTo(e, 'about')}>About</a>
                <a href="#contact" onClick={(e) => handleScrollTo(e, 'contact')}>Contact</a>
                <a className="resume-button" href="http://localhost:5000/resume" target="_blank" rel="noopener noreferrer">Resume</a>
                <button className="theme-toggle" onClick={toggleTheme}>
                    {theme === 'light' ? '🌙' : '☀️'}
                </button>
            </div>
        </nav>
    );
}

export default NavBar;
