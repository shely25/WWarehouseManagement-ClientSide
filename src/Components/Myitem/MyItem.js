import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyItem = () => {
    const [items, setItems] = useState([]);
    const [user] = useAuthState(auth)
    const url = 'http://localhost:5000/myitem?' + new URLSearchParams({
        email: user.email
    }).toString()
    useEffect(() => {
        fetch(url, {
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure??want to delete');
        if (proceed) {
            const url = `http://localhost:5000/myitem/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(response => response.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        console.log('Success:', data);
                    }

                })
            window.location.reload()

        }
    }
    return (
        <div>
            {
                items.map(item => <div className='table'>
                    <h4 className='text-center mt-2 text-center'>{item.name}</h4>
                    <div>
                        <p><span>Price: $ </span>{item.price}</p>
                        <p><span>Quantity : </span>{item.quantity}</p>
                        <p><span>Supplier Name : </span>{item.supplier_name}</p>
                        <p>{item.description}</p>
                    </div>
                    <div className='d-flex align-items-center delete-button'> <button onClick={() => handleDelete(item._id)} className='btn btn-danger w-75 mx-auto'>Delete Item</button></div>
                </div>)
            }
        </div>
    );
};

export default MyItem;