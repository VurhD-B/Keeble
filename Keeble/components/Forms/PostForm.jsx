import Link from "next/link";

const PostForm = ({type, post, setPost, submitting, handleSubmit}) => {
    return (
        <section className="w-[50%] flex-start flex-col mx-8 my-4 bg-carolina-blue rounded-xl px-10 py-6">
            <h1 className="bold text-left">
                <span className="font-roboto-800 font-extrabold text-3xl">{type} Post</span>
            </h1>
            <p className="text-left max-w-md text-black mt-3">
                Create and share reviews, tips or recommendations through posts for other users.
            </p>
            <form onSubmit={handleSubmit} className="mt-10 w-full max-w-2xl flex flex-col gap-5">

            <label className="flex flex-col gap-2">
                    <span className="font-bold">Your Post:</span>
                    <textarea 
                        value={post.prompt} 
                        onChange={(e) => setPost({...post, prompt: e.target.value})} 
                        placeholder="Enter the body of the post here..."
                        className="px-2 py-2 rounded-xl shadow-md"
                        required/>
            </label>

            <label className="flex flex-col gap-2">
                    <span className="font-bold">Post Tags:</span>
                    <input 
                        value={post.tag} 
                        onChange={(e) => setPost({...post, tag: e.target.value})} 
                        placeholder="#keyboard101..."
                        className="px-2 py-2 rounded-xl shadow-md"
                        required/>
            </label>

            <div className="flex gap-4 justify-between mt-5">
                    <Link href="/" className="text-lg bg-mulled-wine text-titan-white rounded-xl px-2 py-1">
                        Cancel
                    </Link>
                    <button
                        type="submit"
                        disabled={submitting}
                        className="text-lg bg-mulled-wine text-titan-white rounded-xl px-2 py-1">
                            {submitting ? `${type}...` : type}
                    </button>
                </div>
            </form>
        </section>
    )
}

export default PostForm;