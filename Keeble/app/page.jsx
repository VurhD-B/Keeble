'use client';
import { useSession } from "next-auth/react";
import Link from "next/link";


export default function Home() {
  const { data:session } = useSession();
  return (
    <section className="flex justify-center items-center gap-4 py-10">
      <Link href="/add">
        <button className="button">
          Add Products
        </button>
      </Link>
    </section>
  )
}
