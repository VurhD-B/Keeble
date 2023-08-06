'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";
import ProductInfoCard from "@components/ProductInfoCard";

const ProductPage = ({ params }) => {
    const productId = params.productId;
    const { data:session } = useSession();

    const [product, setProduct] = useState([]);
    const [reviews, setReviews] = useState([]);

    // Fetch the information about the (individual) product:
    useEffect( () => {
        const fetchProduct = async () => {
            const response = await fetch(`/api/products/${productId}`);
            const data = await response.json();
            setProduct(data);
        }
        fetchProduct();
    }, [productId]);

    // Fetch the reviews for this particular product:
    useEffect(() => {
        const fetchProductReviews = async () => {
            const response = await fetch(`/api/reviews/${productId}`);
            const data = await response.json();
            setReviews(data);
        }
        fetchProductReviews();
    },[]);

    if(!product) {
        return (
            <div>Loading...</div>
        )
    }

    // Function to handle the editting of reviews:


    return (
        <div className="w-[90%] h-full bg-background-gray mx-5 my-5">
            <ProductInfoCard product={product} reviewCount={reviews.length} />
        </div>
    )
}

export default ProductPage;