import { connectToDB } from "@utils/database";
import Product from "@models/product";

export const GET = async (request, { params }) => {
    try {   
        await connectToDB();
        const product = await Product.findById(params.productId);
        if(!product) {
            return new Response('Product not found', {status: 404});
        }
        return new Response(JSON.stringify(product, {status: 200}));
    } catch (error) {
        return new Response('Failed to get the product information', {status: 500})
    }
} 