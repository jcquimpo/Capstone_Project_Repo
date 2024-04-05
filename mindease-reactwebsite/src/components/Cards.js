import React from 'react';
import CardItem from './CardItem';
import './styles/Cards.css';

function Cards() {
  return (
    <div className='cards'>
      <h1>These are cards</h1>
      <div className='cards_container'>
        <div className='cards_wrapper'>
            <ul className='cards_items'>
                <CardItem src='images/test_card_img.jpg' text='Sadge' label='a card' path='/'></CardItem>
                <CardItem src='images/test_card_img2.jpg' text='Poggers' label='another card' path='/'></CardItem>
                <CardItem src='images/test_card_img3.jpg' text='Hypers' label='and another card' path='/'></CardItem>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
