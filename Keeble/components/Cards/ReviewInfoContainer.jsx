'use client';
import Image from 'next/image'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const ReviewInfoContainer = ({ review, handleEdit }) => {
    const router = useRouter();
    const {data:session} = useSession();
    const email =  session?.user.email;

    const handleDelete = async (reviewId) => {
        const hasConfirmed = confirm("Are you sure you want to delete this review");
        if(hasConfirmed) {
            try {
                await fetch(`/api/users/${email}/${reviewId}`, {
                    method: 'DELETE',
                });
                window.location.reload();
            } catch(error) {
                console.log(error);
            }
        }
    }


    return (
        <div className='bg-review-box-gray w-[45%] h-[300px] flex rounded-xl shadow-xl
                        hover:bg-grid-black px-5 py-5'>
            <div className='flex gap-5'>
                <Image src={review.product.imageLink} width={250} height={300} className='rounded-xl' />
            </div>
            <div className='flex flex-col px-5 gap-5 w-[50%]'>
                <h1 className='body_text'>{review.product.name}</h1>
                <p className='text-text-white font-normal'>{review.text}</p>
                <p className='text-text-white font-extrabold'>{review.rating} / 5</p>
                <div className='flex justify-between mt-5 absolute top-80 gap-10'>
                    <button className='fancy_button' onClick={() => handleEdit(review)}>
                        Edit
                    </button>
                    <button className='delete_button' onClick={() => handleDelete(review._id)}>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ReviewInfoContainer;