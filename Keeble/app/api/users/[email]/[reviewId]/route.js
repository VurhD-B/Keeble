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

export const PATCH = async (req, {params}) => {
    const {text, rating} = await req.json();
    try {
        await connectToDB();
        // Find specific review:
        const existingReview = await Review.findById(params.reviewId);
        if(!existingReview) {
            return new Response('Failed to find review', {status: 404});
        }

        existingReview.text = text;
        existingReview.rating = rating;
        await existingReview.save();
        return new Response('Successfully updated review', {status: 200});
    } catch (error) {
        return new Response('Failed to edit and update review', {status: 500});
    }
}