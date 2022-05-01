import React from 'react';
import './Logo.css'
import logo from '../../../Images/logo/logo.webp'

const Logo = () => {
    return (
        <div className='text-center my-5' >
            <h1 className='header'>WELCOME TO   <img src={logo} alt="" /> <span style={{ color: 'orange' }}>FASION FRANZY</span></h1>
        </div>
    );
};

export default Logo;