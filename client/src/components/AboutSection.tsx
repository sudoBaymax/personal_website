import React, { useState } from 'react';
import './AboutSection.css';

const slides = [
  {
    type: 'project',
    title: 'Glance',
    image: '../client/src/assets/app-logos/glance.png',
    description: 'Cofounded Glance, a project to elevate interactions.',
  },
  {
    type: 'project',
    title: 'Roomy',
    image: '/client/src/assets/app-logos/roomy.png',
    description: 'Roomy project logo and description.',
  },
  {
    type: 'project',
    title: 'Medai',
    image: '/client/src/assets/app-logos/medai.png',
    description: 'Medai project logo and description.',
  },
  {
    type: 'project',
    title: 'Spearphish',
    image: '/client/src/assets/app-logos/spearphish.png',
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

  return (
    <section className="about-section">
      <h2>About Me</h2>
      <p>Explore my blogs, projects, and pictures.</p>
      <div className="slider-container">
        <button className="nav-button left" onClick={prevSlide}>&lt;</button>
        <div className="slider-window">
          <div
            className="slider-track"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="slide">
                <img src={slide.image} alt={slide.title} />
                <h3>{slide.title}</h3>
                <p>{slide.description}</p>
              </div>
            ))}
          </div>
        </div>
        <button className="nav-button right" onClick={nextSlide}>&gt;</button>
      </div>
    </section>
  );
};

export default AboutSection;