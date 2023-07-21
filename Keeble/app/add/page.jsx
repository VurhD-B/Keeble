'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";

import Form from "@components/Form";

const Add = () => {
    const router = useRouter();
    const [submitting, setSubmitting] = useState(false);
    const [product, setProduct] = useState({
        name: '',
        description: '',
        price: 0,
        category: '',
        link: '',
        fileName: '',
    });

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
                    category: product.category,
                    link: product.link,
                    fileName: product.fileName
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
        <Form 
            type="Add"
            product={product}
            setProduct={setProduct}
            submitting={submitting}
            handleSubmit={addProduct}
        />
    )
}

export default Add;