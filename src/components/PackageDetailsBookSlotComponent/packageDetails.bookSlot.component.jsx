import React from 'react'
import './packageDetails.bookSlot.component.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Fa5, FaIndianRupeeSign } from "react-icons/fa6";
import {data as datas} from '../../data/datas.js'
import { Link } from 'react-router-dom';

const PackageDetailsBookSlot = ({packageID }) => {

  var ID = parseInt(packageID );

  const result = datas.find((item) => item.id == ID);
  return (
    <div className='PackageDetailsBookSlot-Container'>
         <Card className='Card-Header-Package'>
        <Card.Body className='Card-Header-Package-Body'> 
        <Card.Text>
        <FaIndianRupeeSign />{result.price}
        </Card.Text>
                 
       
        <Link className="Btn-Header" to={`/bookingdetails/${result.id}`}>
        <Button className = "btn" variant="primary" size="lg">
          Book Slot
        </Button>
        </Link>
      </Card.Body>
    </Card>
    </div>
  )
}

export default PackageDetailsBookSlot;
