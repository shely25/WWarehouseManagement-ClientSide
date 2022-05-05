import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const ManageInventory = () => {
    const [product, setProduct] = useState({})
    const param = useParams();
    console.log(param)
    useEffect(() => {
        const url = `http://localhost:5000/inventory/${param.id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))

    }, [])
    const { _id, name, image, description, price, quantity, supplier_name, details } = product
    return (

        <div>
            <div class="card mb-3 p-5">
                <img className='w-75' src={image} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h3 className="card-title text-center" style={{ color: 'orange' }}>{name}</h3>
                    <h5 className="card-title"> id: {_id}</h5>
                    <p><span className='forBold'>Price: $ </span>{price}</p>
                    <p><span className='forBold'>Quantity : </span>{quantity}</p>
                    <p><span className='forBold'>Supplier Name : </span>{supplier_name}</p>
                    <p>{description}</p>
                    <p className="card-text">{details}</p>
                    <div className='d-flex justify-content-between mt-5'>
                        <Button>Delivered</Button>
                        <Link className='btn btn-primary' to='/ManageItem'>Mange Item</Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ManageInventory;