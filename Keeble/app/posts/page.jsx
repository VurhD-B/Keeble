import Link from "next/link"

const Feed = () => {
    return (
        <div className="m-10">
            <Link href="/posts/create">
                <button className="customise_btn">
                    Create Post Page
                </button>
            </Link>
        </div>
    )
}

export default Feed;