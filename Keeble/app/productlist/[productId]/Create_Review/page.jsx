'use client';
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import ReviewForm from '@components/Forms/ReviewForm';

const CreateReviewPage = ({params}) => {
    const {data:session} = useSession();
    const router = useRouter();
    const [submitting, setSubmitting] = useState(false)
    const [review, setReview] = useState({
        text: '',
        rating: 0,
    });

    const createReview = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        // Create Review using the API:
        try {
            const response = await fetch("/api/reviews/new",
            {
                method: 'POST',
                body: JSON.stringify({
                    user: session?.user.id,
                    product: params.productId,
                    text: review.text,
                    rating: review.rating
                })
            })
            if(response.ok) {
                router.push(`/productlist/${params.productId}`)
            }
        } catch (error) {
            console.log(error);
        } finally {
            setSubmitting(false);
        }
    }
    return (
        <ReviewForm 
            type="Create"
            review={review}
            setReview={setReview}
            submitting={submitting}
            handleSubmit={createReview}
        />
    )
}

export default CreateReviewPage;