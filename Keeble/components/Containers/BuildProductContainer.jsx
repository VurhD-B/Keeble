'use client';

const ProductContainer = ({ children, product, btnaction, btnactionfunc }) => {
    return (
        <div className='flex flex-col gap-2 bg-box-gray w-60 h-60 max-h-100 max-w-96 overflow-hidden rounded-xl
                    shadow-xl hover:bg-background-black hover:text-text-white hover:rounded-xl'>
            <div className="w-60 h-32 overflow-hidden place-self-center items-center">
                <img className="object-cover w-full h-full" src={product.imageLink}/>
            </div>
            <div className=" flex flex-col mt-2 justify-center items-center">
                <h1>{product.name}</h1>
            </div>
            <div className="flex flex-col mb-4 justify-center items-center">
                {
                    btnaction ? 
                        <button 
                            className="button bg-button-blue mt-8 hover:bg-button-blue-hover rounded-xl p-2 text-base" 
                            onClick={() => {
                                btnactionfunc(product);
                            }}>
                                {btnaction}
                        </button> : 
                    null}
            </div>
            {children}
        </div>
    )
}

export default ProductContainer;