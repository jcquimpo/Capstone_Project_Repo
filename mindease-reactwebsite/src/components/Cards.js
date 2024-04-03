import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
      <h1>This is a card</h1>
      <div className='cards_container'>
        <div className='cards_wrapper'>
            <ul className='cards_items'>
                <CardItem src='/' text='Image goes here' label='a card' path='/'></CardItem>
                <CardItem src='/' text='Another image goes here' label='another card' path='/'></CardItem>
                <CardItem src='/' text='And Another image goes here' label='and another card' path='/'></CardItem>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
