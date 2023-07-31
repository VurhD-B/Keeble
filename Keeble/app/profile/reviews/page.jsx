'use client';

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

const MyReviews = () => {
    const {data:session} = useSession();
    const email = session?.user.email;
    const [myReviews, setMyReviews] = useState([]);

    // Fetch all of the user's reviews:
    useEffect(() => {
        const fetchMyReviews = async () => {
            const response = await fetch(`/api/user/${email}/reviews`);
            const data = response.json();
            setMyReviews(data);
        }
        fetchMyReviews();
    }, [email]); // Posts are stored in myPosts

    return (
        <div>

        </div>
    )
}

export default MyReviews