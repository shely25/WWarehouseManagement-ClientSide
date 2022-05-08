import React from 'react';
import './NotFound.css'
import image from '../Images/not found.webp'

const NotFound = () => {
    return (
        <div className='d-flex justify-content-center m-5'>
            <img src={image} alt="" />
        </div>
    );
};

export default NotFound;