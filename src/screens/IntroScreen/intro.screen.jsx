import React from 'react';

import { useState } from 'react';
import './intro.screen.css'; // Import the default CSS styles
import PhoneInput from 'react-phone-number-input';
import BgImage from '../../assets/BgIntro.jpg'
import BaseImage from'../../assets/pexels-max-avans-5092885.jpg'
import AnimatedTsx from './AnimatedIntro/animation.tsx';
import BasicAnimation from './AnimatedIntro/BasicAnimation.tsx';
import CardAnimation from './AnimatedIntro/animation.card.tsx';


const IntroScreen = () => {

  const bookingDetails = {
    departureLocation: 'Bangalore Bellandur',
    departureTime: '22:00',
    departureDate: 'Fri, 12 Apr',
    arrivalLocation: 'Thanjavur New Bus Stand',
    arrivalTime: '06:25',
    arrivalDate: 'Sat, 13 Apr',
    busServiceName: 'Dream Line Travels Pvt Ltd',
    seatNumber: 'U14',
    passengerName: 'Srinivas',
    status: 'Completed'
  };

  return (

    <div className='Intro-Container'>
      {/* <Ticket bookingDetails={bookingDetails} /> */}
      
      {/* <div className='img-container'>
        <img src={BaseImage} alt="Image" />
      </div> */}
      <div className='text-Container'> 
      {/* <AnimatedTsx /> */}
      {/* <BasicAnimation/> */}
      {/* <CardAnimation/> */}
      </div>
    
    </div>

  )
}

export default IntroScreen;
