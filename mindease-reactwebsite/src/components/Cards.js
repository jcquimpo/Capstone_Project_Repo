import React from 'react';
import CardItem from './CardItem';
import './styles/Cards.css';

function Cards() {
  return (
    <div className='cards'>
      <h1>Looking for a Specific Kind of Therapy?</h1>
      <div className='cards_container'>
        <div className='cards_wrapper'>
            <ul className='cards_items'>
                <CardItem src='images/default_pfp.jpg' text='Therapy for kids <10yrs' label='a card' path='/'></CardItem>
                <CardItem src='images/default_pfp.jpg' text='Therapy for teens' label='a card' path='/'></CardItem>
                <CardItem src='images/default_pfp.jpg' text='Therapy for adults' label='a card' path='/'></CardItem>
                <CardItem src='images/default_pfp.jpg' text='Therapy for the elderly' label='a card' path='/'></CardItem>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
