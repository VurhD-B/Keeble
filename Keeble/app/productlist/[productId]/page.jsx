'use client';

import { useState, useEffect } from "react";
import Image from "next/image";

const ProductPage = ({ params }) => {
    const productId = params.productId;

    const [product, setProduct] = useState([]);

    useEffect( () => {
        const fetchProduct = async () => {
            const response = await fetch(`/api/products/${productId}`);
            const data = await response.json();
            setProduct(data);
        }
        fetchProduct();
    }, [productId]);

    if(!product) {
        return (
            <div>Loading...</div>
        )
    }

    return (
        <div className="mx-10 my-10 flex justify-center items-center">
            <div>
                <Image src={product.imageLink} alt="Product_Image" width={300} height={300} />
                <h1>{product.name} : </h1>
                <h3> {product.price} : </h3>
                <p> {product.description} : </p>
                <h4> {product.categories}</h4>
            </div>
        </div>
    )
}

export default ProductPage;