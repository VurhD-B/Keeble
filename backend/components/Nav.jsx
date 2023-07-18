'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';


const Nav = () => {

    const { data: session } = useSession();

    // Next Authentication -> Setting providers:
    const [providers, setProviders] = useState(null);

    useEffect(() => {
        (async () => {
            const response = await getProviders();
            setProviders(response);
        })
        // Call the function to getProviders
        ();
    }, [])

    return (
        <nav className='flex flex-row w-full justify-between pt-3 pl-3 pr-3'>

            <Link href="/">
                <h1 className='text-3xl font-roboto font-bold text-mulled-wine hover:text-black'>
                    KEEBLE
                </h1>
            </Link>

            {/* The sign in feature UI */ }
            {session?.user ? /* If user is logged in (view) */
            (
                <div className='flex flex-row justify-right'>
                    <button type="button" className=" login_btn " onClick={signOut}>
                        Sign Out
                    </button>
                    <Image src={session?.user.image} width={45} height={35} className='ml-2 rounded-full'/>
                </div>
            ): /* If user is not logged in (view) */(
                <>
                {providers && Object.values(providers).map((provider) => (
                    <button 
                        type="button" 
                        key={provider.name} 
                        onClick={() => {
                            signIn(provider.id);
                            }}
                        className="login_btn">
                        Sign In
                    </button>
                ))}
                </>
            )}
            {/* End of Sign In Feature UI */}

        </nav>
    )
}

export default Nav