import { connectToDB } from "@utils/database";
import Product from "@models/product";
import Build from "@models/build";
import User from "@models/user";

export const GET = async (req, { params }) => {
    try {
        await connectToDB();
        const user = await User.findOne({email: params.email});
        const myBuilds = await Build.find({user: user._id}).populate("parts");
        return new Response(JSON.stringify(myBuilds), {status: 200});
    } catch (error) {
        return new Response('Failed to fetch your builds', {status: 500});
    }
}