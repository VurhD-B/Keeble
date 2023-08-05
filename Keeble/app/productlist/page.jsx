'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ProductContainer from "@components/ProductContainer";

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

    return (
        <div className="flex justify-center items-center">
            <div className="flex flex-row flex-wrap my-10 mx-10 gap-5">
                {products.map((product) => {
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