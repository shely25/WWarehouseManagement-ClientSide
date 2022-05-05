import React from 'react';
import { Button } from 'react-bootstrap';
import './Productstable.css'

const ProductsTable = (props) => {
    const { _id, name, image, description, price, quantity, supplier_name, details } = props.productTable
    return (
        <div className='table'>
            <h4 className='text-center mt-2 text-center'>{name}</h4>
            <div>
                <p><span>Price: $ </span>{price}</p>
                <p><span>Quantity : </span>{quantity}</p>
                <p><span>Supplier Name : </span>{supplier_name}</p>
                <p>{description}</p>
            </div>
            <div className='d-flex align-items-center w-50'> <button className='btn btn-danger w-75 mx-auto'>Delete Item</button></div>
        </div>
    );
};

export default ProductsTable;