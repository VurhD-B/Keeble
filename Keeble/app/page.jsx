import Link from "next/link";


export default function Home() {
  return (
    <section className="flex justify-center items-center gap-4">
      <Link href="/build">
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
    </section>
  )
}
