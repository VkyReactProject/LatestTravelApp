import React from 'react';
import { useParams } from 'react-router-dom';
import './packageDetails.screen.css';
import { data as datas } from '../../data/datas.js';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import { FaStar } from "react-icons/fa6";
import PackgeDetailsBookSlot from '../../components/PackageDetailsBookSlotComponent/packageDetails.bookSlot.component.jsx';
import { FaIndianRupeeSign } from "react-icons/fa6";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

const PackageDetailsScreen = () => {
  const { id } = useParams();
  const Id = parseInt(id)

  const result = datas.find((item) => item.id === Id);
  const importAll = (r) => r.keys().map(r);
  const images = importAll(require.context('../../assets/Card-Images', false, /\.(png|jpe?g|svg)$/));


  return (
    <div className='Package-Main-Container'>
      <div className='Package-Secondary-Container'>
        <Carousel className='Carousel'>
          {images.map((image, index) => (
            <Carousel.Item className='img-carousel'>
              <img key={index} src={image} alt={`Image ${index}`} />

            </Carousel.Item>

          ))}

        </Carousel>

        <div className='Card-Container'>
          <Card className='Card-Header'>
            <Card.Body>
              <Card.Title>{result.cardName}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted" id='Card-Rating'>
                <div><FaStar /></div>
                <div className='Card-Rating-text'>{result.rating}</div>
              </Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Card.Text>

                {result.cardDec}
              </Card.Text>

            </Card.Body>
          </Card>



        </div>
        <div className='PackageDetailsContainer'>

          <Card className='PackagePlace-Details'>
            <Card.Header className='package-card-header'>Aminities </Card.Header>
            <Timeline position="alternate-reverse">
              {
                result.viewpoints.map((element) => {
                  return (
                    <>

                      {/* <Card.Text >{element}</Card.Text> */}


                      <TimelineItem>
                        <TimelineSeparator>
                          <TimelineDot />
                          <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>{element}</TimelineContent>
                      </TimelineItem>

                    </>
                  );
                })
              }
            </Timeline>
          </Card>
        </div>
      </div>
      <div className='package-slot-div'>
        <PackgeDetailsBookSlot  packageID = {result.id} id="package-Slot" />
      </div>

    </div>
  )
}

export default PackageDetailsScreen;
