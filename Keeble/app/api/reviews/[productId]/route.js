import { connectToDB } from "@utils/database";
import Review from "@models/review";

export const GET = async (req, { params }) => {
    try {
        await connectToDB();
        const reviews = await Review.find({product: params.productId}).populate('user');
        return new Response(JSON.stringify(reviews, {status: 200}));
    } catch (error) {
        return new Response('Failed to fetch reviews', {status: 500});
    }
}