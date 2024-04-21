import React from 'react';
import '../App.css';
import './styles/HeroSection.css';

export default function HeroSection({ imageUrl, title, subtitle }) {
  return (
    <div className='hero-container'>
      <img src={imageUrl} alt='Home Image' />
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
}

