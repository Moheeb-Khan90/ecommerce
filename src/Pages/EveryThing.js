import React, { useState, useEffect } from 'react';
import AllProduct from '../Components/EveryThing/AllProduct';

const EveryThing = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchProducts = async () => {
        try {
            const data = await fetch('https://dummyjson.com/products?skip=0&limit=100');
            const response = await data.json();
            setProducts(response.products);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <>
            {loading ? (
                <div className='h-[100vh] w-full flex justify-center align-middle my-6 capitalize'>
                   <span className='text-3xl text-orange-400'> loading...</span>
                </div>
            ) : products.length > 0 ? (
                <AllProduct products={products} />
            ) : (
                <div>No data available</div>
            )}
        </>
    );
};

export default EveryThing;
