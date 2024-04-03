import React from 'react'
import '../App.css'
import { Button } from './Button'
import './HeroSection.css'

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-2.mp4' autoPlay loop muted />
      <h1>Welcome to MindEase</h1>
      <p>Better Mental Health Starts Here!</p>
      <div className='hero-btns'>
        <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>GET STARTED</Button>
      </div>
      <div className='hero-btns'>
        <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>Schedule a Meeting Today<i className='far fa-play-circle'/></Button>
      </div>
    </div>
  )
}

export default HeroSection;
