import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
    return (

        <div>
            <h1>Manage Inventory</h1>
            {product.name
            }

        </div>
    );
};

export default ManageInventory;