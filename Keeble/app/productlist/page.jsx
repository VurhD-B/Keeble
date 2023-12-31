'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ProductContainer from "@components/Containers/ProductContainer";

const ProductList = () => {

    const [products, setProducts] = useState([]);

     // Fetching the products from DB:
    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('/api/products');
            const data = await response.json();
            setProducts(data);

        }
        fetchProducts();

    }, []); // The products should be in the products variable

    // Implementing the search filter
    const [searchQuery, setSearchQuery] = useState('');

    const filteredProducts = searchQuery.trim()
    ? products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    ) : products;

    const handleInputChange = (e) => {
        setSearchQuery(e.target.value);
    }

    return (
        <div className="flex flex-col justify-center items-center">
            
            {/* Search Bar */}
            <div className="flex items-center bg-text-white rounded-lg shadow-md p-2 mt-5">
                <input
                    type="text"
                    placeholder="Search for products..."
                    value={searchQuery}
                    className="flex-grow outline-none px-4 py-2 text-gray-700 w-96"
                    onChange={handleInputChange}
                />
                <button className="ml-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
                    Search
                </button>
            </div>

            {/* Products Grid */}
            <div className="flex flex-row flex-wrap justify-center my-10 mx-10 gap-5">
                {filteredProducts.map((product) => {
                    return (
                        <Link href={`/productlist/${product._id}`}>
                            <ProductContainer
                                product={product}
                            />
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default ProductList;