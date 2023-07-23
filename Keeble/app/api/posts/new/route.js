import { connectToDB } from "@utils/database";
import Post from "@models/post";

export const POST = async (req) => {
    const { userId, prompt, tag } = await req.json();

    try {
        await connectToDB();
        const newPost = new Post({
            creator: userId, 
            prompt: prompt, 
            tag: tag
        })

        await newPost.save()
        return new Response(JSON.stringify(newPost, { status: 201 }));
    } catch(error) {
        return new Response('There was an error creating the post', { status: 500 });
    } 
}