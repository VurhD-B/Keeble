import { connectToDB } from "@utils/database";
import Review from "@models/review";

export const GET = async(req,) => {
    try {
        await connectToDB();
        const reviews = await Review.find({});
        return new Response(JSON.stringify(reviews), {status: 200})
    } catch(error) {
        return new Response('Failed to load in reviews', {status: 500});
    }
}