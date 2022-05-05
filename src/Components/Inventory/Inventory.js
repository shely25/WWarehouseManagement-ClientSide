import Products from './Products/Products';
import './Inventory.css'
import useInventory from '../../hooks/useInventory';

const Inventory = () => {
    const [products, setProducts] = useInventory();
    return (
        <div id='inventory'>
            <h1 className='text-center mt-5' style={{ color: 'orange' }}>Inventory</h1>
            <div className='cards'>
                {
                    products.slice(0, 6).map(product => <Products key={product._id} product={product}></Products>)
                }
            </div>
        </div>
    );
};

export default Inventory;