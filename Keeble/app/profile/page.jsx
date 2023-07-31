'use client';

import { useSession } from "next-auth/react";
import Image from "next/image";

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
                <button className="login_btn shadow-2xl">My Posts</button>
                <button className="login_btn shadow-2xl">My Reviews</button>
                <button className="login_btn shadow-2xl">My Builds</button>
            </div>
        </div>
    )
}

export default Profile;