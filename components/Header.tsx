import Link from "next/link";

export const Header = () => {
  return (
    <header>
      <nav className="bg-amber-600 py-1 px-2 text-white">
        <Link className="py-4" href="/">Strona główna</Link>
        <Link href="/about"> O nas</Link>
      </nav>
    </header>
  )
}