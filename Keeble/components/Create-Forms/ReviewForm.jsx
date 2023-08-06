import Link from "next/link"

const ReviewForm = ({ type, review, setReview, submitting, handleSubmit }) => {
    return (
        <div className="w-[50%] mx-10 my-5 bg-card-black px-10 py-10 rounded-xl shadow-2xl">
            <form onSubmit={handleSubmit} className="mt-5 w-full max-w-2xl flex flex-col gap-5">

                <label className="flex flex-col gap-2">
                    <span className="font-bold">Your Review:</span>
                    <textarea
                        value={review.text}
                        onChange={(e) => setReview({ ...review, text: e.target.value })}
                        placeholder="Enter the body of the review here..."
                        className="px-2 py-2 rounded-xl shadow-md"
                        required />
                </label>

                <label className="flex flex-col gap-2">
                    <span className="font-bold">Rating:</span>
                    <input
                        type="number"
                        value={review.rating}
                        onChange={(e) => setReview({ ...review, rating: e.target.value })}
                        placeholder="1 or 2 or 3..."
                        className="px-2 py-2 rounded-xl shadow-md"
                        required />
                </label>

                <div className="flex gap-4 justify-between mt-5">
                    <Link href="/productlist" className="button">
                        Cancel
                    </Link>
                    <button
                        type="submit"
                        disabled={submitting}
                        className="fancy_button">
                        {submitting ? `${type}...` : type}
                    </button>
                </div>
            </form>
        </div>

    )
}

export default ReviewForm