import { connectToDB } from "@utils/database";
import Build from "@models/build";
import User from "@models/user";

export const POST = async (req) => {
    const {name, email, parts} = await req.json();
    try {
        await connectToDB();
        const user = User.findOne({email:email});
        const newBuild = new Build({
            name: name,
            creator: user._id,
            parts: parts,
        });
        await newBuild.save();
        return new Response(JSON.stringify(newBuild, {status: 201}));
    } catch(error) {
        return new Response('Failed to create build', {status: 500});
    }
}