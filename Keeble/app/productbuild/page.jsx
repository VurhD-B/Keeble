'use client';
import { useState, useEffect } from "react";

const ProductBuild = () => {
    const [products, setProducts] = useState([]);

    // Fetching the products from DB:
    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('/api/products');
            const data = await response.json();
            setProducts(data);
        }
        fetchProducts();
    },[]); // The products should be in the products variable

    return (
        <div>
        </div>
    )
}

export default ProductBuild;