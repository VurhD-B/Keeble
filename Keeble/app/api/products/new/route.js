import { connectToDB } from "@utils/database";
import Product from "@models/product";

export const POST = async (req, ) => {
    // Get in all of the data from the API call
    const {name, description, price, categories, productLink, imageLink, review} = await req.json();

    try {
        await connectToDB();
        const newProduct = new Product({
            name, description, price, categories, productLink, imageLink, review
        })

        await newProduct.save();

        return new Response(JSON.stringify(newProduct, { status: 201 }))
    } catch(error) {
        return new Response("Failed to create a new Product", {status: 500})
    }
}