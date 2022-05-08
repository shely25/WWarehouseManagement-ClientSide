import { useEffect, useState } from "react";

const useInventory = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://infinite-everglades-79804.herokuapp.com/inventory')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, products)
    return [products, setProducts];
}


export default useInventory;