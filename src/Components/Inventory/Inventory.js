import React, { useEffect, useState } from 'react';
import Products from './Products/Products';
import './Inventory.css'

const Inventory = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/inventory')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div id='inventory'>
            <h1 className='text-center mt-5' style={{ color: 'orange' }}>Inventory</h1>
            <div className='cards'>
                {
                    products.map(product => <Products key={product._id} product={product}></Products>)
                }
            </div>
        </div>
    );
};

export default Inventory;