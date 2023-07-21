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
          Please add products UwU
        </button>
      </Link>
      <Link href="/guide">
        <button className="customise_btn">
          Guide Page
        </button>
      </Link>
      <Link href="/test">
        <button className="customise_btn">
          Test Page
        </button>
      </Link>
      
    </section>
  )
}
