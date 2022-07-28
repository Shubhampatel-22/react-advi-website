import React from 'react'
import Carditem from './Carditem'
import './Cards.css'

function Cards() {
    console.log('cards')
  return (
    <div className='cards'>
        <h1>Check out these EPIC Destinations!</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <Carditem
                    src='images/img-9.jpg'
                    text='Explore the hidden waterfall deep inside Amazon Jungle'
                    label='Adventure'
                    path='/services'
                    />
                    <Carditem
                    src='images/img-4.jpg'
                    text='Travel through seas in a priavte yatch'
                    label='Luxury'
                    path='/services'
                    />
                </ul>
                <ul className='cards__items'>
                    <Carditem
                    src='images/img-5.jpg'
                    text='Explore this Mysterious temple in india '
                    label='Mystery'
                    path='/services'
                    />
                    <Carditem
                    src='images/img-6.jpg'
                    text='Enjoy this river rafting'
                    label='Adrenaline'
                    path='/products'
                    />
                    <Carditem
                    src='images/img-7.jpg'
                    text='Explore this Heaven on earth!!'
                    label='Adventure'
                    path='/sign-up'
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards