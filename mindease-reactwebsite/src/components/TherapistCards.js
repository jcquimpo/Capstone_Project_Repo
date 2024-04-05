import React from 'react';
import CardItem from './CardItem';
import './styles/TherapistCards.css';

function TherapistCards() {
  return (
    <div className='therapist_cards'>
      <h1>These are therapist cards</h1>
      <div className='therapist_cards_container'>
        <div className='therapist_cards_wrapper'>
            <ul className='therapist_cards_items'>
                <CardItem src='images/test_card_img.jpg' text='Doctor Sad' label='a card' path='/'></CardItem>
                <CardItem src='images/test_card_img2.jpg' text='Doctor Affirmation' label='another card' path='/'></CardItem>
                <CardItem src='images/test_card_img3.jpg' text='Doctor Hype' label='and another card' path='/'></CardItem>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default TherapistCards
