'use client';

import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react';
import BuildContainer from '@components/Containers/BuildContainer';

const MyBuilds = () => {
    const {data:session} = useSession();
    const email = session?.user.email;
    const [myBuilds, setMyBuilds] = useState([]);
    const [loading, setloading] = useState(true)


    // Fetch all the user's builds:
    useEffect(() => {
        const fetchMyBuilds = async () => {
            try {
                const response = await fetch(`/api/users/${email}/builds`);
                const data = await response.json();
                setMyBuilds(data);
                setloading(false);
            } catch(error) {
                console.log(error);
                setloading(false);
            } finally {
            }
            
        }
        fetchMyBuilds();
    }, [email]); // Builds are in myBuilds

    if(loading) {
        return(
            <div className="heading text-center m-36">Loading your reviews...</div>
        )
    }
    return (
        <div>
            <div className='text-center mt-10 mb-5 text-2xl font-extrabold text-text-white'>
                My Builds
            </div>
            <div className='flex flex-col items-center gap-10'>
                {myBuilds.map((build) => {
                    return(
                        <BuildContainer build={build} />
                    )
                })}
            </div>
        </div>
    )
}

export default MyBuilds;