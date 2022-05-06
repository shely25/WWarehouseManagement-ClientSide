import { queryAllByAttribute } from '@testing-library/react';
import React, { useState } from 'react';

const AddNewItem = () => {
    //const [item, setItem] = useState({});
    const handleNewItem = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const price = event.target.price.value;
        const quantity = event.target.quantity.value;
        const supplier_name = event.target.supplier_name.value;
        const description = event.target.description.value;
        const image = event.target.image.value;
        const item = { name, price, quantity, supplier_name, description, image }
        console.log(item)
        fetch('http://localhost:5000/inventory', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(item),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                alert("New User added successfully")
                event.target.reset()
            })
    }

    return (
        <div>
            <h1 className='text-center text-info my-5'>Add New Item</h1>
            <form onSubmit={handleNewItem}>
                <input type='text' className='mb-3 d-block mx-auto w-50' name='name' style={{ height: '35px' }} placeholder='Product Name'></input>
                <input type='text' className='mb-3 d-block mx-auto w-50' name='price' style={{ height: '35px' }} placeholder='Price'></input>
                <input type='text' className='mb-3 d-block mx-auto w-50' name='quantity' style={{ height: '35px' }} placeholder='Quantity'></input>
                <input type='text' className='mb-3 d-block mx-auto w-50' name='supplier_name' style={{ height: '35px' }} placeholder='Supplier Name'></input>
                <input type='text' className='mb-3 d-block mx-auto w-50' name='description' style={{ height: '35px' }} placeholder='Description'></input>
                <input type="text" className='mb-3 d-block mx-auto w-50' name='image' style={{ height: '35px' }} placeholder='image url' />
                <input type="submit" className='mb-3 d-block mx-auto w-50 btn-info' value='Add Item' />
            </form>
        </div>
    );
};

export default AddNewItem;