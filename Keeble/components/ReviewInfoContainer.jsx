'use client';
import Image from 'next/image'

const ReviewInfoContainer = ({ review }) => {
    return (
        <div className='bg-review-box-gray w-[45%] h-[300px] flex rounded-xl shadow-xl
                        hover:bg-grid-black px-5 py-5 '>
            <div className='flex gap-5'>
                <Image src={review.product.imageLink} width={250} height={300} className='rounded-xl' />
            </div>
            <div className='flex flex-col px-5 gap-5'>
                <h1 className='body_text'>{review.product.name}</h1>
                <p className='text-text-white'>{review.text}</p>
            </div>
        </div>
    )
}

export default ReviewInfoContainer;