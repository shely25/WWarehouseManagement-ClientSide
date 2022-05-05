import React from 'react';
import useInventory from '../../hooks/useInventory';
import ProductsTable from './ProductsTable';
import './ManageItem.css'

const ManageItem = () => {
    const [products, setproducts] = useInventory();
    return (
        <div>
            <h1 className='text-center my-5 text-info'>Products</h1>

            {
                products.map(productTable => <ProductsTable productTable={productTable}></ProductsTable>)
            }
        </div>
    );
};

export default ManageItem;