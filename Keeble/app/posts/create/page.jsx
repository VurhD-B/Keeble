'use client';

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import PostForm from "@components/Create-Forms/PostForm";

const CreatePost = () => {
    const { data:session } = useSession();
    const router = useRouter();
    const [submitting, setSubmitting] = useState(false)
    const [post, setPost] = useState({
        prompt: '',
        tag: '',
    });

    const createPost = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        try {
            const response = await fetch('/api/posts/new',
            {
                method: 'POST',
                body: JSON.stringify({
                    prompt: post.prompt,
                    userId: session?.user.id,
                    tag: post.tag 
                })
            })
            if(response.ok) {
                router.push('/');
            }
        } catch(error) {
            console.log(error);
        } finally {
            setSubmitting(false);
        }
    }

    return (
        <PostForm
            type="Create"
            post={post}
            setPost={setPost}
            submitting={submitting}
            handleSubmit={createPost}
        />
    )
}

export default CreatePost;