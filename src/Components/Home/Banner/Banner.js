import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../Images/Banner/Banner1.jpg'
import banner2 from '../../../Images/Banner/banner2.jpg'
import banner3 from '../../../Images/Banner/banner3.jpeg'
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <Carousel className='caurosel'>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Three Piece Collection</h3>
                        <p> Buy bangladeshi salwar kameez design 2022 & fashionable three piece at ... Three Piece For Women Ladies Collection Shalwar Kameez.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption className='caption'>
                        <h3>Brand New Ladies Gawn Collection</h3>
                        <p>Welcome to the Gown World BD. Here you can get exclusive dresses and gorgeous wearable. You can have awesome collections of ready-made dresses from us.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Collections For Kids</h3>
                        <p>Choose from a range of classy party wear for your little ones from Aarong. Dressy Wear for your little one at their favorite parties.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;