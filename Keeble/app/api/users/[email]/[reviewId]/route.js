import { connectToDB } from "@utils/database";
import Review from "@models/review";

export const DELETE = async (req, {params}) => {
    try {
        await connectToDB();
        await Review.findByIdAndRemove(params.reviewId);
        return new Response('Review successfully deleted', {status: 200});
    } catch (error) {
        return new Response('Error deleting review', {status: 500});
    }
}