'use client';
import Image from 'next/image'

const ProductInfoCard = ({product, reviewCount}) => {
    return (
        <div className='flex px-5 py-5 object-contain'>
            {/* Left Side of the Card */}
            <div className='flex flex-col justify-center gap-10 w-[50%]'>
                <Image src={product.imageLink} width={600} height={400} className='rounded-xl' />
                <button className='button w-[600px]'>Show Reviews [{reviewCount}]</button>
            </div>

            {/* Right Side of the Card */}
            <div className='w-[50%] flex flex-col items-center gap-10 my-24'>
                <h1 className='heading'>{product.name}</h1>
                <h1 className='text-2xl font-extrabold text-text-white'>${product.price}</h1>
                <div className='divider'></div>
                <p className='body_text'>{product.description}</p>
                <div className='divider'></div>
                <button className='fancy_button'>
                    <a href={product.productLink} target='_blank'> Purchase Product </a>
                </button>
            </div>
        </div>
    )
}

export default ProductInfoCard;