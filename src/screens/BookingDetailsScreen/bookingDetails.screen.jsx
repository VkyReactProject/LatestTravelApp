import React from 'react'
import { IoMdClose } from "react-icons/io";
import { useNavigate, useParams } from 'react-router-dom';
import {data as datas} from '../../data/datas.js'
import TicketElement from '../Ticket.Element/ticketElement.jsx';
import './bookingDetails.screen.css'



const BookingDetails = () => {

    const {id} = useParams();
    const ID = parseInt(id);
    const result = datas.find((item) => item.id === ID);
    const navigate = useNavigate();
    const navigateToHome = ()=>{
      navigate('/')
    }
  return (
    <div className='bookingDetails-Main-Container'> 
      <div className="booking-detials-header-container">
        <div className="booking-details-pageClose">
          <IoMdClose onClick={navigateToHome}/>
        </div>
        <div className="booking-details-header-text">
          <p>Booking Details</p>
        </div>
      </div>
      <div className="booking-details-body-container">
        <div className="booking-details-body-wrap">
        <div className="booking-details-status-container">
          <p>Dear User,  Your Booking has been successfully submited.</p>
        
          <p>Please be informed : our customer service person will contact you shortly..!</p>
        </div>
        </div>
        <div className="booking-ticket-container">
          <TicketElement id = {result.id}/>
        </div>
        <div className="booking-detials-contact-card-container">

        </div>
      </div>
    </div>
  )
}

export default BookingDetails
