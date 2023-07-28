'use client';
import { useSession } from "next-auth/react";
import Link from "next/link";


export default function Home() {
  const { data:session } = useSession();
  return (
    <section className="flex justify-center items-center gap-4">
      <Link href="/productbuild">
        <button className="customise_btn ">
          Customise your own keyboard!
        </button>
      </Link>
      <Link href="/add">
        <button className="customise_btn">
          Add Products
        </button>
      </Link>
      <Link href="/guide">
        <button className="customise_btn">
          Guide Page
        </button>
      </Link>
      <Link href="/productlist">
        <button className="customise_btn">
          Product List Page
        </button>
      </Link>
      {session?.user ?
      (
        <Link href="/posts">
          <button className="customise_btn">
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
