import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
      <h1>These are cards</h1>
      <div className='cards_container'>
        <div className='cards_wrapper'>
            <ul className='cards_items'>
                <CardItem src='images/test_card_img.jpg' text='sadge' label='a card' path='/'></CardItem>
                <CardItem src='images/test_card_img2.jpg' text='poggers' label='another card' path='/'></CardItem>
                <CardItem src='images/test_card_img3.jpg' text='hypers' label='and another card' path='/'></CardItem>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
