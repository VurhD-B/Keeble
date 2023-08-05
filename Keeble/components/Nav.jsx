'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';
import { usePathname } from 'next/navigation';


const Nav = () => {

    const { data: session } = useSession();
    const pathname = usePathname();

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

    // Dropdown for login and logout profile page:
    const [showDropDown, setshowDropDown] = useState(false)

    // Function to trigger dropdown:
    const toggleDropDown = () => {
        setshowDropDown((prev) => !prev);
    }

    return (
        <nav className='flex flex-row w-full justify-between bg-background-black-nav items-center py-2 px-2'>

            <div>
                <Link href="/">
                    <h1 className='head_text_lg'>KEEBLE</h1>
                </Link>
            </div>
            
            <div className='flex gap-20 justify-between'>
                <Link href="/productbuild">
                    <h2 className={`head_text_md ${pathname === '/productbuild' ? 'font-bold text-2xl' : 'font-normal text-xl'}`} >
                        Build
                    </h2>
                </Link>
                <Link href="/guide">
                    <h2 className={`head_text_md ${pathname === '/guide' ? 'font-bold text-2xl' : 'font-normal text-xl'}`} >
                        Guide
                    </h2>
                </Link>
                <Link href="/productlist">
                    <h2 className={`head_text_md ${pathname === '/productlist' ? 'font-bold text-2xl' : 'font-normal text-xl'}`} >
                        Products
                    </h2>
                </Link>
                <Link href="/posts">
                    <h2 className={`head_text_md ${pathname === '/posts' ? 'font-bold text-2xl' : 'font-normal text-xl'}`} >
                        Posts
                    </h2>
                </Link>
            </div>

            {/* The sign in feature UI */ }
            {session?.user ? /* If user is logged in (view) */
            (
                <div className='flex flex-row justify-right relative' onClick={toggleDropDown}>
                        <Image 
                            src={session?.user.image} 
                            alt='profile-image' 
                            width={45} 
                            height={35} 
                            className='ml-2 rounded-full cursor-pointer'
                        />
                        {showDropDown && (
                            <div className='dropdown_login'>
                                <button type="button" className="button" onClick={signOut}>
                                    Sign Out
                                </button>
                                <Link href="/profile">
                                    <h1 className='head_text_md'>My Profile</h1>
                                </Link>
                            </div>
                        )}
                </div>
            ): /* If user is not logged in (view) */(
                <>
                <div className='flex flex-row relative' onClick={toggleDropDown}>
                    <Image 
                        src="/profile_icon.png" 
                        alt='profile-image' 
                        width={45} 
                        height={35} 
                        className='ml-2 rounded-full cursor-pointer'
                    />
                    {showDropDown && (
                        <div className='dropdown_login'>
                            {providers && Object.values(providers).map((provider) => (
                                <button 
                                    type="button" 
                                    key={provider.name} 
                                    onClick={() => {
                                        signIn(provider.id);
                                        }}
                                    className="button">
                                    Sign In
                                </button>
                            ))}
                        </div>
                    )}
                </div>
                </>
            )}
            {/* End of Sign In Feature UI */}

        </nav>
    )
}

export default Nav;