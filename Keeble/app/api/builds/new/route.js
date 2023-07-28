import { connectToDB } from "@utils/database";
import Build from "@models/build";

export const POST = async (req) => {
    const {creator, parts} = await req.json();
    try {
        await connectToDB();
        const newBuild = new Build({
            creator: creator,
            parts: parts
        });
        await newBuild.save();
        return new Response(JSON.stringify(newBuild, {status: 201}));
    } catch(error) {
        return new Response('Failed to create build', {status: 500});
    }
}