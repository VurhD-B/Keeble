'use client';

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import ReviewInfoContainer from "@components/ReviewInfoContainer";
import ReviewForm from "@components/Forms/ReviewForm";
import { useRouter } from "next/navigation";

const MyReviews = () => {
    const router = useRouter();
    const {data:session} = useSession();
    const email = session?.user.email;
    const [myReviews, setMyReviews] = useState([]);
    const [loading, setLoading] = useState(true)
    const [editting, setEditting] = useState(false);
    const [editreview, setEditReview] = useState({});
    const [submitting, setSubmitting] = useState(false);

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
            <div className="heading text-center m-36">Loading your reviews...</div>
        )
    }

    // Handle the edit button being clicked:
    const handleEdit = async (review) => {
        setEditting(true);
        setEditReview({text:review.text, rating:review.rating});

    }

    const submitEdit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        try {
            const response = await fetch(`/api/users/${email}/${review._id}`, {
                method: 'PATCH',
                body: JSON.stringify({
                    text: review.text,
                    rating: review.rating
                })
            });
            if(response.ok) {
                windows.location.reload();
            }
        } catch (error) {
            console.log(error);
        } finally {
            setEditting(false);
            setSubmitting(false);
        }
    }

    return (
        <div>
            <div className="flex gap-10 my-10 mx-10 flex-wrap justify-center">
                {myReviews.map((review) => {
                    return(
                        <ReviewInfoContainer review={review} handleEdit={() => handleEdit(review)} />
                    )
                })} 
            </div>
            {editting && (
                <div className="fixed z-50 top-0 left-0 w-full h-full flex items-center justify-center"> 
                    <ReviewForm
                        type="Edit"
                        review={editreview}
                        setReview={setEditReview}
                        submitting={submitting}
                        handleSubmit={submitEdit}
                    />
                </div>
            )}
        </div>
    )
}

export default MyReviews