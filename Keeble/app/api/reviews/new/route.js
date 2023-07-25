import { connectToDB } from "@utils/database";
import Review from "@models/review";

export const POST = async(req, res) => {

    // Get the data from JSON Stringify:
    const {user, product, text, rating, createdAt} = await req.json();

    try {
        await connectToDB();
        const newReview = await new Review({
            user, product, text, rating, createdAt
        });
        await newReview.save();
        return new Response(JSON.stringify(newReview), {status: 201});
    } catch(error) {
        return new Response('Failed to create a review', {status: 500});
    }
}