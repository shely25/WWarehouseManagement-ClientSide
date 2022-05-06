import './Productstable.css'

const ProductsTable = (props) => {
    const { _id, name, image, description, price, quantity, supplier_name, details } = props.productTable
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure??want to delete');
        if (proceed) {
            const url = `http://localhost:5000/inventory/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(response => response.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        console.log('Success:', data);
                    }

                })

        }
    }
    return (
        <div className='table'>
            <h4 className='text-center mt-2 text-center'>{name}</h4>
            <div>
                <p><span>Price: $ </span>{price}</p>
                <p><span>Quantity : </span>{quantity}</p>
                <p><span>Supplier Name : </span>{supplier_name}</p>
                <p>{description}</p>
            </div>
            <div className='d-flex align-items-center w-50'> <button onClick={() => handleDelete(_id)} className='btn btn-danger w-75 mx-auto'>Delete Item</button></div>
        </div>
    );
};

export default ProductsTable;