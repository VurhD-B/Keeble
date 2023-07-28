'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const ProductList = () => {

    const [products, setProducts] = useState([]);

     // Fetching the products from DB:
    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('/api/products');
            const data = await response.json();
            await console.log(data);
            setProducts(data);

        }
        fetchProducts();

    }, []); // The products should be in the products variable

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="text-2xl font-roboto font-bold my-5 mx-5">
                Products:
            </div>
            <div className="flex flex-row justify-center items-center mt-5">
                {products.map((product) => {
                    return (
                        <div className="flex-1 break-inside-avoid rounded-lg border border-gray-300 bg-white/20 bg-clip-padding p-6 pb-4 backdrop-blur-lg backdrop-filter md:w-[360px] w-full h-fit">
                            <div className="flex justify-between items-start gap-5">
                                <Link href={`/productlist/${product._id}`}>
                                    <Image src={product.imageLink} width={145} height={145} />
                                    <div className="flex-1 flex justify-start items-center gap-3 cursor-pointer">
                                        <div className="flex flex-col">
                                            <h3 className="font-roboto text-sm">
                                                {product.name}
                                            </h3>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <p className="my-4 font-roboto text-sm">{product.description}</p>
                            <p className="font-roboto text-sm text-mulled-wine cursor-pointer">
                                {product.price}
                            </p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ProductList;