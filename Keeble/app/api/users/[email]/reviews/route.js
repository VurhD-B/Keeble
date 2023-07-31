import { connectToDB } from "@utils/database";
import Review from "@models/review";
import User from "@models/user";

export const GET = async (req, { params }) => {
    try {
        await connectToDB();
        const user = await User.findOne({email: params.email});
        const myReviews = await Review.find({user: user._id}).populate("user");
        return new Response(JSON.stringify(myReviews), {status: 200});
    } catch (error) {
        return new Response('Failed to get your reviews', {status: 500});
    }
}