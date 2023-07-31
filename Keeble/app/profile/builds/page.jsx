'use client';

import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react';

const MyBuilds = () => {
    const {data:session} = useSession();
    const email = session?.user.email;
    const [myBuilds, setMyBuilds] = useState([]);


    // Fetch all the user's builds:
    useEffect(() => {
        const fetchMyBuilds = async () => {
            const response = await fetch(`/api/users/${email}/builds`);
            const data = await response.json();
            setMyBuilds(data);
        }
        fetchMyBuilds();
    }, [email]); // Builds are in myBuilds


    return (
        <div>
            <div className='text-center my-10 text-2xl font-extrabold'>
                My Builds
            </div>
            <div className='flex justify-center gap-3'>
            </div>
        </div>
    )
}

export default MyBuilds;