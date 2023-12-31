'use client';

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import ProductInfoCard from "@components/Cards/ProductInfoCard";

const ProductPage = ({ params }) => {
    const productId = params.productId;
    const { data:session } = useSession();

    const [product, setProduct] = useState([]);

    // Fetch the information about the (individual) product:
    useEffect( () => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`/api/products/${productId}`);
                const data = await response.json();
                setProduct(data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchProduct();
    }, [productId]);


    if(!product) {
        return (
            <div>Loading...</div>
        )
    } else return (
        <div className="w-[97%] h-full bg-background-gray mx-5 my-5 rounded-lg shadow-2xl">
            <ProductInfoCard product={product} />
        </div>
    )
}

export default ProductPage;