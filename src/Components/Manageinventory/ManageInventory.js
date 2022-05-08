import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import useInventory from '../../hooks/useInventory';

const ManageInventory = () => {
    const [product, setProduct] = useState({})
    const param = useParams();
    const [products, setProducts] = useInventory()
    const url = `https://infinite-everglades-79804.herokuapp.com/inventory/${param.id}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))

    }, products)
    const { _id, name, image, description, price, supplier_name, details } = product
    let { quantity } = product
    const handleDelivered = () => {
        let updateQuantity;

        if (quantity > 0) {
            quantity--;
            updateQuantity = { quantity };
            console.log(updateQuantity)
        }
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updateQuantity),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })

    }

    const handleRestock = event => {
        event.preventDefault()
        let updateQuantity
        const number = event.target.restock.value
        console.log(number)
        quantity += parseInt(number)
        updateQuantity = { quantity }
        console.log(updateQuantity)
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updateQuantity),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                event.target.reset()
            })

    }
    return (

        <div>
            <div class="card mb-3 p-5">
                <img className='w-75' src={image} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h3 className="card-title text-center" style={{ color: 'orange' }}>{name}</h3>
                    <h5 className="card-title"> id: {_id}</h5>
                    <p><span className='fw-bold'>Price: $ </span>{price}</p>
                    <p><span className='fw-bold'>Quantity : </span>{quantity}</p>
                    <p><span className='fw-bold'>Supplier Name : </span>{supplier_name}</p>
                    <p>{description}</p>
                    <p className="card-text">{details}</p>
                    <div className='d-flex justify-content-between mt-5'>
                        <Button onClick={handleDelivered}>Delivered</Button>
                        <Link className='btn btn-primary' to='/ManageItem'>Manage Item</Link>

                    </div>
                    <form className='mt-5' onSubmit={handleRestock}>
                        <input type="number" name='restock' placeholder='Restock The Item' />
                        <input type="submit" className='btn-info' value='Add Item' />
                    </form>


                </div>
            </div>

        </div>
    );
};

export default ManageInventory;