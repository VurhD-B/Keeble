'use client';
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

const MyPosts = () => {
    const {data:session} = useSession();
    const email = session?.user.email;
    const [myPosts, setMyPosts] = useState([]);

    // Fetch all the user's posts:
    useEffect(() => {
        const fetchMyPosts = async () => {
            const response = await fetch(`/api/users/${email}/posts`);
            const data = response.json();
            setMyPosts(data);
        }
        fetchMyPosts();
    }, [email]); // Posts are in myPosts

    return (
        <div>

        </div>
    )
}

export default MyPosts