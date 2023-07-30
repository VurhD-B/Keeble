'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";

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
        <div className="mx-10 my-10 flex flex-col justify-center items-center gap-10">
            <div>
                <Image src={product.imageLink} alt="Product_Image" width={300} height={300} />
                <h1>{product.name} : </h1>
                <h3> {product.price} : </h3>
                <p> {product.description} : </p>
                <h4> {product.categories}</h4>
            </div>
            <div>
                {reviews.map((review) => {
                    return (
                        <div>
                            <Image 
                                src={review.user.image} 
                                alt="UserImage" 
                                width={50} 
                                height={50} 
                                className="rounded-full object-contain" 
                            />
                            <h1>{review.user.email}</h1>
                            <p className="mt-5 text-sm">{review.text}</p>
                            <p>{review.rating} out of 5</p>
                            <p className="mt-3"> Posted at: {review.createdAt}</p>
                            {session?.user.email === review.user.email ? (
                                <div>
                                    <Link href="/edit-review">
                                        <button className="login_btn mt-3">Edit</button>
                                    </Link>
                                </div>
                            ): (
                                <>
                                </>
                            )}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ProductPage;