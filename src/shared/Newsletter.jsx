import React from 'react';
import './newsletter.css';

import { Container, Row, Col } from 'reactstrap';
import maleTourists from '../assets/images/male-tourist.png';

const Newsletter = () => {
  return <section className='newsletter'>
    <Container>
        <Row>
            <Col lg='6'>
                <div className="newsletter__con">
                    <h2>Subscribe now to get useful traveling information.</h2>

                    <div className="newsletter__input">
                        <input type="email" placeholder='Enter your email'/>
                        <button className='btn newsletter__btn'>Subscribe</button>
                    </div>

                    <p> As a bridge between people and places, tourism offers the opportunity to create cherished memories, 
                        forge connections, and gain insights into the rich tapestry of our world.</p>
                </div>
            </Col>
            <Col lg='6'>
                <div className="newsletter__img">
                    <img src={maleTourists} alt="" />
                </div>
            </Col>
        </Row>
    </Container>
  </section>
}

export default Newsletter
