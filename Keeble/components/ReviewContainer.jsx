'use client';
import Image from 'next/image'

const ReviewContainer = ({review}) => {
    return (
        <div className='w-[100%] bg-review-box-gray rounded-lg px-5 py-5 flex flex-col gap-3 object-contain overflow-hidden'>
            <div className='flex items-center gap-5'>
                <Image src={review.user.image} width={45} height={45} alt="profile-image" className='rounded-full'/>
                <h1 className='text-text-white'>{review.user.username}</h1>
            </div>
            <div className='flex flex-col gap-2'>
                <p className='text-text-white'>{review.text}</p>
                <p className='text-text-white font-extrabold'>{review.rating} / 5</p>
            </div>
        </div>
    )
}

export default ReviewContainer;