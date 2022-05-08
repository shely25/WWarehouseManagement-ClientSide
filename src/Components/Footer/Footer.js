import React from 'react';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <div>
            <p className='p-3 mt-5 mb-0 bg-dark text-light text-center'>Copyright &copy;{year} </p>
        </div>
    );
};

export default Footer;