'use client'
import Image from "next/image";

const ProductContainer = ({ children, product, btnaction, btnactionfunc }) => {
    return (
        <div className='flex flex-col gap-2 bg-box-gray w-[40%] h-[40%] max-h-240 max-w-96 overflow-hidden rounded-xl
                    shadow-xl hover:bg-background-black hover:text-text-white hover:rounded-xl'>
            <div className="flex place-self-start overflow-hidden object-fill">
                <Image sizes="(max-width: 384px) 100vw" width={500} height={500} className="flex place-self-start" src={product.imageLink}/>
            </div>
            <div className=" flex flex-col mt-2 mb-2 justify-center items-center">
                <h1>{product.name}</h1>
            </div>
            <div className="flex flex-row mb-4 justify-around items-center">
                {
                    btnaction ? 
                        <button 
                            className="delete_button button bg-button-blue ml-1 mt-1 hover:bg-button-blue-hover rounded-xl p-2 text-base" 
                            onClick={() => {
                                btnactionfunc(product);
                            }}>
                                {btnaction}
                        </button> : 
                    null}
                    <button className="fancy_button ml-2 mr-2 place-self-center"><a target="_blank" href={product.productLink}>Buy</a></button>
            </div>
            {children}
        </div>
    )
}

export default ProductContainer;