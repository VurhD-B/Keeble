'use client';

import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";

const Profile = () => {
    const { data:session } = useSession();
    const router = useRouter();
    
    // Go back to home page if not logged in: 
    if(!session) {  
        router.push("/");
    }
    return (
        <div className=" w-[50%] my-24 bg-grid-black mx-auto rounded-xl py-10 shadow-xl">
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
                <h1 className="heading">{session?.user.name}</h1>
            </div>
            <div className="flex justify-center align-center gap-3">
                <Link href="/profile/posts">
                    <button className="button">My Posts</button>
                </Link>
                <Link href="/profile/reviews">
                    <button className="button">My Reviews</button>
                </Link>
                <Link href="/profile/builds">
                    <button className="button">My Builds</button>
                </Link>
            </div>
            <div className="text-center mt-10">
                <button className="fancy_button" onClick={signOut}>Sign out</button>
            </div>
        </div>
    )
}

export default Profile;