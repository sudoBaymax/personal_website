import React, { useState } from 'react';
import './AboutSection.css';

import glanceLogo from '../assets/app-logos/glance.png';
import roomyLogo from '../assets/app-logos/roomy.png';
import medaiLogo from '../assets/app-logos/medai.png';
import spearphishLogo from '../assets/app-logos/spearphish.png';

const slides = [
  {
    type: 'project',
    title: 'Glance',
    image: glanceLogo,
    description: 'Cofounded Glance, a project to elevate interactions.',
  },
  {
    type: 'project',
    title: 'Roomy',
    image: roomyLogo,
    description: 'Finding the perfect roommates in college is rough, which is why we built Roomy, a tinder-like interface which allows you to find the perfect match.',
  },
  {
    type: 'project',
    title: 'Medai',
    image: medaiLogo,
    description: 'Medai project logo and description.',
  },
  {
    type: 'project',
    title: 'Spearphish',
    image: spearphishLogo,
    description: 'Spearphish project logo and description.',
  },
];

const AboutSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Calculate the transform offset to center the current slide
  const slideWidth = 100 / slides.length;
  const translateValue = currentIndex * slideWidth;

  return (
    <section className="about-section">
      <h2>About Me</h2>
      <p>Explore my blogs, projects, and pictures.</p>
      <div className="slider-container">
        <button className="nav-button left" onClick={prevSlide}>&lt;</button>
        <div className="slider-window">
          <div
            className="slider-track"
            style={{
              transform: `translateX(-${translateValue}%)`,
              width: `${slides.length * 100}%`
            }}
          >
            {slides.map((slide, index) => (
              <div 
                key={index} 
                className={`slide ${index === currentIndex ? 'active' : ''}`}
                style={{ width: `${slideWidth}%` }}
              >
                <div className="slide-content">
                  <img src={slide.image} alt={slide.title} />
                  <h3>{slide.title}</h3>
                  <p>{slide.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button className="nav-button right" onClick={nextSlide}>&gt;</button>
      </div>
      
      <div className="slide-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`indicator ${currentIndex === index ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default AboutSection;