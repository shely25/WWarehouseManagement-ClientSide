import React from 'react';
import Inventory from '../Inventory/Inventory';
import Banner from './Banner/Banner';
import Logo from './Logo/Logo';

const Home = () => {
    return (
        <div>
            <Logo></Logo>
            <Banner></Banner>
            <Inventory></Inventory>
        </div>
    );
};

export default Home;