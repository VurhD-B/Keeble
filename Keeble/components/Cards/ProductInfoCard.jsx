'use client';
import Image from 'next/image'
import { use, useEffect, useState } from 'react';
import ReviewContainer from '@components/Containers/ReviewContainer';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import Carousel from '@components/carousel';

const ProductInfoCard = ({ product }) => {
    const { data: session } = useSession();
    const [reviews, setReviews] = useState([]);
    let useeffectstate = false;

    // Fetch the reviews for this particular product:
    useEffect(() => {
        const fetchProductReviews = async () => {
            const response = await fetch(`/api/reviews/${product._id}`);
            const data = await response.json();
            setReviews(data);
            useeffectstate = true;
        }
        fetchProductReviews();
        
    }, [product]);

    return (
        <div className='flex px-5 py-5 '>
            {/* Left Side of the Card */}
            <div className='flex flex-col justify-center gap-10 w-[50%] ml-10'>
                <Image src={product.imageLink} width={600} height={400} className='rounded-xl' />
                <button className='button w-[600px]'>Total Reviews [{reviews.length}]</button>
            </div>

            {/* Right Side of the Card */}
            <div className='w-[55%] flex flex-col items-center gap-10 my-10 mr-10 overflow-y-hidden'>
                <h1 className='heading'>{product.name}</h1>
                <h1 className='text-2xl font-extrabold text-text-white'>${product.price}</h1>
                <div className='divider'></div>
                <p className='body_text'>{product.description}</p>
                <div className='divider'></div>
                <div className='flex gap-10'>
                    <button className='fancy_button'>
                        <a href={product.productLink} target='_blank'> Purchase Product </a>
                    </button>
                    {session?.user && (<Link href={`/productlist/${product._id}/Create_Review`}>
                        <button className='button rounded-md'>
                            Write a review
                        </button>
                    </Link>)}
                </div>
                {/* Review Cards */}
                <div className="mt-5 w-full gap-5 ">
                    <Carousel useeffectstate={product}>
                        {reviews.map((review, index) => {
                            return (
                                <div key={index} className="carousel-item text-center relative w-80 snap-start">
                                    <ReviewContainer  review={review} >

                                    </ReviewContainer>
                                </div>
                            )
                        })}
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default ProductInfoCard;