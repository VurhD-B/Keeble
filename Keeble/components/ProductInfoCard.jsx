'use client';
import Image from 'next/image'
import { useEffect, useState } from 'react';
import ReviewContainer from './ReviewContainer';

const ProductInfoCard = ({product}) => {

    const [reviews, setReviews] = useState([]);

    // Fetch the reviews for this particular product:
    useEffect(() => {
        const fetchProductReviews = async () => {
            const response = await fetch(`/api/reviews/${product._id}`);
            const data = await response.json();
            setReviews(data);
        }
        fetchProductReviews();
    },[product]);

    return (
        <div className='flex px-5 py-5 object-contain'>
            {/* Left Side of the Card */}
            <div className='flex flex-col justify-center gap-10 w-[50%] ml-10'>
                <Image src={product.imageLink} width={600} height={400} className='rounded-xl' />
                <button className='button w-[600px]'>Total Reviews [{reviews.length}]</button>
            </div>

            {/* Right Side of the Card */}
            <div className='w-[50%] flex flex-col items-center gap-10 my-10 mr-10'>
                <h1 className='heading'>{product.name}</h1>
                <h1 className='text-2xl font-extrabold text-text-white'>${product.price}</h1>
                <div className='divider'></div>
                <p className='body_text'>{product.description}</p>
                <div className='divider'></div>
                <div className='flex gap-10'>
                    <button className='fancy_button'>
                        <a href={product.productLink} target='_blank'> Purchase Product </a>
                    </button>
                    <button className='button rounded-md'>
                        Write a review
                    </button>
                </div>
                {/* Review Cards */}
                <div className='flex justify-center items-center gap-5 mt-5'>
                    {reviews.map((review) => {
                        return (
                            <ReviewContainer review={review} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default ProductInfoCard;