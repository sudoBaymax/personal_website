import React, { useEffect, useState } from 'react';
import '../styles/Nav.css';
import Logo from "../assets/logo/logo.png"; 

function NavBar() {
    const [scrolling, setScrolling] = useState(false);

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
                <a className="resume-button" href="https://jatou.ca/resume">Resume</a>
            </div>
        </nav>
    );
}

export default NavBar;
