import { connectToDB } from "@utils/database";
import Post from "@models/post";
import { connect } from "mongoose";

export const GET = async (req, { params }) => {
    try {
        await connectToDB();

        const existingPost = await Post.findById(params.id).populate("creator");

        if (!existingPost) {
            return new Response('Failed to find post', {status: 404});
        }

        return new Response(JSON.stringify(existingPost), {status: 200});
    } catch (error) {
        return new Response('Internal Server error', {status: 500});
    }
}

export const PATCH = async (req, { params }) => {
    const {prompt, tag} = await req.json();

    try {   
        await connectToDB();

        const existingPost = await Post.findById(params.id);

        if (!existingPost) {
            return new Response('Failed to find post', {status: 404});
        }

        // Update prompt:
        existingPost.prompt = prompt;
        existingPost.tag = tag;

        await existingPost.save();
        return new Response('Successfully updated post', {status: 200});
    } catch (error) {
        return new Response('Failed to update post', {status: 500});
    }
}

export const DELETE = async (req, { params }) => {
    try {
        await connectToDB();
        await Post.findByIdAndRemove(params.id);
        return new Response('Sucessfully deleted post', {status : 200});
    } catch (error) {
        return new Response('Failed to delete post', {status: 500});
    }   
}