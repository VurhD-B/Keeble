'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";

import ProductForm from "@components/Forms/ProductForm";

const Add = () => {
    const router = useRouter();
    const [submitting, setSubmitting] = useState(false);
    const [product, setProduct] = useState({
        name: '',
        description: '',
        price: 0,
        category1: '',
        category2: '',
        productLink: '',
        imageLink: '',
    });
    const [categorySelected, setcategorySelected] = useState([]);

    const addProduct = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        // fetch api:
        try {
            const response = await fetch('api/products/new', {
                method:'POST',
                body: JSON.stringify({
                    name: product.name,
                    description: product.description,
                    price: product.price,
                    category1: product.category1,
                    category2: product.category2,
                    productLink: product.productLink,
                    imageLink: product.imageLink,
                })
            })
            if(response.ok){
                router.push("/");
            }
        } catch(error) {
            console.log(error);
        } finally {
            setSubmitting(false);
        }

    }

    return (
        <ProductForm 
            type="Add"
            product={product}
            setProduct={setProduct}
            submitting={submitting}
            handleSubmit={addProduct}
            categorySelected={categorySelected}
            setcategorySelected={setcategorySelected}
        />
    )
}

export default Add;