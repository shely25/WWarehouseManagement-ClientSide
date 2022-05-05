import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Products.css'

const Products = (props) => {
    const { _id, name, image, description, price, quantity, supplier_name, details } = props.product
    const navigate = useNavigate();
    return (
        <div className='card'>
            <img src={image} alt="" />
            <h4 className='text-center mt-2'>{name}</h4>
            <p><span className='forBold'>Price: $ </span>{price}</p>
            <p><span className='forBold'>Quantity : </span>{quantity}</p>
            <p><span className='forBold'>Supplier Name : </span>{supplier_name}</p>
            <p>{description}</p>
            <Button className='w-75 mx-auto' onClick={() => navigate(`/inventory/${_id}`)}>Manage Products</Button>
        </div >
    );
};

export default Products;