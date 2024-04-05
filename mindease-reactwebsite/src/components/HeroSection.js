import React from 'react'
import '../App.css'
import { Button } from './Button'
import './styles/HeroSection.css'

function HeroSection() {
  return (
    <div className='hero-container'>

      {/* Uncomment which ever you choose to have - video or img */}
      {/* <video src='/videos/video-2.mp4' autoPlay loop muted/> */}

      <img src='/images/mindease_img1.jpg' alt='Test Image' />
      <h1>Welcome to MindEase</h1>
      <p>Better Mental Health Starts Here!</p>
      <div className='hero-btns'>
        <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>GET STARTED</Button>
      </div>
    </div>
  )
}

export default HeroSection;
