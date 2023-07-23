import Link from "next/link"
const Feed = () => {
    return (
        <div>
            <Link href="posts/create">
                <button className="customise_btn">
                    Create Post Page
                </button>
            </Link>
        </div>
    )
}

export default Feed;