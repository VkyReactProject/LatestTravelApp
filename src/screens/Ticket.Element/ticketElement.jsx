import React from 'react';
import './Ticket.css';
import {data as datas} from '../../data/datas.js';

const TicketElement = ({id}) => {
  const ID= parseInt(id);
  const result = datas.find((item) => item.id === ID);

  return (
    
    <div className='ticket-Container'> 
    <div className="ticket">
      <div className="ticket-section">
        <div className="ticket-location">
          <span>{result.id}</span>
          <span>{result.price}</span>
          <span>{result.rating}</span>
        </div>
        <div className="ticket-status">
          {result.rating}
        </div>
        <div className="ticket-location">
          <span>{result.cardName}</span>
          <span>{result.price}</span>
          <span>{result.rating}</span>
        </div>
      </div>
      <div className="ticket-section">
        <div className="ticket-service">
         
          Contact: {"+91 9989879990"}
        </div>
        <div className="ticket-seat">
        {result.cardDec}
        </div>
      </div>
      
      <div className="cut-out">
      <span class="semi-circle"></span>
      <div className='dashComponent'> 

      </div>
      <span class="semi-circle-reverse"></span>
      </div>
      <div className='Space-Container'></div>
      <button className="ticket-details-button">
        Ticket details
      </button>
    </div>
    </div>

   
  )
}

export default TicketElement