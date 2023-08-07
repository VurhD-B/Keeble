'use client';

import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { signOut, signIn, getProviders } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Profile = () => {
    const { data:session } = useSession();
    const router = useRouter();

    const [providers, setProviders] = useState(null);

    useEffect(() => {
        (async () => {
            const response = await getProviders();
            setProviders(response);
        })
        // Call the function to getProviders
        ();
    }, [])

    const handleSignOut = () => {
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
                <Link href="/profile/reviews">
                    <button className="button">My Reviews</button>
                </Link>
                <Link href="/profile/builds">
                    <button className="button">My Builds</button>
                </Link>
            </div>
            <div className="text-center mt-10">
                {session ? (
                    <button className="fancy_button" onClick={signOut}>Sign out</button>
                    ) : 
                    (
                        <div>
                            {providers && Object.values(providers).map((provider) => (
                                <button 
                                    type="button" 
                                    key={provider.name} 
                                    onClick={() => {
                                        signIn(provider.id);
                                        }}
                                    className="fancy_button">
                                    Sign In
                                </button>
                            ))}
                        </div>
                )}
            </div>
        </div>
    )
}

export default Profile;