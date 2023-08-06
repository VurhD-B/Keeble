'use client';

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import PostForm from "@components/Create-Forms/PostForm";

const EditPost = ({ params }) => {    
    const router = useRouter();
    const postId = params.postId;

    const [post, setPost] = useState({promp: "", tag: ""});
    const [submitting, setSubmitting] = useState(false);

    // Get the current post details from API
    useEffect(() => {
        const fetchPostInfo = async () => {
            const response = await fetch(`/api/posts/${postId}`);
            const data = await response.json();

            setPost({
                prompt: data.prompt,
                tag: data.tag,
            });
        }
        if (postId) fetchPostInfo();
    }, [postId]);

    // Function to handle the PATCH request to edit the post:
    const updatePost = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        if(!postId) return alert("Missing Post ID");

        try {
            const response = await fetch(`/api/posts/${postId}`, {
                method: 'PATCH',
                body: JSON.stringify({
                    prompt: post.prompt,
                    tag: post.tag,
                })
            });
            if (response.ok) {
                router.push("/posts");
            }
        } catch (error) {
            console.log(error);
        } finally {
            setSubmitting(false);
        }
    }

    return (
        <PostForm 
            type="Edit"
            post={post}
            setPost={setPost}
            submitting={submitting}
            handleSubmit={updatePost}
        />
    )
}

export default EditPost