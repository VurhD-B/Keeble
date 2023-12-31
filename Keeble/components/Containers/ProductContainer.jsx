'use client';

import Image from "next/image";

const ProductContainer = ({ product, btnaction, btnactionfunc }) => {
    return (
        <div className='flex flex-col gap-2 bg-box-gray w-60 h-48 max-h-60 max-w-72 overflow-hidden rounded-xl
                    shadow-xl hover:bg-background-black hover:text-text-white hover:rounded-3xl'>
            <div className="w-60 h-32 overflow-hidden">
                <img src={product.imageLink}/>
            </div>
            <div className="flex flex-col justify-center items-center">
                <h1>{product.name}</h1>
                <h1>{product.categories[0]}</h1>
            </div>
        </div>
    )
}

export default ProductContainer;