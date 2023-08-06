'use client';

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import ReviewInfoContainer from "@components/ReviewInfoContainer";

const MyReviews = () => {
    const {data:session} = useSession();
    const email = session?.user.email;
    const [myReviews, setMyReviews] = useState([]);
    const [loading, setLoading] = useState(true)

    // Fetch all of the user's reviews:
    useEffect(() => {
        const fetchMyReviews = async () => {
            try {
                const response = await fetch(`/api/users/${email}/reviews`);
                const data = await response.json();
                setMyReviews(data);
                setLoading(false);
            } catch(error) {
                console.log("Error loading reviews");
                setLoading(false);
            }
            
        }
        fetchMyReviews();
    }, [email]); // Posts are stored in myPosts

    if(loading) {
        return(
            <div className="heading">Loading your reviews...</div>
        )
    }

    return (
        <div className="flex gap-5 my-10 mx-10 flex-wrap">
            {myReviews.map((review) => {
                return(
                    <ReviewInfoContainer review={review} />
                )
            })} 
        </div>
    )
}

export default MyReviews