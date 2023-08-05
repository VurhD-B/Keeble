'use client';
import { useSession } from "next-auth/react";
import Link from "next/link";


export default function Home() {
  const { data:session } = useSession();
  return (
    <section className="flex justify-center items-center gap-4 py-10">
      <Link href="/productbuild">
        <button className="button ">
          Customise your own keyboard!
        </button>
      </Link>
      <Link href="/add">
        <button className="button">
          Add Products
        </button>
      </Link>
      <Link href="/guide">
        <button className="button">
          Guide Page
        </button>
      </Link>
      <Link href="/productlist">
        <button className="button">
          Product List Page
        </button>
      </Link>
      {session?.user ?
      (
        <Link href="/posts">
          <button className="button">
            Posts Page
          </button>
        </Link>
      ) : (
        <>
        </>
      )}
    </section>
  )
}
