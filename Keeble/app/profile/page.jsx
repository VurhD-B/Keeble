'use client';

import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

const Profile = () => {
    const { data:session } = useSession();
    return (
        <div className="my-5">
            <div className="flex justify-center">
                <Image 
                    src={session?.user?.image}
                    alt="Profile-Picture"
                    width={300}
                    height={300}
                    className="rounded-full object-contain shadow-xl"
                />
            </div>
            <div className="text-center my-10 text-2xl font-extrabold">
                <h1>{session?.user.name}</h1>
            </div>
            <div className="flex justify-center align-center gap-3">
                <Link href="/profile/posts">
                    <button className="login_btn shadow-2xl">My Posts</button>
                </Link>
                <Link href="/profile/reviews">
                    <button className="login_btn shadow-2xl">My Reviews</button>
                </Link>
                <Link href="/profile/builds">
                    <button className="login_btn shadow-2xl">My Builds</button>
                </Link>
            </div>
        </div>
    )
}

export default Profile;