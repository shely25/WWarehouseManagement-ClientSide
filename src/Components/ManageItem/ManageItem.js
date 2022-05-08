import React, { useEffect, useState } from 'react';
import useInventory from '../../hooks/useInventory';
import ProductsTable from './ProductsTable';
import './ManageItem.css'
import { Link } from 'react-router-dom';

const ManageItem = () => {
    const [products, setProducts] = useInventory()
    // const [myitem, setMyitem] = useState([])

    // useEffect(() => {
    //     fetch('http://localhost:5000/myitem?{}')
    //         .then(res => res.json)
    //         .then(data => setMyitem(data))
    // }, [])
    // console.log(myitem)
    // const allitems = [...products, ...myitem]
    return (
        <div>
            <h1 className='text-center my-5 text-info'>Products</h1>

            {
                products.map(productTable => <ProductsTable key={productTable._id} productTable={productTable}></ProductsTable>)
            }
            <div className='d-flex justify-content-center my-5'>
                <Link to='/addnewitem' className='btn btn-info w-25 '>Add New Item</Link>
            </div>
        </div>
    );
};

export default ManageItem;