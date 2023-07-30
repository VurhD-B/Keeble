'use client';

import { useEffect, useState } from "react";
import Link from "next/link";   
import Image from "next/image";
import { useSession } from "next-auth/react";

const Feed = () => {
    const { data:session } = useSession();

    // Fetching all the posts from API Endpoint
    const [allPosts, setallPosts] = useState([]);

    const fetchPosts = async () => {
        const response = await fetch("api/posts");
        const data = await response.json();
        setallPosts(data);
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <div>
            <Link href="posts/create">
                <button className="customise_btn">
                    Create Post Page
                </button>
            </Link>
            <div className="flex flex-col justify-center items-center font-roboto gap-4">
                {allPosts.map((post) => {
                    return(
                        <div className="flex-1 break-inside-avoid rounded-lg border border-gray-300 bg-white/20 bg-clip-padding p-6 pb-4 backdrop-blur-lg backdrop-filter md:w-[360px] w-full h-fit">
                            <div className="flex justify-between items-start gap-5">
                                <div className="flex-1 flex justify-start items-center gap-3 cursor-pointer">
                                <Image
                                        src={post.creator.image}
                                        width={40}
                                        height={40}
                                        className="rounded-full object-contain"
                                />
                                    <div className="flex flex-col">
                                        <h3 className="font-roboto text-sm">
                                            {post.creator.username}
                                        </h3>
                                        <p className="font-roboto text-sm">
                                            {post.creator.email}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <p className="my-4 font-roboto text-sm">{post.prompt}</p>
                            <p className="font-roboto text-sm text-mulled-wine cursor-pointer">
                                {post.tag}
                            </p>
                            {session?.user.email === post.creator.email ? (
                                <div>
                                    <Link href={`/posts/edit/${post._id}`}>
                                        <button className="login_btn mt-4">Edit Post</button>
                                    </Link>
                                </div>
                            ):(
                                <>
                                </>
                            )}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Feed;