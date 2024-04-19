import React from 'react'
import '../App.css'
import './styles/HeroSection.css'

function HeroSection() {
  return (
    <div className='hero-container'>
      <img src='/images/home_img.jpg' alt='Test Image' />
      <h1>Welcome to Clarity Mind</h1>
      <p>Better Mental Health Starts Here!</p>
    </div>
  )
}

export default HeroSection;
