import React, { useState } from 'react';
import './SlideshowComponent.css';

import glanceLogo from '../assets/app-logos/glance.png';
import roomyLogo from '../assets/app-logos/roomy.png';
import medaiLogo from '../assets/app-logos/medai.png';
import spearphishLogo from '../assets/app-logos/spearphish.png';

const slides = [
  {
    type: 'project',
    title: 'Glance',
    image: glanceLogo,
    description: 'Pinpointing the right eyewear is one of the most tedious tasks in the world! Thousands of options at so many different prices with so many levels of quality, what do I choose? We built Glance to solve this problem through eyewear recommendations, virtual-try-ons, and an-in-built hype system',
  },
  {
    type: 'project',
    title: 'Roomy',
    image: roomyLogo,
    description: 'Roomy is a Tinder-style mobile app that helps university students find ideal roommates by swiping on profiles based on shared preferences. Built with the MERN stack and React Native, Roomy uses a smart matching algorithm to connect users based on lifestyle compatibility—covering everything from room type to faith. With a sleek interface, AI-driven recommendations in the pipeline, and in-app chat, Roomy makes finding a roommate easier, faster, and more fun.',
  },
  {
    type: 'project',
    title: 'Medai',
    image: medaiLogo,
    description: 'MedAI is a medical image segmentation benchmarking pipeline that evaluates top models on DICOM and NIfTI data from various imaging modalities. It uses Apache Airflow for preprocessing, PyTorch and MONAI for training, and standard metrics for evaluation. The goal is to build a self-learning AI system to annotate patient scans and create a large anonymized medical image dataset.',
  },
  {
    type: 'project',
    title: 'Spearphish',
    image: spearphishLogo,
    description: 'Spearphish is the Chrome extension that detects active phishing threats by analyzing page text and context, inspecting suspicious URLs, and monitoring for stealthy credential-sniffing techniques—even when attackers mimic legit sites. Stay safe from both obvious and covert scams.',
  },
];

const SlideshowComponent = () => {
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

export default SlideshowComponent;