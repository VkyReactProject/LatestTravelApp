import React from 'react'
import { data, dataOne } from "../data/datas.js"
import "../components/card.component.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import StarImg from '../assets/blackStar.svg';
import { Link } from 'react-router-dom';
import { FaStar } from "react-icons/fa6";
// import {useNavigation} from 'react-router-dom';
import {  FaIndianRupeeSign } from "react-icons/fa6";
const CardComponent = () => {
    // const navigate = useNavigation();

    // const handleClick = (id)=>{

    //     navigate('/package',id)
    // }

    return (
        <div className='card-container'>

            {data.map((d) => {

                return (
                    <>
                        <Link className="Card-Header" to={`package/${d.id}`}>


                            <Card   >
                                <Card.Body>
                                    <Card.Title>{d.cardName}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted" id='Card-Rating'>
                                        <div><FaStar/></div>
                                        <div className='Card-Rating-text'>{d.rating}</div>
                                    </Card.Subtitle>
                                    <Card.Text>
                                        {d.cardDec}
                                    </Card.Text>
                                    <Card.Link href="#" className='card-price-container'>
                                    <div className='Card-Rs'><FaIndianRupeeSign />
                                    </div>
                                    <div className='Card-price'>
                                        {d.price}
                                        </div>
                                    </Card.Link>

                                </Card.Body>
                            </Card>
                        </Link>


                    </>
                )
            })}

        </div>
    )
}

export default CardComponent
