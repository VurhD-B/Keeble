import { connectToDB } from "@utils/database";
import Product from "@models/product";
import Build from "@models/build";

export const GET = async (req) => {
    try {
        await connectToDB();
        const builds = await Build.find({}).populate("parts");
        return new Response(JSON.stringify(builds), {status: 200});
    } catch (error) {
        return new Response('Failed to fetch the builds', {status: 500});
    }
    

}