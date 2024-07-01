// components/ProductList.js

import React, { useEffect, useState } from 'react';
import { getProducts } from '../services/ProductService';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fetch products from API
        getProducts().then(response => {
            setProducts(response.data);
        });
    }, []);

    return (
        <div>
            <h1>Product List</h1>
            <ul>
                {products.map(product => (
                    <li key={product.id}>{product.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
